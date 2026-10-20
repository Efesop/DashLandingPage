// Opens the Stripe Billing Portal from the emailed link that
// /api/customer-portal sends. A valid, unexpired token becomes a fresh portal
// session; anything else goes back to /payment/manage to ask for a new link.
//
// The portal uses the Dash-specific configuration (STRIPE_PORTAL_CONFIGURATION)
// so it doesn't change LinkJolt's portal settings on the shared account.

import { NextRequest, NextResponse } from 'next/server';
import type Stripe from 'stripe';
import stripe from '../../../../lib/stripe';
import { verifyPortalToken } from '../../../../lib/portalLink';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('t') || '';
  let customerId: string | null = null;
  try {
    customerId = token ? verifyPortalToken(token) : null;
  } catch (error) {
    console.error('[customer-portal/open] token check failed:', error);
  }
  if (!customerId || !stripe) {
    return NextResponse.redirect(new URL('/payment/manage?link=expired', request.url), 303);
  }

  try {
    const sessionParams: Stripe.BillingPortal.SessionCreateParams = {
      customer: customerId,
      return_url: process.env.STRIPE_PORTAL_RETURN_URL || 'https://dashnote.io/payment/portal-return',
    };
    const configuration = process.env.STRIPE_PORTAL_CONFIGURATION;
    if (configuration) sessionParams.configuration = configuration;
    const session = await stripe.billingPortal.sessions.create(sessionParams);
    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    console.error('[customer-portal/open] portal session failed:', error);
    return NextResponse.redirect(new URL('/payment/manage?link=error', request.url), 303);
  }
}
