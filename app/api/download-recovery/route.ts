import { NextRequest, NextResponse } from 'next/server';
import stripe from '../../../lib/stripe';
import { generateDownloadToken } from '../../../lib/downloadSecurity';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured.' },
        { status: 500 }
      );
    }

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const sessions = await stripe.checkout.sessions.list({
      limit: 100,
    });

    const customerSessions = sessions.data.filter(
      (session) =>
        session.customer_details?.email === email &&
        session.status === 'complete' &&
        session.payment_status === 'paid'
    );

    if (customerSessions.length === 0) {
      return NextResponse.json(
        { error: 'No paid orders found for this email' },
        { status: 404 }
      );
    }

    const latestSession = customerSessions[0];

    const downloadToken = generateDownloadToken({
      sessionId: latestSession.id,
      customerEmail: email,
      purchaseAmount: latestSession.amount_total || 0,
      expiresIn: 24 * 60 * 60 * 1000,
      maxDownloads: 3,
    });

    return NextResponse.json({
      url: `/api/secure-download?token=${downloadToken}`,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      message: 'Download access restored!',
    });
  } catch (error) {
    console.error('Error creating customer portal session:', error);
    return NextResponse.json(
      { error: 'Failed to access customer portal' },
      { status: 500 }
    );
  }
}
