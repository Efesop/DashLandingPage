import { NextRequest, NextResponse } from 'next/server';
import {
  VoltageWebhookPayload,
  verifyWebhookSignature,
  isPaymentCompleted,
} from '../../../../lib/voltage';

export const dynamic = 'force-dynamic';

// In-memory store for processed payments (to prevent duplicate processing)
// In production, use a database
const processedPayments = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const webhookSecret = process.env.VOLTAGE_WEBHOOK_SECRET;

    // Get the raw body for signature verification
    const rawBody = await request.text();

    // Verify signature if webhook secret is configured
    if (webhookSecret) {
      const signature = request.headers.get('x-voltage-signature');
      const timestamp = request.headers.get('x-voltage-timestamp');

      if (!signature || !timestamp) {
        console.error('Missing webhook signature or timestamp');
        return NextResponse.json(
          { error: 'Missing signature headers' },
          { status: 401 }
        );
      }

      const isValid = verifyWebhookSignature(
        rawBody,
        signature,
        timestamp,
        webhookSecret
      );

      if (!isValid) {
        console.error('Invalid webhook signature');
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 401 }
        );
      }
    }

    // Parse the webhook payload
    const payload: VoltageWebhookPayload = JSON.parse(rawBody);

    console.log('Voltage webhook received:', {
      type: payload.type,
      event: payload.detail.event,
      paymentId: payload.detail.data.id,
    });

    // Handle receive events (incoming payments)
    if (payload.type === 'receive') {
      const paymentId = payload.detail.data.id;
      const event = payload.detail.event;

      // Handle completed payments
      if (event === 'completed' && isPaymentCompleted(payload.detail.data.status)) {
        await handlePaymentCompleted(paymentId, payload.detail.data);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing Voltage webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handlePaymentCompleted(
  paymentId: string,
  payment: VoltageWebhookPayload['detail']['data']
) {
  // Prevent duplicate processing
  if (processedPayments.has(paymentId)) {
    console.log(`Payment ${paymentId} already processed, skipping`);
    return;
  }

  console.log('Lightning payment successful for Dash Notes App!', {
    paymentId: payment.id,
    status: payment.status,
  });

  // Mark as processed
  processedPayments.add(paymentId);

  // Clean up after 24 hours
  setTimeout(
    () => {
      processedPayments.delete(paymentId);
    },
    24 * 60 * 60 * 1000
  );

  // Here you would typically:
  // 1. Send confirmation email
  // 2. Store purchase record in database
  // 3. Generate download token (already handled in verify-payment)
}
