// Maximus AI Strategic Advisory — About Page
// Created: 2026-03-28
// Joel Wynn story, founding principle, named after son Maximus (US Marine MP)
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTAButton from "../../components/CTAButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Joel Wynn — Founder, Maximus AI Strategic Advisory",
  description:
    "Joel Wynn founded Maximus AI on a principle: those who have the ability have the responsibility to help and protect those who can't. Named after his son Maximus, a US Marine Military Police officer.",
  openGraph: {
    title: "About Joel Wynn — Why Maximus Was Built",
    description:
      "The story behind Maximus AI: a founder who believed the largest unemployment event in human history could become the biggest financial opportunity — for the businesses willing to move first.",
  },
};

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joel Wynn",
    jobTitle: "CEO and Founder",
    worksFor: {
      "@type": "Organization",
      name: "Maximus AI Strategic Advisory",
    },
    description:
      "Founder of Maximus AI Strategic Advisory. Former AI consultant at Communications Consulting Group. Author of The Agent Revolution. Based in Jupiter, Florida.",
    url: "https://maximusintel.com/about",
    sameAs: ["https://maximusintel.com"],
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
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-80" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">
              About the Founder
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
              Why I Built{" "}
              <span className="text-gradient">Maximus</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              The story starts with a principle I was raised with and a son whose name I chose to
              carry forward. By{" "}
              <strong className="text-white">Joel Wynn</strong>, Founder &amp; CEO.
            </p>
          </div>
        </section>

        {/* ── FOUNDING PRINCIPLE ── */}
        <section className="bg-white py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-2xl bg-navy mb-16 text-center">
              <p className="text-white/40 text-sm font-semibold uppercase tracking-wide mb-4">
                The Founding Principle
              </p>
              <p className="text-2xl sm:text-3xl font-black text-white leading-snug">
                &ldquo;Those who have the ability have the responsibility to help and protect those
                who can&apos;t help and protect themselves.&rdquo;
              </p>
            </div>

            <div className="prose-maximus space-y-7 text-navy/80 text-lg leading-relaxed">
              <p>
                My son&apos;s name is Maximus. He&apos;s a United States Marine Military Police officer.
                When he shipped out, I didn&apos;t name this company after him because it sounded
                powerful. I named it after him because of what he represents: the willingness to step
                forward when something needs protecting, regardless of the personal cost.
              </p>

              <p>
                I built Maximus AI because I watched something happening that nobody in the business
                world was being honest about.
              </p>

              <p>
                AI is not coming for jobs. AI is already here — and the businesses that understand
                it are quietly pulling away from those that don&apos;t. The gap is compounding
                every month. And the businesses getting left behind aren&apos;t slow or stupid —
                they&apos;re just operating without the intelligence that the enterprise world has
                had for years.
              </p>

              <h2 className="text-2xl font-black text-navy mt-12 mb-6">
                The Mission: Turn a Catastrophe Into an Opportunity
              </h2>

              <p>
                The World Economic Forum projects 92 million jobs displaced by AI. Goldman Sachs
                says 300 million. By any estimate, we are in the early stages of the largest
                workforce disruption in human history.
              </p>

              <p>
                Most people are treating that as a tragedy to manage. I see it differently.
              </p>

              <p>
                The businesses that move first — the ones that build AI into their operations
                before their competitors do — won&apos;t just survive this disruption. They&apos;ll
                use it to achieve a competitive position they could never have reached otherwise.
                The cost and capability structures are changing in their favor. The question is
                whether they act on it.
              </p>

              <p>
                That&apos;s the opportunity Maximus exists to capture. For the businesses we work with.
              </p>

              <h2 className="text-2xl font-black text-navy mt-12 mb-6">
                Why Small Business — Not Enterprise
              </h2>

              <p>
                Enterprise companies already have McKinsey. They already have BCG. They already
                have armies of analysts, data teams, and competitive intelligence functions.
              </p>

              <p>
                Small and mid-sized businesses have none of that. They compete on instinct,
                relationships, and hustle. Which worked fine until their competitors started
                deploying AI and the game changed overnight.
              </p>

              <p>
                The intelligence that enterprise companies pay millions for — market analysis,
                competitor monitoring, operational efficiency mapping — is now achievable for any
                business at a fraction of the cost. But only if someone builds the system that
                delivers it.
              </p>

              <p>
                Maximus is that system.
              </p>

              <h2 className="text-2xl font-black text-navy mt-12 mb-6">
                The Trust Problem I Refused to Ignore
              </h2>

              <p>
                When I started building this, I quickly ran into the question that everyone in AI
                consulting is avoiding: how do you trust a system making decisions about your
                business?
              </p>

              <p>
                I decided to answer it directly instead of hoping clients wouldn&apos;t ask. The
                result is the{" "}
                <Link href="/trust" className="text-navy font-bold underline hover:text-gold-dark transition-colors">
                  Three-Layer Trust Architecture
                </Link>{" "}
                — an ethical AI foundation, an 8-point integrity mandate that I personally
                guarantee, and technical enforcement that makes deception structurally difficult.
              </p>

              <p>
                It&apos;s the most important thing we built. Not the intelligence engine. Not the
                automation. The trust architecture.
              </p>

              <p className="text-navy font-semibold">
                Because if you can&apos;t trust the system, you won&apos;t use it. And if you don&apos;t
                use it, none of the capability matters.
              </p>
            </div>
          </div>
        </section>

        {/* ── CCG BACKGROUND ── */}
        <section className="bg-light py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-navy mb-8 text-center">
              The Background That Shapes the Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  label: "AI Consulting",
                  body: "AI Consultant at Communications Consulting Group — the largest independent telecom consulting firm in the U.S., advocating for HOAs, COAs, and POAs. Brought AI into one of the most relationship-driven industries in the country.",
                },
                {
                  label: "The Agent Revolution",
                  body: "Author of The Agent Revolution — a book on AI&apos;s transformative impact on business and workforce. The argument: this isn&apos;t a technology shift. It&apos;s a power transfer — and the businesses who understand that get the power.",
                },
                {
                  label: "Jupiter, Florida",
                  body: "Based in Jupiter, FL. Deep market knowledge of South Florida&apos;s SMB landscape — medical spas, dental practices, home services, professional services. The same methodology that works here works nationally.",
                },
                {
                  label: "The Standard",
                  body: "Every deliverable from Maximus is held to one standard: would McKinsey sign their name to this? Not because we&apos;re trying to be McKinsey — but because the businesses we serve deserve analysis at that level. No exceptions.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-6 border border-slate/20">
                  <h3 className="text-navy font-bold mb-3">{item.label}</h3>
                  <p
                    className="text-slate text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-navy py-20 sm:py-28 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              If this resonates, the first step is free.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              A competitive intelligence report showing exactly where you stand, who&apos;s
              threatening your position, and your highest-leverage moves. 48 hours. No cost.
              No commitment.
            </p>
            <CTAButton href="/free-report" size="xl" micro="No sales call. No credit card. Just your report.">
              Claim Your Free Competitive Intelligence Report
            </CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
