# Mobile-First Responsive Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Feast landing page layout work well on 375px+ mobile phones with Tailwind-only responsive class adjustments.

**Architecture:** No structural changes. Each component gets targeted Tailwind responsive prefix adjustments (base = mobile, `sm:`/`md:` = larger screens). Desktop layout remains identical.

**Tech Stack:** Next.js, Tailwind CSS, existing component files only.

**Spec:** `docs/superpowers/specs/2026-03-20-mobile-first-responsive-design.md`

---

### Task 1: Hero section mobile fixes

**Files:**
- Modify: `src/components/Hero.tsx:13` (section padding)
- Modify: `src/components/Hero.tsx:14` (gap)
- Modify: `src/components/Hero.tsx:25` (body text max-width)
- Modify: `src/components/Hero.tsx:33` (join waitlist button)
- Modify: `src/components/Hero.tsx:43` (how it works button)
- Modify: `src/components/Hero.tsx:60` (phone mockup)

- [ ] **Step 1: Update section padding**

In `src/components/Hero.tsx` line 13, change:
```
pt-32 pb-24
```
to:
```
pt-32 pb-16 md:pb-24
```
Keep `pt-32` unchanged (header clearance).

- [ ] **Step 2: Fix section gap**

In `src/components/Hero.tsx` line 14, change:
```
gap-16 md:gap-12
```
to:
```
gap-10 md:gap-12
```

- [ ] **Step 3: Make body text max-width responsive**

In `src/components/Hero.tsx` line 25, change:
```
max-w-[420px]
```
to:
```
max-w-full md:max-w-[420px]
```

- [ ] **Step 4: Make CTA buttons full-width on mobile**

In `src/components/Hero.tsx` line 33, on the "Join the Waitlist" `<a>` tag, add `w-full sm:w-auto text-center` to the className. The full class becomes:
```
w-full sm:w-auto text-center rounded-[20px] px-8 py-3.5 text-[15px] font-bold text-v2-background transition-all duration-200 active:scale-[0.97]
```

In `src/components/Hero.tsx` line 43, on the "How It Works" `<a>` tag, add `w-full sm:w-auto text-center` to the className. The full class becomes:
```
w-full sm:w-auto text-center rounded-[20px] border border-v2-border px-7 py-3.5 text-[15px] font-semibold text-v2-text-primary transition-all duration-200 hover:border-v2-border-light
```

- [ ] **Step 5: Scale phone mockup for mobile**

In `src/components/Hero.tsx` line 60, change:
```jsx
<PhoneMockup size="lg" glow>
```
to:
```jsx
<PhoneMockup size="lg" glow className="!w-[200px] md:!w-[260px]">
```

- [ ] **Step 6: Verify and commit**

Run: `npm run build`
Expected: Build succeeds with no errors.

```bash
git add src/components/Hero.tsx
git commit -m "style: mobile-first responsive fixes for Hero section"
```

---

### Task 2: AppPreview section mobile fixes

**Files:**
- Modify: `src/components/AppPreview.tsx:14` (section padding)
- Modify: `src/components/AppPreview.tsx:32` (body text size)
- Modify: `src/components/AppPreview.tsx:72` (mobile phone width)

- [ ] **Step 1: Update section padding**

In `src/components/AppPreview.tsx` line 14, change:
```
py-24
```
to:
```
py-16 md:py-24
```

- [ ] **Step 2: Make body text responsive**

In `src/components/AppPreview.tsx` line 32, change:
```
text-lg
```
to:
```
text-base md:text-lg
```

- [ ] **Step 3: Fix mobile phone width**

In `src/components/AppPreview.tsx` line 72, change:
```jsx
<PhoneMockup size="md" glow className="!w-[220px]">
```
to:
```jsx
<PhoneMockup size="md" glow className="!w-[200px] sm:!w-[220px]">
```

Do NOT change the `!w-[200px]` on line 51 (desktop fan layout).

- [ ] **Step 4: Verify and commit**

Run: `npm run build`
Expected: Build succeeds with no errors.

```bash
git add src/components/AppPreview.tsx
git commit -m "style: mobile-first responsive fixes for AppPreview section"
```

---

### Task 3: HowItWorks section mobile fix

**Files:**
- Modify: `src/components/HowItWorks.tsx:37` (section padding)

- [ ] **Step 1: Update section padding**

In `src/components/HowItWorks.tsx` line 37, change:
```
py-24
```
to:
```
py-16 md:py-24
```

No other changes. The `pl-[54px]` indent on line 72 fits within 375px mobile viewport (327px content area - 54px = 273px for text).

- [ ] **Step 2: Verify and commit**

Run: `npm run build`
Expected: Build succeeds with no errors.

```bash
git add src/components/HowItWorks.tsx
git commit -m "style: mobile-first responsive padding for HowItWorks section"
```

---

### Task 4: Features section mobile fix

**Files:**
- Modify: `src/components/Features.tsx:37` (section padding)
- Modify: `src/components/Features.tsx:56` (card padding)

- [ ] **Step 1: Update section padding**

In `src/components/Features.tsx` line 37, change:
```
py-24
```
to:
```
py-16 md:py-24
```

- [ ] **Step 2: Reduce card padding on mobile**

In `src/components/Features.tsx` line 56, change:
```
p-7
```
to:
```
p-5 md:p-7
```

- [ ] **Step 3: Verify and commit**

Run: `npm run build`
Expected: Build succeeds with no errors.

```bash
git add src/components/Features.tsx
git commit -m "style: mobile-first responsive fixes for Features section"
```

---

### Task 5: Personas section mobile fix

**Files:**
- Modify: `src/components/Personas.tsx:61` (section padding)
- Modify: `src/components/Personas.tsx:80` (card padding)

- [ ] **Step 1: Update section padding**

In `src/components/Personas.tsx` line 61, change:
```
py-24
```
to:
```
py-16 md:py-24
```

- [ ] **Step 2: Reduce card padding on mobile**

In `src/components/Personas.tsx` line 80, change:
```
p-7
```
to:
```
p-5 md:p-7
```

- [ ] **Step 3: Verify and commit**

Run: `npm run build`
Expected: Build succeeds with no errors.

```bash
git add src/components/Personas.tsx
git commit -m "style: mobile-first responsive fixes for Personas section"
```

---

### Task 6: Waitlist section mobile fix

**Files:**
- Modify: `src/components/Waitlist.tsx:37` (success state padding)
- Modify: `src/components/Waitlist.tsx:53` (section padding)
- Modify: `src/components/Waitlist.tsx:90` (submit button)

- [ ] **Step 1: Update section padding (both states)**

In `src/components/Waitlist.tsx` line 37 (success state), change:
```
py-24
```
to:
```
py-16 md:py-24
```

In `src/components/Waitlist.tsx` line 53 (form state), change:
```
py-24
```
to:
```
py-16 md:py-24
```

- [ ] **Step 2: Make submit button full-width on mobile**

In `src/components/Waitlist.tsx` line 90, on the `<button>` tag, add `w-full sm:w-auto` to the className. The full class becomes:
```
w-full sm:w-auto rounded-[16px] px-7 py-3.5 text-[15px] font-bold text-v2-background transition-all duration-200 active:scale-[0.97] disabled:opacity-60
```

- [ ] **Step 3: Verify and commit**

Run: `npm run build`
Expected: Build succeeds with no errors.

```bash
git add src/components/Waitlist.tsx
git commit -m "style: mobile-first responsive fixes for Waitlist section"
```

---

### Task 7: Visual verification

- [ ] **Step 1: Start dev server**

Run: `NEXT_PUBLIC_SITE_LIVE=true npm run dev`

- [ ] **Step 2: Verify at mobile width (375px)**

Open `http://localhost:3000` in a browser. Use DevTools responsive mode at 375px width. Scroll through entire page and verify:
- Hero: phone mockup is 200px wide, buttons are full-width, text flows naturally
- AppPreview: phone is 200px wide, text is base size
- HowItWorks: step descriptions have room, indent is acceptable
- Features: card padding is tighter but readable
- Personas: card padding is tighter but readable
- Waitlist: button is full-width, form stacks correctly
- All sections: reduced vertical padding (64px vs 96px)

- [ ] **Step 3: Verify at desktop width (1280px+)**

Switch to 1280px+ width and verify NO regressions — layout should be identical to before.

- [ ] **Step 4: Verify at tablet width (768px)**

Switch to 768px and verify the `md:` breakpoint transitions work correctly.
