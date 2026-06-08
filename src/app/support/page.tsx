import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Support — Feast",
  description:
    "Get help with Feast — contact support, manage your account, and find answers to common questions.",
};

const SECTION_HEADING = "mt-12 text-xl font-semibold text-v2-text-primary";
const BODY = "mt-4 text-base leading-relaxed text-v2-text-secondary";
const LIST = "mt-4 list-disc pl-6 space-y-2 text-base leading-relaxed text-v2-text-secondary";
const LINK = "text-v2-primary hover:underline";

const SUPPORT_EMAIL = "support@feast-meals.com";

export default function Support() {
  return (
    <>
      <Header />
      <main className="bg-v2-background px-6 pt-32 pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            Help
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Support
          </h1>
          <p className="mt-4 text-base leading-relaxed text-v2-text-secondary">
            We&apos;re a small team and we read every message. Email us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className={LINK}>
              {SUPPORT_EMAIL}
            </a>{" "}
            and we&apos;ll get back to you, usually within a couple of days.
          </p>

          <h2 className={SECTION_HEADING}>What to include</h2>
          <p className={BODY}>
            To help us help you faster, tell us what happened, what you expected
            instead, and which iPhone and iOS version you&apos;re on. A screenshot
            is worth a thousand words.
          </p>

          <h2 className={SECTION_HEADING}>Common questions</h2>
          <ul className={LIST}>
            <li>
              <strong className="text-v2-text-primary">My meal plan looks off.</strong>{" "}
              Tell the Dietitian what you&apos;d change in chat — swap a meal,
              adjust portions, or ask for something new — and the plan rewrites
              itself. If it still isn&apos;t right, email us.
            </li>
            <li>
              <strong className="text-v2-text-primary">A recipe import failed.</strong>{" "}
              Some sites block automated reading. Send us the link and we&apos;ll
              take a look.
            </li>
            <li>
              <strong className="text-v2-text-primary">I want to change my dietary preferences.</strong>{" "}
              Update them anytime in your profile; your AI team adapts to the
              changes on your next plan.
            </li>
          </ul>

          <h2 className={SECTION_HEADING}>Manage or delete your account</h2>
          <p className={BODY}>
            You can delete your Feast account and all of its data from inside the
            app, under Settings. Deletion is permanent and removes your meal
            plans, recipes, grocery lists, and chat history. If you can&apos;t
            access the app, email us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className={LINK}>
              {SUPPORT_EMAIL}
            </a>{" "}
            from your account email and we&apos;ll handle it for you.
          </p>

          <h2 className={SECTION_HEADING}>Privacy and terms</h2>
          <p className={BODY}>
            See how we handle your data in our{" "}
            <a href="/privacy" className={LINK}>
              Privacy Policy
            </a>{" "}
            and the rules of the road in our{" "}
            <a href="/terms" className={LINK}>
              Terms of Service
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
