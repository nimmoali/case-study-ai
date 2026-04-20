"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { faq } from "@/data/content";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  },
});

// ── Accordion Item ────────────────────────────────────────────────────────────
function AccordionItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const id = `faq-answer-${index}`;
  const buttonId = `faq-question-${index}`;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp(index * 0.06)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="border-b border-border"
    >
      {/* Question button */}
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
        className="flex w-full items-start gap-4 py-5 text-left transition-colors hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
      >
        {/* Index */}
        <span
          className="mt-0.5 shrink-0 font-mono text-[11px] text-muted"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question text */}
        <span className="flex-1 font-display text-base font-semibold text-cream-dim transition-colors group-hover:text-cream sm:text-lg">
          {question}
        </span>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-1 shrink-0 font-mono text-lg leading-none text-amber"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-9 text-sm leading-relaxed text-muted">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── FAQ Component ─────────────────────────────────────────────────────────────
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  const handleToggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-section border-t border-border"
    >
      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          {/* Left: header */}
          <div ref={headerRef}>
            <motion.span
              variants={fadeUp(0)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="eyebrow mb-4 block"
            >
              {faq.eyebrow}
            </motion.span>
            <motion.h2
              id="faq-heading"
              variants={fadeUp(0.08)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="font-display text-display-lg font-black text-cream"
            >
              {faq.headline}
            </motion.h2>

            <motion.p
              variants={fadeUp(0.14)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="mt-4 text-sm text-muted"
            >
              Still have questions?{" "}
              <a
                href="mailto:support@casestudy.ai"
                className="text-amber underline underline-offset-2 transition-colors hover:text-amber-dim"
              >
                Email our team
              </a>
            </motion.p>
          </div>

          {/* Right: accordion */}
          <div>
            <dl>
              {faq.items.map((item, i) => (
                <AccordionItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => handleToggle(i)}
                />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
