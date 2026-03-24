# Manual Tasks

## App Screenshots for Landing Page

Phone mockups are currently using placeholder screenshots (`public/screenshots/chat.png` and `planning.png`). Replace them with final screenshots from the demo account.

### Prerequisites

1. Demo account is seeded: `demo@feast-meals.com` / `Test123`
2. Re-seed if needed: `cd feast && npx tsx scripts/seed-demo.ts`
3. Source your own food photography for the demo recipes

### Screenshots Needed

Capture from iPhone 16 simulator logged in as the demo account:

| # | Filename | Screen | Used In |
|---|----------|--------|---------|
| 1 | `hero-home.png` | Home/Today view with greeting + meal cards | Hero section (large phone) |
| 2 | `hiw-conversation.png` | Chat with Dietitian | HowItWorks step 1 |
| 3 | `hiw-mealplan.png` | Weekly meal plan view | HowItWorks step 2 |
| 4 | `hiw-cooking.png` | Recipe detail / cooking mode | HowItWorks step 3 |
| 5 | `hiw-grocery.png` | Grocery list view | HowItWorks step 4 |
| 6 | `preview-today.png` | Today tab | AppPreview left phone |
| 7 | `preview-plan.png` | Plan tab | AppPreview center phone |
| 8 | `preview-recipes.png` | Recipe browse | AppPreview right phone |

### Where to Save

Drop into `public/screenshots/` — the `<Image>` tags are already wired up in:
- `src/components/Hero.tsx` — uses `chat.png` (swap to `hero-home.png`)
- `src/components/HowItWorks.tsx` — uses `STEP_SCREENSHOTS` array (update src paths)
- `src/components/AppPreview.tsx` — uses `chat.png` and `planning.png` (update src paths)

### After Capturing

Update the image `src` paths in each component to point to the new filenames. The `PhoneMockup` frames and layout stay as-is — only the `src` prop changes.
