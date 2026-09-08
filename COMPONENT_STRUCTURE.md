# Component Structure

**Last Updated**: September 8, 2026 (homepage rebuilt from the "Dash Notes Homepage" design canvas)

## Homepage (`app/page.tsx`)
Server component: SoftwareApplication + FAQPage JSON-LD, then the sections below in order. The FAQ answers in `FAQSection.tsx` must stay identical to the FAQPage JSON-LD here.

| # | Component | Purpose |
|---|-----------|---------|
| 1 | `Header.tsx` | Fixed nav (hides on scroll down). Brand "Dash Notes"; Use Cases / Compare / Guides dropdowns; "Free on iPhone" + "Get Dash for Mac" buttons (rounded rectangles, 10px). |
| 2 | `HeroSection.tsx` | Centered headline block (eyebrow, H1, description, two buttons, proof row) then the full-width Mac window with the video.js demo (`Dashdemo2-1280.mp4` + poster) on a dotted panel with two live chips and a trust strip. Exports `APP_STORE_URL`. |
| 3 | `BentoFeatures.tsx` | Seven animated feature cards on a 3-column bento grid. A shared `useTicker` drives each card; animation runs only while the section is in view and not under `prefers-reduced-motion`. |
| 4 | `ComparisonTable.tsx` | Dash vs Notion / Evernote / Obsidian, 12 rows, real `<table>` with the Dash column tinted; scrolls horizontally on small screens. |
| 5 | `SecurityLedger.tsx` | "The details are the promise." copy + monospace spec rows + GitHub link. |
| 6 | `UseCaseRow.tsx` | Five link cards to the /for-* pages. |
| 7 | `PricingSection.tsx` | Three cards: Mac = `<PaymentSection embedded />` (the real Stripe + Lightning checkout, logic untouched, carries `id="payment-section"`), iPhone free, Dash Sync → /subscribe. |
| 8 | `FAQSection.tsx` | Seven-item accordion. |
| 9 | `CTASection.tsx` | Blue rounded closing band with two buttons. |
| 10 | `Footer.tsx` | Brand, privacy badges, use-case / compare / guide links. |

## Shared
- `PaymentSection.tsx` — checkout form. Without `embedded` it renders the full section used on every SEO page (header, side mockup, form). With `embedded` it renders only the card.
- `components/seo/*` — `SEOHero`, `InlineCTA`, `CTABanner`, `RelatedLinks`, and `ArticleLayout` (the shared layout for the alternatives / roundup / guide pages added Sep 2026).
- `lib/seo.ts` — `pageMetadata`, `articleJsonLd`, `faqJsonLd`, `itemListJsonLd`.

## Removed Sep 8 2026
`FeatureShowcase`, `CoreFeatures`, `LocalAISection`, `SecuritySection`, `BiometricLockSection`, `AdvancedSecuritySection`, `BenefitsSection` (homepage-only; superseded by the bento and ledger). `AIOrb` remains (used by the Local AI guide).

## Design source
Design canvas: https://claude.ai/code/artifact/b592286f-f2e1-45ba-ac14-5c00055b48c8 (page "Homepage" = desktop + phone; page "Explorations" = the four rejected directions). Style: white ground, ink #0d0d0d, muted #6b7280, cards #f5f5f7 at 20px radius, accent #2563eb, Geist; buttons are 10px rounded rectangles, never pills.
