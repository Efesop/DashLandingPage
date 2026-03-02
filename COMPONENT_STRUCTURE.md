# Component Structure

The page has been refactored from a single large `page.tsx` file (~1300 lines) into modular, maintainable components.

**Last Updated**: March 2, 2026

## Main Page (`app/page.tsx`)
- **Responsibility**: State management, data fetching, JSON-LD structured data, and component composition
- **Props**: Manages shared state for email, download status, and form handling
- **JSON-LD**: SoftwareApplication schema + FAQPage schema (7 questions)

## Components (`app/components/`)

### 1. **Header.tsx**
- **Purpose**: Fixed top navigation with scroll hide/show behavior
- **Features**: Logo, nav links (Features, Security, Pricing, FAQ), Use Cases dropdown, Compare dropdown, Buy Me Coffee button, "Get Dash" CTA
- **Props**: Email state and form handlers

### 2. **HeroSection.tsx**
- **Purpose**: Centered hero with video demo and trust badges
- **Features**: Pill badge, large headline ("Own Your Notes / For Real"), subheadline, CTA button, "See how it works" link, trust pill badges (AES-256, Touch ID, Offline, Zero Tracking), video with browser-window chrome mockup, floating badges
- **Props**: Email state and form handlers (accepted but unused for interface compatibility)

### 3. **FeatureShowcase.tsx**
- **Purpose**: Dark-themed feature highlights (encryption, offline, privacy)
- **Features**: Encryption demo with browser-window mockup, offline feature card, zero tracking card with status indicators
- **Props**: None (static content)
- **Section ID**: `features` (linked from hero "See how it works")

### 4. **CoreFeatures.tsx**
- **Purpose**: Core features with typing animation demo
- **Features**: 5 features (rich text editing, quick switcher, smart organization, focus mode, import & export), capability badges (code blocks, tables, images, 4 themes), typing animation
- **Props**: None (manages its own typing animation state)

### 5. **SecuritySection.tsx**
- **Purpose**: Security and technical details
- **Features**: 5 security features (AES-256, key control, zero-knowledge, local storage, auto-lock), technical specs table (encryption, key derivation, storage, transmission, app lock)
- **Props**: None (static content)

### 6. **BiometricLockSection.tsx**
- **Purpose**: Touch ID/biometric security showcase with animated mockup
- **Features**: Animated lock/unlock cycle (unlocked → locking → locked → unlocking), Touch ID card, auto-lock card, self-destructing notes card, browser-window mockup with sidebar
- **Props**: None (manages internal animation state with useState/useEffect)
- **Background**: Dark blue gradient (`from-blue-950 via-slate-900 to-slate-900`)

### 7. **BenefitsSection.tsx**
- **Purpose**: "No Cloud, No Worries" benefits section
- **Features**: Three benefit cards (works anywhere, lightning fast, stress-free privacy), offline status demo bar
- **Props**: None (static content)

### 8. **ComparisonTable.tsx**
- **Purpose**: Feature comparison with competitors (Notion, Evernote, Obsidian)
- **Features**: 11-row animated comparison table including biometric lock and self-destructing notes, Dash column highlighted
- **Props**: None (static data)

### 9. **PaymentSection.tsx**
- **Purpose**: Pricing and purchase section
- **Features**: $14.99 pricing card, Stripe checkout, Bitcoin Lightning payment (feature-flagged off), benefits list, trust badges
- **Props**: None (manages own payment state)
- **Section ID**: `payment-section`

### 10. **FAQSection.tsx**
- **Purpose**: Frequently asked questions
- **Features**: 7 expandable FAQ items with animations (includes Touch ID/biometric question)
- **Props**: None (manages its own accordion state)
- **Section ID**: `faq`

### 11. **CTASection.tsx**
- **Purpose**: Final call-to-action section
- **Features**: "Take back control" headline, "Get Dash for Mac" CTA button, trust indicators (no account, Mac, one-time purchase)
- **Props**: None (self-contained)

### 12. **Footer.tsx**
- **Purpose**: Site footer with links and branding
- **Features**: Logo + description, privacy badges, use case links, comparison links, social links (Twitter, Buy Me Coffee)
- **Props**: None (static content)

## Section Order (Homepage)

1. Header (fixed)
2. HeroSection (light, centered)
3. FeatureShowcase (dark slate)
4. CoreFeatures (light)
5. SecuritySection (light gradient)
6. BiometricLockSection (dark blue)
7. BenefitsSection (dark gray)
8. ComparisonTable (light gray)
9. PaymentSection (light gradient)
10. FAQSection (white)
11. CTASection (blue gradient)
12. Footer (dark gray/black)

## State Management

- **Shared State**: Email, form submission status, download state
- **Local State**: FAQ accordion, typing animation, biometric lock animation, payment processing
- **Props Flow**: Main page → Header, HeroSection (components that need form state)

## File Organization

```
app/
├── page.tsx                     # Main landing page + JSON-LD schemas
├── components/
│   ├── Header.tsx               # Navigation with dropdowns
│   ├── HeroSection.tsx          # Centered hero with video
│   ├── FeatureShowcase.tsx      # Dark features section
│   ├── CoreFeatures.tsx         # Features with typing demo
│   ├── SecuritySection.tsx      # Security details + specs
│   ├── BiometricLockSection.tsx # Touch ID animated showcase
│   ├── BenefitsSection.tsx      # Benefits grid
│   ├── ComparisonTable.tsx      # Competitor comparison
│   ├── PaymentSection.tsx       # Pricing + Stripe checkout
│   ├── FAQSection.tsx           # FAQ accordion
│   ├── CTASection.tsx           # Final CTA
│   └── Footer.tsx               # Site footer
└── components/ui/               # Shared UI components
    ├── button.tsx
    ├── input.tsx
    ├── BuyMeCoffeeButton.tsx
    ├── GlassCard.tsx            # Legacy (being phased out)
    ├── FloatingOrbs.tsx         # Legacy (being phased out)
    ├── DeviceMockup.tsx         # Legacy (being phased out)
    └── GradientText.tsx         # Legacy (being phased out)
```
