# Demo Account Seed Script — Design Spec

**Date:** 2026-03-21
**Repo:** `/Users/RBTECHBOT/Documents/Repositories/feast` (Feast app repo)
**Scope:** TypeScript seed script that creates a fully populated demo account for marketing screenshots

---

## 1. Purpose

Create a single script (`scripts/seed-demo.ts`) that populates a demo user account with curated, realistic data so the Feast app looks "lived in" for marketing screenshots. The script should be idempotent — running it twice should reset and recreate the demo data cleanly.

---

## 2. Demo User

- **Email:** `demo@feast-meals.com`
- **Password:** `Test123`
- **Name:** `Alex`
- **Preferences:**
  - dietary_preference: `none`
  - restrictions: `[]` (no restrictions — shows maximum variety)
  - health_goal: `maintain`
  - cooking_skill: `intermediate`
  - household_size: `2`
  - favorite_cuisines: `['mediterranean', 'asian', 'american', 'italian']`
  - onboarding_completed: `true`
  - activity_level: `moderate`
  - spicy_tolerance: `medium`
  - adventurousness: `balanced`
  - weekday_cook_time: `30`
  - weekend_cook_time: `60`

---

## 3. Demo Data

### 3.1 Recipes (10-15 curated)

Select recipes from the existing seeded recipes table (`user_id IS NULL`) that:
- Have appealing `image_url` values (not broken links)
- Cover a mix of meal types (breakfast, lunch, dinner, snack)
- Cover varied cuisines (Mediterranean, Asian, American, Italian)
- Have complete nutrition data (calories, protein, carbs, fat)
- Have reasonable prep/cook times (15-45 min for weekdays, up to 60 for weekends)

The script should query existing seeded recipes matching these criteria and save their IDs for use in the meal plan. No new recipes need to be inserted — use the 3000+ already in the database.

If good seeded recipes aren't available (broken images, missing data), the script should insert a small set of hand-curated demo recipes with known-good image URLs.

### 3.2 Meal Plan (7 days, active)

- `start_date`: Current Monday (or next Monday if today is mid-week)
- `duration_days`: 7
- `title`: `"This Week's Plan"`
- `status`: `active`
- 3 meals per day (breakfast, lunch, dinner) = 21 meal plan items
- Assign curated recipes to each slot
- Weekend meals should use longer-cook-time recipes
- Weekday meals should be 30 min or under

### 3.3 Grocery List (generated from meal plan)

- `title`: `"This Week's Groceries"`
- `status`: `active`
- Populate `grocery_list_items` from the meal plan's recipe ingredients
- Deduplicate ingredients that appear in multiple recipes
- Categorize by: produce, dairy, meat, pantry, spices
- Mark 3-4 items as `checked: true` (looks like shopping is in progress)

### 3.4 Conversations (2 chats)

**Conversation 1: Dietitian onboarding chat**
- Title: `"Weekly Planning"`
- 6-8 messages showing natural back-and-forth
- User asks for meal plan, Dietitian responds warmly
- Example exchange:
  - User: "I'm tired of chicken breast, surprise me"
  - Dietitian: "I've got you. How about a Thai Basil Stir Fry on Wednesday? It's 38g protein and ready in 25 minutes."
  - User: "We're doing date night Friday, make it fancy"
  - Dietitian: "I put a Mediterranean Salmon with roasted vegetables on Friday. It looks impressive but only takes 35 minutes."

**Conversation 2: Chef cooking session**
- Title: `"Cooking Help"`
- 4-6 messages
- User asks mid-recipe question, Chef responds helpfully
- Example:
  - User: "The recipe says sear for 4 minutes but my pan isn't hot enough"
  - Chef: "Give it another minute to heat up. You want to see a light shimmer on the oil before the chicken goes in. If you add it too early, it'll steam instead of sear."

### 3.5 Engagement Data (makes the app feel lived-in)

- **Favorites:** Mark 4-5 recipes as favorites via `user_favorite_recipes`
- **Recipe events:** Insert 15-20 `user_recipe_events`:
  - `view` events for 10+ recipes
  - `rate` events for 5 recipes (ratings 4-5 to look positive)
  - `cook_complete` events for 3 recipes
  - `add_to_plan` events for the meal plan recipes
- **Taste profile:** Insert a `user_taste_profiles` entry with:
  - High affinity for Mediterranean, Asian, Italian cuisines
  - Preference for medium difficulty
  - Preference for quick-medium cook times
  - Balanced meal type distribution

---

## 4. Script Architecture

**File:** `scripts/seed-demo.ts`

**Dependencies:**
- `@supabase/supabase-js` (already in Feast app dependencies)
- Uses the Supabase service role key (not anon key) to bypass RLS and create auth users

**Environment:**
- Reads `EXPO_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from `.env`
- Runs via `npx tsx scripts/seed-demo.ts`

**Idempotency:**
1. Check if `demo@feast-meals.com` user exists in auth.users
2. If exists: delete all their data (meal plans, grocery lists, conversations, events, favorites, taste profile, preferences) then delete the auth user
3. Re-create everything from scratch

**Script flow:**
1. Create auth user (`demo@feast-meals.com` / `Test123`)
2. Insert user profile (`users` table)
3. Insert user preferences
4. Query existing seeded recipes to find good candidates (or insert fallback recipes)
5. Create meal plan + items
6. Create grocery list + items from meal plan recipes
7. Create conversations + messages
8. Insert engagement data (favorites, events, taste profile)
9. Print summary of what was created

**Error handling:**
- Fail fast on any Supabase error
- Print clear error messages with table/operation context
- Log each step as it completes

---

## 5. Post-Seed: Screenshot Capture

After running the seed script:
1. Open Feast app in iPhone 16 simulator
2. Log in as `demo@feast-meals.com` / `Test123`
3. Capture 8 screenshots (per the landing page polish spec):
   - `hero-home.png` — Home/Today view
   - `hiw-conversation.png` — Chat with Dietitian
   - `hiw-mealplan.png` — Weekly meal plan view
   - `hiw-cooking.png` — Recipe detail / cooking mode
   - `hiw-grocery.png` — Grocery list view
   - `preview-today.png` — Today tab
   - `preview-plan.png` — Plan tab
   - `preview-recipes.png` — Recipe browse
4. Save to `feast-site/public/screenshots/` replacing placeholders
5. May need additional screenshots depending on what looks best

This capture step is manual — the seed script just prepares the data.
