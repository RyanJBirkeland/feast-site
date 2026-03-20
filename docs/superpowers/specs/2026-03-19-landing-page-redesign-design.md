# Feast Landing Page Redesign — Design Spec

## Overview

Full redesign of the feast-site landing page to match the Feast app's premium dark theme. The current site uses an earthy light theme (#2d6a4f green, #fefae0 cream) that is mismatched with the app's actual design system (#050505 backgrounds, #00D37F vibrant green, glass morphism, glow effects). The redesign brings the landing page into visual alignment with the app so that visiting the site and opening the app feel like the same experience.

**Approach:** Faithful App Mirror — translate the app's exact design tokens, colors, gradients, typography, and component patterns to the web.

## Design System

### Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--v2-background` | `#050505` | Main page background |
| `--v2-surface` | `#111113` | Alternating section backgrounds |
| `--v2-card` | `#1A1A1D` | Card surfaces |
| `--v2-card-hover` | `#222226` | Card hover/press states |
| `--v2-border` | `#2A2A2E` | Subtle borders |
| `--v2-border-light` | `#38383D` | Emphasized borders |
| `--v2-text-primary` | `#F5F5F7` | Primary text (Apple-style white) |
| `--v2-text-secondary` | `#98989F` | Secondary/body text |
| `--v2-text-tertiary` | `#5C5C63` | De-emphasized text |
| `--v2-primary` | `#00D37F` | Brand green |
| `--v2-primary-light` | `#33EDAA` | Hover/glow green |
| `--v2-primary-dark` | `#00A863` | Press/gradient end green |
| `--v2-primary-muted` | `rgba(0, 211, 127, 0.12)` | Muted green backgrounds |
| `--v2-primary-glow` | `rgba(0, 211, 127, 0.25)` | Glow shadow color |

### Gradients

| Name | Value | Usage |
|------|-------|-------|
| Primary | `linear-gradient(135deg, #00D37F, #00A863)` | CTA buttons, step numbers |
| Primary Subtle | `linear-gradient(180deg, rgba(0,211,127,0.15), rgba(0,211,127,0.05))` | Subtle card accents |
| Glow | `radial-gradient(circle, rgba(0,211,127,0.08), transparent)` | Background glow effects |

### Glass Morphism

- Background: `rgba(26, 26, 29, 0.8)`
- Border: `rgba(255, 255, 255, 0.06)`
- Active border: `rgba(255, 255, 255, 0.12)`
- Note: `backdrop-filter: blur()` is used only on the header (20px). Feature cards use the opaque rgba background without blur — the dark background makes blur imperceptible at 0.8 opacity.

### Green Glow Effect

Applied to primary CTAs and key visual elements:
```
box-shadow: 0 4px 16px rgba(0, 211, 127, 0.3)
```

### Typography

| Element | Font | Size | Weight | Spacing |
|---------|------|------|--------|---------|
| Wordmark (FEAST) | Inter | 18-24px | 700 | 0.3em, uppercase |
| Section label | Inter | 11px | 600 | 2px, uppercase |
| H1 (Hero) | Inter | 42-56px | 700 | -0.5px |
| H2 (Section) | Inter | 32-40px | 700 | -0.4px |
| H3 (Card title) | Inter | 17-20px | 600-700 | normal |
| Body | Inter | 15-17px | 400 | normal, line-height 1.7 |
| Caption | Inter | 13px | 400-500 | normal |

Font source: Google Fonts (Inter) via `next/font/google`. Replaces Geist Sans/Mono from current site. Load with `className` applied to `<html>` element per Next.js 16 conventions.

### Transitions & Hover States

- **Default transition:** `transition-all duration-200 ease-out` on interactive elements
- **Buttons:** Scale to 0.97 on press (via `active:scale-[0.97]`), color/shadow transitions on hover
- **Cards:** Border color transitions on hover (`#2A2A2E` → `#38383D`)
- **Links:** Color transitions (`#98989F` → `#F5F5F7` or `#00D37F`)
- **No scroll-triggered animations** for v1 — keep it clean and fast. Can add later.

### Border Radius

- Cards: 20px
- Buttons: 16-20px
- Icon badges: 14px
- Phone mockup outer: 32px
- Phone mockup screen: 24px
- Pill/fully rounded: 9999px

### Shadows

- Card: `0 2px 8px rgba(0,0,0,0.08)`
- Elevated: `0 8px 32px rgba(0,0,0,0.4)`
- Primary glow: `0 4px 16px rgba(0,211,127,0.3)`

## Page Structure

Sections alternate between `#050505` (background) and `#111113` (surface) for visual layering:

| # | Section | Background | Anchor ID |
|---|---------|-----------|-----------|
| 1 | Header | `#050505` (glassmorphism) | — |
| 2 | Hero | `#050505` | — |
| 3 | Features | `#111113` | `#features` |
| 4 | Meet the Team | `#050505` | `#team` |
| 5 | How It Works | `#111113` | `#how-it-works` |
| 6 | App Preview | `#050505` | `#preview` |
| 7 | Waitlist CTA | `#111113` | `#waitlist` |
| 8 | Footer | `#050505` | — |

## Section Specifications

### 1. Header / Navigation

- **Position:** Fixed top, z-50
- **Background:** `rgba(5, 5, 5, 0.85)` with `backdrop-filter: blur(20px)`
- **Border:** Bottom border `rgba(255, 255, 255, 0.06)`
- **Left:** FEAST wordmark — Inter Bold, 0.3em letter-spacing, uppercase, `#00D37F`
- **Right (desktop):** Nav links ("Features", "How It Works", "The Team") in `#98989F`, hover `#F5F5F7`. These link to `#features`, `#how-it-works`, `#team` respectively. Primary CTA button "Join Waitlist" (links to `#waitlist`) with green gradient background and dark text. The CTA button replaces the old "Join Waitlist" nav link.
- **Mobile:** Hamburger toggle (Bars3Icon/XMarkIcon from Heroicons). Mobile nav slides down with same dark background. CTA button visible in mobile nav.
- **Max width:** 6xl (1152px) inner container

### 2. Hero (Split Layout)

- **Background:** `#050505`
- **Layout:** Flexbox, text left / phone mockup right. Center-aligned vertically. Stacks on mobile (text on top, phone below).
- **Left side:**
  - Green label: "Your AI Meal Planning Companion" — 11px, uppercase, 2px letter-spacing, `#00D37F`
  - Headline: "Your AI team of **Dietitian, Chef & Coach**" — 42-56px responsive, bold, `#F5F5F7` with persona names in `#00D37F`
  - Subtitle: "Feast plans your meals through natural conversation — not forms and checkboxes. It learns what you love, remembers what you need, and gets smarter every week." — 17px, `#98989F`, max-width 420px
  - CTAs:
    - Primary: "Join the Waitlist" — green gradient, dark text, rounded-[20px], glow shadow
    - Secondary: "How It Works" — outline, `#2A2A2E` border, `#F5F5F7` text, rounded-[20px]
- **Right side:** Styled phone mockup (see Phone Mockup Spec below)
- **Accent:** Subtle radial green glow behind the phone (`rgba(0,211,127,0.08)`)

#### Phone Mockup Spec (Hero)

HTML/CSS recreation of the app's "Today" screen. Not a screenshot — a styled component.

- **Frame:** `#111113` background, 32px border-radius, 2px `#2A2A2E` border, elevated shadow + subtle green glow
- **Screen:** `#050505` background, 24px border-radius, padded inside frame
- **Content (top to bottom):**
  - Simulated status bar (time, FEAST wordmark, battery)
  - Greeting: "Good evening! Let's plan your week."
  - Dietitian card: green circle avatar with clipboard emoji, "Your Dietitian" label, sample message: "I've planned 5 meals based on your preferences. High protein, low carb — just how you like it."
  - Two mini recipe cards side by side (emoji placeholder images, title, time + calories)
  - Green gradient "View Full Plan" button
  - Tab bar: Plan / Today (active, green underline) / Shop

### 3. Features Grid

- **Background:** `#111113`
- **Header:** Green label "Why Feast" + heading "Not another meal planning app" + subheading "Most apps treat you like a database row. Feast treats you like a person."
- **Grid:** `grid-cols-1` default, `md:grid-cols-2` for 2x2 layout on desktop. No 4-column variant — 2x2 works better with the richer card design.
- **Cards:** Glass morphism style — `rgba(26,26,29,0.8)` background, `rgba(255,255,255,0.06)` border, 20px radius
- **Card content:**
  - Icon badge: 48x48px, `rgba(0,211,127,0.12)` background, 14px radius, Heroicon (outline) in `#00D37F`
  - Title: 17px, semibold, `#F5F5F7`
  - Description: 14px, `#98989F`
- **Features:**
  1. Conversational, Not Transactional (ChatBubbleLeftRightIcon)
  2. It Remembers You (SparklesIcon)
  3. A Team That Cares (HeartIcon)
  4. Groceries, Handled (ShoppingCartIcon)

### 4. Meet the Team

- **Background:** `#050505`
- **Header:** Green label "Your AI Team" + heading "Three experts. One app." + subheading "Each one specializes in a different part of your week."
- **Grid:** 3-column on desktop, 1-column on mobile
- **Cards:** `#1A1A1D` background, `#2A2A2E` border, 20px radius
- **Card content (per persona):**
  - Green circle avatar (52px) with emoji icon, green glow shadow. Matching the app's Dietitian avatar style.
  - Name (18px bold) + role subtitle
  - Chat preview: `#111113` background bubble with sample italic quote showing persona's voice
  - Role label: green uppercase + description text
- **Personas:**
  1. **Dietitian** (📋, "Meal Planning Expert") — "I've built your plan around high-protein dinners this week. Tuesday and Thursday are lighter — you mentioned wanting balance."
  2. **Chef** (👨‍🍳, "Cooking Guide") — "No buttermilk? No problem — mix 1 cup milk with 1 tbsp lemon juice and let it sit for 5 minutes."
  3. **Coach** (🏆, "Accountability Partner") — "You've hit your protein target 4 days this week. One more day and you'll have your best week yet."
- **Accent:** Subtle radial green glow in top-right of each card

### 5. How It Works

- **Background:** `#111113`
- **Header:** Green label "How It Works" + heading "Four steps. No learning curve." + subheading "Just tell it what you want."
- **Layout:** Vertical stack, each step is a row: text left, mini phone mockup right. Green gradient connectors between steps.
- **Step format:**
  - Number badge: 40px circle, green gradient fill, dark text, glow shadow
  - Title: 20px bold, `#F5F5F7`
  - Description: 15px, `#98989F`, indented under title
- **Steps:**
  1. **Have a conversation** — "Open Feast and tell it what you're in the mood for..." Mini phone shows chat with Dietitian (user message in green-tinted bubble, Dietitian response in card)
  2. **Get a plan that fits** — "Your AI Dietitian builds a personalized weekly meal plan..." Mini phone shows meal plan list (Mon-Wed entries with calories/protein)
  3. **Cook with confidence** — "When it's time to cook, your AI Chef walks you through..." Mini phone shows Chef stepping through recipe with progress bar
  4. **Shop in one tap** — "Your meal plan becomes a grocery list — deduplicated, organized, and ready to send to Instacart." Mini phone shows grocery list with Instacart logo (AllWhite SVG) on a "Send to Instacart" button
- **Mini phone spec:** 160px wide, `#1A1A1D` frame, `#050505` screen, same card/icon styling as hero phone but smaller
- **Connectors:** 2px wide, green-to-border gradient, centered between steps

### 6. App Preview

- **Background:** `#050505`
- **Header:** Green label "See It In Action" + heading "Designed for your kitchen" + subheading "A few screens from the app."
- **Layout:** 3 phones in a fan arrangement
  - Left phone: slight left tilt (-3deg), 180px wide — "Today" screen
  - Center phone: no tilt, 200px wide, translated up 10px — "Plan" screen (Dietitian + Browse & Discover)
  - Right phone: slight right tilt (3deg), 180px wide — "Recipes" screen (Quick & Easy cards)
- **Center phone accent:** Subtle green glow shadow in addition to standard elevation
- **Labels:** Screen name below each phone in `#5C5C63`
- **Background accent:** Large radial green glow behind the group
- **Responsive:** On mobile, show single phone centered or horizontal scroll

### 7. Waitlist CTA

- **Background:** `#111113`
- **Layout:** Centered, max-width 500px
- **Header:** Green label "Early Access" + heading "Be the first to try Feast" + subheading about TestFlight beta
- **Form:**
  - Email input: `#1A1A1D` background, `#2A2A2E` border, 16px radius, placeholder in `#5C5C63`
  - Focus state: border changes to `#00D37F`, ring `rgba(0,211,127,0.2)`
  - Submit button: green gradient, dark text, 16px radius, glow shadow, "Join Waitlist"
  - Layout: side-by-side on desktop, stacked on mobile
- **Trust text:** "No spam. Just an invite when it's your turn." in `#5C5C63`
- **Success state:** Celebration emoji, "You're on the list!", confirmation message
- **Error state:** Preserve current behavior — on network failure, fallback to `mailto:` link so the email isn't lost. No visible error UI needed for v1.
- **Background accent:** Radial green glow behind the form
- **Backend:** Same Supabase POST to `/api/waitlist` — no changes needed

### 8. Footer

- **Background:** `#050505`
- **Top border:** `rgba(255, 255, 255, 0.06)`
- **Layout:** Flexbox, brand left / links right. Centered on mobile.
- **Left:** FEAST wordmark (green, letter-spaced) + tagline "Meal planning that feels like a friend." in `#5C5C63`
- **Right:** Links (Contact, Privacy, Terms) in `#5C5C63`, hover `#00D37F`
- **Copyright:** Centered below, separated by subtle border. "2026 R.B Technologies LLC. All rights reserved." in `#5C5C63`

## Assets Required

| Asset | Source | Destination |
|-------|--------|-------------|
| Inter font | Google Fonts | Loaded in layout.tsx (replaces Geist) |
| Heroicons (outline) | @heroicons/react (already installed) | Used in Features section |
| Instacart logo (AllWhite SVG) | Local path: `/Users/RBTECHBOT/Documents/Repositories/feast/assets/InstacartLogos/Full Logo/RGB/SVG/Instacart_Logo_AllWhite.svg` | Copy to `public/instacart-logo.svg` |

## Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| Desktop (md+) | Full layouts as described — split hero, 2x2 features, 3-col team, side-by-side steps |
| Mobile (<md) | Single column stacking throughout. Hero: text above, phone below. Features: 1-col. Team: 1-col. Steps: text above, phone below. App Preview: single centered phone or horizontal scroll. Waitlist form: stacked input + button. |

## Files to Modify

| File | Changes |
|------|---------|
| `src/app/globals.css` | Replace color tokens with dark theme via Tailwind v4 `@theme` directive so tokens become first-class utilities (e.g., `bg-v2-background`). Add gradient, glass, and glow utility classes. |
| `src/app/layout.tsx` | Replace Geist fonts with Inter. Update metadata if needed. |
| `src/app/page.tsx` | Update section order to include new sections (Personas, AppPreview). |
| `src/components/Header.tsx` | Dark glassmorphism header, green FEAST wordmark, updated nav links, gradient CTA button. |
| `src/components/Hero.tsx` | Split layout, new copy, styled phone mockup component, green glow effects. |
| `src/components/Features.tsx` | Dark glass cards, green icon badges, updated styling. |
| `src/components/HowItWorks.tsx` | Add step 4 (Shop), mini phone mockups per step, gradient connectors. |
| `src/components/Waitlist.tsx` | Dark theme form, green gradient button, glow effects. |
| `src/components/Footer.tsx` | Dark footer, FEAST wordmark, updated styling. |

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/Personas.tsx` | Meet the Team section — 3 AI persona cards with chat previews |
| `src/components/AppPreview.tsx` | App Preview section — 3 phone fan layout |
| `src/components/PhoneMockup.tsx` | Reusable phone frame component. Renders the outer chrome (bezel, border-radius, shadow) and accepts `children` for screen content. Props: `size?: "sm" | "md" | "lg"` (sm=160px for HowItWorks, md=180px for AppPreview, lg=260px for Hero), `glow?: boolean` (adds green glow shadow), `className?: string`. Internal font sizes and padding scale with size. |

## What Does NOT Change

- **`src/app/api/waitlist/route.ts`** — Supabase integration stays the same
- **Deployment** — Vercel config unchanged
- **Package dependencies** — No new packages needed (Inter via next/font/google, Heroicons already installed)
