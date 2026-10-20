// Signed, short-lived links that open a customer's Stripe billing portal.
//
// /api/customer-portal used to return a portal URL to anyone who typed an
// email address. Now it emails this link to the address on file instead, and
// /api/customer-portal/open turns a valid link into a portal session. The
// token carries the Stripe customer id and an expiry, HMAC-signed with
// DOWNLOAD_TOKEN_SECRET under its own prefix so it can't be confused with a
// download token. A missing secret fails closed.

import { createHmac, timingSafeEqual } from 'crypto';

export const PORTAL_LINK_TTL_MS = 30 * 60 * 1000;

const PREFIX = 'dash-portal-link:v1.';

function secret(): string {
  const s = process.env.DOWNLOAD_TOKEN_SECRET;
  if (!s) throw new Error('DOWNLOAD_TOKEN_SECRET not configured');
  return s;
}

function sign(payload: string): string {
  return createHmac('sha256', secret()).update(PREFIX + payload).digest('base64url');
}

export function createPortalToken(customerId: string, now = Date.now()): string {
  const payload = Buffer.from(JSON.stringify({ c: customerId, exp: now + PORTAL_LINK_TTL_MS })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

/** The Stripe customer id when the token is genuine and unexpired, else null. */
export function verifyPortalToken(token: string, now = Date.now()): string | null {
  const [payload, sig] = token.split('.');
  if (!payload || !sig) return null;
  const expected = Buffer.from(sign(payload));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  try {
    const { c, exp } = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (typeof c !== 'string' || !/^cus_[A-Za-z0-9]+$/.test(c)) return null;
    if (typeof exp !== 'number' || exp < now) return null;
    return c;
  } catch {
    return null;
  }
}
