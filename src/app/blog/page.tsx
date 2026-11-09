// Insights index (2026-11 redesign)
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CTABand, Container, Glass, PageHero, Section, SectionHead } from "../../components/ui";

export const metadata: Metadata = {
  title: "Insights — AI Strategy & Competitive Intelligence",
  description: "Practical intelligence on AI strategy, AI visibility, competitive positioning and business operations from Joel Winns, founder of Maximus AI.",
  robots: { index: true, follow: true },
};

const posts = [
  { cat: "AI visibility (AEO)", t: "Why your business is invisible to ChatGPT, and how to fix it", d: "When someone asks AI for the best provider in your city, do you appear? What drives AI visibility and five things to do today.", href: "/blog/ai-invisible-to-chatgpt", img: "/media/blog-invisible.webp", read: "7 min" },
  { cat: "AI strategy", t: "Why your competitors are using AI and you don't know it yet", d: "AI adoption is mostly invisible from the outside. Where AI-forward businesses are quietly pulling ahead.", href: "/blog/competitors-using-ai", img: "/media/blog-competitors.webp", read: "6 min" },
  { cat: "Business operations", t: "The hidden cost of manual processes", d: "How to put a number on repeatable manual work, and the five processes that usually pay back first.", href: "/blog/hidden-cost-manual-processes", img: "/media/blog-manual.webp", read: "6 min" },
];

const coming = [
  ["Competitive intelligence", "The five questions every business owner should ask about their market"],
  ["AI strategy", "How to choose your first AI project, and how to know it worked"],
  ["Market analysis", "Reading your competitors' reviews for the moves they have not made yet"],
];

export default function BlogPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          compact
          label="Insights"
          image="/media/hero-horizon.webp"
          title={<>Intelligence briefings for owners who intend to lead.</>}
          intro="Practical thinking on AI strategy, AI visibility, competitive positioning and operations, by Joel Winns, founder of Maximus AI."
        />

        <Section tone="navy">
          <Container wide>
            <Link href={lead.href} className="reveal group glass glass-hover grid overflow-hidden lg:grid-cols-[1.25fr_1fr]">
              <div className="relative min-h-[260px] lg:min-h-[400px]">
                <Image src={lead.img} alt="" fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="label !text-[11px]">{lead.cat}</span>
                <h2 className="font-head mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">{lead.t}</h2>
                <p className="mt-4 text-[16px] leading-relaxed text-white/65">{lead.d}</p>
                <span className="font-data mt-7 text-[12px] tracking-[0.12em] text-[#00D4FF]">READ · {lead.read.toUpperCase()} →</span>
              </div>
            </Link>

            <div className="mt-7 grid gap-7 md:grid-cols-2">
              {rest.map((p, i) => (
                <Link key={p.href} href={p.href} className="reveal group glass glass-hover overflow-hidden" data-d={String(i + 1)}>
                  <div className="relative aspect-[16/8]">
                    <Image src={p.img} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-7 sm:p-8">
                    <span className="label !text-[11px]">{p.cat}</span>
                    <h2 className="font-head mt-3 text-2xl font-bold leading-snug text-white">{p.t}</h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/65">{p.d}</p>
                    <span className="font-data mt-6 inline-block text-[12px] tracking-[0.12em] text-[#00D4FF]">READ · {p.read.toUpperCase()} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="dark" hex>
          <Container>
            <SectionHead label="Coming next" title="On the briefing desk." />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {coming.map(([c, t], i) => (
                <Glass key={t} hover={false} className="reveal p-7" style={{ transitionDelay: `${i * 70}ms` }}>
                  <span className="font-data text-[11px] tracking-[0.14em] text-white/45">{c.toUpperCase()}</span>
                  <p className="font-head mt-3 text-lg font-semibold leading-snug text-white/85">{t}</p>
                </Glass>
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
