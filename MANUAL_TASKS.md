# Manual Tasks

## App Screenshots for Landing Page

The phone mockups on the landing page are currently hand-coded CSS approximations. Replace them with real app screenshots for authenticity.

### Screenshots Needed

Capture these screens from the Feast app (iOS Simulator `Cmd+S`, TestFlight, or Expo Go):

| # | Screen | Used In | Notes |
|---|--------|---------|-------|
| 1 | Home screen (Coach greeting + today's meals) | Hero section (large phone) | Most prominent — make it look great |
| 2 | "Today" view | AppPreview (left phone) | |
| 3 | Meal Plan calendar with Dietitian intro | AppPreview (center phone) | |
| 4 | Recipe detail or browse | AppPreview (right phone) | |
| 5 | Onboarding conversation with Nutritionist | HowItWorks step 1 | |
| 6 | Weekly meal plan view | HowItWorks step 2 | |
| 7 | Cooking mode with Chef | HowItWorks step 3 | |
| 8 | Grocery list | HowItWorks step 4 | |

### Where to Save

Drop screenshots into `public/screenshots/` with clear names like:
- `home.png`
- `today.png`
- `meal-plan.png`
- `recipe.png`
- `onboarding-chat.png`
- `weekly-plan.png`
- `cooking-mode.png`
- `grocery-list.png`

### After Capturing

Run Claude Code to swap the hand-coded JSX content in these components for `<Image>` tags:
- `src/components/Hero.tsx`
- `src/components/AppPreview.tsx`
- `src/components/HowItWorks.tsx`

The PhoneMockup frames stay as-is — only the inner content changes.
