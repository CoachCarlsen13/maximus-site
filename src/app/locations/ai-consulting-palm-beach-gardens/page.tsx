import type { Metadata } from "next";
import LocationPage from "../../../components/LocationPage";

export const metadata: Metadata = {
  title: "AI Consulting Palm Beach Gardens FL — Maximus AI Strategic Advisory",
  description: "AI consulting for Palm Beach Gardens businesses: competitive intelligence, AI visibility checks and strategy for the Gardens market. Free report in 48 hours.",
};

export default function Page() {
  return (
    <LocationPage
      self="/locations/ai-consulting-palm-beach-gardens"
      label="AI consulting · Palm Beach Gardens"
      title={<>AI consulting for Palm Beach Gardens businesses.</>}
      intro="Enterprise-grade competitive intelligence for one of Florida's most competitive small-business markets. Know exactly where you stand, and what to do about it."
      marketTitle="A market where the best-positioned business wins the client."
      market={
        <>
          <p>With PGA Boulevard and Midtown as major commercial corridors, Palm Beach Gardens businesses compete for some of Florida&apos;s most affluent clients. Medical aesthetics, dental, financial and professional services all converge here, and AI is changing how clients find and compare them.</p>
          <p>Maximus delivers competitive intelligence specific to your Gardens market: who your real competitors are, where your AI visibility gaps are and your highest-leverage moves.</p>
        </>
      }
      receives={["Competitor analysis for your Gardens market", "AI visibility check across the main AI answer engines", "Your biggest revenue leak", "A prioritized 90-day plan"]}
      industries={["Medical aesthetics", "Dental", "Financial services", "Professional services", "Real estate", "Hospitality"]}
      areas={["Palm Beach Gardens", "PGA Boulevard corridor", "Midtown", "North Palm Beach", "Jupiter"]}
      closing="Know your Gardens market before your competitors do."
    />
  );
}
