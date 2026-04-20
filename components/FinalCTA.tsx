"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { finalCta } from "@/data/content";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
});

// ── Email capture form ────────────────────────────────────────────────────────
function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid work email.");
      return;
    }
    // In production: call your API here
    setSubmitted(true);
    setError("");
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 rounded-sm border border-amber/30 bg-amber/10 px-5 py-4"
        role="status"
        aria-live="polite"
      >
        <span className="text-amber" aria-hidden="true">✓</span>
        <p className="font-mono text-sm text-amber">
          You&apos;re on the list! Check your inbox for next steps.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Email sign-up form"
      className="flex flex-col gap-3 sm:flex-row"
      noValidate
    >
      <div className="flex-1">
        <label htmlFor="cta-email" className="sr-only">
          Work email address
        </label>
        <input
          id="cta-email"
          type="email"
          autoComplete="email"
          placeholder={finalCta.emailPlaceholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          aria-describedby={error ? "cta-email-error" : undefined}
          aria-invalid={!!error}
          className="w-full rounded-sm border border-border bg-raised px-4 py-3 font-mono text-sm text-cream placeholder:text-muted focus:border-amber/60 focus:outline-none focus:ring-2 focus:ring-amber/20"
        />
        {error && (
          <p
            id="cta-email-error"
            role="alert"
            className="mt-1.5 font-mono text-xs text-red-400"
          >
            {error}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="btn-primary shrink-0 justify-center px-8 py-3"
      >
        {finalCta.ctaPrimary.label}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}

// ── FinalCTA Component ────────────────────────────────────────────────────────
export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="signup"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-t border-border py-section"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-amber-glow opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-60"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="eyebrow mb-4 block"
          >
            {finalCta.eyebrow}
          </motion.span>

          {/* Headline */}
          <motion.h2
            id="cta-heading"
            variants={fadeUp(0.08)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="font-display text-display-xl mb-4 font-black text-cream"
          >
            {finalCta.headline}
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp(0.14)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mb-10 text-base leading-relaxed text-muted"
          >
            {finalCta.subheadline}
          </motion.p>

          {/* Email capture */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mb-4"
          >
            <EmailCapture />
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            variants={fadeUp(0.26)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <Link
              href={finalCta.ctaSecondary.href}
              className="font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:text-cream"
            >
              {finalCta.ctaSecondary.label} →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
