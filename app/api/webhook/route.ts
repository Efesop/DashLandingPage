import { NextRequest, NextResponse } from 'next/server';
import stripe from '../../../lib/stripe';
import { StripeWebhookEvent } from '../../../types/payment';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
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

  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  let event: StripeWebhookEvent;

  try {
    // Verify webhook signature
    // You'll need to add STRIPE_WEBHOOK_SECRET to your environment variables
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error('STRIPE_WEBHOOK_SECRET is not set');
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      );
    }

    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    ) as StripeWebhookEvent;
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event);
        break;

      case 'payment_intent.succeeded':
        await handlePaymentSucceeded(event);
        break;

      case 'payment_intent.payment_failed':
        await handlePaymentFailed(event);
        break;

      case 'invoice.payment_succeeded':
        await handleInvoicePaymentSucceeded(event);
        break;

      case 'invoice.payment_failed':
        await handleInvoicePaymentFailed(event);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handleCheckoutCompleted(event: StripeWebhookEvent) {
  const session = event.data.object;

  // Here you would typically:
  // 1. Send confirmation email
  // 2. Update database
  // 3. Grant access to product
  // 4. Log the successful payment

  // For now, we'll just log it
  console.log('Payment successful for Dash Notes App!');
}

async function handlePaymentSucceeded(event: StripeWebhookEvent) {
  const paymentIntent = event.data.object;

  console.log('Payment succeeded:', {
    paymentIntentId: paymentIntent.id,
    amount: paymentIntent.amount_total,
    currency: paymentIntent.currency,
  });
}

async function handlePaymentFailed(event: StripeWebhookEvent) {
  const paymentIntent = event.data.object;

  console.log('Payment failed:', {
    paymentIntentId: paymentIntent.id,
    amount: paymentIntent.amount_total,
    currency: paymentIntent.currency,
  });
}

async function handleInvoicePaymentSucceeded(event: StripeWebhookEvent) {
  const invoice = event.data.object;

  console.log('Invoice payment succeeded:', {
    invoiceId: invoice.id,
    amount: invoice.amount_total,
    currency: invoice.currency,
  });
}

async function handleInvoicePaymentFailed(event: StripeWebhookEvent) {
  const invoice = event.data.object;

  console.log('Invoice payment failed:', {
    invoiceId: invoice.id,
    amount: invoice.amount_total,
    currency: invoice.currency,
  });
}
