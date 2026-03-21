# Landing Page Polish Pass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine landing page copy to feel warmer and more conversational, and replace hand-coded JSX phone mockups with real app screenshot images.

**Architecture:** Straight string replacements for copy changes across 5 component files. For screenshots: copy 2 placeholder images into `public/screenshots/`, delete all JSX mockup sub-components, replace with `<Image>` tags inside existing `PhoneMockup` wrappers. No new components, no structural changes.

**Tech Stack:** Next.js 16 (App Router), next/image, Tailwind CSS v4, TypeScript

**Spec:** `docs/superpowers/specs/2026-03-20-landing-page-polish-design.md`

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `public/screenshots/chat.png` | Create (copy) | Placeholder screenshot — Dietitian chat |
| `public/screenshots/planning.png` | Create (copy) | Placeholder screenshot — Dietitian processing |
| `src/components/Features.tsx` | Modify | Copy changes: heading, body, 2 card descriptions |
| `src/components/Personas.tsx` | Modify | Copy changes: heading, body |
| `src/components/HowItWorks.tsx` | Modify | Copy change + replace 4 JSX mockups with images |
| `src/components/AppPreview.tsx` | Modify | Copy changes + replace 3 JSX mockups with images |
| `src/components/Waitlist.tsx` | Modify | Copy changes: success state |
| `src/components/Hero.tsx` | Modify | Replace JSX mockup with image |

---

### Task 1: Copy screenshots into public/screenshots/

**Files:**
- Create: `public/screenshots/chat.png`
- Create: `public/screenshots/planning.png`

- [ ] **Step 1: Create the screenshots directory and copy images**

```bash
mkdir -p public/screenshots
cp ~/Desktop/FEAST\ Screenshots/Simulator\ Screenshot\ -\ iPhone\ 16e\ -\ 2026-03-20\ at\ 02.12.41.png public/screenshots/chat.png
cp ~/Desktop/FEAST\ Screenshots/Simulator\ Screenshot\ -\ iPhone\ 16e\ -\ 2026-03-20\ at\ 02.13.20.png public/screenshots/planning.png
```

- [ ] **Step 2: Verify files exist**

```bash
ls -la public/screenshots/
```

Expected: Two PNG files (`chat.png`, `planning.png`)

- [ ] **Step 3: Commit**

```bash
git add public/screenshots/
git commit -m "assets: add placeholder app screenshots for phone mockups"
```

---

### Task 2: Update Features copy

**Files:**
- Modify: `src/components/Features.tsx`

- [ ] **Step 1: Update section heading (line 44)**

Replace:
```
The intelligent way to plan, shop, and cook
```
With:
```
Meal planning that actually knows you
```

- [ ] **Step 2: Update section body (lines 47-48)**

Replace:
```
Every meal planning app treats users the same way: a form to fill
out, checkboxes to tick. That&apos;s not how humans work.
```
With:
```
Every meal planning app treats you the same way: a form to fill
out, checkboxes to tick. That&apos;s not how people work.
```

- [ ] **Step 3: Update "Conversational, Not Transactional" description (line 13)**

Replace:
```
"Tell Feast what you're feeling this week. No forms, no checkboxes — just natural conversation. Every interaction should feel like talking to a friend, not filling out a form.",
```
With:
```
"Tell Feast what you're feeling this week. No forms, no checkboxes — just natural conversation that feels like talking to a friend.",
```

- [ ] **Step 4: Update "It Remembers You" description (line 19)**

Replace:
```
"Feast should feel like it knows you. Cutting back on carbs? It remembers next week. Loved that Thai recipe? It'll find more like it. The app gets smarter every day.",
```
With:
```
"Cutting back on carbs? It remembers next week. Loved that Thai recipe? It'll find more like it. Feast gets smarter the more you use it.",
```

- [ ] **Step 5: Verify dev server renders correctly**

```bash
# Dev server should already be running on :3000
# Open http://localhost:3000 and visually verify the Features section
```

- [ ] **Step 6: Commit**

```bash
git add src/components/Features.tsx
git commit -m "copy: refine Features section — warmer, more personal tone"
```

---

### Task 3: Update Personas copy

**Files:**
- Modify: `src/components/Personas.tsx`

- [ ] **Step 1: Update section heading (line 68)**

Replace:
```
Four experts. One app.
```
With:
```
Four specialists who actually know you
```

- [ ] **Step 2: Update section body (lines 71-73)**

Replace:
```
Think of it as having a personal nutritionist, dietitian, chef, and
coach in your pocket.
```
With:
```
A nutritionist, dietitian, chef, and coach — all in your pocket.
They remember your goals, your taste, and your schedule.
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Personas.tsx
git commit -m "copy: refine Personas section — personal, assertive tone"
```

---

### Task 4: Update HowItWorks copy

**Files:**
- Modify: `src/components/HowItWorks.tsx`

- [ ] **Step 1: Update section body (line 48)**

Replace:
```
From discovery to delivery — Feast handles the entire food journey.
```
With:
```
Just talk, and Feast takes care of the rest.
```

- [ ] **Step 2: Commit**

```bash
git add src/components/HowItWorks.tsx
git commit -m "copy: refine HowItWorks section subtitle"
```

---

### Task 5: Update AppPreview copy

**Files:**
- Modify: `src/components/AppPreview.tsx`

- [ ] **Step 1: Update section heading (line 29)**

Replace:
```
Beautiful by design
```
With:
```
Designed to get out of the way
```

- [ ] **Step 2: Update section body (line 33)**

Replace:
```
Minimalist, modern, and built for how you actually cook.
```
With:
```
Clean, focused, and built for real kitchens — not design awards.
```

- [ ] **Step 3: Commit**

```bash
git add src/components/AppPreview.tsx
git commit -m "copy: refine AppPreview section — utility over vanity"
```

---

### Task 6: Update Waitlist success state copy

**Files:**
- Modify: `src/components/Waitlist.tsx`

- [ ] **Step 1: Update success heading (line 42)**

Replace:
```
You&apos;re on the list!
```
With:
```
You&apos;re in.
```

- [ ] **Step 2: Update success body (lines 44-46)**

Replace:
```
We&apos;ll reach out when Feast is ready for you. In the meantime,
keep an eye on your inbox.
```
With:
```
We&apos;ll reach out when your spot opens up. In the meantime,
your future Dietitian is already looking forward to meeting you.
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Waitlist.tsx
git commit -m "copy: refine Waitlist success state — warmer, persona callback"
```

---

### Task 7: Replace Hero phone mockup with screenshot

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Add next/image import at top of file**

Add to existing imports:
```tsx
import Image from "next/image";
```

- [ ] **Step 2: Replace `<HeroPhoneContent />` with Image (line 61)**

Replace:
```tsx
<HeroPhoneContent />
```
With:
```tsx
<Image
  src="/screenshots/chat.png"
  alt="Feast app — chat with your Dietitian"
  width={260}
  height={560}
  className="w-full h-auto"
/>
```

- [ ] **Step 3: Delete the `HeroPhoneContent` function (lines 69-167)**

Delete the entire `function HeroPhoneContent()` component and all its JSX.

- [ ] **Step 4: Clean up unused imports**

Remove these imports that were only used by `HeroPhoneContent`:
```tsx
import {
  ClipboardDocumentListIcon,
  SparklesIcon,
  FireIcon,
  CalendarDaysIcon,
  HomeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
```

Remove the entire `@heroicons/react/24/outline` import block. The `PhoneMockup` import stays.

- [ ] **Step 5: Verify in browser**

Check `http://localhost:3000` — the Hero phone should show the Dietitian chat screenshot inside the phone frame, properly clipped by the rounded corners.

- [ ] **Step 6: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: replace Hero JSX mockup with real app screenshot"
```

---

### Task 8: Replace HowItWorks phone mockups with screenshots

**Files:**
- Modify: `src/components/HowItWorks.tsx`

- [ ] **Step 1: Update the Image import**

`HowItWorks.tsx` already imports `Image` from `next/image` (line 1). Keep it.

- [ ] **Step 2: Create a screenshot mapping array**

Add after the `STEPS` array (after line 33):

```tsx
const STEP_SCREENSHOTS = [
  { src: "/screenshots/chat.png", alt: "Feast app — conversation with Dietitian" },
  { src: "/screenshots/planning.png", alt: "Feast app — Dietitian generating meal plan" },
  { src: "/screenshots/chat.png", alt: "Feast app — cooking guidance from Chef" },
  { src: "/screenshots/planning.png", alt: "Feast app — grocery list" },
];
```

- [ ] **Step 3: Replace the PhoneMockup children (lines 79-83)**

Replace:
```tsx
<PhoneMockup size="sm">
  {i === 0 && <Step1Phone />}
  {i === 1 && <Step2Phone />}
  {i === 2 && <Step3Phone />}
  {i === 3 && <Step4Phone />}
</PhoneMockup>
```
With:
```tsx
<PhoneMockup size="sm">
  <Image
    src={STEP_SCREENSHOTS[i].src}
    alt={STEP_SCREENSHOTS[i].alt}
    width={160}
    height={340}
    className="w-full h-auto"
  />
</PhoneMockup>
```

- [ ] **Step 4: Delete all Step phone components (lines 104-204)**

Delete these four functions entirely:
- `function Step1Phone()`
- `function Step2Phone()`
- `function Step3Phone()`
- `function Step4Phone()`

- [ ] **Step 5: Clean up unused imports**

Remove these imports that were only used by the deleted step components:
```tsx
import {
  ClipboardDocumentListIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
```

Keep the `Image` import (still used) and `PhoneMockup` import (still used).

- [ ] **Step 6: Verify in browser**

Check `http://localhost:3000/#how-it-works` — all four steps should show screenshot images inside their phone frames.

- [ ] **Step 7: Commit**

```bash
git add src/components/HowItWorks.tsx
git commit -m "feat: replace HowItWorks JSX mockups with real app screenshots"
```

---

### Task 9: Replace AppPreview phone mockups with screenshots

**Files:**
- Modify: `src/components/AppPreview.tsx`

- [ ] **Step 1: Add next/image import**

Add to existing imports:
```tsx
import Image from "next/image";
```

- [ ] **Step 2: Replace desktop fan layout phones (lines 38-68)**

Replace the three phone blocks in the desktop `md:flex` container:

**Left phone (Today) — replace `<TodayScreen />`:**
```tsx
<PhoneMockup size="md">
  <Image
    src="/screenshots/chat.png"
    alt="Feast app — Today view"
    width={180}
    height={390}
    className="w-full h-auto"
  />
</PhoneMockup>
```

**Center phone (Plan) — replace `<PlanScreen />`:**
```tsx
<PhoneMockup size="md" glow className="!w-[200px]">
  <Image
    src="/screenshots/planning.png"
    alt="Feast app — Plan view"
    width={180}
    height={390}
    className="w-full h-auto"
  />
</PhoneMockup>
```

**Right phone (Recipes) — replace `<RecipesScreen />`:**
```tsx
<PhoneMockup size="md">
  <Image
    src="/screenshots/chat.png"
    alt="Feast app — Recipes view"
    width={180}
    height={390}
    className="w-full h-auto"
  />
</PhoneMockup>
```

- [ ] **Step 3: Replace mobile single phone (lines 71-75)**

Replace `<PlanScreen />` in the mobile container:
```tsx
<PhoneMockup size="md" glow className="!w-[200px] sm:!w-[220px]">
  <Image
    src="/screenshots/planning.png"
    alt="Feast app — Plan view"
    width={180}
    height={390}
    className="w-full h-auto"
  />
</PhoneMockup>
```

- [ ] **Step 4: Delete all screen components (lines 81-159)**

Delete these three functions entirely:
- `function TodayScreen()`
- `function PlanScreen()`
- `function RecipesScreen()`

- [ ] **Step 5: Clean up unused imports**

Remove all Heroicon imports — they were only used by the deleted screen components:
```tsx
import {
  TrophyIcon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  BookOpenIcon,
  BookmarkIcon,
  SparklesIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
```

Keep `PhoneMockup` import (still used).

- [ ] **Step 6: Verify in browser**

Check `http://localhost:3000/#preview` — desktop should show three phones in fan layout with screenshots, mobile should show single centered phone.

- [ ] **Step 7: Commit**

```bash
git add src/components/AppPreview.tsx
git commit -m "feat: replace AppPreview JSX mockups with real app screenshots"
```

---

### Task 10: Final verification and build check

- [ ] **Step 1: Run the build**

```bash
npm run build
```

Expected: Clean build with no errors. Warnings about unused variables should not appear since we cleaned up imports.

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

Expected: No errors.

- [ ] **Step 3: Visual verification**

Open `http://localhost:3000` and scroll through the full page verifying:
- Features section has updated copy
- Personas section has updated heading/body
- HowItWorks has updated subtitle and screenshot images in phones
- AppPreview has updated heading/body and screenshot images in phones
- Hero has screenshot image in phone
- Waitlist success state (submit a test email to verify copy)

- [ ] **Step 4: Commit any fixes if needed**

If the build or lint caught anything, fix and commit before marking complete.
