import {
  TrophyIcon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  BookOpenIcon,
  BookmarkIcon,
  SparklesIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import { PhoneMockup } from "@/components/PhoneMockup";

export function AppPreview() {
  return (
    <section id="preview" className="relative overflow-hidden bg-v2-background px-6 py-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,211,127,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            See It In Action
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
            Beautiful by design
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-v2-text-secondary">
            Minimalist, modern, and built for how you actually cook.
          </p>
        </div>

        {/* Phone fan — desktop */}
        <div className="mt-16 hidden items-end justify-center gap-6 md:flex">
          {/* Left phone: Today */}
          <div className="-rotate-3">
            <PhoneMockup size="md">
              <TodayScreen />
            </PhoneMockup>
            <p className="mt-2.5 text-center text-[11px] text-v2-text-tertiary">
              Today
            </p>
          </div>

          {/* Center phone: Plan (elevated) */}
          <div className="-translate-y-2.5">
            <PhoneMockup size="md" glow className="!w-[200px]">
              <PlanScreen />
            </PhoneMockup>
            <p className="mt-2.5 text-center text-[11px] text-v2-text-tertiary">
              Plan
            </p>
          </div>

          {/* Right phone: Recipes */}
          <div className="rotate-3">
            <PhoneMockup size="md">
              <RecipesScreen />
            </PhoneMockup>
            <p className="mt-2.5 text-center text-[11px] text-v2-text-tertiary">
              Recipes
            </p>
          </div>
        </div>

        {/* Mobile: single centered phone */}
        <div className="mt-16 flex justify-center md:hidden">
          <PhoneMockup size="md" glow className="!w-[220px]">
            <PlanScreen />
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}

function TodayScreen() {
  return (
    <div className="p-3 text-[8px]">
      <div className="mb-3 text-center text-[9px] font-bold tracking-[0.2em] uppercase text-v2-primary">FEAST</div>
      <p className="mb-2 text-[12px] font-bold leading-tight text-v2-text-primary">Good evening!<br />Let&apos;s plan your week.</p>
      <div className="mb-2 rounded-[10px] border border-v2-border bg-v2-card p-2.5">
        <div className="flex items-center gap-1.5">
          <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-v2-primary">
            <TrophyIcon className="h-3 w-3 text-white" />
          </div>
          <p className="text-v2-text-secondary">You haven&apos;t built your plan yet.</p>
        </div>
      </div>
      <div className="rounded-[10px] border border-v2-border bg-v2-card p-3 text-center">
        <div className="mb-1.5 flex justify-center">
          <CalendarDaysIcon className="h-4 w-4 text-v2-text-secondary" />
        </div>
        <p className="text-[10px] font-semibold text-v2-text-primary">Plan your week</p>
        <div className="mt-2 rounded-lg py-1.5 text-[8px] font-bold text-v2-background" style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}>Create Meal Plan</div>
      </div>
    </div>
  );
}

function PlanScreen() {
  return (
    <div className="p-3 text-[8px]">
      <div className="mb-3 text-center text-[9px] font-bold tracking-[0.2em] uppercase text-v2-primary">FEAST</div>
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-v2-primary">
          <ClipboardDocumentListIcon className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="text-[10px] font-semibold text-v2-text-primary">Dietitian</p>
          <p className="text-[7px] text-v2-text-tertiary">Your Meal Planning Expert</p>
        </div>
      </div>
      <div className="mb-2 rounded-lg border border-v2-border bg-v2-card p-2">
        <p className="leading-[1.5] text-v2-text-secondary">Let&apos;s talk about what you want this week.</p>
      </div>
      <div className="mb-3 rounded-[14px] py-2.5 text-center text-[11px] font-bold text-v2-background" style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}>Build My Plan →</div>
      <p className="mb-2 text-[8px] font-semibold uppercase tracking-[1px] text-v2-primary">Browse &amp; Discover</p>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="rounded-lg border border-v2-border bg-v2-card p-2 text-center">
          <div className="flex justify-center">
            <BookOpenIcon className="h-3 w-3 text-v2-text-secondary" />
          </div>
          <p className="mt-1 text-[7px] font-semibold text-v2-text-primary">All Recipes</p>
        </div>
        <div className="rounded-lg border border-v2-border bg-v2-card p-2 text-center">
          <div className="flex justify-center">
            <BookmarkIcon className="h-3 w-3 text-v2-text-secondary" />
          </div>
          <p className="mt-1 text-[7px] font-semibold text-v2-text-primary">Saved Plans</p>
        </div>
      </div>
    </div>
  );
}

function RecipesScreen() {
  return (
    <div className="p-3 text-[8px]">
      <div className="mb-3 text-center text-[9px] font-bold tracking-[0.2em] uppercase text-v2-primary">FEAST</div>
      <p className="mb-1 text-[12px] font-bold text-v2-text-primary">Quick &amp; Easy</p>
      <p className="mb-2.5 text-v2-text-tertiary">Under 30 min</p>
      <div className="mb-1.5 flex h-[60px] items-center justify-center rounded-[10px]" style={{ background: "linear-gradient(135deg, #1a3a2a, #0a2a1a)" }}>
        <SparklesIcon className="h-4 w-4 text-white/70" />
      </div>
      <p className="text-[9px] font-semibold text-v2-text-primary">Asparagus and Pea Soup</p>
      <p className="mb-2 text-[7px] text-v2-text-tertiary">20m · Serves 2</p>
      <div className="mb-1.5 flex h-[60px] items-center justify-center rounded-[10px]" style={{ background: "linear-gradient(135deg, #2a2a1a, #1a1a0a)" }}>
        <FireIcon className="h-4 w-4 text-white/70" />
      </div>
      <p className="text-[9px] font-semibold text-v2-text-primary">Cauliflower Brown Rice</p>
      <p className="text-[7px] text-v2-text-tertiary">30m · Serves 8</p>
    </div>
  );
}
