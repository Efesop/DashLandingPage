# Dash landing page — dashnote.io

Marketing site, checkout, and support pages for [Dash](https://dashnote.io), the privacy-first, offline-first notes app. The app itself lives in the sibling repo [Efesop/rich-text-editor](https://github.com/Efesop/rich-text-editor).

**Read [PRODUCT_CONTEXT.md](./PRODUCT_CONTEXT.md) before writing or editing any copy.** It is the source of truth for what Dash does, what it costs, and which claims are off-limits (for example: sync is optional and end-to-end encrypted, live collaboration is not shipped, Windows/Linux are not shipped).

## Stack

Next.js (App Router) + React + Tailwind CSS + framer-motion, deployed on Vercel (auto-deploys on push to `main`).

## Routes

| Area | Routes |
|------|--------|
| Marketing | `/` (homepage), `/download`, `/share`, `/changelog`, `/privacy-policy`, `/terms` |
| Purchase | `/subscribe` (Dash Sync plans → Stripe Checkout), `/payment/success`, `/payment/cancel`, `/payment/recovery` (re-download the Mac app), `/payment/manage` (Stripe Billing Portal), `/payment/portal-return` |
| Support | `/sync-check` (phone-side diagnostic for the sync relay) |
| SEO | `/private-notes`, `/encrypted-notes`, `/offline-notes`, `/secure-journal`, `/for-*` use cases, `/vs-*` comparisons, `/guides/*` |
| API | `app/api/` — `create-checkout-session`, `verify-payment`, `webhook` (Stripe → relay entitlements), `customer-portal`, `download-recovery`, `generate-download-token`, `secure-download`, `latest-release`, `voltage/*` (Bitcoin Lightning) |

`next.config.js` also rewrites `/relay/*` to the Dash Sync relay on Deno Deploy so phones that block `*.deno.net` can still sync.

## Development

```bash
npm install
cp env.example .env.local   # fill in Stripe, Voltage, relay and download secrets
npm run dev                 # http://localhost:3000
npm run build               # production build (runs type-check + lint)
```

## Editing rules

- Every product claim must match the current app. Check `PRODUCT_CONTEXT.md` and the app repo's `FEATURES.md` / `CHANGELOG.md`.
- FAQ answers rendered on a page must be identical to that page's FAQPage JSON-LD (Google requires it).
- Pricing: Mac $14.99 one-time; Dash Sync $4.99/mo or $47.99/yr with a 7-day trial; iPhone and web are free. Say "no subscription required", never "no subscriptions".
- Screenshots and video currently show the pre-v1.6 app layout; re-capture before relying on them.

## Other docs

- [PRODUCT_CONTEXT.md](./PRODUCT_CONTEXT.md) — product facts, positioning, do/don't list
- [COMPONENT_STRUCTURE.md](./COMPONENT_STRUCTURE.md) — homepage component map
- [MOCKUP_DESIGN_GUIDE.md](./MOCKUP_DESIGN_GUIDE.md) — visual style rules for mockups and sections
- [docs/voltage-payments.md](./docs/voltage-payments.md) — Bitcoin Lightning checkout setup
