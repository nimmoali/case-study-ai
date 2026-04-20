// ─────────────────────────────────────────────────────────────────────────────
// Case Study AI — All Site Copy & Mock Data
// Edit this file to update any text, pricing, or metadata without touching
// component files.
// ─────────────────────────────────────────────────────────────────────────────

// ── Site Meta ────────────────────────────────────────────────────────────────
export const siteMeta = {
  name: "Case Study AI",
  tagline: "Turn Customer Wins Into Revenue-Generating Case Studies — In Minutes",
  description:
    "Case Study AI transforms raw customer interviews and data into polished, publish-ready case studies using advanced AI. Built for B2B marketers, agencies, and consultants who need compelling proof at scale.",
  url: "https://casestudy.ai",
  twitterHandle: "@casestudyai",
};

// ── Navigation ────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

// ── Hero ─────────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "AI-Powered Case Studies",
  headline: "Your best customers already wrote your best sales content.",
  subheadline:
    "Case Study AI turns a 10-minute customer interview into a publication-ready case study — complete, on-brand, and persuasive — before your next meeting.",
  ctaPrimary: { label: "Start Free Trial", href: "#signup" },
  ctaSecondary: { label: "See Demo", href: "#demo" },
  disclaimer: "No credit card required · Free plan includes 3 case studies/mo",
};

// ── Social Proof Bar ─────────────────────────────────────────────────────────
export const socialProof = {
  headline: "Trusted by fast-moving teams worldwide",
  stats: [
    { value: "500+", label: "Teams active" },
    { value: "12,000+", label: "Case studies generated" },
    { value: "4.9 / 5", label: "Average rating" },
    { value: "83%", label: "Faster than manual writing" },
  ],
  logos: [
    { name: "Meridian Labs", initial: "ML" },
    { name: "Fosca Agency", initial: "FA" },
    { name: "Vanta Growth", initial: "VG" },
    { name: "Ouroboros Inc", initial: "OI" },
    { name: "Blueshift", initial: "BL" },
    { name: "Plume Studio", initial: "PS" },
  ],
};

// ── Features ──────────────────────────────────────────────────────────────────
export const features = {
  eyebrow: "Everything you need",
  headline: "From raw interview to ready-to-publish — without the grind.",
  items: [
    {
      icon: "✦",
      title: "AI-Powered Drafting",
      description:
        "Paste a transcript or upload a recording. Our model structures, writes, and polishes a full case study in under 60 seconds.",
    },
    {
      icon: "◈",
      title: "Brand Voice Sync",
      description:
        "Train the AI on your tone guidelines and past content. Every output reads like your team wrote it on their best day.",
    },
    {
      icon: "⬡",
      title: "Smart Templates",
      description:
        "Choose from 40+ industry-specific frameworks — SaaS, professional services, e-commerce, healthcare — or build your own.",
    },
    {
      icon: "⊞",
      title: "One-Click Export",
      description:
        "Ship to PDF, DOCX, HTML, or push directly to HubSpot, Notion, or Webflow. Your workflow, uninterrupted.",
    },
    {
      icon: "◎",
      title: "Team Collaboration",
      description:
        "Real-time co-editing, inline comments, and a structured approval flow — so legal, sales, and marketing stay aligned.",
    },
    {
      icon: "⊿",
      title: "Performance Analytics",
      description:
        "Track views, time-on-page, and pipeline influence. Know which stories close deals and double down on what works.",
    },
  ],
};

// ── How It Works ──────────────────────────────────────────────────────────────
export const howItWorks = {
  eyebrow: "Three steps to done",
  headline: "Serious output. Minimal effort.",
  steps: [
    {
      number: "01",
      title: "Upload your source material",
      description:
        "Drop in a customer interview transcript, audio file, survey responses, or a rough notes doc. Any format works.",
    },
    {
      number: "02",
      title: "AI drafts your case study",
      description:
        "Our model structures the narrative, extracts key metrics, writes compelling copy, and applies your brand voice — instantly.",
    },
    {
      number: "03",
      title: "Review, refine, and publish",
      description:
        "Make any edits in our rich-text editor, get team sign-off, then export or publish in one click. Done.",
    },
  ],
};

// ── Testimonials ──────────────────────────────────────────────────────────────
export const testimonials = {
  eyebrow: "From the people using it",
  headline: "Real teams. Real results.",
  items: [
    {
      quote:
        "We went from a 3-week case study turnaround to same-day. Our sales team now has fresh proof points every week instead of every quarter. The ROI was obvious by day two.",
      name: "Sarah Chen",
      role: "VP of Marketing",
      company: "Meridian Labs",
      avatarSeed: "sarah-chen",
    },
    {
      quote:
        "As an agency we produce case studies for eight different clients. Case Study AI cut our production time by 80% and the quality actually went up — clients stopped asking for revisions.",
      name: "Marcus Rodriguez",
      role: "Founder & Creative Director",
      company: "Fosca Agency",
      avatarSeed: "marcus-rodriguez",
    },
    {
      quote:
        "I was skeptical about AI writing. Then I saw it nail our finicky brand voice on the first try. We've published 34 case studies in the past two months. That used to be a year of work.",
      name: "Priya Patel",
      role: "Head of Content",
      company: "Vanta Growth",
      avatarSeed: "priya-patel",
    },
  ],
};

// ── Pricing ───────────────────────────────────────────────────────────────────
export const pricing = {
  eyebrow: "Pricing",
  headline: "Start free. Scale when you need to.",
  subheadline:
    "No hidden fees. Cancel any time. Every plan includes our core AI engine.",
  tiers: [
    {
      name: "Free",
      price: null,
      priceLabel: "$0",
      period: "forever",
      description: "Perfect for trying it out or solo consultants with occasional needs.",
      cta: { label: "Get Started Free", href: "#signup" },
      highlighted: false,
      features: [
        { text: "3 case studies / month", included: true },
        { text: "Basic AI generation", included: true },
        { text: "PDF export", included: true },
        { text: "1 team seat", included: true },
        { text: "Community support", included: true },
        { text: "Brand voice training", included: false },
        { text: "DOCX + HTML export", included: false },
        { text: "Analytics dashboard", included: false },
        { text: "Priority support", included: false },
      ],
    },
    {
      name: "Pro",
      price: 49,
      priceLabel: "$49",
      period: "per month",
      description: "For marketing teams and agencies shipping case studies regularly.",
      cta: { label: "Start Free Trial", href: "#signup" },
      highlighted: true,
      badge: "Most Popular",
      features: [
        { text: "Unlimited case studies", included: true },
        { text: "Advanced AI generation", included: true },
        { text: "PDF + DOCX + HTML export", included: true },
        { text: "5 team seats", included: true },
        { text: "Email support", included: true },
        { text: "Brand voice training", included: true },
        { text: "40+ smart templates", included: true },
        { text: "Analytics dashboard", included: true },
        { text: "Priority support", included: false },
      ],
    },
    {
      name: "Enterprise",
      price: null,
      priceLabel: "Custom",
      period: "contact us",
      description: "Custom models, SLAs, and dedicated support for high-volume operations.",
      cta: { label: "Talk to Sales", href: "mailto:sales@casestudy.ai" },
      highlighted: false,
      features: [
        { text: "Unlimited case studies", included: true },
        { text: "Custom AI models", included: true },
        { text: "All formats + API access", included: true },
        { text: "Unlimited team seats", included: true },
        { text: "Dedicated CSM", included: true },
        { text: "Brand voice training", included: true },
        { text: "Custom templates", included: true },
        { text: "Advanced analytics + reporting", included: true },
        { text: "SSO + audit logs", included: true },
      ],
    },
  ],
};

// ── Comparison Table ──────────────────────────────────────────────────────────
export const comparisonTable = {
  features: [
    {
      label: "Case studies / month",
      free: "3",
      pro: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      label: "AI generation",
      free: "Basic",
      pro: "Advanced",
      enterprise: "Custom models",
    },
    {
      label: "Export formats",
      free: "PDF",
      pro: "PDF, DOCX, HTML",
      enterprise: "All + API",
    },
    {
      label: "Team seats",
      free: "1",
      pro: "5",
      enterprise: "Unlimited",
    },
    {
      label: "Brand voice training",
      free: false,
      pro: true,
      enterprise: true,
    },
    {
      label: "Analytics dashboard",
      free: false,
      pro: true,
      enterprise: true,
    },
    {
      label: "Support",
      free: "Community",
      pro: "Email",
      enterprise: "Dedicated CSM",
    },
    {
      label: "SSO + audit logs",
      free: false,
      pro: false,
      enterprise: true,
    },
  ],
};

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const faq = {
  eyebrow: "FAQ",
  headline: "Questions we actually get asked.",
  items: [
    {
      question: "How does Case Study AI generate content?",
      answer:
        "You provide source material — a customer interview transcript, audio file, survey data, or rough notes. Our fine-tuned model extracts the narrative arc, key metrics, and proof points, then writes a structured case study following your chosen template. The entire process takes under 60 seconds.",
    },
    {
      question: "Can I train it on my brand voice?",
      answer:
        "Yes. On Pro and Enterprise plans you can upload your brand style guide, past case studies, and tone examples. The AI uses these as a style reference so every output reads like your team — not generic AI copy. Most customers say outputs require fewer than two rounds of edits.",
    },
    {
      question: "What file formats does Case Study AI export to?",
      answer:
        "Free plan exports to PDF. Pro adds DOCX and HTML. Enterprise adds API access so you can push case studies directly into your CMS, design system, or internal tools. We also have native integrations with HubSpot, Notion, and Webflow.",
    },
    {
      question: "Is my customer data safe?",
      answer:
        "Your data is encrypted in transit and at rest. We never use your content to train shared models. Enterprise customers can opt for a dedicated processing environment. We are SOC 2 Type II compliant and GDPR-ready, with a DPA available on request.",
    },
    {
      question: "Can I cancel or downgrade at any time?",
      answer:
        "Absolutely. There are no lock-in contracts on Free or Pro. Cancel from your account dashboard in under 30 seconds. If you cancel, you keep access until the end of your current billing period. We offer a 14-day money-back guarantee on Pro, no questions asked.",
    },
  ],
};

// ── Final CTA ─────────────────────────────────────────────────────────────────
export const finalCta = {
  eyebrow: "Ready to ship?",
  headline: "Your next case study is 60 seconds away.",
  subheadline:
    "Join 500+ teams turning customer success into pipeline-generating content — without the manual grind.",
  ctaPrimary: { label: "Start Free — No Card Needed", href: "#signup" },
  ctaSecondary: { label: "Schedule a Demo", href: "#demo" },
  emailPlaceholder: "Enter your work email",
};

// ── Footer ────────────────────────────────────────────────────────────────────
export const footer = {
  tagline: "Turn customer wins into revenue.",
  columns: [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Changelog", href: "#" },
        { label: "Roadmap", href: "#" },
      ],
    },
    {
      heading: "Use Cases",
      links: [
        { label: "SaaS Companies", href: "#" },
        { label: "Marketing Agencies", href: "#" },
        { label: "Consultants", href: "#" },
        { label: "Enterprise Sales", href: "#" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "DPA", href: "#" },
      ],
    },
  ],
  socials: [
    { label: "Twitter / X", href: "https://twitter.com/casestudyai", icon: "𝕏" },
    { label: "LinkedIn", href: "https://linkedin.com/company/casestudyai", icon: "in" },
    { label: "GitHub", href: "https://github.com/casestudyai", icon: "gh" },
  ],
  legal: `© ${new Date().getFullYear()} Case Study AI, Inc. All rights reserved.`,
};
