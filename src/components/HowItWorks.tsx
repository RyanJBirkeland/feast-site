import Image from "next/image";
import { PhoneMockup } from "@/components/PhoneMockup";

const STEPS = [
  {
    number: "01",
    title: "Have a conversation",
    description:
      'Open Feast and tell your Dietitian what you\'re in the mood for. "I want something high-protein this week" or "My partner is vegetarian on Tuesdays" — just talk naturally.',
  },
  {
    number: "02",
    title: "Get a plan that fits",
    description:
      "Your Dietitian builds a personalized 7-day meal plan based on your conversation, your history, and your nutritional goals. Don't like something? Swap it with a tap.",
  },
  {
    number: "03",
    title: "Cook with confidence",
    description:
      "When it's time to cook, your Chef walks you through each recipe step by step. Ask questions mid-recipe and get real answers — like having a pro in your kitchen.",
  },
  {
    number: "04",
    title: "Shop in one tap",
    description:
      "Your recipes synthesize into a single grocery list, organized by category. Shop it yourself or send it out for pickup or delivery.",
  },
];

const STEP_SCREENSHOTS = [
  { src: "/screenshots/chat.png", alt: "Feast app — conversation with Dietitian" },
  { src: "/screenshots/planning.png", alt: "Feast app — Dietitian generating meal plan" },
  { src: "/screenshots/chat.png", alt: "Feast app — cooking guidance from Chef" },
  { src: "/screenshots/planning.png", alt: "Feast app — grocery list" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-v2-surface px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Four steps. No learning curve.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-v2-text-secondary">
            Just talk, and Feast takes care of the rest.
          </p>
        </div>

        <div className="mt-16">
          {STEPS.map((step, i) => (
            <div key={step.number}>
              <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-bold text-v2-background"
                      style={{
                        background:
                          "linear-gradient(135deg, #00D37F, #00A863)",
                        boxShadow: "0 4px 12px rgba(0,211,127,0.25)",
                      }}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-v2-text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 pl-[54px] text-[15px] leading-[1.7] text-v2-text-secondary">
                    {step.description}
                  </p>
                </div>

                {/* Mini phone */}
                <PhoneMockup size="sm">
                  <Image
                    src={STEP_SCREENSHOTS[i].src}
                    alt={STEP_SCREENSHOTS[i].alt}
                    width={160}
                    height={340}
                    className="w-full h-auto"
                  />
                </PhoneMockup>
              </div>

              {/* Connector */}
              {i < STEPS.length - 1 && (
                <div
                  className="mx-auto my-8 h-6 w-0.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, #00D37F, #2A2A2E)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
