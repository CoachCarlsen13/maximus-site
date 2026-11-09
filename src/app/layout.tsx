// Maximus AI Strategic Advisory — Root Layout
// Created: 2026-03-17
// Updated: 2026-03-27 — Added JSON-LD Organization + WebSite schema for AEO/GEO visibility
import type { Metadata } from "next";
import localFont from "next/font/local";
import RevealInit from "../components/RevealInit";
import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maximus AI Strategic Advisory",
  alternateName: "Maximus AI",
  url: "https://maximusintel.com",
  logo: "https://maximusintel.com/brand/shield-ai.svg",
  description:
    "Enterprise-grade competitive intelligence and AI strategy for small and mid-sized businesses. Sourced findings, reviewed by a human, delivered in 48 hours.",
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Joel Winns",
    jobTitle: "CEO and Founder",
  },
  areaServed: "US",
  serviceType: [
    "Competitive Intelligence",
    "AI Strategic Advisory",
    "Business Intelligence",
    "AI Operational Audit",
  ],
  slogan: "Designed to Give Your Business the Ultimate Competitive Edge.",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://maximusintel.com/#localbusiness",
  name: "Maximus AI Strategic Advisory",
  image: "https://maximusintel.com/brand/shield-ai.svg",
  url: "https://maximusintel.com",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jupiter",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.9342,
    longitude: -80.0942,
  },
  areaServed: [
    { "@type": "State", name: "Florida" },
    { "@type": "Country", name: "United States" },
  ],
  priceRange: "$$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Strategic Advisory",
  provider: {
    "@type": "Organization",
    name: "Maximus AI Strategic Advisory",
    url: "https://maximusintel.com",
  },
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Maximus AI Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Competitive Edge Report",
          description: "AI-powered competitive intelligence report analyzing market position, AI visibility, and growth opportunities.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Operational Audit",
          description: "Deep analysis of business operations to identify AI automation opportunities with ROI projections.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strategic Intelligence Bible",
          description: "Comprehensive market intelligence dossier with competitive analysis, opportunity mapping, and strategic recommendations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Visibility Optimization (AEO)",
          description: "Optimize your business presence across AI answer engines including ChatGPT, Perplexity, and Google AI Overviews.",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI strategic advisory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI strategic advisory combines competitive intelligence, market analysis and operational auditing, produced with AI and reviewed by people. Maximus AI brings the kind of strategy work large companies have long bought from consulting firms within reach of small and mid-sized businesses.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Competitive Edge Report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Competitive Edge Report is a free, AI-generated competitive intelligence analysis that scores your digital visibility, maps your competitive landscape, evaluates your AI readiness, and provides a prioritized roadmap for growth. It typically takes 48 hours to generate.",
      },
    },
    {
      "@type": "Question",
      name: "What is AEO (Answer Engine Optimization)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AEO is the practice of optimizing your business's digital presence so AI systems like ChatGPT, Perplexity, and Google AI Overviews can find, understand, and recommend your business. As more consumers use AI for discovery, AEO is becoming as important as traditional SEO.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Maximus AI cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Competitive Edge Report is completely free with no sales call required. Paid services range from one-time operational audits ($3,000-$7,500) to ongoing strategic advisory retainers. We believe in demonstrating value before asking for commitment.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://maximusintel.com" },
    { "@type": "ListItem", position: 2, name: "Free Report", item: "https://maximusintel.com/free-report" },
    { "@type": "ListItem", position: 3, name: "Services", item: "https://maximusintel.com/services" },
    { "@type": "ListItem", position: 4, name: "Blog", item: "https://maximusintel.com/blog" },
    { "@type": "ListItem", position: 5, name: "About", item: "https://maximusintel.com/about" },
  ],
};

// Brand type system (maximus-brand-identity v1.3): Sora headlines (Clash Display fallback),
// DM Sans body, JetBrains Mono data/labels, Playfair Display for the single hero title.
// Self-hosted (SIL Open Font License 1.1, see src/fonts/OFL-1.1.txt): no build-time or
// page-load dependency on Google Fonts.
const head = localFont({ src: "../fonts/sora-latin-wght-normal.woff2", variable: "--font-head", weight: "100 800", display: "swap" });
const bodyFont = localFont({ src: "../fonts/dm-sans-latin-wght-normal.woff2", variable: "--font-body", weight: "100 1000", display: "swap" });
const data = localFont({ src: "../fonts/jetbrains-mono-latin-wght-normal.woff2", variable: "--font-data", weight: "100 800", display: "swap" });
const serif = localFont({
  src: [
    { path: "../fonts/playfair-display-latin-wght-normal.woff2", style: "normal" },
    { path: "../fonts/playfair-display-latin-wght-italic.woff2", style: "italic" },
  ],
  variable: "--font-serif",
  weight: "400 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maximus AI Strategic Advisory",
    template: "%s | Maximus AI",
  },
  description:
    "Enterprise-grade strategy, built for small and mid-size businesses. Competitive intelligence with every finding sourced and reviewed, delivered in 48 hours. Start with a free Competitive Edge Report.",
  keywords: [
    "competitive intelligence",
    "AI consulting",
    "business intelligence",
    "strategic advisory",
    "AI strategy",
    "small business AI",
  ],
  metadataBase: new URL("https://maximusintel.com"),
  icons: { icon: "/brand/shield.svg" },
  openGraph: {
    images: [{ url: "/media/og-maximus.jpg", width: 1200, height: 630, alt: "Maximus AI: Strategic Business Intelligence" }],
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
    <html lang="en" className={`${head.variable} ${bodyFont.variable} ${data.variable} ${serif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] btn btn-primary px-4 py-2 text-sm">Skip to content</a>
        <RevealInit />
        {children}
      </body>
    </html>
  );
}
