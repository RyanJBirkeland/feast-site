# CLAUDE.md

@AGENTS.md

## Project Context

This is the **Feast landing page** — the public-facing marketing site for the Feast mobile app. It serves as the waitlist, marketing outlet, and future business endpoint for the product.

**Feast** is an AI-powered meal planning iOS app with four AI personas (Nutritionist, Dietitian, Chef, Coach) that guide users through the full food journey: Discover → Plan → Shop → Cook. Currently in private beta on TestFlight.

## Key Facts

- **Domain:** feast-meals.com (Cloudflare DNS → Vercel)
- **Hosting:** Vercel (auto-deploys from `main`)
- **Company:** R.B Technologies LLC
- **Feast app repo:** `/Users/RBTECHBOT/Documents/Repositories/feast` (React Native/Expo)
- **Feature flag:** `NEXT_PUBLIC_SITE_LIVE=true` shows full site; unset shows "Coming Soon"

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
NEXT_PUBLIC_SITE_LIVE=true npm run dev   # Dev with full site visible
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
