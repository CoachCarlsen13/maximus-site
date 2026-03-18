// Maximus Growth Simulator — Conversion Landing Page
// Created: 2026-03-17
import type { Metadata } from "next";
import Footer from "../../components/Footer";
import CTAButton from "../../components/CTAButton";
import GrowthSimulatorForm from "./GrowthSimulatorForm";

export const metadata: Metadata = {
  title: "Growth Simulator",
  description:
    "See what your business looks like in 3 years with AI-powered intelligence. Interactive growth modeling, free.",
};

export default function GrowthSimulatorPage() {
  return (
    <>
      <main>
        {/* ───────────────────────────────────────────────
            SECTION 1: HERO
        ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-80" />
          {/* Subtle radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            {/* Small logo — not a nav */}
            <div className="animate-fade-in-up inline-flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <span className="text-navy font-black text-base">M</span>
              </div>
              <div className="text-left">
                <div className="text-white font-bold tracking-wide text-sm">
                  MAXIMUS
                </div>
                <div className="text-gold text-[9px] tracking-[0.2em] uppercase">
                  AI Strategic Advisory
                </div>
              </div>
            </div>

            <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight mb-8">
              What Would Your Business Look Like If You Could See{" "}
              <span className="text-gradient">3 Years Into The Future?</span>
            </h1>

            <p className="animate-fade-in-up animate-delay-200 text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
              Our Growth Simulator builds a custom model of your specific
              business and shows you exactly what happens when you optimize,
              automate, and capture the revenue opportunities your competitors
              are missing. Play with the numbers yourself. No signup required.
            </p>

            <div className="animate-fade-in-up animate-delay-300">
              <CTAButton
                href="#simulator"
                size="xl"
                micro="No signup. No credit card. Just your numbers."
              >
                Build My Growth Model — Free
              </CTAButton>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            SECTION 2: HOW IT WORKS
        ─────────────────────────────────────────────── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-black text-navy text-center mb-4">
              How It Works
            </h2>
            <p className="animate-fade-in-up animate-delay-100 text-slate text-center text-lg mb-16 max-w-2xl mx-auto">
              Three steps. Three minutes. A complete picture of your growth
              potential.
            </p>

            <div className="space-y-16 lg:space-y-20">
              {/* Step 1 */}
              <div className="animate-fade-in-up animate-delay-100 flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <span className="text-navy font-black text-2xl sm:text-3xl">
                      1
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">
                    Enter Four Numbers
                  </h3>
                  <p className="text-slate text-lg leading-relaxed">
                    Enter four numbers about your business: what you charge, how
                    many clients you serve, your main tasks, and your team size.
                    That is all we need to build your model.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="animate-fade-in-up animate-delay-200 flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <span className="text-navy font-black text-2xl sm:text-3xl">
                      2
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">
                    See Three Scenarios
                  </h3>
                  <p className="text-slate text-lg leading-relaxed">
                    The simulator builds three scenarios: conservative (small
                    optimizations), moderate (strategic investment), and
                    aggressive (full-scale growth). Each one modeled against real
                    industry benchmarks.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="animate-fade-in-up animate-delay-300 flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <span className="text-navy font-black text-2xl sm:text-3xl">
                      3
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">
                    Watch The Compounding Effect
                  </h3>
                  <p className="text-slate text-lg leading-relaxed">
                    Then the magic happens. Toggle which tasks you want to
                    delegate to AI. Watch your capacity increase. Watch your
                    revenue projection climb. Add a revenue stream your
                    competitors do not offer. See the compounding effect over 12,
                    24, and 36 months.
                  </p>
                </div>
              </div>
            </div>

            <div className="section-divider mt-16 mb-10" />

            <p className="animate-fade-in-up text-lg sm:text-xl text-slate leading-relaxed text-center max-w-3xl mx-auto">
              This is not a generic calculator. It is your business, modeled
              with real market data, real industry benchmarks, and real growth
              patterns from businesses exactly like yours.
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            SECTION 3: SIMULATOR EMBED
        ─────────────────────────────────────────────── */}
        <section id="simulator" className="bg-light py-20 sm:py-28 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-black text-navy text-center mb-4">
              Try It Now —{" "}
              <span className="text-gradient">See Your Growth Potential</span>
            </h2>
            <p className="animate-fade-in-up animate-delay-100 text-slate text-center text-lg mb-12 max-w-2xl mx-auto">
              Enter your business details to generate your custom growth model.
            </p>

            {/* Simulator card — elevated premium feel */}
            <div className="animate-fade-in-up animate-delay-200 bg-white rounded-3xl shadow-[0_8px_60px_rgba(27,42,74,0.08)] border border-navy/5 overflow-hidden">
              {/* Card header */}
              <div className="bg-navy px-6 sm:px-8 py-4 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <span className="text-white/50 text-sm font-medium tracking-wide">
                  Interactive Growth Simulator
                </span>
              </div>

              {/* Card body */}
              <div className="px-6 sm:px-10 lg:px-16 py-10 sm:py-14">
                <GrowthSimulatorForm />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            SECTION 4: TESTIMONIAL PREVIEWS
        ─────────────────────────────────────────────── */}
        <section className="bg-navy py-20 sm:py-28 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center mb-4">
              What The Simulator{" "}
              <span className="text-gradient">Reveals</span>
            </h2>
            <p className="animate-fade-in-up animate-delay-100 text-white/50 text-center text-lg mb-16 max-w-2xl mx-auto">
              Three minutes with the Growth Simulator changes how you think
              about your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quote 1 */}
              <div className="animate-fade-in-up animate-delay-100 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
                <svg
                  className="w-8 h-8 text-gold/40 mb-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="text-white/80 leading-relaxed text-base flex-1">
                  I was capped at 12 clients a month. The simulator showed me
                  delegating 3 tasks to AI would take my capacity to 36 — triple
                  the revenue, same business.
                </p>
              </div>

              {/* Quote 2 */}
              <div className="animate-fade-in-up animate-delay-200 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
                <svg
                  className="w-8 h-8 text-gold/40 mb-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="text-white/80 leading-relaxed text-base flex-1">
                  I thought growing meant spending $50,000. The simulator showed
                  me the first $15,000 in new revenue costs less than $500 a
                  month.
                </p>
              </div>

              {/* Quote 3 */}
              <div className="animate-fade-in-up animate-delay-300 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
                <svg
                  className="w-8 h-8 text-gold/40 mb-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="text-white/80 leading-relaxed text-base flex-1">
                  In 3 minutes, the simulator showed me $180,000 in annual
                  revenue I did not know existed.
                </p>
              </div>
            </div>

            <p className="text-white/30 text-sm text-center mt-10 italic">
              Illustrative quotes based on typical simulator findings.
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            SECTION 5: FINAL CTA
        ─────────────────────────────────────────────── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-8">
              The numbers are yours. The insights are yours. And the moment you
              see what is possible,{" "}
              <span className="text-gradient">
                you will wonder why you waited.
              </span>
            </h2>

            <div className="animate-fade-in-up animate-delay-200">
              <CTAButton href="#simulator" size="xl" className="!text-navy">
                I Want To See My Numbers
              </CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
