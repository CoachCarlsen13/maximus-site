// Maximus AI Strategic Advisory — Homepage
// Created: 2026-03-17
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTAButton from "../components/CTAButton";
import StatCard from "../components/StatCard";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ───────────────────────────────────────────────
            SECTION 1: HERO
        ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center bg-navy pt-24 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-80" />
          {/* Subtle radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight mb-8">
              Your Competitors Have an{" "}
              <span className="text-gradient">Unfair Advantage.</span>
              <br />
              <span className="block mt-2">
                You&apos;re About to Take It From Them.
              </span>
            </h1>

            <p className="animate-fade-in-up animate-delay-200 text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
              We deliver the competitive intelligence that billion-dollar
              companies pay millions for — built for your business, powered by
              AI, ready in 48 hours. None of the other businesses in your market
              have this yet. The first one who gets it wins.
            </p>

            <div className="animate-fade-in-up animate-delay-300">
              <CTAButton
                href="/free-report"
                size="xl"
                micro="No credit card. No sales call. Just a report showing you exactly where you stand."
              >
                See What You&apos;re Missing — It&apos;s Free
              </CTAButton>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            SECTION 2: THE $500 BILLION
        ─────────────────────────────────────────────── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-8">
                <span className="text-gradient">$500 billion.</span>{" "}
                <span className="text-navy">
                  That&apos;s how much enterprise companies invest in
                  intelligence every year.
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-slate leading-relaxed mb-10">
                Enterprise businesses invest $500B into consulting firms like
                McKinsey, BCG, and Bain. That intelligence is why they dominate.
                But your real competition isn&apos;t the enterprises — it&apos;s
                the other small businesses in your market. None of them have
                access to that caliber of intelligence. Until now. Maximus
                delivers the same quality — built for your business, at a
                fraction of the price, 10x faster.
              </p>
            </div>

            <div className="animate-fade-in-up animate-delay-200 space-y-5 mb-12">
              {[
                "They know exactly which competitors are gaining ground — and the precise moves to block them.",
                "They know where their revenue is leaking — and how to plug every hole automatically.",
                "They know which market opportunities are emerging — before anyone else sees them.",
                "They know how AI is reshaping their customer acquisition — and they've already adapted.",
                "They know what their customers want next — because the data told them months ago.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1.5">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  <p className="text-base sm:text-lg text-navy/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="section-divider mb-10" />

            <p className="animate-fade-in-up animate-delay-300 text-xl sm:text-2xl font-bold text-navy leading-snug">
              None of the other businesses in your market have this
              intelligence.{" "}
              <span className="text-gradient">
                The first one who gets it dominates the rest.
              </span>{" "}
              That should be you.
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            SECTION 3: WHAT MAXIMUS DELIVERS
        ─────────────────────────────────────────────── */}
        <section className="bg-navy py-20 sm:py-28 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center mb-4">
              What Maximus Delivers
            </h2>
            <p className="animate-fade-in-up animate-delay-100 text-white/50 text-center text-lg mb-16 max-w-2xl mx-auto">
              Four pillars of intelligence that transform how you compete.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
              {/* Competitor Intelligence */}
              <div className="animate-fade-in-up animate-delay-100 group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Competitor Intelligence
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Which competitors are taking your clients — and the specific
                  moves that stop it.
                </p>
              </div>

              {/* Revenue Recovery */}
              <div className="animate-fade-in-up animate-delay-200 group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Revenue Recovery
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Where you&apos;re bleeding money on manual tasks AI handles
                  for pennies.
                </p>
              </div>

              {/* AI Visibility */}
              <div className="animate-fade-in-up animate-delay-300 group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  AI Visibility
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Where you&apos;re invisible to AI search engines your future
                  clients use.
                </p>
              </div>

              {/* Market Opportunities */}
              <div className="animate-fade-in-up animate-delay-400 group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Market Opportunities
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Revenue opportunities in your market nobody is capturing.
                </p>
              </div>
            </div>

            <div className="section-divider mb-10" />

            <p className="animate-fade-in-up text-xl sm:text-2xl font-bold text-white text-center leading-snug max-w-3xl mx-auto">
              More clients. Higher profits. Lower costs. And a competitive edge
              that{" "}
              <span className="text-gradient">
                no other small business in your market can match.
              </span>
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            SECTION 4: PROOF
        ─────────────────────────────────────────────── */}
        <section className="bg-navy-dark py-20 sm:py-28 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center mb-4">
              This isn&apos;t theory.{" "}
              <span className="text-gradient">It&apos;s already happening.</span>
            </h2>
            <p className="animate-fade-in-up animate-delay-100 text-white/50 text-center text-lg mb-16 max-w-2xl mx-auto">
              Businesses using AI-powered competitive intelligence are
              outperforming their peers across every metric.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="animate-fade-in-up animate-delay-100">
                <StatCard
                  value="23%"
                  label="Higher client acquisition rate"
                  source="McKinsey Global Survey, 2025"
                />
              </div>
              <div className="animate-fade-in-up animate-delay-200">
                <StatCard
                  value="40%"
                  label="Reduction in operational costs"
                  source="McKinsey Global Survey, 2025"
                />
              </div>
              <div className="animate-fade-in-up animate-delay-300">
                <StatCard
                  value="2.3x"
                  label="Faster revenue growth"
                  source="Harvard Business Review, 2025"
                />
              </div>
              <div className="animate-fade-in-up animate-delay-400">
                <StatCard
                  value="57%"
                  label="Of businesses now use AI daily"
                  source="OpenAI Enterprise Report, 2025"
                />
              </div>
            </div>

            <p className="animate-fade-in-up animate-delay-500 text-white/30 text-sm text-center mt-10">
              Sources: McKinsey &amp; Company Global AI Survey, Harvard Business
              Review, OpenAI Enterprise Adoption Report
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            SECTION 5: HOW IT WORKS
        ─────────────────────────────────────────────── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-black text-navy text-center mb-4">
              How It Works
            </h2>
            <p className="animate-fade-in-up animate-delay-100 text-slate text-center text-lg mb-16 max-w-2xl mx-auto">
              Three steps. No complexity. No long-term contracts.
            </p>

            <div className="space-y-16 lg:space-y-20">
              {/* Step 1 */}
              <div className="animate-fade-in-up animate-delay-100 flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <span className="text-navy font-black text-2xl sm:text-3xl">1</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy">
                      We Reveal Your Blind Spots
                    </h3>
                    <span className="px-3 py-1 bg-gold/10 text-gold-dark text-xs font-bold rounded-full uppercase tracking-wide">
                      Free
                    </span>
                  </div>
                  <p className="text-slate text-lg leading-relaxed mb-3">
                    In 48 hours, you receive a competitive intelligence report
                    showing exactly where you stand in your market, who your
                    real threats are, where your revenue is leaking, and what
                    opportunities you&apos;re missing. Consulting firms charge
                    $5,000+ for this analysis. You get it free.
                  </p>
                  <p className="text-muted text-sm">
                    48-hour delivery. No obligation. No sales pitch attached.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="animate-fade-in-up animate-delay-200 flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <span className="text-navy font-black text-2xl sm:text-3xl">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">
                    You See Your Numbers
                  </h3>
                  <p className="text-slate text-lg leading-relaxed mb-3">
                    We build you an interactive growth model specific to your
                    business. Toggle individual improvements and watch how each
                    one impacts your revenue, costs, and competitive position.
                    No guesswork. No generic projections. Your data. Your market.
                    Your numbers.
                  </p>
                  <p className="text-muted text-sm">
                    Interactive dashboard. Scenario modeling. Real projections
                    based on your business.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="animate-fade-in-up animate-delay-300 flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <span className="text-navy font-black text-2xl sm:text-3xl">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">
                    We Build Your Competitive Edge
                  </h3>
                  <p className="text-slate text-lg leading-relaxed mb-3">
                    We deploy the intelligence systems that keep you ahead —
                    continuous competitor monitoring, AI-powered operational
                    improvements, and strategic insights delivered on your
                    schedule. You stop guessing and start knowing. Every
                    decision backed by data your competitors don&apos;t have.
                  </p>
                  <p className="text-muted text-sm">
                    Ongoing intelligence. Continuous optimization. Measurable
                    results.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <CTAButton
                href="/free-report"
                size="lg"
                className="!text-navy"
                micro=""
              >
                Start With Your Free Report
              </CTAButton>
              <p className="text-muted text-sm mt-4">
                Step 1 is free. No credit card required.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            SECTION 6: URGENCY / FINAL CTA
        ─────────────────────────────────────────────── */}
        <section className="relative bg-navy py-20 sm:py-28 lg:py-32 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
              Every day you wait, the other businesses in your market get closer
              to{" "}
              <span className="text-gradient">finding this first.</span>
            </h2>

            <p className="animate-fade-in-up animate-delay-200 text-xl sm:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              The free intelligence report takes 48 hours. Zero cost, zero
              commitment, zero risk.
            </p>

            <div className="animate-fade-in-up animate-delay-300">
              <CTAButton
                href="/free-report"
                size="xl"
                micro="287 businesses in South Florida requested their report this quarter. Is your competitor one of them?"
              >
                Claim Your Free Competitive Intelligence Report
              </CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
