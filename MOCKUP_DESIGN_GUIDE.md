# Mockup Design Guide for Dash Landing Page

**Last Updated**: March 2, 2026

Based on reference examples from Linear, Raycast, Notion, Craft, and modern SaaS products.

---

## Design Direction (March 2026)

### Moving Away From Legacy Utility Components
We are phasing out the following utility components in favor of clean, inline Tailwind CSS:
- `GlassCard` → Use explicit `bg-slate-800/40 border border-slate-700/50 rounded-2xl` (dark) or `bg-white border border-gray-200 rounded-2xl` (light)
- `FloatingOrbs` → Use positioned absolute `div` elements with `blur-3xl` and low-opacity backgrounds
- `DeviceMockup` → Build browser-window chrome inline with macOS traffic light dots
- `GradientText` → Use flat accent colors (`text-blue-600` light, `text-blue-400` dark) - NO gradient text

### Standard Patterns

**Section Headings:**
- Size: `text-4xl md:text-5xl font-bold` (NOT text-5xl/6xl)
- Accent word: `text-blue-600 dark:text-blue-400` (flat color, not gradient)

**Pill Badges (dark sections):**
```
bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2
```

**Pill Badges (light sections):**
```
bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5
```

**Dark Section Cards:**
```
bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8
```

**Dark Section Inner Elements:**
```
bg-slate-700/40 border border-slate-600/30 rounded-lg px-4 py-3
```

**Light Section Cards:**
```
bg-white border border-gray-200 rounded-2xl shadow-lg p-8
```

**Browser-Window Chrome (macOS mockup):**
```jsx
<div className='bg-slate-800 border-b border-slate-700/50 px-4 py-2.5 flex items-center justify-between'>
  <div className='flex items-center gap-1.5'>
    <div className='w-3 h-3 rounded-full bg-[#ff5f57]' />
    <div className='w-3 h-3 rounded-full bg-[#febc2e]' />
    <div className='w-3 h-3 rounded-full bg-[#28c840]' />
  </div>
  <div className='flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-700/50 border border-slate-600/50'>
    <Lock className='w-2.5 h-2.5 text-green-400' />
    <span className='text-[11px] text-slate-400 font-medium'>Title</span>
  </div>
  <div className='w-[44px]' />
</div>
```

**Background Blobs (dark sections):**
```
absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl
```

**Background Blobs (light sections):**
```
absolute w-[1200px] h-[700px] bg-blue-100/60 rounded-full blur-[120px]
```

### Section Background Alternation
Sections alternate between light and dark for visual rhythm:
1. HeroSection → white (`bg-white`)
2. FeatureShowcase → dark slate (`bg-slate-900`)
3. CoreFeatures → light (`bg-white`)
4. SecuritySection → light gradient (`from-blue-50 to-white`)
5. BiometricLockSection → dark blue (`from-blue-950 via-slate-900 to-slate-900`)
6. BenefitsSection → dark gray (`bg-gray-900`)
7. ComparisonTable → light gray (`bg-gray-100`)
8. PaymentSection → light gradient (`from-white to-gray-50`)
9. FAQSection → white (`bg-white`)
10. CTASection → blue gradient (`from-blue-600 via-blue-700 to-gray-900`)
11. Footer → dark (`bg-gray-900`)

### Accent Colors
- **Primary accent (light mode):** `text-blue-600`, `bg-blue-600`
- **Primary accent (dark mode):** `text-blue-400`, `bg-blue-500`
- **Success:** `text-green-500`, `bg-green-500`
- **Error/negative:** `text-red-400`, `bg-red-500`
- **Special/secondary:** `text-purple-400`, `bg-purple-500`
- **Emerald (offline theme):** `text-emerald-400`, `bg-emerald-500`

### CTA Buttons
- **Primary (light bg):** `bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-600/25`
- **Primary (dark/blue bg):** `bg-white text-blue-600 hover:bg-blue-50 rounded-lg shadow-xl`

---

## Preferred Mockup Styles

### 1. **Dashboard/Metrics Style**
**Characteristics:**
- Dark backgrounds (slate-900, gray-900)
- Real numbers and statistics
- Status indicators (Good/Poor, percentages)
- Color-coded metrics (green for good, red for bad, yellow for warnings)
- Clean cards with subtle borders
- Organized data in grids or rows

**Examples from References:**
- Resend's metrics dashboard showing "Good/Poor" deliverability
- Linkjolt's live stats showing "23+ SaaS companies joined"
- Audience management with newsletter subscribers count

**Use Cases for Dash:**
- Show number of encrypted notes
- Display offline status indicators
- Show local storage stats
- Security metrics

---

### 2. **Notification/Activity Feed Style**
**Characteristics:**
- Card-based layout with icons
- Colored badges and status tags (green "new sale", purple "payout completed")
- Icon indicators (dollar sign, user icon, checkmark)
- Timestamps or status labels
- Light background cards with subtle shadows
- Small colorful badges for categories

**Examples from References:**
- Linkjolt's notification panel with "New Sale! 💰", "Affiliate Joined! 🎉", "Payout Sent ✓"
- Status tags like "new sale", "invite accepted", "payout completed"

**Use Cases for Dash:**
- Show encryption activity
- Display note creation/protection events
- Show security status updates
- Local backup notifications

---

### 3. **Form/Interface Mockups**
**Characteristics:**
- Clean input fields with labels
- Step indicators (Step 1 of 4)
- Placeholder text in form fields
- Action buttons with arrows
- Dashed input boxes for codes/tokens
- Blue accent colors for primary actions
- Light blue/purple backgrounds

**Examples from References:**
- Linkjoit's "Create a Campaign" form with:
  - Campaign Name field
  - Commission percentage (30% recurring)
  - Tracking Link input
  - Coupon Code in dashed box
  - "Create Campaign →" button

**Use Cases for Dash:**
- Note encryption setup
- Password protection interface
- Export configuration
- Settings panels

---

### 4. **Discovery/Marketplace Cards**
**Characteristics:**
- Product/service cards with logos
- Stats badges (views, joined count)
- Featured tags/ribbons
- Commission or pricing badges
- Clean card borders
- Hover effects
- Search functionality

**Examples from References:**
- Linkjoit's Discovery marketplace showing campaigns with:
  - Featured ribbon
  - Commission badges (30% recurring, $50 per sale)
  - View and joined statistics
  - Company logos and descriptions

**Use Cases for Dash:**
- Feature comparison cards
- Use case showcases
- Testimonial cards with stats
- Platform availability cards

---

### 5. **Comparison Tables**
**Characteristics:**
- Clean rows and columns
- Checkmark (✓) and X icons
- Color coding (green checkmarks, red X's)
- Highlighted column for primary product
- Feature labels on left
- Clean typography
- Bottom summary text

**Examples from References:**
- Dash's own comparison table showing:
  - Features vs competitors
  - Green checkmarks for yes
  - Red X for no
  - "Dash leads in privacy-focused features" summary

**Use Cases for Dash:**
- Feature comparisons vs Notion/Evernote
- Pricing comparisons
- Security feature comparisons
- Platform support tables

---

## Color Palette

### Dark Sections
- **Backgrounds:** `slate-900`, `gray-900`, `bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900`
- **Cards:** `bg-slate-800/40 border border-slate-700/50` or `bg-gray-800/50 border border-gray-700`
- **Inner elements:** `bg-slate-700/40 border border-slate-600/30`
- **Text:** White for headers, `slate-300`/`gray-300` for body, `gray-400` for secondary
- **Accents:** `blue-400` for text, `blue-500` for backgrounds, `green-400` for success, `red-400` for alerts

### Light Sections
- **Backgrounds:** White, `gray-50`, `bg-gradient-to-b from-blue-50 to-white`, `gray-100`
- **Cards:** `bg-white border border-gray-200 rounded-2xl shadow-lg`
- **Text:** `gray-900` for headers, `gray-600` for body, `gray-500` for secondary
- **Accents:** `blue-600` for text, `blue-600` for buttons, `green-500` for success

### Status Colors
- **Success/Active:** Green (`green-500`, `green-400`)
- **Warning/Pending:** Yellow/Amber (`amber-500`, `yellow-500`)
- **Error/Danger:** Red (`red-500`, `red-400`)
- **Info/Primary:** Blue (`blue-500`, `blue-600`)
- **Neutral:** Purple (`purple-500`) for special states

---

## UI Elements Preferences

### Badges & Tags
- Small rounded badges with solid backgrounds
- Icon + text combinations
- Percentage indicators
- Status labels ("new sale", "encrypted", "offline")

### Icons
- Lucide icons preferred
- Consistent sizing (w-4 h-4 for small, w-5 h-5 for medium)
- Colored to match status or theme
- Used alongside text for clarity

### Cards
- Rounded corners (`rounded-xl`, `rounded-2xl`)
- Subtle borders or shadows
- Hover effects for interactive elements
- Padding: `p-4` to `p-6`
- Background opacity for glass effects (`/50`, `/80`)

### Metrics Display
- Large numbers (text-4xl or text-5xl)
- Percentage symbols
- Trend indicators (up/down arrows)
- Color-coded based on value
- Small descriptive text below

### Buttons
- Primary: Blue with white text
- Secondary: Outlined or ghost
- Arrow icons for forward actions (→)
- Rounded (`rounded-lg`, `rounded-xl`)
- Hover states with slight scale or color change

---

## Layout Patterns

### Grid Layouts
- 2-column for desktop (`md:grid-cols-2`)
- 3-column for features (`lg:grid-cols-3`)
- Consistent gaps (`gap-4`, `gap-6`)

### Card Arrangements
- Stacked vertically for mobile
- Side-by-side for desktop
- Consistent heights for adjacent cards

### Spacing
- Section padding: `py-24`
- Container padding: `px-6 lg:px-8`
- Card inner padding: `p-4` to `p-8`
- Element gaps: `gap-2` to `gap-6`

---

## Animation Preferences

### Entry Animations (Framer Motion)
- Fade + slide up (`y: 20` to `y: 0`)
- Staggered delays for lists (`delay: index * 0.1`)
- Smooth transitions (`duration: 0.5` to `0.8`)

### Hover Effects
- Border color changes
- Subtle scale changes (`hover:scale-105`)
- Background opacity shifts
- Shadow intensity changes

### Live/Real-time Indicators
- Pulsing dots for "live" status
- Animated counters for metrics
- Smooth color transitions

---

## Examples for Each Dash Page

### Private Notes Page
- **Hero:** Dashboard showing encrypted notes count with status indicators
- **Middle:** Notification feed showing encryption activity
- **Bottom:** Comparison table vs cloud apps

### For Journalists Page
- **Hero:** Secure notes dashboard with source protection metrics
- **Middle:** Form mockup showing note encryption setup
- **Bottom:** Activity feed showing security events

### Vs Notion Page
- **Hero:** Side-by-side comparison cards (Notion vs Dash)
- **Middle:** Feature comparison table
- **Bottom:** Migration steps with numbered cards

---

## Key Takeaways

1. **Use Real Data:** Show actual numbers, percentages, and metrics
2. **Dark is Dominant:** Dark backgrounds with bright accents work well
3. **Status Indicators:** Use color-coded badges and icons
4. **Clean Cards:** Subtle borders, good padding, rounded corners
5. **Interactive Feel:** Hover effects, live indicators, smooth animations
6. **Dashboard Aesthetic:** Make mockups look like working software
7. **Icons + Text:** Always pair icons with descriptive text
8. **Consistent Colors:** Stick to green (good), red (bad), blue (primary)

This guide should be used when creating or updating any mockups across the Dash landing pages.
