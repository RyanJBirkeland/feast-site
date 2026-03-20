import Image from "next/image";
import { PhoneMockup } from "@/components/PhoneMockup";

const STEPS = [
  {
    number: "01",
    title: "Have a conversation",
    description:
      'Open Feast and tell it what you\'re in the mood for. "I want something light this week" or "I\'m cooking for my partner who\'s vegetarian" — whatever\'s on your mind.',
  },
  {
    number: "02",
    title: "Get a plan that fits",
    description:
      "Your AI Dietitian builds a personalized weekly meal plan based on what you said, what you've liked before, and your nutritional goals. Swap anything you don't want.",
  },
  {
    number: "03",
    title: "Cook with confidence",
    description:
      'When it\'s time to cook, your AI Chef walks you through each recipe step by step. Ask questions mid-recipe — "can I substitute this?" — and get real answers.',
  },
  {
    number: "04",
    title: "Shop in one tap",
    description:
      "Your meal plan becomes a grocery list — deduplicated, organized, and ready to send to Instacart for delivery.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-v2-surface px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Four steps. No learning curve.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-v2-text-secondary">
            Just tell it what you want.
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
                  {i === 0 && <Step1Phone />}
                  {i === 1 && <Step2Phone />}
                  {i === 2 && <Step3Phone />}
                  {i === 3 && <Step4Phone />}
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

function Step1Phone() {
  return (
    <div className="p-3 text-[7px]">
      <div className="mb-2 text-center text-[8px] font-bold tracking-[0.2em] uppercase text-v2-primary">
        FEAST
      </div>
      <div className="mb-2 flex items-center gap-1.5">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-v2-primary text-[8px]">📋</div>
        <span className="text-[8px] font-semibold text-v2-text-primary">Dietitian</span>
      </div>
      <div className="mb-1.5 rounded-lg border border-v2-border bg-v2-card p-2">
        <p className="leading-[1.5] text-v2-text-secondary">What are you feeling this week? Any preferences?</p>
      </div>
      <div className="ml-5 rounded-lg p-2" style={{ background: "rgba(0,211,127,0.12)" }}>
        <p className="leading-[1.5] text-v2-primary">High protein, keep it simple. My partner is vegetarian on Tuesdays.</p>
      </div>
    </div>
  );
}

function Step2Phone() {
  return (
    <div className="p-3 text-[7px]">
      <div className="mb-2 text-center text-[8px] font-bold tracking-[0.2em] uppercase text-v2-primary">
        FEAST
      </div>
      <p className="mb-1.5 text-v2-text-tertiary">Your Week</p>
      {[
        { day: "Mon", meal: "Thai Salad", meta: "420 cal · 35g protein" },
        { day: "Tue", meal: "Veggie Stir Fry", meta: "380 cal · 🌱 vegetarian" },
        { day: "Wed", meal: "Lemon Chicken", meta: "510 cal · 42g protein" },
      ].map((item) => (
        <div key={item.day} className="mb-1 rounded-md border border-v2-border bg-v2-card p-1.5">
          <p className="font-semibold text-v2-text-primary">{item.day} — {item.meal}</p>
          <p className="text-[6px] text-v2-text-tertiary">{item.meta}</p>
        </div>
      ))}
      <div className="mt-2 rounded-md py-1.5 text-center font-bold text-v2-background" style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}>
        View Full Plan
      </div>
    </div>
  );
}

function Step3Phone() {
  return (
    <div className="p-3 text-[7px]">
      <div className="mb-2 text-center text-[8px] font-bold tracking-[0.2em] uppercase text-v2-primary">
        FEAST
      </div>
      <div className="mb-2 flex items-center gap-1.5">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-v2-primary text-[8px]">👨‍🍳</div>
        <span className="text-[8px] font-semibold text-v2-text-primary">Chef</span>
      </div>
      <p className="mb-1 font-semibold text-v2-text-primary">Step 3 of 6</p>
      <div className="mb-1.5 rounded-md border border-v2-border bg-v2-card p-1.5">
        <p className="leading-[1.4] text-v2-text-secondary">Sear the chicken for 4 minutes per side until golden. Don&apos;t move it — let the crust form.</p>
      </div>
      <div className="mb-2 h-[3px] rounded-full bg-v2-border">
        <div className="h-full w-1/2 rounded-full bg-v2-primary" />
      </div>
      <div className="flex gap-1">
        <div className="flex-1 rounded-md border border-v2-border bg-v2-card py-1 text-center text-[6px] text-v2-text-secondary">← Prev</div>
        <div className="flex-1 rounded-md py-1 text-center text-[6px] font-bold text-v2-background" style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}>Next →</div>
      </div>
    </div>
  );
}

function Step4Phone() {
  return (
    <div className="p-3 text-[7px]">
      <div className="mb-2 text-center text-[8px] font-bold tracking-[0.2em] uppercase text-v2-primary">
        FEAST
      </div>
      <p className="mb-1 font-semibold text-v2-text-primary">Grocery List</p>
      <p className="mb-2 text-[6px] text-v2-text-tertiary">12 items · 3 categories</p>
      {[
        { cat: "Produce", items: "Asparagus, Peas, Lemon, Ginger" },
        { cat: "Protein", items: "Chicken breast, Tofu" },
        { cat: "Pantry", items: "Soy sauce, Rice, Coconut milk" },
      ].map((group) => (
        <div key={group.cat} className="mb-1.5">
          <p className="mb-0.5 text-[6px] font-semibold uppercase tracking-[0.5px] text-v2-primary">{group.cat}</p>
          <div className="rounded-md border border-v2-border bg-v2-card p-1.5">
            <p className="text-v2-text-secondary">{group.items}</p>
          </div>
        </div>
      ))}
      <div className="mt-2 flex items-center justify-center gap-1.5 rounded-md py-1.5" style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}>
        {/* brightness-0 turns the AllWhite SVG to black so it's visible on the green gradient button */}
        <Image src="/instacart-logo.svg" alt="Instacart" width={48} height={12} className="brightness-0" />
        <span className="text-[7px] font-bold text-v2-background">Send to Instacart</span>
      </div>
    </div>
  );
}
