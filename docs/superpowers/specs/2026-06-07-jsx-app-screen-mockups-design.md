# JSX App-Screen Mockups — Design

**Date:** 2026-06-07
**Status:** Approved (phased build — ChatScreen first)

## Problem

The phone mockups in `Hero`, `AppPreview`, and `HowItWorks` currently render
placeholder PNG screenshots (`public/screenshots/chat.png`, `planning.png`).
They are stand-ins, not the real app, and they cannot be kept in sync with the
Feast app's evolving design.

We are replacing the screenshots with **live JSX renderings of the app screens**
that mirror the Feast app's design system exactly, so a prospective user peering
into the phone frame sees a faithful, immersive preview of the real product.

## Source of Truth

All on this machine; the website mirrors these — it does not invent layouts:

- **Palette:** `mobile-design-system/themes/feast/colors.ts` → `feastColorsDark`
  (`bg #0A0A0B`, `surface #16161A`, `card #1E1E22`, `accent #3DDC97`,
  `text #FFFFFF`, `text2 #BFBFC7`, `text3 #71717A`, `border rgba(255,255,255,0.08)`).
- **Personas:** `…/themes/feast/personas.ts` → the four personas with their
  mark, palette, and brand-voice `sampleUtterances`. Chat copy is sourced here.
- **Screen layouts:** `…/themes/feast/spec/screens/{home,builder,cooking,recipe,team,insights}.js`
  — ready-made HTML mockups designed at a **360px** canonical width, Inter font.
  We mirror the **`proposed`** variants (newest design-system direction).
- **Reference renders:** `…/themes/feast/spec/_check/phones.png` — verify against these.

### Token boundary

The app's tokens differ from the website's (`#0A0A0B`/`#3DDC97` vs the site's
`#050505`/`#00D37F`). Inside the phone frame, fidelity to the app wins. The app
palette lives in a **scoped** `app-screens/tokens.ts` and is applied only inside
the phone screens — it never touches the site's own `v2-*` tokens.

## Architecture

New directory `src/components/app-screens/`, one self-contained component per
screen plus shared infrastructure:

```
src/components/app-screens/
  tokens.ts        // scoped Feast-app palette (feastColorsDark values)
  ScaledScreen.tsx // 360px canvas → CSS-scaled to the frame's inner width
  ChatScreen.tsx
  TodayScreen.tsx
  PlanScreen.tsx
  RecipesScreen.tsx
  CookScreen.tsx
  GroceryScreen.tsx
  index.ts
```

Each screen renders at a fixed **360px logical canvas** with the app's real font
sizes (13–24px) and spacing — identical to the spec mockups.

### The scaling technique

The screens are designed at 360px, but the phone frames are 160–260px wide.
Rather than re-tune font sizes per frame, `ScaledScreen` renders the 360px canvas
and applies `transform: scale(targetInnerWidth / 360)`, with the outer box sized
to the scaled dimensions so layout reserves the right space. Every font, radius,
and gap stays **proportionally identical to the real app** — true pixel fidelity,
uniformly shrunk. `PhoneMockup` is untouched; it receives a `<ScaledScreen>` child
instead of an `<Image>`.

## Screen Inventory

| Component       | Source mockup                     | Used in                      |
|-----------------|-----------------------------------|------------------------------|
| `ChatScreen`    | `team.js` + personas              | Hero, HowItWorks #1          |
| `TodayScreen`   | `home.js` (proposed)              | AppPreview "Today"           |
| `PlanScreen`    | `builder.js`                      | AppPreview "Plan", HowItWorks #2 |
| `RecipesScreen` | `recipe.js`                       | AppPreview "Recipes"         |
| `CookScreen`    | `cooking.js`                      | HowItWorks #3                |
| `GroceryScreen` | app `GroceryListScreen` + tokens  | HowItWorks #4                |

## Rollout

Phased, to de-risk the scaling technique:

1. **Phase 1 (this pass):** `tokens.ts`, `ScaledScreen`, `ChatScreen`. Wire
   `ChatScreen` into the Hero. Verify pixel-match in the real Hero with Playwright
   against `spec/_check/phones.png`. **User review checkpoint.**
2. **Phase 2:** Build the remaining five screens to match, wire into AppPreview and
   HowItWorks, verify each.
3. **Cleanup:** Delete `public/screenshots/chat.png` and `planning.png` and their
   references once all six screens are live. `tsc --noEmit` + `npm run lint` clean.

## Non-Goals

- No porting of Tamagui / React Native code (incompatible with Next.js).
- No light-mode screens (site is dark-only).
- No interactivity inside the mockups — they are static visual previews.
