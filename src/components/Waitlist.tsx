"use client";

import { useState, type FormEvent } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback: open mailto link so email isn't lost
      window.location.href = `mailto:ryan@rbtechnologies.dev?subject=Feast%20Waitlist&body=Sign%20me%20up%3A%20${encodeURIComponent(email)}`;
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section id="waitlist" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-5xl">🎉</div>
          <h2 className="mt-4 text-3xl font-bold text-[var(--color-feast-charcoal)]">
            You&apos;re on the list!
          </h2>
          <p className="mt-4 text-lg text-[var(--color-feast-warm-gray)]">
            We&apos;ll reach out when Feast is ready for you. In the meantime,
            keep an eye on your inbox.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-feast-charcoal)] sm:text-4xl">
          Be the first to try Feast
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--color-feast-warm-gray)]">
          Feast is currently in beta on TestFlight. Join the waitlist and
          we&apos;ll send you an invite when your spot opens up.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-full border border-[var(--color-feast-green)]/20 bg-[var(--color-feast-cream)] px-6 py-3.5 text-[var(--color-feast-charcoal)] placeholder:text-[var(--color-feast-warm-gray)]/60 focus:border-[var(--color-feast-green)] focus:outline-none focus:ring-2 focus:ring-[var(--color-feast-green)]/20"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-[var(--color-feast-green)] px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-[var(--color-feast-green-light)] hover:shadow-xl disabled:opacity-60"
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>
        </form>

        <p className="mt-4 text-sm text-[var(--color-feast-warm-gray)]/60">
          No spam. Just an invite when it&apos;s your turn.
        </p>
      </div>
    </section>
  );
}
