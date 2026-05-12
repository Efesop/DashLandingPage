// Real Stripe Customer / Billing Portal session.
//
// Returns a short-lived Stripe-hosted URL the user is redirected to
// for subscription self-service: cancel, switch plans, update payment
// method. Configured in the Stripe Dashboard (Settings → Billing →
// Customer portal).
//
// Body: { email }
// Returns: { url } on success.
// 404 if no Stripe customer found for that email (i.e. the user only
// has a one-time Mac purchase, or no purchase at all). The old route
// (download-link recovery for Mac DMG re-downloads) was moved to
// /api/download-recovery — see app/payment/recovery/page.tsx.
//
// Multi-product Stripe account note: the same Stripe account hosts
// other products (e.g. LinkJolt). To avoid affecting those products'
// billing portal experience, we pass a Dash-specific portal
// configuration ID via STRIPE_PORTAL_CONFIGURATION. If unset, falls
// back to the account's default configuration (fine if Dash is the
// only product using the portal). Create the Dash configuration in
// the Stripe Dashboard: Settings → Billing → Customer portal → New.

import { NextRequest, NextResponse } from 'next/server';
import type Stripe from 'stripe';
import stripe from '../../../lib/stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 500 });
    }
    const { email } = await request.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Look up the Stripe customer by email. Sync subscription checkout
    // creates a Customer object automatically; one-time Mac buyers
    // (pre-v1.5) may or may not have a Customer depending on how they
    // checked out. If none found, surface a clear message.
    const customers = await stripe.customers.list({ email: email.trim().toLowerCase(), limit: 1 });
    const customer = customers.data[0];
    if (!customer) {
      return NextResponse.json(
        {
          error: 'No subscription found for this email.',
          hint: 'If you bought the Mac desktop app, use the Recover Download page instead.',
        },
        { status: 404 },
      );
    }

    const returnUrl = process.env.STRIPE_PORTAL_RETURN_URL || 'https://dashnote.io/payment/portal-return';
    const configuration = process.env.STRIPE_PORTAL_CONFIGURATION; // bpc_... — optional

    const sessionParams: Stripe.BillingPortal.SessionCreateParams = {
      customer: customer.id,
      return_url: returnUrl,
    };
    if (configuration) sessionParams.configuration = configuration;

    const session = await stripe.billingPortal.sessions.create(sessionParams);
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating billing portal session:', error);
    return NextResponse.json({ error: 'Failed to open subscription portal' }, { status: 500 });
  }
}
