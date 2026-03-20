export function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-v2-background px-6">
      <p className="text-lg font-bold tracking-[0.3em] uppercase text-v2-primary">
        FEAST
      </p>
      <h1 className="mt-6 text-center text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
        Something delicious is cooking.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-center text-lg leading-relaxed text-v2-text-secondary">
        We&apos;re putting the finishing touches on Feast — your AI kitchen
        companion. Check back soon.
      </p>
      <div
        className="mt-8 h-1 w-16 rounded-full"
        style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}
      />
    </div>
  );
}
