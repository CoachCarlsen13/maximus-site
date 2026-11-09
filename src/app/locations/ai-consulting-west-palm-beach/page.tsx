import type { Metadata } from "next";
import LocationPage from "../../../components/LocationPage";

export const metadata: Metadata = {
  title: "AI Consulting West Palm Beach FL — Maximus AI Strategic Advisory",
  description: "AI consulting for West Palm Beach businesses: competitive intelligence, AI strategy and market analysis for WPB small and mid-size businesses. Free report in 48 hours.",
};

export default function Page() {
  return (
    <LocationPage
      self="/locations/ai-consulting-west-palm-beach"
      label="AI consulting · West Palm Beach"
      title={<>AI consulting for West Palm Beach businesses.</>}
      intro="Palm Beach County's largest city and one of South Florida's most varied competitive landscapes. Know your market before your competitors do."
      marketTitle="High competition. High opportunity."
      market={
        <>
          <p>West Palm Beach is Palm Beach County&apos;s business hub, with a deep concentration of professional services, healthcare, hospitality and retail. In each of those categories, the first businesses to use AI systematically gain an edge that is hard to catch.</p>
          <p>Maximus shows you where you stand against the businesses you actually compete with, and which moves matter most.</p>
        </>
      }
      receives={["Competitor analysis for your WPB category", "AI visibility check", "Revenue opportunity map", "A prioritized 90-day plan"]}
      industries={["Professional services", "Healthcare", "Hospitality", "Retail", "Real estate", "Legal"]}
      areas={["West Palm Beach", "Downtown WPB", "Palm Beach", "Lake Worth Beach", "Royal Palm Beach"]}
      closing="Lead your West Palm Beach market. Start free."
    />
  );
}
