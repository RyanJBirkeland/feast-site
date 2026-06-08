# CLAUDE.md

@AGENTS.md

## Project Context

This is the **Feast landing page** — the public-facing marketing site for the Feast mobile app. It serves as the waitlist, marketing outlet, and future business endpoint for the product.

**Feast** is an AI-powered meal planning iOS app with four AI personas (Nutritionist, Dietitian, Chef, Coach) that guide users through the full food journey: Discover → Plan → Shop → Cook. Currently in private beta on TestFlight.

## Key Facts

- **Domain:** feast-meals.com (Cloudflare DNS → Vercel)
- **Hosting:** Vercel (auto-deploys from `main`)
- **Company:** R.B Technologies LLC (Washington State, formed Feb 10 2026)
- **Feast app repo:** `/Users/RBTECHBOT/Documents/Repositories/feast` (React Native/Expo)
- **No code sharing:** Feast app uses Tamagui (React Native), incompatible with Next.js web components. Phone mockups are hand-built JSX "app screens" (`src/components/app-screens/`) that mirror the app's real design system — not ported app code, and not screenshots.
- **Feature flags:** `NEXT_PUBLIC_SHOW_INFO_LINKS=true` shows Contact/Privacy/Terms in footer (currently enabled)
- **Pages:** `/privacy` and `/terms` exist with legal content

## Design System

Dark theme only — matches the Feast mobile app exactly. No light mode.

- **Background:** `#050505` / Surface: `#111113` / Card: `#1A1A1D`
- **Brand green:** `#00D37F` (primary), `#00A863` (gradient end)
- **Text:** `#F5F5F7` (primary), `#98989F` (secondary), `#5C5C63` (tertiary)
- **Font:** Inter (via next/font/google), plus JetBrains Mono — the mono powers the app-screen mockups' uppercase labels (timestamps, tags), exposed as `--font-jetbrains-mono`
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

## SEO, Metadata & Analytics

- **Single source of truth:** `src/lib/site.ts` holds the site name, URL, title, and
  marketing copy. Every metadata file imports from it so they can't drift apart —
  change copy or the domain there, not in individual files.
- **Social share card:** `src/app/opengraph-image.tsx` generates a 1200×630 PNG via
  `next/og` (dark background, FEAST wordmark, tagline). Used for both `og:image` and
  `twitter:image`. `layout.tsx` sets `metadataBase`, Open Graph, and a
  `summary_large_image` Twitter card.
- **Icons:** `favicon.svg` (linked in `layout.tsx`) plus `src/app/apple-icon.tsx`
  (generated 180×180 PNG for iOS home-screen saves).
- **SEO routes:** `src/app/sitemap.ts` and `src/app/robots.ts` (App Router metadata
  routes) emit `/sitemap.xml` and `/robots.txt`. Add new public routes to the
  `sitemap.ts` list. `src/app/manifest.ts` emits the web manifest.
- **Analytics:** Vercel Analytics (`<Analytics />` from `@vercel/analytics/next` in
  `layout.tsx`). Privacy-friendly, no cookie banner. Data only collects on the
  production deploy.

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

## App-Screen Mockups (phone content)

Phone mockups render live JSX "app screens" that mirror the Feast app's real
design system, instead of screenshots. See
`docs/superpowers/specs/2026-06-07-jsx-app-screen-mockups-design.md`.

- **Location:** `src/components/app-screens/` — one component per screen
  (`ChatScreen`, `TodayScreen`, `PlanScreen`, `RecipesScreen`, `CookScreen`,
  `GroceryScreen`), plus `ScaledScreen`, `tokens.ts`, and primitives
  (`Avatar`, `Icon`, `StatusBar`, `TabBar`, `Imgph`).
- **Design source of truth:** `mobile-design-system/themes/feast` (colors,
  personas) and its `spec/screens/*.js` mockups. The app's palette
  (`bg #0A0A0B` / `accent #3DDC97`) differs from the site's brand tokens and is
  scoped in `app-screens/tokens.ts` — keep them separate.
- **Scaling:** every screen is authored on a fixed 360×780 canvas;
  `ScaledScreen` measures its frame and scales the canvas to fit (160–260px),
  so screens stay pixel-proportional to the app at any phone size.
- **Usage:** `<PhoneMockup><ScaledScreen><ChatScreen /></ScaledScreen></PhoneMockup>`.
- **Demo account:** `demo@feast-meals.com` / `Test123` — populated curated data.
- **Seed script:** `feast/scripts/seed-demo.ts` — `npx tsx scripts/seed-demo.ts`
  in the Feast repo. Idempotent.

## Component Gotchas

- **PhoneMockup width overrides:** `PhoneMockup.tsx` applies `s.width` from a `SIZES` lookup. To override via `className`, you must use `!important` (e.g., `className="!w-[200px]"`), otherwise Tailwind specificity is unpredictable.
- **Hero `pt-32`:** Hero section uses asymmetric padding (`pt-32 pb-24`) for fixed header clearance. Don't replace with `py-*`.
- **App-screen `TabBar` is floating + translucent:** it's `position: absolute` over the screen, so a list taller than the 360×780 canvas (e.g. `PlanScreen`'s week) scrolls under it. Such screens need a bottom scroll-fade (`transparent → bg` gradient) so the last item dissolves instead of colliding with the bar — see `ScrollFade` in `PlanScreen.tsx`.
