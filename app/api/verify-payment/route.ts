import { NextRequest, NextResponse } from 'next/server';
import stripe from '../../../lib/stripe';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!stripe) {
      return NextResponse.json(
        {
          error:
            'Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment variables.',
        },
        { status: 500 }
      );
    }

    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    // Check if payment was successful. One-time Mac purchase: must be paid.
    // Dash Sync subscription: Checkout is `complete` once a card is on file;
    // with the 7-day trial nothing is charged yet, so payment_status is
    // `no_payment_required` (Stripe charges at trial end).
    const isSubscription = session.mode === 'subscription';
    const productType = session.metadata?.product_type || (isSubscription ? 'sync-sub' : 'mac-license');
    const succeeded = isSubscription
      ? session.status === 'complete' &&
        (session.payment_status === 'paid' || session.payment_status === 'no_payment_required')
      : session.payment_status === 'paid';
    if (succeeded) {
      return NextResponse.json({
        success: true,
        sessionId: session.id,
        customerEmail: session.customer_details?.email,
        amount: session.amount_total,
        currency: session.currency,
        status: session.status,
        paymentStatus: session.payment_status,
        mode: session.mode,
        productType,
      });
    } else {
      return NextResponse.json({
        success: false,
        sessionId: session.id,
        status: session.status,
        paymentStatus: session.payment_status,
        error: 'Payment not completed',
      });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);

    return NextResponse.json(
      {
        error: 'Failed to verify payment',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!stripe) {
      return NextResponse.json(
        {
          error:
            'Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment variables.',
        },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    // Return session details. `success` applies the same rule as POST so the
    // success page can treat a trialing Dash Sync subscription as complete.
    const isSubscription = session.mode === 'subscription';
    const productType = session.metadata?.product_type || (isSubscription ? 'sync-sub' : 'mac-license');
    const success = isSubscription
      ? session.status === 'complete' &&
        (session.payment_status === 'paid' || session.payment_status === 'no_payment_required')
      : session.payment_status === 'paid';
    return NextResponse.json({
      success,
      sessionId: session.id,
      customerEmail: session.customer_details?.email,
      amount: session.amount_total,
      currency: session.currency,
      status: session.status,
      paymentStatus: session.payment_status,
      mode: session.mode,
      productType,
      createdAt: session.created,
      expiresAt: session.expires_at,
    });
  } catch (error) {
    console.error('Error retrieving session:', error);

    return NextResponse.json(
      {
        error: 'Failed to verify payment',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
