# Mobile-First Responsive Layout Fixes

**Date:** 2026-03-20
**Scope:** Tailwind-only responsive adjustments across all landing page sections
**Target:** 375px+ standard modern phones (iPhone 12+, most Android)
**Approach:** Adjust spacing, sizing, and proportions via Tailwind responsive prefixes. No structural changes, no new components, no content changes.

## Changes by Component

### All Sections (Global)

| Property | Current | Mobile-first fix |
|----------|---------|-----------------|
| Section vertical padding | `py-24` | `py-16 md:py-24` |

Files affected: `AppPreview.tsx`, `HowItWorks.tsx`, `Features.tsx`, `Personas.tsx`, `Waitlist.tsx`

**Note:** Hero.tsx uses asymmetric padding (`pt-32 pb-24`) and is handled separately below.

### Hero.tsx

| Property | Current | Mobile-first fix |
|----------|---------|-----------------|
| Bottom padding | `pb-24` | `pb-16 md:pb-24` (keep `pt-32` unchanged for header clearance) |
| Phone mockup width | `size="lg"` (260px fixed) | Pass `className="w-[200px] md:w-[260px]"` on the `<PhoneMockup>` call to override the default width. The `className` prop already exists on `PhoneMockup` and appends to the wrapper div. |
| Section gap | `gap-16 md:gap-12` | `gap-10 md:gap-12` |
| Body text max-width | `max-w-[420px]` | `max-w-full md:max-w-[420px]` |
| CTA buttons width | Auto width | `w-full sm:w-auto` for better tap targets |

### AppPreview.tsx

| Property | Current | Mobile-first fix |
|----------|---------|-----------------|
| Mobile phone width (line ~72, inside `md:hidden` block only) | `!w-[220px]` | `w-[200px] sm:w-[220px]` (drop `!important`). Do NOT change the `!w-[200px]` on the desktop fan layout (line ~51). |
| Body text size | `text-lg` | `text-base md:text-lg` |

### HowItWorks.tsx

| Property | Current | Mobile-first fix |
|----------|---------|-----------------|
| Step description indent | `pl-[54px]` | No change. 54px fits within 375px mobile viewport (327px content area minus 54px = 273px for text, which is sufficient). The indent correctly aligns with the step title past the 40px badge + 14px gap. |

### Features.tsx

| Property | Current | Mobile-first fix |
|----------|---------|-----------------|
| Card padding | `p-7` | `p-5 md:p-7` |

### Personas.tsx

| Property | Current | Mobile-first fix |
|----------|---------|-----------------|
| Card padding | `p-7` | `p-5 md:p-7` |

### Waitlist.tsx

| Property | Current | Mobile-first fix |
|----------|---------|-----------------|
| Submit button width | Auto width | `w-full sm:w-auto` |

### Header.tsx & Footer.tsx

No changes needed. Header mobile menu works correctly. Footer links fit at 375px.

## What Does NOT Change

- Desktop layout (all changes use responsive prefixes, desktop remains identical)
- Content, copy, or imagery
- Phone mockup frame component (`PhoneMockup.tsx` structure)
- Color scheme, typography hierarchy, or design tokens
- Component structure or file organization
- The hand-coded phone screen content (placeholder until real screenshots are captured)

## Testing

Verify at these widths:
- 375px (iPhone 12/13/14/15)
- 390px (iPhone 14/15 Pro)
- 430px (iPhone 14/15 Pro Max)
- 768px (iPad / tablet, ensure desktop layout kicks in)
- 1280px+ (desktop, ensure no regressions)
