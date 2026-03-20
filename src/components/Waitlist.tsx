"use client";

import { useState, type FormEvent } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

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
      <section id="waitlist" className="bg-v2-surface px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <CheckCircleIcon className="mx-auto h-12 w-12 text-v2-primary" />
          <h2 className="mt-4 text-3xl font-bold text-v2-text-primary">
            You&apos;re on the list!
          </h2>
          <p className="mt-4 text-lg text-v2-text-secondary">
            We&apos;ll reach out when Feast is ready for you. In the meantime,
            keep an eye on your inbox.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="relative overflow-hidden bg-v2-surface px-6 py-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(0,211,127,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[500px] text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[2px] text-v2-primary">
          Early Access
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-[-0.4px] text-v2-text-primary sm:text-4xl">
          Be the first to try Feast
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-v2-text-secondary">
          Feast is currently in private beta. Join our waitlist for early
          access — we&apos;ll send you an invite when your spot opens up.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-[16px] border border-v2-border bg-v2-card px-5 py-3.5 text-v2-text-primary placeholder:text-v2-text-tertiary focus:border-v2-primary focus:outline-none focus:ring-2 focus:ring-v2-primary/20"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-[16px] px-7 py-3.5 text-[15px] font-bold text-v2-background transition-all duration-200 active:scale-[0.97] disabled:opacity-60"
            style={{
              background: "linear-gradient(135deg, #00D37F, #00A863)",
              boxShadow: "0 4px 16px rgba(0,211,127,0.3)",
            }}
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>
        </form>

        <p className="mt-4 text-[13px] text-v2-text-tertiary">
          No spam, ever. Just an invite when it&apos;s your turn.
        </p>
      </div>
    </section>
  );
}
