import { NextRequest, NextResponse } from 'next/server';
import stripe from '../../../lib/stripe';
import {
  generateDownloadToken,
  verifyPaymentSession,
} from '../../../lib/downloadSecurity';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured.' },
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

    // Verify the payment session is valid and paid
    const paymentVerification = await verifyPaymentSession(sessionId);

    if (!paymentVerification.isValid) {
      return NextResponse.json(
        { error: 'Invalid or unpaid session' },
        { status: 403 }
      );
    }

    // Generate a secure, time-limited download token
    const downloadToken = generateDownloadToken({
      sessionId,
      customerEmail: paymentVerification.customerEmail,
      purchaseAmount: paymentVerification.amount,
      expiresIn: 24 * 60 * 60 * 1000, // 24 hours
      maxDownloads: 3, // Allow 3 downloads for reliability
    });

    return NextResponse.json({
      downloadToken,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      downloadsRemaining: 3,
    });
  } catch (error) {
    console.error('Error generating download token:', error);
    return NextResponse.json(
      { error: 'Failed to generate download token' },
      { status: 500 }
    );
  }
}
