import { PhoneMockup } from "@/components/PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-v2-background px-6 pt-32 pb-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 md:flex-row md:gap-12">
        {/* Left: Copy */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            AI-Powered Meal Planning for the Modern Kitchen
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.12] tracking-[-0.5px] text-v2-text-primary sm:text-5xl md:text-[56px]">
            Plan smarter. Shop easier.
            <br />
            <span className="text-v2-primary">Cook better.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[420px] text-[17px] leading-[1.7] text-v2-text-secondary md:mx-0">
            Feast is the meal planning companion that feels like a knowledgeable
            friend — not an app. Your personal team of Nutritionist, Dietitian,
            Chef &amp; Coach, all in your pocket.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#waitlist"
              className="rounded-[20px] px-8 py-3.5 text-[15px] font-bold text-v2-background transition-all duration-200 active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #00D37F, #00A863)",
                boxShadow: "0 4px 16px rgba(0,211,127,0.3)",
              }}
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              className="rounded-[20px] border border-v2-border px-7 py-3.5 text-[15px] font-semibold text-v2-text-primary transition-all duration-200 hover:border-v2-border-light"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Right: Phone Mockup */}
        <div className="relative">
          {/* Green glow behind phone */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(circle, rgba(0,211,127,0.08) 0%, transparent 70%)",
            }}
          />
          <PhoneMockup size="lg" glow>
            <HeroPhoneContent />
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}

function HeroPhoneContent() {
  return (
    <div className="p-4 text-xs" style={{ minHeight: 420 }}>
      {/* Status bar */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[10px] text-v2-text-secondary">9:41</span>
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-v2-primary">
          FEAST
        </span>
        <span className="text-[10px] text-v2-text-secondary">100%</span>
      </div>

      {/* Greeting */}
      <p className="mb-4 text-[18px] font-bold leading-[1.25] text-v2-text-primary">
        Good evening!
        <br />
        Let&apos;s plan your week.
      </p>

      {/* Dietitian card */}
      <div className="mb-3 rounded-[16px] border border-v2-border bg-v2-card p-3">
        <div className="mb-2 flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-v2-primary text-sm"
          >
            📋
          </div>
          <div>
            <p className="text-[12px] font-semibold text-v2-text-primary">
              Your Dietitian
            </p>
            <p className="text-[10px] text-v2-text-tertiary">
              Meal Planning Expert
            </p>
          </div>
        </div>
        <p className="text-[11px] leading-[1.5] text-v2-text-secondary">
          I&apos;ve planned 5 meals based on your preferences. High protein, low
          carb — just how you like it.
        </p>
      </div>

      {/* Recipe cards */}
      <div className="mb-3 flex gap-2">
        <div className="flex-1 rounded-xl border border-v2-border bg-v2-card p-2.5">
          <div className="mb-2 flex h-[50px] items-center justify-center rounded-lg text-xl" style={{ background: "linear-gradient(135deg, #1a3a2a, #0a2a1a)" }}>
            🥗
          </div>
          <p className="text-[10px] font-semibold text-v2-text-primary">
            Thai Salad
          </p>
          <p className="text-[9px] text-v2-text-tertiary">25m · 420 cal</p>
        </div>
        <div className="flex-1 rounded-xl border border-v2-border bg-v2-card p-2.5">
          <div className="mb-2 flex h-[50px] items-center justify-center rounded-lg text-xl" style={{ background: "linear-gradient(135deg, #2a2a1a, #1a1a0a)" }}>
            🍗
          </div>
          <p className="text-[10px] font-semibold text-v2-text-primary">
            Lemon Chicken
          </p>
          <p className="text-[9px] text-v2-text-tertiary">30m · 380 cal</p>
        </div>
      </div>

      {/* CTA */}
      <div
        className="rounded-[14px] py-2.5 text-center text-[12px] font-bold text-v2-background"
        style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}
      >
        View Full Plan
      </div>

      {/* Tab bar */}
      <div className="mt-4 flex justify-around border-t border-v2-border pt-3">
        <div className="text-center">
          <div className="text-sm">📅</div>
          <p className="mt-0.5 text-[9px] text-v2-text-tertiary">Plan</p>
        </div>
        <div className="text-center">
          <div className="text-sm">🏠</div>
          <p className="mt-0.5 text-[9px] font-semibold text-v2-primary">
            Today
          </p>
          <div className="mx-auto mt-0.5 h-0.5 w-4 rounded-full bg-v2-primary" />
        </div>
        <div className="text-center">
          <div className="text-sm">🛒</div>
          <p className="mt-0.5 text-[9px] text-v2-text-tertiary">Shop</p>
        </div>
      </div>
    </div>
  );
}
