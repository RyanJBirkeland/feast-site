const STEPS = [
  {
    number: "01",
    title: "Have a conversation",
    description:
      "Open Feast and tell it what you're in the mood for. \"I want something light this week\" or \"I'm cooking for my partner who's vegetarian\" — whatever's on your mind.",
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
      "When it's time to cook, your AI Chef walks you through each recipe step by step. Ask questions mid-recipe — \"can I substitute this?\" — and get real answers.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[var(--color-feast-cream)] px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-feast-charcoal)] sm:text-4xl">
            How Feast works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--color-feast-warm-gray)]">
            Three steps. No learning curve. Just tell it what you want.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {STEPS.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-feast-green)] text-lg font-bold text-white">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-feast-charcoal)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[var(--color-feast-warm-gray)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
