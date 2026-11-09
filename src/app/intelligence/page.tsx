// Strategic Intelligence Bible — landing page (2026-11 redesign)
import type { Metadata } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button, CTABand, Check, Container, PageHero, Section, SectionHead } from "../../components/ui";

export const metadata: Metadata = {
  title: "Strategic Intelligence Bible",
  description: "Map your competitive landscape across four dimensions: how you look, what customers say, where competitors win and the revenue nobody is capturing. One-time or refreshed monthly.",
};

const dimensions = [
  {
    n: "01",
    t: "The Mirror",
    s: "How your business really looks",
    img: "/media/mirror.webp",
    d: "Not how you think your business looks: how it looks to customers, to AI answer engines and to people comparing you with every competitor in your market. The gap between your marketing and your reputation is where clients quietly disappear. We find that gap and show you how to close it.",
  },
  {
    n: "02",
    t: "The Voice",
    s: "What your customers actually think",
    img: "/media/blog-invisible.webp",
    d: "Not what they say to your face: what they write in reviews, post in local groups and tell their friends. We gather the public signals, positive and negative, across the platforms that matter in your market, so you see the patterns you have never had time to notice.",
  },
  {
    n: "03",
    t: "The Battlefield",
    s: "Your competitive map",
    img: "/media/terrain.webp",
    d: "Your competitors mapped and analyzed: strengths, weaknesses, pricing, marketing, AI adoption and review momentum. Where each one is beating you, and the specific openings you can use.",
  },
  {
    n: "04",
    t: "The Gold Mine",
    s: "Revenue nobody else is capturing",
    img: "/media/prism.webp",
    d: "The services your market asks for that nobody offers well, the customer segments nobody targets, the price points that do not exist yet. Opportunities sitting in your market right now.",
  },
];

const plans = [
  {
    name: "One-time intelligence report",
    price: "$1,500–$3,000",
    d: "All four dimensions, delivered as a strategic document with specific, actionable recommendations and one session to walk through every finding.",
    items: ["Complete four-dimension analysis", "Strategic document for your business", "Actionable recommendations", "One strategy session included"],
    cta: "Start With a Free Report",
    primary: false,
  },
  {
    name: "Monthly intelligence",
    price: "$1,500–$3,000/mo",
    d: "Everything in the one-time report, refreshed monthly with change tracking. New threats and new opportunities flagged as they appear. Quarterly strategy reviews with Joel.",
    items: ["Monthly refreshed intelligence", "Change tracking and trend analysis", "Alerts on significant competitor moves", "Quarterly strategy reviews with Joel"],
    cta: "Start With a Free Report",
    primary: true,
  },
];

export default function IntelligencePage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          label="Strategic Intelligence Bible"
          image="/media/terrain.webp"
          title={<>See your competitors&apos; moves while there is still time to answer them.</>}
          intro="The Strategic Intelligence Bible maps your competitive landscape across four dimensions and can be refreshed every month, so you are not caught off guard by a competitor you did not see coming."
        >
          <Button href="/free-report" size="lg" pulse micro="48-hour delivery. No obligation.">
            Start With Your Free Report
          </Button>
        </PageHero>

        {dimensions.map((x, i) => (
          <section key={x.n} className={`relative overflow-hidden py-20 sm:py-28 ${i % 2 ? "bg-[#060918]" : "bg-[#0A0E27]"}`}>
            <Container wide>
              <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="reveal img-frame relative aspect-[16/11]">
                  <Image src={x.img} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
                  <span className="font-data absolute bottom-5 left-5 text-6xl font-semibold text-white/90" style={{ textShadow: "0 0 30px rgba(0,180,216,.6)" }}>
                    {x.n}
                  </span>
                </div>
                <div className="reveal" data-d="2">
                  <span className="label">Dimension {x.n}</span>
                  <h2 className="h-display mt-5 text-4xl sm:text-5xl">{x.t}</h2>
                  <p className="font-head mt-3 text-lg font-medium text-[#00D4FF]">{x.s}</p>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{x.d}</p>
                </div>
              </div>
            </Container>
          </section>
        ))}

        <Section tone="fade" hex>
          <Container>
            <SectionHead align="center" label="Two ways in" title="Intelligence once, or intelligence that stays current." />
            <div className="mx-auto mt-14 grid max-w-5xl gap-7 md:grid-cols-2">
              {plans.map((p, i) => (
                <div key={p.name} className={`reveal glass flex flex-col p-8 sm:p-10 ${p.primary ? "!border-[#00B4D8]/60 shadow-[0_0_60px_rgba(0,180,216,.18)]" : ""}`} data-d={String(i + 1)}>
                  <h3 className="font-head text-2xl font-semibold text-white">{p.name}</h3>
                  <div className="font-data mt-4 text-3xl font-semibold text-white" style={{ textShadow: "0 0 22px rgba(0,180,216,.4)" }}>
                    {p.price}
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-white/65">{p.d}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[14.5px] text-white/80">
                        <Check className="mt-0.5 !h-4 !w-4" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href="/free-report" variant={p.primary ? "primary" : "ghost"}>
                      {p.cta}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <CTABand title="The businesses that keep watching their market lead it." image="/media/hero-dome.webp" />
      </main>
      <Footer />
    </>
  );
}
