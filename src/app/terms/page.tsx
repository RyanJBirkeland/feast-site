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
