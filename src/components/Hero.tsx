export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-feast-cream)] px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-feast-charcoal)] sm:text-5xl md:text-6xl">
          Meal planning that feels like
          <br />
          <span className="text-[var(--color-feast-green)]">
            a knowledgeable friend
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-feast-warm-gray)] sm:text-xl">
          Feast is your AI meal planning companion. It learns what you love,
          remembers what you need, and plans your week through natural
          conversation — not forms and checkboxes.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#waitlist"
            className="rounded-full bg-[var(--color-feast-green)] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[var(--color-feast-green-light)] hover:shadow-xl"
          >
            Join the Waitlist
          </a>
          <a
            href="#how-it-works"
            className="text-base font-medium text-[var(--color-feast-green)] underline-offset-4 hover:underline"
          >
            See how it works →
          </a>
        </div>

        {/* App screenshot placeholder */}
        <div className="mx-auto mt-16 max-w-sm">
          <div className="aspect-[9/19] rounded-[2.5rem] border-4 border-[var(--color-feast-charcoal)]/10 bg-white p-3 shadow-2xl">
            <div className="flex h-full flex-col items-center justify-center rounded-[2rem] bg-gradient-to-b from-[var(--color-feast-cream)] to-white">
              <span className="text-5xl">🍽️</span>
              <p className="mt-4 px-6 text-center text-sm text-[var(--color-feast-warm-gray)]">
                App screenshot coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
