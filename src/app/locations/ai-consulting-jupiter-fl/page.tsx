// Programmatic SEO: AI Consulting Jupiter FL
// Created: 2026-03-28
import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CTAButton from "../../../components/CTAButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Consulting Jupiter FL — Maximus AI Strategic Advisory",
  description:
    "AI consulting for Jupiter, FL businesses. Competitive intelligence, AI visibility audits, and strategic advisory for medical spas, dental practices, and professional services in Jupiter Florida.",
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
              Get Your Free Jupiter FL Intelligence Report
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
              Get Your Free Report
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
