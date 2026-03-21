import Image from "next/image";
import { PhoneMockup } from "@/components/PhoneMockup";

export function AppPreview() {
  return (
    <section id="preview" className="relative overflow-hidden bg-v2-background px-6 py-16 md:py-24">
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
            Simple enough for mid-recipe. Powerful enough for your whole week.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base md:text-lg text-v2-text-secondary">
            Designed to take the effort out of making a home-cooked meal.
          </p>
        </div>

        {/* Phone fan — desktop */}
        <div className="mt-16 hidden items-end justify-center gap-6 md:flex">
          {/* Left phone: Today */}
          <div className="-rotate-3">
            <PhoneMockup size="md">
              <Image
                src="/screenshots/chat.png"
                alt="Feast app — Today view"
                width={180}
                height={390}
                className="w-full h-auto"
              />
            </PhoneMockup>
            <p className="mt-2.5 text-center text-[11px] text-v2-text-tertiary">
              Today
            </p>
          </div>

          {/* Center phone: Plan (elevated) */}
          <div className="-translate-y-2.5">
            <PhoneMockup size="md" glow className="!w-[200px]">
              <Image
                src="/screenshots/planning.png"
                alt="Feast app — Plan view"
                width={180}
                height={390}
                className="w-full h-auto"
              />
            </PhoneMockup>
            <p className="mt-2.5 text-center text-[11px] text-v2-text-tertiary">
              Plan
            </p>
          </div>

          {/* Right phone: Recipes */}
          <div className="rotate-3">
            <PhoneMockup size="md">
              <Image
                src="/screenshots/chat.png"
                alt="Feast app — Recipes view"
                width={180}
                height={390}
                className="w-full h-auto"
              />
            </PhoneMockup>
            <p className="mt-2.5 text-center text-[11px] text-v2-text-tertiary">
              Recipes
            </p>
          </div>
        </div>

        {/* Mobile: single centered phone */}
        <div className="mt-16 flex justify-center md:hidden">
          <PhoneMockup size="md" glow className="!w-[200px] sm:!w-[220px]">
            <Image
              src="/screenshots/planning.png"
              alt="Feast app — Plan view"
              width={180}
              height={390}
              className="w-full h-auto"
            />
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}
