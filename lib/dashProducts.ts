// Which Stripe objects belong to Dash.
//
// The Stripe account is shared with LinkJolt, and Stripe webhooks are
// account-wide: the Dash endpoint receives LinkJolt's checkouts, subscriptions
// and invoices too. Every handler that grants, refreshes or revokes a Dash
// entitlement must check the object is a Dash one first.
//
// Dash checkouts are created by app/api/create-checkout-session, which sets
// metadata.product_type ('mac-license' or 'sync-sub') on the session and, for
// Sync, on the subscription (subscription_data.metadata). The Sync price IDs
// are a second signal for subscriptions.

import type Stripe from 'stripe';
import { STRIPE_PRICES } from './stripe';

function syncPriceIds(): string[] {
  return [STRIPE_PRICES.syncMonthly, STRIPE_PRICES.syncYearly].filter(Boolean);
}

export function isDashMacCheckout(session: Stripe.Checkout.Session): boolean {
  return session.mode === 'payment' && session.metadata?.product_type === 'mac-license';
}

export function isDashSyncCheckout(session: Stripe.Checkout.Session): boolean {
  return session.mode === 'subscription' && session.metadata?.product_type === 'sync-sub';
}

export function isDashSyncSubscription(sub: Stripe.Subscription): boolean {
  if (sub.metadata?.product_type === 'sync-sub') return true;
  const ids = syncPriceIds();
  if (!ids.length) return false;
  return (sub.items?.data || []).some((item) => ids.includes(item.price?.id));
}
