// Maximus AI — Homepage (2026-11 world-class redesign)
// Layers: Higgsfield-generated atmosphere (stills + seamless loops) underneath,
// all type, numbers, UI and CTAs set in code on top. Claims rule applied:
// no unverifiable stats, no firm comparisons, no self-learning claims.
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReportEngine from "../components/ReportEngine";
import { Beam, Button, CTABand, Check, Container, Glass, Label, MediaFrame, Section, SectionHead } from "../components/ui";

const PROMISES = [
  "Just adopt the tools and AI will transform your business.",
  "Our platform automates everything. No expertise needed.",
  "Set it and forget it. The AI handles it from here.",
  "ROI in 30 days, guaranteed.",
];

const BUILT = [
  { t: "Specialists, not one chatbot", d: "A team of AI agents works your market in parallel: research, competitors, AI visibility, operations, revenue and strategy." },
  { t: "Every finding has a source", d: "Quality gates cut anything we cannot trace to a source. What reaches you is what we can stand behind." },
  { t: "Human judgment stays in charge", d: "AI does the research at AI speed. A person reviews the report and owns the recommendation." },
  { t: "Written rules, open to read", d: "Every agent works under the Maximus Constitution. You can read the rules on our Trust page." },
];

const DELIVERS = [
  { img: "/media/terrain.webp", tag: "Competitive Edge Report", t: "Competitor intelligence", d: "Which competitors are gaining ground in your market, how they win customers, and the specific moves that block them." },
  { img: "/media/mechanism.webp", tag: "AI Operational Audit", t: "Revenue recovery", d: "Where hours and money go to manual work that AI can now handle, prioritized and mapped to a clear implementation plan." },
  { img: "/media/prism.webp", tag: "AI visibility", t: "Found by AI answer engines", d: "When a customer asks ChatGPT, Claude or Google's AI for a recommendation in your space, do you appear? We check, then fix it." },
  { img: "/media/growth.webp", tag: "Growth Simulator", t: "Growth scenarios", d: "Toggle improvements and see how each one moves revenue, cost and market position, using your own numbers." },
];

const STEPS = [
  { n: "01", tag: "Free", t: "We reveal your blind spots.", d: "In 48 hours you receive a Competitive Edge Report: where you stand, who your real threats are, where revenue is leaking and which AI opportunities you are missing.", f: "No credit card. No sales call. No obligation." },
  { n: "02", tag: "Interactive", t: "You see your numbers.", d: "We model the improvements that matter for your business, so you can see what each one is worth before you commit to anything.", f: "Your data. Your market. Your decision." },
  { n: "03", tag: "Ongoing", t: "We build your edge.", d: "We put the systems in place that keep you ahead: competitor monitoring, AI-powered operations and strategy on your schedule.", f: "Built for your business, managed with you." },
];

const FAQ = [
  { q: "What is in the free Competitive Edge Report?", a: "Your market position, a breakdown of your top competitors, an AI visibility check (do answer engines recommend you?), your biggest revenue leak and a prioritized action plan. Every finding carries its source." },
  { q: "Why is the first report free?", a: "Because the fastest way to show what Maximus does is to do it for your business. There is no card, no sales call and no obligation." },
  { q: "Who is Maximus AI for?", a: "Small and mid-size businesses, service providers and the leaders who run them: the companies large consulting firms were never built to serve." },
  { q: "How does Maximus use AI, and where do people come in?", a: "Specialist AI agents do the research and analysis in parallel, under written operating rules. Quality gates remove anything unsourced. A person reviews the report and owns the recommendation." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        {/* ═════════ HERO: seamless AI loop + typeset thesis + live report engine ═════════ */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32 lg:pt-36">
          <div className="absolute inset-0">
            <Image src="/media/hero-horizon.webp" alt="" fill priority sizes="100vw" className="object-cover object-[70%_50%]" />
            <video
              className="hero-video absolute inset-0 h-full w-full object-cover object-[70%_50%]"
              src="/media/loop-hero.mp4"
              poster="/media/hero-horizon.webp"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            />
          </div>
          <div className="media-veil veil-left" />
          <div className="media-veil" style={{ background: "linear-gradient(180deg, rgba(6,9,24,.55) 0%, transparent 22%, transparent 70%, #0A0E27 100%)" }} />

          <Container wide className="relative">
            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <Label className="rise rise-1">For small and mid-size businesses</Label>
                <h1 className="font-hero rise rise-2 mt-7 text-[2.75rem] font-bold leading-[1.04] tracking-[-0.01em] text-white sm:text-6xl lg:text-[4.6rem]">
                  Enterprise-grade strategy, <span className="text-beam italic">built for your business.</span>
                </h1>
                <p className="rise rise-3 mt-8 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
                  The competitive edge big companies have paid consulting firms for decades to get, now within reach of every business. Specialist AI agents research your market. A person reviews every finding. You get the plan.
                </p>
                <div className="rise rise-4 mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                  <Button href="/free-report" size="lg" pulse>
                    Get Your Free Competitive Edge Report
                  </Button>
                  <Button href="#how-it-works" variant="ghost" size="lg" arrow={false}>
                    See how it works
                  </Button>
                </div>
                <dl className="rise rise-5 mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-[#00B4D8]/15 pt-7">
                  {[
                    ["48 h", "Delivery"],
                    ["$0", "First report"],
                    ["3", "Quality gates"],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <dt className="sr-only">{l}</dt>
                      <dd className="font-data text-2xl font-semibold text-white sm:text-3xl" style={{ textShadow: "0 0 22px rgba(0,180,216,.4)" }}>
                        {v}
                      </dd>
                      <dd className="mt-1.5 text-[13px] text-white/55">{l}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rise rise-4 lg:pl-4">
                <ReportEngine />
              </div>
            </div>
          </Container>
          <a href="#reality" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/45 transition-colors hover:text-[#00D4FF] sm:flex" aria-label="Scroll to next section">
            <span className="font-data text-[10px] tracking-[0.25em]">SCROLL</span>
            <span aria-hidden className="block h-10 w-px bg-gradient-to-b from-[#00D4FF] to-transparent" />
          </a>
        </section>

        {/* ═════════ REALITY CHECK: promises vs what we built ═════════ */}
        <Section id="reality" tone="navy" hex>
          <Container>
            <SectionHead label="The reality check" title="You have heard the AI promises before." intro="Every tool, every platform, every consultant. The same promises, the same results. Here is what we built instead." />
            <div className="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="reveal rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 sm:p-9" data-d="1">
                <span className="font-data text-[11px] tracking-[0.15em] text-white/40">WHAT THEY PROMISED</span>
                <ul className="mt-7 space-y-5">
                  {PROMISES.map((p) => (
                    <li key={p} className="flex gap-3 text-[15.5px] leading-relaxed text-white/40">
                      <span aria-hidden className="mt-2.5 h-px w-4 flex-none bg-white/25" />
                      <span className="line-through decoration-white/20">&ldquo;{p}&rdquo;</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal grid gap-4 sm:grid-cols-2" data-d="2">
                {BUILT.map((b, i) => (
                  <Glass key={b.t} className="p-7" style={{ transitionDelay: `${i * 60}ms` }}>
                    <Check />
                    <h3 className="font-head mt-4 text-lg font-semibold text-white">{b.t}</h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-white/65">{b.d}</p>
                  </Glass>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* ═════════ THE SYSTEM: parallel specialists (Council loop) ═════════ */}
        <section id="how-it-works" className="relative overflow-hidden bg-[#060918] py-24 sm:py-32">
          <Container wide>
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="reveal relative order-2 lg:order-1">
                <div className="img-frame relative aspect-[16/10]">
                  <Image src="/media/council.webp" alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
                  <video className="hero-video absolute inset-0 h-full w-full object-cover" src="/media/loop-council.mp4" poster="/media/council.webp" autoPlay muted loop playsInline preload="none" aria-hidden />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#060918]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                    {["Research", "Competitors", "AI visibility", "Operations", "Revenue", "Strategy"].map((s) => (
                      <span key={s} className="font-data rounded-md border border-[#00B4D8]/30 bg-[#060918]/75 px-2.5 py-1 text-[10.5px] tracking-wide text-[#E0F7FF]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <SectionHead
                  label="The system"
                  title={<>Many specialists. One answer you can act on.</>}
                  intro="Instead of one AI thinking step by step, Maximus runs specialist agents side by side, each focused on one part of your business. Their findings meet in one place, pass the quality gates, and become one clear plan."
                />
                <ul className="reveal mt-10 space-y-5" data-d="2">
                  {[
                    ["Parallel research", "Market, competitors, visibility, operations and revenue are worked at the same time, not one after another."],
                    ["One accountable answer", "Findings are reconciled into a single report with one prioritized plan, not a pile of outputs."],
                    ["Pro-human by design", "AI handles the research. People keep the judgment, the decisions and the relationship."],
                  ].map(([t, d]) => (
                    <li key={t} className="flex gap-4">
                      <span aria-hidden className="mt-2 h-2 w-2 flex-none rotate-45 bg-[#00B4D8] shadow-[0_0_10px_#00B4D8]" />
                      <div>
                        <h3 className="font-head font-semibold text-white">{t}</h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-white/65">{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* ═════════ QUALITY GATES ═════════ */}
        <section className="relative overflow-hidden py-28 sm:py-36">
          <div className="absolute inset-0">
            <Image src="/media/gates.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="media-veil" style={{ background: "linear-gradient(180deg,#060918 0%,rgba(6,9,24,.78) 30%,rgba(6,9,24,.82) 70%,#0A0E27 100%)" }} />
          <Container className="relative">
            <SectionHead align="center" label="Quality gates" title="If we cannot source it, you will not see it." intro="Every report passes three gates before it reaches you. Noise stops at the first one." />
            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {[
                ["Gate 1", "Source check", "Each finding is traced to where it came from. Anything without a source is cut."],
                ["Gate 2", "Consistency check", "Numbers and claims are checked against each other across the whole report."],
                ["Gate 3", "Human review", "A person reads the report, questions it and signs off on the recommendation."],
              ].map(([n, t, d], i) => (
                <Glass key={t} className="reveal relative p-8" style={{ transitionDelay: `${i * 90}ms` }}>
                  <span className="font-data text-xs tracking-[0.18em] text-[#00B4D8]">{n.toUpperCase()}</span>
                  <h3 className="font-head mt-3 text-xl font-semibold text-white">{t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">{d}</p>
                  <div aria-hidden className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-70" />
                </Glass>
              ))}
            </div>
          </Container>
        </section>

        {/* ═════════ WHAT YOU RECEIVE ═════════ */}
        <Section tone="navy">
          <Container wide>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHead label="What you receive" title="Intelligence specific to your market." intro="Four kinds of insight that change how you compete: your market, your competitors, your revenue gaps." />
              <div className="reveal" data-d="2">
                <Button href="/services" variant="ghost">
                  Explore all services
                </Button>
              </div>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {DELIVERS.map((x, i) => (
                <article key={x.t} className="reveal group glass glass-hover overflow-hidden" data-d={String((i % 2) + 1)}>
                  <div className="img-frame !rounded-none !border-0 aspect-[16/8]">
                    <Image src={x.img} alt="" fill sizes="(min-width:640px) 50vw, 100vw" className="object-cover" />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-[#0A0E27]/20 to-transparent" />
                  </div>
                  <div className="relative -mt-8 p-7 pt-0 sm:p-8 sm:pt-0">
                    <span className="font-data text-[11px] tracking-[0.15em] text-[#00B4D8]">{x.tag.toUpperCase()}</span>
                    <h3 className="font-head mt-2 text-2xl font-semibold text-white">{x.t}</h3>
                    <p className="mt-3 text-[15.5px] leading-relaxed text-white/65">{x.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* ═════════ BUILT FOR THE 99% ═════════ */}
        <section className="relative overflow-hidden bg-[#060918] py-28 sm:py-40">
          <div className="hexgrid" aria-hidden />
          <Container className="relative">
            <div className="reveal mx-auto max-w-4xl text-center">
              <Label className="justify-center">Built for the businesses big firms skip</Label>
              <p className="h-display mt-8 text-[2rem] leading-[1.15] sm:text-5xl lg:text-[3.6rem]">
                For decades, this level of strategy was reserved for companies with the largest budgets. Maximus brings it to small and mid-size businesses.
              </p>
              <Beam className="mx-auto mt-14 max-w-xl" />
              <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/65">
                Business owners, service providers and the leaders who run them. Strategy, insight and action steps at a fraction of the cost and time.
              </p>
            </div>
          </Container>
        </section>

        {/* ═════════ GOVERNANCE / TRUST ═════════ */}
        <Section tone="navy">
          <Container wide>
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <div>
                <SectionHead
                  label="Governance"
                  title="Rules you can read. Integrity you can check."
                  intro="Every Maximus agent works under written rules: the Maximus Constitution. It sets the standard for honesty, sourcing and when a person must decide. Our clients inherit that standard."
                />
                <ul className="reveal mt-9 space-y-3.5" data-d="2">
                  {["No invented numbers, clients or quotes", "Every estimate labeled as an estimate", "Anything irreversible waits for a human decision", "Your data used for your work only"].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[15.5px] text-white/80">
                      <Check className="mt-0.5" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="reveal mt-10" data-d="3">
                  <Button href="/trust" variant="deep">
                    Read how we work
                  </Button>
                </div>
              </div>
              <div className="reveal" data-d="2">
                <MediaFrame src="/media/vault.webp" alt="" ratio="4/3" />
              </div>
            </div>
          </Container>
        </Section>

        {/* ═════════ BIG BRAIN: the system behind the service ═════════ */}
        <section className="relative overflow-hidden py-28 sm:py-40">
          <div className="absolute inset-0">
            <Image src="/media/bigbrain.webp" alt="" fill sizes="100vw" className="object-cover" />
            <video className="hero-video absolute inset-0 h-full w-full object-cover" src="/media/loop-bigbrain.mp4" poster="/media/bigbrain.webp" autoPlay muted loop playsInline preload="none" aria-hidden />
          </div>
          <div className="media-veil" style={{ background: "linear-gradient(180deg,#0A0E27 0%,rgba(6,9,24,.35) 30%,rgba(6,9,24,.55) 65%,#060918 100%)" }} />
          <Container wide className="relative">
            <div className="reveal max-w-2xl rounded-2xl border border-[#00B4D8]/15 bg-[#060918]/70 p-8 backdrop-blur-md sm:p-11">
              <Label>Maximus AIOS</Label>
              <h2 className="h-display mt-5 text-3xl sm:text-[2.6rem]">The system behind the service.</h2>
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Maximus AIOS is the operating system our agents run on: the specialists, the quality gates, the written rules and the Big Brain, a structured memory of what we learn about your market so the next piece of work starts where the last one ended.
              </p>
              <p className="font-data mt-6 text-[12px] tracking-[0.12em] text-white/50">STATUS: IN BUILD FOR CLIENT ROLLOUT</p>
            </div>
          </Container>
        </section>

        {/* ═════════ HOW IT WORKS: three steps ═════════ */}
        <Section tone="fade" hex>
          <Container>
            <SectionHead align="center" label="The process" title="Three steps. No complexity. No contract." />
            <ol className="relative mt-16 grid gap-6 lg:grid-cols-3">
              <div aria-hidden className="absolute left-0 right-0 top-[54px] hidden h-px bg-gradient-to-r from-transparent via-[#00B4D8]/50 to-transparent lg:block" />
              {STEPS.map((s, i) => (
                <li key={s.n} className="reveal relative" data-d={String(i + 1)}>
                  <Glass className="h-full p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-data text-4xl font-semibold text-white" style={{ textShadow: "0 0 24px rgba(0,180,216,.5)" }}>
                        {s.n}
                      </span>
                      <span className="font-data rounded-md border border-[#00B4D8]/35 px-2.5 py-1 text-[10.5px] tracking-[0.14em] text-[#00D4FF]">{s.tag.toUpperCase()}</span>
                    </div>
                    <h3 className="font-head mt-7 text-xl font-semibold text-white">{s.t}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/65">{s.d}</p>
                    <p className="mt-5 border-t border-white/[0.07] pt-4 text-[13px] text-white/50">{s.f}</p>
                  </Glass>
                </li>
              ))}
            </ol>
            <div className="reveal mt-14 flex justify-center">
              <Button href="/free-report" size="lg" micro="Step 1 is free. Always.">
                Start With Your Free Report
              </Button>
            </div>
          </Container>
        </Section>

        {/* ═════════ FAQ ═════════ */}
        <Section tone="navy">
          <Container className="max-w-4xl">
            <SectionHead label="Questions" title="What business owners ask first." />
            <div className="mt-12 divide-y divide-[#00B4D8]/12 border-y border-[#00B4D8]/12">
              {FAQ.map((f) => (
                <details key={f.q} className="reveal group py-6">
                  <summary className="font-head flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-white">
                    {f.q}
                    <span aria-hidden className="grid h-8 w-8 flex-none place-items-center rounded-full border border-[#00B4D8]/35 text-[#00D4FF] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-[15.5px] leading-relaxed text-white/70">{f.a}</p>
                </details>
              ))}
            </div>
            <p className="reveal mt-8 text-sm text-white/50">
              Want the detail on how we work? <Link href="/trust" className="text-[#00D4FF] underline underline-offset-4">Read our trust and ethics standard</Link>.
            </p>
          </Container>
        </Section>

        <CTABand title={<>Know where you stand. <br className="hidden sm:block" />Before your competitors do.</>} />
      </main>
      <Footer />
    </>
  );
}
