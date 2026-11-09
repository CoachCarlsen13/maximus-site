// Maximus AI Operational Audit — landing page (2026-11 redesign)
// The old "$41,600 a year" headline is now an interactive, labeled estimate.
import type { Metadata } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AuditMath from "../../components/AuditMath";
import { Button, CTABand, Check, Container, Glass, PageHero, Section, SectionHead } from "../../components/ui";

export const metadata: Metadata = {
  title: "AI Operational Audit",
  description: "Find where your business loses time and money to manual work that AI can now handle, with the cost, savings and break-even date for every fix.",
};

const reveals = [
  { t: "Your AI readiness score (0–100)", d: "Where your business stands today on the people, process, data and tools AI needs to work, specific to your size and market." },
  { t: "Revenue leaks, identified and sized", d: "Not vague areas for improvement: specific leaks such as after-hours leads that go unanswered, no-shows and lapsed clients, each with an estimated cost and how we got to it." },
  { t: "ROI for every recommendation", d: "Three numbers per fix: cost to implement, expected monthly savings and break-even date, each labeled as an estimate. If the math does not work, we say so." },
  { t: "A 90-day implementation roadmap", d: "Ranked by return. The fixes that save the most for the least effort come first, and some cost nothing to start." },
];

const paths = [
  {
    name: "Free Competitive Edge Report",
    price: "$0",
    d: "Start here. Your market, competitors, AI visibility and biggest revenue leak in 48 hours.",
    items: ["Biggest revenue leak identified", "AI visibility check", "90-day edge plan"],
    cta: "Get My Free Report",
    href: "/free-report",
    primary: false,
  },
  {
    name: "Full AI Operational Audit",
    price: "$3,000–$5,000",
    d: "A two-week engagement: every major leak identified and sized, ROI for every fix and a roadmap, walked through with Joel.",
    items: ["AI readiness score with full analysis", "Revenue leaks identified and sized", "ROI projection for every recommendation", "90-day implementation roadmap", "1:1 strategy session with Joel"],
    cta: "Request Your Audit",
    href: "mailto:joel@maximusintel.com?subject=AI%20Operational%20Audit%20Request",
    primary: true,
  },
  {
    name: "Implementation and Optimization",
    price: "$1,500–$7,500",
    d: "We do not just find the problems, we fix them, then keep optimizing and reporting monthly.",
    items: ["Everything in the full audit", "Done-for-you AI implementation", "Monthly optimization and reporting"],
    cta: "Talk About Implementation",
    href: "mailto:joel@maximusintel.com?subject=AI%20Implementation%20Inquiry",
    primary: false,
  },
];

export default function AIAuditPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          label="AI Operational Audit"
          image="/media/mechanism.webp"
          title={<>Find the hours and dollars your business loses to manual work.</>}
          intro="The AI Operational Audit shows where time and money go, what it costs each month and exactly how to stop it, with the numbers behind every recommendation."
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#math" size="lg" pulse>
              Show Me the Math
            </Button>
            <Button href="#paths" size="lg" variant="ghost" arrow={false}>
              See the options
            </Button>
          </div>
        </PageHero>

        <Section id="math" tone="navy" hex>
          <Container wide>
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <SectionHead
                label="The math"
                title="What does manual work cost you?"
                intro="Move the sliders to match your business. The default example, 16 hours a week at $50 an hour, comes to $41,600 a year. The audit finds out how much of that AI can take on."
              />
              <div className="reveal" data-d="2">
                <AuditMath />
              </div>
            </div>
          </Container>
        </Section>

        <section className="relative overflow-hidden bg-[#060918] py-24 sm:py-32">
          <Container wide>
            <SectionHead label="What you get" title="What the audit reveals." />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {reveals.map((r, i) => (
                <Glass key={r.t} className="reveal p-8" style={{ transitionDelay: `${(i % 2) * 80}ms` }}>
                  <span className="font-data text-sm text-[#00B4D8]">0{i + 1}</span>
                  <h3 className="font-head mt-3 text-xl font-semibold text-white">{r.t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">{r.d}</p>
                </Glass>
              ))}
            </div>
          </Container>
        </section>

        <section id="paths" className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0">
            <Image src="/media/growth.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="media-veil" style={{ background: "linear-gradient(180deg,#060918 0%,rgba(6,9,24,.85) 25%,rgba(6,9,24,.88) 75%,#0A0E27 100%)" }} />
          <Container wide className="relative">
            <SectionHead align="center" label="Choose your path" title="Three ways to stop the leaks." />
            <div className="mt-14 grid gap-7 lg:grid-cols-3">
              {paths.map((p, i) => (
                <div key={p.name} className={`reveal glass flex flex-col p-8 ${p.primary ? "!border-[#00B4D8]/60 shadow-[0_0_60px_rgba(0,180,216,.18)]" : ""}`} data-d={String(i + 1)}>
                  <h3 className="font-head text-xl font-semibold text-white">{p.name}</h3>
                  <div className="font-data mt-4 text-3xl font-semibold text-white" style={{ textShadow: "0 0 22px rgba(0,180,216,.4)" }}>
                    {p.price}
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/65">{p.d}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[14.5px] text-white/80">
                        <Check className="mt-0.5 !h-4 !w-4" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href={p.href} variant={p.primary ? "primary" : "ghost"} className="w-full">
                      {p.cta}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <CTABand
          title="Every month without the numbers is a month of guessing."
          intro="Start with the free Competitive Edge Report: your biggest revenue leak, your AI visibility and a 90-day plan, delivered in 48 hours."
          image="/media/hero-horizon.webp"
        />
      </main>
      <Footer />
    </>
  );
}
