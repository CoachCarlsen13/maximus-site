// Maximus AI Strategic Advisory — Root Layout
// Created: 2026-03-17
// Updated: 2026-03-27 — Added JSON-LD Organization + WebSite schema for AEO/GEO visibility
import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maximus AI Strategic Advisory",
  alternateName: "Maximus AI",
  url: "https://maximusintel.com",
  logo: "https://maximusintel.com/maximus-logo.png",
  description:
    "Enterprise-grade competitive intelligence for small and mid-sized businesses. The McKinsey for SMBs — AI-powered market intelligence delivered in 48 hours.",
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Joel Winn",
    jobTitle: "CEO and Founder",
  },
  areaServed: "US",
  serviceType: [
    "Competitive Intelligence",
    "AI Strategic Advisory",
    "Business Intelligence",
    "AI Operational Audit",
  ],
  slogan: "Everyone else made you AI promises. We built the system that actually delivers.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://maximusintel.com/free-report",
  },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Maximus AI Strategic Advisory",
  url: "https://maximusintel.com",
  description:
    "Competitive intelligence and AI strategic advisory for small and mid-sized businesses.",
  publisher: {
    "@type": "Organization",
    name: "Maximus AI Strategic Advisory",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://maximusintel.com/free-report",
    },
    "query-input": "required name=search_term_string",
  },
};

// Display font: Cormorant Garamond — ultra-premium serif, signals serious advisory (not AI startup)
const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body font: Plus Jakarta Sans — modern, refined, not the cliché Inter/Space Grotesk
const body = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maximus AI Strategic Advisory",
    template: "%s | Maximus AI",
  },
  description:
    "Everyone else made you AI promises. We built the system that actually delivers. Self-learning. Self-improving. Self-governing. The AI system that gets smarter while your competition sleeps.",
  keywords: [
    "competitive intelligence",
    "AI consulting",
    "business intelligence",
    "strategic advisory",
    "AI strategy",
    "small business AI",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Maximus AI Strategic Advisory",
    title: "Maximus AI Strategic Advisory",
    description:
      "Enterprise-grade competitive intelligence, powered by AI, built for your business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximus AI Strategic Advisory",
    description:
      "Enterprise-grade competitive intelligence, powered by AI, built for your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} antialiased`}>{children}</body>
    </html>
  );
}
