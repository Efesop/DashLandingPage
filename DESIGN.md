# Design Methodology and System — dashnote.io

**Last updated:** 8 September 2026 (homepage v3 "Steel / Cipher" live)

This is how visual work on the landing pages happens, and the system every page follows. Copy and product claims are governed by [PRODUCT_CONTEXT.md](./PRODUCT_CONTEXT.md); search targeting by [SEO.md](./SEO.md). `MOCKUP_DESIGN_GUIDE.md` (March 2026) is superseded by this file.

---

## 1. The process (do not skip steps)

1. **Design on the canvas first.** Every visual change, however small it sounds, starts on the Claude Design canvas **"Dash Notes Homepage"** (https://claude.ai/code/artifact/b592286f-f2e1-45ba-ac14-5c00055b48c8). Add artboards, never overwrite the history: earlier directions live on the "Explorations" page so decisions can be traced.
2. **Show two or three variations, not one.** Each variation gets a sticky note with *why* it exists and its *tradeoff*. A loose brief ("maybe like…", "I don't know") is a request for variations, never a go-ahead.
3. **Wait for a pick.** Nothing is built until the owner names a variation ("go with H2", "build it"). Combining two variations is a normal answer.
4. **Build on a branch, review on a Vercel preview.** Implement the pick on a feature branch (e.g. `cipher-hero`), push it, and share the branch preview URL (`dash-landing-page-git-<branch>-efesops-projects.vercel.app`, behind Vercel login). Production (`main` → dashnote.io) is never the first place a visual change appears.
5. **Verify before asking for review.** `npx tsc --noEmit`, `npx next build`, and a local preview check: computed styles, animation actually running, video playing, no console errors from the site. Restart the dev server after running a production build (a build wipes the dev server's CSS).
6. **Merge on approval.** Fast-forward the branch into `main`, confirm dashnote.io serves the change, then update the docs: this file for system changes, `PRODUCT_CONTEXT.md` for structure and copy, the canvas notes for the decision.

What was rejected, so it is not proposed again: a blue/lavender colour wash across the page ("too much colour, doesn't look like a privacy app"); a phone mockup in the desktop hero ("distracting"); a split headline/copy hero ("cramped, sites don't look like that"); pill buttons; gradient text; a wide silver field with a white stripe ("dark and boring"); invented proof (Product Hunt upvotes, testimonials, download counts).

---

## 2. Design principles

- **Monochrome with one accent.** Dash is a privacy product; colour reads as consumer or toy. White, silver, graphite and black carry the page. Dash blue `#2563eb` appears only on the primary button and the Dash column of the comparison table. Colour inside product mockups (a green lock, an amber timer) is product UI and is fine.
- **Show the product, not illustrations.** The hero holds the real app window playing the real demo; feature cards are UI moments from the actual app (the theme tiles are the Mac Settings tiles). No stock imagery, no abstract 3D.
- **Precise, quiet, alive.** Life comes from motion and texture, not hue: the animated binary field, the cards' UI moments, the self-destruct burn. Motion is slow and low-contrast.
- **Nothing invented.** Every number, quote and claim must be real. Placeholders (the proof-row avatars) are documented as placeholders until real material exists.
- **Rounded rectangles, never pills.** Buttons are 10px radius. Cards 20px. Bands and the ledger 24px.

---

## 3. Tokens (v3 Steel / Cipher)

| Role | Value |
|---|---|
| Page ground | `#fbfbfc` |
| Hero ground | `#ffffff` |
| Ink | `#0d0d0d` |
| Body text | `#4b5563` (gray-600); captions `#6b7280` (gray-500) |
| Hairline | `#e5e7eb` (gray-200); interactive borders `#d4d4d8` (gray-300) |
| Card | `#f5f5f7` with hairline border |
| Silver band (behind Compare and Pricing) | `linear-gradient(120deg, #f7f7f8 0%, #eeeff2 50%, #f7f7f8 100%)` |
| Ledger card | white → `#f3f4f6` gradient, hairline border |
| Graphite (sync card) | `#0f1115`; inner panel `#181b22`, border `#262a33` |
| Black band (closing CTA) | `#0d0d0d`; secondary text `#a3a3a3` |
| Footer | `#f5f5f7`, top hairline |
| Accent | `#2563eb` (hover `#1d4ed8`), primary button only |
| Success dot / lock chip | `#16a34a` / `#e3f4ea` + `#1a7f4b` (product UI colours) |

**Type.** Geist (local, `--font-geist-sans`) for everything; Geist Mono (`--font-geist-mono`) for spec rows, ciphertext and the binary field.
H1 76px / line 1.0 / tracking −0.045em / 800. Section H2 44px / −0.035em / 700 (sub-sections 40px and 32px). Body 17–20px / gray-600. Eyebrows 13px / 600 / uppercase / +0.06em / gray-500.

**Shape and depth.** Buttons `rounded-[10px]`, cards `rounded-[20px]`, bands and the ledger `rounded-[24px]`. Shadows only on the product window (`0 50px 120px -40px rgba(17,24,39,0.35)` + 1px ring) and floating chips. Everything else is flat with hairlines.

**Layout.** `container mx-auto px-6 lg:px-8`. The hero headline stack is centered: eyebrow, H1, one-sentence description, two buttons, proof row. The product window is `max-w-[980px]`, starts about 120px under the buttons and overlaps the hero by −170px into the page. Sections are separated by 80–96px, not by cards.

---

## 4. The binary motif (`app/components/BitsField.tsx`)

The page's texture is a field of 0s and 1s drawn on a 2D canvas. A slow diagonal "decrypt" sweep crosses it every few seconds, brightening and flipping the bits it passes; between sweeps the odd bit flickers. It says the one thing the product says: this is all anyone else ever sees of your notes.

Props: `ink` ("r,g,b"), `base` (resting alpha), `peak` (extra alpha at the sweep front), `cell` × `line` (grid, px), `font`, `fade` (fraction of height where the bottom fade begins), `clear` (soft ellipse cleared behind a headline), `period` (seconds per sweep). It draws at ~12 fps only while on screen and the tab is visible, and shows a still field under `prefers-reduced-motion`.

Where it lives on the homepage, and the settings:

| Spot | Settings |
|---|---|
| Hero (behind the headline, fades under the window) | `base 0.09 · peak 0.32 · fade 0.58 · clear · period 7` |
| Compare and Pricing bands (edges only; CSS mask hides the middle) | `base 0.07 · peak 0.18 · period 11`, `-z-10` inside `relative overflow-hidden isolate` |
| Security ledger card, 18px tape along the top | `base 0.16 · peak 0.34 · period 9 · cell 10.2 · line 18 · font 11` |
| Black closing band | `ink 255,255,255 · base 0.07 · peak 0.28 · period 8` |
| Footer divider, 18px line | `base 0.14 · peak 0.3 · period 13 · cell 10.2 · line 18 · font 11` |

Rules: never behind body copy above ~10% ink; always `clear` or mask behind headlines; fade it out under product imagery; about five spots per page is the ceiling. On other pages use at most the hero field and the footer divider.

---

## 5. Motion rules

- Every feature card shows a real UI moment (lock, theme switch, link, countdown and burn, duress unlock, ciphertext, local AI) on a shared ticker; all of it pauses off-screen and stops under reduced motion.
- Section reveals are a 16px rise and fade, once.
- The hero video autoplays muted, loops, and is served as `Dashdemo2-1280.mp4` (2.9 MB) with a poster. Re-record whenever the app layout changes; the current clip predates v1.6.
- No parallax, no cursor-following effects, no confetti.

---

## 6. Applying the system to other pages

### The article template (`app/components/seo/ArticleLayout.tsx`, restyled 8 Sep 2026)
Every SEO page, guide, comparison and alternatives page is a data-only server page on this layout. Top to bottom: `SEOHero` (white, the binary field cleared behind a 56px H1, eyebrow chip, one-sentence lede, blue primary + bordered "Read on", mono "Updated … · Dash team" caption) → intro prose (gray-600 at 18px, ink links with a grey underline, 24px h3s) → optional `comparison` (the reusable `ComparisonTable` with `band={false}`) → listicle (`#f5f5f7` cards, radius 20, mono index, the Dash entry on the white→`#f3f4f6` gradient with a `#d4d4d8` border and an ink "Our app" chip) → `InlineCTA` (one sentence over a primary button) → sections with 80–96px spacing, no alternating bands → `PricingSection band={false}` (three cards; `showPayment={false}` on short answer pages) → `FAQSection` → `RelatedLinks` ("Keep reading", hairline cards) → `CTASection bits={false}` (black band; the hero already carries the field) → footer divider bits → Footer. `MotionConfig reducedMotion="user"` wraps the page. Non-home pages get exactly two canvases: the hero field and the footer divider.

Legacy pages (the copy-pasted `*Content.tsx` skeletons) inherit the new hero, inline CTA, related links and closing band through the shared components, and keep their old middle sections until they are migrated onto this layout (see `SEO.md` and the execution plan: migrate when touched, one cleanup PR between sprints). `highlightedWord` and `variant` are still accepted by `SEOHero`/`InlineCTA`/`CTABanner` and ignored, so those pages compile; drop the props as each page migrates.

- Article and guide pages inherit the shared Header and Footer and stay on the white/silver palette with the accent reserved for the primary button (and the Dash column of a comparison table).
- Comparison and use-case pages may reuse the comparison table and the pricing cards; never re-tint them.
- Checkout (`PaymentSection`) is untouched by restyling: it is the real Stripe and Lightning form.
- When adding a section, ask first whether it is a card, a band, or plain flow. Most content is plain flow.

---

## 7. Files

- `app/page.tsx` — homepage composition and FAQ JSON-LD
- `app/components/HeroSection.tsx`, `BentoFeatures.tsx`, `ComparisonTable.tsx`, `SecurityLedger.tsx`, `UseCaseRow.tsx`, `PricingSection.tsx`, `FAQSection.tsx`, `CTASection.tsx`, `Header.tsx`, `Footer.tsx`, `BitsField.tsx`
- Design canvas: artboards `Main` (desktop), `MainMobile` (390px), `HeroE`–`HeroH3` (hero directions), `MacApp` / `PhoneApp` (reusable app mockups with a `theme` tweak), `MainV1` and `DirectionA`–`D` (earlier explorations)
