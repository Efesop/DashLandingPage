// One-off transparent notification to every existing Stripe buyer
// about the v1.5 sync subscription launch.
//
// What it does:
//   1. Lists every paid Stripe checkout session (status=complete,
//      payment_status=paid, mode=payment) with pagination
//   2. Dedupes by lowercased email
//   3. Sends a one-time transparent email via Resend explaining:
//      - Their desktop app keeps working forever — no change.
//      - Sync is launching as a NEW optional feature.
//      - It requires a separate subscription on all platforms.
//      - Why: sync costs ongoing server money; the $14.99 paid for the
//        desktop app, not the server.
//      - How to subscribe + how to recover Mac download.
//   4. Idempotent: tracks already-sent emails in a local JSON file
//      so re-runs don't double-send.
//   5. Does NOT grant any entitlement — this is informational only.
//      Existing buyers must subscribe to use sync (no grandfather).
//
// Run AFTER:
//   - lib/stripe.ts pricing copy is updated (no more "lifetime no subs")
//   - DashLandingPage homepage copy is updated
//   - /subscribe page is live
// Run BEFORE:
//   - flipping ENTITLEMENT_REQUIRED=true on the relay
//
// Usage:
//   cd /Users/ollie/DashLandingPage
//   # Dry run (lists buyers, doesn't send):
//   DRY_RUN=true npx tsx scripts/notify-existing-buyers.ts
//   # Real send:
//   npx tsx scripts/notify-existing-buyers.ts
//
// Required env (.env.local or shell):
//   STRIPE_SECRET_KEY
//   RESEND_API_KEY
//   RESEND_FROM         (e.g. "Dash Notes <auth@dashnote.io>")
//   NEXT_PUBLIC_BASE_URL (e.g. "https://dashnote.io")

import 'dotenv/config';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import path from 'path';
import Stripe from 'stripe';

const DRY_RUN = process.env.DRY_RUN === 'true';
const STATE_FILE = path.join(__dirname, '.notify-sent.json');

interface SentState {
  emailsSent: string[]; // lowercased
  lastRunAt: string;
}

function loadState(): SentState {
  if (!existsSync(STATE_FILE)) return { emailsSent: [], lastRunAt: '' };
  try {
    return JSON.parse(readFileSync(STATE_FILE, 'utf8'));
  } catch {
    return { emailsSent: [], lastRunAt: '' };
  }
}

function saveState(state: SentState) {
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

async function sendNotification(to: string): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: 'RESEND_API_KEY not set' };
  const from = process.env.RESEND_FROM || 'Dash Notes <auth@dashnote.io>';
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'https://dashnote.io';
  const subject = 'Dash Notes: introducing sync';
  const text = `Hi,

You bought Dash Notes for Mac (the $14.99 desktop license). First — thank you, and your desktop app keeps working forever. Nothing changes there.

What's new: we're launching Dash Sync.

Sync is a separate feature that lets your notes stay in sync across all your devices (Mac, iPhone, web). It uses end-to-end encryption, so the relay server we run for sync never sees your notes — only ciphertext.

Sync requires a separate subscription:
 • $4.99/month
 • $47.99/year (20% off)
 • 7-day free trial

Why a subscription? Sync costs ongoing money to operate (server, bandwidth, redundancy). The $14.99 you paid covers the desktop app — we'd rather charge fairly for the part that has real recurring cost than raise the desktop price.

If you want sync: ${base}/subscribe
Manage / cancel anytime: ${base}/payment/manage
Re-download your Mac app: ${base}/payment/recovery

If you don't want sync: nothing to do. Your desktop app keeps working as before.

Questions or feedback: just reply to this email.

— Ollie, Dash Notes
${base}
`;
  const html = `<!doctype html><html><body style="font-family:-apple-system,system-ui,sans-serif;line-height:1.6;color:#222;max-width:560px;margin:32px auto;padding:24px">
    <p>Hi,</p>
    <p>You bought Dash Notes for Mac (the $14.99 desktop license). First — thank you, and <strong>your desktop app keeps working forever</strong>. Nothing changes there.</p>
    <p><strong>What's new: we're launching Dash Sync.</strong></p>
    <p>Sync is a separate feature that lets your notes stay in sync across all your devices (Mac, iPhone, web). It uses end-to-end encryption, so the relay server we run for sync never sees your notes — only ciphertext.</p>
    <p>Sync requires a separate subscription:</p>
    <ul>
      <li>$4.99/month</li>
      <li>$47.99/year (20% off)</li>
      <li>7-day free trial</li>
    </ul>
    <p>Why a subscription? Sync costs ongoing money to operate. The $14.99 you paid covers the desktop app — we'd rather charge fairly for the part with real recurring cost than raise the desktop price.</p>
    <ul style="list-style:none;padding:0">
      <li><a href="${base}/subscribe" style="color:#2563eb">Try Dash Sync</a></li>
      <li><a href="${base}/payment/manage" style="color:#2563eb">Manage / cancel subscription</a></li>
      <li><a href="${base}/payment/recovery" style="color:#2563eb">Re-download your Mac app</a></li>
    </ul>
    <p>If you don't want sync: nothing to do. Your desktop app keeps working as before.</p>
    <p>Questions or feedback: just reply to this email.</p>
    <p>— Ollie, Dash Notes<br/><a href="${base}">${base}</a></p>
  </body></html>`;
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to, subject, text, html }),
    });
    if (!res.ok) {
      const err = await res.text().catch(() => '');
      return { ok: false, error: `Resend ${res.status}: ${err.slice(0, 300)}` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

async function main() {
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('STRIPE_SECRET_KEY missing'); process.exit(1);
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2025-07-30.basil' });

  console.log(`[notify] starting${DRY_RUN ? ' (DRY RUN)' : ''}`);
  const state = loadState();
  console.log(`[notify] state: ${state.emailsSent.length} emails already sent`);
  const alreadySent = new Set(state.emailsSent);

  // Collect unique emails from paid checkout sessions.
  const emails = new Map<string, { sessionId: string; amount: number | null }>();
  let cursor: string | undefined;
  let pages = 0;
  while (true) {
    pages++;
    const page: Stripe.ApiList<Stripe.Checkout.Session> = await stripe.checkout.sessions.list({
      limit: 100,
      starting_after: cursor,
    });
    for (const s of page.data) {
      if (s.status !== 'complete') continue;
      if (s.payment_status !== 'paid') continue;
      if (s.mode !== 'payment') continue; // exclude subs
      const email = s.customer_details?.email?.trim().toLowerCase();
      if (!email) continue;
      if (!emails.has(email)) {
        emails.set(email, { sessionId: s.id, amount: s.amount_total });
      }
    }
    if (!page.has_more) break;
    cursor = page.data[page.data.length - 1]?.id;
    if (!cursor) break;
  }

  console.log(`[notify] scanned ${pages} pages, found ${emails.size} unique buyer emails`);

  let sent = 0;
  let skipped = 0;
  let errors = 0;
  const buyerEmails = Array.from(emails.keys());
  for (const email of buyerEmails) {
    if (alreadySent.has(email)) { skipped++; continue; }
    if (DRY_RUN) {
      console.log(`[notify] would send → ${email}`);
      sent++;
      continue;
    }
    const r = await sendNotification(email);
    if (r.ok) {
      state.emailsSent.push(email);
      sent++;
      console.log(`[notify] sent → ${email}`);
    } else {
      errors++;
      console.error(`[notify] FAIL ${email}: ${r.error}`);
    }
    // Save progress every 25 sends so a crash doesn't lose state.
    if (sent % 25 === 0) {
      state.lastRunAt = new Date().toISOString();
      saveState(state);
    }
    // Gentle pacing to stay under Resend's 10/s rate limit.
    await new Promise((res) => setTimeout(res, 120));
  }

  state.lastRunAt = new Date().toISOString();
  if (!DRY_RUN) saveState(state);
  console.log(`[notify] done: sent=${sent} skipped=${skipped} errors=${errors}`);
}

main().catch((err) => {
  console.error('[notify] fatal', err);
  process.exit(1);
});
