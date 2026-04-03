// AI Displacement Tracker — Live Dual Counter Page
// Created: 2026-04-03
// Purpose: Public page showing real-time AI investment vs AI job displacement data.
//          Two animated counters at top, timeline feed below, filter tabs.
//          Pulls from Railway API: GET /api/displacement/tracker/dashboard
import type { Metadata } from "next";
import DisplacementTracker from "./DisplacementTracker";

export const metadata: Metadata = {
  title: "AI Displacement Tracker | Maximus AI Strategic Advisory",
  description:
    "Live tracking of AI investment spending vs AI-driven job displacement. Real-time data on layoffs, infrastructure spending, and workforce impact. Updated daily.",
  openGraph: {
    title: "AI Displacement Tracker — Live Data",
    description:
      "Track the real-time impact of AI on the workforce. Billions invested. Hundreds of thousands displaced. The numbers tell the story.",
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
    "Real-time tracking of AI infrastructure investment announcements and AI-driven workforce displacement events. Data sourced from public filings, earnings calls, news reports, and government statistics.",
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
