import {
  HeartIcon,
  ClipboardDocumentListIcon,
  FireIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

const PERSONAS: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  role: string;
  quote: string;
  label: string;
  description: string;
}[] = [
  {
    Icon: HeartIcon,
    name: "Nutritionist",
    role: "Health Expert",
    quote:
      "I swapped in a yogurt parfait with fruit and toast for breakfast tomorrow since you've been a little low on fiber this week. Should get you back on track without trying.",
    label: "Understands your health",
    description:
      "Precise but warm. Manages your health profile, dietary needs, and nutritional targets with evidence-based guidance.",
  },
  {
    Icon: ClipboardDocumentListIcon,
    name: "Dietitian",
    role: "Meal Planner",
    quote:
      "I put Thai Basil Chicken on Wednesday since you rated it a 5 last time. It's 38g protein and ready in 25 minutes.",
    label: "Plans your meals",
    description:
      "Thoughtful and strategic. Creates personalized weekly meal plans and explains the reasoning behind every choice.",
  },
  {
    Icon: FireIcon,
    name: "Chef",
    role: "Kitchen Companion",
    quote:
      "Tonight's recipe has a 20-minute inactive time while the sauce simmers. Perfect moment to prep tomorrow's lunch.",
    label: "Guides your cooking",
    description:
      "An enthusiastic friend in your kitchen. Walks you through recipes step by step with pro tips and substitutions.",
  },
  {
    Icon: TrophyIcon,
    name: "Coach",
    role: "Accountability Partner",
    quote:
      "You hit your protein target every day this week. That's a first. Your consistency is paying off.",
    label: "Keeps you on track",
    description:
      "Direct but supportive. Tracks your progress, celebrates your wins, and nudges you toward your goals.",
  },
];

export function Personas() {
  return (
    <section id="team" className="bg-v2-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            Your AI Team
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Four specialists who actually know you
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-v2-text-secondary">
            A nutritionist, dietitian, chef, and coach — all in your pocket.
            They remember your goals, your taste, and your schedule.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.map((persona) => (
            <div
              key={persona.name}
              className="relative overflow-hidden rounded-[20px] border border-v2-border bg-v2-card p-5 md:p-7"
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
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-v2-primary"
                  style={{
                    boxShadow: "0 4px 12px rgba(0,211,127,0.25)",
                  }}
                >
                  <persona.Icon className="h-6 w-6 text-white" />
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
