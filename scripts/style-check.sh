#!/usr/bin/env bash
# Style check for DESIGN.md compliance. Run from the repo root: ./scripts/style-check.sh
# Exits non-zero when a pattern the design system forbids appears in a file that has been
# migrated to the system. Pages still on the legacy skeleton are listed in LEGACY below and
# are skipped until their migration PR removes them from that list.
set -u
cd "$(dirname "$0")/.."

fail=0
report() { echo "✗ $1"; echo "$2" | sed 's/^/    /'; fail=1; }

# Files that follow DESIGN.md. Add a path when a page or component is migrated.
SYSTEM_FILES=(
  app/page.tsx
  app/components/HeroSection.tsx
  app/components/BentoFeatures.tsx
  app/components/ComparisonTable.tsx
  app/components/SecurityLedger.tsx
  app/components/UseCaseRow.tsx
  app/components/PricingSection.tsx
  app/components/FAQSection.tsx
  app/components/CTASection.tsx
  app/components/Footer.tsx
  app/components/BitsField.tsx
  app/components/seo
)

# Retired components: nothing may import them.
RETIRED='GradientText|DeviceMockup|BuyMeCoffeeButton|FeatureGrid'

echo "style-check: ${#SYSTEM_FILES[@]} system paths"

out=$(grep -rnE 'from-blue|via-blue|to-indigo|from-slate|bg-slate-9' "${SYSTEM_FILES[@]}" 2>/dev/null || true)
[ -n "$out" ] && report "coloured gradients / dark slate sections" "$out"

out=$(grep -rnE 'rounded-full[^"'"'"'`]*(px-|py-)|(px-|py-)[^"'"'"'`]*rounded-full' "${SYSTEM_FILES[@]}" 2>/dev/null || true)
[ -n "$out" ] && report "pill buttons / badges (rounded-full with padding)" "$out"

out=$(grep -rn 'dark:' "${SYSTEM_FILES[@]}" 2>/dev/null || true)
[ -n "$out" ] && report "dead dark: variants (dark mode never activates)" "$out"

# Blue is allowed on the primary button (HeroSection, CTAs), the comparison highlight column, prose links,
# and inside product-UI mockups (BentoFeatures: [[link]] colour, selection highlight).
out=$(grep -rnE 'text-blue-|bg-blue-|border-blue-' "${SYSTEM_FILES[@]}" 2>/dev/null \
  | grep -vE 'ComparisonTable\.tsx|BentoFeatures\.tsx|bg-blue-600|hover:bg-blue-700|active:bg-blue-800|\[&_a\]:text-blue-600|text-blue-600 hover:text-blue-700' || true)
[ -n "$out" ] && report "blue outside the primary button, comparison highlight and prose links" "$out"

out=$(grep -rnE "from '[^']*($RETIRED)'" app lib 2>/dev/null || true)
[ -n "$out" ] && report "import of a retired component" "$out"

out=$(ls tailwind.config.js postcss.config.mjs 2>/dev/null || true)
[ -n "$out" ] && report "duplicate config files" "$out"

if [ "$fail" -eq 0 ]; then echo "style-check: ok"; fi
exit "$fail"
