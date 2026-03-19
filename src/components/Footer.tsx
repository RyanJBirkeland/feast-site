export function Footer() {
  return (
    <footer className="border-t border-[var(--color-feast-green)]/10 bg-[var(--color-feast-cream)] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-lg font-bold text-[var(--color-feast-green)]">
              🍽️ Feast
            </p>
            <p className="mt-1 text-sm text-[var(--color-feast-warm-gray)]">
              Meal planning that feels like a friend.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-[var(--color-feast-warm-gray)]">
            <a href="mailto:ryan@rbtechnologies.dev" className="hover:text-[var(--color-feast-green)]">
              Contact
            </a>
            <a href="/privacy" className="hover:text-[var(--color-feast-green)]">
              Privacy
            </a>
            <a href="/terms" className="hover:text-[var(--color-feast-green)]">
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-[var(--color-feast-warm-gray)]/60">
          &copy; {new Date().getFullYear()} R.B Technologies LLC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
