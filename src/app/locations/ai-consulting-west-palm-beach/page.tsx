// Programmatic SEO: AI Consulting West Palm Beach
// Created: 2026-03-28
import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CTAButton from "../../../components/CTAButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Consulting West Palm Beach FL — Maximus AI Strategic Advisory",
  description: "AI consulting for West Palm Beach businesses. Competitive intelligence, AI strategy, and market analysis for WPB SMBs. Free competitive intelligence report in 48 hours.",
};

export default function WPBPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-navy py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-80" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">West Palm Beach, Florida</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              AI Consulting for West Palm Beach Businesses
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
              Palm Beach County&apos;s largest city. The most diverse competitive landscape in South Florida.
              Know your market before your competitors do.
            </p>
            <CTAButton href="/free-report" size="xl" micro="Free. 48-hour delivery. WPB market intel.">
              Get Your Free WPB Intelligence Report
            </CTAButton>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-navy mb-6">West Palm Beach: High Competition, High Opportunity</h2>
            <p className="text-slate text-lg leading-relaxed mb-6">
              WPB is Palm Beach County&apos;s business hub — home to the region&apos;s largest concentration of professional services, healthcare, hospitality, and retail businesses. The competitive intelligence advantage is enormous for the first businesses in each vertical to deploy AI systematically.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { href: "/locations/ai-consulting-jupiter-fl", label: "Jupiter FL" },
                { href: "/locations/ai-consulting-palm-beach-gardens", label: "Palm Beach Gardens" },
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
            <h2 className="text-2xl font-black text-white mb-6">Dominate your WPB market — start free.</h2>
            <CTAButton href="/free-report" size="lg" micro="No credit card. No sales call.">Get Your Free Report</CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
