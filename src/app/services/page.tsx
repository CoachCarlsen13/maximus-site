// Maximus AI — Services (2026-11 redesign)
// Three tiers: Competitive Edge Report -> Strategic Advisory -> AIOS Deployment.
// Prices are unchanged from the live site and flagged for Joel's review.
import type { Metadata } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button, CTABand, Check, Container, Glass, Label, PageHero, Section, SectionHead } from "../../components/ui";

export const metadata: Metadata = {
  title: "Services — AI Strategic Advisory for SMBs",
  description:
    "Three tiers of AI-powered competitive intelligence and strategy for small and mid-sized businesses: the Competitive Edge Report, Strategic Advisory and full Maximus AIOS deployment. Based in Jupiter, FL, serving businesses nationwide.",
  openGraph: {
    title: "Maximus AI Services — Built for Business Owners Who Want to Win",
    description: "Competitive Edge Reports, Strategic Advisory and Maximus AIOS deployment. Start with a free report.",
  },
};

const tiers = [
  {
    tier: "Tier 1",
    name: "Competitive Edge Report",
    price: "$297",
    billing: "one-time",
    note: "Your first report is free",
    image: "/media/dossier.webp",
    description: "Your competitive intelligence dossier. We analyze your market, map your competitors, check your AI visibility and identify your top revenue opportunities, delivered in 48 hours.",
    deliverables: [
      "Competitor analysis, up to 10 competitors",
      "AI visibility check across ChatGPT, Claude, Perplexity and Google AI",
      "Revenue opportunity map for your market",
      "Your 3 highest-leverage actions to take now",
      "Operational inefficiency review",
      "Market positioning recommendation",
    ],
    outcome: "Know exactly where you stand, who is threatening you and your three highest-leverage moves.",
    cta: "Get Your Free Report",
    micro: "No credit card. No sales call.",
    highlight: true,
  },
  {
    tier: "Tier 2",
    name: "Strategic Advisory",
    price: "$597–$2,500",
    billing: "per month",
    note: "Scoped after your free report",
    image: "/media/terrain.webp",
    description: "An AI-powered strategic partner. Regular intelligence briefings, competitor monitoring and strategy sessions that keep you ahead of the moves in your market.",
    deliverables: [
      "Weekly competitive intelligence updates",
      "Monthly strategy session with Joel Winns",
      "Ongoing competitor monitoring with alerts on significant moves",
      "Quarterly deep-dive market analysis",
      "Custom intelligence dashboard for your business",
    ],
    outcome: "Stop being surprised by competitors. Make decisions with current intelligence in hand.",
    cta: "Start With Your Free Report",
    micro: "Advisory scope is set after we review your results together.",
    highlight: false,
  },
  {
    tier: "Tier 3",
    name: "Maximus AIOS Deployment",
    price: "$2,500–$5,000",
    billing: "per month",
    note: "By application",
    image: "/media/council.webp",
    description: "A Maximus AI operating system built into your business: lead capture and qualification, customer acquisition workflows, an AI receptionist and competitive intelligence, designed, tested and managed with you.",
    deliverables: [
      "Custom AIOS architecture for your business",
      "Lead generation and qualification pipeline",
      "Customer acquisition workflows",
      "AI receptionist and lead follow-up",
      "Competitive intelligence infrastructure",
      "Monthly optimization reviews",
    ],
    outcome: "Your business runs on AI systems built for it, with your people in charge of every decision that matters.",
    cta: "Apply With a Free Report",
    micro: "We take on clients we are confident we can deliver for.",
    highlight: false,
  },
];

const faq = [
  { q: "Why is the first report free?", a: "Because the best proof is the work itself. The free report shows you exactly what Maximus intelligence looks like for your business before you spend anything." },
  { q: "What is in the Competitive Edge Report?", a: "Your top competitors analyzed, an AI visibility check (do answer engines recommend you when people ask about your industry?), your top revenue opportunities and the operational gaps costing you most. Built for your business, every finding sourced." },
  { q: "How is this different from a traditional consultant?", a: "Specialist AI agents do the research in parallel, so the work takes days instead of weeks and costs a fraction of a traditional engagement. A person still reviews the findings and owns the recommendation." },
  { q: "Do you serve businesses outside Florida?", a: "Yes. We are based in Jupiter, Florida and serve businesses across the US. The method works for any industry and market." },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          label="Services"
          image="/media/hero-dome.webp"
          title={<>The intelligence stack built for businesses that intend to lead their market.</>}
          intro="Three ways to work with Maximus: start with a report, add ongoing strategic advisory, or run your business on a Maximus AI operating system."
        >
          <Button href="/free-report" size="lg" pulse>
            Get Your Free Competitive Edge Report
          </Button>
        </PageHero>

        <Section tone="navy" hex>
          <Container wide>
            <SectionHead label="Three tiers. One goal." title="Choose the stage that fits your business." />
            <div className="mt-14 grid gap-7 lg:grid-cols-3">
              {tiers.map((t, i) => (
                <article
                  key={t.name}
                  className={`reveal glass flex flex-col overflow-hidden ${t.highlight ? "!border-[#00B4D8]/60 shadow-[0_0_60px_rgba(0,180,216,.18)]" : ""}`}
                  data-d={String(i + 1)}
                >
                  <div className="relative aspect-[16/7]">
                    <Image src={t.image} alt="" fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0E1330] to-transparent" />
                    <span className="font-data absolute left-6 top-5 rounded-md border border-[#00B4D8]/40 bg-[#060918]/70 px-2.5 py-1 text-[10.5px] tracking-[0.14em] text-[#E0F7FF]">{t.tier.toUpperCase()}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <h2 className="font-head text-2xl font-semibold text-white">{t.name}</h2>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-data text-3xl font-semibold text-white" style={{ textShadow: "0 0 22px rgba(0,180,216,.4)" }}>
                        {t.price}
                      </span>
                      <span className="text-sm text-white/55">{t.billing}</span>
                    </div>
                    <p className="font-data mt-2 text-[11.5px] tracking-[0.08em] text-[#00D4FF]">{t.note.toUpperCase()}</p>
                    <p className="mt-5 text-[15px] leading-relaxed text-white/70">{t.description}</p>
                    <ul className="mt-6 flex-1 space-y-3">
                      {t.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-[14.5px] text-white/80">
                          <Check className="mt-0.5 !h-4 !w-4" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 rounded-xl border border-[#00B4D8]/12 bg-[#060918]/50 p-4">
                      <p className="label !text-[10.5px]">Your outcome</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{t.outcome}</p>
                    </div>
                    <div className="mt-7">
                      <Button href="/free-report" variant={t.highlight ? "primary" : "ghost"} micro={t.micro} className="w-full sm:w-auto">
                        {t.cta}
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <section className="relative overflow-hidden bg-[#060918] py-24 sm:py-32">
          <Container wide>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="reveal img-frame relative aspect-[4/3]">
                <Image src="/media/vault.webp" alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div>
                <SectionHead
                  label="The foundation"
                  title="While others race to make AI faster and cheaper, we made it trustworthy."
                  intro="Every Maximus service runs under written operating rules: findings are sourced, estimates are labeled, and anything irreversible waits for a human decision. When you work with Maximus, your business inherits that standard."
                />
                <div className="reveal mt-10 flex flex-wrap gap-4" data-d="2">
                  <Button href="/trust" variant="deep">
                    Read the trust standard
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Section tone="navy">
          <Container className="max-w-4xl">
            <SectionHead label="Questions" title="Common questions." />
            <div className="mt-12 grid gap-4">
              {faq.map((f, i) => (
                <Glass key={f.q} className="reveal p-7" hover={false}>
                  <h3 className="font-head text-lg font-semibold text-white" data-d={String(i)}>
                    {f.q}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">{f.a}</p>
                </Glass>
              ))}
            </div>
            <div className="reveal mt-12">
              <Label>Based in Jupiter, Florida. Serving the US.</Label>
            </div>
          </Container>
        </Section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
