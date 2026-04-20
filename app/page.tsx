import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { siteMeta } from "@/data/content";

// ── Page-level metadata override ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: `${siteMeta.name} — ${siteMeta.tagline}`,
  description: siteMeta.description,
  alternates: {
    canonical: siteMeta.url,
  },
};

// ── Landing Page ──────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Nav />

      <main id="main-content">
        {/* Skip to main content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-amber focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-void"
        >
          Skip to main content
        </a>

        {/* 1. Hero */}
        <Hero />

        {/* 2. Social proof / logos */}
        <SocialProof />

        {/* 3. Features grid */}
        <Features />

        {/* 4. How it works */}
        <HowItWorks />

        {/* 5. Testimonials */}
        <Testimonials />

        {/* 6. Pricing tiers (without full comparison table — that lives on /pricing) */}
        <Pricing showComparison={false} />

        {/* 7. FAQ accordion */}
        <FAQ />

        {/* 8. Final CTA + email capture */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
