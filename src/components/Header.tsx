"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Join Waitlist", href: "#waitlist" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--color-feast-green)]/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-[var(--color-feast-green)]">
          🍽️ Feast
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-feast-charcoal)] transition-colors hover:text-[var(--color-feast-green)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6 text-[var(--color-feast-charcoal)]" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[var(--color-feast-charcoal)]" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-[var(--color-feast-green)]/10 bg-white px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-[var(--color-feast-charcoal)] transition-colors hover:text-[var(--color-feast-green)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
