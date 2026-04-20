"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/data/content";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

// ── Avatar placeholder (geometric, no external request) ───────────────────────
function Avatar({ seed, name }: { seed: string; name: string }) {
  // Generate a consistent color from the name
  const colors = [
    "#F5A623", "#8B6914", "#C17B10", "#7C4D0E", "#A67C3C",
  ];
  const colorIndex =
    name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % colors.length;
  const bg = colors[colorIndex];
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm font-mono text-xs font-bold text-void"
      style={{ backgroundColor: bg }}
      aria-label={`Avatar for ${name}`}
    >
      {initials}
    </div>
  );
}

// ── Quote Icon ─────────────────────────────────────────────────────────────────
function QuoteIcon() {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      className="mb-5 text-amber/40"
    >
      <path
        d="M0 20V12.364C0 9.394 0.697 6.727 2.09 4.364 3.515 2 5.636 0.394 8.455 0l1.09 1.818C7.697 2.515 6.242 3.697 5.364 5.273 4.515 6.818 4.09 8.5 4.09 10.318H7.273V20H0zm15.273 0V12.364c0-2.97.697-5.637 2.09-8C18.788 2 20.91.394 23.728 0l1.09 1.818c-1.848.697-3.303 1.88-4.18 3.455-.85 1.545-1.274 3.227-1.274 5.045h3.182V20h-7.273z"
        fill="currentColor"
      />
    </svg>
  );
}

// ── Testimonial Card ──────────────────────────────────────────────────────────
function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatarSeed,
  delay,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarSeed: string;
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
      className="testimonial-card flex flex-col"
    >
      <QuoteIcon />

      {/* Quote */}
      <blockquote className="flex-1">
        <p className="font-display text-base italic leading-relaxed text-cream-dim">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      {/* Attribution */}
      <footer className="mt-6 flex items-center gap-3 border-t border-border pt-4">
        <Avatar seed={avatarSeed} name={name} />
        <div>
          <cite className="block font-body text-sm font-semibold not-italic text-cream">
            {name}
          </cite>
          <span className="font-mono text-[11px] text-muted">
            {role} · {company}
          </span>
        </div>
      </footer>
    </motion.li>
  );
}

// ── Testimonials Component ────────────────────────────────────────────────────
export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-section border-t border-border"
    >
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="mb-14 max-w-xl">
          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="eyebrow mb-4 block"
          >
            {testimonials.eyebrow}
          </motion.span>
          <motion.h2
            id="testimonials-heading"
            variants={fadeUp(0.08)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="font-display text-display-lg font-black text-cream"
          >
            {testimonials.headline}
          </motion.h2>
        </div>

        {/* Cards grid */}
        <ul
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Customer testimonials"
        >
          {testimonials.items.map((t, i) => (
            <TestimonialCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              role={t.role}
              company={t.company}
              avatarSeed={t.avatarSeed}
              delay={i * 0.1}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
