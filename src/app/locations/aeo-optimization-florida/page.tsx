// Programmatic SEO: AEO Optimization Florida
// Created: 2026-03-28
import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CTAButton from "../../../components/CTAButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AEO Optimization Florida — AI Engine Optimization for Florida Businesses",
  description:
    "AEO (AI Engine Optimization) for Florida businesses. Get found by ChatGPT, Claude, and Perplexity when your clients search for your services. Maximus delivers AI visibility audits and optimization for Florida SMBs.",
};

export default function AEOFloridaPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-navy py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-80" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">AEO — AI Engine Optimization</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Your Florida Business — Visible to AI Search
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
              When someone asks ChatGPT, Claude, or Perplexity for the best business in your
              category in Florida — do you appear? If not, you&apos;re invisible to the fastest-growing
              discovery channel in history.
            </p>
            <CTAButton href="/free-report" size="xl" micro="Free AI visibility audit included in your report.">
              Get Your Free AEO Audit
            </CTAButton>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-navy mb-6">
              What Is AEO — And Why It Matters for Florida Businesses
            </h2>
            <div className="space-y-5 text-slate text-lg leading-relaxed mb-12">
              <p>
                Search Engine Optimization (SEO) helps you rank on Google. AI Engine Optimization (AEO)
                helps you appear when potential clients use ChatGPT, Claude, Perplexity, and other AI
                assistants to find and evaluate businesses.
              </p>
              <p>
                These are fundamentally different systems. A business can rank #1 on Google and be
                completely invisible to AI search. In Florida&apos;s competitive markets — medical
                aesthetics, dental, professional services, hospitality — that gap is already
                creating measurable client acquisition differences.
              </p>
              <p>
                Maximus delivers an AI visibility score: a measured assessment of how often and
                how favorably your business appears when AI engines answer questions about your
                industry and market. Then we show you exactly how to improve it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                { title: "AI Visibility Score", desc: "Measured across ChatGPT, Claude, and Perplexity for your market and service category" },
                { title: "Competitor Gap Analysis", desc: "Who in your market appears in AI searches — and why. What they're doing that you're not." },
                { title: "AEO Optimization Roadmap", desc: "Specific actions that improve your AI visibility within 30–90 days" },
              ].map((item) => (
                <div key={item.title} className="bg-light rounded-xl p-6 border border-slate/15">
                  <h3 className="text-navy font-bold mb-3">{item.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { href: "/locations/ai-consulting-jupiter-fl", label: "Jupiter FL" },
                { href: "/locations/ai-consulting-palm-beach-gardens", label: "Palm Beach Gardens" },
                { href: "/locations/ai-consulting-west-palm-beach", label: "West Palm Beach" },
                { href: "/locations/ai-strategy-south-florida", label: "South Florida" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="px-4 py-2 rounded-lg border border-slate/20 text-navy text-sm hover:border-gold/40 transition-colors">
                  AI Consulting — {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white mb-4">Are you invisible to AI search?</h2>
            <p className="text-white/70 mb-8">Find out in 48 hours. Free competitive intelligence report includes your AI visibility score.</p>
            <CTAButton href="/free-report" size="lg" micro="No credit card. No sales call.">Get Your Free AEO Audit</CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
