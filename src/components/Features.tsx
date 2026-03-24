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
      "Tell Feast what you're feeling this week. No forms, no checkboxes — just a natural conversation with an AI dietitian who listens.",
  },
  {
    icon: SparklesIcon,
    title: "It Remembers You",
    description:
      "Mentioned you're cutting back on carbs? Feast remembers next week. Loved that Thai recipe? It'll find more like it. The app gets smarter every day.",
  },
  {
    icon: HeartIcon,
    title: "A Team That Cares",
    description:
      "Your Dietitian plans your week. Your Chef guides you through cooking. Your Coach keeps you on track. They're not chatbot modes — they're companions.",
  },
  {
    icon: ShoppingCartIcon,
    title: "Groceries, Handled",
    description:
      "One tap turns your meal plan into a grocery list. Deduplicated, organized, and ready to send to Instacart for delivery.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-section px-6 py-28 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[var(--color-feast-green)] opacity-[0.05] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-heading-1">
            Not another meal planning app
          </h2>
          <p className="text-body-lg mx-auto mt-4 max-w-2xl">
            Most apps treat you like a database row. Feast treats you like a
            person.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-8 text-center sm:text-left"
            >
              {/* Icon circle with glow */}
              <div className="mx-auto sm:mx-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(45,106,79,0.2)] bg-[rgba(45,106,79,0.1)]">
                <feature.icon className="h-7 w-7 text-emerald-400" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[var(--color-text-primary)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
