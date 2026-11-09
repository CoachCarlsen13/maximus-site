// Maximus design system primitives (2026-11 redesign).
// Brand: navy ground, cyan the only accent, Sora headlines, DM Sans body,
// JetBrains Mono labels/data, solid-backed CTAs, one signature texture per surface.
import Link from "next/link";
import Image from "next/image";
import type { ReactNode, CSSProperties } from "react";

export function Shield({ size = 40, withAI = false, className = "" }: { size?: number; withAI?: boolean; className?: string }) {
  // Approved shield mark (Joel, 2026-10-08). Placed as the master SVG file; never redrawn.
  const w = size;
  const h = Math.round((size * 464) / 400);
  return (
    <Image
      src={withAI ? "/brand/shield-ai.svg" : "/brand/shield.svg"}
      width={w}
      height={h}
      alt={withAI ? "Maximus AI shield" : ""}
      aria-hidden={withAI ? undefined : true}
      className={className}
      priority
      unoptimized
    />
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`label inline-flex items-center gap-3 ${className}`}>
      <span aria-hidden className="h-px w-8 bg-[#00B4D8]/70" />
      {children}
    </span>
  );
}

export function Container({ children, className = "", wide = false }: { children: ReactNode; className?: string; wide?: boolean }) {
  return <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${wide ? "max-w-[1320px]" : "max-w-6xl"} ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  tone = "navy",
  id,
  hex = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: "navy" | "dark" | "fade";
  id?: string;
  hex?: boolean;
}) {
  const bg = tone === "dark" ? "section-dark" : tone === "fade" ? "section-fade" : "section-navy";
  return (
    <section id={id} className={`relative overflow-hidden py-20 sm:py-28 lg:py-32 ${bg} ${className}`}>
      {hex && <div className="hexgrid" aria-hidden />}
      <div className="relative">{children}</div>
    </section>
  );
}

export function SectionHead({
  label,
  title,
  intro,
  align = "left",
  className = "",
}: {
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const c = align === "center" ? "text-center mx-auto items-center" : "";
  return (
    <div className={`reveal flex flex-col max-w-3xl ${c} ${className}`}>
      {label && <Label className={align === "center" ? "justify-center" : ""}>{label}</Label>}
      <h2 className="h-display mt-5 text-[2rem] sm:text-5xl lg:text-[3.4rem]">{title}</h2>
      {intro && <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/70">{intro}</p>}
    </div>
  );
}

export function Beam({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`beam beam-sweep ${className}`} />;
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "deep" | "ghost";
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  arrow?: boolean;
  className?: string;
  micro?: string;
};

const sizes = { sm: "px-5 py-2.5 text-sm", md: "px-7 py-3.5 text-[15px]", lg: "px-8 py-4 text-base sm:text-[17px]" };

export function Button({ href, children, variant = "primary", size = "md", pulse = false, arrow = true, className = "", micro }: BtnProps) {
  const v = variant === "primary" ? "btn-primary" : variant === "deep" ? "btn-deep" : "btn-ghost";
  const internal = href.startsWith("/") || href.startsWith("#");
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <span aria-hidden className="btn-arrow">
          →
        </span>
      )}
    </>
  );
  const cls = `btn ${v} ${sizes[size]} ${pulse ? "btn-pulse" : ""} ${className}`;
  const el = internal ? (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
  if (!micro) return el;
  return (
    <span className="inline-flex flex-col items-start gap-2.5">
      {el}
      <span className="text-[13px] text-white/50">{micro}</span>
    </span>
  );
}

export function Glass({ children, className = "", hover = true, style }: { children: ReactNode; className?: string; hover?: boolean; style?: CSSProperties }) {
  return (
    <div className={`glass ${hover ? "glass-hover" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}

export function MediaFrame({
  src,
  alt,
  className = "",
  ratio = "16/9",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`img-frame ${className}`} style={{ aspectRatio: ratio }}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#060918]/55 via-transparent to-transparent" />
    </div>
  );
}

/** Interior-page hero: generated atmosphere underneath, typeset copy on top. */
export function PageHero({
  label,
  title,
  intro,
  image,
  imageAlt = "",
  children,
  compact = false,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt?: string;
  children?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden ${compact ? "pt-36 pb-20 sm:pt-44 sm:pb-24" : "pt-36 pb-24 sm:pt-48 sm:pb-32 lg:min-h-[78vh] lg:flex lg:items-center"}`}>
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover kenburns" />
      </div>
      <div className="media-veil veil-left" />
      <div className="media-veil veil-bottom" />
      <Container className="relative">
        <div className="max-w-3xl">
          <Label className="rise rise-1">{label}</Label>
          <h1 className="h-display rise rise-2 mt-6 text-[2.5rem] leading-[1.06] sm:text-6xl lg:text-[4.2rem]">{title}</h1>
          {intro && <p className="rise rise-3 mt-7 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/75">{intro}</p>}
          {children && <div className="rise rise-4 mt-10">{children}</div>}
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0">
        <Beam className="opacity-60" />
      </div>
    </section>
  );
}

/** Closing call to action band used across pages. */
export function CTABand({
  title = "See where you stand before your competitors do.",
  intro = "Your free Competitive Edge Report: your market, your competitors and your AI visibility, every finding sourced and reviewed. Delivered in 48 hours.",
  cta = "Get Your Free Competitive Edge Report",
  href = "/free-report",
  image = "/media/hero-ocean.webp",
}: {
  title?: ReactNode;
  intro?: ReactNode;
  cta?: string;
  href?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="media-veil veil-full" />
      <div className="hexgrid" aria-hidden />
      <Container className="relative text-center">
        <div className="reveal mx-auto max-w-3xl flex flex-col items-center">
          <Shield size={56} className="mb-8 drop-shadow-[0_0_24px_rgba(0,180,216,0.45)]" />
          <h2 className="h-display text-[2rem] sm:text-5xl">{title}</h2>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/75">{intro}</p>
          <div className="mt-10">
            <Button href={href} size="lg" pulse micro="No credit card. No sales call.">
              {cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={`h-5 w-5 flex-none text-[#00B4D8] ${className}`} viewBox="0 0 20 20" fill="none">
      <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Stat({ value, label, note }: { value: string; label: string; note?: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-data text-3xl sm:text-4xl font-semibold text-white" style={{ textShadow: "0 0 24px rgba(0,180,216,.35)" }}>
        {value}
      </span>
      <span className="mt-2 text-sm text-white/70">{label}</span>
      {note && <span className="mt-1 text-xs text-white/45">{note}</span>}
    </div>
  );
}
