// About Joel Winns (2026-11 redesign). Founding principle, the name, the mission.
// Employer is never named externally (standing rule). Statistics carry their source.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Beam, CTABand, Container, Glass, Label, Section } from "../../components/ui";

export const metadata: Metadata = {
  title: "About Joel Winns — Founder, Maximus AI Strategic Advisory",
  description:
    "Joel Winns founded Maximus AI on a principle: those who have the ability have the responsibility to help and protect those who can't. Named after his son Maximus, a United States Marine.",
  openGraph: {
    title: "About Joel Winns — Why Maximus Was Built",
    description: "The story behind Maximus AI: bringing enterprise-grade strategy to the small and mid-size businesses large firms were never built to serve.",
  },
};

const background = [
  { t: "Fractional Chief AI Officer", d: "Leads an AI build-out as fractional Chief AI Officer, bringing AI into one of the most relationship-driven industries in the country. Recipient of the Innovator of the Year Award from his company." },
  { t: "The Agent Revolution", d: "Author of The Agent Revolution, a book on what AI agents mean for business and work. The argument: this is not just a technology shift, it is a transfer of power to the businesses that understand it first." },
  { t: "Jupiter, Florida", d: "Based in Jupiter, Florida, with close knowledge of South Florida's small-business landscape. The same method works for businesses anywhere in the US." },
  { t: "The Maximus Standard", d: "A-plus quality, accuracy and consistency on every deliverable. Nothing less is acceptable, because the businesses we serve deserve strategy at the highest level." },
];

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joel Winns",
    jobTitle: "CEO and Founder",
    image: "https://maximusintel.com/media/joel-founder.webp",
    worksFor: { "@type": "Organization", name: "Maximus AI Strategic Advisory", url: "https://maximusintel.com" },
    description: "Founder of Maximus AI Strategic Advisory and fractional Chief AI Officer. Author of The Agent Revolution. Based in Jupiter, Florida.",
    url: "https://maximusintel.com/about",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Header />
      <main id="main">
        {/* HERO: founder portrait + principle */}
        <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
          <div className="absolute inset-0">
            <Image src="/media/hero-ocean.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-60" />
          </div>
          <div className="media-veil" style={{ background: "linear-gradient(180deg, rgba(6,9,24,.75) 0%, rgba(6,9,24,.55) 50%, #0A0E27 100%)" }} />
          <Container wide className="relative">
            <div className="grid items-end gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div className="rise rise-2 relative mx-auto w-full max-w-sm lg:max-w-none">
                <div className="img-frame relative aspect-[4/5] shadow-[0_40px_100px_rgba(0,0,0,.5)]">
                  <Image src="/media/joel-founder.webp" alt="Joel Winns, founder and CEO of Maximus AI" fill priority sizes="(min-width:1024px) 35vw, 90vw" className="object-cover object-top" />
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#060918] to-transparent" />
                  <div className="absolute bottom-5 left-6">
                    <p className="font-head text-xl font-bold text-white">Joel Winns</p>
                    <p className="font-data mt-1 text-[11px] tracking-[0.16em] text-[#00D4FF]">FOUNDER AND CEO</p>
                  </div>
                </div>
              </div>
              <div className="lg:pb-6">
                <Label className="rise rise-1">About the founder</Label>
                <h1 className="h-display rise rise-2 mt-6 text-[2.5rem] leading-[1.06] sm:text-6xl lg:text-[4rem]">
                  Why I built <span className="text-beam">Maximus.</span>
                </h1>
                <blockquote className="rise rise-3 mt-9 border-l-2 border-[#00B4D8] pl-6">
                  <p className="font-hero text-2xl italic leading-snug text-white sm:text-[2rem]">
                    &ldquo;Those who have the ability have the responsibility to help and protect those who can&apos;t help and protect themselves.&rdquo;
                  </p>
                  <footer className="font-data mt-4 text-[12px] tracking-[0.14em] text-white/55">THE FOUNDING PRINCIPLE</footer>
                </blockquote>
              </div>
            </div>
          </Container>
        </section>

        {/* STORY */}
        <Section tone="navy">
          <Container className="max-w-3xl">
            <div className="prose-mx reveal text-lg text-white/75">
              <h2>The name and the shield</h2>
              <p>
                My son&apos;s name is Maximus. He is a United States Marine, Military Police. I did not name this company after him because it sounded powerful. I named it after him because of what he represents: the willingness to step forward when something needs protecting, whatever the personal cost.
              </p>
              <p>
                The shield in our logo is not decoration. It stands for that same idea: protecting business owners from being outpaced by competitors who move to AI first, and helping people whose work AI changes find their next opportunity.
              </p>

              <h2>What I saw happening</h2>
              <p>
                AI is not coming. It is already here, and the businesses that understand it are quietly pulling away from those that do not. The businesses being left behind are not slow. They are working without the strategy and intelligence that large companies have bought for decades.
              </p>
              <p>
                The World Economic Forum&apos;s Future of Jobs Report 2025 projects 92 million jobs displaced and 170 million created by 2030 as technology and other forces reshape work.{" "}
                <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank" rel="noopener noreferrer">
                  Source: World Economic Forum
                </a>
                . Most people treat that as a disruption to survive. I see the businesses that move first using it to reach a position they could never have reached otherwise.
              </p>

              <h2>Why small business, not enterprise</h2>
              <p>
                Large companies already have consulting firms, analyst teams and competitive intelligence departments. Small and mid-size businesses compete on instinct, relationships and hustle, which worked until their competitors started using AI.
              </p>
              <p>
                The market analysis, competitor monitoring and operational mapping that large companies pay so much for can now be delivered to any business at a fraction of the cost and time. Someone has to build the system that does it, and hold it to a standard business owners can trust. That is Maximus.
              </p>

              <h2>The trust problem I refused to ignore</h2>
              <p>
                Early on I ran into the question much of the AI industry avoids: how do you trust a system that makes recommendations about your business? I decided to answer it directly. The result is our{" "}
                <Link href="/trust">three-layer trust standard</Link>: principled AI foundations, an 8-point Integrity Mandate that I personally stand behind, and safeguards built into every deployment.
              </p>
              <p>
                <strong>If you cannot trust the system, you will not use it. And if you do not use it, none of the capability matters.</strong>
              </p>
            </div>
          </Container>
        </Section>

        {/* BACKGROUND */}
        <Section tone="dark" hex>
          <Container wide>
            <div className="reveal text-center">
              <Label className="justify-center">Background</Label>
              <h2 className="h-display mt-5 text-3xl sm:text-5xl">The experience that shapes the work.</h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {background.map((b, i) => (
                <Glass key={b.t} className="reveal p-7" style={{ transitionDelay: `${i * 70}ms` }}>
                  <h3 className="font-head text-lg font-semibold text-white">{b.t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">{b.d}</p>
                </Glass>
              ))}
            </div>
            <Beam className="mx-auto mt-20 max-w-2xl" />
          </Container>
        </Section>

        <CTABand title="If this resonates, the first step is free." image="/media/hero-horizon.webp" />
      </main>
      <Footer />
    </>
  );
}
