// Maximus AI Strategic Advisory — Services Page
// Created: 2026-03-28
// Three-tier service architecture: Competitive Edge Report → Strategic Advisory → AIOS Deployment
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTAButton from "../../components/CTAButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — AI Strategic Advisory for SMBs",
  description:
    "Three tiers of AI-powered competitive intelligence for small and mid-sized businesses. From your first free report to full AIOS deployment. Serving Jupiter FL and South Florida.",
  openGraph: {
    title: "Maximus AI Services — Built for Business Owners Who Want to Win",
    description:
      "Competitive Edge Reports, Strategic Advisory retainers, and full AI Operating System deployment. Choose the tier that fits your stage.",
  },
};

const tiers = [
  {
    tier: "Tier 1",
    name: "Competitive Edge Report",
    price: "$297",
    billing: "one-time",
    badge: "Most Popular",
    badgeColor: "bg-gold/20 text-gold-dark",
    description:
      "Your complete competitive intelligence dossier. We analyze your market, map your competitors, score your AI visibility, and identify your top revenue opportunities — delivered in 48 hours.",
    deliverables: [
      "Full competitor analysis (up to 10 competitors)",
      "AI visibility score — how often you appear in ChatGPT, Claude, Perplexity answers",
      "Revenue opportunity map for your market",
      "3 highest-leverage actions to execute immediately",
      "Operational inefficiency audit — where you're bleeding money",
      "Market positioning recommendation",
    ],
    outcome:
      "Walk away knowing exactly where you stand, who's threatening you, and your 3 highest-leverage moves.",
    cta: "/free-report",
    ctaLabel: "Start with Your Free Report",
    ctaMicro: "The first report is free. No credit card, no sales call.",
    highlight: true,
  },
  {
    tier: "Tier 2",
    name: "Strategic Advisory",
    price: "$597–$2,500",
    billing: "/month",
    badge: "Ongoing Edge",
    badgeColor: "bg-blue-500/20 text-blue-300",
    description:
      "Your AI-powered strategic partner. Monthly intelligence briefings, competitive monitoring, and strategic advisory calls that keep you ahead of every move in your market.",
    deliverables: [
      "Weekly competitive intelligence updates",
      "Monthly strategy call with Joel Wynn",
      "Continuous competitor monitoring (alerts on moves within 24h)",
      "Quarterly deep-dive market analysis",
      "Priority access to all new intelligence tools",
      "Custom intelligence dashboards for your business",
    ],
    outcome:
      "Never be blindsided by a competitor again. Stay 3 moves ahead with intelligence updated in real-time.",
    cta: "/free-report",
    ctaLabel: "Start the Conversation",
    ctaMicro: "Begin with your free report. Advisory tier discussed after we see your results.",
    highlight: false,
  },
  {
    tier: "Tier 3",
    name: "AIOS Deployment",
    price: "$2,500–$5,000",
    billing: "/month",
    badge: "Full Deployment",
    badgeColor: "bg-emerald-500/20 text-emerald-300",
    description:
      "A full AI Operating System built into your business. Automated lead generation, AI-powered customer acquisition, operational automation, and competitive monitoring — all running while you sleep.",
    deliverables: [
      "Custom AIOS architecture designed for your business",
      "AI-powered lead generation and qualification pipeline",
      "Automated customer acquisition workflows",
      "AI receptionist and lead nurturing system",
      "Full competitive intelligence infrastructure",
      "Monthly optimization reviews + dedicated success manager",
      "Immutable integrity logging on every AI action",
    ],
    outcome:
      "Your business runs more intelligently than any competitor in your market — 24/7, without adding headcount.",
    cta: "/free-report",
    ctaLabel: "Apply for AIOS Deployment",
    ctaMicro: "Limited availability. We accept clients we can produce measurable results for.",
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* ── HERO ── */}
        <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Three Tiers. One Goal.
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              The Intelligence Stack That{" "}
              <span className="text-gradient">Makes You Unbeatable</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Enterprise-grade competitive intelligence, AI strategic advisory, and full AIOS
              deployment — built for the businesses that intend to dominate their market.
            </p>
          </div>
        </section>

        {/* ── TIERS ── */}
        <section className="bg-light py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.tier}
                  className={`relative rounded-2xl p-8 flex flex-col ${
                    tier.highlight
                      ? "bg-navy border-2 border-gold shadow-2xl shadow-gold/10 scale-[1.02]"
                      : "bg-white border border-slate/20"
                  }`}
                >
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${tier.badgeColor}`}>
                      {tier.badge}
                    </span>
                    <span className={`text-xs font-semibold ${tier.highlight ? "text-white/40" : "text-slate"}`}>
                      {tier.tier}
                    </span>
                  </div>

                  {/* Title + Price */}
                  <h2 className={`text-2xl font-black mb-2 ${tier.highlight ? "text-white" : "text-navy"}`}>
                    {tier.name}
                  </h2>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`text-4xl font-black ${tier.highlight ? "text-gold" : "text-navy"}`}>
                      {tier.price}
                    </span>
                    <span className={`text-sm ${tier.highlight ? "text-white/50" : "text-slate"}`}>
                      {tier.billing}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-8 ${tier.highlight ? "text-white/70" : "text-slate"}`}>
                    {tier.description}
                  </p>

                  {/* Deliverables */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <svg
                            className={`w-4 h-4 ${tier.highlight ? "text-gold" : "text-navy"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className={`text-sm ${tier.highlight ? "text-white/80" : "text-navy/80"}`}>
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Outcome */}
                  <div className={`rounded-xl p-4 mb-8 ${tier.highlight ? "bg-white/5" : "bg-navy/5"}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${tier.highlight ? "text-gold" : "text-navy"}`}>
                      Your Outcome
                    </p>
                    <p className={`text-sm leading-relaxed ${tier.highlight ? "text-white/70" : "text-navy/70"}`}>
                      {tier.outcome}
                    </p>
                  </div>

                  {/* CTA */}
                  <CTAButton href={tier.cta} size="base" micro={tier.ctaMicro}>
                    {tier.ctaLabel}
                  </CTAButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST CALLOUT ── */}
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate text-lg mb-4">
              Every Maximus service runs on a foundation others don&apos;t have.
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-6">
              While competitors race to make AI{" "}
              <span className="text-gradient">faster and cheaper</span>,<br />
              we made it{" "}
              <span className="text-gradient">trustworthy</span>.
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Every action logged immutably. Every destructive action gated. Deception detection
              active. Monthly integrity audits completed. When you deploy with Maximus, your
              business gets the same three-layer trust framework that governs every decision we make.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/trust"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy font-bold rounded-xl hover:bg-navy hover:text-white transition-all"
              >
                Read the Full Trust Architecture
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <CTAButton href="/free-report" size="base" micro="">
                Start With Your Free Report
              </CTAButton>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-light py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-navy text-center mb-12">
              Common Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Why is the first report free?",
                  a: "Because we built our reputation on proof, not promises. The free report shows you exactly what our intelligence looks like before you spend a dollar. If it doesn't demonstrate clear, actionable value — you owe us nothing.",
                },
                {
                  q: "What's in the Competitive Edge Report?",
                  a: "A complete competitive intelligence dossier: your top 10 competitors analyzed, your AI visibility score (how often you appear when people ask ChatGPT or Claude about your industry), your top 3 revenue opportunities, and your most critical operational inefficiencies. Built specifically for your business, not a generic template.",
                },
                {
                  q: "How is this different from a regular consultant?",
                  a: "Traditional consultants charge $10,000–$50,000 for research that takes 6–8 weeks and becomes outdated immediately. Our AI infrastructure delivers the same quality analysis in 48 hours, continuously updated, at a fraction of the cost.",
                },
                {
                  q: "Do you serve businesses outside Florida?",
                  a: "Yes. While we're based in Jupiter, FL and have deep market knowledge of South Florida, our intelligence infrastructure serves businesses nationwide. The competitive analysis methodology is industry and geography agnostic.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white rounded-2xl p-6 border border-slate/20">
                  <h3 className="text-navy font-bold mb-3">{q}</h3>
                  <p className="text-slate leading-relaxed text-sm">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
