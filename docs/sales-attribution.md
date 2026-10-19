# Sales attribution

Which dashnote.io page led to a sale, without analytics. Every Stripe checkout the site creates records the page whose buy button was clicked. Nothing else is collected: no cookies, no localStorage or sessionStorage, no third-party script, no IP or browser data. The values live only in Stripe metadata.

## What gets recorded

| Metadata key | Value | Set on |
|---|---|---|
| `source_page` | Path of the page the buy button was on, e.g. `/private-notes` or `/subscribe` | Mac and Sync checkout sessions, the Mac payment, the Sync subscription |
| `from_page` | Sync only: the page that linked to `/subscribe`, e.g. `/private-notes` (from `/subscribe?from=…`) | Sync checkout session and subscription |
| `ref` | Campaign tag from `?ref=` (or `utm_source`) on the page's URL, lowercased, e.g. `hn` | Wherever `source_page` is |

The Mac checkout sits on the page itself, so `source_page` is the article. The Sync checkout lives on `/subscribe`, so for Sync the article is in `from_page` and `source_page` is `/subscribe`. **The page a sale came from is `from_page` when it is set, otherwise `source_page`.** A Sync sale with no `from_page` came straight to `/subscribe`, from a bookmark, an external link or the Mac app's Dash Sync button.

The checkout route (`app/api/create-checkout-session/route.ts`) drops any value that doesn't match exactly: paths must match `^/[a-z0-9/_-]{0,100}$`, refs `^[a-z0-9_-]{1,40}$`. The client side is `lib/attribution.ts`, `lib/payment.ts` (Mac), `app/subscribe/page.tsx` (Sync) and `app/components/SubscribeLink.tsx` (adds `?from=` to the "Start free trial" and "Want sync?" links).

Existing metadata is unchanged: the webhook still branches on `session.mode` and `metadata.product_type`.

## The `?ref=` convention

Add `?ref=<tag>` to links posted outside the site, so sales from them are tagged:

| Where | Tag |
|---|---|
| Hacker News | `?ref=hn` |
| Reddit | `?ref=reddit` (or `reddit-macapps`, `reddit-privacy` per subreddit) |
| Product Hunt | `?ref=producthunt` (Product Hunt adds this itself) |
| Newsletter / email | `?ref=newsletter` |
| X / Mastodon / Bluesky | `?ref=x`, `?ref=mastodon`, `?ref=bluesky` |

Lowercase letters, digits, `-` and `_` only, up to 40 characters; anything else is dropped. `utm_source` is read when there is no `ref`, but a value with dots in it (`news.ycombinator.com`) is dropped, so prefer `ref`.

The tag only survives on the page the link lands on (and on to `/subscribe` from it). If the visitor clicks through to another article before buying, the tag is lost. That is the price of not storing anything in the browser.

## Reading it

Only sessions created after this shipped (October 2026) have the keys. Sales from earlier are unattributed.

### Stripe Dashboard

The Dashboard search finds payments and subscriptions by metadata value:

- `source_page:/private-notes`: Mac payments from that page
- `from_page:/private-notes`: Sync subscriptions started from that page
- `ref:hn`: anything tagged `hn`

Open a payment or subscription and the keys are in its Metadata panel.

### Stripe API or the Stripe MCP

The account is shared with Linkjolt, so filter to Dash checkouts first. The Stripe MCP is account `acct_1MXohHKXxPB1KCuR`, livemode true.

1. List checkout sessions since a date: `GetCheckoutSessions` with `created[gte]=<unix timestamp>` and `limit=100`, following `starting_after` until `has_more` is false.
2. Keep sessions whose `success_url` contains `dashnote.io` (that drops Linkjolt's). Keep `status: complete` for sales; `status: expired` or `open` are abandoned checkouts, which also carry the keys.
3. Group by `metadata.from_page || metadata.source_page`, split by `metadata.product_type` (`mac-license` / `sync-sub`) and `metadata.ref`.

A Sync subscription that is still in its trial shows `status: complete` on the session with `amount_total` 0. It is a trial start, not yet money; check the subscription's status for whether it converted.

### Preview deployments

Vercel previews use the live Stripe key, so test checkouts made on a preview are real (unpaid) sessions. Their `success_url` is the preview's `*.vercel.app` host, not dashnote.io, so step 2 above leaves them out.
