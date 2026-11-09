// Free Competitive Edge Report — conversion landing page (2026-11 redesign)
// Focused page: no main navigation, form in the first screen on desktop.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import ReportForm from "../../components/ReportForm";
import { Beam, Check, Container, Glass, Label, Section, SectionHead, Shield } from "../../components/ui";

export const metadata: Metadata = {
  title: "Free Competitive Edge Report",
  description: "See your competitive blind spots in 48 hours: your AI visibility, your top competitors, your biggest revenue leak and a 90-day plan. Free, no card, no sales call.",
};

const discoveries = [
  { img: "/media/prism.webp", n: "01", t: "Your AI visibility", d: "When someone asks ChatGPT, Claude or Google's AI to recommend a business like yours, are they recommending you or a competitor? Most owners have never checked." },
  { img: "/media/terrain.webp", n: "02", t: "Your top 5 competitors", d: "Not just who they are: what they do better, how they win customers and where their strategy leaves gaps you can use." },
  { img: "/media/mechanism.webp", n: "03", t: "Your biggest revenue leak", d: "The single most expensive blind spot costing you clients and money right now, with how we found it." },
  { img: "/media/growth.webp", n: "04", t: "Your 90-day edge plan", d: "Specific moves ranked by expected impact, with every estimate labeled as an estimate. You could start on the first one this week." },
];

export default function FreeReportPage() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30">
        <Container wide className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Maximus AI home">
            <Shield size={32} />
            <span className="font-head text-sm font-bold tracking-[0.14em] text-[#E0F7FF]">MAXIMUS AI</span>
          </Link>
          <a href="#form" className="font-data text-[11px] tracking-[0.16em] text-[#00D4FF] hover:text-white lg:hidden">
            GET MY REPORT ↓
          </a>
        </Container>
      </header>
      <main id="main">
        {/* HERO + FORM */}
        <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:min-h-[100svh] lg:pb-24">
          <div className="absolute inset-0">
            <Image src="/media/dossier.webp" alt="" fill priority sizes="100vw" className="object-cover object-[30%_50%]" />
          </div>
          <div className="media-veil" style={{ background: "linear-gradient(90deg, rgba(6,9,24,.92) 0%, rgba(6,9,24,.78) 45%, rgba(6,9,24,.9) 100%)" }} />
          <div className="hexgrid" aria-hidden />
          <Container wide className="relative">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
              <div className="lg:pt-10">
                <Label className="rise rise-1">Free Competitive Edge Report</Label>
                <h1 className="h-display rise rise-2 mt-6 text-[2.4rem] leading-[1.06] sm:text-6xl lg:text-[4rem]">
                  What do your competitors know about your market <span className="text-beam">that you don&apos;t?</span>
                </h1>
                <p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
                  In 48 hours, we will show you. Free, with no strings. Keep the report no matter what.
                </p>
                <ul className="rise rise-4 mt-9 grid max-w-xl gap-3.5 sm:grid-cols-2">
                  {["Your AI visibility check", "Your top 5 competitors", "Your biggest revenue leak", "Your 90-day edge plan"].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-[15.5px] text-white/85">
                      <Check />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="rise rise-5 mt-10 hidden max-w-xl lg:block">
                  <Beam className="opacity-70" />
                  <p className="mt-6 text-sm leading-relaxed text-white/55">
                    Specialist AI agents research your market in parallel. Findings without a source are cut. Every estimate is labeled. Your information is used only to prepare your report.
                  </p>
                </div>
              </div>

              <div id="form" className="rise rise-3 scroll-mt-24">
                <Glass hover={false} className="!border-[#00B4D8]/30 p-6 shadow-[0_30px_80px_rgba(0,0,0,.45)] sm:p-9">
                  <div className="mb-7">
                    <span className="font-data text-[11px] tracking-[0.16em] text-[#00D4FF]">48-HOUR DELIVERY · $0</span>
                    <h2 className="font-head mt-2 text-2xl font-bold text-white sm:text-[1.75rem]">Start your report</h2>
                    <p className="mt-2 text-[15px] text-white/60">Tell us where to look. We do the rest.</p>
                  </div>
                  <ReportForm />
                </Glass>
              </div>
            </div>
          </Container>
        </section>

        {/* WHAT YOU WILL DISCOVER */}
        <Section tone="navy">
          <Container wide>
            <SectionHead label="What you will discover" title="Four answers most business owners have never had in one place." />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {discoveries.map((x, i) => (
                <article key={x.t} className="reveal glass glass-hover grid overflow-hidden sm:grid-cols-[0.9fr_1.1fr]" data-d={String((i % 2) + 1)}>
                  <div className="relative min-h-[180px]">
                    <Image src={x.img} alt="" fill sizes="(min-width:768px) 25vw, 100vw" className="object-cover" />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0E1330]/80" />
                  </div>
                  <div className="p-7">
                    <span className="font-data text-sm text-[#00B4D8]">{x.n}</span>
                    <h3 className="font-head mt-2 text-xl font-semibold text-white">{x.t}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/65">{x.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* WHY FREE */}
        <section className="relative overflow-hidden bg-[#060918] py-24 sm:py-32">
          <div className="hexgrid" aria-hidden />
          <Container className="relative max-w-3xl text-center">
            <div className="reveal">
              <Label className="justify-center">Why is this free?</Label>
              <h2 className="h-display mt-6 text-3xl sm:text-[2.8rem]">Because the work is the best proof we have.</h2>
              <p className="mt-7 text-lg leading-relaxed text-white/70">
                Our AI agents produce in days what used to take a team of analysts weeks. That efficiency lets us give you a real, high-quality competitive intelligence report at no cost.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                Once you see where you stand against the other businesses in your market, you will not want to go back to guessing. If you want help acting on it, we are here. If not, the report is yours.
              </p>
              <p className="font-head mt-8 text-lg font-semibold text-white">No pressure. No bait and switch. Just your report.</p>
              <a href="#form" className="btn btn-primary btn-pulse mt-10 px-8 py-4 text-base">
                Get My Free Report <span aria-hidden className="btn-arrow">↑</span>
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
