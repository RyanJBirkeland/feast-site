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
    <section id="features" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-feast-charcoal)] sm:text-4xl">
            Not another meal planning app
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-feast-warm-gray)]">
            Most apps treat you like a database row. Feast treats you like a
            person.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-feast-green)]/10">
                <feature.icon className="h-7 w-7 text-[var(--color-feast-green)]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--color-feast-charcoal)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-feast-warm-gray)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
