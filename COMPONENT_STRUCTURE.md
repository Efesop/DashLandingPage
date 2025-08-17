# Component Structure

The page has been refactored from a single large `page.tsx` file (~1300 lines) into modular, maintainable components:

## Main Page (`app/page.tsx`)
- **Lines**: ~130 (reduced from 1300+)
- **Responsibility**: State management, data fetching, and component composition
- **Props**: Manages shared state for email, download status, and form handling

## Components (`app/components/`)

### 1. **Header.tsx**
- **Purpose**: Top navigation and email signup form
- **Features**: Navigation links, Buy Me Coffee button, email form
- **Props**: Email state and form handlers

### 2. **HeroSection.tsx**
- **Purpose**: Main hero area with video and primary CTA
- **Features**: Video player, main headlines, email signup form
- **Props**: Email state and form handlers

### 3. **FeatureShowcase.tsx**
- **Purpose**: Dark-themed feature highlights
- **Features**: Encryption demo, offline features, privacy features
- **Props**: None (static content)

### 4. **CoreFeatures.tsx**
- **Purpose**: Core features with typing animation demo
- **Features**: Rich text editing, search, organization features
- **Props**: None (manages its own typing animation state)

### 5. **SecuritySection.tsx**
- **Purpose**: Security and technical details
- **Features**: Security features list, technical specifications
- **Props**: None (static content)

### 6. **BenefitsSection.tsx**
- **Purpose**: "No Cloud, No Worries" benefits section
- **Features**: Three main benefits with animations
- **Props**: None (static content)

### 7. **ComparisonTable.tsx**
- **Purpose**: Feature comparison with competitors
- **Features**: Animated table with checkmarks/X marks
- **Props**: None (static data)

### 8. **FAQSection.tsx**
- **Purpose**: Frequently asked questions
- **Features**: Expandable FAQ items with animations
- **Props**: None (manages its own accordion state)

### 9. **CTASection.tsx**
- **Purpose**: Final call-to-action section
- **Features**: Email form, download button, buy coffee button
- **Props**: Email state and form handlers

### 10. **Footer.tsx**
- **Purpose**: Site footer with links and branding
- **Features**: Privacy features list, social links
- **Props**: None (static content)

## Benefits of the Refactor

1. **Maintainability**: Each component has a single responsibility
2. **Readability**: Much easier to understand and navigate code
3. **Reusability**: Components can be reused or moved around easily
4. **Testing**: Individual components can be unit tested
5. **Performance**: Easier to optimize individual components
6. **Collaboration**: Multiple developers can work on different components
7. **State Management**: Clear separation of stateful vs. stateless components

## State Management

- **Shared State**: Email, form submission status, download state
- **Local State**: FAQ accordion state, typing animation state
- **Props Flow**: Main page → Header, HeroSection, CTASection (components that need form state)

## File Organization

```
app/
├── page.tsx                 # Main landing page (130 lines)
├── components/
│   ├── Header.tsx           # Navigation & email form
│   ├── HeroSection.tsx      # Hero with video
│   ├── FeatureShowcase.tsx  # Dark features section
│   ├── CoreFeatures.tsx     # Features with demo
│   ├── SecuritySection.tsx  # Security details
│   ├── BenefitsSection.tsx  # Benefits grid
│   ├── ComparisonTable.tsx  # Competitor comparison
│   ├── FAQSection.tsx       # FAQ accordion
│   ├── CTASection.tsx       # Final CTA
│   └── Footer.tsx           # Site footer
└── components/ui/           # Existing UI components
    ├── button.tsx
    ├── input.tsx
    └── BuyMeCoffeeButton.tsx
```
