// Shared local-SEO page template (2026-11 redesign) for the Florida location pages.
import Link from "next/link";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button, CTABand, Check, Container, Glass, MediaFrame, PageHero, Section, SectionHead } from "./ui";

const ALL = [
  { href: "/locations/ai-consulting-jupiter-fl", label: "Jupiter" },
  { href: "/locations/ai-consulting-palm-beach-gardens", label: "Palm Beach Gardens" },
  { href: "/locations/ai-consulting-west-palm-beach", label: "West Palm Beach" },
  { href: "/locations/ai-strategy-south-florida", label: "South Florida" },
  { href: "/locations/aeo-optimization-florida", label: "AEO in Florida" },
];

export default function LocationPage({
  self,
  label,
  title,
  intro,
  image = "/media/coast.webp",
  marketTitle,
  market,
  receives,
  industries,
  areas,
  approach,
  closing,
  schema,
}: {
  self: string;
  label: string;
  title: ReactNode;
  intro: string;
  image?: string;
  marketTitle: string;
  market: ReactNode;
  receives: string[];
  industries?: string[];
  areas?: string[];
  approach?: { t: string; d: string }[];
  closing: string;
  schema?: object;
}) {
  return (
    <>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
      <Header />
      <main id="main">
        <PageHero label={label} image={image} title={title} intro={intro}>
          <Button href="/free-report" size="lg" pulse micro="Free. 48-hour delivery. No sales call.">
            Get Your Free Competitive Edge Report
          </Button>
        </PageHero>

        <Section tone="navy" hex>
          <Container wide>
            <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <SectionHead label="Your market" title={marketTitle} />
                <div className="reveal prose-mx mt-8 text-lg text-white/70" data-d="2">
                  {market}
                </div>
              </div>
              <Glass hover={false} className="reveal p-7 sm:p-9" style={{ transitionDelay: "120ms" }}>
                <span className="label !text-[11px]">What you receive</span>
                <ul className="mt-6 space-y-4">
                  {receives.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-[15.5px] text-white/85">
                      <Check className="mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/free-report">Start With a Free Report</Button>
                </div>
              </Glass>
            </div>
          </Container>
        </Section>

        {approach && (
          <Section tone="dark">
            <Container wide>
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <MediaFrame src="/media/terrain.webp" alt="" ratio="4/3" className="reveal" />
                <div>
                  <SectionHead label="Our approach" title="Built for owner-operators, not corporate budgets." />
                  <div className="mt-8 space-y-4">
                    {approach.map((a, i) => (
                      <Glass key={a.t} className="reveal p-6" style={{ transitionDelay: `${i * 70}ms` }}>
                        <h3 className="font-head text-lg font-semibold text-white">{a.t}</h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-white/65">{a.d}</p>
                      </Glass>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        )}

        {(industries || areas) && (
          <Section tone="navy">
            <Container>
              <div className="grid gap-12 md:grid-cols-2">
                {industries && (
                  <div className="reveal">
                    <span className="label !text-[11px]">Industries we serve</span>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {industries.map((i) => (
                        <span key={i} className="rounded-lg border border-[#00B4D8]/20 bg-[#060918]/60 px-3.5 py-2 text-sm text-white/80">
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {areas && (
                  <div className="reveal" data-d="2">
                    <span className="label !text-[11px]">Areas we serve</span>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {areas.map((a) => (
                        <span key={a} className="rounded-lg border border-[#00B4D8]/20 bg-[#060918]/60 px-3.5 py-2 text-sm text-white/80">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Container>
          </Section>
        )}

        <section className="section-dark py-14">
          <Container className="text-center">
            <p className="text-sm text-white/55">Also serving businesses across Florida</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {ALL.filter((l) => l.href !== self).map((l) => (
                <Link key={l.href} href={l.href} className="rounded-lg border border-[#00B4D8]/25 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#00B4D8] hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <CTABand title={closing} />
      </main>
      <Footer />
    </>
  );
}
