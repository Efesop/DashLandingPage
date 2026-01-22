import { NextRequest, NextResponse } from 'next/server';
import {
  getVoltagePayment,
  isVoltageConfigured,
  isPaymentCompleted,
  isPaymentPending,
} from '../../../../lib/voltage';
import { generateDownloadToken } from '../../../../lib/downloadSecurity';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  return handleVerification(request);
}

export async function POST(request: NextRequest) {
  return handleVerification(request);
}

async function handleVerification(request: NextRequest) {
  try {
    // Check if Voltage is configured
    if (!isVoltageConfigured()) {
      return NextResponse.json(
        { error: 'Voltage is not configured' },
        { status: 500 }
      );
    }

    // Get payment ID from query params or body
    let paymentId: string | null = null;

    if (request.method === 'GET') {
      paymentId = request.nextUrl.searchParams.get('payment_id');
    } else {
      const body = await request.json();
      paymentId = body.paymentId;
    }

    if (!paymentId) {
      return NextResponse.json(
        { error: 'Payment ID is required' },
        { status: 400 }
      );
    }

    // Get payment from Voltage
    const payment = await getVoltagePayment(paymentId);

    // Check payment status
    const isPaid = isPaymentCompleted(payment.status);
    const isPending = isPaymentPending(payment.status);

    const response: Record<string, unknown> = {
      paymentId: payment.id,
      status: payment.status,
      paymentStatus: isPaid ? 'paid' : payment.status,
    };

    // If paid, generate download token
    if (isPaid) {
      // Calculate purchase amount in cents (approximate based on sats)
      const purchaseAmount = 1499; // $14.99 in cents

      const downloadToken = generateDownloadToken({
        sessionId: `voltage-${paymentId}`,
        customerEmail: 'lightning-user',
        purchaseAmount,
        expiresIn: 24 * 60 * 60 * 1000, // 24 hours
        maxDownloads: 3,
      });

      response.downloadToken = downloadToken;
      response.expiresAt = new Date(
        Date.now() + 24 * 60 * 60 * 1000
      ).toISOString();
      response.downloadsRemaining = 3;
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error verifying Voltage payment:', error);

    return NextResponse.json(
      {
        error: 'Failed to verify Bitcoin payment',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
