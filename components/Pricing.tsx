"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { pricing, comparisonTable } from "@/data/content";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

// ── Check / Cross icons ───────────────────────────────────────────────────────
function CheckIcon({ included }: { included: boolean }) {
  if (included) {
    return (
      <span className="text-amber" aria-label="Included">
        ✓
      </span>
    );
  }
  return (
    <span className="text-border" aria-label="Not included">
      —
    </span>
  );
}

// ── Pricing Card ──────────────────────────────────────────────────────────────
function PricingCard({
  tier,
  delay,
}: {
  tier: (typeof pricing.tiers)[number];
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp(delay)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={`pricing-card ${tier.highlighted ? "pricing-card--highlighted" : ""}`}
    >
      {/* Popular badge */}
      {tier.badge && (
        <div className="mb-5 -mt-2 -mx-2">
          <span className="inline-block rounded-sm bg-amber px-3 py-1 font-mono text-[11px] font-bold tracking-widest text-void uppercase">
            {tier.badge}
          </span>
        </div>
      )}

      {/* Tier name */}
      <div className="mb-1 font-mono text-xs tracking-[0.18em] text-muted uppercase">
        {tier.name}
      </div>

      {/* Price */}
      <div className="mb-2 flex items-baseline gap-1">
        <span
          className={`font-display text-4xl font-black ${
            tier.highlighted ? "text-amber" : "text-cream"
          }`}
        >
          {tier.priceLabel}
        </span>
        {tier.price && (
          <span className="font-mono text-xs text-muted">/{tier.period}</span>
        )}
        {!tier.price && (
          <span className="font-mono text-xs text-muted">{tier.period}</span>
        )}
      </div>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-muted">
        {tier.description}
      </p>

      {/* CTA */}
      <Link
        href={tier.cta.href}
        className={`mb-8 block w-full rounded-sm py-3 text-center font-mono text-sm font-medium tracking-wide transition-all duration-200 ${
          tier.highlighted
            ? "bg-amber text-void hover:bg-amber-dim"
            : "border border-border bg-transparent text-cream-dim hover:border-muted hover:text-cream"
        }`}
      >
        {tier.cta.label}
      </Link>

      {/* Feature list */}
      <ul aria-label={`${tier.name} plan features`} className="space-y-3">
        {tier.features.map((feat) => (
          <li
            key={feat.text}
            className={`flex items-center gap-3 font-mono text-xs ${
              feat.included ? "text-cream-dim" : "text-muted/50"
            }`}
          >
            <CheckIcon included={feat.included} />
            <span>{feat.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ── Comparison Table ──────────────────────────────────────────────────────────
function ComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-16 overflow-x-auto"
    >
      <table
        className="w-full min-w-[600px] border-collapse text-sm"
        aria-label="Full feature comparison across plans"
      >
        <thead>
          <tr className="border-b border-border">
            <th className="pb-4 text-left font-mono text-xs tracking-widest text-muted uppercase">
              Feature
            </th>
            {["Free", "Pro", "Enterprise"].map((name) => (
              <th
                key={name}
                className={`pb-4 text-center font-mono text-xs tracking-widest uppercase ${
                  name === "Pro" ? "text-amber" : "text-muted"
                }`}
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonTable.features.map((row, i) => (
            <tr
              key={row.label}
              className={`border-b border-border/50 transition-colors hover:bg-raised ${
                i % 2 === 0 ? "" : "bg-surface/40"
              }`}
            >
              <td className="py-4 font-body text-cream-dim">{row.label}</td>
              {(["free", "pro", "enterprise"] as const).map((plan) => {
                const val = row[plan];
                return (
                  <td key={plan} className="py-4 text-center font-mono text-xs">
                    {typeof val === "boolean" ? (
                      <CheckIcon included={val} />
                    ) : (
                      <span className={plan === "pro" ? "text-amber" : "text-cream-dim"}>
                        {val}
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

// ── Pricing Component ─────────────────────────────────────────────────────────
export default function Pricing({
  showComparison = false,
}: {
  showComparison?: boolean;
}) {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });
  const [billingAnnual] = useState(false);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-section border-t border-border bg-surface"
    >
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="mb-14 text-center">
          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="eyebrow mb-4 block"
          >
            {pricing.eyebrow}
          </motion.span>
          <motion.h2
            id="pricing-heading"
            variants={fadeUp(0.08)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="font-display text-display-lg mb-4 font-black text-cream"
          >
            {pricing.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp(0.14)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mx-auto max-w-md text-sm leading-relaxed text-muted"
          >
            {pricing.subheadline}
          </motion.p>
        </div>

        {/* Tier cards */}
        <div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Pricing plans"
        >
          {pricing.tiers.map((tier, i) => (
            <div key={tier.name} role="listitem">
              <PricingCard tier={tier} delay={i * 0.08} />
            </div>
          ))}
        </div>

        {/* Comparison table — shown on dedicated pricing page */}
        {showComparison && <ComparisonTable />}
      </div>
    </section>
  );
}
