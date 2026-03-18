// Free Competitive Intelligence Report — Conversion Landing Page
// Created: 2026-03-17
import Footer from "../../components/Footer";
import ReportForm from "../../components/ReportForm";

export const metadata = {
  title: "Free Competitive Intelligence Report",
  description:
    "Discover your competitive blind spots in 48 hours. Free, no strings attached.",
};

/* ---------- Icon components ---------- */

function IconVisibility() {
  return (
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
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function IconCompetitors() {
  return (
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
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </svg>
  );
}

function IconRevenue() {
  return (
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
  );
}

function IconPlan() {
  return (
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
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  );
}

function ScrollArrow() {
  return (
    <svg
      className="w-6 h-6 text-white/40 animate-bounce"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    </svg>
  );
}

/* ---------- Discovery card data ---------- */

const discoveries = [
  {
    icon: <IconVisibility />,
    title: "Your AI Visibility Score",
    description:
      "When someone asks ChatGPT, Google AI, or Alexa to recommend a business like yours \u2014 they\u2019re either recommending you or your competitor. Most business owners have never checked.",
    revenue:
      "Businesses that appear in AI recommendations see 35\u201350% more inbound inquiries.",
  },
  {
    icon: <IconCompetitors />,
    title: "Your Top 5 Competitor Breakdown",
    description:
      "Not just who they are. What they\u2019re doing better than you. Where their strategy has gaps you can exploit. Specific. Named. Actionable.",
    revenue:
      "Knowing where each competitor is vulnerable gives you the ability to target their weakest points.",
  },
  {
    icon: <IconRevenue />,
    title: "Your Biggest Revenue Leak",
    description:
      "Every business has one: the single most expensive blind spot costing you clients and money right now. This report shows you.",
    revenue:
      "The average revenue leak we identify costs businesses between $2,000 and $15,000 per month.",
  },
  {
    icon: <IconPlan />,
    title: "Your 90-Day Edge Plan",
    description:
      "Specific moves, ranked by revenue impact, with estimated returns. You could implement the first recommendation this week.",
    revenue:
      "Businesses that act on strategic intelligence report 23% higher client acquisition within 6 months.",
  },
];

/* ---------- Page ---------- */

export default function FreeReportPage() {
  return (
    <main className="min-h-screen">
      {/* ========== HERO ========== */}
      <section className="bg-navy min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6">
        {/* Logo mark — not a link */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 animate-fade-in-up">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
            <span className="text-navy font-black text-sm">M</span>
          </div>
          <span className="text-white font-bold tracking-wide text-sm">
            MAXIMUS
          </span>
        </div>

        <div className="max-w-3xl text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            What Do Your Competitors Know About Your Market{" "}
            <span className="text-gradient">That You Don&apos;t?</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            In 48 hours, we&apos;ll show you. Free. No strings. Keep the report
            no matter what.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ScrollArrow />
        </div>
      </section>

      {/* ========== WHAT YOU'LL DISCOVER ========== */}
      <section className="bg-white py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-4 animate-fade-in-up">
            What You&apos;ll Discover
          </h2>
          <p className="text-muted text-center text-lg mb-16 max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            None of the other small businesses in your market have this
            intelligence. The first one who gets it dominates the rest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {discoveries.map((item, i) => (
              <div
                key={item.title}
                className={`bg-light rounded-2xl p-8 animate-fade-in-up animate-delay-${(i + 1) * 100}`}
              >
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-slate text-[15px] leading-relaxed mb-4">
                  {item.description}
                </p>
                <p className="text-sm italic text-gold-dark">{item.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY FREE ========== */}
      <section className="bg-light py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Why Is This Free?
          </h2>
          <p className="text-lg text-slate leading-relaxed mb-6">
            Consulting firms charge $5,000 to $50,000 for this analysis. We
            deliver it free. Here&apos;s why.
          </p>
          <p className="text-slate leading-relaxed mb-6">
            Our AI-powered intelligence platform can produce in hours what used
            to take a team of analysts weeks. That efficiency means we can give
            you a genuine, high-quality competitive intelligence report at no
            cost.
          </p>
          <p className="text-slate leading-relaxed mb-6">
            We do it because once you see your competitive blind spots
            quantified &mdash; once you see exactly where you stand against
            every other business in your market &mdash; you will never be
            comfortable not knowing again.
          </p>
          <p className="text-navy font-semibold text-lg">
            No pressure. No follow-up calls. No bait and switch. Just your
            report, delivered to your inbox.
          </p>
        </div>
      </section>

      {/* ========== THE FORM ========== */}
      <section id="form" className="bg-navy py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Your Report. Your Business.{" "}
              <span className="text-gradient">48 Hours.</span>
            </h2>
            <p className="text-white/50 text-lg">
              Fill out the form below and we&apos;ll start building your
              intelligence report immediately.
            </p>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <ReportForm />
          </div>
        </div>
      </section>

      {/* ========== SOCIAL PROOF BAR ========== */}
      <section className="bg-navy-dark py-10 sm:py-12 px-4 sm:px-6">
        <p className="text-center text-white/40 text-sm sm:text-base max-w-2xl mx-auto">
          Powered by the same AI systems used by Fortune 500 consulting firms.
          Serving businesses nationwide.
        </p>
      </section>

      {/* ========== FOOTER ========== */}
      <Footer />
    </main>
  );
}
