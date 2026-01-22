// Voltage Payments API configuration
// Sign up at: https://voltage.cloud
// Docs: https://docs.voltageapi.com

export interface VoltageConfig {
  apiKey: string;
  orgId: string;
  envId: string;
  walletId: string;
  baseUrl: string;
}

// Environment-based configuration
export const voltageConfig: VoltageConfig = {
  apiKey: process.env.VOLTAGE_API_KEY || '',
  orgId: process.env.VOLTAGE_ORG_ID || '',
  envId: process.env.VOLTAGE_ENV_ID || '',
  walletId: process.env.VOLTAGE_WALLET_ID || '',
  baseUrl: 'https://backend.voltage.cloud/api/v1',
};

// Check if Voltage is configured
export function isVoltageConfigured(): boolean {
  return !!(
    voltageConfig.apiKey &&
    voltageConfig.orgId &&
    voltageConfig.envId &&
    voltageConfig.walletId
  );
}

// Product configuration
export const DASH_PRODUCT = {
  name: 'Dash Notes App',
  description: 'Private, encrypted notes app - Lifetime License',
  priceUSD: 14.99,
  currency: 'USD',
};

// Voltage API types
export interface VoltagePaymentRequest {
  id: string;
  wallet_id: string;
  payment_kind: 'bolt11' | 'bip21';
  amount?: {
    millisatoshis: string;
  };
  currency: 'btc';
  description?: string;
  expiration?: number;
}

// Raw API response structure
export interface VoltagePaymentApiResponse {
  id: string;
  status: 'generating' | 'receiving' | 'completed' | 'expired' | 'failed';
  data: {
    payment_request?: string;
    memo?: string;
  };
  requested_amount?: {
    amount: number;
    currency: string;
    unit: string;
  };
  created_at?: string;
  updated_at?: string;
}

// Simplified payment interface for internal use
export interface VoltagePayment {
  id: string;
  payment_request?: string;
  status: 'generating' | 'receiving' | 'completed' | 'expired' | 'failed';
  requested_amount?: {
    millisatoshis: string;
  };
  created_at?: string;
  completed_at?: string;
}

export interface VoltagePaymentResponse {
  data: VoltagePayment;
}

export interface VoltageWebhookPayload {
  type: 'receive' | 'send' | 'test';
  detail: {
    event: 'generated' | 'completed' | 'succeeded' | 'failed' | 'expired' | 'created';
    data: VoltagePayment;
  };
}

// Helper to make Voltage API requests
async function voltageRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  if (!isVoltageConfigured()) {
    throw new Error(
      'Voltage API is not configured. Set VOLTAGE_API_KEY, VOLTAGE_ORG_ID, VOLTAGE_ENV_ID, and VOLTAGE_WALLET_ID environment variables.'
    );
  }

  const response = await fetch(`${voltageConfig.baseUrl}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': voltageConfig.apiKey,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Voltage API error: ${response.status} - ${error}`);
  }

  return response.json();
}

// Fetch current BTC/USD price from CoinGecko
export async function getBtcUsdPrice(): Promise<number> {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
      { next: { revalidate: 60 } } // Cache for 60 seconds
    );

    if (!response.ok) {
      throw new Error('Failed to fetch BTC price');
    }

    const data = await response.json();
    return data.bitcoin.usd;
  } catch (error) {
    console.error('Error fetching BTC price:', error);
    // Fallback price if API fails (should be updated or handled differently in production)
    throw new Error('Unable to fetch current BTC price');
  }
}

// Convert USD to millisatoshis
export function usdToMillisatoshis(usdAmount: number, btcPrice: number): string {
  // 1 BTC = 100,000,000 satoshis = 100,000,000,000 millisatoshis
  const btcAmount = usdAmount / btcPrice;
  const millisatoshis = Math.round(btcAmount * 100_000_000_000);
  return millisatoshis.toString();
}

// Create a Lightning invoice (returns 202 with no body - async creation)
export async function createVoltageInvoice(params: {
  id: string;
  amountMsats: string;
  description: string;
  expiration?: number;
}): Promise<void> {
  const { orgId, envId, walletId } = voltageConfig;

  if (!isVoltageConfigured()) {
    throw new Error(
      'Voltage API is not configured. Set VOLTAGE_API_KEY, VOLTAGE_ORG_ID, VOLTAGE_ENV_ID, and VOLTAGE_WALLET_ID environment variables.'
    );
  }

  const response = await fetch(
    `${voltageConfig.baseUrl}/organizations/${orgId}/environments/${envId}/payments`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': voltageConfig.apiKey,
      },
      body: JSON.stringify({
        id: params.id,
        wallet_id: walletId,
        payment_kind: 'bolt11',
        amount_msats: parseInt(params.amountMsats),
        description: params.description,
      }),
    }
  );

  if (!response.ok && response.status !== 202) {
    const error = await response.text();
    throw new Error(`Voltage API error: ${response.status} - ${error}`);
  }

  // 202 Accepted - payment is being created asynchronously
}

// Get payment by ID
export async function getVoltagePayment(paymentId: string): Promise<VoltagePayment> {
  const { orgId, envId } = voltageConfig;

  // API returns the payment object directly, not wrapped in { data: ... }
  const apiResponse = await voltageRequest<VoltagePaymentApiResponse>(
    `/organizations/${orgId}/environments/${envId}/payments/${paymentId}`
  );

  // Transform API response to our simplified interface
  const response: VoltagePayment = {
    id: apiResponse.id,
    status: apiResponse.status,
    payment_request: apiResponse.data?.payment_request,
    created_at: apiResponse.created_at,
  };

  return response;
}

// Check if payment is completed
export function isPaymentCompleted(status: VoltagePayment['status']): boolean {
  return status === 'completed';
}

// Check if payment is pending
export function isPaymentPending(status: VoltagePayment['status']): boolean {
  return status === 'generating' || status === 'receiving';
}

// Verify webhook signature
export function verifyWebhookSignature(
  payload: string,
  signature: string,
  timestamp: string,
  secret: string
): boolean {
  const crypto = require('crypto');
  const message = `${payload}.${timestamp}`;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(message)
    .digest('base64');

  // Timing-safe comparison
  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );
  } catch {
    return false;
  }
}
