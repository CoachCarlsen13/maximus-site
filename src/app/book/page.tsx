// The Agent Revolution — book pre-launch page (2026-11 redesign)
import type { Metadata } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BookSignupForm from "../../components/BookSignupForm";
import { Beam, Container, Glass, Label, Section, SectionHead } from "../../components/ui";

export const metadata: Metadata = {
  title: "The Agent Revolution — By Joel Winns",
  description: "The playbook for building a business that runs on AI agents, by Maximus AI founder Joel Winns. Coming soon.",
};

const takeaways = [
  "Why the businesses that put AI to work now will set the pace for the next decade",
  "How professionals whose work AI changes can turn the hardest career moment into their biggest opportunity",
  "The strategy that lets a small business outmaneuver a much larger competitor",
  "Why waiting to see how AI plays out is the most expensive decision a business owner can make",
  "How to build an AI-powered business where people keep the judgment and AI does the heavy lifting",
];

export default function BookPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:min-h-[92vh] lg:pb-28">
          <div className="absolute inset-0">
            <Image src="/media/book.webp" alt="" fill priority sizes="100vw" className="object-cover object-[60%_50%] kenburns" />
          </div>
          <div className="media-veil veil-left" />
          <div className="media-veil veil-bottom" />
          <Container wide className="relative">
            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <Label className="rise rise-1">A Maximus publication · Coming soon</Label>
                <h1 className="h-display rise rise-2 mt-6 text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem]">
                  The Agent Revolution is here. <span className="text-beam">Lead it or follow it.</span>
                </h1>
                <p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
                  The playbook for building a business that runs on AI agents, by Joel Winns, founder and CEO of Maximus AI Strategic Advisory.
                </p>
                <div className="rise rise-4 mt-10">
                  <a href="#launch" className="btn btn-primary px-8 py-4 text-base">
                    Join the Launch List <span aria-hidden className="btn-arrow">↓</span>
                  </a>
                </div>
              </div>
              {/* Typeset cover (code-built, no generated lettering) */}
              <div className="rise rise-3 mx-auto w-full max-w-[340px]">
                <div className="relative aspect-[2/3] overflow-hidden rounded-r-xl rounded-l-sm border border-[#00B4D8]/30 bg-gradient-to-br from-[#111633] via-[#0A0E27] to-[#060918] shadow-[30px_40px_80px_rgba(0,0,0,.6),0_0_60px_rgba(0,180,216,.15)]">
                  <div className="hexgrid" aria-hidden />
                  <div aria-hidden className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/50 to-transparent" />
                  <div className="relative flex h-full flex-col justify-between p-8">
                    <span className="font-data text-[10px] tracking-[0.25em] text-[#00D4FF]">A MAXIMUS PUBLICATION</span>
                    <div>
                      <p className="font-head text-[2.6rem] font-extrabold leading-[0.95] tracking-tight text-white">
                        THE
                        <br />
                        AGENT
                        <br />
                        <span className="text-beam">REVOLUTION</span>
                      </p>
                      <Beam className="mt-6" />
                      <p className="mt-6 text-[13px] leading-snug text-white/60">The playbook for building a business that runs on AI</p>
                    </div>
                    <span className="font-head text-sm font-semibold tracking-[0.2em] text-[#E0F7FF]">JOEL WINNS</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Section tone="navy">
          <Container className="max-w-3xl">
            <div className="reveal prose-mx text-lg text-white/75">
              <p className="font-head !text-2xl !leading-snug text-white">This is not a trend. It is a shift in who holds the advantage, and it is moving faster than most businesses can plan for.</p>
              <p>
                The Agent Revolution is for every business owner who can feel the ground moving, every professional whose work AI is changing and who wants to know what comes next, and every entrepreneur who sees the opportunity but cannot find the playbook.
              </p>
              <p>It is written by someone building an AI-native consulting firm from the inside, not just studying one.</p>
            </div>
          </Container>
        </Section>

        <Section tone="dark" hex>
          <Container className="max-w-4xl">
            <SectionHead label="What you will learn" title="Five ideas that change how you see your business and the next decade." />
            <ol className="mt-12 space-y-4">
              {takeaways.map((t, i) => (
                <li key={t} className="reveal" data-d={String(i + 1)}>
                  <Glass className="flex items-start gap-6 p-6 sm:p-7">
                    <span className="font-data text-2xl font-semibold text-white" style={{ textShadow: "0 0 20px rgba(0,180,216,.5)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-head pt-1 text-lg font-medium leading-snug text-white/90">{t}</p>
                  </Glass>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        <section id="launch" className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0">
            <Image src="/media/bigbrain.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="media-veil veil-full" />
          <Container className="relative text-center">
            <div className="reveal mx-auto max-w-2xl">
              <Label className="justify-center">Launch list</Label>
              <h2 className="h-display mt-6 text-3xl sm:text-5xl">Be first to read it.</h2>
              <p className="mt-5 text-lg text-white/70">Join the launch list and hear the moment the book is out.</p>
              <div className="mt-10">
                <BookSignupForm />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
