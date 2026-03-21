# Landing Page Polish Pass — Design Spec

**Date:** 2026-03-20
**Branch:** Continue on `feat/mobile-first-responsive`
**Scope:** Copy refinement + screenshot integration (placeholder images now, final screenshots later)

---

## 1. Copy Refinement

All changes target section headings, sub-copy, and feature card descriptions that feel robotic or generic. Strong existing copy is preserved.

### Hero Section (`Hero.tsx`)

- **Tagline:** No change — keep "AI-Powered Meal Planning for the Modern Kitchen"
- **Headline:** No change — keep "Plan smarter. Shop easier. Cook better."
- **Body:** No change — keep current copy

### Features Section (`Features.tsx`)

**Section heading:**
- Current: "The intelligent way to plan, shop, and cook"
- New: "Meal planning that actually knows you"

**Section body:**
- Current: "Every meal planning app treats users the same way: a form to fill out, checkboxes to tick. That's not how humans work."
- New: "Every meal planning app treats you the same way: a form to fill out, checkboxes to tick. That's not how people work."

**Feature card — "Conversational, Not Transactional":**
- Current: "Tell Feast what you're feeling this week. No forms, no checkboxes — just natural conversation. Every interaction should feel like talking to a friend, not filling out a form."
- New: "Tell Feast what you're feeling this week. No forms, no checkboxes — just natural conversation that feels like talking to a friend."

**Feature card — "It Remembers You":**
- Current: "Feast should feel like it knows you. Cutting back on carbs? It remembers next week. Loved that Thai recipe? It'll find more like it. The app gets smarter every day."
- New: "Cutting back on carbs? It remembers next week. Loved that Thai recipe? It'll find more like it. Feast gets smarter the more you use it."

**Feature cards — "A Team That Cares" and "Groceries, Handled":**
- No change — already tight

### Personas Section (`Personas.tsx`)

**Section heading:**
- Current: "Four experts. One app."
- New: "Four specialists who actually know you"

**Section body:**
- Current: "Think of it as having a personal nutritionist, dietitian, chef, and coach in your pocket."
- New: "A nutritionist, dietitian, chef, and coach — all in your pocket. They remember your goals, your taste, and your schedule."

**Persona cards:** No change — quotes and descriptions are strong

### How It Works Section (`HowItWorks.tsx`)

**Section heading:** No change — keep "Four steps. No learning curve."

**Section body:**
- Current: "From discovery to delivery — Feast handles the entire food journey."
- New: "Just talk, and Feast takes care of the rest."

**Step descriptions:** No change — already conversational and specific

### App Preview Section (`AppPreview.tsx`)

**Section heading:**
- Current: "Beautiful by design"
- New: "Designed to get out of the way"

**Section body:**
- Current: "Minimalist, modern, and built for how you actually cook."
- New: "Clean, focused, and built for real kitchens — not design awards."

### Waitlist Section (`Waitlist.tsx`)

**Pre-submit copy:** No change — already warm and personal

**Success state:**
- Current heading: "You're on the list!"
- New heading: "You're in."
- Current body: "We'll reach out when Feast is ready for you. In the meantime, keep an eye on your inbox."
- New body: "We'll reach out when your spot opens up. In the meantime, your future Dietitian is already looking forward to meeting you."

### Copy Implementation Approach

Use the exact copy strings provided above — these are the final approved copy. No further refinement needed. Apply them as literal string replacements in each component file.

---

## 2. Screenshot Integration (Placeholder Phase)

Replace all hand-coded JSX phone mockup content with `<Image>` tags using real app screenshots.

### Source Images

Two simulator screenshots from `~/Desktop/FEAST Screenshots/`:
- `Simulator Screenshot - iPhone 16e - 2026-03-20 at 02.12.41.png` — Dietitian chat conversation
- `Simulator Screenshot - iPhone 16e - 2026-03-20 at 02.13.20.png` — Dietitian processing/generating meal plan

Copy these to `public/screenshots/` with clean filenames:
- `chat.png` — the conversation screenshot
- `planning.png` — the processing screenshot

### Component Changes

**Hero.tsx:**
- Remove `HeroPhoneContent` component (hand-coded JSX)
- Replace with `<Image src="/screenshots/chat.png" />` inside `PhoneMockup`
- Image should fill the phone frame with `object-cover` and proper rounding

**HowItWorks.tsx:**
- Remove `Step1Phone`, `Step2Phone`, `Step3Phone`, `Step4Phone` components
- Replace with `<Image>` tags using this placeholder mapping:
  - Step 1 (Have a conversation): `chat.png`
  - Step 2 (Get a plan that fits): `planning.png`
  - Step 3 (Cook with confidence): `chat.png`
  - Step 4 (Shop in one tap): `planning.png`
- These will be swapped for specific screenshots later (conversation, meal plan, cooking mode, grocery list)

**AppPreview.tsx:**
- Remove `TodayScreen`, `PlanScreen`, `RecipesScreen` components
- Replace with `<Image>` tags using this placeholder mapping:
  - Left phone (Today): `chat.png`
  - Center phone (Plan, hero position with glow): `planning.png`
  - Right phone (Recipes): `chat.png`
- These will be swapped for specific screenshots later (Today, Plan, Recipes views)

### Image Sizing

- PhoneMockup renders at fixed widths (sm: 160px, md: 180px, lg: 260px) with responsive overrides
- Images should use `fill` layout with `object-cover` inside a relative-positioned container
- The PhoneMockup inner container already applies `overflow-hidden` with the correct border radius per size — no additional border-radius classes needed on the Image

### Setup

- Create `public/screenshots/` directory
- Copy the two source images from `~/Desktop/FEAST Screenshots/` into `public/screenshots/` with clean filenames (`chat.png`, `planning.png`)

### Cleanup

- Remove all Heroicon imports that were only used by the deleted JSX mockup components
- Remove unused icon imports from Hero.tsx, HowItWorks.tsx, AppPreview.tsx

---

## 3. Future: Final Screenshot Capture (Out of Scope)

For reference, the final screenshots needed once the demo account is ready:

| Filename | Screen | Landing Page Location |
|----------|--------|-----------------------|
| `hero-home.png` | Home/Today view with greeting + meal cards | Hero phone |
| `hiw-conversation.png` | Chat with Dietitian | HowItWorks step 1 |
| `hiw-mealplan.png` | Weekly meal plan view | HowItWorks step 2 |
| `hiw-cooking.png` | Recipe detail / cooking mode | HowItWorks step 3 |
| `hiw-grocery.png` | Grocery list view | HowItWorks step 4 |
| `preview-today.png` | Today tab | AppPreview left phone |
| `preview-plan.png` | Plan tab | AppPreview center phone |
| `preview-recipes.png` | Recipe browse | AppPreview right phone |

**Prerequisites:** Demo account with curated data (7 days of meals, food photography, persona conversations, grocery list). Seed script to be built in the Feast app repo.
