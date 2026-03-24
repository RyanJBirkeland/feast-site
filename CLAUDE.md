# CLAUDE.md

@AGENTS.md

## Project Context

This is the **Feast landing page** — the public-facing marketing site for the Feast mobile app. It serves as the waitlist, marketing outlet, and future business endpoint for the product.

**Feast** is an AI-powered meal planning iOS app with four AI personas (Nutritionist, Dietitian, Chef, Coach) that guide users through the full food journey: Discover → Plan → Shop → Cook. Currently in private beta on TestFlight.

## Key Facts

- **Domain:** feast-meals.com (Cloudflare DNS → Vercel)
- **Hosting:** Vercel (auto-deploys from `main`)
- **Company:** R.B Technologies (sole proprietorship, WA)
- **Feast app repo:** `/Users/RBTECHBOT/Documents/Repositories/feast` (React Native/Expo)
- **No code sharing:** Feast app uses Tamagui (React Native), incompatible with Next.js web components. Use screenshots for realistic phone mockups, not ported code.
- **Feature flags:** `NEXT_PUBLIC_SHOW_INFO_LINKS=true` shows Contact/Privacy/Terms in footer (currently enabled)
- **Pages:** `/privacy` and `/terms` exist with legal content

## Design System

Dark theme only — matches the Feast mobile app exactly. No light mode.

- **Background:** `#050505` / Surface: `#111113` / Card: `#1A1A1D`
- **Brand green:** `#00D37F` (primary), `#00A863` (gradient end)
- **Text:** `#F5F5F7` (primary), `#98989F` (secondary), `#5C5C63` (tertiary)
- **Font:** Inter (via next/font/google)
- **Icons:** Heroicons (outline) — no emojis anywhere
- **Logo:** "FEAST" text wordmark only. The "F" icon is favicon/app icon only.

## Brand Voice

Warm, conversational, professional-yet-approachable. Copy comes from the Feast app's brand docs:
- `feast/docs/VISION.md` — Core values and product vision
- `feast/docs/business/INVESTOR_PITCH.md` — Positioning, problem statements, market
- `feast/docs/business/APP_STORE_DESCRIPTION.md` — App Store copy
- `feast/docs/product/HEALTH_TEAM_SPEC.md` — Persona voices and examples
- `feast/marketing/MARKETING_PLAN.md` — Content pillars and brand voice

## Commands

```bash
npm run dev                              # Dev server on :3000
npm run build                            # Production build
npm run lint                             # ESLint
```

## Playwright MCP (Visual Testing)

The `playwright@claude-plugins-official` plugin is enabled globally in `~/.claude/settings.json`. It provides browser automation tools via MCP for previewing and visually verifying the site.

**Key tools:**
- `browser_navigate` — Open a URL (e.g., `http://localhost:3000` or `https://feast-meals.com`)
- `browser_take_screenshot` — Capture viewport or full-page screenshots
- `browser_snapshot` — Get an accessibility tree snapshot (use for interactions)
- `browser_evaluate` — Run JS in the page (inspect computed styles, debug CSS)
- `browser_click`, `browser_fill_form` — Interact with elements using `ref` from snapshots

**Workflow:** Start the dev server (`npm run dev`), navigate to localhost:3000, take screenshots to verify visual changes. Screenshots are saved to `.playwright-mcp/` (gitignored).

**Known issue:** Turbopack can serve stale CSS from the `.next` cache. If theme tokens look wrong, kill the dev server and `rm -rf .next` before restarting.

**Known issue:** If port 3000 is occupied (stale process), Next.js silently switches to 3002+. Check terminal output for the actual port before navigating with Playwright.

## Waitlist Backend

- **Supabase project:** Feast (iorjhnpjpqimklrpwimf.supabase.co)
- **Table:** `waitlist` (email, source, created_at) with RLS — anon can insert, not read
- **API route:** `src/app/api/waitlist/route.ts` — POSTs to Supabase REST API
- **Vercel env vars:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (production only)
- **Fallback:** On API failure, Waitlist component opens mailto: link so signup isn't lost

## Copy Guidelines

- Use brand docs as inspiration, not copy-paste — write web-native, conversational copy
- Don't mention Instacart or specific partners without explicit approval
- No copyright claims (no (C) symbol, no "All rights reserved")
- Avoid jargon: "synthesize", "transactional", "journey" — use plain language
- `&apos;` only works in JSX markup, not in JS strings — use regular apostrophes in string literals
- Don't repeat the same word across section headings (e.g., "actually" in two headings)

## Deployment

- Vercel auto-deploys from `main` branch
- `vercel --prod` to manually trigger production deploy (needed after adding env vars)
- Env vars set via `vercel env add <NAME> production`
- PR merges to main create Preview deploys, not Production — if env vars are production-only, use `vercel --prod`

## Demo Account & Screenshots

- **Demo account:** `demo@feast-meals.com` / `Test123` — fully populated with curated data
- **Seed script:** `feast/scripts/seed-demo.ts` — run via `npx tsx scripts/seed-demo.ts` in the Feast repo. Idempotent.
- **Placeholder screenshots:** `public/screenshots/chat.png` and `planning.png` — currently used in Hero, HowItWorks, and AppPreview phone mockups
- **Final screenshots needed:** 8 screens captured from simulator using the demo account, saved to `public/screenshots/` replacing placeholders
- Phone mockups use `<Image>` tags inside `PhoneMockup` components — just swap the `src` paths when final screenshots are ready

## Component Gotchas

- **PhoneMockup width overrides:** `PhoneMockup.tsx` applies `s.width` from a `SIZES` lookup. To override via `className`, you must use `!important` (e.g., `className="!w-[200px]"`), otherwise Tailwind specificity is unpredictable.
- **Hero `pt-32`:** Hero section uses asymmetric padding (`pt-32 pb-24`) for fixed header clearance. Don't replace with `py-*`.
