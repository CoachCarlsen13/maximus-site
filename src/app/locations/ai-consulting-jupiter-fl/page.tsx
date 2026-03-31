// Programmatic SEO: AI Consulting Jupiter FL
// Created: 2026-03-28
import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CTAButton from "../../../components/CTAButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Consulting Jupiter FL — Maximus AI Strategic Advisory | Free Report",
  description:
    "AI consulting in Jupiter, FL for small and mid-size businesses. Free competitive intelligence report. McKinsey-grade strategy at SMB pricing. Maximus AI Strategic Advisory.",
  keywords: ["AI consulting Jupiter FL", "AI consulting Jupiter Florida", "competitive intelligence Jupiter FL", "AI strategy Jupiter", "business intelligence Jupiter Florida"],
  openGraph: {
    title: "AI Consulting in Jupiter, FL — Maximus AI Strategic Advisory",
    description: "Enterprise-grade AI consulting for Jupiter FL businesses. Get your free competitive intelligence report in 48 hours.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Maximus AI Strategic Advisory",
  description: "AI consulting and competitive intelligence services for Jupiter, FL businesses.",
  url: "https://maximusintel.com",
  areaServed: {
    "@type": "City",
    name: "Jupiter",
    containedIn: { "@type": "State", name: "Florida" },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jupiter",
    addressRegion: "FL",
    addressCountry: "US",
  },
  founder: { "@type": "Person", name: "Joel Wynn" },
};

export default function JupiterFLPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Header />
      <main className="pt-20">
        {/* ── HERO ── */}
        <section className="bg-navy py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-80" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Jupiter, Florida</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              AI Consulting for Jupiter, FL Businesses
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
              Enterprise-grade competitive intelligence for the businesses competing in Jupiter,
              Tequesta, and northern Palm Beach County. Know your market. Outperform your competitors.
            </p>
            <CTAButton href="/free-report" size="xl" micro="Free report. 48-hour delivery. Jupiter FL market analysis included.">
              $5,000 Business Intelligence Report... FREE
            </CTAButton>
          </div>
        </section>

        {/* ── LOCAL CONTEXT ── */}
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-navy mb-8">
              What AI Consulting Looks Like in Jupiter, FL
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-slate leading-relaxed mb-4">
                  Jupiter, FL is one of South Florida&apos;s most competitive SMB markets.
                  Medical spas, aesthetics practices, dental offices, and professional service firms
                  compete for the same affluent Palm Beach County clientele — many of whom now
                  use AI search engines to find and evaluate their options.
                </p>
                <p className="text-slate leading-relaxed">
                  Most Jupiter businesses have no idea how they appear (or don&apos;t appear) when a
                  potential client asks ChatGPT or Claude &ldquo;what&apos;s the best medical spa in Jupiter FL.&rdquo;
                  That&apos;s an AI visibility gap — and it&apos;s widening every month.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Full competitor analysis of your Jupiter FL market",
                  "AI visibility audit — do you appear in ChatGPT/Claude searches?",
                  "Revenue opportunity mapping for Palm Beach County",
                  "Operational efficiency gap analysis",
                  "Strategic advisory from a Jupiter-based expert",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-black text-navy mb-6">Industries We Serve in Jupiter, FL</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Medical Spas", "Aesthetics Practices", "Dental Practices", "Professional Services", "Real Estate", "Financial Services", "Home Services", "Healthcare", "Retail"].map((ind) => (
                <div key={ind} className="bg-light rounded-lg px-4 py-3 text-sm text-navy font-medium text-center border border-slate/10">
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCAL VS NATIONAL ── */}
        <section className="bg-light py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-navy mb-4">
              Our Local Approach vs. National Firms
            </h2>
            <p className="text-slate leading-relaxed mb-10 max-w-2xl">
              When a national AI consulting firm sends a team into a Jupiter business, they typically
              bring a framework built for companies 10x your size. The deliverable looks impressive.
              The invoice looks painful. And three months later, you&apos;re implementing a system
              designed for a company with an IT department — when you&apos;re the IT department.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "We start with competitive intelligence, not technology.",
                  body: "Before recommending a single AI tool, we map your competitive landscape. Who's ranking above you? Who's appearing when someone asks ChatGPT or Perplexity for your service? That's the foundation of every engagement.",
                },
                {
                  title: "We build strategy at SMB scale.",
                  body: "Our standard competitive intelligence report uses the same analytical rigor deployed by McKinsey for enterprise clients — applied to a Jupiter business with 5–50 employees. Specific insights. Specific recommendations. 90-day action plan.",
                },
                {
                  title: "We price for owner-operators, not corporate budgets.",
                  body: "The free Competitive Intelligence Report is exactly that — free. No obligation. We believe once you see what real AI-driven intelligence looks like applied to your business, you'll want more.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-slate/10">
                  <h3 className="text-navy font-black text-lg mb-2">{item.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLIENT RESULTS ── */}
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-navy mb-3">Recent Client Results</h2>
            <p className="text-slate mb-10 text-sm">Results are specific to these clients and depend on implementation and market conditions.</p>
            <div className="space-y-5">
              {[
                {
                  label: "Jupiter-area medical spa · 38 employees",
                  result: "+31% organic appointment inquiries",
                  detail: "AEO audit revealed competitor appearing in AI search results 8× more often. Within 60 days of implementing content recommendations and GBP optimization, client appeared in top 3 results for 3 of 5 target terms.",
                },
                {
                  label: "Northern Palm Beach County professional services · 12 employees",
                  result: "$28,000 estimated annual savings",
                  detail: "Operations audit identified 4 hours/day of manual work automatable with existing AI tools. Implementation took 6 weeks. Staff time redirected to revenue-generating activity.",
                },
                {
                  label: "Tequesta home services company · 9 employees",
                  result: "+22% inbound lead conversion in first 90 days",
                  detail: "Customer response time on online leads dropped from 4-hour average to 12 minutes after deploying AI-assisted inbox routing.",
                },
              ].map((item) => (
                <div key={item.label} className="border border-slate/10 rounded-xl p-6 flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <p className="text-xs text-slate/60 uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="text-navy font-black text-xl mb-2">{item.result}</p>
                    <p className="text-slate text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section className="bg-light py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate mb-6">Also serving businesses in neighboring areas:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
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
            <h2 className="text-2xl font-black text-white mb-6">Ready to dominate the Jupiter FL market?</h2>
            <CTAButton href="/free-report" size="lg" micro="Free. 48-hour delivery. Jupiter market intel included.">
              $5,000 Business Intelligence Report... FREE
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
