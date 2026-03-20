# Feast Landing Page

The public-facing marketing site and business endpoint for **Feast** — an AI-powered meal planning mobile app. Currently deployed at [feast-meals.com](https://feast-meals.com).

## About Feast

Feast is a flagship-quality iOS app that combines AI-powered meal planning, smart grocery shopping, and interactive cooking guidance into one seamless experience. The core product is a team of four AI personas:

- **Nutritionist** — Manages health profiles, dietary needs, and nutritional targets
- **Dietitian** — Creates personalized weekly meal plans through natural conversation
- **Chef** — Walks users through recipes step by step with real-time guidance
- **Coach** — Tracks progress, celebrates wins, and keeps users accountable

The app is currently in private beta on TestFlight. This landing page serves as the public waitlist, marketing outlet, and future business endpoint.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (via PostCSS, `@theme` directive for design tokens)
- **Inter** font (Google Fonts via `next/font`)
- **Heroicons** for all icons
- **Supabase** for waitlist email collection

## Design System

The site uses the Feast app's premium dark theme:

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#050505` | Main page background |
| Surface | `#111113` | Alternating section backgrounds |
| Card | `#1A1A1D` | Card surfaces |
| Primary | `#00D37F` | Brand green (CTAs, accents, glow) |
| Primary Dark | `#00A863` | Gradient endpoint |
| Text Primary | `#F5F5F7` | Headings, primary text |
| Text Secondary | `#98989F` | Body text |
| Text Tertiary | `#5C5C63` | De-emphasized text |

Key visual patterns: green gradient CTAs with glow shadows, glass morphism cards, radial green glow accents, Inter font with tight heading tracking.

## Project Structure

```
src/
├── app/
│   ├── globals.css           # Tailwind v4 @theme tokens, base styles
│   ├── layout.tsx            # Inter font, metadata, dark color scheme
│   ├── page.tsx              # Page with NEXT_PUBLIC_SITE_LIVE feature flag
│   └── api/waitlist/
│       └── route.ts          # POST endpoint → Supabase waitlist table
└── components/
    ├── ComingSoon.tsx         # Pre-launch holding screen
    ├── Header.tsx             # Dark glassmorphism nav with FEAST wordmark
    ├── Hero.tsx               # Split layout: copy left, phone mockup right
    ├── PhoneMockup.tsx        # Reusable phone frame (sm/md/lg sizes)
    ├── Features.tsx           # 2x2 glass morphism feature cards
    ├── Personas.tsx           # 4 AI persona cards with chat previews
    ├── HowItWorks.tsx         # 4 steps with mini phone mockups
    ├── AppPreview.tsx         # 3-phone fan layout
    ├── Waitlist.tsx           # Email signup form → Supabase
    └── Footer.tsx             # Minimal dark footer
```

## Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # Production build
npm run lint         # ESLint
```

To see the full landing page locally (instead of the coming soon screen):

```bash
NEXT_PUBLIC_SITE_LIVE=true npm run dev
```

## Deployment

- **Hosting:** Vercel (auto-deploys from `main` branch)
- **Domain:** feast-meals.com (Cloudflare DNS → Vercel)
- **Feature flag:** `NEXT_PUBLIC_SITE_LIVE` — set to `true` in Vercel env vars to show the full site. When unset, shows the "Coming Soon" screen.

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | For waitlist | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | For waitlist | Supabase anon/public key |
| `NEXT_PUBLIC_SITE_LIVE` | No | Set to `true` to show full site |

## Brand Guidelines

- **Logo:** "FEAST" text wordmark — Inter Bold, `tracking-[0.3em]`, uppercase, `#00D37F`. The green "F" icon is used only as favicon and mobile app icon, never alongside the wordmark on the site.
- **Tagline:** "Transform your relationship with food."
- **Voice:** Warm, conversational, professional-yet-approachable. Friendly, not preachy. Authentic founder voice.
- **Dark theme only** — no light mode. `colorScheme: "dark"` is enforced on `<html>`.

## Related Repositories

- **Feast App** — React Native/Expo mobile app (private)
- **Feast Supabase** — Backend: edge functions, database, auth

## Company

R.B Technologies LLC — [ryan@rbtechnologies.dev](mailto:ryan@rbtechnologies.dev)
