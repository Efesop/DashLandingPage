// Forward Stripe sync subscription events → dash-relay /entitlements/grant-sync.
//
// Mirrors lib/entitlement.ts but for the recurring sync sub product
// (separate from the Mac one-time $14.99 license). Called from the
// Stripe webhook handler on:
//   - checkout.session.completed (mode=subscription)
//   - customer.subscription.created/updated
//   - invoice.paid (period renewal — refresh expiresAt)
//
// revokeSyncEntitlement called on:
//   - customer.subscription.deleted
//   - charge.refunded (when originating from a sync sub)
//
// Both use the same HMAC-SHA256 signing scheme + shared secret as
// grantMacEntitlement so the relay can authenticate either grant
// path with a single env var (ENTITLEMENT_GRANT_SECRET).

import { createHmac } from 'crypto';

function sign(body: string, secret: string): string {
  return createHmac('sha256', secret).update(body).digest('hex');
}

function relayBase(): string {
  const relayUrl = process.env.RELAY_URL;
  if (!relayUrl) throw new Error('RELAY_URL not configured');
  return relayUrl.replace(/\/$/, '');
}

function secret(): string {
  const s = process.env.ENTITLEMENT_GRANT_SECRET;
  if (!s) throw new Error('ENTITLEMENT_GRANT_SECRET not configured');
  return s;
}

export type GrantSyncInput = {
  email: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  /**
   * The Stripe subscription's `current_period_end` (epoch seconds).
   * Relay converts to ms. When the period ends without renewal, the
   * entitlement auto-lapses without any webhook needed.
   */
  currentPeriodEnd: number;
  /**
   * Raw Stripe subscription status (active|trialing|past_due|canceled|...).
   * The relay whitelists active|trialing|past_due as "active".
   */
  status: string;
};

export async function grantSyncEntitlement(input: GrantSyncInput): Promise<void> {
  const body = JSON.stringify({
    email: input.email.trim().toLowerCase(),
    stripeCustomerId: input.stripeCustomerId,
    stripeSubscriptionId: input.stripeSubscriptionId,
    currentPeriodEnd: input.currentPeriodEnd,
    status: input.status,
  });
  const signature = sign(body, secret());
  const url = `${relayBase()}/entitlements/grant-sync`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Entitlement-Signature': signature },
    body,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.error(`[syncEntitlement] grant ${res.status} for ${input.email}:`, text.slice(0, 500));
    throw new Error(`relay grant-sync failed: ${res.status}`);
  }
  console.log(`[syncEntitlement] granted sync-sub ${input.status} to ${input.email} (sub=${input.stripeSubscriptionId})`);
}

export type RevokeSyncInput = {
  email: string;
  stripeSubscriptionId?: string;
};

export async function revokeSyncEntitlement(input: RevokeSyncInput): Promise<void> {
  const body = JSON.stringify({
    email: input.email.trim().toLowerCase(),
    stripeSubscriptionId: input.stripeSubscriptionId,
  });
  const signature = sign(body, secret());
  const url = `${relayBase()}/entitlements/revoke-sync`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Entitlement-Signature': signature },
    body,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.error(`[syncEntitlement] revoke ${res.status} for ${input.email}:`, text.slice(0, 500));
    throw new Error(`relay revoke-sync failed: ${res.status}`);
  }
  console.log(`[syncEntitlement] revoked sync-sub for ${input.email} (sub=${input.stripeSubscriptionId})`);
}
