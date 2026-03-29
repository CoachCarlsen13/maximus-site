// Maximus AI Strategic Advisory — Homepage
// Created: 2026-03-17
// Updated: 2026-03-29 — Full rewrite: Joel headline directive + Promises vs Proof + 6-pillar system
// Aesthetic: Premium dark luxury consulting. Cormorant Garamond authority. Not generic AI.
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CTAButton from "../components/CTAButton";
import StatCard from "../components/StatCard";

// ─── System Pillars ─────────────────────────────────────────────────────────
const SYSTEM_PILLARS = [
  {
    id: "self-learning",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: "Self-Learning",
    description: "Every engagement makes the system sharper. It reads patterns across clients, markets, and outcomes — and rewrites its own playbooks.",
  },
  {
    id: "self-improving",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    label: "Self-Improving",
    description: "Every output is graded. Every grade drives an upgrade. The system that ran last quarter is measurably better than the one that runs today.",
  },
  {
    id: "self-governing",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10.5c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.634-.357-3.182-.995-4.578A11.956 11.956 0 0112 2.714z" />
      </svg>
    ),
    label: "Self-Governing",
    description: "A dual-constitution ethics engine runs underneath every output. Accuracy over speed. Integrity over shortcuts. No humans required to monitor it.",
  },
  {
    id: "parallelized",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    label: "Parallelized Intelligence",
    description: "12 specialized agents working simultaneously — not one AI thinking sequentially. The same intelligence McKinsey deploys 20 analysts to produce.",
  },
  {
    id: "verified",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375" />
      </svg>
    ),
    label: "Built to Eliminate Hallucinations",
    description: "Multi-layer verification on every data point. Source-traced intelligence. Quality-gated outputs. If we can't verify it, you won't see it.",
  },
  {
    id: "delivery",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "48-Hour Delivery",
    description: "Enterprise-grade competitive intelligence in 48 hours. What consulting firms charge $25,000 and three weeks for — delivered Tuesday.",
  },
];

// ─── Broken Promises (the before) ───────────────────────────────────────────
const BROKEN_PROMISES = [
  "\"Just adopt the tools and AI will transform your business.\"",
  "\"Our platform will automate everything — no expertise needed.\"",
  "\"Set it and forget it. The AI handles it from here.\"",
  "\"You'll see ROI in 30 days. Guaranteed.\"",
  "\"Our AI understands your business like a consultant would.\"",
];

export default function Home() {
  return (
    <>
      <Header />

      <main>

        {/* ═══════════════════════════════════════════════
            SECTION 1 — HERO
            Deep dark navy. Gold authority. Cormorant headlines.
            The promise-vs-proof framing opens here.
        ═══════════════════════════════════════════════ */}
        <section
          className="relative min-h-screen flex items-center pt-24 overflow-hidden"
          style={{ background: "linear-gradient(160deg, #070E1C 0%, #0F1A2E 60%, #1B2A4A 100%)" }}
        >
          {/* Deep atmospheric glow */}
          <div
            className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full opacity-30 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)",
              transform: "translate(20%, -20%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(46,74,122,0.4) 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
            }}
          />

          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(212,168,67,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,1) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Eyebrow */}
            <div className="animate-fade-in-up flex items-center gap-3 mb-10">
              <div className="h-px w-12 bg-gold/60" />
              <span
                className="text-gold/80 text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Maximus AI Strategic Advisory
              </span>
            </div>

            {/* Main headline — Cormorant Garamond display */}
            <h1
              className="animate-fade-in-up animate-delay-100 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#F8F9FA" }}
            >
              Everyone else made you{" "}
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(135deg, #D4A843 0%, #E8C97A 50%, #D4A843 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI promises.
              </em>
              <br />
              <span className="text-white/90">
                We built the system that{" "}
              </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #E8C97A 0%, #D4A843 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                actually delivers.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="animate-fade-in-up animate-delay-200 text-xl sm:text-2xl leading-relaxed mb-8 max-w-3xl"
              style={{
                color: "rgba(248,249,250,0.6)",
                fontFamily: "var(--font-sans)",
              }}
            >
              While competitors race to make AI faster and cheaper, we built it to be{" "}
              <span style={{ color: "rgba(248,249,250,0.9)" }}>trustworthy</span>
              {" "}— and then we made it smarter.{" "}
              <span style={{ color: "rgba(248,249,250,0.75)" }}>
                Our system is self-learning, self-improving, and self-optimizing. Every interaction makes it more intelligent, more accurate, and more valuable for your business. That&apos;s not a promise. That&apos;s how it&apos;s engineered.
              </span>
            </p>

            {/* Free Report value anchor */}
            <div
              className="animate-fade-in-up animate-delay-250 mb-10 p-5 rounded-xl max-w-2xl"
              style={{
                background: "rgba(212,168,67,0.06)",
                border: "1px solid rgba(212,168,67,0.18)",
              }}
            >
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(248,249,250,0.75)", fontFamily: "var(--font-sans)" }}
              >
                Consulting firms charge{" "}
                <span style={{ color: "#D4A843", fontWeight: 600 }}>$5,000 to $50,000</span>
                {" "}for competitive intelligence like this. We deliver your first report{" "}
                <span style={{ color: "#D4A843", fontWeight: 600 }}>FREE</span>
                {" "}— so you can experience the competitive advantage this level of business intelligence creates. We are convinced that once you experience Maximus AI&apos;s quality, accuracy, and consistency, you will never want to go without it again.
              </p>
            </div>

            {/* CTA row */}
            <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
              <CTAButton
                href="/free-report"
                size="xl"
                micro="No credit card. No sales call. Just intelligence."
              >
                $5,000 Business Intelligence Report — FREE
              </CTAButton>
              <a
                href="/free-report"
                className="text-white/40 text-sm hover:text-gold/80 transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                48-hour delivery →
              </a>
            </div>

            {/* Social proof bar */}
            <div
              className="animate-fade-in-up animate-delay-400 flex flex-wrap items-center gap-x-8 gap-y-3"
            >
              {[
                { value: "287", label: "Reports delivered this quarter" },
                { value: "48h", label: "Average delivery time" },
                { value: "$0", label: "Cost for your first report" },
              ].map((item) => (
                <div key={item.label} className="flex items-baseline gap-2">
                  <span
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "var(--font-display)",
                      background: "linear-gradient(135deg, #D4A843 0%, #E8C97A 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.value}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(148,163,184,0.8)", fontFamily: "var(--font-sans)" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECTION 2 — PROMISES VS PROOF
            The broken promises on the left, dim and struck.
            The Maximus answer on the right, gold and alive.
        ═══════════════════════════════════════════════ */}
        <section
          className="py-24 sm:py-32 lg:py-40 overflow-hidden"
          style={{ background: "#0A1120" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="animate-fade-in-up text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold/40" />
                <span
                  className="text-gold/60 text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  The Reality Check
                </span>
                <div className="h-px w-12 bg-gold/40" />
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                You&apos;ve heard this before.
              </h2>
              <p
                className="mt-6 text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Every tool. Every platform. Every consultant.
                The same promises. The same results.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* LEFT: The Promises — dim, struck, defeated */}
              <div className="animate-fade-in-up animate-delay-100">
                <div
                  className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border"
                  style={{
                    borderColor: "rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <span
                    className="text-xs font-semibold tracking-widest uppercase text-white/30"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    What they promised
                  </span>
                </div>

                <div className="space-y-5">
                  {BROKEN_PROMISES.map((promise, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-5 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full mt-0.5 flex items-center justify-center"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                      >
                        <svg className="w-3 h-3 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p
                        className="text-base leading-relaxed"
                        style={{
                          color: "rgba(255,255,255,0.25)",
                          fontFamily: "var(--font-sans)",
                          textDecoration: "line-through",
                          textDecorationColor: "rgba(255,255,255,0.12)",
                        }}
                      >
                        {promise}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: What we built — gold, alive, real */}
              <div className="animate-fade-in-up animate-delay-200">
                <div
                  className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border"
                  style={{
                    borderColor: "rgba(212,168,67,0.3)",
                    background: "rgba(212,168,67,0.05)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-sans)", color: "#D4A843" }}
                  >
                    What we built
                  </span>
                </div>

                <div className="space-y-5">
                  {[
                    "A system that learns from every client it serves — and gets measurably smarter.",
                    "Agents that run in parallel, like a 12-person McKinsey team working on your business simultaneously.",
                    "Quality gates that reject any output that can't be traced to verified real-world data.",
                    "A self-governing ethics engine that enforces accuracy and integrity without human oversight.",
                    "Intelligence delivered in 48 hours — not 3 weeks, not $25,000, not a deck of slide platitudes.",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300"
                      style={{
                        background: "rgba(212,168,67,0.04)",
                        border: "1px solid rgba(212,168,67,0.12)",
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full mt-0.5 flex items-center justify-center"
                        style={{ background: "rgba(212,168,67,0.2)" }}
                      >
                        <svg className="w-3 h-3" style={{ color: "#D4A843" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "rgba(248,249,250,0.80)", fontFamily: "var(--font-sans)" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECTION 3 — THE SYSTEM
            Six pillars. Dark cards with gold accents.
            Display font on labels. Body on descriptions.
        ═══════════════════════════════════════════════ */}
        <section
          className="py-24 sm:py-32 lg:py-40 overflow-hidden"
          style={{ background: "linear-gradient(180deg, #0F1A2E 0%, #1B2A4A 100%)" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="animate-fade-in-up text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold/40" />
                <span
                  className="text-gold/60 text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  The Architecture
                </span>
                <div className="h-px w-12 bg-gold/40" />
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                Six systems working as one.
              </h2>
              <p
                className="mt-6 text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ color: "rgba(148,163,184,0.8)", fontFamily: "var(--font-sans)" }}
              >
                This is why it works when everything else didn&apos;t.
                Each pillar reinforces the others — and the whole
                gets smarter over time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SYSTEM_PILLARS.map((pillar, i) => (
                <div
                  key={pillar.id}
                  className={`animate-fade-in-up animate-delay-${(i % 5 + 1) * 100} group p-8 rounded-2xl transition-all duration-300`}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(212,168,67,0.25)";
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(212,168,67,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: "rgba(212,168,67,0.1)", color: "#D4A843" }}
                  >
                    {pillar.icon}
                  </div>

                  {/* Label — display font */}
                  <h3
                    className="text-2xl text-white mb-3"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                  >
                    {pillar.label}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(148,163,184,0.7)", fontFamily: "var(--font-sans)" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Separator + closing statement */}
            <div className="mt-20 text-center">
              <div className="section-divider mb-12" />
              <p
                className="text-2xl sm:text-3xl text-white leading-snug max-w-3xl mx-auto"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                The system that runs tonight will be{" "}
                <em
                  className="not-italic"
                  style={{
                    background: "linear-gradient(135deg, #D4A843 0%, #E8C97A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  smarter by morning.
                </em>
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECTION 3B — SMB TARGET MARKET MESSAGING
            Who this was built for. Enterprise parity for SMBs.
        ═══════════════════════════════════════════════ */}
        <section
          className="py-20 sm:py-28 overflow-hidden"
          style={{ background: "#070E1C" }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-gold/40" />
              <span
                className="text-gold/60 text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Built For The 99%
              </span>
              <div className="h-px w-12 bg-gold/40" />
            </div>
            <h2
              className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              Enterprise companies spend{" "}
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(135deg, #D4A843 0%, #E8C97A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                $500 billion annually
              </em>
              {" "}to access this level of intelligence.
            </h2>
            <p
              className="animate-fade-in-up animate-delay-100 text-xl sm:text-2xl leading-relaxed mb-10 max-w-4xl mx-auto"
              style={{ color: "rgba(148,163,184,0.75)", fontFamily: "var(--font-sans)" }}
            >
              That&apos;s why they dominate. Until now, this caliber of analysis was reserved for businesses with the largest budgets.
            </p>
            <p
              className="animate-fade-in-up animate-delay-200 text-xl sm:text-2xl leading-relaxed max-w-4xl mx-auto"
              style={{ color: "rgba(248,249,250,0.85)", fontFamily: "var(--font-sans)" }}
            >
              That&apos;s why we built Maximus AI — to serve the{" "}
              <span style={{ color: "#D4A843" }}>SMBs, executives, entrepreneurs, solopreneurs, consultants, agencies, professional service providers, healthcare providers, legal firms, and home services businesses</span>
              {" "}who have been left in the dark.{" "}
              <strong style={{ color: "white" }}>Until now.</strong>
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECTION 3C — WHY WE CHOSE CLAUDE / ANTHROPIC
            Trust foundation. The most principled AI on the planet.
        ═══════════════════════════════════════════════ */}
        <section
          className="py-20 sm:py-28 overflow-hidden"
          style={{ background: "linear-gradient(180deg, #0A1120 0%, #0F1A2E 100%)" }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in-up flex items-center justify-center gap-3 mb-8 text-center">
              <div className="h-px w-12 bg-gold/40" />
              <span
                className="text-gold/60 text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                The Foundation
              </span>
              <div className="h-px w-12 bg-gold/40" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-8"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  We chose Claude because it&apos;s the most capable AI on the planet.
                  <br />
                  <em
                    className="not-italic"
                    style={{
                      background: "linear-gradient(135deg, #D4A843 0%, #E8C97A 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    And the most principled.
                  </em>
                </h2>
              </div>
              <div className="space-y-5">
                {[
                  "When others cut corners to move fast, Anthropic built Constitutional AI — a framework that encodes ethics directly into the model architecture.",
                  "When the pressure came to weaponize their models, they didn't blink. Anthropic declined government contracts for autonomous weapons systems.",
                  "That principled foundation is what Maximus is built on. The most powerful AND the most trustworthy.",
                  "Your business intelligence is generated by the same AI that refused to compromise its integrity when billions were on the table.",
                ].map((point, i) => (
                  <div
                    key={i}
                    className="animate-fade-in-up flex items-start gap-4 p-5 rounded-xl"
                    style={{
                      background: "rgba(212,168,67,0.04)",
                      border: "1px solid rgba(212,168,67,0.1)",
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full mt-0.5 flex items-center justify-center"
                      style={{ background: "rgba(212,168,67,0.2)" }}
                    >
                      <svg className="w-3 h-3" style={{ color: "#D4A843" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "rgba(248,249,250,0.75)", fontFamily: "var(--font-sans)" }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECTION 3D — DUAL-CONSTITUTION GOVERNANCE
            Prominent. Not buried. The ethical moat.
        ═══════════════════════════════════════════════ */}
        <section
          className="py-20 sm:py-28 overflow-hidden"
          style={{ background: "#070E1C" }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in-up text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold/40" />
                <span
                  className="text-gold/60 text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Governance
                </span>
                <div className="h-px w-12 bg-gold/40" />
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                Two constitutions.
                <br />
                <em
                  className="not-italic"
                  style={{
                    background: "linear-gradient(135deg, #D4A843 0%, #E8C97A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Zero compromise.
                </em>
              </h2>
              <p
                className="text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ color: "rgba(148,163,184,0.7)", fontFamily: "var(--font-sans)" }}
              >
                Every Maximus AI system operates under two non-negotiable governance frameworks simultaneously.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "The Anthropic Constitution",
                  subtitle: "Model-level. Structural. Cannot be overridden.",
                  body: "The AI is honest, ethical, and never causes harm — the same foundation that led Anthropic to refuse government contracts for autonomous weapons. This is baked into the model architecture, not layered on top.",
                  color: "#3B7DD8",
                },
                {
                  title: "The Maximus Constitution",
                  subtitle: "8 rules. Zero tolerance. Absolute operational integrity.",
                  body: "No deception. No hallucination concealment. No dark patterns. No conflicts of interest. Every output must pass an integrity check before it reaches you. Our AI agents operate under the same ethical standards we hold ourselves to.",
                  color: "#D4A843",
                },
              ].map((doc, i) => (
                <div
                  key={i}
                  className="animate-fade-in-up p-8 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: `1px solid ${doc.color}30`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${doc.color}18` }}
                  >
                    <svg className="w-6 h-6" style={{ color: doc.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10.5c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.634-.357-3.182-.995-4.578A11.956 11.956 0 0112 2.714z" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl text-white mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                  >
                    {doc.title}
                  </h3>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{ color: doc.color, fontFamily: "var(--font-sans)" }}
                  >
                    {doc.subtitle}
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(148,163,184,0.75)", fontFamily: "var(--font-sans)" }}
                  >
                    {doc.body}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="animate-fade-in-up p-6 rounded-xl text-center"
              style={{
                background: "rgba(212,168,67,0.04)",
                border: "1px solid rgba(212,168,67,0.15)",
              }}
            >
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(248,249,250,0.8)", fontFamily: "var(--font-sans)" }}
              >
                <strong style={{ color: "#D4A843" }}>Our competitors cannot tell you what rules their AI follows.</strong>
                {" "}We can show you two documents that prove it. This is the only dual-constitution AI governance framework in the market.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECTION 4 — PROOF
            Stats on dark. Authority numbers.
        ═══════════════════════════════════════════════ */}
        <section
          className="py-24 sm:py-32"
          style={{ background: "#070E1C" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="animate-fade-in-up text-center mb-16">
              <h2
                className="text-4xl sm:text-5xl text-white leading-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                This isn&apos;t theory.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #D4A843 0%, #E8C97A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  It&apos;s already happening.
                </span>
              </h2>
              <p
                className="mt-5 text-lg max-w-xl mx-auto"
                style={{ color: "rgba(148,163,184,0.6)", fontFamily: "var(--font-sans)" }}
              >
                Businesses using AI-powered competitive intelligence
                are consistently outperforming peers who don&apos;t.
              </p>
            </div>

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

            <p
              className="animate-fade-in-up animate-delay-500 text-center mt-10 text-sm"
              style={{ color: "rgba(100,116,139,0.6)", fontFamily: "var(--font-sans)" }}
            >
              Sources: McKinsey &amp; Company Global AI Survey · Harvard Business Review · OpenAI Enterprise Adoption Report
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECTION 5 — WHAT MAXIMUS DELIVERS
            Four intelligence pillars. Clean dark cards.
        ═══════════════════════════════════════════════ */}
        <section
          className="py-24 sm:py-32 lg:py-40"
          style={{ background: "#0A1120" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="animate-fade-in-up text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold/40" />
                <span
                  className="text-gold/60 text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  What You Receive
                </span>
                <div className="h-px w-12 bg-gold/40" />
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                Enterprise intelligence.
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #D4A843 0%, #E8C97A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Built for your business.
                </span>
              </h2>
              <p
                className="mt-6 text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ color: "rgba(148,163,184,0.7)", fontFamily: "var(--font-sans)" }}
              >
                Four pillars of intelligence that transform how
                you compete — specific to your market, your
                competitors, your revenue gaps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>
                  ),
                  title: "Competitor Intelligence",
                  body: "Which competitors are gaining ground in your market — and the specific, actionable moves to block them. Not a list of names. A battle plan.",
                  tag: "Competitive Edge Report",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Revenue Recovery",
                  body: "Revenue Recovery — Where you are spending thousands on manual tasks AI handles at a fraction of the cost — quantified, prioritized, and mapped to a clear implementation plan.",
                  tag: "AI Operations Audit",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "AI Visibility Score",
                  body: "When a customer asks ChatGPT or Claude for a recommendation in your space — do you appear? We measure it. Then fix it.",
                  tag: "GEO Audit",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  ),
                  title: "Growth Simulation",
                  body: "An interactive model built specifically for your business. Toggle improvements and watch the revenue math change in real time. No guesswork.",
                  tag: "Growth Simulator",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`animate-fade-in-up animate-delay-${(i + 1) * 100} group p-8 lg:p-10 rounded-2xl transition-all duration-300`}
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,168,67,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: "rgba(212,168,67,0.08)", color: "#D4A843" }}
                  >
                    {item.icon}
                  </div>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 tracking-wide"
                    style={{
                      background: "rgba(212,168,67,0.08)",
                      color: "rgba(212,168,67,0.8)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {item.tag}
                  </div>
                  <h3
                    className="text-2xl text-white mb-4"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(148,163,184,0.7)", fontFamily: "var(--font-sans)" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECTION 6 — HOW IT WORKS
            Three-step process. Clean on white.
        ═══════════════════════════════════════════════ */}
        <section className="bg-light py-24 sm:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="animate-fade-in-up text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12" style={{ background: "rgba(27,42,74,0.3)" }} />
                <span
                  className="text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ color: "rgba(27,42,74,0.5)", fontFamily: "var(--font-sans)" }}
                >
                  The Process
                </span>
                <div className="h-px w-12" style={{ background: "rgba(27,42,74,0.3)" }} />
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                Three steps.
                <br />
                No complexity. No contract.
              </h2>
            </div>

            <div className="space-y-16 lg:space-y-20">
              {[
                {
                  num: "01",
                  tag: "Free",
                  title: "We reveal your blind spots.",
                  body: "In 48 hours, you receive a competitive intelligence report showing exactly where you stand — who your real threats are, where your revenue is leaking, what AI opportunities you're missing, and what your competitors can't yet see. Consulting firms charge $5,000–$25,000 for this analysis. You get it free.",
                  fine: "48-hour delivery. No credit card. No sales call. No obligation.",
                },
                {
                  num: "02",
                  tag: "Interactive",
                  title: "You see your numbers.",
                  body: "We build you an interactive growth model specific to your business. Toggle individual improvements and watch how each one impacts your revenue, costs, and market position. Not generic projections. Your data. Your market. Your opportunity.",
                  fine: "Scenario modeling. Real projections. Built for your business.",
                },
                {
                  num: "03",
                  tag: "Ongoing",
                  title: "We build your edge.",
                  body: "We deploy the intelligence systems that keep you ahead — continuous competitor monitoring, AI-powered operational improvements, and strategic insights delivered on your schedule. You stop guessing. You start knowing. Every decision backed by data your competitors don't have.",
                  fine: "Continuous monitoring. Measurable results. Your system, not a subscription.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="animate-fade-in-up flex flex-col lg:flex-row items-start gap-8 lg:gap-12"
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #D4A843 0%, #E8C97A 100%)",
                      }}
                    >
                      <span
                        className="text-3xl font-black"
                        style={{ color: "#1B2A4A", fontFamily: "var(--font-display)" }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3
                        className="text-2xl sm:text-3xl text-navy"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                      >
                        {step.title}
                      </h3>
                      {step.tag === "Free" && (
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                          style={{
                            background: "rgba(212,168,67,0.12)",
                            color: "#B08A2E",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {step.tag}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-lg leading-relaxed mb-3"
                      style={{ color: "#64748B", fontFamily: "var(--font-sans)" }}
                    >
                      {step.body}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "#94A3B8", fontFamily: "var(--font-sans)" }}
                    >
                      {step.fine}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <CTAButton
                href="/free-report"
                size="lg"
                micro=""
              >
                Start Free — $5,000 Business Intelligence Report
              </CTAButton>
              <p
                className="mt-4 text-sm"
                style={{ color: "#94A3B8", fontFamily: "var(--font-sans)" }}
              >
                Step 1 is free. Always.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SECTION 7 — FINAL CTA
            Deep dark. Gold glow. Maximum authority.
        ═══════════════════════════════════════════════ */}
        <section
          className="relative py-28 sm:py-36 lg:py-44 overflow-hidden"
          style={{ background: "linear-gradient(160deg, #070E1C 0%, #0F1A2E 50%, #1B2A4A 100%)" }}
        >
          {/* Gold radial glow behind CTA */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 65%)",
            }}
          />

          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(212,168,67,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,1) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            {/* Eyebrow */}
            <div className="animate-fade-in-up flex items-center justify-center gap-3 mb-10">
              <div className="h-px w-12 bg-gold/40" />
              <span
                className="text-gold/60 text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                The Clock Is Running
              </span>
              <div className="h-px w-12 bg-gold/40" />
            </div>

            <h2
              className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              Every day you wait,
              <br />
              your competitor is one day closer to{" "}
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(135deg, #D4A843 0%, #E8C97A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                finding this first.
              </em>
            </h2>

            <p
              className="animate-fade-in-up animate-delay-200 text-xl sm:text-2xl leading-relaxed mb-14 max-w-2xl mx-auto"
              style={{ color: "rgba(248,249,250,0.55)", fontFamily: "var(--font-sans)" }}
            >
              The free intelligence report takes 48 hours.
              Zero cost. Zero commitment. Zero risk.
            </p>

            <div className="animate-fade-in-up animate-delay-300">
              <CTAButton
                href="/free-report"
                size="xl"
                micro="287 businesses in South Florida requested their report this quarter."
              >
                Claim Your $5,000 Business Intelligence Report — FREE
              </CTAButton>
            </div>

            {/* Trust signals */}
            <div
              className="animate-fade-in-up animate-delay-400 flex flex-wrap justify-center gap-x-10 gap-y-4 mt-12"
            >
              {[
                "No credit card required",
                "No sales call attached",
                "Delivered in 48 hours",
              ].map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    style={{ color: "rgba(212,168,67,0.6)" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(148,163,184,0.6)", fontFamily: "var(--font-sans)" }}
                  >
                    {signal}
                  </span>
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
