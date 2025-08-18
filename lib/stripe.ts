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

// Product configuration for Dash Notes App
export const DASH_PRODUCT = {
  name: 'Dash Notes App',
  description:
    'Private, encrypted notes app that keeps your data 100% offline and secure',
  images: ['https://dashnote.io/og-image.png'], // Replace with your actual image URL
  metadata: {
    app_name: 'Dash',
    version: '1.0.0',
    platform: 'macOS',
  },
};

// Price configuration
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
    license_type: 'lifetime',
  },
};

// Success and cancel URLs
export const STRIPE_URLS = {
  success: `${
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  }/payment/success`,
  cancel: `${
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  }/payment/cancel`,
};
