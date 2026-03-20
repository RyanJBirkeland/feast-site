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

Files affected: `Hero.tsx`, `AppPreview.tsx`, `HowItWorks.tsx`, `Features.tsx`, `Personas.tsx`, `Waitlist.tsx`

### Hero.tsx

| Property | Current | Mobile-first fix |
|----------|---------|-----------------|
| Phone mockup width | `size="lg"` (260px fixed) | ~200px on mobile, 260px at `md:` |
| Section gap | `gap-16 md:gap-12` | `gap-10 md:gap-12` |
| Body text max-width | `max-w-[420px]` | Remove or make responsive (420px exceeds 375px viewport) |
| CTA buttons width | Auto width | `w-full sm:w-auto` for better tap targets |

### AppPreview.tsx

| Property | Current | Mobile-first fix |
|----------|---------|-----------------|
| Mobile phone width | `!w-[220px]` (hardcoded important) | `w-[200px] sm:w-[220px]` (drop `!important`) |
| Body text size | `text-lg` | `text-base md:text-lg` |

### HowItWorks.tsx

| Property | Current | Mobile-first fix |
|----------|---------|-----------------|
| Step description indent | `pl-[54px]` | `pl-10 sm:pl-[54px]` |

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
