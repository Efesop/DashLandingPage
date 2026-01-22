import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import {
  createVoltageInvoice,
  getVoltagePayment,
  getBtcUsdPrice,
  usdToMillisatoshis,
  isVoltageConfigured,
  DASH_PRODUCT,
} from '../../../../lib/voltage';

export const dynamic = 'force-dynamic';

export interface CreateVoltageInvoiceRequest {
  orderId?: string;
}

export interface CreateVoltageInvoiceResponse {
  paymentId: string;
  lnInvoice: string;
  amountSats: number;
  amountUsd: number;
  expiresAt: string;
  expirationInSec: number;
}

// Helper to wait for payment to be ready with invoice
async function waitForInvoice(
  paymentId: string,
  maxAttempts: number = 10,
  delayMs: number = 500
): Promise<string | null> {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const payment = await getVoltagePayment(paymentId);
      if (payment.payment_request) {
        return payment.payment_request;
      }
    } catch (error) {
      // Payment might not be ready yet
      console.log(`Attempt ${i + 1}: Payment not ready yet`);
    }
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    // Check if Voltage is configured
    if (!isVoltageConfigured()) {
      return NextResponse.json(
        {
          error:
            'Bitcoin payments are not configured. Please set Voltage environment variables.',
        },
        { status: 500 }
      );
    }

    const body: CreateVoltageInvoiceRequest = await request
      .json()
      .catch(() => ({}));

    // Generate a unique payment ID (must be a valid UUID for Voltage API)
    const paymentId = body.orderId || uuidv4();

    // Get current BTC/USD price
    let btcPrice: number;
    try {
      btcPrice = await getBtcUsdPrice();
    } catch (error) {
      return NextResponse.json(
        {
          error: 'Unable to fetch current Bitcoin price. Please try again.',
        },
        { status: 503 }
      );
    }

    // Convert USD to millisatoshis
    const amountMsats = usdToMillisatoshis(DASH_PRODUCT.priceUSD, btcPrice);
    const amountSats = Math.round(parseInt(amountMsats) / 1000);

    // Create the invoice (returns 202 with no body - async creation)
    const expirationInSec = 3600; // 1 hour
    await createVoltageInvoice({
      id: paymentId,
      amountMsats,
      description: DASH_PRODUCT.description,
      expiration: expirationInSec,
    });

    // Poll for the invoice to be ready
    const lnInvoice = await waitForInvoice(paymentId);

    if (!lnInvoice) {
      return NextResponse.json(
        {
          error: 'Failed to generate Lightning invoice - timeout waiting for invoice',
        },
        { status: 500 }
      );
    }

    const response: CreateVoltageInvoiceResponse = {
      paymentId,
      lnInvoice,
      amountSats,
      amountUsd: DASH_PRODUCT.priceUSD,
      expiresAt: new Date(Date.now() + expirationInSec * 1000).toISOString(),
      expirationInSec,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error creating Voltage invoice:', error);

    return NextResponse.json(
      {
        error: 'Failed to create Bitcoin payment invoice',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
