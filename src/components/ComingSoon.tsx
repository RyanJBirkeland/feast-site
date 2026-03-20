export function ComingSoon() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-v2-background px-6">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(0,211,127,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative text-center">
        <p className="text-lg font-bold tracking-[0.3em] uppercase text-v2-primary">
          FEAST
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-[-0.5px] text-v2-text-primary sm:text-5xl md:text-6xl">
          Something delicious
          <br />
          <span className="text-v2-primary">is cooking.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-v2-text-secondary">
          We&apos;re putting the finishing touches on Feast — your AI kitchen
          companion. Check back soon.
        </p>

        {/* Gradient bar */}
        <div
          className="mx-auto mt-10 h-1 w-20 rounded-full"
          style={{
            background: "linear-gradient(135deg, #00D37F, #00A863)",
            boxShadow: "0 0 20px rgba(0,211,127,0.3)",
          }}
        />

        {/* Subtle footer */}
        <p className="mt-16 text-xs text-v2-text-tertiary">
          &copy; {new Date().getFullYear()} R.B Technologies LLC
        </p>
      </div>
    </div>
  );
}
