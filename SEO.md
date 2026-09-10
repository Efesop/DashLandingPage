# SEO Plan — dashnote.io

**Research date:** 8 September 2026 (DataForSEO Labs, Google US, English). **Plan of record** for what dashnote.io targets, which page owns which query, what to build next and how to measure it. Product claims must still follow [PRODUCT_CONTEXT.md](./PRODUCT_CONTEXT.md); page visuals follow [DESIGN.md](./DESIGN.md).

---

## 0. Progress log

| Date | Shipped | Ranking keywords | Top-10 | Est. visits/mo | Ref. domains | Notes |
|---|---|---|---|---|---|---|
| 2026-09-08 | Research; technical fixes; 7 query pages; homepage v3; article template (`article-template` branch) | 13 | 1 | ≈13 | 40 | Baseline from DataForSEO Labs |
| 2026-09-09 | **Consolidation** (`seo/consolidate-vs-pages`): deleted `/vs-notion`, `/vs-evernote`, `/vs-obsidian` and 301-redirected each to its `*-alternatives` listicle after folding in their comparison tables and unique context; pruned 29 duplicated keywords down to one owner each. 46 indexable routes | — | — | — | — | Merged to main |
| 2026-09-08 | **Migration 6** (`migrate/download-subscribe`): /download and /subscribe restyled in place (transactional pages, not rewritten); /subscribe gains its own metadata via a layout. **All 24 legacy pages are now migrated or restyled; no *Content.tsx files remain.** Full-site sweep: 49 routes, 0 errors | — | — | — | — | Merged to main |
| 2026-09-08 | **Migration 5** (`migrate/guides`): all nine guide bodies rewritten on ArticleLayout. `AIOrb` deleted. 23 of 24 legacy pages migrated; only /download remains | — | — | — | — | Merged to main |
| 2026-09-08 | **Migration 4** (`migrate/offline-share`): `/offline-notes` and `/share` rewritten on ArticleLayout; `/share` now describes the real mechanism (payload encrypted on device, key in the URL fragment, optional 30-day relay blob, EXIF stripped, attachments named not sent). `GlassCard` and the glassmorphism CSS deleted. 14 of 24 legacy pages migrated | — | — | — | — | Merged to main |
| 2026-09-08 | **Migration 3** (`migrate/for-pages`): `/for-writers`, `/for-journalists`, `/for-researchers`, `/for-bitcoiners` rewritten on ArticleLayout. Removed "never touches the cloud" and "local-only" claims; the researcher page now states plainly it is not a compliance system, and the bitcoiner page says outright that a seed phrase does not belong on a hot device | — | — | — | — | Merged to main |
| 2026-09-08 | **Migration 2** (`migrate/vs-pages`): all four `vs-*` pages rewritten on ArticleLayout. Fixed live copy that claimed Dash has no cloud sync, and stale competitor prices (Evernote free tier is now 50 notes, Starter $99/yr, Advanced $249.99/yr; Obsidian Sync $4/mo billed yearly, not $8). `FloatingOrbs` and the orb keyframes deleted. 8 of 24 legacy pages migrated | — | — | — | — | Merged to main |
| 2026-09-08 | **Migration 1** (`migrate/private-notes`): `/private-notes` rewritten on ArticleLayout with a Dash / Apple Notes / Notion / Evernote table; 4 of 24 legacy pages migrated (for-students, encrypted-notes, secure-journal, private-notes), 20 remain | — | — | — | — | Merged to main |
| 2026-09-08 | **S5 content** (`seo/sprint-5`, pulled forward): `/simplenote-alternative` (Automattic ended active development in March 2026), `/craft-alternative`. Gated items (private-ai-notes, homepage H1) still wait for December data | — | — | — | — | Merged to main; record ranks at +14 days |
| 2026-09-08 | **S4** (`seo/sprint-4`): `/apple-notes-alternative`, `/joplin-alternative`, `/bear-alternative`; Apple Notes export claims updated for macOS 26 Markdown export; Notion alternatives description trimmed | — | — | — | — | Merged to main; record ranks at +14 days |
| 2026-09-08 | **S3** (`seo/sprint-3`): `/is-apple-notes-secure`, `/is-notion-private`, `/standard-notes-vs-notesnook`, `/standard-notes-alternative`; lock guide title trimmed and its Apple-security FAQs handed to the new page; verified prices set on the open-source page | — | — | — | — | Merged to main; record ranks at +14 days |
| 2026-09-08 | **S2** (`seo/sprint-2`): `/journal-app-mac`, `/day-one-alternative`; `/secure-journal` re-targeted to "Encrypted Diary & Journal App" and migrated with a Dash / Day One / Journey comparison table; Bear and Day One facts corrected on `/best-notes-app-for-mac` | — | — | — | — | Merged to main; record ranks at +14 days |
| 2026-09-08 | **S1** (`seo/sprint-1`): `/therapist-notes-app`, `/open-source-notes-app`; `/for-students` re-titled and `/encrypted-notes` given an E2EE section, both migrated to ArticleLayout; `scripts/check-seo.mjs` | — | — | — | — | Merged to main; record ranks at +14 days |

## 1. Where we started

| Metric (Sep 8 2026) | dashnote.io |
|---|---|
| Ranking keywords (Google US) | 13 |
| Top-10 rankings | 1 ("encrypted diary", #10, `/secure-journal`) |
| Estimated organic visits / month | ≈13 |
| Referring domains | 40 |
| Domain rank | 19 |

Almost every other ranking was brand collision: "dash for mac", "dashnow", "dash/plus system", "apps for dash and dot" belong to Dash crypto, DashNow and the Dash & Dot robots. "dash notes" itself is ≈10 searches a month. The App Store name is **Dash Notes** (id 6766192836), so that is the brand string used everywhere.

**What was wrong on the site:** titles doubled the brand ("… - Dash | Dash"), pages targeted taglines rather than queries, `www` and apex were both indexed, the sitemap dated every page to build time, the hero video was 12 MB, and there were no pages for the highest-volume queries we can plausibly win (Mac notes app, notes app with password, duress password, alternatives).

## 2. Who wins this space, and how

| Site | Keywords | Visits / mo | Ref. domains | Lesson |
|---|---|---|---|---|
| notesnook.com | 687 | 5,552 | 1,153 | Homepage owns the commercial cluster ("end-to-end encrypted note-taking app" #3, "encrypted notes" #4, "open source note taking app" #6, "secure note taking app" #7). Docs and help pages win how-to and import queries. |
| lock.pub | 2,042 | 1,993 | 113 | A tiny product with **zero product-page rankings**; all traffic from a privacy how-to / alternatives blog ("privnote alternatives" #5 on 5,400 searches). |
| securednotes.io | 190 | 114 | 18 | Listicles alone get a small site to ~100 visits. |
| standardnotes.com | 507 | 227,610 | — | Brand and category head terms; not a model we can copy. |
| obsidian.md / evernote.com / notion.so | 44,758 / 36,559 / 822 | huge | — | Targets for "alternative" pages, not competitors for rankings. |

Takeaway: a small privacy app grows by (1) putting the category phrase on the homepage, (2) publishing alternatives and how-to pages against low-difficulty queries, and (3) collecting a modest number of relevant backlinks (directory listings, privacy communities).

## 3. Keyword clusters

Volume = US monthly searches; KD = DataForSEO difficulty 0–100. Bold = the primary query the page is written for.

| Cluster | Queries (vol / KD) | ≈ Total | Owner page |
|---|---|---|---|
| Mac notes app | **mac note taking app** 1,300/30 · note taking app for mac 1,300/30 · macbook pro notes app 1,600/26 · **best app for taking notes mac** 1,000/7 · notes app for mac 1,000/30 · macos notes app 1,000/29 · best notes app for mac 320/16 · mac notes app 320/31 | 7,000+ | `/best-notes-app-for-mac` |
| Password-protected notes | **notes app with password** 1,900/57 · **notes app password** 1,900/1 · password protected notes 170/21 · password protected notes app 170/57 · lock notes app 140/31 · notes app with lock 140/40 | 4,800 | `/password-protected-notes` |
| Lock notes how-to | **how to lock notes app on iphone** 1,600/16 · how to put a lock on notes 210/0 · how to lock notes on mac 70/3 · is apple notes secure 70/3 · how secure is apple notes 50/0 · is apple notes encrypted 40/7 · are apple notes private 30/13 | 2,100 | `/guides/lock-notes-on-iphone-and-mac` (how-to); `/is-apple-notes-secure` (S3, the security questions) |
| Duress password | **duress password** 1,600/4 · duress pin 210/0 | 1,800 | `/guides/duress-password` |
| Obsidian alternative | **obsidian alternative** 1,000/0 · best obsidian alternative 40/0 · obsidian encryption 90/0 · is obsidian encrypted 40/12 | 1,200 | `/obsidian-alternatives` (+ `/vs-obsidian`) |
| Evernote alternative | **evernote alternative** 880/9 · evernote alternative free 210/0 · best evernote alternative 140/16 | 1,200 | `/evernote-alternatives` (+ `/vs-evernote`) |
| Notion alternative | **notion alternative** 720/2 · is notion private 90/9 · is notion encrypted 70/3 · notion alternative free 30/4 | 900 | `/notion-alternatives` (+ `/vs-notion`); `/is-notion-private` (S3) |
| Private / encrypted notes (category) | **privacy notes** 1,300/22 · **private notes** 880/20 · secure note taking app 480/47 · secure notes 320/40 · encrypted notes 260/63 · end to end encrypted note taking app 320/36 · encrypted note taking app 260/37 · encrypted notes app 170/35 · private notes app 110/37 · private note taking app 110/32 | 4,000 | `/` (category), `/private-notes`, `/encrypted-notes` |
| Journal / diary on Mac | **journal app mac** 880/34 · journaling app mac 880/34 · diary app mac 880/39 · best journal app for mac 140/31 · best diary app for mac 140/26 · private journal 260/22 · encrypted diary (ranks #10) · private journal app 320/86 · private diary app 320/71 | 3,500 | `/journal-app-mac` (S2); `/secure-journal` re-targeted to the encrypted-diary cluster (S2) |
| Privnote / self-destructing | privnote 5,400/4 (brand) · **privnote alternatives** 110/1 · privnote alternative 110/2 · one time note 50/18 · disappearing note 40/18 · self destructing notes 90/22 · self destructing message 320/20 | 6,000 (mostly brand) | `/privnote-alternatives`, `/guides/self-destructing-notes` |
| Local / private AI | **private ai assistant** 590/10 · offline ai assistant 90/4 · ai notes taking app 4,400/19 (stretch) | 5,000 | `/guides/local-ai` |
| Seed phrase | **seed phrase storage** 390/11 · crypto seed phrase storage 110/2 · best way to store seed phrase 30/6 · where to store seed phrase 20/6 · seed phrase backup 20/11 | 570 | `/guides/seed-phrase-storage`, `/for-bitcoiners` |
| Students | **notes taking app for students** 1,000/27 | 1,000 | `/for-students` |
| Therapists | **therapist notes app** 590/6 · note taking app for therapists 10/5 · hipaa compliant notes app 40/0 | 640 | `/therapist-notes-app` (S1) |
| Open source | **open source note taking app** 590/32 · open source notes app 70/35 | 660 | `/open-source-notes-app` (S1) |
| Other alternatives | apple notes alternative 70/0 · joplin alternative 70/9 · bear alternative 50/0 · day one alternative 30/13 · standard notes alternative 20/0 · notesnook alternative 20 · simplenote alternative 20/10 · craft alternative 20/7 | 300 | `/day-one-alternative` (S2), `/standard-notes-alternative` (S3), `/apple-notes-alternative`, `/joplin-alternative`, `/bear-alternative` (S4), `/simplenote-alternative`, `/craft-alternative` (S5) |
| Comparisons | notesnook vs standard notes 40/0 · standard notes vs notesnook 30/0 · obsidian vs standard notes 30/0 | 100 | `/standard-notes-vs-notesnook` (S3) |
| Offline | offline notes app 50/15 · offline note taking app 50/37 · notes app offline (ranks #22) | 150 | `/offline-notes` |

Queries with **zero recorded volume** that still describe us and belong in copy (they convert even if nobody types them): notes app no account · notes app no subscription · one time purchase notes app · local first notes app · zero knowledge notes app · face id notes app · touch id notes app · e2ee notes · notes app no tracking · local ai notes app · ollama notes app · notes app for journalists.

Head terms we are **not** chasing: notes app 60,500/77 · app for taking notes 22,200/60 · best notes app 1,600/28 (generic, dominated by Apple/Google/Notion roundups) · burn after reading 90,500 (the film).

## 4. Page map (what exists, what it targets)

| Page | Primary query | Title (Sep 2026) |
|---|---|---|
| `/` | private / encrypted notes app (category) | Dash Notes: Private, Encrypted Notes App for Mac & iPhone |
| `/best-notes-app-for-mac` | mac note taking app, best app for taking notes mac | Best Notes App for Mac in 2026: 8 Apps Compared |
| `/open-source-notes-app` | open source note taking app | Open Source Note Taking Apps in 2026: 6 Compared |
| `/therapist-notes-app` | therapist notes app | Therapist Notes App: Private Session Notes on Mac & iPhone |
| `/password-protected-notes` | notes app with password | Notes App With Password Protection for Mac & iPhone |
| `/guides/lock-notes-on-iphone-and-mac` | how to lock notes app on iphone | How to Lock Notes on iPhone and Mac: Apple Notes and Beyond |
| `/is-apple-notes-secure` | is apple notes secure, is apple notes encrypted | Is Apple Notes Secure? Encryption, Locked Notes & iCloud |
| `/is-notion-private` | is notion private, is notion encrypted | Is Notion Private? What Notion Can See in Your Notes |
| `/standard-notes-vs-notesnook` | notesnook vs standard notes | Standard Notes vs Notesnook: Encryption, Price, Platforms |
| `/standard-notes-alternative` | standard notes alternative | Standard Notes Alternatives (2026): Rich Text, Encrypted |
| `/apple-notes-alternative` | apple notes alternative | Apple Notes Alternatives in 2026: Encrypted, Exportable |
| `/joplin-alternative` | joplin alternative | Joplin Alternatives in 2026: Nicer Apps, Same Privacy |
| `/bear-alternative` | bear alternative | Bear Alternatives in 2026: Encrypted, Buy Once |
| `/simplenote-alternative` | simplenote alternative | Simplenote Alternatives in 2026: Simple, Private, Offline |
| `/craft-alternative` | craft alternative | Craft Alternatives in 2026: Block Editors That Stay Local |
| `/guides/duress-password` | duress password | Duress Password: What It Is & How to Set One Up |
| `/obsidian-alternatives` | obsidian alternative | 8 Obsidian Alternatives in 2026 (Simpler, Encrypted or Free) |
| `/notion-alternatives` | notion alternative | Notion Alternatives That Keep Your Notes Private (2026) |
| `/evernote-alternatives` | evernote alternative | Evernote Alternatives Without a Subscription (2026) |
| `/privnote-alternatives` | privnote alternatives | Privnote Alternatives: Self-Destructing, Encrypted Notes (2026) |
| `/vs-google-keep` | google keep alternative | Google Keep Alternative Without Google Tracking |
| `/private-notes` | private notes, privacy notes | Private Notes App: Notes That Stay on Your Device |
| `/encrypted-notes` | encrypted notes app, end to end encrypted note taking app | Encrypted Notes App with AES-256 for Mac & iPhone |
| `/offline-notes` | offline notes app | Offline Notes App That Works Without Internet |
| `/journal-app-mac` | journal app mac, journaling app mac, diary app mac | Journal App for Mac (2026): 7 Journaling & Diary Apps |
| `/day-one-alternative` | day one alternative | Day One Alternatives in 2026: Private Journals, Buy Once |
| `/secure-journal` | encrypted diary, private journal, diary app with password | Encrypted Diary & Journal App for Mac and iPhone |
| `/guides/local-ai` | private ai assistant | Local AI Notes App: Private AI Assistant That Runs Offline |
| `/guides/seed-phrase-storage` | seed phrase storage | Seed Phrase Storage: How to Store a Seed Phrase Securely |
| `/guides/self-destructing-notes` | self destructing notes | Self-Destructing Notes: Notes That Auto-Delete |
| `/for-students` `/for-writers` `/for-journalists` `/for-researchers` `/for-bitcoiners` | audience pages (students: notes taking app for students) | Notes Taking App for Students (Private, Works Offline) · Private Writing App for Writers & Manuscripts · Secure Notes App for Journalists · Secure Notes App for Researchers · Private Notes App for Bitcoiners & Seed Phrases |
| `/guides/app-lock` `/guides/encryption` `/guides/offline-first` `/guides/privacy-first-note-taking` `/guides/page-linking` | supporting explainers | (see each page) |
| `/download` | dash notes for mac (brand) | Download Dash Notes for Mac, iPhone & Web |

Technical state (done Sep 8 2026): title template `%s | Dash Notes` in `app/layout.tsx`; `www` → apex 301 in `next.config.js`; static per-page `lastModified` in `app/sitemap.ts` (bump the date whenever a page changes); Organization / WebSite / SoftwareApplication JSON-LD in the layout and homepage; FAQPage JSON-LD on the homepage; Article + FAQ + ItemList JSON-LD on the seven new pages via `lib/seo.ts`; shared `app/components/seo/ArticleLayout.tsx`; hero video 2.9 MB with a poster.

## 5. Plan

### A. Pages to build (in this order)

1. ✅ S1 (Sep 8 2026) **`/therapist-notes-app`** — therapist notes app (590/6). Angle: private session notes that never touch a vendor's server, lock and duress protection. Must say plainly that Dash is not a HIPAA-covered service or an EHR; it is a private notebook.
2. ✅ S1 (Sep 8 2026) **`/open-source-notes-app`** — open source note taking app (590/32). Listicle: Joplin, Standard Notes, Notesnook, Logseq, Trilium, Dash (MIT). Link the GitHub repo prominently.
3. ✅ S2 (Sep 8 2026) **`/journal-app-mac`** — journal app mac / journaling app mac / diary app mac (2,600 across the three, KD 34–39). Listicle of Mac journaling apps with Dash's encrypted angle. Then re-title `/secure-journal` to "Encrypted Diary & Journal App for Mac and iPhone" so it keeps the "encrypted diary" ranking it already has instead of chasing "private journal app" (KD 86).
4. ✅ S3 (Sep 8 2026) **`/is-apple-notes-secure`** — is apple notes secure / how secure is apple notes / is apple notes encrypted / are apple notes private (190 total, KD ≤13). Short answer page; links to the lock guide and `/password-protected-notes`.
5. ✅ S3 (Sep 8 2026) **`/is-notion-private`** — is notion private / is notion encrypted (160, KD ≤9). Links to `/notion-alternatives`.
6. ✅ S3 (Sep 8 2026) **`/standard-notes-vs-notesnook`** — notesnook vs standard notes and the reverse (70, KD 0), with Dash as the third column.
7. **Alternative batch** on one template (✅ `/day-one-alternative` S2, ✅ `/standard-notes-alternative` S3, ✅ `/apple-notes-alternative` `/joplin-alternative` `/bear-alternative` S4, ✅ `/simplenote-alternative` `/craft-alternative` S5 — batch complete): `/apple-notes-alternative`, `/joplin-alternative`, `/bear-alternative`, `/day-one-alternative`, `/standard-notes-alternative`, `/simplenote-alternative`, `/craft-alternative`. Each is cheap (KD 0–13) and reuses the comparison table.
8. **`/private-ai-notes`** only if `/guides/local-ai` fails to move on "private ai assistant" within three months.

### B. Pages to redo

- ✅ S2: `/secure-journal` re-targeted to "Encrypted Diary & Journal App for Mac and iPhone" and migrated; Day One's free-plan encryption and Bear's per-note encryption corrected on the Mac roundup.
- ✅ S1: `/for-students` re-titled "Notes Taking App for Students (Private, Works Offline)", H1 carries the query.
- ✅ S1: `/encrypted-notes` has the "end-to-end encrypted note taking app, when you sync" section (320/36).
- Homepage: the visible H1 is the brand line ("Your notes are none of our business."); the category phrase lives in the eyebrow, description and title. If the homepage has not entered the top 20 for "private notes app" by December 2026, move the category into the H1.
- OG image (`/images/Dashfeature1.png`) and all screenshots still show the pre-1.6 layout. Re-capture.

### C. Words to use

Say **private notes app**, **encrypted notes app**, **notes app with password**, **lock notes**, **works offline**, **no account**, **buy once** ($14.99 one-time for Mac), **optional end-to-end encrypted sync** (Dash Sync), **duress password** (primary; "decoy password" only as a synonym), **self-destructing notes**, **Mac / iPhone** (searchers say "mac notes app", "macbook notes app"), **AES-256-GCM**, **open source (MIT)**. Always name the platform in titles: Mac and iPhone are the differentiators against browser-only competitors.

Do not say: "no subscriptions", "no cloud sync", "never syncs", "zero network requests", "military-grade", "no servers to subpoena", Windows/Linux apps, live collaboration (see PRODUCT_CONTEXT.md).

### D. On-page rules for every new or edited page

- Title ≤ 60 characters, query first, no brand (the template appends "| Dash Notes"). One H1 carrying the query. Description 140–160 characters: query + one differentiator (no account / buy once / works offline).
- Use `pageMetadata()` and `ArticleLayout` for articles; pass `articleJsonLd` with `dateModified` equal to the page's sitemap date; add a FAQ block whose visible answers match the `faqJsonLd` exactly.
- Listicles: 1,200–2,000 words, a comparison table, real prices and real platform facts, Dash placed honestly (never "#1 best").
- Internal links: every article links to the homepage, `/download`, and two or three sibling pages in the same cluster; add the page to the Guides index, the Header/Footer menus where relevant, and `app/sitemap.ts`.
- Images: real screenshots on the current layout, descriptive alt text, under 200 KB.
- Refresh titles that carry a year each January.

### E. Off-page

1. **Privacy Guides** listing (Dash meets their criteria: open-source clients, E2EE sync, standard export). Highest-value single link in this niche.
2. Directory listings: AlternativeTo, OpenAlternative, awesome-privacy and awesome-selfhosted style lists, Product Hunt (already exists), Slant.
3. App Store: add a review prompt in the iOS app; ratings currently 0, which hurts the "notes app iphone" surface.
4. Communities: r/privacy, r/macapps, r/PrivacyGuides, Hacker News "Show HN" for the open-source angle. Participate; do not drop links.
5. Guest posts and podcast mentions on privacy blogs; the how-to guides are the linkable assets.

### F. Cadence and measurement

- Two articles a month from §5A, in order. One refresh of an existing page a month.
- Monthly: DataForSEO `ranked_keywords` for dashnote.io (positions, new keywords), `bulk_traffic_estimation`, referring domains. Record the numbers at the top of this file.
- Set up Google Search Console for the apex domain if it is not already verified; run PageSpeed Insights once the free quota resets (it was exhausted on Sep 8 2026).
- Targets: **March 2027** — 100+ ranking keywords, 300 organic visits a month, 60 referring domains. **September 2027** — 1,000 organic visits a month, top-10 for "duress password", "obsidian alternative", "privnote alternatives", "best app for taking notes mac".

## 6. Running DataForSEO

The owner's account is used through the signed-in **API Playground** (app.dataforseo.com/api-playground/…), never with the API password in scripts. Useful endpoints, all Google US / English: DataForSEO Labs `keyword_overview` (volume, KD, intent), `keyword_suggestions` (long-tail), `ranked_keywords` (what a domain ranks for), `bulk_traffic_estimation` (visits), `competitors_domain`; SERP `organic` for a single query. Labs calls cost roughly $0.01–0.05 each. The raw JSON is large: extract the columns you need and keep the source tables in `seo/` alongside the plan when you rerun the research.
