"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { socialProof } from "@/data/content";

// ── Animation helpers ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  },
});

// ── Logo Pill ─────────────────────────────────────────────────────────────────
function LogoPill({ name, initial }: { name: string; initial: string }) {
  return (
    <div
      className="flex shrink-0 items-center gap-2 rounded-sm border border-border bg-raised px-4 py-2 transition-colors duration-200 hover:border-[#3A3530]"
      title={name}
    >
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[2px] bg-amber/20 font-mono text-[9px] font-bold text-amber"
        aria-hidden="true"
      >
        {initial}
      </span>
      <span className="font-body text-sm text-cream-dim">{name}</span>
    </div>
  );
}

// ── Stat Item ─────────────────────────────────────────────────────────────────
function StatItem({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp(delay)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="flex flex-col items-center gap-1 text-center"
    >
      <span className="font-display text-display-md font-black text-amber tabular-nums">
        {value}
      </span>
      <span className="font-mono text-xs tracking-wider text-muted uppercase">
        {label}
      </span>
    </motion.div>
  );
}

// ── SocialProof Component ─────────────────────────────────────────────────────
export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      aria-label="Social proof"
      className="border-y border-border bg-surface py-16 sm:py-20"
    >
      <div className="section-container">
        {/* Label */}
        <motion.p
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-10 text-center font-mono text-xs tracking-[0.2em] text-muted uppercase"
        >
          {socialProof.headline}
        </motion.p>

        {/* Stats row */}
        <div
          className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-4"
          role="list"
          aria-label="Key statistics"
        >
          {socialProof.stats.map((stat, i) => (
            <div key={stat.label} role="listitem">
              <StatItem value={stat.value} label={stat.label} delay={i * 0.08} />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="mx-auto mb-10 h-px w-16 bg-border"
          aria-hidden="true"
        />

        {/* Logo strip — scrollable on mobile, centered on desktop */}
        <div
          className="flex flex-wrap items-center justify-center gap-3"
          role="list"
          aria-label="Companies using Case Study AI"
        >
          {socialProof.logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              role="listitem"
              variants={fadeUp(0.1 + i * 0.05)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <LogoPill name={logo.name} initial={logo.initial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
