# Dash - Product Context & Source of Truth

This document is the accurate, current description of Dash for anyone (human or AI) working on the landing page, marketing copy, or SEO content. When this file and a page on dashnote.io disagree, this file wins — fix the page.

**Last Updated**: September 8, 2026
**Current Version**: v1.6.3 (Mac + web, released Sep 8 2026). iOS App Store build is 1.5.6 (build 77); 1.6.1 (build 78) is built and awaiting upload.
**Status**: Shipping on macOS, iOS (App Store), and the web (PWA). Windows and Linux are not shipped.

The app's own docs are the deeper source: `FEATURES.md`, `CHANGELOG.md`, `SYNC.md`, and `guides/` in the sibling repo `/Users/ollie/rich-text-editor` (public on GitHub).

---

## Product Overview

Dash is a **privacy-first, offline-first note-taking app**. Everything is stored on your device by default, protected by AES-256 encryption, with no account and no telemetry. Since v1.5 (2026) an **optional, end-to-end-encrypted Dash Sync subscription** keeps notes in step across Mac, iPhone, iPad, and the web — the relay only ever stores ciphertext it cannot read. Sync is off unless the user turns it on.

### One-Liners
- "Own your notes for real!"
- "Your notes, your device, your privacy."
- "Offline by default. Encrypted if you sync."

### Elevator Pitch
Dash is a beautiful, privacy-first notes app that keeps your thoughts on your device and encrypted by default. Unlike Notion, Evernote, or Google Keep, nothing leaves your Mac, iPhone, or browser unless you decide it should — and when you do (encrypted sharing, or the optional Dash Sync subscription) it leaves as ciphertext that our servers cannot read. No account is needed for note-taking. Trusted by journalists, lawyers, writers, and privacy-minded professionals.

---

## Target Audience

### Primary Users (Privacy-Focused)
- Privacy-conscious individuals who want control over their data
- Security-minded users who distrust cloud-first software
- Data-ownership and local-first advocates
- Offline-first users (travellers, low-connectivity areas)

### Secondary Users (Professional Use Cases)
- Journalists (sources, investigations)
- Lawyers and legal professionals (client confidentiality)
- Activists and organizers
- Students and researchers
- Writers and authors
- Bitcoiners (seed phrase storage, opsec notes)
- Developers (open source, auditable)

### User Pain Points We Solve
- "I don't trust my notes in someone else's cloud"
- "I need my notes to work without internet"
- "I want to encrypt specific sensitive notes"
- "I want my notes on my phone and my Mac without handing them to a company"
- "I don't want to create an account just to take notes"
- "I need a tool that doesn't track or profile me"

---

## Key Features

### 🔒 Privacy & Security

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Offline by Default** | Full functionality with no internet and no account | Notes never leave the device unless you share or sync |
| **AES-256-GCM Encryption** | Page-level password protection; PBKDF2-SHA256 key derivation (600k iterations) | Locked notes are unreadable without the password |
| **App Lock & Auto-Lock** | Whole-app lock with configurable idle timeout (1/5/15/30 min, custom, never); instant lock with Cmd+Shift+L on Mac | Protection when you step away |
| **Touch ID / Face ID** | Biometric unlock on macOS (Touch ID) and iOS (Face ID / Touch ID), for the app and for individual locked pages | Fast, secure access |
| **Decoy Password (Duress)** | Secondary password shows decoy notes; real data stays encrypted on disk (hide mode only — wipe mode is disabled) | Plausible deniability |
| **Self-Destructing Notes** | Auto-delete after 1h / 12h / 1d / 7d / 30d or custom, with a live countdown badge | Sensitive info disappears on schedule |
| **Seed Phrase Storage** | Numbered 12/24-word grid with BIP-39 validation, multi-word paste, clipboard auto-clear | Safe place for wallet recovery phrases |
| **Encrypted Sharing** | Read-only E2E encrypted share links; key in the URL fragment; optional relay storage auto-deleted after 30 days; EXIF stripped from images | Share without exposing content to any server |
| **Dash Sync (optional)** | E2E encrypted multi-device sync of notes, folders, tags, attachments, version history; relay stores ciphertext only | Same notes on Mac, iPhone, iPad, web |
| **Trash & Auto-Backup** | 30-day recoverable Trash; scheduled encrypted `.dashpack` backups (both independent of sync) | Recover from mistakes |
| **Local AI** | Ollama, LM Studio, LocalAI, Jan, or any OpenAI-compatible localhost server; summarize / rewrite / continue / explain / chat | AI help with nothing sent to the cloud |
| **No Telemetry** | Zero analytics; the only network calls are the desktop update check, opt-in sharing, opt-in sync, and any local-AI endpoint you configure | No profiling |
| **Open Source** | MIT, public GitHub repo | Auditable |

### 📝 Note Taking

| Feature | Description |
|---------|-------------|
| **Block Editor** | Editor.js: paragraphs, H2–H4, bullet / numbered / checklist items, quotes, code (20 languages), tables, images, embeds (YouTube, Vimeo, GitHub, Twitter), delimiters, seed phrase block, file attachments |
| **Attachments** | Images (JPEG, PNG, GIF, WebP) and PDFs up to 10 MB, stored on device, magic-bytes validated |
| **Version History** | Up to 10 versions per page, restore as a new page; locked pages never capture versions |
| **Page Linking** | Type `[[` for wiki-style links; clickable, theme-aware |
| **Multi-Block Selection** | Drag-select blocks and convert them in one go |
| **Focus Mode** | Cmd+Shift+F: typewriter scrolling, paragraph dimming, session stats |
| **Quick Switcher** | Cmd+P fuzzy jump to any note |
| **Undo / Redo** | Cmd+Z / Cmd+Shift+Z, rebuilt in 2026 |
| **Auto-Save** | 300 ms debounce with a save indicator |
| **Import / Export** | PDF, Markdown, Plain text, DOCX, RTF, JSON, XML, CSV; encrypted `.dashpack` bundles; import JSON / Markdown / TXT / DOCX / CSV |

### 🗂️ Organization
- Folders (with emoji icons), color-coded tags, drag-and-drop reordering
- Sort: custom, newest, oldest, A–Z, Z–A, by tag
- Full-text search (Fuse.js) combined with tag filters; on iPhone, filter chips for All / a tag / Locked

### 🎨 Design & UX (v1.6, September 2026)
- **Four themes**, labelled **Light, Dark, Night, Terminal** (internal ids `light`, `dark`, `darkblue`, `fallout`; "Night" was previously called "Dark Blue" and "Terminal" was "Fallout"). There is no "Solarized" theme.
- **Match system appearance** — follow the macOS / iOS light-dark setting, using the user's preferred dark theme.
- **Mac layout** — page title sits in the document with tags, date and word count beneath it; the toolbar lives in the title bar (Lock page, Self-destruct, Export, Settings gear, ⋯ menu); Settings popover holds themes, App lock, Dash Sync, Backups, Trash, Keyboard shortcuts, updates; sidebar has FOLDERS / NOTES sections.
- **iPhone layout** — full-width Notes screen with large title, search, filter chips, sections, and a thumb-zone New note button; **swipe left to trash, swipe right to lock**; Appearance sheet (header sun/moon) and Settings sheet (footer).
- **Update card** on Mac (Later / Download) with a dot on the ⋯ menu.

> ⚠️ All screenshots, videos and mockups on dashnote.io were captured before v1.6 and show the old layout (header bar, sidebar-footer settings, theme names "Dark Blue" / "Fallout"). Re-capture before using them as accurate product imagery.

---

## Platform Support

| Platform | Type | Status | Notes |
|----------|------|--------|-------|
| **macOS** | Native Electron app (DMG, Apple Silicon + Intel), signed & notarized, auto-updates | ✅ Shipping | $14.99 one-time. Best experience. |
| **iOS (iPhone / iPad)** | Native Capacitor app on the App Store (`io.dashnote.app`, App Store ID 6766192836) | ✅ Shipping | Free download. Face ID / Touch ID. Dash Sync via Apple In-App Purchase. |
| **Web (PWA)** | https://efesop.github.io/rich-text-editor/ — installable, IndexedDB storage | ✅ Shipping | Free. Android users use this. |
| **Windows / Linux** | Electron build targets exist in the code | ❌ Not shipped | Do not promise them. The release pipeline builds macOS only. |

Storage: macOS = JSON files in `~/Library/Application Support/Dash/`; iOS = on-device app storage (sync vault key in the Keychain); PWA = IndexedDB.

---

## Pricing & Business Model

| Product | Price | Rail | Notes |
|---------|-------|------|-------|
| **Dash for Mac** | **$14.99 one-time**, lifetime updates | Stripe card checkout or Bitcoin Lightning (Voltage) on dashnote.io | Desktop license only — does **not** include sync |
| **Dash for iPhone** | Free | App Store | Works fully offline without a subscription |
| **Dash on the web (PWA)** | Free | — | Same as iOS |
| **Dash Sync** | **$4.99 / month** or **$47.99 / year** (~20% off), **7-day free trial** | iOS: Apple In-App Purchase (RevenueCat). Mac / web: Stripe via dashnote.io/subscribe | One subscription unlocks sync on every device. Required for sync on every platform. Manage at dashnote.io/payment/manage (Stripe) or iOS Settings → Subscriptions. |

- Identity for sync is a **passwordless magic-link email** (6-digit code). The relay only ever sees the email → entitlement mapping, never notes.
- Mac buyers are not grandfathered into sync (sync did not exist when Mac was sold as a one-time purchase); the app is fully usable without it.
- Purchase recovery: dashnote.io/payment/recovery.
- **Messaging rule**: "no subscription required" is true; "no subscriptions" is not. Say the app is a one-time purchase and that the optional sync add-on is the only subscription.

### Open Source Context
- MIT licensed, public repo: https://github.com/Efesop/rich-text-editor
- We sell the Mac app for convenience, signed builds, auto-updates and support. Mention open source for trust; don't lead with "free".

---

## Competitive Positioning

| Feature | Dash | Notion | Evernote | Obsidian |
|---------|------|--------|----------|----------|
| Works 100% offline | ✅ | ❌ | ❌ | ✅ |
| No account required | ✅ (local use) | ❌ | ❌ | ✅ |
| Zero tracking | ✅ | ❌ | ❌ | ✅ |
| AES-256-GCM page encryption | ✅ | ❌ | ❌ | ❌ |
| No subscription required | ✅ | ❌ | ❌ | ✅ (core app) |
| End-to-end encrypted sync | ✅ (optional) | ❌ | ❌ | ✅ (Obsidian Sync, paid) |
| Biometric lock | ✅ | ❌ | ✅ | ❌ |
| Self-destructing notes | ✅ | ❌ | ❌ | ❌ |
| Decoy password | ✅ | ❌ | ❌ | ❌ |
| Encrypted sharing links | ✅ | ❌ | ❌ | ❌ |
| Local (on-device) AI | ✅ | ❌ | ❌ | plugins |
| Native iPhone app | ✅ | ✅ | ✅ | ✅ |

### Key Differentiators
1. **Offline and encrypted by default** — privacy by architecture, not policy
2. **Sync you can actually trust** — E2E encrypted, ciphertext-only relay, optional
3. **One-time purchase for the app** — the only subscription is the optional sync add-on
4. **Security features nobody else has** — decoy password, self-destruct, seed phrase storage
5. **Open source** — auditable
6. **Local AI** — on-device via Ollama / LM Studio
7. **Beautiful, focused design** — v1.6 layout on Mac and iPhone

### Not shipped — do not market
- **Live collaboration / live sessions**: built but gated off (`LIVE_SESSIONS_ENABLED = false`). No page, FAQ, comparison row, or privacy-policy section should describe it as available.
- **Windows / Linux desktop apps**.
- **Android native app** (Android = PWA).

---

## Technical Details

### Tech Stack (the app)
- Next.js 13, React 18, Editor.js 2.30, Tailwind, Zustand, @dnd-kit, Fuse.js
- Desktop: Electron 32 (macOS). Mobile: Capacitor 8 (iOS). Web: next-pwa
- Crypto: WebCrypto AES-256-GCM, PBKDF2-SHA256 (600,000 iterations), bcryptjs for password hashes
- Sync + identity + entitlement relay: Deno Deploy (`server/` in the app repo). Primary host `dash-relay.efesop.deno.net`; `dashnote.io/relay` is a same-origin proxy (Vercel rewrite on this site) for networks that block `*.deno.net`. Diagnostic page: dashnote.io/sync-check.
- Payments: Stripe (Mac one-time + sync subscription, customer portal), Voltage (Lightning), RevenueCat (iOS IAP). Transactional email: Resend.

### Security Facts (safe to quote)
- AES-256-GCM authenticated encryption; PBKDF2-SHA256 with 600,000 iterations
- Keys derived and stored on device only; sync vault key never leaves the user's devices
- DOMPurify sanitization; Electron sandbox; rate-limited unlock attempts
- Local AI is restricted to localhost / 127.0.0.1 endpoints
- Relay stores ciphertext, timestamps and IPs for abuse prevention, and (for sync subscribers) email + subscription status

### Words to avoid
- "military-grade encryption" (say AES-256-GCM)
- "zero network requests" (say offline by default; sharing, sync and updates are opt-in / explicit)
- "no servers to subpoena" (say notes stay on your device by default and leave only as ciphertext)
- "no subscriptions" (say no subscription required; sync is optional)
- "no cloud sync" (say sync is optional and end-to-end encrypted)

---

## Brand Voice & Messaging

### Tone
Confident, straightforward, empowering, approachable. No fluff, no fear-mongering.

### Key Messages
1. "Your notes, your device, your privacy"
2. "Own your notes for real"
3. "Offline by default. Encrypted if you sync."
4. "No account needed. No tracking. No compromises."
5. "One-time purchase for the app — sync is the only add-on"

### Words to Use
✅ Privacy, Encrypted, Offline, Local, Own, Control, AES-256, End-to-end, Zero-knowledge, One-time purchase, Optional sync, Mac, iPhone

### Words to Avoid
❌ "Cloud" as a positive, "Account" / "Sign up" as requirements, Tracking, Analytics, Telemetry, "Free forever" (web/iOS are free, but lead with the Mac purchase), "Live collaboration", "Windows app"

---

## Landing Page Structure (dashnote.io, September 2026)

### Homepage (`app/page.tsx`) — rebuilt Sep 8 2026, v3 "Steel / Cipher" (design canvas "Dash Notes Homepage"; system and process in [DESIGN.md](./DESIGN.md))

Palette: white and silver, ink `#0d0d0d`, Dash blue only on the primary button and the Dash column of the comparison table. Texture: a faint animated field of binary (`BitsField`) behind the hero, at the edges of the Compare and Pricing bands, as a tape on the security ledger, in white inside the black closing band, and as the footer divider.
1. Header — "Dash Notes", nav (Features, Security, Use Cases / Compare / Guides dropdowns, Pricing, FAQ), "Free on iPhone" + black "Get Dash for Mac" (rounded rectangles, no pills)
2. Hero — white, with the animated binary field (a slow diagonal "decrypt" sweep) cleared behind the headline; centered: eyebrow, H1 "Your notes are none of our business.", one-sentence description, blue "Get Dash for Mac $14.99, once" + outlined "Free on iPhone" (10px rounded rectangles), proof row (avatars are placeholders until real people are supplied; "100+ downloads · Open source (MIT) · Works offline"), then the 980px Mac window playing the demo video, overlapping into the page, with two floating chips (encrypted, self-destruct countdown) and a trust strip. **Video still shows the pre-1.6 layout — re-record.**
3. Bento (`BentoFeatures.tsx`) — seven animated cards: lock a note, four themes, [[links]], self-destructing notes, duress password, sync ledger (dark, what the relay sees), local AI. Animations pause off-screen and under prefers-reduced-motion.
4. Comparison table — on a silver band; Dash / Notion / Evernote / Obsidian, 12 rows, Dash column tinted blue
5. Security ledger — "The details are the promise." + mono spec rows + GitHub link
6. Use-case row — journalists, writers, students, researchers, bitcoiners (links to /for-*)
7. Pricing (`PricingSection.tsx`) — three cards: Mac (the real Stripe/Bitcoin checkout form, `PaymentSection embedded`), iPhone free (App Store), Dash Sync (→ /subscribe)
8. FAQ — 7 questions; **answers must match the FAQPage JSON-LD in `page.tsx`**
9. Closing band — black with faint white binary, "Your notes. Your device. Nobody else's server." + white and outlined buttons
10. Footer

### Other routes
- `/download` — Mac card, web card, platform availability table (macOS, iPhone/iPad App Store link, Web PWA, Android via PWA, Windows/Linux not yet)
- `/subscribe` — Dash Sync plans (monthly / yearly, 7-day trial) → Stripe Checkout
- `/payment/success`, `/payment/cancel`, `/payment/recovery` (re-download), `/payment/manage` (Stripe Billing Portal), `/payment/portal-return`
- `/share` — encrypted sharing explainer (live collaboration removed Sep 2026)
- `/sync-check` — phone-side connectivity diagnostic for the sync relay
- `/changelog` — links to GitHub Releases
- `/privacy-policy`, `/terms`
- SEO pages: `/private-notes`, `/encrypted-notes`, `/offline-notes`, `/secure-journal`, and (Sep 8 2026, on `ArticleLayout`) `/best-notes-app-for-mac`, `/password-protected-notes`, `/obsidian-alternatives`, `/notion-alternatives`, `/evernote-alternatives`, `/privnote-alternatives`, `/guides/lock-notes-on-iphone-and-mac`, `/open-source-notes-app`, `/journal-app-mac`, `/day-one-alternative`, `/is-apple-notes-secure`, `/is-notion-private`, `/standard-notes-vs-notesnook`, `/standard-notes-alternative`, `/apple-notes-alternative`, `/joplin-alternative`, `/bear-alternative`, `/simplenote-alternative`, `/craft-alternative` — targeting and the build queue live in [SEO.md](./SEO.md). `/for-students`, `/encrypted-notes`, `/secure-journal` (now "Encrypted Diary" in the menus) and `/private-notes` moved onto `ArticleLayout` in Sep 2026; the other legacy pages migrate one PR at a time (see SEO.md §0)
- Use cases: `/for-journalists`, `/for-writers`, `/for-students`, `/for-researchers`, `/for-bitcoiners`, `/therapist-notes-app` (Sep 8 2026; states plainly that Dash is not an EHR or a HIPAA service)
- Comparisons: `/vs-notion`, `/vs-evernote`, `/vs-obsidian`, `/vs-google-keep`
- Guides: `/guides/{encryption,self-destructing-notes,offline-first,privacy-first-note-taking,app-lock,duress-password,page-linking,seed-phrase-storage,local-ai}` (reference content in the app repo's `guides/` folder)

### API routes (`app/api/`)
`create-checkout-session` (mac-license | sync-monthly | sync-yearly), `verify-payment`, `webhook` (Stripe → relay entitlements), `customer-portal`, `download-recovery`, `generate-download-token`, `secure-download`, `latest-release`, `voltage/{create-invoice,verify-payment,webhook}`. The `/relay/*` rewrite in `next.config.js` proxies to the Deno relay.

---

## Downloads & Links

- Landing page: https://dashnote.io
- Mac purchase: https://dashnote.io (#payment-section) · recovery: https://dashnote.io/payment/recovery
- Dash Sync: https://dashnote.io/subscribe · manage: https://dashnote.io/payment/manage
- iOS App Store: https://apps.apple.com/app/id6766192836
- Web app (PWA): https://efesop.github.io/rich-text-editor/
- GitHub: https://github.com/Efesop/rich-text-editor · releases: https://github.com/Efesop/rich-text-editor/releases
- Twitter/X: https://twitter.com/efesopoulos
- Support: support@dashnote.io

---

## Frequently Asked Questions (canonical answers)

1. **How is Dash different?** Everything stays on your device by default — no cloud servers, no data collection. If you turn on optional Dash Sync, notes are encrypted before they leave your device, so even our relay cannot read them.
2. **How much is Dash?** Mac app $14.99 one-time with lifetime updates. iPhone and web are free. The only subscription is optional Dash Sync: $4.99/month or $47.99/year, 7-day free trial.
3. **Can I sync between devices?** Yes — Dash Sync (E2E encrypted, optional subscription), or manual encrypted `.dashpack` export/import with no subscription.
4. **Why is sync a subscription?** The relay costs money to run; we charge where the cost lives instead of raising the app price. Sync is off by default.
5. **How secure is the encryption?** AES-256-GCM with PBKDF2-SHA256 (600k iterations), performed on your device.
6. **What if I lose my device?** Without Dash Sync or exported backups, the notes on that device are gone. Use scheduled encrypted backups or sync.
7. **Touch ID / Face ID?** Yes — Touch ID on Mac, Face ID / Touch ID on iPhone, for the app and for individual locked pages.
8. **Is it open source?** Yes, MIT, on GitHub.
9. **Which platforms?** Mac (paid), iPhone/iPad (free, App Store), web PWA (free). Windows/Linux not yet.

---

## Metadata & SEO

The keyword research, page-to-query map, build queue and measurement plan are in [SEO.md](./SEO.md). Facts that matter when editing copy:

- Brand string everywhere: **Dash Notes** (the App Store name). Title template `%s | Dash Notes` in `app/layout.tsx`; page titles carry the query and no brand.
- Homepage title: "Dash Notes: Private, Encrypted Notes App for Mac & iPhone". Description: "Dash Notes is a private, encrypted notes app for Mac, iPhone and the web. Offline by default, no account needed, AES-256 encryption, and optional end-to-end encrypted sync."
- `www.dashnote.io` 301s to the apex. `app/sitemap.ts` holds a static per-page `lastModified` — bump it when a page changes.
- JSON-LD: Organization + WebSite (layout), SoftwareApplication + FAQPage (homepage; FAQ answers must match the visible FAQ), Article + FAQ + ItemList on article pages via `lib/seo.ts`.
- OG image: `/images/Dashfeature1.png` (pre-1.6 layout — re-capture).

---

## Version History (recent)

| Version | Date | Highlights |
|---------|------|-----------|
| **1.6.3** | Sep 8 2026 | Mac update card positioning hotfix |
| **1.6.2** | Sep 8 2026 | Clickable desktop menus fix, flush sticky table headers, expanded-folder cue |
| **1.6.1** | Sep 7 2026 | iPhone: full-width Notes screen, swipe to trash / lock, Appearance + Settings sheets, match iOS appearance (iOS build 78, not yet on the App Store) |
| **1.6.0** | Sep 7 2026 | Mac: title in the document, title-bar toolbar with Settings gear + ⋯ menu, Settings popover, match macOS appearance, themes relabelled Light / Dark / Night / Terminal, new update card, lighter tables and headings |
| **1.5.6 / 1.5.5** | Sep 6 2026 | Sync reachable on phones that block `*.deno.net` (relay name fallback, `dashnote.io/relay` proxy); `/sync-check` page |
| **1.5.4 – 1.5.1** | Sep 6 2026 | Mac release pipeline fixes; paused-sync state on expired subscription; sign-in loop fix |
| **1.5.0** | 2026 (iOS approved Jul 20; Mac DMG Sep 6) | **Dash Sync** subscription (E2E encrypted), magic-link sign-in, native iOS App Store app, Capacitor 8, entitlement gate on every platform |
| 1.4.0 | 2026 | Sync alpha, scheduled encrypted auto-backups, Trash |
| 1.3.x | Mar 2026 | Local AI, rebuilt undo/redo, page linking, seed phrase storage, decoy app, version history, attachments, micro-animations |

Full notes: `CHANGELOG.md` in the app repo and GitHub Releases.

---

## Marketing Guidelines

### Do ✅
- Lead with privacy, encryption, offline-by-default
- Show $14.99 one-time for Mac clearly; show Dash Sync pricing and the 7-day trial wherever sync is mentioned
- Say the iPhone app is native and on the App Store; Android uses the PWA
- Quote real specs (AES-256-GCM, PBKDF2-SHA256 600k)
- Keep FAQ visible text and FAQPage JSON-LD identical
- Re-capture screenshots/video on the v1.6 layout before using them as product imagery

### Don't ❌
- Don't say "no subscriptions", "no cloud sync", "never syncs", or "zero network requests" — say sync is optional and E2E encrypted
- Don't market live collaboration / live sessions (gated off)
- Don't promise Windows / Linux apps
- Don't call the mobile app a PWA-only experience — iOS is native now
- Don't use the old theme names "Dark Blue" / "Fallout" or invent a "Solarized" theme
- Don't say "military-grade" or "no servers to subpoena"

---

**Document Version**: 2.1 (Sep 8 2026: homepage v3 Steel/Cipher, DESIGN.md + SEO.md added; 2.0 rewrote the file for v1.6.3; v1.1 described v1.3.85)

Update this file whenever platforms, pricing, major features, or positioning change.
