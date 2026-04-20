"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { howItWorks } from "@/data/content";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

// ── Step Card ─────────────────────────────────────────────────────────────────
function Step({
  number,
  title,
  description,
  delay,
  isLast,
}: {
  number: string;
  title: string;
  description: string;
  delay: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="relative flex gap-6" ref={ref}>
      {/* Number + connector line column */}
      <div className="flex flex-col items-center">
        {/* Number badge */}
        <motion.div
          variants={fadeUp(delay)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-border bg-surface"
        >
          <span className="font-mono text-xs font-bold text-amber">{number}</span>
          {/* Amber glow behind */}
          <span
            className="pointer-events-none absolute inset-0 rounded-sm bg-amber/5"
            aria-hidden="true"
          />
        </motion.div>

        {/* Vertical connector line (not on last item) */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.3, ease: "easeOut" }}
            className="mt-2 flex-1"
            aria-hidden="true"
          >
            <div className="mx-auto h-full w-px bg-gradient-to-b from-border to-transparent" />
          </motion.div>
        )}
      </div>

      {/* Content */}
      <motion.div
        variants={fadeUp(delay + 0.08)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="pb-12"
      >
        <h3 className="font-display mb-2 text-xl font-semibold text-cream">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>

        {/* Decorative input/output hint per step */}
        {number === "01" && (
          <div className="mt-4 flex flex-wrap gap-2" aria-hidden="true">
            {[".txt", ".mp3", ".pdf", ".docx"].map((fmt) => (
              <span
                key={fmt}
                className="rounded-sm border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted"
              >
                {fmt}
              </span>
            ))}
          </div>
        )}
        {number === "02" && (
          <div
            className="mt-4 flex items-center gap-2 font-mono text-xs text-muted"
            aria-hidden="true"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
            <span className="text-amber">Processing interview…</span>
            <span className="text-muted">~58s remaining</span>
          </div>
        )}
        {number === "03" && (
          <div className="mt-4 flex gap-2" aria-hidden="true">
            {["Export PDF", "Publish"].map((a) => (
              <span
                key={a}
                className="rounded-sm bg-amber/10 px-2 py-1 font-mono text-[10px] text-amber"
              >
                {a}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ── HowItWorks Component ──────────────────────────────────────────────────────
export default function HowItWorks() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      aria-labelledby="hiw-heading"
      className="py-section border-t border-border bg-surface"
    >
      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: header + steps */}
          <div>
            <div ref={headerRef} className="mb-12">
              <motion.span
                variants={fadeUp(0)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="eyebrow mb-4 block"
              >
                {howItWorks.eyebrow}
              </motion.span>

              <motion.h2
                id="hiw-heading"
                variants={fadeUp(0.08)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="font-display text-display-lg font-black text-cream"
              >
                {howItWorks.headline}
              </motion.h2>
            </div>

            {/* Steps */}
            <ol aria-label="How Case Study AI works" className="list-none">
              {howItWorks.steps.map((step, i) => (
                <li key={step.number}>
                  <Step
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    delay={i * 0.1}
                    isLast={i === howItWorks.steps.length - 1}
                  />
                </li>
              ))}
            </ol>
          </div>

          {/* Right: decorative terminal */}
          <div className="flex items-center">
            <TerminalMock />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Decorative Terminal Preview ───────────────────────────────────────────────
function TerminalMock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const lines = [
    { text: "$ casestudy generate --input interview.txt", color: "text-cream-dim" },
    { text: "  ✓ Parsing transcript (2,847 words)…", color: "text-muted" },
    { text: "  ✓ Extracting metrics and proof points…", color: "text-muted" },
    { text: "  ✓ Applying brand voice profile…", color: "text-muted" },
    { text: "  ✓ Structuring narrative arc…", color: "text-muted" },
    { text: "  ↳ Case study generated in 0:58", color: "text-amber" },
    { text: "", color: "" },
    { text: "  OUTPUT: meridian-labs-case-study.pdf", color: "text-cream" },
    { text: "  WORDS: 847  SECTIONS: 6  METRICS: 4", color: "text-muted" },
    { text: "", color: "" },
    { text: "  Ready for review. Open in editor? [y/N]", color: "text-amber" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 32 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 32 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="w-full overflow-hidden rounded-sm border border-border bg-void shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
      aria-hidden="true"
    >
      {/* Terminal chrome */}
      <div className="flex h-9 items-center gap-2 border-b border-border bg-raised px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
        <span className="ml-4 font-mono text-[10px] text-muted">
          bash — case-study-ai
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
            className={`font-mono text-xs leading-6 ${line.color}`}
          >
            {line.text || "\u00A0"}
          </motion.p>
        ))}

        {/* Blinking cursor */}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1.1, ease: "steps(1)" }}
          className="inline-block h-4 w-2 bg-amber font-mono text-xs"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}
