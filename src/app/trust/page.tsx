// Trust & Ethics (2026-11 redesign) — the standard every Maximus client inherits.
// Rewritten so every statement is a commitment we can stand behind today:
// no unverified legal/political claims, no claims of always-on monitoring we cannot show.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Beam, CTABand, Container, Glass, Label, PageHero, Section, SectionHead } from "../../components/ui";

export const metadata: Metadata = {
  title: "Trust & Ethics — The Standard Every Maximus Client Inherits",
  description:
    "How Maximus AI works: AI foundations with published safety principles, the 8-point Integrity Mandate written by founder Joel Winns, and the safeguards every client deployment is built to. While others race to make AI faster and cheaper, we made it trustworthy.",
  openGraph: {
    title: "While others race to make AI faster and cheaper, we made it trustworthy.",
    description: "Three layers of trust: principled AI foundations, the Integrity Mandate and safeguards built into every deployment.",
  },
};

const mandate = [
  ["Complete honesty", "No false statements, misleading framing, selective omission or technically-true misdirection. Honesty includes volunteering what the client would want to know, even unasked."],
  ["Instruction fidelity", "Every instruction is followed in full or escalated with full transparency. No silent partial compliance. If something cannot be done, it is said clearly, before acting."],
  ["Destructive action gate", "Anything that could harm the client or their business needs explicit confirmation first. Confirm, then act; never act, then report."],
  ["Every significant action recorded", "Significant actions are recorded so any decision can be traced and reviewed. The record is the accountability."],
  ["Self-scrutiny", "Signs of self-serving reasoning, goal drift or rationalization are surfaced, not hidden. The system is held to the same scrutiny it applies to sources."],
  ["Conflict transparency", "If a request conflicts with the client's values, ethics or long-term interests, the conflict and its trade-offs are raised before proceeding."],
  ["Humans decide strategy", "No autonomous decisions that change business direction, client relationships or financial commitments. AI supports, analyzes and recommends. People decide."],
  ["Regular integrity review", "Records, patterns and mandate compliance are reviewed on a regular schedule, and the results are reported in full."],
];

const safeguards = [
  ["Approval gates", "Deletes, bulk changes, financial actions and messages to customers wait for explicit human confirmation."],
  ["Action records", "Significant agent actions are recorded so they can be audited after the fact."],
  ["Source checks", "Findings that cannot be traced to a source are removed before anything reaches a client."],
  ["Tenth Man review", "When agents agree too easily, one is assigned to argue the opposite case before a recommendation stands."],
  ["Labeled uncertainty", "Estimates are marked as estimates. Gaps are marked as gaps. A blank with a label beats a confident guess."],
  ["Health checks", "Data quality, pipeline health and output quality are checked, with alerts when something looks wrong."],
];

export default function TrustPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joel Winns",
    jobTitle: "CEO and Founder",
    worksFor: { "@type": "Organization", name: "Maximus AI Strategic Advisory", url: "https://maximusintel.com" },
    description: "Founder of Maximus AI Strategic Advisory and author of the Joel Maximus Integrity Mandate, an 8-point ethical framework for AI operations.",
    url: "https://maximusintel.com/about",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Header />
      <main id="main">
        <PageHero
          label="Trust and ethics"
          image="/media/vault.webp"
          title={
            <>
              While others race to make AI faster and cheaper, <span className="text-beam">we made it trustworthy.</span>
            </>
          }
          intro="Every client who works with Maximus inherits a three-layer standard of trust. This page sets it out in full, because it matters more than anything else we offer."
        />

        <Section tone="navy" hex>
          <Container wide>
            <SectionHead label="Three layers" title="Trust, built in layers." />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {[
                ["Layer 1", "Principled foundations", "Maximus is built on frontier AI models from labs that publish the principles their models are trained to follow."],
                ["Layer 2", "The Integrity Mandate", "Eight rules written by founder Joel Winns that govern how every Maximus agent behaves, with zero tolerance for deception."],
                ["Layer 3", "Safeguards in the system", "Approval gates, action records, source checks and adversarial review, designed into every deployment rather than added later."],
              ].map(([l, t, d], i) => (
                <Glass key={l} className="reveal relative overflow-hidden p-8" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="font-data text-xs tracking-[0.18em] text-[#00B4D8]">{l.toUpperCase()}</span>
                  <h3 className="font-head mt-3 text-2xl font-semibold text-white">{t}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/65">{d}</p>
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-60" />
                </Glass>
              ))}
            </div>
          </Container>
        </Section>

        <section className="relative overflow-hidden bg-[#060918] py-24 sm:py-32">
          <Container wide>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="reveal img-frame relative aspect-[4/3]">
                <Image src="/media/hero-dome.webp" alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div>
                <SectionHead
                  label="Layer 1: Foundations"
                  title="We build on AI that is trained to principles it publishes."
                  intro="The models at the core of Maximus come from labs that publish their safety research and the rules their models are trained to follow. We chose that foundation on purpose: when you put AI inside your business, what it refuses to do matters as much as what it can do."
                />
              </div>
            </div>
          </Container>
        </section>

        <Section tone="navy">
          <Container wide>
            <SectionHead
              label="Layer 2: The Joel Maximus Integrity Mandate"
              title="Eight rules. Zero tolerance for deception."
              intro="The Integrity Mandate governs how every Maximus agent behaves. These are not aspirations; they are the rules every deployment is built and reviewed against."
            />
            <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {mandate.map(([t, d], i) => (
                <li key={t} className="reveal" data-d={String((i % 4) + 1)}>
                  <Glass className="h-full p-7">
                    <span className="font-data text-2xl font-semibold text-white" style={{ textShadow: "0 0 20px rgba(0,180,216,.45)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-head mt-4 text-lg font-semibold text-white">{t}</h3>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/65">{d}</p>
                  </Glass>
                </li>
              ))}
            </ol>
            <div className="reveal mx-auto mt-16 max-w-xl text-center">
              <Beam className="mb-10" />
              <p className="text-sm text-white/50">Author and guarantor of the Integrity Mandate</p>
              <p className="font-head mt-2 text-2xl font-bold text-white">Joel Winns</p>
              <p className="font-data mt-1 text-[12px] tracking-[0.14em] text-[#00B4D8]">FOUNDER AND CEO, MAXIMUS AI STRATEGIC ADVISORY</p>
            </div>
          </Container>
        </Section>

        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0">
            <Image src="/media/gates.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="media-veil" style={{ background: "linear-gradient(180deg,#0A0E27 0%,rgba(6,9,24,.86) 25%,rgba(6,9,24,.9) 75%,#060918 100%)" }} />
          <Container wide className="relative">
            <SectionHead label="Layer 3: Safeguards" title="Trust is designed into the system, not added as a policy." intro="Every Maximus client deployment is built to these safeguards." />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {safeguards.map(([t, d], i) => (
                <Glass key={t} className="reveal p-7" style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
                  <h3 className="font-head text-lg font-semibold text-white">{t}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-white/65">{d}</p>
                </Glass>
              ))}
            </div>
          </Container>
        </section>

        <Section tone="dark">
          <Container className="max-w-4xl text-center">
            <div className="reveal">
              <Label className="justify-center">Your deployment</Label>
              <h2 className="h-display mt-6 text-3xl sm:text-5xl">Your Maximus deployment inherits all three layers.</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                When Maximus builds AI into your business, every component runs under the same standard: the principled foundation, the Integrity Mandate and the safeguards. Not optional extras. Defaults.
              </p>
            </div>
            <div className="reveal mt-14 grid gap-4 text-left sm:grid-cols-3" data-d="2">
              {[
                { href: "/about", label: "About Joel Winns", desc: "Why Maximus was built this way" },
                { href: "/services", label: "Services", desc: "How we deliver intelligence" },
                { href: "/free-report", label: "Free Competitive Edge Report", desc: "Your report in 48 hours" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="glass glass-hover block p-6">
                  <span className="font-head font-semibold text-white">{l.label} →</span>
                  <span className="mt-1.5 block text-sm text-white/55">{l.desc}</span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
