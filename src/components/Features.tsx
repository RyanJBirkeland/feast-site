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
      "Cutting back on carbs? Feast remembers next week. Loved that Thai recipe? It'll find more like it. The app gets smarter every day.",
  },
  {
    icon: HeartIcon,
    title: "A Team That Cares",
    description:
      "Your Dietitian plans your week. Your Chef guides cooking. Your Coach keeps you on track. They're not chatbot modes — they're companions.",
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
    <section id="features" className="bg-v2-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            Why Feast
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Not another meal planning app
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-v2-text-secondary">
            Most apps treat you like a database row. Feast treats you like a
            person.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[20px] border border-white/[0.06] p-7 transition-colors duration-200 hover:border-white/[0.12]"
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
