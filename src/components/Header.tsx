"use client";

import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "The Team", href: "#team" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-white/[0.06]"
      style={{ background: "rgba(5, 5, 5, 0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-bold tracking-[0.3em] uppercase text-v2-primary"
        >
          <Image src="/feast-logo.svg" alt="" width={28} height={28} className="rounded-lg" />
          FEAST
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-v2-text-secondary transition-colors duration-200 hover:text-v2-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="rounded-[20px] px-5 py-2 text-sm font-semibold text-v2-background transition-all duration-200 active:scale-[0.97]"
            style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}
          >
            Join Waitlist
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6 text-v2-text-primary" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-v2-text-primary" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-white/[0.06] bg-v2-background px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-v2-text-secondary transition-colors duration-200 hover:text-v2-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-[20px] px-5 py-2.5 text-center text-sm font-semibold text-v2-background"
            style={{ background: "linear-gradient(135deg, #00D37F, #00A863)" }}
          >
            Join Waitlist
          </a>
        </nav>
      )}
    </header>
  );
}
