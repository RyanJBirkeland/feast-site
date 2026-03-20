const PERSONAS = [
  {
    emoji: "📋",
    name: "Dietitian",
    role: "Meal Planning Expert",
    quote:
      "I've built your plan around high-protein dinners this week. Tuesday and Thursday are lighter — you mentioned wanting balance.",
    label: "Plans your meals",
    description:
      "Builds personalized weekly plans based on your goals, preferences, and history.",
  },
  {
    emoji: "👨‍🍳",
    name: "Chef",
    role: "Cooking Guide",
    quote:
      "No buttermilk? No problem — mix 1 cup milk with 1 tbsp lemon juice and let it sit for 5 minutes.",
    label: "Guides your cooking",
    description:
      "Walks you through recipes step by step. Ask questions mid-cook and get real answers.",
  },
  {
    emoji: "🏆",
    name: "Coach",
    role: "Accountability Partner",
    quote:
      "You've hit your protein target 4 days this week. One more day and you'll have your best week yet.",
    label: "Keeps you on track",
    description:
      "Tracks your progress and nudges you toward your nutritional goals week over week.",
  },
];

export function Personas() {
  return (
    <section id="team" className="bg-v2-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            Your AI Team
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Three experts. One app.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-v2-text-secondary">
            Each one specializes in a different part of your week.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {PERSONAS.map((persona) => (
            <div
              key={persona.name}
              className="relative overflow-hidden rounded-[20px] border border-v2-border bg-v2-card p-7"
            >
              {/* Glow accent */}
              <div
                className="pointer-events-none absolute -top-[30px] -right-[30px] h-[100px] w-[100px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,211,127,0.1) 0%, transparent 70%)",
                }}
              />

              {/* Avatar + name */}
              <div className="relative mb-5 flex items-center gap-3.5">
                <div
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-v2-primary text-2xl"
                  style={{
                    boxShadow: "0 4px 12px rgba(0,211,127,0.25)",
                  }}
                >
                  {persona.emoji}
                </div>
                <div>
                  <p className="text-lg font-bold text-v2-text-primary">
                    {persona.name}
                  </p>
                  <p className="text-xs text-v2-text-tertiary">
                    {persona.role}
                  </p>
                </div>
              </div>

              {/* Chat preview */}
              <div className="rounded-[14px] border border-white/[0.04] bg-v2-surface p-3.5">
                <p className="text-xs italic leading-relaxed text-v2-text-secondary">
                  &ldquo;{persona.quote}&rdquo;
                </p>
              </div>

              {/* Role description */}
              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.5px] text-v2-primary">
                  {persona.label}
                </p>
                <p className="mt-1 text-[13px] leading-[1.5] text-v2-text-tertiary">
                  {persona.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
