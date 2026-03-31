// Maximus AI Strategic Advisory — Strategic Intelligence Bible Landing Page
// Created: 2026-03-17
// Conversion landing page — no navigation header
import Footer from "../../components/Footer";
import CTAButton from "../../components/CTAButton";

export const metadata = {
  title: "Strategic Intelligence Bible",
  description:
    "Map your entire competitive landscape across four dimensions. Never be outmaneuvered again.",
};

const dimensions = [
  {
    number: "01",
    title: "The Mirror",
    subtitle: "How Your Business Really Looks",
    description:
      "Not how you think your business looks. How it actually looks to customers, to AI search engines, to people comparing you to every competitor in your market. The gap between your marketing and your reputation is where clients quietly disappear. We find that gap and close it.",
    icon: (
      <svg
        className="w-7 h-7 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "The Voice",
    subtitle: "What Your Customers Actually Think",
    description:
      "Not what they tell you to your face. What they write in Google reviews at midnight. What they post in Facebook groups. What they tell their friends. We aggregate every signal \u2014 positive and negative \u2014 across every platform. You\u2019ll see patterns you\u2019ve never noticed.",
    icon: (
      <svg
        className="w-7 h-7 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "The Battlefield",
    subtitle: "Your Complete Competitive Map",
    description:
      "Every competitor in your market. Mapped. Analyzed. Scored. Their strengths. Their weaknesses. Their pricing. Their marketing. Their AI adoption. Their review velocity. Where each one is beating you \u2014 and the specific vulnerabilities you can exploit.",
    icon: (
      <svg
        className="w-7 h-7 text-gold"
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
    ),
  },
  {
    number: "04",
    title: "The Gold Mine",
    subtitle: "Revenue Nobody Else Sees",
    description:
      "The services your market wants that nobody offers. The customer segments nobody targets. The pricing tiers that don\u2019t exist. The technology advantages nobody has deployed. Revenue opportunities sitting in your market right now, invisible to everyone \u2014 including your competitors.",
    icon: (
      <svg
        className="w-7 h-7 text-gold"
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
    ),
  },
];

export default function IntelligencePage() {
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

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
            {/* Small logo */}
            <div className="animate-fade-in-up flex items-center justify-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <span className="text-navy font-black text-base">M</span>
              </div>
              <span className="text-white font-bold tracking-widest text-sm uppercase">
                Maximus
              </span>
            </div>

            <h1 className="animate-fade-in-up animate-delay-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight mb-8 max-w-4xl mx-auto">
              What If You Knew Every Move Your Competitors Were Going to Make
              {" \u2014 "}
              <span className="text-gradient">Before They Made It?</span>
            </h1>

            <p className="animate-fade-in-up animate-delay-200 text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Our Strategic Intelligence Bible maps your entire competitive
              landscape across four dimensions and updates monthly.
              You&apos;ll never be caught off guard, never be outmaneuvered,
              and never lose a client you didn&apos;t see coming.
            </p>

            <div className="animate-fade-in-up animate-delay-300">
              <CTAButton
                href="/free-report"
                size="xl"
                micro="48-hour delivery. No obligation."
              >
                $5,000 Business Intelligence Report... FREE
              </CTAButton>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            SECTION 2: THE FOUR DIMENSIONS
        ─────────────────────────────────────────────── */}
        {dimensions.map((dimension, index) => {
          const isEven = index % 2 === 0;
          const bg = isEven ? "bg-white" : "bg-light";
          const delayClass =
            index === 0
              ? ""
              : index === 1
                ? "animate-delay-100"
                : index === 2
                  ? "animate-delay-200"
                  : "animate-delay-300";

          return (
            <section
              key={dimension.number}
              className={`${bg} py-20 sm:py-28 lg:py-32`}
            >
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`animate-fade-in-up ${delayClass} flex flex-col lg:flex-row items-start gap-8 lg:gap-16`}
                >
                  {/* Number + Icon column */}
                  <div className="flex-shrink-0">
                    <span className="block text-7xl sm:text-8xl lg:text-9xl font-black text-gold/20 leading-none select-none">
                      {dimension.number}
                    </span>
                    <div className="mt-4 w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                      {dimension.icon}
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-2">
                      {dimension.title}
                    </h2>
                    <p className="text-gold-dark font-semibold text-lg sm:text-xl mb-6 tracking-wide">
                      {dimension.subtitle}
                    </p>
                    <p className="text-slate text-lg sm:text-xl leading-relaxed max-w-2xl">
                      {dimension.description}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ───────────────────────────────────────────────
            SECTION 3: PRICING
        ─────────────────────────────────────────────── */}
        <section className="bg-navy py-20 sm:py-28 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center mb-4">
              Intelligence That{" "}
              <span className="text-gradient">Pays for Itself</span>
            </h2>
            <p className="animate-fade-in-up animate-delay-100 text-white/50 text-center text-lg mb-16 max-w-2xl mx-auto">
              Two ways to get the competitive advantage no other business in
              your market has.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
              {/* One-Time Report */}
              <div className="animate-fade-in-up animate-delay-200 bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">
                  One-Time Intelligence Report
                </h3>
                <p className="text-3xl sm:text-4xl font-black text-white mb-6">
                  $1,500
                  <span className="text-lg font-normal text-white/40">
                    {" "}&ndash; $3,000
                  </span>
                </p>
                <p className="text-white/60 leading-relaxed mb-8 flex-1">
                  All four dimensions. Delivered as a branded strategic document
                  with specific, actionable recommendations. One strategy
                  session to walk through every finding.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    "Complete four-dimension analysis",
                    "Branded strategic document",
                    "Actionable recommendations",
                    "One strategy session included",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      </div>
                      <span className="text-white/50 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton href="/free-report" size="base">
                  $5,000 Business Intelligence Report... FREE
                </CTAButton>
              </div>

              {/* Monthly Subscription — highlighted */}
              <div className="animate-fade-in-up animate-delay-300 relative bg-white/5 border-2 border-gold/40 rounded-2xl p-8 sm:p-10 flex flex-col">
                {/* Recommended badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-gold to-gold-light text-navy text-xs font-bold rounded-full uppercase tracking-wide">
                    Recommended
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 mt-2">
                  Monthly Intelligence Subscription
                </h3>
                <p className="text-3xl sm:text-4xl font-black text-white mb-6">
                  $1,500
                  <span className="text-lg font-normal text-white/40">
                    {" "}&ndash; $3,000/mo
                  </span>
                </p>
                <p className="text-white/60 leading-relaxed mb-8 flex-1">
                  Everything in the one-time report &mdash; refreshed every
                  month with change tracking. New threats flagged the moment
                  they appear. New opportunities surfaced before your
                  competitors find them. Quarterly strategy reviews with Joel.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    "Monthly refreshed intelligence",
                    "Change tracking and trend analysis",
                    "Real-time threat alerts",
                    "Quarterly strategy reviews with Joel",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      </div>
                      <span className="text-white/50 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton href="/free-report" size="base">
                  Start Monthly Intelligence
                </CTAButton>
              </div>
            </div>

            <div className="section-divider mb-10" />

            <p className="animate-fade-in-up text-xl sm:text-2xl font-bold text-white text-center leading-snug max-w-3xl mx-auto">
              The businesses that invest in ongoing intelligence don&apos;t just
              compete.{" "}
              <span className="text-gradient">
                They lead. They see the moves before they happen.
              </span>
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            SECTION 4: CTA CLOSE
        ─────────────────────────────────────────────── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-8 max-w-3xl mx-auto">
              None of the other businesses in your market have this
              intelligence.{" "}
              <span className="text-gradient">
                The first one who gets it dominates the rest.
              </span>
            </h2>

            <p className="animate-fade-in-up animate-delay-100 text-xl sm:text-2xl text-slate mb-12 max-w-2xl mx-auto leading-relaxed">
              That should be you.
            </p>

            <div className="animate-fade-in-up animate-delay-200">
              <CTAButton
                href="/free-report"
                size="xl"
                className="!text-navy"
                micro="48-hour delivery. No credit card. No obligation."
              >
                $5,000 Business Intelligence Report... FREE
              </CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
