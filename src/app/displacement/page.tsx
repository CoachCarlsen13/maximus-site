// AI Displacement Tracker — Live Dual Counter Page
// Created: 2026-04-03
// Purpose: Public page showing real-time AI investment vs AI job displacement data.
//          Two animated counters at top, timeline feed below, filter tabs.
//          Pulls from Railway API: GET /api/displacement/tracker/dashboard
import type { Metadata } from "next";
import DisplacementTracker from "./DisplacementTracker";

export const metadata: Metadata = {
  title: "AI Displacement Tracker",
  description:
    "Tracking announced AI investment against AI-related workforce reductions, from public filings, earnings calls and news reports.",
  openGraph: {
    title: "AI Displacement Tracker — Live Data",
    description:
      "Announced AI investment against AI-related job losses, with a source on every event.",
    url: "https://maximusintel.com/displacement",
    type: "website",
  },
  keywords: [
    "AI displacement",
    "AI layoffs",
    "AI investment tracker",
    "workforce displacement",
    "AI job losses",
    "AI infrastructure spending",
    "artificial intelligence impact",
  ],
};

const displacementSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "AI Displacement Tracker",
  description:
    "AI infrastructure investment announcements and AI-related workforce displacement events, sourced from public filings, earnings calls and news reports.",
  url: "https://maximusintel.com/displacement",
  creator: {
    "@type": "Organization",
    name: "Maximus AI Strategic Advisory",
    url: "https://maximusintel.com",
  },
  temporalCoverage: "2026-01-01/..",
  license: "https://creativecommons.org/licenses/by-nc/4.0/",
};

export default function DisplacementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(displacementSchema) }}
      />
      <DisplacementTracker />
    </>
  );
}
