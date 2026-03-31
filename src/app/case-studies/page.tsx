// Maximus AI Strategic Advisory — Case Studies Page
// Created: 2026-03-28
// Quality Sprint results coming — placeholder with templates ready for Joel's graded audits
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTAButton from "../../components/CTAButton";

export const metadata: Metadata = {
  title: "Case Studies — AI Competitive Intelligence Results",
  description:
    "Real results from Maximus AI competitive intelligence audits. Jupiter FL business market analysis, AI visibility audits, and growth opportunity reports.",
};

const upcomingStudies = [
  { business: "Medical Spa", market: "Jupiter, FL", focus: "AI visibility gap + competitor threat map" },
  { business: "Aesthetics Practice", market: "Jupiter, FL", focus: "Revenue opportunity identification" },
  { business: "Dental Practice", market: "Jupiter, FL", focus: "Competitive positioning audit" },
  { business: "Family Dental Spa", market: "Jupiter, FL", focus: "AI search presence analysis" },
  { business: "Beauty & Medi Spa", market: "Jupiter, FL", focus: "Full market intelligence report" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* ── HERO ── */}
        <section className="relative bg-navy py-20 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-80" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Proof First
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Real Intelligence. Real Results.
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              We don&apos;t publish case studies until they&apos;ve been reviewed and graded.
              The Quality Sprint is running now. Results publishing shortly.
            </p>
          </div>
        </section>

        {/* ── COMING SOON ── */}
        <section className="bg-light py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-10 border-2 border-gold/20 text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-navy mb-4">
                Quality Sprint: In Progress
              </h2>
              <p className="text-slate text-lg leading-relaxed max-w-xl mx-auto mb-6">
                We are currently running competitive intelligence audits on 10 Jupiter, FL
                businesses. Every audit is graded by Joel Wynn against our A+ quality standard
                before it publishes. Results expected within 48 hours.
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-gold font-semibold text-sm">Quality Sprint in progress — check back soon</span>
              </div>
            </div>

            {/* Upcoming studies */}
            <h3 className="text-xl font-black text-navy text-center mb-8">
              Audits in the Quality Sprint
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingStudies.map((study) => (
                <div key={study.business} className="bg-white rounded-xl p-5 border border-slate/20">
                  <p className="text-navy font-bold text-sm mb-1">{study.business}</p>
                  <p className="text-gold text-xs font-semibold mb-3">{study.market}</p>
                  <p className="text-slate text-xs leading-relaxed">{study.focus}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    <span className="text-slate/60 text-xs">Pending grade</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── METHODOLOGY ── */}
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-navy mb-8 text-center">
              How We Grade Every Audit
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { grade: "A+", label: "Publish Immediately", desc: "Every claim sourced. Analysis actionable. Zero generic content. This is the standard." },
                { grade: "A", label: "Minor Revision", desc: "Excellent analysis with small gaps. One revision cycle before publishing." },
                { grade: "B+", label: "Significant Revision", desc: "Solid foundation, structural improvements needed. Returned for rebuild." },
                { grade: "Below B+", label: "Not Published", desc: "We don&apos;t publish audits that don&apos;t meet our standard. Period." },
              ].map((g) => (
                <div key={g.grade} className="flex items-start gap-4 bg-light rounded-xl p-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy flex items-center justify-center">
                    <span className="text-gold font-black text-lg">{g.grade}</span>
                  </div>
                  <div>
                    <p className="text-navy font-bold mb-1">{g.label}</p>
                    <p
                      className="text-slate text-sm"
                      dangerouslySetInnerHTML={{ __html: g.desc }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-navy py-16 sm:py-20 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
              Don&apos;t wait for case studies. Get yours first.
            </h2>
            <p className="text-white/70 text-lg mb-8">
              The free competitive intelligence report is the same methodology used in every published
              case study — run on your business, delivered in 48 hours.
            </p>
            <CTAButton href="/free-report" size="lg" micro="No credit card. No sales call.">
              $5,000 Business Intelligence Report... FREE
            </CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
