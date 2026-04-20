import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { siteMeta } from "@/data/content";

// ── Page Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `Pricing — ${siteMeta.name}`,
  description:
    "Simple, transparent pricing for teams of every size. Start free, upgrade when you're ready. No contracts, cancel any time.",
  alternates: {
    canonical: `${siteMeta.url}/pricing`,
  },
  openGraph: {
    title: `Pricing — ${siteMeta.name}`,
    description:
      "Simple, transparent pricing. Free plan included. Pro at $49/mo. Enterprise with custom models and dedicated support.",
  },
};

// ── Page-level hero header ────────────────────────────────────────────────────
function PricingHero() {
  return (
    <section
      aria-label="Pricing page hero"
      className="relative overflow-hidden pb-0 pt-32"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-amber-glow"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 pb-0 text-center">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center justify-center gap-2 font-mono text-xs text-muted">
            <li>
              <Link href="/" className="transition-colors hover:text-cream">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-cream-dim" aria-current="page">
                Pricing
              </span>
            </li>
          </ol>
        </nav>

        {/* Eyebrow */}
        <span className="eyebrow mb-4 block">Pricing</span>

        {/* Heading */}
        <h1 className="font-display text-display-xl mx-auto mb-4 max-w-2xl font-black text-cream">
          One price. No surprises.{" "}
          <em className="italic text-amber" style={{ fontStyle: "italic" }}>
            Actually free to start.
          </em>
        </h1>

        {/* Sub */}
        <p className="mx-auto mb-12 max-w-lg text-base leading-relaxed text-muted">
          Every plan includes our core AI engine, PDF export, and your first 3 case
          studies at no cost. Upgrade only when the volume demands it.
        </p>

        {/* Trust badges */}
        <div
          className="mb-0 flex flex-wrap items-center justify-center gap-6"
          role="list"
          aria-label="Trust signals"
        >
          {[
            "14-day money-back guarantee",
            "No credit card for Free plan",
            "Cancel any time",
            "SOC 2 Type II compliant",
          ].map((badge) => (
            <div
              key={badge}
              role="listitem"
              className="flex items-center gap-2 font-mono text-xs text-muted"
            >
              <span className="text-amber" aria-hidden="true">✓</span>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pricing Page ──────────────────────────────────────────────────────────────
export default function PricingPage() {
  return (
    <>
      <Nav />

      <main id="main-content">
        {/* Skip nav */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-amber focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-void"
        >
          Skip to main content
        </a>

        {/* Page hero header */}
        <PricingHero />

        {/* Full pricing section — with comparison table enabled */}
        <Pricing showComparison={true} />

        {/* Enterprise callout */}
        <section
          aria-label="Enterprise contact"
          className="border-t border-border bg-raised py-16"
        >
          <div className="section-container">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex-1">
                <h2 className="font-display mb-2 text-2xl font-bold text-cream">
                  Need a custom plan?
                </h2>
                <p className="text-sm leading-relaxed text-muted">
                  Large team, custom AI models, or a unique workflow? Let&apos;s build something
                  that fits — white-glove onboarding included.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                <Link
                  href="mailto:sales@casestudy.ai"
                  className="btn-primary"
                >
                  Talk to Sales →
                </Link>
                <span className="font-mono text-[11px] text-muted">
                  Typical response in &lt; 2 hours
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
