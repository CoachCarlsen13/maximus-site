// Growth Simulator (2026-11 redesign): a working, transparent model.
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GrowthSimulatorForm from "./GrowthSimulatorForm";
import { Button, CTABand, Container, Glass, PageHero, Section, SectionHead } from "../../components/ui";

export const metadata: Metadata = {
  title: "Growth Simulator",
  description: "Model what happens when your team hands repeatable work to AI: capacity, revenue and three growth scenarios over 36 months. Free, instant, every assumption visible.",
};

export default function GrowthSimulatorPage() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          label="Growth Simulator"
          image="/media/growth.webp"
          title={<>What could your business look like with the same team and less busywork?</>}
          intro="Enter a few numbers, choose which tasks to hand to AI and see three growth scenarios over 36 months. Every assumption is visible and yours to change. Nothing is sent or stored."
        >
          <Button href="#simulator" size="lg" pulse>
            Build My Growth Model
          </Button>
        </PageHero>

        <Section id="simulator" tone="navy" hex className="scroll-mt-16">
          <Container wide>
            <SectionHead label="Try it now" title="Your business, your numbers." intro="Defaults are an example service business. Replace them with yours." />
            <div className="reveal mt-12" data-d="2">
              <GrowthSimulatorForm />
            </div>
          </Container>
        </Section>

        <Section tone="dark">
          <Container wide>
            <SectionHead label="How it works" title="Three steps. Three minutes." />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                ["01", "Enter your numbers", "Revenue per client, clients per month, hours per client and how much of that time is admin."],
                ["02", "Choose what AI takes on", "Toggle the repeatable tasks you would hand to AI and watch your capacity change with the same team."],
                ["03", "Compare three scenarios", "Conservative, moderate and aggressive growth over 12, 24 and 36 months, with the math shown."],
              ].map(([n, t, d], i) => (
                <Glass key={n} className="reveal p-8" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="font-data text-3xl font-semibold text-white" style={{ textShadow: "0 0 22px rgba(0,180,216,.5)" }}>
                    {n}
                  </span>
                  <h3 className="font-head mt-5 text-xl font-semibold text-white">{t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">{d}</p>
                </Glass>
              ))}
            </div>
            <p className="reveal mx-auto mt-14 max-w-3xl text-center text-lg leading-relaxed text-white/65">
              The simulator is a starting point. Your free Competitive Edge Report tests these assumptions against your actual market and competitors.
            </p>
          </Container>
        </Section>

        <CTABand title="See the numbers behind your market, not just your model." image="/media/hero-dome.webp" />
      </main>
      <Footer />
    </>
  );
}
