// Stripe Checkout session creator — single endpoint, three products.
//
// productType (from request body, default 'mac-license'):
//   - 'mac-license' → one-time $14.99 desktop app purchase (legacy / current)
//   - 'sync-monthly' → recurring $4.99/mo Dash Sync subscription, 7-day trial
//   - 'sync-yearly' → recurring $47.99/yr Dash Sync subscription, 7-day trial
//
// Sync subscriptions use `mode: 'subscription'` with the STRIPE_PRICES.*
// price IDs from lib/stripe.ts (configured in Stripe dashboard, passed
// via env so we can rotate without deploy). The webhook handler
// distinguishes by `metadata.product_type` on incoming events.

import { NextRequest, NextResponse } from 'next/server';
import stripe from '../../../lib/stripe';
import { DASH_PRICE, STRIPE_PRICES, SYNC_TRIAL_DAYS } from '../../../lib/stripe';

export const dynamic = 'force-dynamic';

type ProductType = 'mac-license' | 'sync-monthly' | 'sync-yearly';

/**
 * Public origin for Stripe redirect URLs. Uses NEXT_PUBLIC_BASE_URL when it
 * is set to a real host, otherwise the request's own public host (Vercel
 * forwards it in x-forwarded-host). Before this, a missing env var sent
 * every Dash Sync buyer to http://localhost:3000 the moment they paid.
 */
function resolveBaseUrl(request: NextRequest): string {
  const configured = process.env.NEXT_PUBLIC_BASE_URL;
  if (configured && !/localhost|127\.0\.0\.1/.test(configured)) return configured.replace(/\/$/, '');
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  if (host) return `${proto}://${host}`;
  return request.nextUrl.origin;
}

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment variables.' },
        { status: 500 },
      );
    }

    const body = await request.json().catch(() => ({}));
    const productType: ProductType = (body?.productType as ProductType) || 'mac-license';
    const successUrl: string | undefined = body?.successUrl;
    const cancelUrl: string | undefined = body?.cancelUrl;
    const baseUrl = resolveBaseUrl(request);
    const customerEmail: string | undefined = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : undefined;

    // ── Mac one-time desktop license ──────────────────────────────────
    if (productType === 'mac-license') {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: DASH_PRICE.currency,
              product_data: {
                name: DASH_PRICE.product_data?.name || 'Dash Notes — Desktop License',
                description: DASH_PRICE.product_data?.description || 'Mac desktop app — one-time purchase',
                images: DASH_PRICE.product_data?.images,
                metadata: DASH_PRICE.product_data?.metadata,
              },
              unit_amount: DASH_PRICE.unit_amount,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: successUrl || `${baseUrl}/payment/success?type=mac&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: cancelUrl || `${baseUrl}/payment/cancel?type=mac`,
        metadata: {
          product_type: 'mac-license',
          license_type: 'desktop',
        },
        billing_address_collection: 'auto',
        allow_promotion_codes: true,
        expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
      });
      return NextResponse.json({ sessionId: session.id, url: session.url });
    }

    // ── Sync subscription ─────────────────────────────────────────────
    const priceId = productType === 'sync-yearly' ? STRIPE_PRICES.syncYearly : STRIPE_PRICES.syncMonthly;
    if (!priceId) {
      return NextResponse.json(
        { error: `Stripe price ID for ${productType} not configured. Set STRIPE_PRICE_SYNC_MONTHLY / STRIPE_PRICE_SYNC_YEARLY env.` },
        { status: 500 },
      );
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      subscription_data: {
        trial_period_days: SYNC_TRIAL_DAYS,
        metadata: {
          product_type: 'sync-sub',
          plan: productType === 'sync-yearly' ? 'yearly' : 'monthly',
        },
      },
      // Capturing the email early so the webhook can resolve the user
      // even if Stripe collects it later in Checkout.
      ...(customerEmail ? { customer_email: customerEmail } : {}),
      // session_id lets /payment/success verify the subscription session.
      success_url: successUrl || `${baseUrl}/payment/success?type=sync&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${baseUrl}/payment/cancel?type=sync`,
      metadata: {
        product_type: 'sync-sub',
        plan: productType === 'sync-yearly' ? 'yearly' : 'monthly',
      },
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
      // Note: NO expires_at on subscriptions — Stripe handles trial + dunning.
    });
    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      {
        error: 'Failed to create checkout session',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
