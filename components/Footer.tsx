import Link from "next/link";
import { footer, siteMeta } from "@/data/content";

// ── Social icon mapping ───────────────────────────────────────────────────────
function SocialIcon({ icon, label }: { icon: string; label: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    "𝕏": (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.861L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    "in": (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    "gh": (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  };

  return iconMap[icon] || <span>{icon}</span>;
}

// ── Footer Component ──────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="border-t border-border bg-surface"
    >
      <div className="section-container py-16">
        {/* Top row: brand + columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-amber font-mono text-xs font-bold text-void">
                CS
              </span>
              <span className="font-display text-base font-semibold text-cream">
                {siteMeta.name}
              </span>
            </div>

            {/* Tagline */}
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted">
              {footer.tagline}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3" role="list" aria-label="Social media links">
              {footer.socials.map((s) => (
                <div key={s.label} role="listitem">
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted transition-colors hover:border-muted hover:text-cream"
                  >
                    <SocialIcon icon={s.icon} label={s.label} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                {col.heading}
              </h3>
              <ul className="space-y-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream-dim transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted">{footer.legal}</p>
          <p className="font-mono text-xs text-muted">
            Built with{" "}
            <span className="text-amber" aria-label="love">
              ♥
            </span>{" "}
            for marketers who hate writing case studies.
          </p>
        </div>
      </div>
    </footer>
  );
}
