# Dash - Product Context & Source of Truth

This document provides the complete, accurate context about Dash for use by AI, developers, marketers, or anyone working on the landing page, marketing materials, or SEO content.

**Last Updated**: March 2, 2026
**Current Version**: v1.3.85+
**Status**: Active development, Mac + Web versions available

---

## Product Overview

Dash is a **privacy-first, offline note-taking application** designed for people who want complete control over their data without relying on cloud services, accounts, or internet connectivity.

### One-Liners
- "Own your notes for real!"
- "Your notes, your device, your privacy. No cloud, no tracking, no compromises."
- "The only notes app that puts you in complete control."

### Elevator Pitch
Dash is a beautiful, privacy-first note-taking app that keeps your thoughts offline and encrypted by default. Unlike Notion, Evernote, or Google Keep, your data stays on your device — protected by AES-256-GCM encryption with PBKDF2-SHA256 key derivation (600k iterations). Optional E2E encrypted sharing and live collaboration let you work with others without compromising privacy. Built for people who value their privacy above all else — no accounts, no tracking, no compromises. Trusted by journalists, lawyers, and professionals who need true privacy.

---

## Target Audience

### Primary Users (Privacy-Focused)
- **Privacy-Conscious Individuals** - People who value their digital privacy and want complete control over their data
- **Security-Minded Users** - People who distrust cloud services and prefer local-first software
- **Data Ownership Advocates** - Users who believe in owning their data, not renting it from big tech companies
- **Offline-First Advocates** - People who want tools that work without internet dependency
- **Privacy Enthusiasts** - Users actively seeking alternatives to mainstream note apps due to privacy concerns

### Secondary Users (Professional Use Cases)
- **Journalists** - Handle sensitive sources and information, need offline, encrypted note-taking
- **Lawyers & Legal Professionals** - Client confidentiality, attorney-client privilege protection
- **Activists & Organizers** - Protect sensitive planning and information from surveillance
- **Healthcare Professionals** - Patient information protection (when used carefully)
- **Students** - Need reliable, distraction-free note-taking with data privacy
- **Writers & Authors** - Want a clean, focused writing environment with full data control
- **Developers** - Appreciate open-source, self-hostable solutions
- **Digital Minimalists** - Prefer simple tools that do one thing well
- **Remote Workers** - Work in areas with limited/no internet (remote locations, flights, etc.)

### User Pain Points We Solve
- "I don't trust my notes in someone else's cloud"
- "I want a note app that truly respects my privacy"
- "I need my notes to work without internet"
- "I want to encrypt specific sensitive notes"
- "I'm tired of subscription-based note apps that mine my data"
- "I want to own my data, not rent access to it"
- "I don't want to create an account just to take notes"
- "I need a tool that doesn't track or profile me"

---

## Key Features

### 🔒 Privacy & Security

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Offline by Default** | No internet required for core functionality | Your notes never leave your device unless you choose to share |
| **AES-256 Encryption** | AES-256-GCM with PBKDF2-SHA256 (600k iterations) | Protect sensitive notes with passwords |
| **No Account Required** | Use immediately, no sign-up | Zero personal data collected |
| **No Tracking** | Zero analytics or telemetry | Complete privacy, no profiling |
| **Local Storage** | Data stored in user directory | You control where your data lives |
| **Zero-Knowledge Design** | Even we can't read your notes | Data encrypted before touching storage |
| **Touch ID / Biometric Lock** | Unlock app or individual pages with fingerprint | Fast, secure access without typing passwords |
| **Auto-Lock** | Configurable timeout (1/5/15/30 min) + Cmd+Shift+L instant lock | Automatic protection when you step away |
| **Self-Destructing Notes** | Auto-delete after 1h/1d/7d/30d with countdown | Sensitive info disappears automatically |
| **Decoy Password** | Secondary password shows decoy notes under coercion | Plausible deniability, data hidden not deleted |
| **Encrypted Sharing** | Share notes via E2E encrypted links (AES-256-GCM) | Zero-knowledge relay, auto-deleted after 30 days |
| **Live Collaboration** | Real-time E2E encrypted editing sessions | WebSocket relay, encryption key in URL fragment |
| **EXIF Stripping** | Auto-removes GPS, camera info from pasted images | Prevents metadata leaks from photos |
| **Image Privacy** | EXIF metadata stripped on paste | No accidental location or device info exposure |
| **Local AI** | Connect to Ollama, LM Studio, or any local AI server for writing assistance | AI-powered summarize, rewrite, chat — entirely on-device, no cloud |

### 📝 Note Taking

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Rich Text Editor** | Headers, lists, checklists, quotes, code blocks, tables, images | Full formatting without complexity |
| **Multiple Block Types** | Paragraphs, headers, lists, code, tables, images, embeds | Flexible content creation |
| **Code Blocks** | Syntax-highlighted code with language support | Developer-friendly note-taking |
| **Tables** | Insert and edit tables within notes | Organize structured data |
| **Image Support** | Embed images in notes | Visual note-taking |
| **Focus Mode** | Distraction-free writing (Cmd+Shift+F) | Deep concentration mode |
| **Live Word Count** | Real-time character/word counting | Track writing progress |
| **Auto-Save** | Changes saved automatically | Never lose work |
| **Multi-Block Selection** | Select multiple blocks and convert types with floating toolbar | Batch formatting changes |
| **Page Linking** | Wiki-style [[ links between notes | Build a connected knowledge base |

### 📤 Export & Portability

| Feature | Description | Benefit |
|---------|-------------|---------|
| **PDF Export** | Professional PDF output | Share or print notes |
| **Markdown Export** | Standard .md format | Use notes in any tool |
| **Word/DOCX Export** | Microsoft Word format | Professional documents |
| **Encrypted Bundles** | .dashpack format | Securely share between devices |
| **JSON/XML Export** | Raw data formats | Developer-friendly backups |

### 🗂️ Organization

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Folders** | Nested organization | Keep notes structured |
| **Color-Coded Tags** | Visual categorization | Quick identification |
| **Quick Switcher** | Cmd+P to jump to any note instantly | Keyboard-first navigation |
| **Fuzzy Search** | Find-as-you-type | Instant results |
| **Smart Filtering** | Filter by folder, tag, or search | Find anything fast |

### 🎨 Design & UX

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Light Theme** | Clean, bright interface | Comfortable daytime use |
| **Dark Theme** | Easy on the eyes | Late night writing |
| **Fallout Theme** | Retro terminal aesthetic | Unique, fun experience |
| **Solarized Theme** | Warm, balanced color palette | 4th theme option |
| **Responsive Design** | Works on any screen | Desktop to mobile |
| **Minimal Interface** | Distraction-free | Focus on writing |

---

## Platform Support

### Current Platforms (Available Now)

| Platform | Type | Status | Best Experience |
|----------|------|--------|-----------------|
| **macOS** | Native Electron App | ✅ **PRIMARY** | 🏆 **BEST** - Full features, auto-updates, native performance |
| **Web (PWA)** | Progressive Web App | ✅ Available | Good - Works on any browser, installable |

### Platform Details

#### macOS (Primary Platform)
- **Download Format**: DMG (ARM64 for Apple Silicon, Intel available)
- **Auto-updates**: Yes
- **Installation**: Drag and drop
- **Performance**: Native, optimized
- **GitHub**: [Releases page](https://github.com/Efesop/rich-text-editor/releases)

#### Web (PWA)
- **Access**: [https://efesop.github.io/rich-text-editor/](https://efesop.github.io/rich-text-editor/)
- **Installation**: Install from browser (Safari, Chrome, Firefox)
- **Storage**: IndexedDB (browser storage)
- **Works on**: iOS, Android, any modern browser
- **Note**: Less performant than native Mac app, but fully functional

### Platforms NOT Currently Supported
- ❌ Windows native app (not yet available)
- ❌ Linux native app (not yet available)
- ❌ iOS native app (use Web PWA instead)
- ❌ Android native app (use Web PWA instead)

---

## Pricing & Business Model

### Current Pricing
- **Price**: $14.99 USD
- **Type**: One-time payment
- **License**: Lifetime access
- **Includes**:
  - Full access to Dash
  - Lifetime license (no subscriptions)
  - Free updates and new features
  - Priority customer support
- **Payment**: Stripe checkout
- **Platforms**: Mac download provided after purchase

### Open Source Context
- **Status**: Open source ([GitHub repo](https://github.com/Efesop/rich-text-editor))
- **License**: Code is publicly available
- **Building from source**: Technically possible (free), but we sell for convenience
- **Marketing approach**: Focus on paid version, don't emphasize "free" messaging
- **Why buy?**: Convenience, support development, automatic updates, priority support

---

## Competitive Positioning

### How Dash Compares

| Feature | Dash | Notion | Evernote | Obsidian |
|---------|------|--------|----------|----------|
| 100% Offline | ✅ | ❌ | ❌ | ✅ |
| No Account Required | ✅ | ❌ | ❌ | ✅ |
| Zero Tracking | ✅ | ❌ | ❌ | ✅ |
| AES-256-GCM Encryption | ✅ | ❌ | ❌ | ❌ |
| No Monthly Subscription | ✅ | ❌ | ❌ | ⚠️ |
| Free to Sync | ✅ | ❌ | ❌ | ❌ |
| Rich Text Editor | ✅ | ✅ | ✅ | ⚠️ |
| No Cloud Dependencies | ✅ | ❌ | ❌ | ✅ |
| Biometric Lock | ✅ | ❌ | ✅ | ❌ |
| Self-Destructing Notes | ✅ | ❌ | ❌ | ❌ |
| Decoy Password | ✅ | ❌ | ❌ | ❌ |
| Encrypted Sharing | ✅ | ❌ | ❌ | ❌ |
| Live Collaboration (E2E) | ✅ | ❌ | ❌ | ❌ |
| Local AI (on-device) | ✅ | ❌ | ❌ | ❌ |
| Cross-Platform | ✅ | ✅ | ✅ | ✅ |

### Key Differentiators
1. **True Privacy** - Not "privacy-focused" marketing, actually offline-first
2. **No Vendor Lock-In** - Export everything in standard formats
3. **One-Time Purchase** - No subscriptions, lifetime access
4. **Open Source** - Audit the code yourself (but we sell for convenience)
5. **Beautiful Design** - Privacy doesn't mean ugly
6. **AES-256-GCM Encryption** - With PBKDF2-SHA256 (600k iterations)
7. **Encrypted Sharing** - E2E encrypted share links with zero-knowledge relay
8. **Live Collaboration** - Real-time E2E encrypted editing sessions
9. **Local AI** - AI writing assistance that runs entirely on-device via Ollama, LM Studio, or any OpenAI-compatible local server

---

## Technical Details

### Tech Stack
- **Frontend**: Next.js 14, React 18
- **Editor**: Editor.js
- **Desktop**: Electron (macOS)
- **Mobile**: Progressive Web App (PWA)
- **Styling**: Tailwind CSS, Radix UI
- **Encryption**: AES-256-GCM
- **State Management**: Zustand
- **Payment**: Stripe

### Data Storage

| Platform | Method | Location |
|----------|--------|----------|
| macOS | JSON files | `~/Library/Application Support/Dash/` |
| Web PWA | IndexedDB | Browser storage |

### Security Features
- **Encryption**: AES-256-GCM encryption for password-protected pages
- **Key Derivation**: PBKDF2-SHA256 (600,000 iterations)
- **Biometric Authentication**: Touch ID support for app unlock and individual page lock
- **Auto-Lock**: Configurable inactivity timeout (1/5/15/30 min) + Cmd+Shift+L instant lock
- **Self-Destructing Notes**: Auto-delete after configurable time (1h/1d/7d/30d)
- **Random Generation**: Cryptographically secure
- **XSS Protection**: DOMPurify sanitization
- **Network Isolation**: No network requests by default (sharing/collaboration opt-in, E2E encrypted)
- **AI Localhost Enforcement**: Hard localhost-only restriction for AI connections — no data sent to external servers
- **Encrypted Sharing**: AES-256-GCM, zero-knowledge relay, 30-day auto-delete
- **Live Sessions**: E2E encrypted WebSocket relay, random 256-bit key per session
- **EXIF Stripping**: Automatic removal of GPS, camera info from pasted images
- **Electron Security**: Sandbox enabled
- **Rate Limiting**: Password attempt protection

---

## Brand Voice & Messaging

### Tone
- **Confident** - We know privacy matters
- **Straightforward** - No marketing fluff
- **Empowering** - You own your data
- **Approachable** - Not intimidating or overly technical

### Key Messages (Priority Order)

**PRIMARY (Use these most)**
1. "Your notes, your device, your privacy"
2. "Own your notes for real"
3. "The only notes app that puts you in complete control"
4. "No cloud. No tracking. No compromises."
5. "100% offline. 100% private."

**SECONDARY (Use sparingly)**
6. "Beautiful notes, brutal privacy"
7. "Privacy shouldn't require a subscription"
8. "The note app built for privacy advocates"

### Words to Use
✅ Privacy, Secure, Encrypted, Offline, Local, Own, Control, AES-256
✅ Beautiful, Clean, Minimal, Focused, Distraction-free
✅ Cross-platform, Portable, Export, Sync (device-to-device)
✅ One-time payment, Lifetime access, No subscription

### Words to Avoid
❌ Cloud (in a positive context), Server, Account, Sign up
❌ Track, Analytics, Telemetry, Data collection
❌ Cloud AI, AI-powered (generic) — use "Local AI" to distinguish on-device processing
❌ Free, Free forever (even though it's open source - focus on paid version)

---

## Landing Page Structure (Current Implementation)

### Homepage Sections (in order)
1. **Header** - Navigation with dropdowns (Use Cases, Compare), "Get Dash" CTA button
2. **Hero Section** - Centered layout, video demo with browser chrome, trust badges, "Get Dash for Mac" CTA
3. **Feature Showcase** - Dark section highlighting encryption, offline, zero tracking
4. **Core Features** - Rich text editing, quick switcher, organization, focus mode, import/export with live demo
5. **Local AI Section** - On-device AI with Ollama/LM Studio, guided actions, chat mode, localhost enforcement
6. **Security Section** - Technical security details, AES-256 specs, auto-lock, Touch ID
6. **Biometric Lock Section** - Touch ID/biometric showcase with animated lock/unlock mockup
7. **Benefits Section** - "No Cloud, No Worries" - works anywhere, lightning fast, stress-free
8. **Comparison Table** - vs Notion, Evernote, Obsidian (includes biometric lock, self-destructing notes)
9. **Payment Section** - $14.99 purchase, Stripe checkout
10. **FAQ Section** - 7 common questions including Touch ID/biometric
11. **CTA Section** - Final call-to-action with trust indicators
12. **Footer** - Privacy features, use case links, comparison links, social links

### Key CTAs
- **Primary**: "Get Dash for Mac" (scrolls to payment section)
- **Secondary**: "Buy Now" ($14.99 Stripe checkout)
- **Tertiary**: "Already purchased? Recover your downloads"

---

## SEO & Content Strategy

### Recommended Additional Pages (Priority Order)

#### Privacy-Focused (HIGH PRIORITY)
1. `/privacy` - Our privacy philosophy in depth
2. `/security` - Technical security details
3. `/private-notes` - SEO page for "private note taking"
4. `/encrypted-notes` - SEO page for "encrypted note taking"
5. `/offline-notes` - SEO page for "offline note taking"
6. `/open-source` - Why we're open source (lower priority, mention but don't overemphasize "free")

#### Comparison Pages
7. `/vs-notion` - Dash vs Notion comparison (privacy angle)
8. `/vs-evernote` - Dash vs Evernote comparison (privacy angle)
9. `/vs-apple-notes` - Dash vs Apple Notes comparison (privacy angle)
10. `/vs-obsidian` - Dash vs Obsidian comparison

#### Use Cases (SECONDARY)
11. `/for-journalists` - Use case for journalists
12. `/for-lawyers` - Use case for lawyers
13. `/for-privacy-advocates` - Use case for privacy-focused users
14. `/for-students` - Use case for students
15. `/for-writers` - Use case for writers

#### Other
16. `/features` - Full feature breakdown
17. `/changelog` - Version history
18. `/roadmap` - Future plans

### Blog Post Ideas (Priority Order)

**Privacy-Focused (PRIMARY)**
1. "Why Your Notes Shouldn't Live in the Cloud"
2. "The True Cost of 'Free' Note-Taking Apps"
3. "How to Keep Your Notes Private in 2026"
4. "Privacy-First Note Taking: Why It Matters"
5. "Comparing Note-Taking Apps: A Privacy Perspective"
6. "The Case for Local-First Software"
7. "What Your Note App Knows About You"

**Technical (SECONDARY)**
8. "How We Built a Truly Offline Note App"
9. "Understanding AES-256 Encryption"
10. "Open Source Note Taking: Building vs. Buying"

---

## User Journey

### Awareness → Consideration → Decision → Retention

#### 1. Awareness
- User searches "private note taking app" or "offline notes app"
- Lands on SEO page, comparison page, or homepage
- Sees Mac + Web availability

#### 2. Consideration
- Reads features, sees screenshots/video
- Compares to current tool (Notion, Evernote, etc.)
- Checks if it works on their platform (Mac is best)
- Sees $14.99 one-time payment (no subscription)

#### 3. Decision
- Clicks "Get Dash for Mac"
- Completes $14.99 Stripe checkout
- Receives secure download link via email

#### 4. Retention
- Auto-updates keep app fresh (Mac)
- Export features prevent lock-in
- Lifetime license, no recurring costs
- Word of mouth referrals

---

## Downloads & Links

### Official Links
- **Landing Page**: https://dashnote.io (this site)
- **Web App (PWA)**: https://efesop.github.io/rich-text-editor/
- **GitHub Releases**: https://github.com/Efesop/rich-text-editor/releases
- **Source Code**: https://github.com/Efesop/rich-text-editor
- **Creator Twitter**: https://twitter.com/efesopoulos
- **Buy Me Coffee**: https://buymeacoffee.com/efez

### Payment & Recovery
- **Purchase**: https://dashnote.io (payment section, $14.99 via Stripe)
- **Recovery**: https://dashnote.io/payment/recovery (re-download if purchased)
- **Success Page**: https://dashnote.io/payment/success (after purchase)

---

## Frequently Asked Questions (Order by Priority)

### 1. How is Dash different from other notes apps?
Dash is the only notes app that keeps everything 100% on your device. No cloud servers, no data collection, no corporate surveillance. Your notes are encrypted and completely private.

### 2. How much is Dash?
Dash is a one-time purchase of $14.99 with no subscriptions or hidden costs. You get lifetime access, free updates, and priority support.

### 3. What platforms does Dash work on?
Dash works best on **Mac** (native app with auto-updates). We also have a **Web version (PWA)** that works on any browser, including iOS and Android devices. Mac is recommended for the best experience.

### 4. How secure is the encryption?
Dash uses AES-256-GCM encryption, the same standard used by banks and governments. Your notes are encrypted locally on your device with PBKDF2-SHA256 key derivation (600,000 iterations) before being saved, ensuring complete privacy.

### 5. What happens if I lose my device?
Since your notes are stored locally, losing your device means losing your notes. We recommend regularly exporting your notes as encrypted backups (.dashpack files) to external storage for safekeeping.

### 6. Can I sync between devices?
Dash doesn't offer cloud sync to maintain your privacy. However, you can export your notes as encrypted files (.dashpack) and import them on other devices manually. This keeps your data under your control.

### 7. Why don't you offer cloud storage?
Cloud storage requires sending your data to external servers, which compromises privacy. Dash's core principle is keeping your data exclusively on your device where you have complete control.

### 8. Is Dash open source? (Lower priority - don't overemphasize)
Yes, Dash is open source. The full source code is available on [GitHub](https://github.com/Efesop/rich-text-editor) for anyone to audit. We sell Dash for convenience, support, and automatic updates, but you can build it yourself if you prefer.

### 9. Can I try Dash before buying?
Yes! You can use the [Web version (PWA)](https://efesop.github.io/rich-text-editor/) for free to try Dash. For the best experience with automatic updates and native performance, we recommend the Mac app ($14.99 one-time).

### 10. What if I need to download Dash again?
If you've already purchased Dash, you can [recover your download link](https://dashnote.io/payment/recovery) at any time. Your purchase includes lifetime access.

---

## Metadata & SEO

### Homepage Metadata (Current)
- **Title**: "Dash - Own Your Notes For Real | Private, Encrypted Notes App"
- **Description**: "AES-256 encrypted notes app that keeps your data offline and private by default. No cloud, no tracking, no accounts needed. E2E encrypted sharing and live collaboration when you need it."
- **Keywords**: private notes app, encrypted notes, offline notes, secure note taking, privacy notes, no cloud notes, local storage notes, AES-256 encryption, privacy-first app, encrypted sharing
- **OG Image**: https://dashnote.io/og-image.png
- **Creator**: @efesopoulos

### Schema.org Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Dash",
  "applicationCategory": "ProductivityApplication",
  "description": "Private notes app that keeps your data 100% offline and secure",
  "operatingSystem": ["macOS"],
  "offers": {
    "@type": "Offer",
    "price": "14.99",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Person",
    "name": "Efez Sopoulos",
    "url": "https://twitter.com/efesopoulos"
  }
}
```

---

## Version History (Recent)

### v1.3.85 (Current)
- Fixed pages leaving folders after editing
- Fixed folder data persistence
- Redesigned modals with modern styling
- Full theme support for all modals
- Improved accessibility

### v1.3.82
- Previous stable release

---

## Marketing Guidelines

### Do's ✅
- Emphasize privacy, security, offline-first
- Show the $14.99 price clearly (one-time, lifetime)
- Focus on Mac as the best platform (but mention Web)
- Compare to cloud-based competitors (Notion, Evernote)
- Use security technical details (AES-256-GCM, PBKDF2-SHA256, 600k iterations)
- Mention open source for credibility/trust (but don't emphasize "free")
- Target professionals who need privacy (journalists, lawyers, activists)

### Don'ts ❌
- Don't say "free" or "free forever" (even though it's open source)
- Don't promise Windows/Linux native apps (not available yet)
- Don't call mobile apps "native" (they're PWAs)
- Don't overemphasize open source (mention it, but focus on paid convenience)
- Don't use cloud/AI/tracking in positive contexts
- Don't promise features that don't exist yet
- Don't say "military-grade encryption" — lead with actual specs (AES-256-GCM)
- Don't say "zero network requests" — say "offline by default" (sharing/collab are opt-in)
- Don't say "no servers to subpoena" — say "notes stay on your device by default"

---

## Contact & Support

- **Creator**: Efez Sopoulos
- **Twitter/X**: [@efesopoulos](https://twitter.com/efesopoulos)
- **Support Email**: support@dashnote.io (if available)
- **Buy Me Coffee**: https://buymeacoffee.com/efez

---

**Document Version**: 1.1
**Last Updated**: March 2, 2026
**Next Review**: When significant product changes occur

This document should be updated whenever:
- New platforms are supported
- Pricing changes
- Major features are added
- Marketing strategy shifts
- Product positioning evolves
