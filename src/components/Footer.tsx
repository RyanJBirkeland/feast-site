export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-v2-background px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-base font-bold tracking-[0.3em] uppercase text-v2-primary">
              FEAST
            </p>
            <p className="mt-1 text-sm text-v2-text-tertiary">
              Meal planning that feels like a friend.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-v2-text-tertiary">
            <a
              href="mailto:ryan@rbtechnologies.dev"
              className="transition-colors duration-200 hover:text-v2-primary"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="transition-colors duration-200 hover:text-v2-primary"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="transition-colors duration-200 hover:text-v2-primary"
            >
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-6 text-center text-xs text-v2-text-tertiary">
          &copy; {new Date().getFullYear()} R.B Technologies LLC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
