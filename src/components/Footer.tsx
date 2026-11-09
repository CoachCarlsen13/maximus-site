// Maximus site footer (2026-11 redesign): shield lockup, sitemap, one CTA, light beam.
import Link from "next/link";
import { Beam, Shield } from "./ui";

const cols = [
  {
    title: "Services",
    links: [
      { href: "/free-report", label: "Free Competitive Edge Report" },
      { href: "/ai-audit", label: "AI Operational Audit" },
      { href: "/intelligence", label: "Strategic Intelligence Bible" },
      { href: "/growth", label: "Growth Simulator" },
      { href: "/services", label: "All services" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Joel Winns" },
      { href: "/trust", label: "Trust and ethics" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/book", label: "The Agent Revolution" },
      { href: "/displacement", label: "AI Displacement Tracker" },
    ],
  },
  {
    title: "Insights",
    links: [
      { href: "/blog", label: "All insights" },
      { href: "/blog/ai-invisible-to-chatgpt", label: "Invisible to ChatGPT" },
      { href: "/blog/competitors-using-ai", label: "Competitors using AI" },
      { href: "/blog/hidden-cost-manual-processes", label: "Cost of manual work" },
    ],
  },
  {
    title: "Florida",
    links: [
      { href: "/locations/ai-consulting-jupiter-fl", label: "Jupiter" },
      { href: "/locations/ai-consulting-palm-beach-gardens", label: "Palm Beach Gardens" },
      { href: "/locations/ai-consulting-west-palm-beach", label: "West Palm Beach" },
      { href: "/locations/ai-strategy-south-florida", label: "South Florida" },
      { href: "/locations/aeo-optimization-florida", label: "AEO in Florida" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#060918]">
      <Beam className="opacity-70" />
      <div className="hexgrid" aria-hidden />
      <div className="relative mx-auto max-w-[1320px] px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6 lg:gap-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-4" aria-label="Maximus AI home">
              <Shield size={52} withAI />
              <span className="flex flex-col leading-none">
                <span className="font-head text-lg font-bold tracking-[0.14em] text-[#E0F7FF]">MAXIMUS AI</span>
                <span className="font-data mt-2 text-[10px] tracking-[0.2em] text-[#00B4D8]">STRATEGIC BUSINESS INTELLIGENCE</span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/60">
              Enterprise-grade strategy, built for small and mid-size businesses. Designed to give your business the ultimate competitive edge.
            </p>
            <Link href="/free-report" className="btn btn-primary mt-7 px-5 py-3 text-sm">
              Get Your Free Report <span aria-hidden className="btn-arrow">→</span>
            </Link>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="label !text-[11px]">{c.title}</h3>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[14.5px] text-white/60 transition-colors hover:text-[#00D4FF]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider mb-8 mt-16" />
        <div className="flex flex-col items-start justify-between gap-4 text-[13px] text-white/45 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Maximus AI Strategic Advisory. Jupiter, Florida. Serving businesses across the US.</p>
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="mailto:joel@maximusintel.com" className="hover:text-[#00D4FF]">joel@maximusintel.com</a>
            <span>Imagery generated with AI.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
