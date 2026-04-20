"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { hero } from "@/data/content";

// ── Animation Variants ────────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

// ── Floating Editor Preview (decorative UI mock) ──────────────────────────────
function EditorMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-2xl"
      aria-hidden="true"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-px rounded-sm bg-gradient-to-b from-amber/20 via-transparent to-transparent blur-xl" />

      {/* Window chrome */}
      <div className="overflow-hidden rounded-sm border border-border bg-surface shadow-[0_32px_80px_rgba(0,0,0,0.7)]">
        {/* Title bar */}
        <div className="flex h-10 items-center gap-2 border-b border-border bg-raised px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
          <span className="ml-4 font-mono text-xs text-muted">
            case-study-draft.md — Case Study AI
          </span>
          {/* Status pill */}
          <span className="ml-auto flex items-center gap-1.5 rounded-full bg-amber/10 px-2 py-0.5 font-mono text-[10px] text-amber">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
            Generating…
          </span>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-4 border-b border-border px-4 py-2">
          {["H1", "H2", "B", "I", "Link"].map((t) => (
            <button
              key={t}
              className="font-mono text-xs text-muted transition-colors hover:text-cream-dim"
            >
              {t}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2">
            <span className="rounded-sm bg-amber/10 px-2 py-0.5 font-mono text-[10px] text-amber">
              PDF
            </span>
            <span className="rounded-sm bg-raised px-2 py-0.5 font-mono text-[10px] text-muted">
              DOCX
            </span>
          </div>
        </div>

        {/* Content area */}
        <div className="space-y-3 p-6">
          {/* Title line */}
          <div className="h-5 w-3/4 rounded-sm bg-cream/90" />
          {/* Subheading simulation */}
          <div className="h-3 w-1/3 rounded-sm bg-amber/40" />
          {/* Paragraph lines */}
          <div className="space-y-1.5 pt-2">
            {[100, 95, 88, 100, 75].map((w, i) => (
              <div
                key={i}
                className="h-2.5 rounded-sm bg-cream-dim/20"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
          {/* Metric block */}
          <div className="mt-4 flex gap-4">
            {[
              { val: "83%", lbl: "Faster go-to-market" },
              { val: "3×", lbl: "More pipeline" },
              { val: "$2.4M", lbl: "ARR attributed" },
            ].map((m) => (
              <div
                key={m.lbl}
                className="flex-1 rounded-sm border border-border bg-raised p-3"
              >
                <div className="font-display text-lg font-bold text-amber">
                  {m.val}
                </div>
                <div className="font-mono text-[10px] text-muted">{m.lbl}</div>
              </div>
            ))}
          </div>
          {/* More lines */}
          <div className="space-y-1.5 pt-1">
            {[90, 82, 60].map((w, i) => (
              <div
                key={i}
                className="h-2.5 rounded-sm bg-cream-dim/20"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Hero Component ────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-100" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-amber-glow" aria-hidden="true" />
      {/* Subtle vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(13,13,13,0.9) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div variants={item}>
            <span className="eyebrow mb-6 inline-flex items-center gap-2">
              <span
                className="inline-block h-px w-8 bg-amber"
                aria-hidden="true"
              />
              {hero.eyebrow}
              <span
                className="inline-block h-px w-8 bg-amber"
                aria-hidden="true"
              />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-display-2xl mb-6 max-w-4xl font-black text-cream"
          >
            {/* Split for italic accent on last word */}
            Your best customers already wrote your best{" "}
            <em className="italic text-amber not-italic" style={{ fontStyle: "italic" }}>
              sales content.
            </em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="mb-10 max-w-xl text-lg leading-relaxed text-cream-dim"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link href={hero.ctaPrimary.href} className="btn-primary group px-8 py-3.5 text-sm animate-pulse-amber">
              {hero.ctaPrimary.label}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link href={hero.ctaSecondary.href} className="btn-secondary px-8 py-3.5 text-sm">
              {hero.ctaSecondary.label}
              <span aria-hidden="true">▶</span>
            </Link>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            variants={item}
            className="mt-4 font-mono text-xs text-muted"
          >
            {hero.disclaimer}
          </motion.p>
        </motion.div>

        {/* Editor mock */}
        <div className="mt-20 w-full">
          <EditorMock />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
