// Programmatic SEO: AI Consulting Palm Beach Gardens
// Created: 2026-03-28
import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CTAButton from "../../../components/CTAButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Consulting Palm Beach Gardens FL — Maximus AI Strategic Advisory",
  description:
    "AI consulting for Palm Beach Gardens businesses. Competitive intelligence audits, AI visibility scoring, and strategic advisory for the Gardens market. Free report in 48 hours.",
};

export default function PBGPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-navy py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-80" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Palm Beach Gardens, Florida</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              AI Consulting for Palm Beach Gardens Businesses
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
              Enterprise-grade competitive intelligence for PBG&apos;s most competitive SMB market.
              Know exactly where you stand — and what to do about it.
            </p>
            <CTAButton href="/free-report" size="xl" micro="Free report. 48-hour delivery. PBG market analysis.">
              Get Your Free PBG Intelligence Report
            </CTAButton>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-navy mb-6">
              Palm Beach Gardens is One of Florida&apos;s Most Competitive Markets
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-8">
              With Midtown Palm Beach Gardens and PGA Boulevard as major commercial corridors,
              Palm Beach Gardens businesses compete for some of Florida&apos;s most affluent
              demographics. Medical aesthetics, dental, financial services, and professional
              services all converge here — and AI is reshaping how clients find and evaluate them.
            </p>
            <p className="text-slate text-lg leading-relaxed mb-8">
              Maximus delivers competitive intelligence specific to your PBG market: who your
              real threats are, where your AI visibility gaps are, and the highest-leverage
              moves in your specific competitive landscape.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/locations/ai-consulting-jupiter-fl", label: "Jupiter FL" },
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
            <h2 className="text-2xl font-black text-white mb-6">Your free PBG intelligence report is ready.</h2>
            <CTAButton href="/free-report" size="lg" micro="No credit card. No sales call.">Get Your Free Report</CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
