import type { Metadata } from "next";
import LocationPage from "../../../components/LocationPage";

export const metadata: Metadata = {
  title: "AI Strategy South Florida — Maximus AI Strategic Advisory",
  description: "AI strategy and competitive intelligence for South Florida businesses across Palm Beach County, Broward and Miami-Dade. Enterprise-grade strategy, built for small and mid-size businesses.",
};

export default function Page() {
  return (
    <LocationPage
      self="/locations/ai-strategy-south-florida"
      label="AI strategy · South Florida"
      title={<>AI strategy for South Florida businesses.</>}
      intro="The competitive intelligence large companies have paid consulting firms for decades to get, built for South Florida's most ambitious small and mid-size businesses."
      marketTitle="A diverse, fast-moving market. The question is who adapts first."
      market={
        <>
          <p>From Palm Beach County to Broward to Miami-Dade, South Florida&apos;s small-business landscape is diverse and competitive. Medical aesthetics, dental, hospitality, real estate, financial and professional services are all working through the same shift.</p>
          <p>Maximus is based in Jupiter and works across the South Florida corridor. Every analysis is specific to your market, your competitors and your position, never a generic report.</p>
        </>
      }
      receives={["Competitor analysis for your market", "AI visibility check", "Your biggest revenue leak", "A prioritized 90-day plan"]}
      areas={["Palm Beach County", "Broward County", "Miami-Dade", "Jupiter", "Palm Beach Gardens", "West Palm Beach", "Boca Raton", "Fort Lauderdale", "Coral Springs"]}
      industries={["Medical aesthetics", "Dental", "Hospitality", "Real estate", "Financial services", "Professional services"]}
      closing="South Florida's most ambitious businesses start here."
    />
  );
}
