import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Design Tokens ──────────────────────────────────────────────────────
      colors: {
        // Backgrounds
        void: "#0D0D0D",
        surface: "#141414",
        raised: "#1C1C1C",
        border: "#272727",
        "border-subtle": "#1E1E1E",

        // Typography
        cream: "#F5F0E8",
        "cream-dim": "#C9C2B8",
        muted: "#6B6560",

        // Accent — Electric Amber
        amber: {
          DEFAULT: "#F5A623",
          dim: "#C17B10",
          glow: "rgba(245,166,35,0.15)",
          subtle: "rgba(245,166,35,0.08)",
        },
      },

      // ── Typography ─────────────────────────────────────────────────────────
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-space-mono)", "ui-monospace", "monospace"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem,8vw,7rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.25rem,5vw,4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(1.75rem,3.5vw,3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.25rem,2.5vw,2rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },

      // ── Spacing ────────────────────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "section": "7rem",
      },

      // ── Borders ────────────────────────────────────────────────────────────
      borderRadius: {
        "4xl": "2rem",
      },

      // ── Shadows / Glows ────────────────────────────────────────────────────
      boxShadow: {
        "amber-sm": "0 0 20px rgba(245,166,35,0.12)",
        "amber-md": "0 0 40px rgba(245,166,35,0.18)",
        "card": "0 1px 0 0 #272727, 0 0 0 1px #1C1C1C",
        "card-hover": "0 0 0 1px #3A3530, 0 4px 24px rgba(0,0,0,0.5)",
      },

      // ── Backgrounds ────────────────────────────────────────────────────────
      backgroundImage: {
        "grid-void": `linear-gradient(rgba(39,39,39,0.4) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(39,39,39,0.4) 1px, transparent 1px)`,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "amber-radial": "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,166,35,0.12) 0%, transparent 70%)",
      },

      // ── Animations ─────────────────────────────────────────────────────────
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-amber": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(245,166,35,0)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(245,166,35,0.25)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "shimmer": "shimmer 2.5s linear infinite",
        "pulse-amber": "pulse-amber 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
