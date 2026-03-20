# Landing Page Dark Theme Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Feast landing page to match the app's premium dark theme (#050505 backgrounds, #00D37F green, glass morphism, glow effects).

**Architecture:** Replace all light-theme styling with dark theme tokens via Tailwind v4 @theme. Swap Geist fonts for Inter. Rewrite every component with exact dark-theme classes. Add 3 new components (Personas, AppPreview, PhoneMockup). No new npm dependencies.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript, Heroicons

**Spec:** `docs/superpowers/specs/2026-03-19-landing-page-redesign-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `src/app/globals.css` | Rewrite | Tailwind v4 @theme tokens, base styles |
| `src/app/layout.tsx` | Rewrite | Inter font, dark background on body |
| `src/app/page.tsx` | Rewrite | Section ordering with new components |
| `src/components/Header.tsx` | Rewrite | Dark glassmorphism nav |
| `src/components/Hero.tsx` | Rewrite | Split layout with phone mockup |
| `src/components/PhoneMockup.tsx` | Create | Reusable phone frame (children-based) |
| `src/components/Features.tsx` | Rewrite | Glass cards, dark theme |
| `src/components/Personas.tsx` | Create | Meet the Team section |
| `src/components/HowItWorks.tsx` | Rewrite | 4 steps with mini phones |
| `src/components/AppPreview.tsx` | Create | Fan layout of 3 phones |
| `src/components/Waitlist.tsx` | Rewrite | Dark form with glow |
| `src/components/Footer.tsx` | Rewrite | Dark minimal footer |
| `public/instacart-logo.svg` | Copy | Instacart AllWhite logo |

---

### Task 1: Copy Instacart Logo Asset

**Files:**
- Copy from: `/Users/RBTECHBOT/Documents/Repositories/feast/assets/InstacartLogos/Full Logo/RGB/SVG/Instacart_Logo_AllWhite.svg`
- Copy to: `public/instacart-logo.svg`

- [ ] **Step 1: Copy the SVG file**

```bash
cp "/Users/RBTECHBOT/Documents/Repositories/feast/assets/InstacartLogos/Full Logo/RGB/SVG/Instacart_Logo_AllWhite.svg" public/instacart-logo.svg
```

- [ ] **Step 2: Verify file exists**

```bash
ls -la public/instacart-logo.svg
```

Expected: File exists, non-zero size.

- [ ] **Step 3: Commit**

```bash
git add public/instacart-logo.svg
git commit -m "chore: add Instacart AllWhite logo SVG"
```

---

### Task 2: Design System Foundation (globals.css + layout.tsx)

**Files:**
- Rewrite: `src/app/globals.css`
- Rewrite: `src/app/layout.tsx`

- [ ] **Step 1: Rewrite globals.css**

Replace the entire contents of `src/app/globals.css` with exactly:

```css
@import "tailwindcss";

@theme {
  --color-v2-background: #050505;
  --color-v2-surface: #111113;
  --color-v2-card: #1A1A1D;
  --color-v2-card-hover: #222226;
  --color-v2-border: #2A2A2E;
  --color-v2-border-light: #38383D;
  --color-v2-text-primary: #F5F5F7;
  --color-v2-text-secondary: #98989F;
  --color-v2-text-tertiary: #5C5C63;
  --color-v2-primary: #00D37F;
  --color-v2-primary-light: #33EDAA;
  --color-v2-primary-dark: #00A863;
  --color-v2-primary-muted: rgba(0, 211, 127, 0.12);
  --color-v2-primary-glow: rgba(0, 211, 127, 0.25);
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #050505;
  color: #F5F5F7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

- [ ] **Step 2: Rewrite layout.tsx**

Replace the entire contents of `src/app/layout.tsx` with exactly:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Feast — Your AI Meal Planning Companion",
  description:
    "Feast plans your meals through natural conversation. Your AI team of Dietitian, Chef & Coach learns what you love and gets smarter every week.",
  openGraph: {
    title: "Feast — Your AI Meal Planning Companion",
    description:
      "Your AI team of Dietitian, Chef & Coach. Meal planning through natural conversation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Verify the dev server still loads**

```bash
# The dev server should already be running on localhost:3000
# Open http://localhost:3000 in a browser — page should load with dark background
# Text may look broken because components still use old color vars — that's expected
```

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: replace design system with dark theme tokens and Inter font"
```

---

### Task 3: PhoneMockup Component

**Files:**
- Create: `src/components/PhoneMockup.tsx`

- [ ] **Step 1: Create PhoneMockup.tsx**

Create `src/components/PhoneMockup.tsx` with exactly:

```tsx
// Border-radius scales proportionally with phone size:
// lg (260px) = spec values 32px/24px, md/sm scale down proportionally
const SIZES = {
  sm: { width: "w-[160px]", padding: "p-[6px]", outerRadius: "rounded-[20px]", innerRadius: "rounded-[14px]" },
  md: { width: "w-[180px]", padding: "p-[8px]", outerRadius: "rounded-[24px]", innerRadius: "rounded-[18px]" },
  lg: { width: "w-[260px]", padding: "p-3", outerRadius: "rounded-[32px]", innerRadius: "rounded-[24px]" },
};

export function PhoneMockup({
  size = "lg",
  glow = false,
  className = "",
  children,
}: {
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const s = SIZES[size];

  return (
    <div className={`${s.width} shrink-0 ${className}`}>
      <div
        className={`bg-v2-card ${s.outerRadius} border-2 border-v2-border ${s.padding}`}
        style={{
          boxShadow: glow
            ? "0 8px 32px rgba(0,0,0,0.4), 0 4px 16px rgba(0,211,127,0.08)"
            : "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <div className={`bg-v2-background ${s.innerRadius} overflow-hidden`}>
          {children}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PhoneMockup.tsx
git commit -m "feat: add reusable PhoneMockup component"
```

---

### Task 4: Header Component

**Files:**
- Rewrite: `src/components/Header.tsx`

- [ ] **Step 1: Rewrite Header.tsx**

Replace the entire contents of `src/components/Header.tsx` with exactly:

```tsx
"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "The Team", href: "#team" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-white/[0.06]"
      style={{ background: "rgba(5, 5, 5, 0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold tracking-[0.3em] uppercase text-v2-primary"
        >
          FEAST
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-v2-text-secondary transition-colors duration-200 hover:text-v2-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="rounded-[20px] px-5 py-2 text-sm font-semibold text-v2-background transition-all duration-200 active:scale-[0.97]"
            style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}
          >
            Join Waitlist
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6 text-v2-text-primary" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-v2-text-primary" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-white/[0.06] bg-v2-background px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-v2-text-secondary transition-colors duration-200 hover:text-v2-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-[20px] px-5 py-2.5 text-center text-sm font-semibold text-v2-background"
            style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}
          >
            Join Waitlist
          </a>
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:3000. The header should be visible with:
- Dark semi-transparent background with blur
- Green "FEAST" wordmark on the left with wide letter spacing
- Nav links + green gradient "Join Waitlist" button on desktop
- Hamburger menu on mobile widths

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: dark glassmorphism header with green FEAST wordmark"
```

---

### Task 5: Hero Section

**Files:**
- Rewrite: `src/components/Hero.tsx`

- [ ] **Step 1: Rewrite Hero.tsx**

Replace the entire contents of `src/components/Hero.tsx` with exactly:

```tsx
import { PhoneMockup } from "@/components/PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-v2-background px-6 pt-32 pb-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 md:flex-row md:gap-12">
        {/* Left: Copy */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            Your AI Meal Planning Companion
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.12] tracking-[-0.5px] text-v2-text-primary sm:text-5xl md:text-[56px]">
            Your AI team of{" "}
            <span className="text-v2-primary">
              Dietitian, Chef
              <br />
              &amp; Coach
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-[420px] text-[17px] leading-[1.7] text-v2-text-secondary md:mx-0">
            Feast plans your meals through natural conversation — not forms and
            checkboxes. It learns what you love, remembers what you need, and
            gets smarter every week.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#waitlist"
              className="rounded-[20px] px-8 py-3.5 text-[15px] font-bold text-v2-background transition-all duration-200 active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #00D37F, #00A863)",
                boxShadow: "0 4px 16px rgba(0,211,127,0.3)",
              }}
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              className="rounded-[20px] border border-v2-border px-7 py-3.5 text-[15px] font-semibold text-v2-text-primary transition-all duration-200 hover:border-v2-border-light"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Right: Phone Mockup */}
        <div className="relative">
          {/* Green glow behind phone */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(circle, rgba(0,211,127,0.08) 0%, transparent 70%)",
            }}
          />
          <PhoneMockup size="lg" glow>
            <HeroPhoneContent />
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}

function HeroPhoneContent() {
  return (
    <div className="p-4 text-xs" style={{ minHeight: 420 }}>
      {/* Status bar */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[10px] text-v2-text-secondary">9:41</span>
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-v2-primary">
          FEAST
        </span>
        <span className="text-[10px] text-v2-text-secondary">100%</span>
      </div>

      {/* Greeting */}
      <p className="mb-4 text-[18px] font-bold leading-[1.25] text-v2-text-primary">
        Good evening!
        <br />
        Let&apos;s plan your week.
      </p>

      {/* Dietitian card */}
      <div className="mb-3 rounded-[16px] border border-v2-border bg-v2-card p-3">
        <div className="mb-2 flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-v2-primary text-sm"
          >
            📋
          </div>
          <div>
            <p className="text-[12px] font-semibold text-v2-text-primary">
              Your Dietitian
            </p>
            <p className="text-[10px] text-v2-text-tertiary">
              Meal Planning Expert
            </p>
          </div>
        </div>
        <p className="text-[11px] leading-[1.5] text-v2-text-secondary">
          I&apos;ve planned 5 meals based on your preferences. High protein, low
          carb — just how you like it.
        </p>
      </div>

      {/* Recipe cards */}
      <div className="mb-3 flex gap-2">
        <div className="flex-1 rounded-xl border border-v2-border bg-v2-card p-2.5">
          <div className="mb-2 flex h-[50px] items-center justify-center rounded-lg text-xl" style={{ background: "linear-gradient(135deg, #1a3a2a, #0a2a1a)" }}>
            🥗
          </div>
          <p className="text-[10px] font-semibold text-v2-text-primary">
            Thai Salad
          </p>
          <p className="text-[9px] text-v2-text-tertiary">25m · 420 cal</p>
        </div>
        <div className="flex-1 rounded-xl border border-v2-border bg-v2-card p-2.5">
          <div className="mb-2 flex h-[50px] items-center justify-center rounded-lg text-xl" style={{ background: "linear-gradient(135deg, #2a2a1a, #1a1a0a)" }}>
            🍗
          </div>
          <p className="text-[10px] font-semibold text-v2-text-primary">
            Lemon Chicken
          </p>
          <p className="text-[9px] text-v2-text-tertiary">30m · 380 cal</p>
        </div>
      </div>

      {/* CTA */}
      <div
        className="rounded-[14px] py-2.5 text-center text-[12px] font-bold text-v2-background"
        style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}
      >
        View Full Plan
      </div>

      {/* Tab bar */}
      <div className="mt-4 flex justify-around border-t border-v2-border pt-3">
        <div className="text-center">
          <div className="text-sm">📅</div>
          <p className="mt-0.5 text-[9px] text-v2-text-tertiary">Plan</p>
        </div>
        <div className="text-center">
          <div className="text-sm">🏠</div>
          <p className="mt-0.5 text-[9px] font-semibold text-v2-primary">
            Today
          </p>
          <div className="mx-auto mt-0.5 h-0.5 w-4 rounded-full bg-v2-primary" />
        </div>
        <div className="text-center">
          <div className="text-sm">🛒</div>
          <p className="mt-0.5 text-[9px] text-v2-text-tertiary">Shop</p>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:3000. The hero should show:
- Dark background
- "Your AI team of Dietitian, Chef & Coach" headline with green persona names
- Green gradient "Join the Waitlist" button with glow shadow
- Outline "How It Works" button
- Phone mockup on the right with styled app content
- Green glow behind the phone
- Stacks vertically on mobile

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: dark hero section with split layout and styled phone mockup"
```

---

### Task 6: Features Section

**Files:**
- Rewrite: `src/components/Features.tsx`

- [ ] **Step 1: Rewrite Features.tsx**

Replace the entire contents of `src/components/Features.tsx` with exactly:

```tsx
import {
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const FEATURES = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Conversational, Not Transactional",
    description:
      "Tell Feast what you're feeling this week. No forms, no checkboxes — just a natural conversation with an AI dietitian who listens.",
  },
  {
    icon: SparklesIcon,
    title: "It Remembers You",
    description:
      "Cutting back on carbs? Feast remembers next week. Loved that Thai recipe? It'll find more like it. The app gets smarter every day.",
  },
  {
    icon: HeartIcon,
    title: "A Team That Cares",
    description:
      "Your Dietitian plans your week. Your Chef guides cooking. Your Coach keeps you on track. They're not chatbot modes — they're companions.",
  },
  {
    icon: ShoppingCartIcon,
    title: "Groceries, Handled",
    description:
      "One tap turns your meal plan into a grocery list. Deduplicated, organized, and ready to send to Instacart for delivery.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-v2-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            Why Feast
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Not another meal planning app
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-v2-text-secondary">
            Most apps treat you like a database row. Feast treats you like a
            person.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[20px] border border-white/[0.06] p-7 transition-colors duration-200 hover:border-white/[0.12]"
              style={{ background: "rgba(26, 26, 29, 0.8)" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-v2-primary/12">
                <feature.icon className="h-6 w-6 text-v2-primary" />
              </div>
              <h3 className="mt-4 text-[17px] font-semibold text-v2-text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-v2-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

The Features section should show:
- #111113 background
- Green "Why Feast" label
- 2x2 grid of glass morphism cards with green icon badges
- Single column on mobile

- [ ] **Step 3: Commit**

```bash
git add src/components/Features.tsx
git commit -m "feat: dark glass morphism features grid"
```

---

### Task 7: Personas (Meet the Team) Section

**Files:**
- Create: `src/components/Personas.tsx`

- [ ] **Step 1: Create Personas.tsx**

Create `src/components/Personas.tsx` with exactly:

```tsx
const PERSONAS = [
  {
    emoji: "📋",
    name: "Dietitian",
    role: "Meal Planning Expert",
    quote:
      "I've built your plan around high-protein dinners this week. Tuesday and Thursday are lighter — you mentioned wanting balance.",
    label: "Plans your meals",
    description:
      "Builds personalized weekly plans based on your goals, preferences, and history.",
  },
  {
    emoji: "👨‍🍳",
    name: "Chef",
    role: "Cooking Guide",
    quote:
      "No buttermilk? No problem — mix 1 cup milk with 1 tbsp lemon juice and let it sit for 5 minutes.",
    label: "Guides your cooking",
    description:
      "Walks you through recipes step by step. Ask questions mid-cook and get real answers.",
  },
  {
    emoji: "🏆",
    name: "Coach",
    role: "Accountability Partner",
    quote:
      "You've hit your protein target 4 days this week. One more day and you'll have your best week yet.",
    label: "Keeps you on track",
    description:
      "Tracks your progress and nudges you toward your nutritional goals week over week.",
  },
];

export function Personas() {
  return (
    <section id="team" className="bg-v2-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            Your AI Team
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Three experts. One app.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-v2-text-secondary">
            Each one specializes in a different part of your week.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {PERSONAS.map((persona) => (
            <div
              key={persona.name}
              className="relative overflow-hidden rounded-[20px] border border-v2-border bg-v2-card p-7"
            >
              {/* Glow accent */}
              <div
                className="pointer-events-none absolute -top-[30px] -right-[30px] h-[100px] w-[100px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,211,127,0.1) 0%, transparent 70%)",
                }}
              />

              {/* Avatar + name */}
              <div className="relative mb-5 flex items-center gap-3.5">
                <div
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-v2-primary text-2xl"
                  style={{
                    boxShadow: "0 4px 12px rgba(0,211,127,0.25)",
                  }}
                >
                  {persona.emoji}
                </div>
                <div>
                  <p className="text-lg font-bold text-v2-text-primary">
                    {persona.name}
                  </p>
                  <p className="text-xs text-v2-text-tertiary">
                    {persona.role}
                  </p>
                </div>
              </div>

              {/* Chat preview */}
              <div className="rounded-[14px] border border-white/[0.04] bg-v2-surface p-3.5">
                <p className="text-xs italic leading-relaxed text-v2-text-secondary">
                  &ldquo;{persona.quote}&rdquo;
                </p>
              </div>

              {/* Role description */}
              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.5px] text-v2-primary">
                  {persona.label}
                </p>
                <p className="mt-1 text-[13px] leading-[1.5] text-v2-text-tertiary">
                  {persona.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:3000 and scroll to the team section. Verify:
- 3 persona cards with green circle avatars and glow shadows
- Chat preview bubbles with italic quotes
- Green role labels
- Single column on mobile

- [ ] **Step 3: Commit**

```bash
git add src/components/Personas.tsx
git commit -m "feat: add Meet the Team personas section"
```

---

### Task 8: How It Works Section

**Files:**
- Rewrite: `src/components/HowItWorks.tsx`

- [ ] **Step 1: Rewrite HowItWorks.tsx**

Replace the entire contents of `src/components/HowItWorks.tsx` with exactly:

```tsx
import Image from "next/image";
import { PhoneMockup } from "@/components/PhoneMockup";

const STEPS = [
  {
    number: "01",
    title: "Have a conversation",
    description:
      'Open Feast and tell it what you\'re in the mood for. "I want something light this week" or "I\'m cooking for my partner who\'s vegetarian" — whatever\'s on your mind.',
  },
  {
    number: "02",
    title: "Get a plan that fits",
    description:
      "Your AI Dietitian builds a personalized weekly meal plan based on what you said, what you've liked before, and your nutritional goals. Swap anything you don't want.",
  },
  {
    number: "03",
    title: "Cook with confidence",
    description:
      'When it\'s time to cook, your AI Chef walks you through each recipe step by step. Ask questions mid-recipe — "can I substitute this?" — and get real answers.',
  },
  {
    number: "04",
    title: "Shop in one tap",
    description:
      "Your meal plan becomes a grocery list — deduplicated, organized, and ready to send to Instacart for delivery.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-v2-surface px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Four steps. No learning curve.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-v2-text-secondary">
            Just tell it what you want.
          </p>
        </div>

        <div className="mt-16">
          {STEPS.map((step, i) => (
            <div key={step.number}>
              <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-bold text-v2-background"
                      style={{
                        background:
                          "linear-gradient(135deg, #00D37F, #00A863)",
                        boxShadow: "0 4px 12px rgba(0,211,127,0.25)",
                      }}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-v2-text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 pl-[54px] text-[15px] leading-[1.7] text-v2-text-secondary">
                    {step.description}
                  </p>
                </div>

                {/* Mini phone */}
                <PhoneMockup size="sm">
                  {i === 0 && <Step1Phone />}
                  {i === 1 && <Step2Phone />}
                  {i === 2 && <Step3Phone />}
                  {i === 3 && <Step4Phone />}
                </PhoneMockup>
              </div>

              {/* Connector */}
              {i < STEPS.length - 1 && (
                <div
                  className="mx-auto my-8 h-6 w-0.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, #00D37F, #2A2A2E)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Step1Phone() {
  return (
    <div className="p-3 text-[7px]">
      <div className="mb-2 text-center text-[8px] font-bold tracking-[0.2em] uppercase text-v2-primary">
        FEAST
      </div>
      <div className="mb-2 flex items-center gap-1.5">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-v2-primary text-[8px]">📋</div>
        <span className="text-[8px] font-semibold text-v2-text-primary">Dietitian</span>
      </div>
      <div className="mb-1.5 rounded-lg border border-v2-border bg-v2-card p-2">
        <p className="leading-[1.5] text-v2-text-secondary">What are you feeling this week? Any preferences?</p>
      </div>
      <div className="ml-5 rounded-lg p-2" style={{ background: "rgba(0,211,127,0.12)" }}>
        <p className="leading-[1.5] text-v2-primary">High protein, keep it simple. My partner is vegetarian on Tuesdays.</p>
      </div>
    </div>
  );
}

function Step2Phone() {
  return (
    <div className="p-3 text-[7px]">
      <div className="mb-2 text-center text-[8px] font-bold tracking-[0.2em] uppercase text-v2-primary">
        FEAST
      </div>
      <p className="mb-1.5 text-v2-text-tertiary">Your Week</p>
      {[
        { day: "Mon", meal: "Thai Salad", meta: "420 cal · 35g protein" },
        { day: "Tue", meal: "Veggie Stir Fry", meta: "380 cal · 🌱 vegetarian" },
        { day: "Wed", meal: "Lemon Chicken", meta: "510 cal · 42g protein" },
      ].map((item) => (
        <div key={item.day} className="mb-1 rounded-md border border-v2-border bg-v2-card p-1.5">
          <p className="font-semibold text-v2-text-primary">{item.day} — {item.meal}</p>
          <p className="text-[6px] text-v2-text-tertiary">{item.meta}</p>
        </div>
      ))}
      <div className="mt-2 rounded-md py-1.5 text-center font-bold text-v2-background" style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}>
        View Full Plan
      </div>
    </div>
  );
}

function Step3Phone() {
  return (
    <div className="p-3 text-[7px]">
      <div className="mb-2 text-center text-[8px] font-bold tracking-[0.2em] uppercase text-v2-primary">
        FEAST
      </div>
      <div className="mb-2 flex items-center gap-1.5">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-v2-primary text-[8px]">👨‍🍳</div>
        <span className="text-[8px] font-semibold text-v2-text-primary">Chef</span>
      </div>
      <p className="mb-1 font-semibold text-v2-text-primary">Step 3 of 6</p>
      <div className="mb-1.5 rounded-md border border-v2-border bg-v2-card p-1.5">
        <p className="leading-[1.4] text-v2-text-secondary">Sear the chicken for 4 minutes per side until golden. Don&apos;t move it — let the crust form.</p>
      </div>
      <div className="mb-2 h-[3px] rounded-full bg-v2-border">
        <div className="h-full w-1/2 rounded-full bg-v2-primary" />
      </div>
      <div className="flex gap-1">
        <div className="flex-1 rounded-md border border-v2-border bg-v2-card py-1 text-center text-[6px] text-v2-text-secondary">← Prev</div>
        <div className="flex-1 rounded-md py-1 text-center text-[6px] font-bold text-v2-background" style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}>Next →</div>
      </div>
    </div>
  );
}

function Step4Phone() {
  return (
    <div className="p-3 text-[7px]">
      <div className="mb-2 text-center text-[8px] font-bold tracking-[0.2em] uppercase text-v2-primary">
        FEAST
      </div>
      <p className="mb-1 font-semibold text-v2-text-primary">Grocery List</p>
      <p className="mb-2 text-[6px] text-v2-text-tertiary">12 items · 3 categories</p>
      {[
        { cat: "Produce", items: "Asparagus, Peas, Lemon, Ginger" },
        { cat: "Protein", items: "Chicken breast, Tofu" },
        { cat: "Pantry", items: "Soy sauce, Rice, Coconut milk" },
      ].map((group) => (
        <div key={group.cat} className="mb-1.5">
          <p className="mb-0.5 text-[6px] font-semibold uppercase tracking-[0.5px] text-v2-primary">{group.cat}</p>
          <div className="rounded-md border border-v2-border bg-v2-card p-1.5">
            <p className="text-v2-text-secondary">{group.items}</p>
          </div>
        </div>
      ))}
      <div className="mt-2 flex items-center justify-center gap-1.5 rounded-md py-1.5" style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}>
        {/* brightness-0 turns the AllWhite SVG to black so it's visible on the green gradient button */}
        <Image src="/instacart-logo.svg" alt="Instacart" width={48} height={12} className="brightness-0" />
        <span className="text-[7px] font-bold text-v2-background">Send to Instacart</span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify in browser**

The How It Works section should show:
- #111113 background
- "Four steps. No learning curve." heading
- 4 steps with green gradient number badges
- Mini phone mockup to the right of each step
- Green gradient connectors between steps
- Step 4 shows grocery list with Instacart logo

- [ ] **Step 3: Commit**

```bash
git add src/components/HowItWorks.tsx
git commit -m "feat: 4-step how-it-works with mini phone mockups and Instacart"
```

---

### Task 9: App Preview Section

**Files:**
- Create: `src/components/AppPreview.tsx`

- [ ] **Step 1: Create AppPreview.tsx**

Create `src/components/AppPreview.tsx` with exactly:

```tsx
import { PhoneMockup } from "@/components/PhoneMockup";

export function AppPreview() {
  return (
    <section id="preview" className="relative overflow-hidden bg-v2-background px-6 py-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,211,127,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            See It In Action
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Designed for your kitchen
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-v2-text-secondary">
            A few screens from the app.
          </p>
        </div>

        {/* Phone fan — desktop */}
        <div className="mt-16 hidden items-end justify-center gap-6 md:flex">
          {/* Left phone: Today */}
          <div className="-rotate-3">
            <PhoneMockup size="md">
              <TodayScreen />
            </PhoneMockup>
            <p className="mt-2.5 text-center text-[11px] text-v2-text-tertiary">
              Today
            </p>
          </div>

          {/* Center phone: Plan (elevated) */}
          <div className="-translate-y-2.5">
            <PhoneMockup size="md" glow className="!w-[200px]">
              <PlanScreen />
            </PhoneMockup>
            <p className="mt-2.5 text-center text-[11px] text-v2-text-tertiary">
              Plan
            </p>
          </div>

          {/* Right phone: Recipes */}
          <div className="rotate-3">
            <PhoneMockup size="md">
              <RecipesScreen />
            </PhoneMockup>
            <p className="mt-2.5 text-center text-[11px] text-v2-text-tertiary">
              Recipes
            </p>
          </div>
        </div>

        {/* Mobile: single centered phone */}
        <div className="mt-16 flex justify-center md:hidden">
          <PhoneMockup size="md" glow className="!w-[220px]">
            <PlanScreen />
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}

function TodayScreen() {
  return (
    <div className="p-3 text-[8px]">
      <div className="mb-3 text-center text-[9px] font-bold tracking-[0.2em] uppercase text-v2-primary">FEAST</div>
      <p className="mb-2 text-[12px] font-bold leading-tight text-v2-text-primary">Good evening!<br />Let&apos;s plan your week.</p>
      <div className="mb-2 rounded-[10px] border border-v2-border bg-v2-card p-2.5">
        <div className="flex items-center gap-1.5">
          <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-v2-primary text-[8px]">🏆</div>
          <p className="text-v2-text-secondary">You haven&apos;t built your plan yet.</p>
        </div>
      </div>
      <div className="rounded-[10px] border border-v2-border bg-v2-card p-3 text-center">
        <div className="mb-1.5 text-base">📅</div>
        <p className="text-[10px] font-semibold text-v2-text-primary">Plan your week</p>
        <div className="mt-2 rounded-lg py-1.5 text-[8px] font-bold text-v2-background" style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}>Create Meal Plan</div>
      </div>
    </div>
  );
}

function PlanScreen() {
  return (
    <div className="p-3 text-[8px]">
      <div className="mb-3 text-center text-[9px] font-bold tracking-[0.2em] uppercase text-v2-primary">FEAST</div>
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-v2-primary text-xs">📋</div>
        <div>
          <p className="text-[10px] font-semibold text-v2-text-primary">Dietitian</p>
          <p className="text-[7px] text-v2-text-tertiary">Your Meal Planning Expert</p>
        </div>
      </div>
      <div className="mb-2 rounded-lg border border-v2-border bg-v2-card p-2">
        <p className="leading-[1.5] text-v2-text-secondary">Let&apos;s talk about what you want this week.</p>
      </div>
      <div className="mb-3 rounded-[14px] py-2.5 text-center text-[11px] font-bold text-v2-background" style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}>Build My Plan →</div>
      <p className="mb-2 text-[8px] font-semibold uppercase tracking-[1px] text-v2-primary">Browse &amp; Discover</p>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="rounded-lg border border-v2-border bg-v2-card p-2 text-center">
          <div className="text-xs">📖</div>
          <p className="mt-1 text-[7px] font-semibold text-v2-text-primary">All Recipes</p>
        </div>
        <div className="rounded-lg border border-v2-border bg-v2-card p-2 text-center">
          <div className="text-xs">🔖</div>
          <p className="mt-1 text-[7px] font-semibold text-v2-text-primary">Saved Plans</p>
        </div>
      </div>
    </div>
  );
}

function RecipesScreen() {
  return (
    <div className="p-3 text-[8px]">
      <div className="mb-3 text-center text-[9px] font-bold tracking-[0.2em] uppercase text-v2-primary">FEAST</div>
      <p className="mb-1 text-[12px] font-bold text-v2-text-primary">Quick &amp; Easy</p>
      <p className="mb-2.5 text-v2-text-tertiary">Under 30 min</p>
      <div className="mb-1.5 flex h-[60px] items-center justify-center rounded-[10px] text-2xl" style={{ background: "linear-gradient(135deg, #1a3a2a, #0a2a1a)" }}>🥗</div>
      <p className="text-[9px] font-semibold text-v2-text-primary">Asparagus and Pea Soup</p>
      <p className="mb-2 text-[7px] text-v2-text-tertiary">20m · Serves 2</p>
      <div className="mb-1.5 flex h-[60px] items-center justify-center rounded-[10px] text-2xl" style={{ background: "linear-gradient(135deg, #2a2a1a, #1a1a0a)" }}>🍗</div>
      <p className="text-[9px] font-semibold text-v2-text-primary">Cauliflower Brown Rice</p>
      <p className="text-[7px] text-v2-text-tertiary">30m · Serves 8</p>
    </div>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:3000 and scroll to the preview section. Verify:
- Desktop: 3 phones in fan arrangement, center phone elevated with green glow
- Labels below each phone
- Mobile: single centered phone

- [ ] **Step 3: Commit**

```bash
git add src/components/AppPreview.tsx
git commit -m "feat: add app preview section with phone fan layout"
```

---

### Task 10: Waitlist Section

**Files:**
- Rewrite: `src/components/Waitlist.tsx`

- [ ] **Step 1: Rewrite Waitlist.tsx**

Replace the entire contents of `src/components/Waitlist.tsx` with exactly:

```tsx
"use client";

import { useState, type FormEvent } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback: open mailto link so email isn't lost
      window.location.href = `mailto:ryan@rbtechnologies.dev?subject=Feast%20Waitlist&body=Sign%20me%20up%3A%20${encodeURIComponent(email)}`;
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section id="waitlist" className="bg-v2-surface px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-5xl">🎉</div>
          <h2 className="mt-4 text-3xl font-bold text-v2-text-primary">
            You&apos;re on the list!
          </h2>
          <p className="mt-4 text-lg text-v2-text-secondary">
            We&apos;ll reach out when Feast is ready for you. In the meantime,
            keep an eye on your inbox.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="relative overflow-hidden bg-v2-surface px-6 py-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(0,211,127,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[500px] text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
          Early Access
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
          Be the first to try Feast
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-v2-text-secondary">
          Feast is currently in beta on TestFlight. Join the waitlist and
          we&apos;ll send you an invite when your spot opens up.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-[16px] border border-v2-border bg-v2-card px-5 py-3.5 text-v2-text-primary placeholder:text-v2-text-tertiary focus:border-v2-primary focus:outline-none focus:ring-2 focus:ring-v2-primary/20"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-[16px] px-7 py-3.5 text-[15px] font-bold text-v2-background transition-all duration-200 active:scale-[0.97] disabled:opacity-60"
            style={{
              background: "linear-gradient(135deg, #00D37F, #00A863)",
              boxShadow: "0 4px 16px rgba(0,211,127,0.3)",
            }}
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>
        </form>

        <p className="mt-4 text-[13px] text-v2-text-tertiary">
          No spam. Just an invite when it&apos;s your turn.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:3000 and scroll to the waitlist section. Verify:
- Dark input field with card background
- Green gradient submit button with glow shadow
- Input focus state shows green border and ring
- Green radial glow behind the form

- [ ] **Step 3: Commit**

```bash
git add src/components/Waitlist.tsx
git commit -m "feat: dark waitlist section with green glow and gradient CTA"
```

---

### Task 11: Footer

**Files:**
- Rewrite: `src/components/Footer.tsx`

- [ ] **Step 1: Rewrite Footer.tsx**

Replace the entire contents of `src/components/Footer.tsx` with exactly:

```tsx
export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-v2-background px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-base font-bold tracking-[0.3em] uppercase text-v2-primary">
              FEAST
            </p>
            <p className="mt-1 text-sm text-v2-text-tertiary">
              Meal planning that feels like a friend.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-v2-text-tertiary">
            <a
              href="mailto:ryan@rbtechnologies.dev"
              className="transition-colors duration-200 hover:text-v2-primary"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="transition-colors duration-200 hover:text-v2-primary"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="transition-colors duration-200 hover:text-v2-primary"
            >
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-6 text-center text-xs text-v2-text-tertiary">
          &copy; {new Date().getFullYear()} R.B Technologies LLC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify in browser**

Scroll to the bottom. Verify:
- FEAST wordmark in green with wide letter spacing
- Tagline, links, copyright all in tertiary text color
- Links hover to green

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: dark minimal footer with FEAST wordmark"
```

---

### Task 12: Wire Up page.tsx and Final Verification

**Files:**
- Rewrite: `src/app/page.tsx`

- [ ] **Step 1: Rewrite page.tsx**

Replace the entire contents of `src/app/page.tsx` with exactly:

```tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Personas } from "@/components/Personas";
import { HowItWorks } from "@/components/HowItWorks";
import { AppPreview } from "@/components/AppPreview";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Personas />
        <HowItWorks />
        <AppPreview />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify the full page in browser**

Open http://localhost:3000 and scroll through the entire page. Verify:

1. **Header**: Dark glassmorphism, green FEAST wordmark, nav links, green gradient CTA button
2. **Hero**: Split layout — headline left, phone mockup right, green glow behind phone
3. **Features**: #111113 background, 2x2 glass cards with green icon badges
4. **Meet the Team**: 3 persona cards with green circle avatars, chat previews, glow accents
5. **How It Works**: 4 steps with mini phones, green gradient connectors, Instacart logo on step 4
6. **App Preview**: 3 phones in fan layout (desktop), single phone (mobile)
7. **Waitlist**: Dark form with green gradient button and glow
8. **Footer**: FEAST wordmark, links, copyright

Also verify:
- All nav links scroll to correct sections
- Mobile hamburger menu works
- Waitlist form submits (if Supabase env vars are set)
- No console errors
- No broken images

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: wire up all sections in page layout"
```

- [ ] **Step 4: Run build to verify no TypeScript errors**

```bash
cd /Users/RBTECHBOT/Documents/Repositories/feast-site && npm run build
```

Expected: Build completes successfully with no errors. If there are errors, fix them and re-run until clean.

- [ ] **Step 5: Commit any build fixes**

Only run if Step 4 required fixes. Skip if the build passed cleanly.

```bash
git add -A
git commit -m "fix: resolve build errors from redesign"
```
