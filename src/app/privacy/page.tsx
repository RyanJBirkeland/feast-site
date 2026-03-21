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
