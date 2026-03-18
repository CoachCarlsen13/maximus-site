// Maximus AI Operational Audit — Conversion Landing Page
// Created: 2026-03-17
import Footer from "../../components/Footer";
import CTAButton from "../../components/CTAButton";

export const metadata = {
  title: "AI Operational Audit",
  description:
    "Discover where your business is losing $41,600/year on tasks AI handles in minutes.",
};

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-gold shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function AIAuditPage() {
  return (
    <main className="min-h-screen">
      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative bg-navy min-h-[90vh] flex items-center overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,168,67,0.06)_0%,_transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          {/* Logo mark */}
          <div className="animate-fade-in-up flex items-center justify-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
              <span className="text-navy font-black text-base">M</span>
            </div>
            <div className="text-left">
              <div className="text-white font-bold tracking-wider text-sm">
                MAXIMUS
              </div>
              <div className="text-gold text-[9px] tracking-[0.2em] uppercase">
                AI Strategic Advisory
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
            You&apos;re Losing{" "}
            <span className="text-gradient">$41,600 a Year</span> on Tasks That
            Take AI 12 Minutes
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animate-delay-200 mt-8 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Our AI Operational Audit shows you exactly where the money is going,
            exactly what it costs you every month, and exactly how to stop it.
            Most businesses recover the cost of the audit in the first 30 days.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up animate-delay-300 mt-12">
            <CTAButton href="#pricing" size="xl">
              Show Me Where I&apos;m Losing Money
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE MATH */}
      {/* ============================================ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="animate-fade-in-up text-center text-sm font-semibold tracking-widest uppercase text-gold mb-4">
            The Math
          </p>
          <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-center leading-tight max-w-3xl mx-auto">
            The numbers the smartest businesses in your market already
            calculated.
          </h2>

          {/* Stat grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {/* Stat 1 */}
            <div className="animate-fade-in-up rounded-2xl border border-navy/10 p-8 sm:p-10 text-center">
              <div className="text-5xl sm:text-6xl font-black text-navy leading-none">
                16
              </div>
              <div className="text-lg font-semibold text-navy mt-2">
                hours / week
              </div>
              <p className="text-slate mt-3 text-sm leading-relaxed">
                spent on manual tasks your competitors have already automated
              </p>
              <div className="section-divider my-6" />
              <div className="text-3xl font-bold text-navy">832 hours/year</div>
              <p className="text-muted text-xs mt-1">gone</p>
            </div>

            {/* Stat 2 */}
            <div className="animate-fade-in-up animate-delay-100 rounded-2xl border border-navy/10 p-8 sm:p-10 text-center">
              <div className="text-5xl sm:text-6xl font-black text-gold-dark leading-none">
                $50
              </div>
              <div className="text-lg font-semibold text-navy mt-2">
                / hour loaded cost
              </div>
              <p className="text-slate mt-3 text-sm leading-relaxed">
                salary, benefits, overhead -- every hour has a price tag
              </p>
              <div className="section-divider my-6" />
              <div className="text-3xl font-bold text-gold-dark">
                $41,600 / year
              </div>
              <p className="text-muted text-xs mt-1">in lost productivity</p>
            </div>

            {/* Stat 3 */}
            <div className="animate-fade-in-up animate-delay-200 rounded-2xl border border-navy/10 p-8 sm:p-10 text-center">
              <div className="text-5xl sm:text-6xl font-black text-navy leading-none">
                $50K&ndash;$80K
              </div>
              <div className="text-lg font-semibold text-navy mt-2">
                / year to hire
              </div>
              <p className="text-slate mt-3 text-sm leading-relaxed">
                salary, benefits, training, turnover risk -- and they still
                take vacation
              </p>
            </div>

            {/* Stat 4 */}
            <div className="animate-fade-in-up animate-delay-300 rounded-2xl border border-navy/10 p-8 sm:p-10 text-center">
              <div className="text-5xl sm:text-6xl font-black text-gold-dark leading-none">
                $200&ndash;$500
              </div>
              <div className="text-lg font-semibold text-navy mt-2">
                / month for AI
              </div>
              <p className="text-slate mt-3 text-sm leading-relaxed">
                runs 24/7, never quits, never calls in sick, and gets better
                every month
              </p>
            </div>
          </div>

          {/* Closing copy */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-navy/80 leading-relaxed">
              The businesses in your market who figured this out first are
              operating at half your overhead with twice your capacity. Every
              month you wait, the gap gets wider.
            </p>
            <p className="mt-8 text-xl sm:text-2xl font-bold text-navy leading-snug">
              The question isn&apos;t whether you can afford the audit.
              It&apos;s whether you can afford another year of{" "}
              <span className="text-gradient">$41,600</span> walking out the
              door.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT THE AUDIT REVEALS */}
      {/* ============================================ */}
      <section className="bg-light py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="animate-fade-in-up text-center text-sm font-semibold tracking-widest uppercase text-gold mb-4">
            What You Get
          </p>
          <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-center leading-tight max-w-3xl mx-auto">
            What the Audit Reveals
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="animate-fade-in-up bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-navy/5">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Your AI Readiness Score (0&ndash;100)
              </h3>
              <p className="text-slate leading-relaxed">
                Benchmarked against the top performers in your industry. Specific
                to your market, your size, your competitive set.
              </p>
            </div>

            {/* Card 2 */}
            <div className="animate-fade-in-up animate-delay-100 bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-navy/5">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Six Revenue Leaks Identified and Quantified
              </h3>
              <p className="text-slate leading-relaxed">
                Not &ldquo;areas for improvement.&rdquo; Revenue leaks. Each
                with a dollar amount. After-hours leads you&apos;re losing.
                No-shows costing $800 per slot. Lapsed clients. All quantified.
                All fixable.
              </p>
            </div>

            {/* Card 3 */}
            <div className="animate-fade-in-up animate-delay-200 bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-navy/5">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                ROI Projections That Make the Decision Obvious
              </h3>
              <p className="text-slate leading-relaxed">
                Every recommendation with three numbers: cost to implement,
                monthly savings, and break-even date. If the math doesn&apos;t
                work, we&apos;ll tell you.
              </p>
            </div>

            {/* Card 4 */}
            <div className="animate-fade-in-up animate-delay-300 bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-navy/5">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Your 90-Day Implementation Roadmap
              </h3>
              <p className="text-slate leading-relaxed">
                Prioritized by ROI. Fixes that save the most with the least
                effort come first. The first two recommendations? You could
                implement them this week without spending a dollar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PRICING */}
      {/* ============================================ */}
      <section id="pricing" className="bg-navy py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="animate-fade-in-up text-center text-sm font-semibold tracking-widest uppercase text-gold mb-4">
            Choose Your Path
          </p>
          <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center leading-tight max-w-3xl mx-auto">
            Three ways to stop the bleeding
          </h2>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Tier 1 — Free */}
            <div className="animate-fade-in-up rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">
                Free AI Readiness Score
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-black text-white">$0</span>
              </div>
              <p className="mt-4 text-white/60 text-sm leading-relaxed">
                Answer 5 questions. Get your score benchmarked against your
                industry. Takes 2 minutes. Zero obligation.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon />
                  AI Readiness Score (0-100)
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon />
                  Industry benchmark comparison
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon />
                  Delivered in 2 minutes
                </li>
              </ul>
              <div className="mt-8">
                <CTAButton href="/free-report" size="base" className="w-full justify-center">
                  Get My Score Now
                </CTAButton>
              </div>
            </div>

            {/* Tier 2 — Full Audit (highlighted) */}
            <div className="animate-fade-in-up animate-delay-100 relative rounded-2xl border-2 border-gold bg-white/10 p-8 sm:p-10 backdrop-blur-sm shadow-[0_0_60px_rgba(212,168,67,0.1)]">
              {/* Most Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="btn-gold text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-2">
                Full AI Operational Audit
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-black text-gradient">
                  $3,000&ndash;$5,000
                </span>
              </div>
              <p className="mt-4 text-white/60 text-sm leading-relaxed">
                Comprehensive 2-week engagement. Every revenue leak identified
                and quantified. ROI projections for every fix. 90-day roadmap.
                One strategy session with Joel to walk through findings.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon />
                  AI Readiness Score with full analysis
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon />
                  6 revenue leaks identified and quantified
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon />
                  ROI projections for every recommendation
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon />
                  90-day implementation roadmap
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon />
                  1:1 strategy session with Joel
                </li>
              </ul>
              <div className="mt-8">
                <CTAButton href="mailto:joel@maximusai.com?subject=AI%20Operational%20Audit%20Request" size="base" className="w-full justify-center">
                  Request Your Audit
                </CTAButton>
              </div>
            </div>

            {/* Tier 3 — Implementation */}
            <div className="animate-fade-in-up animate-delay-200 rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">
                Implementation + Optimization
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-black text-white">
                  $1,500&ndash;$7,500
                </span>
                <span className="text-white/50 text-sm ml-1">/month</span>
              </div>
              <p className="mt-4 text-white/60 text-sm leading-relaxed">
                We don&apos;t just find the problems. We fix them. Monthly
                optimization. Your costs go down every month. Your revenue goes
                up every month.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon />
                  Everything in the Full Audit
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon />
                  Done-for-you AI implementation
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon />
                  Monthly optimization and reporting
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon />
                  Costs decrease, revenue increases
                </li>
              </ul>
              <div className="mt-8">
                <CTAButton href="mailto:joel@maximusai.com?subject=AI%20Implementation%20Inquiry" size="base" className="w-full justify-center">
                  Let&apos;s Talk
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* URGENCY CLOSE */}
      {/* ============================================ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Every month you delay the audit, another{" "}
            <span className="text-gradient">$3,467</span> walks out the door.
          </h2>
          <div className="animate-fade-in-up animate-delay-200 mt-12">
            <CTAButton href="#pricing" size="xl">
              Show Me Where I&apos;m Losing Money
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <Footer />
    </main>
  );
}
