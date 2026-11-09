import type { Metadata } from "next";
import LocationPage from "../../../components/LocationPage";

export const metadata: Metadata = {
  title: "AEO Optimization Florida — AI Engine Optimization for Florida Businesses",
  description: "Answer Engine Optimization (AEO) for Florida businesses: get found when clients ask ChatGPT, Claude, Perplexity or Google's AI for your services. AI visibility checks and optimization for Florida small businesses.",
};

export default function Page() {
  return (
    <LocationPage
      self="/locations/aeo-optimization-florida"
      label="AEO · Answer Engine Optimization · Florida"
      image="/media/prism.webp"
      title={<>Make your Florida business visible to AI search.</>}
      intro="When someone asks ChatGPT, Claude or Perplexity for the best business in your category in Florida, do you appear? If not, a growing share of your future clients cannot find you."
      marketTitle="What AEO is, and why it matters in Florida."
      market={
        <>
          <p>Search engine optimization helps you rank on Google. Answer Engine Optimization helps you appear when people use ChatGPT, Claude, Perplexity and other AI assistants to find and compare businesses.</p>
          <p>They are different systems. A business can rank well on Google and still be missing from AI answers. In competitive Florida markets such as medical aesthetics, dental, professional services and hospitality, that gap is where clients are won and lost.</p>
          <p>Maximus checks how your business appears when AI engines answer questions about your industry and market, then shows you exactly how to improve it.</p>
        </>
      }
      receives={["AI visibility check across ChatGPT, Claude and Perplexity", "Competitor gap analysis: who appears and why", "An AEO roadmap of specific actions, ranked"]}
      industries={["Medical aesthetics", "Dental", "Professional services", "Hospitality", "Home services", "Real estate"]}
      closing="Are you invisible to AI search? Find out in 48 hours."
    />
  );
}
