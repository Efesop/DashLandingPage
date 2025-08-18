import crypto from 'crypto';
import stripe from './stripe';

// In-memory storage for demo. In production, use Redis or database
const tokenStorage = new Map<
  string,
  {
    sessionId: string;
    customerEmail: string;
    purchaseAmount: number;
    expiresAt: number;
    downloadsRemaining: number;
    createdAt: number;
  }
>();

// Secret for signing tokens (in production, use environment variable)
const TOKEN_SECRET =
  process.env.DOWNLOAD_TOKEN_SECRET || 'your-super-secure-secret-key';

export interface DownloadTokenData {
  sessionId: string;
  customerEmail: string;
  purchaseAmount: number;
  expiresIn: number;
  maxDownloads: number;
}

export interface PaymentVerification {
  isValid: boolean;
  customerEmail?: string;
  amount?: number;
  error?: string;
}

export interface TokenVerification {
  isValid: boolean;
  data?: {
    sessionId: string;
    customerEmail: string;
    purchaseAmount: number;
    downloadsRemaining: number;
  };
  error?: string;
}

export interface ConsumeResult {
  success: boolean;
  downloadsRemaining?: number;
  error?: string;
}

// Verify that a Stripe session is valid and paid
export async function verifyPaymentSession(
  sessionId: string
): Promise<PaymentVerification> {
  try {
    if (!stripe) {
      return { isValid: false, error: 'Stripe not configured' };
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return { isValid: false, error: 'Session not found' };
    }

    if (session.payment_status !== 'paid') {
      return { isValid: false, error: 'Payment not completed' };
    }

    return {
      isValid: true,
      customerEmail: session.customer_details?.email || 'unknown',
      amount: session.amount_total || 0,
    };
  } catch (error) {
    console.error('Error verifying payment session:', error);
    return { isValid: false, error: 'Verification failed' };
  }
}

// Generate a secure download token
export function generateDownloadToken(data: DownloadTokenData): string {
  const tokenId = crypto.randomBytes(32).toString('hex');
  const timestamp = Date.now();

  // Create token payload
  const payload = {
    sessionId: data.sessionId,
    customerEmail: data.customerEmail,
    purchaseAmount: data.purchaseAmount,
    expiresAt: timestamp + data.expiresIn,
    downloadsRemaining: data.maxDownloads,
    createdAt: timestamp,
  };

  // Store token data
  tokenStorage.set(tokenId, payload);

  // Create signed token
  const signature = crypto
    .createHmac('sha256', TOKEN_SECRET)
    .update(tokenId + payload.sessionId + payload.customerEmail)
    .digest('hex');

  return `${tokenId}.${signature}`;
}

// Verify a download token
export function verifyDownloadToken(token: string): TokenVerification {
  try {
    const [tokenId, signature] = token.split('.');

    if (!tokenId || !signature) {
      return { isValid: false, error: 'Invalid token format' };
    }

    const tokenData = tokenStorage.get(tokenId);

    if (!tokenData) {
      return { isValid: false, error: 'Token not found or expired' };
    }

    // Check if token has expired
    if (Date.now() > tokenData.expiresAt) {
      tokenStorage.delete(tokenId);
      return { isValid: false, error: 'Token has expired' };
    }

    // Check if downloads are exhausted
    if (tokenData.downloadsRemaining <= 0) {
      return { isValid: false, error: 'Download limit exceeded' };
    }

    // Verify signature
    const expectedSignature = crypto
      .createHmac('sha256', TOKEN_SECRET)
      .update(tokenId + tokenData.sessionId + tokenData.customerEmail)
      .digest('hex');

    if (signature !== expectedSignature) {
      return { isValid: false, error: 'Invalid token signature' };
    }

    return {
      isValid: true,
      data: {
        sessionId: tokenData.sessionId,
        customerEmail: tokenData.customerEmail,
        purchaseAmount: tokenData.purchaseAmount,
        downloadsRemaining: tokenData.downloadsRemaining,
      },
    };
  } catch (error) {
    console.error('Error verifying download token:', error);
    return { isValid: false, error: 'Token verification failed' };
  }
}

// Consume a download (decrement remaining downloads)
export function consumeDownloadToken(token: string): ConsumeResult {
  try {
    const [tokenId] = token.split('.');

    if (!tokenId) {
      return { success: false, error: 'Invalid token format' };
    }

    const tokenData = tokenStorage.get(tokenId);

    if (!tokenData) {
      return { success: false, error: 'Token not found' };
    }

    if (tokenData.downloadsRemaining <= 0) {
      return { success: false, error: 'Download limit exceeded' };
    }

    // Decrement downloads remaining
    tokenData.downloadsRemaining -= 1;

    // Update storage
    tokenStorage.set(tokenId, tokenData);

    // If no downloads left, schedule cleanup
    if (tokenData.downloadsRemaining <= 0) {
      setTimeout(() => {
        tokenStorage.delete(tokenId);
      }, 5 * 60 * 1000); // Clean up after 5 minutes
    }

    return {
      success: true,
      downloadsRemaining: tokenData.downloadsRemaining,
    };
  } catch (error) {
    console.error('Error consuming download token:', error);
    return { success: false, error: 'Failed to consume token' };
  }
}

// Clean up expired tokens (call this periodically)
export function cleanupExpiredTokens(): void {
  const now = Date.now();

  tokenStorage.forEach((tokenData, tokenId) => {
    if (now > tokenData.expiresAt) {
      tokenStorage.delete(tokenId);
    }
  });
}

// Get token statistics (for monitoring)
export function getTokenStats(): {
  totalTokens: number;
  activeTokens: number;
  expiredTokens: number;
} {
  const now = Date.now();
  let activeTokens = 0;
  let expiredTokens = 0;

  tokenStorage.forEach((tokenData, tokenId) => {
    if (now > tokenData.expiresAt) {
      expiredTokens++;
    } else {
      activeTokens++;
    }
  });

  return {
    totalTokens: tokenStorage.size,
    activeTokens,
    expiredTokens,
  };
}
