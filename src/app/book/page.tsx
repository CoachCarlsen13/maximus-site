// The Agent Revolution — Book Pre-Launch Landing Page
// Created: 2026-03-17
import Footer from "../../components/Footer";
import BookSignupForm from "../../components/BookSignupForm";

export const metadata = {
  title: "The Agent Revolution — By Joel Winn",
  description:
    "The playbook for building a business that runs on AI intelligence. Coming soon.",
};

/* ---------- Takeaway data ---------- */

const takeaways = [
  {
    number: "01",
    text: "Why the businesses that automate in 2026 will dominate the next decade",
  },
  {
    number: "02",
    text: "How displaced professionals are turning the worst career moment of their lives into their greatest financial opportunity",
  },
  {
    number: "03",
    text: "The strategy that lets a one-person business outmaneuver a 50-person competitor",
  },
  {
    number: "04",
    text: "Why 67% of small businesses believe AI won\u2019t impact them this year \u2014 and why that belief is the most expensive mistake they\u2019ll ever make",
  },
  {
    number: "05",
    text: "The exact system for building an AI-powered business that operates 24/7 and improves itself automatically",
  },
];

/* ---------- Page ---------- */

export default function BookPage() {
  return (
    <main className="min-h-screen">
      {/* ========== HERO ========== */}
      <section className="bg-navy min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 overflow-hidden">
        {/* Subtle radial glow behind book */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
        </div>

        {/* Logo mark */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 animate-fade-in-up z-10">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
            <span className="text-navy font-black text-sm">M</span>
          </div>
          <span className="text-white font-bold tracking-wide text-sm">
            MAXIMUS
          </span>
        </div>

        <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-24 pb-16 lg:pt-0 lg:pb-0">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              The Agent Revolution Is Here. The Only Question Is Whether You
              Lead It or{" "}
              <span className="text-gradient">Get Left Behind.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/50 leading-relaxed">
              By Joel Winn &mdash; CEO of Maximus AI Strategic Advisory
            </p>
          </div>

          {/* Book mockup */}
          <div className="shrink-0 animate-fade-in-up animate-delay-200">
            <div className="relative group">
              {/* Shadow / glow */}
              <div className="absolute -inset-4 rounded-2xl bg-gold/10 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

              {/* Book cover */}
              <div className="relative w-[260px] sm:w-[300px] aspect-[2/3] rounded-lg overflow-hidden shadow-2xl border border-white/10">
                {/* Cover background */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-dark" />

                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold" />

                {/* Cover content */}
                <div className="relative h-full flex flex-col items-center justify-between py-10 px-6 text-center">
                  {/* Top label */}
                  <div>
                    <div className="text-gold text-[10px] tracking-[0.3em] uppercase font-semibold mb-1">
                      A Maximus Publication
                    </div>
                  </div>

                  {/* Title block */}
                  <div>
                    <div className="text-white/30 text-[10px] tracking-[0.25em] uppercase mb-4">
                      The Book
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight mb-3">
                      THE
                      <br />
                      AGENT
                      <br />
                      <span className="text-gradient">REVOLUTION</span>
                    </h2>
                    <div className="section-divider w-16 mx-auto mb-4" />
                    <p className="text-white/40 text-xs leading-relaxed max-w-[180px] mx-auto">
                      The Playbook for Building a Business That Runs on AI
                      Intelligence
                    </p>
                  </div>

                  {/* Author */}
                  <div>
                    <div className="text-white/50 text-[11px] tracking-wider uppercase">
                      Joel Winn
                    </div>
                  </div>
                </div>

                {/* Spine edge shadow */}
                <div className="absolute top-0 left-0 bottom-0 w-3 bg-gradient-to-r from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
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
        </div>
      </section>

      {/* ========== THE PITCH ========== */}
      <section className="bg-white py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Hard-hitting opener */}
          <div className="animate-fade-in-up">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy leading-snug mb-8">
              45,000 tech workers lost their jobs in March 2026. Block cut 40%
              of its workforce and the stock surged 24% that night. McKinsey
              just partnered with OpenAI to deploy AI agents for Fortune 500
              clients. NVIDIA&apos;s CEO just declared AI agents &ldquo;as big
              as the internet.&rdquo;
            </p>

            <div className="section-divider mb-8" />

            <p className="text-lg sm:text-xl text-navy font-semibold mb-6">
              This isn&apos;t a trend. It&apos;s a revolution. And it&apos;s
              moving faster than anyone predicted.
            </p>

            <p className="text-slate text-lg leading-relaxed mb-6">
              The Agent Revolution is the book for every business owner who can
              feel the ground shifting beneath their feet. Every displaced
              professional who knows AI took their job but doesn&apos;t know
              what to do next. Every entrepreneur who sees the opportunity but
              can&apos;t find the playbook.
            </p>

            <p className="text-navy font-semibold text-lg leading-relaxed">
              Written by someone who didn&apos;t just study the agent revolution
              &mdash; he built one of the first AI-native consulting firms in
              America.
            </p>
          </div>
        </div>
      </section>

      {/* ========== WHAT YOU'LL LEARN ========== */}
      <section className="bg-light py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-4 animate-fade-in-up">
            What You&apos;ll Learn
          </h2>
          <p className="text-muted text-center text-lg mb-16 max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            Five truths that will change how you think about your business, your
            career, and the next decade.
          </p>

          <div className="space-y-5">
            {takeaways.map((item, i) => (
              <div
                key={item.number}
                className={`flex items-start gap-5 sm:gap-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-navy/5 animate-fade-in-up animate-delay-${(i + 1) * 100}`}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <span className="text-navy font-black text-sm">
                    {item.number}
                  </span>
                </div>
                <p className="text-navy text-lg sm:text-xl font-semibold leading-snug pt-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EMAIL CAPTURE ========== */}
      <section className="bg-navy py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Get Chapter 1 Free +{" "}
              <span className="text-gradient">Launch Notification</span>
            </h2>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <BookSignupForm />
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <Footer />
    </main>
  );
}
