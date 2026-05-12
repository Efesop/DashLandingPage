import Stripe from 'stripe';

// Initialize Stripe with secret key
// You'll need to add STRIPE_SECRET_KEY to your environment variables
let stripe: Stripe | null = null;

if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-07-30.basil', // Use latest stable API version
    typescript: true,
  });
}

export default stripe;

// ── Mac desktop license ($14.99 one-time) ─────────────────────────────
// v1.5 split: this product unlocks the desktop app DOWNLOAD only.
// Sync requires the separate sync subscription below.
export const DASH_PRODUCT = {
  name: 'Dash Notes — Desktop License',
  description:
    'Mac desktop app — one-time purchase, no subscription. Cross-device sync sold separately.',
  images: ['https://dashnote.io/og-image.png'],
  metadata: {
    app_name: 'Dash',
    version: '1.5.0',
    platform: 'macOS',
  },
};

export const DASH_PRICE = {
  unit_amount: 1499,
  currency: 'usd',
  product_data: {
    name: DASH_PRODUCT.name,
    description: DASH_PRODUCT.description,
    images: DASH_PRODUCT.images,
    metadata: DASH_PRODUCT.metadata,
  },
  metadata: {
    product_type: 'one_time',
    license_type: 'desktop',
  },
};

// ── Dash Sync subscription (Option C, v1.5) ───────────────────────────
// Recurring product. Price IDs are configured in the Stripe dashboard
// (Settings → Products) and passed via env so we can rotate without a
// code deploy. The webhook handler reads `metadata.product_type` to
// distinguish from the Mac one-time on incoming events.
export const STRIPE_PRICES = {
  syncMonthly: process.env.STRIPE_PRICE_SYNC_MONTHLY || '', // $4.99/mo
  syncYearly: process.env.STRIPE_PRICE_SYNC_YEARLY || '', // $47.99/yr (20% off)
};

export const SYNC_TRIAL_DAYS = 7;

// Success and cancel URLs (shared across product types via ?type= query)
export const STRIPE_URLS = {
  success: `${
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  }/payment/success`,
  cancel: `${
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  }/payment/cancel`,
};
