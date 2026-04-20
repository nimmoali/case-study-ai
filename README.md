# Case Study AI — Marketing Landing Page

> **Turn Customer Wins Into Revenue-Generating Case Studies — In Minutes.**

A production-grade marketing site built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Dark editorial aesthetic with Framer Motion scroll animations.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 with custom design tokens |
| Animations | Framer Motion v11 |
| Fonts | Playfair Display · Space Mono · DM Sans (Google Fonts via `next/font`) |
| Rendering | SSG (all static, no backend) |

---

## Project Structure

```
case-study-ai/
├── app/
│   ├── layout.tsx          ← Root layout, fonts, global SEO metadata
│   ├── globals.css         ← Tailwind base + custom utility classes
│   ├── page.tsx            ← Landing page (/)
│   └── pricing/
│       └── page.tsx        ← Dedicated pricing page (/pricing)
│
├── components/
│   ├── Nav.tsx             ← Sticky nav with mobile drawer
│   ├── Hero.tsx            ← Hero with editor UI mock
│   ├── SocialProof.tsx     ← Stats + logo strip
│   ├── Features.tsx        ← 6-feature grid
│   ├── HowItWorks.tsx      ← 3-step flow + terminal mock
│   ├── Testimonials.tsx    ← 3 quote cards
│   ├── Pricing.tsx         ← Tier cards + full comparison table
│   ├── FAQ.tsx             ← Animated accordion (5 questions)
│   ├── FinalCTA.tsx        ← Email capture section
│   └── Footer.tsx          ← Multi-column footer + socials
│
├── data/
│   └── content.ts          ← ALL copy and mock data (single source of truth)
│
├── tailwind.config.ts      ← Custom design tokens
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Local Development

### Prerequisites

- Node.js 18.17+ (LTS recommended)
- npm, yarn, pnpm, or bun

### Install & Run

```bash
# 1. Navigate to the project
cd case-study-ai

# 2. Install dependencies
npm install
# or: yarn / pnpm install / bun install

# 3. Start dev server
npm run dev
# → http://localhost:3000

# Type-check without building
npm run type-check
```

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start dev server with Fast Refresh |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint check |
| `npm run type-check` | TypeScript check (no emit) |

---

## Deploy to Vercel

### One-click (recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo — Vercel auto-detects Next.js
4. Click **Deploy** — done in ~60 seconds

### Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Inside the project folder
vercel

# For production
vercel --prod
```

No environment variables are required — the site is fully static.

---

## Editing Copy

**All text lives in one file: [`data/content.ts`](./data/content.ts).**

You never need to touch a component to update marketing copy.

### Examples

**Change the hero headline:**
```ts
// data/content.ts
export const hero = {
  headline: "Your new headline here.",
  // ...
};
```

**Add a pricing feature:**
```ts
export const pricing = {
  tiers: [
    {
      name: "Pro",
      features: [
        { text: "New feature name", included: true }, // ← add here
        // ...
      ],
    },
  ],
};
```

**Add an FAQ question:**
```ts
export const faq = {
  items: [
    // ... existing items
    {
      question: "Your new question?",
      answer: "Your answer here.",
    },
  ],
};
```

**Update pricing:**
```ts
export const pricing = {
  tiers: [
    { name: "Pro", price: 59, priceLabel: "$59", /* ... */ },
  ],
};
```

---

## Design Tokens

Customise colors, fonts, and spacing in [`tailwind.config.ts`](./tailwind.config.ts).

Key tokens:

| Token | Value | Usage |
|---|---|---|
| `bg-void` | `#0D0D0D` | Page background |
| `bg-surface` | `#141414` | Card/section backgrounds |
| `bg-raised` | `#1C1C1C` | Elevated elements |
| `text-cream` | `#F5F0E8` | Primary text |
| `text-muted` | `#6B6560` | Secondary/caption text |
| `amber` | `#F5A623` | Accent — CTAs, highlights |
| `font-display` | Playfair Display | All headings |
| `font-mono` | Space Mono | Labels, tags, code |
| `font-body` | DM Sans | Body copy |

---

## Accessibility

- Semantic HTML throughout (`main`, `nav`, `section`, `article`, `footer`)
- All interactive elements have ARIA labels
- Skip-to-content link on every page
- Focus ring styled to amber for brand consistency
- Accordion uses `aria-expanded` / `aria-controls` / `role="region"`
- Pricing table uses `aria-label` and proper `<th>` scope
- Color contrast meets WCAG AA for all text sizes

---

## Performance Notes

- Fonts loaded via `next/font/google` — zero layout shift, self-hosted by Vercel
- All animations use CSS `transform` and `opacity` — GPU composited, no layout thrash
- `framer-motion` tree-shaken via `optimizePackageImports` in `next.config.ts`
- Images use `next/image` with `remotePatterns` allowlist
- No analytics or third-party scripts included — add your own as needed

---

## Adding a Real Backend

The site is intentionally static. To wire up real functionality:

1. **Email capture** — Replace the `handleSubmit` stub in `FinalCTA.tsx` with a `fetch` call to your API (Resend, ConvertKit, etc.)
2. **Auth** — Add [NextAuth.js](https://next-auth.js.org/) or [Clerk](https://clerk.com/)
3. **Payments** — Add [Stripe](https://stripe.com/) Checkout links to the pricing CTAs
4. **CMS** — Pull `content.ts` data from Contentful, Sanity, or any headless CMS

---

## License

MIT — free to use, modify, and deploy.
