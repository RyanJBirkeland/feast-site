# Privacy & Terms Pages — Design Spec

**Date:** 2026-03-21
**Branch:** Direct to `main`
**Scope:** Create Privacy Policy and Terms of Service pages matching the landing page dark theme

---

## 1. Pages

### Privacy Policy (`/privacy`)

Route: `src/app/privacy/page.tsx`

**Content sections:**
1. **Introduction** — Who we are (R.B Technologies, "Feast"), what this policy covers
2. **Information We Collect**
   - Account info (email, name)
   - Health & nutrition data (dietary restrictions, allergies, nutritional targets, food preferences, meal history)
   - Usage data (app interactions, feature usage, conversation history with AI personas)
   - Device info (device type, OS version, app version)
   - Analytics (aggregated usage patterns)
3. **How We Use Your Information** — Personalization, meal planning, improving the service, communications
4. **How We Share Your Information** — We don't sell data. Third-party services: Supabase (database), analytics providers, Apple (App Store/auth). Share only when required by law.
5. **Data Retention** — Keep data while account is active. Delete on request.
6. **Your Rights** — Access, correct, delete your data. Contact us to exercise rights.
7. **Security** — Encryption in transit and at rest, secure authentication
8. **Children's Privacy** — Not directed at children under 13
9. **Changes to This Policy** — We'll notify you of material changes
10. **Contact** — ryan@rbtechnologies.dev

### Terms of Service (`/terms`)

Route: `src/app/terms/page.tsx`

**Content sections:**
1. **Acceptance of Terms** — By using Feast you agree to these terms
2. **Description of Service** — AI-powered meal planning app with four AI personas. Currently in beta.
3. **Account Responsibilities** — Accurate info, keep credentials secure
4. **Acceptable Use** — Don't misuse the service, don't reverse engineer
5. **AI-Generated Content** — Meal plans and nutritional guidance are AI-generated, not medical advice. Consult a healthcare professional for dietary/medical decisions.
6. **Intellectual Property** — Feast and its content are owned by R.B Technologies
7. **Beta Disclaimer** — Service is in beta, features may change, no guaranteed uptime
8. **Limitation of Liability** — Standard limitation clause
9. **Termination** — Either party can terminate, we can suspend for violations
10. **Changes to Terms** — We may update terms, continued use constitutes acceptance
11. **Governing Law** — State of Washington
12. **Contact** — ryan@rbtechnologies.dev

---

## 2. Page Layout

Both pages share the same layout structure:

- `Header` component (existing, fixed nav)
- Content area with `pt-32` for header clearance (same as Hero)
- Max width `max-w-3xl` centered, with `px-6` horizontal padding
- `Footer` component (existing)

### Typography for legal content

Use existing design tokens — no new CSS:

- Page title: `text-3xl font-bold text-v2-text-primary` with green eyebrow label
- Section headings: `text-xl font-semibold text-v2-text-primary mt-12`
- Body text: `text-base leading-relaxed text-v2-text-secondary`
- Lists: `list-disc` with `text-v2-text-secondary`
- Links: `text-v2-primary hover:underline`
- Effective date: `text-sm text-v2-text-tertiary`

### Shared prose wrapper

Both pages use the same content styling. Extract a shared CSS class or wrapper pattern rather than duplicating styles. A simple `prose-legal` utility class in `globals.css` or a shared `className` string constant.

---

## 3. Navigation

- Add footer links: Set `NEXT_PUBLIC_SHOW_INFO_LINKS=true` on Vercel after pages are deployed
- No changes to Header nav — Privacy/Terms are footer links only

---

## 4. Files

| File | Action |
|------|--------|
| `src/app/privacy/page.tsx` | Create — Privacy Policy page |
| `src/app/terms/page.tsx` | Create — Terms of Service page |

---

## 5. Content Tone

Legal but readable. Not legalese. Match the brand voice where possible — clear, direct, human. Use short paragraphs. Avoid walls of text. The user should be able to scan and understand what each section says without a law degree.

---

## 6. Post-Deploy

After pages are live:
- Run `vercel env add NEXT_PUBLIC_SHOW_INFO_LINKS true production`
- Run `vercel --prod` to redeploy with the flag active
- Footer links (Contact, Privacy, Terms) will appear
