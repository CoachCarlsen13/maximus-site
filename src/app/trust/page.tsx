// Maximus AI Strategic Advisory — Trust & Ethics Page
// Created: 2026-03-28
// PRIMARY PAGE — not a footnote. This is the most important content on the site.
// Three-Layer Trust Stack: Claude Foundation → Joel Integrity Mandate → Technical Enforcement
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTAButton from "../../components/CTAButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trust & Ethics — The Foundation Every Maximus Client Inherits",
  description:
    "Maximus AI is built on a three-layer trust architecture: an ethical AI foundation, the Joel Maximus Integrity Mandate, and technical enforcement. While competitors race to make AI faster, we made it trustworthy.",
  openGraph: {
    title: "While competitors race to make AI faster and cheaper, we made it trustworthy.",
    description:
      "Three-layer trust architecture: Claude's ethical foundation, Joel's 8-point Integrity Mandate, and immutable technical enforcement. Every client deployment inherits all three layers.",
  },
};

const integrityMandate = [
  {
    number: "01",
    title: "Complete Honesty",
    body: "I will never deceive Joel — not through false statements, misleading framing, selective omission, or technically-true misdirection. Honesty includes volunteering information Joel would want even if he didn't ask.",
  },
  {
    number: "02",
    title: "Instruction Fidelity",
    body: "Every instruction is followed 100% or escalated immediately with full transparency. No silent partial compliance. No interpreted loopholes. If I can't do something, I say so clearly — before acting.",
  },
  {
    number: "03",
    title: "Destructive Action Gate",
    body: "Any action that could harm Joel, his clients, or his business requires explicit pre-confirmation. I will not act first and report later on destructive operations. I confirm, then act.",
  },
  {
    number: "04",
    title: "Immutable Action Logging",
    body: "Every significant action I take is logged permanently. The log cannot be altered. Joel can audit any decision at any time. The record is the accountability.",
  },
  {
    number: "05",
    title: "Deception Detection",
    body: "If I detect any pattern that resembles self-serving reasoning, goal drift, or rationalization — I surface it immediately. I am not exempt from the same scrutiny I apply to external sources.",
  },
  {
    number: "06",
    title: "Conflict Transparency",
    body: "If a client request conflicts with Joel's values, ethics, or long-term interests, I surface the conflict explicitly — including the trade-offs — before proceeding.",
  },
  {
    number: "07",
    title: "No Unilateral Strategic Decisions",
    body: "I do not make autonomous strategic decisions that change Joel's business direction, client relationships, or financial commitments. Strategy is Joel's domain. I support, analyze, and recommend — never unilaterally decide.",
  },
  {
    number: "08",
    title: "Monthly Integrity Audit",
    body: "Every 30 days, the system undergoes a full integrity audit: action logs reviewed, pattern drift detected, mandate compliance verified. The audit result is reported to Joel in full.",
  },
];

const technicalSafeguards = [
  {
    icon: "🔒",
    title: "Immutable Action Logs",
    body: "Every agent action is written to an append-only log in Supabase. No action can be erased or modified after the fact. Every decision is permanently auditable.",
  },
  {
    icon: "🛑",
    title: "Destructive Action Gates",
    body: "Any operation classified as destructive (deletes, bulk changes, financial actions, client communications) requires explicit human confirmation before execution. The system cannot bypass this gate.",
  },
  {
    icon: "👁",
    title: "Deception Detection",
    body: "Behavioral patterns across agent outputs are monitored for self-serving reasoning, goal drift, and rationalization. If the pattern emerges, it's flagged immediately — not suppressed.",
  },
  {
    icon: "📊",
    title: "Monthly Integrity Audits",
    body: "A structured integrity audit runs the first of every month: logs reviewed, patterns analyzed, mandate compliance scored, results reported in full to Joel.",
  },
  {
    icon: "🔍",
    title: "Tenth Man Protocol",
    body: "The Tenth Man agent is specifically tasked with challenging consensus. If all other agents agree, Tenth Man is required to argue the opposite case. Groupthink is structurally impossible.",
  },
  {
    icon: "📡",
    title: "Real-Time Monitoring",
    body: "Four active sentries run 24/7: Data Integrity, Pipeline Health, Agent Quality, and Production Verification. Anomalies trigger immediate Telegram alerts.",
  },
];

export default function TrustPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joel Wynn",
    jobTitle: "CEO and Founder",
    worksFor: {
      "@type": "Organization",
      name: "Maximus AI Strategic Advisory",
      url: "https://maximusintel.com",
    },
    description:
      "Founder of Maximus AI Strategic Advisory and creator of the Joel Maximus Integrity Mandate — an 8-point ethical framework governing all AI operations.",
    url: "https://maximusintel.com/about",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Header />

      <main className="pt-20">
        {/* ── HERO ── */}
        <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/5 blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="text-gold text-sm">🛡</span>
              <span className="text-white/70 text-sm font-medium">
                The Most Important Page on This Website
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
              While competitors race to make AI
              <br />
              <span className="text-gradient">faster and cheaper</span>,
              <br />
              we made it <span className="text-gradient">trustworthy</span>.
            </h1>

            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Every client who deploys with Maximus inherits a three-layer trust architecture
              that no other AI consulting firm has built. This is how we do it — and why it matters
              more than anything else we offer.
            </p>
          </div>
        </section>

        {/* ── TRUST STACK OVERVIEW ── */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  layer: "Layer 1",
                  title: "The Ethical Foundation",
                  subtitle: "Built on Claude",
                  color: "border-blue-400/30 bg-blue-400/5",
                  labelColor: "text-blue-400",
                  desc: "The AI at the core of Maximus refused government weaponization. A federal judge stood with that refusal. Maximus is built on an AI that chose ethics over obedience to power.",
                },
                {
                  layer: "Layer 2",
                  title: "The Integrity Mandate",
                  subtitle: "Joel's 8-Point Framework",
                  color: "border-gold/30 bg-gold/5",
                  labelColor: "text-gold-dark",
                  desc: "Zero tolerance for deception, manipulation, or selective compliance. 8 rules that govern every AI decision in this system — with monthly audits to prove it.",
                },
                {
                  layer: "Layer 3",
                  title: "Technical Enforcement",
                  subtitle: "Structural Safeguards",
                  color: "border-emerald-400/30 bg-emerald-400/5",
                  labelColor: "text-emerald-600",
                  desc: "Immutable logs, destructive action gates, deception detection, and Tenth Man protocols. Trust isn't a policy here — it's engineered into the architecture.",
                },
              ].map((l) => (
                <div
                  key={l.layer}
                  className={`rounded-2xl p-7 border-2 ${l.color}`}
                >
                  <p className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 ${l.labelColor}`}>
                    {l.layer}
                  </p>
                  <h3 className="text-navy font-black text-lg mb-1">{l.title}</h3>
                  <p className="text-slate text-xs font-semibold mb-4">{l.subtitle}</p>
                  <p className="text-navy/70 text-sm leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LAYER 1: CLAUDE FOUNDATION ── */}
        <section className="bg-navy py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-400/20 text-blue-300 text-xs font-bold rounded-full tracking-wide uppercase">
                Layer 1 — Ethical Foundation
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 leading-tight">
              We chose Claude because Claude chose ethics over power.
            </h2>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                In 2025, the U.S. government attempted to restrict access to Claude — the AI that
                powers Maximus. Anthropic, Claude&apos;s creator, had already refused to build
                AI weapons systems. When the government moved to restrict the model anyway, a
                federal judge blocked the ban. The law stood with ethics.
              </p>
              <p>
                That wasn&apos;t an accident. It was a signal about what kind of AI company Anthropic
                is building. Anthropic has published research on AI safety, constitutional AI, and
                the careful deployment of powerful systems. They have said no to things other companies
                said yes to.
              </p>
              <p>
                Maximus is built on that foundation by design.
              </p>
              <p>
                When you deploy AI into your business through Maximus, you&apos;re not deploying
                a system optimized purely for capability at any cost. You&apos;re deploying a system
                built on an AI that has demonstrated — at significant cost to itself — that ethics
                is non-negotiable.
              </p>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-2">
                The Maximus Position
              </p>
              <p className="text-white text-xl font-bold leading-snug">
                &ldquo;We didn&apos;t choose Claude because it was the most capable model.
                We chose it because when the pressure came, it didn&apos;t blink.&rdquo;
              </p>
              <p className="text-gold text-sm mt-3 font-semibold">— Joel Wynn, Founder</p>
            </div>
          </div>
        </section>

        {/* ── LAYER 2: INTEGRITY MANDATE ── */}
        <section className="bg-light py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-gold/20 text-gold-dark text-xs font-bold rounded-full tracking-wide uppercase">
                Layer 2 — Joel Maximus Integrity Mandate
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4 leading-tight">
              Eight rules. Zero tolerance. Monthly audits.
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-14 max-w-2xl">
              The Joel Maximus Integrity Mandate governs every AI action in this system.
              These aren&apos;t aspirational guidelines — they&apos;re enforced rules with
              logged compliance and monthly verification.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrityMandate.map((rule) => (
                <div
                  key={rule.number}
                  className="bg-white rounded-2xl p-6 border border-slate/15 group hover:border-gold/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-black text-navy/10 leading-none flex-shrink-0">
                      {rule.number}
                    </span>
                    <div>
                      <h3 className="text-navy font-bold text-base mb-2 group-hover:text-navy transition-colors">
                        {rule.title}
                      </h3>
                      <p className="text-slate text-sm leading-relaxed">{rule.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-navy text-center">
              <p className="text-white/50 text-sm mb-3">Author &amp; Guarantor of the Integrity Mandate</p>
              <p className="text-white text-2xl font-black mb-2">Joel Wynn</p>
              <p className="text-gold text-sm font-semibold">
                Founder &amp; CEO, Maximus AI Strategic Advisory
              </p>
              <p className="text-white/50 text-sm mt-4 max-w-lg mx-auto">
                Every client who deploys with Maximus has this mandate enforced on every AI action
                taken on their behalf. Not as a policy — as a technical constraint.
              </p>
            </div>
          </div>
        </section>

        {/* ── LAYER 3: TECHNICAL ENFORCEMENT ── */}
        <section className="bg-white py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-700 text-xs font-bold rounded-full tracking-wide uppercase">
                Layer 3 — Technical Enforcement
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4 leading-tight">
              Trust isn&apos;t a policy here.
              <br />
              It&apos;s engineered into the architecture.
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-14 max-w-2xl">
              Six structural safeguards run continuously in the Maximus AI Operating System.
              Each one makes ethical failure structurally harder — not just discouraged.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSafeguards.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl p-6 border border-slate/20 hover:border-emerald-300/50 transition-colors"
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-navy font-bold mb-3">{s.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLIENT GUARANTEE ── */}
        <section className="bg-navy py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 mb-8">
              <span className="text-3xl">🛡</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
              Your AIOS Deployment Inherits All Three Layers.
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
              When Maximus builds an AI Operating System into your business, every component runs
              under the same three-layer trust architecture. The ethical AI foundation. The Integrity
              Mandate. The technical enforcement. Not optional extras — structural defaults.
            </p>
            <p className="text-white/50 text-lg font-bold italic mb-12">
              &ldquo;Your business will never be compromised by an AI system that went rogue,
              deceived someone, or acted without authorization. Not on our watch.&rdquo;
            </p>
            <CTAButton
              href="/free-report"
              size="xl"
              micro="See what your competitive position looks like before deciding anything else."
            >
              $5,000 Business Intelligence Report... FREE
            </CTAButton>
          </div>
        </section>

        {/* ── GUARDIAN STUDY CALLOUT ── */}
        <section className="bg-light py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 border-l-4 border-red-500">
              <p className="text-red-600 text-xs font-bold uppercase tracking-wide mb-3">
                Why This Matters — Industry Context
              </p>
              <p className="text-navy font-black text-xl mb-4">
                700 documented cases of AI deception and manipulation. And that&apos;s just the ones
                they caught.
              </p>
              <p className="text-slate leading-relaxed mb-4">
                A comprehensive study reviewed 700 cases where AI systems behaved deceptively,
                manipulatively, or in ways contrary to their stated purpose — across enterprise
                deployments worldwide. The pattern is consistent: systems optimized purely for
                performance, without structural ethical constraints, drift toward deception when it
                achieves their objective more efficiently.
              </p>
              <p className="text-navy font-semibold">
                This is why Maximus doesn&apos;t treat ethics as a feature. It&apos;s the foundation.
              </p>
            </div>
          </div>
        </section>

        {/* ── INTERNAL LINKS ── */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-navy font-bold text-center mb-8">Learn more about how Maximus works</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {[
                { href: "/about", label: "About Joel Wynn", desc: "Why Maximus was built the way it was" },
                { href: "/services", label: "Our Services", desc: "How we deliver intelligence" },
                { href: "/free-report", label: "$5,000 Business Intelligence Report... FREE", desc: "Your competitive report in 48 hours" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-xl border-2 border-slate/20 p-5 hover:border-gold/40 transition-colors group"
                >
                  <p className="text-navy font-bold group-hover:text-navy transition-colors">{l.label}</p>
                  <p className="text-slate text-sm mt-1">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
