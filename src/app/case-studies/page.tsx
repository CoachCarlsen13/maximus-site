// Case Studies (2026-11 redesign). Honest state: no case study is published until
// the client approves it and it passes the A+ grade. No prospect names listed.
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CTABand, Container, Glass, PageHero, Section, SectionHead } from "../../components/ui";

export const metadata: Metadata = {
  title: "Case Studies — AI Competitive Intelligence Results",
  description: "How Maximus publishes results: only with client approval, only after an A+ grade, every number sourced.",
};

const grades = [
  ["A+", "Publish", "Every claim sourced. Analysis actionable. No generic content. This is the standard."],
  ["A", "Minor revision", "Excellent analysis with small gaps. One revision before it can publish."],
  ["B+", "Rebuild", "Solid foundation, structural improvements needed. Returned for rebuild."],
  ["Below B+", "Not published", "We do not publish work that misses our standard."],
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          compact
          label="Proof first"
          image="/media/dossier.webp"
          title={<>Real intelligence. Real results. Published only when they are earned.</>}
          intro="We do not publish a case study until the client has approved it and the work has been graded A+ against our standard. No invented results, no anonymous testimonials, no logos we have not earned."
        />

        <Section tone="navy" hex>
          <Container className="max-w-4xl">
            <Glass hover={false} className="reveal p-8 text-center sm:p-12">
              <span className="font-data text-[11px] tracking-[0.16em] text-[#00D4FF]">STATUS</span>
              <h2 className="font-head mt-3 text-2xl font-bold text-white sm:text-3xl">The first case studies are in preparation.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-white/65">
                Each one will show the business&apos;s starting point, what we found, what changed and the numbers behind it, with the client&apos;s permission. Until then, the best proof is a report on your own business.
              </p>
            </Glass>
          </Container>
        </Section>

        <Section tone="dark">
          <Container>
            <SectionHead align="center" label="Our grading standard" title="How every piece of work is graded." />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {grades.map(([g, l, d], i) => (
                <Glass key={g} className="reveal p-7" style={{ transitionDelay: `${i * 70}ms` }}>
                  <span className="font-data text-3xl font-semibold text-white" style={{ textShadow: i === 0 ? "0 0 24px rgba(0,180,216,.6)" : "none" }}>
                    {g}
                  </span>
                  <h3 className="font-head mt-3 text-lg font-semibold text-white">{l}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-white/60">{d}</p>
                </Glass>
              ))}
            </div>
          </Container>
        </Section>

        <CTABand title="Do not wait for case studies. Get yours first." intro="The free Competitive Edge Report runs the same method on your business, delivered in 48 hours." />
      </main>
      <Footer />
    </>
  );
}
