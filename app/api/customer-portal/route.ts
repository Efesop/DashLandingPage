// Stripe Billing Portal for Dash Sync subscribers, by emailed link.
//
// Body: { email }. When that address belongs to a Stripe customer with a
// Dash Sync subscription, we email it a 30-minute link to
// /api/customer-portal/open, which opens the portal (cancel, switch plan,
// update card). The response is the same whether or not a link was sent, so
// the endpoint doesn't reveal who is a customer.
//
// This used to return the portal URL directly, which let anyone open anyone's
// billing portal from an email address, including LinkJolt customers, since
// the Stripe account is shared. Customers without a Dash subscription never
// get a link here.

import { NextRequest, NextResponse } from 'next/server';
import type Stripe from 'stripe';
import stripe from '../../../lib/stripe';
import { isDashSyncSubscription } from '../../../lib/dashProducts';
import { createPortalToken, PORTAL_LINK_TTL_MS } from '../../../lib/portalLink';
import { sendEmail } from '../../../lib/email';

export const dynamic = 'force-dynamic';

const SENT = {
  ok: true,
  message: "If that email has a Dash Sync subscription, we've sent it a link to manage it. Check your inbox.",
};

/** The site origin for the emailed link. Fixed in production so a forged Host header can't redirect the link. */
function siteOrigin(request: NextRequest): string {
  if (process.env.VERCEL_ENV === 'production') return 'https://dashnote.io';
  return request.nextUrl.origin;
}

async function findDashCustomer(email: string): Promise<Stripe.Customer | null> {
  if (!stripe) return null;
  const customers = await stripe.customers.list({ email, limit: 10 });
  for (const customer of customers.data) {
    const subs = await stripe.subscriptions.list({ customer: customer.id, status: 'all', limit: 20 });
    if (subs.data.some(isDashSyncSubscription)) return customer;
  }
  return null;
}

function portalEmail(link: string) {
  const minutes = PORTAL_LINK_TTL_MS / 60000;
  const text = [
    'Here is your link to manage your Dash Sync subscription (cancel, change plan or update your card):',
    '',
    link,
    '',
    `The link works for ${minutes} minutes.`,
    '',
    "If you didn't ask for this, ignore this email; nothing has changed.",
    '',
    '— Dash Notes',
  ].join('\n');
  const html = `<!doctype html><html><body style="font-family:-apple-system,system-ui,sans-serif;line-height:1.5;color:#111;max-width:480px;margin:32px auto;padding:24px">
    <p style="margin:0 0 16px">Here is your link to manage your Dash Sync subscription (cancel, change plan or update your card):</p>
    <p style="margin:0 0 24px"><a href="${link}" style="display:inline-block;background:#111;color:#fff;text-decoration:none;padding:10px 18px;border-radius:8px">Manage subscription</a></p>
    <p style="margin:0 0 16px;color:#555">The link works for ${minutes} minutes.</p>
    <p style="margin:0;color:#888;font-size:13px">If you didn't ask for this, ignore this email; nothing has changed.</p>
  </body></html>`;
  return { subject: 'Manage your Dash Sync subscription', text, html };
}

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 500 });
    }
    const body = await request.json().catch(() => ({}));
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
    }

    const customer = await findDashCustomer(email);
    if (customer) {
      const link = `${siteOrigin(request)}/api/customer-portal/open?t=${encodeURIComponent(createPortalToken(customer.id))}`;
      const sent = await sendEmail({ to: customer.email || email, ...portalEmail(link) });
      if (!sent) console.error('[customer-portal] link email failed for customer', customer.id);
    }
    return NextResponse.json(SENT);
  } catch (error) {
    console.error('Error sending billing portal link:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
