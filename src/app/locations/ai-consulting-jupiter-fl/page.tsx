import type { Metadata } from "next";
import LocationPage from "../../../components/LocationPage";

export const metadata: Metadata = {
  title: "AI Consulting Jupiter FL — Maximus AI Strategic Advisory | Free Report",
  description: "AI consulting in Jupiter, FL for small and mid-size businesses. Free Competitive Edge Report in 48 hours: competitors, AI visibility and a 90-day plan. Enterprise-grade strategy, built for your business.",
  keywords: ["AI consulting Jupiter FL", "AI consulting Jupiter Florida", "competitive intelligence Jupiter FL", "AI strategy Jupiter", "business intelligence Jupiter Florida"],
  openGraph: {
    title: "AI Consulting in Jupiter, FL — Maximus AI Strategic Advisory",
    description: "Enterprise-grade AI consulting for Jupiter, FL businesses. Get your free Competitive Edge Report in 48 hours.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Maximus AI Strategic Advisory",
  description: "AI consulting and competitive intelligence services for Jupiter, FL businesses.",
  url: "https://maximusintel.com",
  image: "https://maximusintel.com/brand/shield-ai.svg",
  areaServed: { "@type": "City", name: "Jupiter", containedIn: { "@type": "State", name: "Florida" } },
  address: { "@type": "PostalAddress", addressLocality: "Jupiter", addressRegion: "FL", addressCountry: "US" },
  founder: { "@type": "Person", name: "Joel Winns" },
};

export default function Page() {
  return (
    <LocationPage
      self="/locations/ai-consulting-jupiter-fl"
      label="AI consulting · Jupiter, FL"
      title={<>AI consulting for Jupiter, FL businesses.</>}
      intro="Enterprise-grade competitive intelligence for the businesses competing in Jupiter, Tequesta and northern Palm Beach County. Know your market. Outperform your competitors. Based right here in Jupiter."
      marketTitle="One of South Florida's most competitive small-business markets."
      market={
        <>
          <p>Medical spas, aesthetics practices, dental offices and professional firms in Jupiter compete for the same discerning Palm Beach County clients, and more of those clients now ask AI assistants to find and compare their options.</p>
          <p>Most Jupiter businesses have never checked how they appear when someone asks ChatGPT or Claude &ldquo;what is the best medical spa in Jupiter, FL?&rdquo; That AI visibility gap is where competitors quietly win.</p>
        </>
      }
      receives={["Competitor analysis of your Jupiter market", "AI visibility check: do answer engines recommend you?", "Revenue opportunity map for Palm Beach County", "Operational efficiency gap review", "Strategy from a Jupiter-based founder"]}
      approach={[
        { t: "We start with competitive intelligence, not technology.", d: "Before recommending a single AI tool, we map your competitive landscape: who ranks above you and who appears when someone asks an AI assistant for your service." },
        { t: "We build strategy at small-business scale.", d: "Enterprise-grade analysis applied to a business with 5 to 50 people. Specific findings, specific recommendations and a 90-day plan." },
        { t: "We price for owner-operators.", d: "The first Competitive Edge Report is free, with no obligation. Once you see AI-driven intelligence applied to your business, you decide what comes next." },
      ]}
      industries={["Medical spas", "Aesthetics practices", "Dental practices", "Professional services", "Real estate", "Financial services", "Home services", "Healthcare", "Retail"]}
      areas={["Jupiter", "Tequesta", "Juno Beach", "Palm Beach Gardens", "Northern Palm Beach County"]}
      closing="Ready to lead your Jupiter market?"
      schema={schema}
    />
  );
}
