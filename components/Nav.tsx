"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteMeta } from "@/data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-void/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="section-container flex h-16 items-center justify-between"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            aria-label={`${siteMeta.name} — home`}
          >
            {/* Mark */}
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-sm bg-amber font-mono text-xs font-bold text-void"
            >
              CS
            </span>
            <span className="font-display text-base font-semibold text-cream">
              {siteMeta.name}
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-8 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-mono text-xs tracking-widest text-muted uppercase transition-colors duration-200 hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#login"
              className="font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:text-cream"
            >
              Log in
            </Link>
            <Link href="#signup" className="btn-primary py-2">
              Start Free
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-sm md:hidden"
          >
            <span
              className={`block h-px w-5 bg-cream-dim transition-all duration-300 ${
                mobileOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-cream-dim transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-cream-dim transition-all duration-300 ${
                mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            aria-modal="true"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-40 border-b border-border bg-void/95 backdrop-blur-md md:hidden"
          >
            <div className="section-container flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-sm px-4 py-3 font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:bg-raised hover:text-cream"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <Link
                  href="#login"
                  onClick={() => setMobileOpen(false)}
                  className="btn-secondary justify-center text-center"
                >
                  Log in
                </Link>
                <Link
                  href="#signup"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary justify-center text-center"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
