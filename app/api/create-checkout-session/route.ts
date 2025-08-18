import { NextRequest, NextResponse } from 'next/server';
import stripe from '../../../lib/stripe';
import { DASH_PRICE, STRIPE_URLS } from '../../../lib/stripe';
import { CheckoutSessionRequest } from '../../../types/payment';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        {
          error:
            'Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment variables.',
        },
        { status: 500 }
      );
    }

    const body: CheckoutSessionRequest = await request.json();
    const { successUrl, cancelUrl } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: DASH_PRICE.currency,
            product_data: {
              name: DASH_PRICE.product_data?.name || 'Dash Notes App',
              description:
                DASH_PRICE.product_data?.description ||
                'Private, encrypted notes app',
              images: DASH_PRICE.product_data?.images,
              metadata: DASH_PRICE.product_data?.metadata,
            },
            unit_amount: DASH_PRICE.unit_amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl || STRIPE_URLS.success,
      cancel_url: cancelUrl || STRIPE_URLS.cancel,
      metadata: {
        product_name: 'Dash Notes App',
        license_type: 'lifetime',
      },
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
      expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);

    return NextResponse.json(
      {
        error: 'Failed to create checkout session',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
