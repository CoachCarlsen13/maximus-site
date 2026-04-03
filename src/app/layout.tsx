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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://maximusintel.com/#localbusiness",
  name: "Maximus AI Strategic Advisory",
  image: "https://maximusintel.com/maximus-logo.png",
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
        text: "AI strategic advisory combines competitive intelligence, market analysis, and operational auditing powered by AI systems. Maximus AI delivers enterprise-grade intelligence that was previously only available to Fortune 500 companies through firms like McKinsey or BCG, now accessible to small and mid-sized businesses.",
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
      <body className={`${display.variable} ${body.variable} antialiased`}>{children}</body>
    </html>
  );
}
