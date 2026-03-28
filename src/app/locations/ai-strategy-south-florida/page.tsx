// Programmatic SEO: AI Strategy South Florida
// Created: 2026-03-28
import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CTAButton from "../../../components/CTAButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Strategy South Florida — Maximus AI Strategic Advisory",
  description: "AI strategy and competitive intelligence for South Florida businesses. Serving Palm Beach County, Broward, and Miami-Dade. The McKinsey for South Florida SMBs.",
};

export default function SouthFloridaPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-navy py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-80" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">South Florida</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              AI Strategy for South Florida Businesses
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
              The competitive intelligence that enterprise companies pay millions for —
              delivered to South Florida&apos;s most ambitious small and mid-sized businesses.
            </p>
            <CTAButton href="/free-report" size="xl" micro="Free. 48-hour delivery. South Florida market intel.">
              Get Your Free South Florida Intelligence Report
            </CTAButton>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-navy mb-6">South Florida: The Most Dynamic SMB Market in the Southeast</h2>
            <p className="text-slate text-lg leading-relaxed mb-6">
              From Palm Beach County to Broward to Miami-Dade, South Florida&apos;s SMB landscape is
              diverse, competitive, and increasingly AI-driven. Businesses in medical aesthetics,
              dental, hospitality, real estate, financial services, and professional services are
              all navigating the same disruption — the question is who adapts first.
            </p>
            <p className="text-slate text-lg leading-relaxed mb-8">
              Maximus is based in Jupiter, FL and has deep market intelligence across the South
              Florida corridor. We deliver competitive analysis specific to your market, your
              competitors, and your exact competitive position — not a generic report.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Palm Beach County", "Broward County", "Miami-Dade", "Jupiter", "Palm Beach Gardens", "West Palm Beach", "Boca Raton", "Fort Lauderdale", "Coral Springs"].map((city) => (
                <div key={city} className="bg-light rounded-lg px-4 py-3 text-sm text-navy font-medium text-center border border-slate/10">{city}</div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { href: "/locations/ai-consulting-jupiter-fl", label: "Jupiter FL" },
                { href: "/locations/ai-consulting-palm-beach-gardens", label: "Palm Beach Gardens" },
                { href: "/locations/ai-consulting-west-palm-beach", label: "West Palm Beach" },
                { href: "/locations/aeo-optimization-florida", label: "AEO Optimization Florida" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="px-4 py-2 rounded-lg border border-slate/20 text-navy text-sm hover:border-gold/40 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white mb-6">South Florida&apos;s most ambitious businesses start here.</h2>
            <CTAButton href="/free-report" size="lg" micro="No credit card. No sales call.">Get Your Free Report</CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
