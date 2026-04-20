import type { Metadata, Viewport } from "next";
import { Playfair_Display, Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteMeta } from "@/data/content";

// ── Google Fonts ──────────────────────────────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// ── Site Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: `${siteMeta.name} — ${siteMeta.tagline}`,
    template: `%s | ${siteMeta.name}`,
  },
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  keywords: [
    "case study generator",
    "AI case studies",
    "B2B marketing",
    "customer success stories",
    "sales enablement",
    "content marketing",
    "AI writing tool",
    "marketing automation",
  ],
  authors: [{ name: siteMeta.name }],
  creator: siteMeta.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMeta.url,
    siteName: siteMeta.name,
    title: `${siteMeta.name} — ${siteMeta.tagline}`,
    description: siteMeta.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteMeta.name} — AI-powered case study generation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} — ${siteMeta.tagline}`,
    description: siteMeta.description,
    creator: siteMeta.twitterHandle,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// ── Root Layout ────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${spaceMono.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-void antialiased">{children}</body>
    </html>
  );
}
