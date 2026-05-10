// Forward Stripe checkout success → dash-relay entitlement grant.
//
// Flow:
//   Stripe webhook hits /api/webhook (this Vercel project)
//     → verifies Stripe signature
//     → for checkout.session.completed events, calls grantMacEntitlement()
//   grantMacEntitlement() POSTs to dash-relay /entitlements/grant-mac with
//     HMAC-SHA256 of the body using ENTITLEMENT_GRANT_SECRET (shared with
//     Deno Deploy via env var).
//
// Required env (Vercel):
//   RELAY_URL                  e.g. https://dash-relay.efesop.deno.net
//   ENTITLEMENT_GRANT_SECRET   shared secret with the relay (32+ random chars)
//
// Required env (Deno Deploy):
//   ENTITLEMENT_GRANT_SECRET   same value
//
// On failure: log + throw. The webhook handler will catch and return 500
// so Stripe retries automatically.

import { createHmac } from 'crypto';

export type GrantMacInput = {
  email: string;
  stripeSessionId: string;
  stripeCustomerId?: string;
  amountPaid?: number;
  currency?: string;
};

function sign(body: string, secret: string): string {
  return createHmac('sha256', secret).update(body).digest('hex');
}

export async function grantMacEntitlement(input: GrantMacInput): Promise<void> {
  const relayUrl = process.env.RELAY_URL;
  const secret = process.env.ENTITLEMENT_GRANT_SECRET;

  if (!relayUrl) {
    console.error('[entitlement] RELAY_URL not set — skipping grant');
    throw new Error('RELAY_URL not configured');
  }
  if (!secret) {
    console.error('[entitlement] ENTITLEMENT_GRANT_SECRET not set');
    throw new Error('ENTITLEMENT_GRANT_SECRET not configured');
  }

  const body = JSON.stringify({
    email: input.email.trim().toLowerCase(),
    stripeSessionId: input.stripeSessionId,
    stripeCustomerId: input.stripeCustomerId,
    amountPaid: input.amountPaid,
    currency: input.currency,
  });
  const signature = sign(body, secret);

  const url = `${relayUrl.replace(/\/$/, '')}/entitlements/grant-mac`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Entitlement-Signature': signature,
    },
    body,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.error(
      `[entitlement] relay returned ${res.status} for ${input.email}:`,
      text.slice(0, 500),
    );
    throw new Error(`relay grant failed: ${res.status}`);
  }

  console.log(
    `[entitlement] granted Mac sync to ${input.email} via relay (stripe=${input.stripeSessionId})`,
  );
}
