import {
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const FEATURES = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Conversational, Not Transactional",
    description:
      "Tell Feast what you're feeling this week. No forms, no checkboxes — just natural conversation that feels like talking to a friend.",
  },
  {
    icon: SparklesIcon,
    title: "It Remembers You",
    description:
      "Cutting back on carbs? It remembers next week. Loved that Thai recipe? It'll find more like it. Feast gets smarter the more you use it.",
  },
  {
    icon: HeartIcon,
    title: "A Team That Cares",
    description:
      "Four AI specialists — Nutritionist, Dietitian, Chef & Coach. They have a voice, a style, warmth. They're not chatbot modes — they're companions who care about your goals.",
  },
  {
    icon: ShoppingCartIcon,
    title: "Groceries, Handled",
    description:
      "Your recipes synthesize into a single grocery list, organized by category. Shop it yourself, or send it out for pickup or delivery.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-v2-surface px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            Why Feast
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Meal planning that actually knows you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-v2-text-secondary">
            Every meal planning app treats you the same way: a form to fill
            out, checkboxes to tick. That&apos;s not how people work.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[20px] border border-white/[0.06] p-5 md:p-7 transition-colors duration-200 hover:border-white/[0.12]"
              style={{ background: "rgba(26, 26, 29, 0.8)" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-v2-primary/12">
                <feature.icon className="h-6 w-6 text-v2-primary" />
              </div>
              <h3 className="mt-4 text-[17px] font-semibold text-v2-text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-v2-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
