// Shared article layout for Insights posts (2026-11 redesign).
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Beam, Button, Container, Glass, Label } from "./ui";

export default function Article({
  category,
  title,
  date,
  read,
  image,
  schema,
  children,
  cta,
}: {
  category: string;
  title: string;
  date: string;
  read: string;
  image: string;
  schema: object;
  children: ReactNode;
  cta: { title: string; body: string };
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main id="main">
        <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
          <div className="absolute inset-0">
            <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="media-veil" style={{ background: "linear-gradient(180deg, rgba(6,9,24,.78) 0%, rgba(6,9,24,.7) 55%, #0A0E27 100%)" }} />
          <Container className="relative max-w-3xl">
            <Link href="/blog" className="font-data text-[11px] tracking-[0.16em] text-white/55 hover:text-[#00D4FF]">
              ← ALL INSIGHTS
            </Link>
            <div className="mt-6">
              <Label className="rise rise-1">{category}</Label>
            </div>
            <h1 className="h-display rise rise-2 mt-5 text-[2.2rem] leading-[1.1] sm:text-5xl">{title}</h1>
            <p className="font-data rise rise-3 mt-6 text-[12px] tracking-[0.12em] text-white/55">
              JOEL WINNS · {date.toUpperCase()} · {read.toUpperCase()}
            </p>
          </Container>
        </section>
        <section className="section-navy pb-24">
          <Container className="max-w-3xl">
            <article className="prose-mx text-[17.5px] text-white/75">{children}</article>
            <Beam className="my-14" />
            <Glass hover={false} className="p-8 sm:p-10">
              <h2 className="font-head text-2xl font-bold text-white">{cta.title}</h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-white/65">{cta.body}</p>
              <div className="mt-7">
                <Button href="/free-report" micro="Free report. No sales call.">
                  Get Your Free Competitive Edge Report
                </Button>
              </div>
            </Glass>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function Source({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="font-data !text-[13px] !no-underline text-[#00D4FF] hover:!underline">
      [{children}]
    </a>
  );
}
