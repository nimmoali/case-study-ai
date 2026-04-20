"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { features } from "@/data/content";

// ── Animation helpers ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

// ── Feature Card ──────────────────────────────────────────────────────────────
function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  delay: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.li
      ref={ref}
      variants={fadeUp(delay)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="feature-card group"
    >
      {/* Icon */}
      <div
        aria-hidden="true"
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-raised font-mono text-lg text-amber transition-all duration-300 group-hover:border-amber/30 group-hover:bg-amber/10"
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-display mb-2 text-lg font-semibold text-cream">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted">{description}</p>

      {/* Hover accent line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full"
      />
    </motion.li>
  );
}

// ── Features Component ────────────────────────────────────────────────────────
export default function Features() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-section relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="mb-16 max-w-2xl">
          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="eyebrow mb-4 block"
          >
            {features.eyebrow}
          </motion.span>

          <motion.h2
            id="features-heading"
            variants={fadeUp(0.08)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="font-display text-display-lg font-black text-cream"
          >
            {features.headline}
          </motion.h2>
        </div>

        {/* Grid */}
        <ul
          className="grid gap-px sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Product features"
          style={{
            background: "linear-gradient(#272727, #272727)",
            backgroundSize: "1px 100%",
          }}
        >
          {/* Wrap in a grid that shows border between cards */}
          {features.items.map((feat, i) => (
            <FeatureCard
              key={feat.title}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              delay={i * 0.06}
            />
          ))}
        </ul>

        {/* Subtle grid overlay — visual separation */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-[-1px] h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </div>
    </section>
  );
}
