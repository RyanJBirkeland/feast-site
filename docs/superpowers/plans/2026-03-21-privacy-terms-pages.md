# Privacy & Terms Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create Privacy Policy and Terms of Service pages matching the landing page dark theme, then enable footer links.

**Architecture:** Two static Next.js pages (`/privacy`, `/terms`) using existing Header/Footer components. Shared prose styling via a className constant to avoid duplication. Legal content written in a readable, non-legalese tone.

**Tech Stack:** Next.js 16 (App Router), Tailwind CSS v4, TypeScript

**Spec:** `docs/superpowers/specs/2026-03-21-privacy-terms-pages-design.md`

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/app/privacy/page.tsx` | Create | Privacy Policy page with full content |
| `src/app/terms/page.tsx` | Create | Terms of Service page with full content |

---

### Task 1: Create Privacy Policy page

**Files:**
- Create: `src/app/privacy/page.tsx`

- [ ] **Step 1: Create the privacy policy page**

Create `src/app/privacy/page.tsx` with the following complete content:

```tsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Feast",
};

const SECTION_HEADING = "mt-12 text-xl font-semibold text-v2-text-primary";
const BODY = "mt-4 text-base leading-relaxed text-v2-text-secondary";
const LIST = "mt-4 list-disc pl-6 space-y-2 text-base leading-relaxed text-v2-text-secondary";
const LINK = "text-v2-primary hover:underline";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-v2-background px-6 pt-32 pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-v2-text-tertiary">
            Effective: March 21, 2026
          </p>

          <h2 className={SECTION_HEADING}>Introduction</h2>
          <p className={BODY}>
            R.B Technologies (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;Feast&rdquo;) operates
            the Feast mobile application and the feast-meals.com website. This Privacy Policy
            explains how we collect, use, and protect your information when you use our services.
          </p>

          <h2 className={SECTION_HEADING}>Information We Collect</h2>
          <p className={BODY}>
            We collect information you provide directly and information generated through your use of Feast:
          </p>
          <ul className={LIST}>
            <li>
              <strong className="text-v2-text-primary">Account information</strong> — your email
              address, name, and any profile details you provide.
            </li>
            <li>
              <strong className="text-v2-text-primary">Health and nutrition data</strong> — dietary
              restrictions, allergies, nutritional targets, food preferences, and meal history you
              share with your AI team.
            </li>
            <li>
              <strong className="text-v2-text-primary">Conversations</strong> — your chat history
              with your Nutritionist, Dietitian, Chef, and Coach. This helps them remember your
              preferences and provide personalized guidance.
            </li>
            <li>
              <strong className="text-v2-text-primary">Usage data</strong> — how you interact with
              the app, which features you use, and general usage patterns.
            </li>
            <li>
              <strong className="text-v2-text-primary">Device information</strong> — device type,
              operating system version, and app version for troubleshooting and compatibility.
            </li>
          </ul>

          <h2 className={SECTION_HEADING}>How We Use Your Information</h2>
          <ul className={LIST}>
            <li>Personalizing your meal plans, recipes, and nutritional guidance</li>
            <li>Helping your AI team remember your preferences and goals</li>
            <li>Improving Feast and developing new features</li>
            <li>Sending you updates about your account or the service (no spam, ever)</li>
          </ul>

          <h2 className={SECTION_HEADING}>How We Share Your Information</h2>
          <p className={BODY}>
            We do not sell your personal information. We share data only with:
          </p>
          <ul className={LIST}>
            <li>
              <strong className="text-v2-text-primary">Service providers</strong> — trusted
              third parties that help us run Feast (database hosting, analytics). They only access
              what they need to provide their service.
            </li>
            <li>
              <strong className="text-v2-text-primary">Legal requirements</strong> — if required
              by law, court order, or to protect the safety of our users.
            </li>
          </ul>

          <h2 className={SECTION_HEADING}>Data Retention</h2>
          <p className={BODY}>
            We keep your data for as long as your account is active. If you delete your account,
            we&apos;ll delete your personal data within 30 days, except where we&apos;re legally
            required to retain it.
          </p>

          <h2 className={SECTION_HEADING}>Your Rights</h2>
          <p className={BODY}>You can:</p>
          <ul className={LIST}>
            <li>Request a copy of your data</li>
            <li>Correct inaccurate information</li>
            <li>Delete your account and data</li>
          </ul>
          <p className={BODY}>
            To exercise any of these rights, email us at{" "}
            <a href="mailto:ryan@rbtechnologies.dev" className={LINK}>
              ryan@rbtechnologies.dev
            </a>
            .
          </p>

          <h2 className={SECTION_HEADING}>Security</h2>
          <p className={BODY}>
            We protect your data with encryption in transit and at rest, secure authentication,
            and regular security reviews. No system is 100% secure, but we take reasonable
            measures to protect your information.
          </p>

          <h2 className={SECTION_HEADING}>Children&apos;s Privacy</h2>
          <p className={BODY}>
            Feast is not directed at children under 13. We do not knowingly collect personal
            information from children under 13. If you believe we have, please contact us and
            we&apos;ll delete it promptly.
          </p>

          <h2 className={SECTION_HEADING}>Changes to This Policy</h2>
          <p className={BODY}>
            We may update this policy from time to time. If we make material changes, we&apos;ll
            notify you through the app or by email. Your continued use of Feast after changes
            means you accept the updated policy.
          </p>

          <h2 className={SECTION_HEADING}>Contact Us</h2>
          <p className={BODY}>
            Questions about this policy? Reach out at{" "}
            <a href="mailto:ryan@rbtechnologies.dev" className={LINK}>
              ryan@rbtechnologies.dev
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify the page renders**

```bash
npm run dev
```

Open `http://localhost:3000/privacy` and verify the page renders with the dark theme, correct typography, and all sections visible.

- [ ] **Step 3: Commit**

```bash
git add src/app/privacy/page.tsx
git commit -m "feat: add Privacy Policy page"
```

---

### Task 2: Create Terms of Service page

**Files:**
- Create: `src/app/terms/page.tsx`

- [ ] **Step 1: Create the terms of service page**

Create `src/app/terms/page.tsx` with the following complete content:

```tsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — Feast",
};

const SECTION_HEADING = "mt-12 text-xl font-semibold text-v2-text-primary";
const BODY = "mt-4 text-base leading-relaxed text-v2-text-secondary";
const LIST = "mt-4 list-disc pl-6 space-y-2 text-base leading-relaxed text-v2-text-secondary";
const LINK = "text-v2-primary hover:underline";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="bg-v2-background px-6 pt-32 pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-v2-text-tertiary">
            Effective: March 21, 2026
          </p>

          <h2 className={SECTION_HEADING}>Acceptance of Terms</h2>
          <p className={BODY}>
            By accessing or using Feast, you agree to these Terms of Service. If you don&apos;t
            agree, please don&apos;t use the service.
          </p>

          <h2 className={SECTION_HEADING}>Description of Service</h2>
          <p className={BODY}>
            Feast is an AI-powered meal planning application. It provides personalized meal plans,
            recipes, grocery lists, and nutritional guidance through four AI personas: a
            Nutritionist, Dietitian, Chef, and Coach. The service is currently in beta.
          </p>

          <h2 className={SECTION_HEADING}>Account Responsibilities</h2>
          <p className={BODY}>
            You&apos;re responsible for keeping your account credentials secure and for all
            activity under your account. Please provide accurate information when creating
            your account.
          </p>

          <h2 className={SECTION_HEADING}>Acceptable Use</h2>
          <p className={BODY}>When using Feast, you agree not to:</p>
          <ul className={LIST}>
            <li>Use the service for any unlawful purpose</li>
            <li>Attempt to reverse engineer, decompile, or extract source code from the app</li>
            <li>Interfere with or disrupt the service</li>
            <li>Create multiple accounts to abuse the service</li>
          </ul>

          <h2 className={SECTION_HEADING}>AI-Generated Content</h2>
          <p className={BODY}>
            Feast uses AI to generate meal plans, recipes, and nutritional guidance. This content
            is for informational purposes only and is <strong className="text-v2-text-primary">not
            medical advice</strong>. Always consult a qualified healthcare professional before
            making significant changes to your diet, especially if you have allergies, medical
            conditions, or specific nutritional needs.
          </p>

          <h2 className={SECTION_HEADING}>Intellectual Property</h2>
          <p className={BODY}>
            Feast, including its design, features, and content, is owned by R.B Technologies.
            You may use the service for personal, non-commercial purposes. You may not copy,
            modify, or distribute any part of Feast without our written permission.
          </p>

          <h2 className={SECTION_HEADING}>Beta Disclaimer</h2>
          <p className={BODY}>
            Feast is currently in beta. This means features may change, break, or be removed.
            We don&apos;t guarantee uptime or that the service will be available at all times.
            We&apos;re actively building and improving, and your feedback helps shape the product.
          </p>

          <h2 className={SECTION_HEADING}>Limitation of Liability</h2>
          <p className={BODY}>
            To the maximum extent permitted by law, R.B Technologies is not liable for any
            indirect, incidental, special, or consequential damages arising from your use of
            Feast. Our total liability is limited to the amount you&apos;ve paid us in the
            12 months before the claim arose (which, during beta, is zero).
          </p>

          <h2 className={SECTION_HEADING}>Termination</h2>
          <p className={BODY}>
            You can stop using Feast at any time. We may suspend or terminate your access if
            you violate these terms. If we terminate your account, we&apos;ll delete your
            data in accordance with our{" "}
            <a href="/privacy" className={LINK}>
              Privacy Policy
            </a>
            .
          </p>

          <h2 className={SECTION_HEADING}>Changes to These Terms</h2>
          <p className={BODY}>
            We may update these terms from time to time. If we make material changes, we&apos;ll
            let you know through the app or by email. Continued use of Feast after changes means
            you accept the updated terms.
          </p>

          <h2 className={SECTION_HEADING}>Governing Law</h2>
          <p className={BODY}>
            These terms are governed by the laws of the State of Washington, without regard to
            conflict of law principles.
          </p>

          <h2 className={SECTION_HEADING}>Contact Us</h2>
          <p className={BODY}>
            Questions about these terms? Reach out at{" "}
            <a href="mailto:ryan@rbtechnologies.dev" className={LINK}>
              ryan@rbtechnologies.dev
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify the page renders**

```bash
npm run dev
```

Open `http://localhost:3000/terms` and verify the page renders with the dark theme, correct typography, and all sections visible. Also verify the Privacy Policy link in the Termination section works.

- [ ] **Step 3: Commit**

```bash
git add src/app/terms/page.tsx
git commit -m "feat: add Terms of Service page"
```

---

### Task 3: Build, verify, and enable footer links

- [ ] **Step 1: Run the build**

```bash
npm run build
```

Expected: Clean build, both `/privacy` and `/terms` listed as static routes.

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

Expected: No errors.

- [ ] **Step 3: Push to main**

```bash
git push origin main
```

- [ ] **Step 4: Enable footer links on Vercel**

```bash
echo "true" | vercel env add NEXT_PUBLIC_SHOW_INFO_LINKS production
vercel --prod
```

- [ ] **Step 5: Verify on production**

Open `https://feast-meals.com/privacy` and `https://feast-meals.com/terms` — both pages should render. Footer should now show Contact, Privacy, and Terms links.
