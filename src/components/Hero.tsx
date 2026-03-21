import Image from "next/image";
import { PhoneMockup } from "@/components/PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-v2-background px-6 pt-32 pb-16 md:pb-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:gap-12">
        {/* Left: Copy */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
            AI-Powered Meal Planning
          </p>
          <p className="mt-4 text-2xl font-bold tracking-[0.3em] uppercase text-v2-text-primary sm:text-3xl">
            FEAST
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.12] tracking-[-0.5px] text-v2-text-primary sm:text-5xl md:text-[56px]">
            Plan smarter. Shop easier.
            <br />
            <span className="text-v2-primary">Cook better.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-full md:max-w-[420px] text-[17px] leading-[1.7] text-v2-text-secondary md:mx-0">
            Feast covers your entire food journey.{" "}
            <span className="font-semibold text-v2-text-primary">
              Planning, shopping, and cooking
            </span>
            , all in one app. Tell it what you&apos;re craving,
            what you&apos;re working toward, or what&apos;s in your fridge
            — and it figures out the rest.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#waitlist"
              className="w-full sm:w-auto text-center rounded-[20px] px-8 py-3.5 text-[15px] font-bold text-v2-background transition-all duration-200 active:scale-[0.97]"
              style={{
                background: "linear-gradient(135deg, #00D37F, #00A863)",
                boxShadow: "0 4px 16px rgba(0,211,127,0.3)",
              }}
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto text-center rounded-[20px] border border-v2-border px-7 py-3.5 text-[15px] font-semibold text-v2-text-primary transition-all duration-200 hover:border-v2-border-light"
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
          <PhoneMockup size="lg" glow className="!w-[200px] md:!w-[260px]">
            <Image
              src="/screenshots/chat.png"
              alt="Feast app — chat with your Dietitian"
              width={260}
              height={560}
              className="w-full h-auto"
            />
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}
