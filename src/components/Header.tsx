// Maximus site header (2026-11 redesign): transparent over the hero, morphs into a
// glass bar on scroll. Shield mark + wordmark. One primary CTA.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Shield } from "./ui";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/trust", label: "Trust" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: solid ? "rgba(6,9,24,0.82)" : "transparent",
        backdropFilter: solid ? "blur(16px)" : "none",
        WebkitBackdropFilter: solid ? "blur(16px)" : "none",
        borderBottom: solid ? "1px solid rgba(0,180,216,0.14)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8" style={{ height: solid ? 68 : 84, transition: "height .45s ease" }}>
        <Link href="/" className="group flex items-center gap-3" aria-label="Maximus AI home">
          <Shield size={34} className="transition-transform duration-500 group-hover:scale-105" />
          <span className="flex flex-col leading-none">
            <span className="font-head text-[15px] font-bold tracking-[0.14em] text-[#E0F7FF]">MAXIMUS AI</span>
            <span className="font-data mt-1.5 text-[9.5px] tracking-[0.2em] text-[#00B4D8]">STRATEGIC BUSINESS INTELLIGENCE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative rounded-lg px-3.5 py-2 text-[14.5px] transition-colors ${active ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                {l.label}
                <span
                  aria-hidden
                  className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-[#00D4FF] transition-transform duration-300"
                  style={{ transform: active ? "scaleX(1)" : "scaleX(0)", boxShadow: "0 0 8px #00B4D8" }}
                />
              </Link>
            );
          })}
          <Link href="/free-report" className="btn btn-primary ml-4 px-5 py-2.5 text-sm">
            Free Competitive Edge Report <span aria-hidden className="btn-arrow">→</span>
          </Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="relative z-50 -mr-2 p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="block h-0.5 w-6 bg-current transition-transform duration-300" style={{ transform: open ? "translateY(6px) rotate(45deg)" : "none" }} />
          <span className="mt-[5px] block h-0.5 w-6 bg-current transition-opacity duration-300" style={{ opacity: open ? 0 : 1 }} />
          <span className="mt-[5px] block h-0.5 w-6 bg-current transition-transform duration-300" style={{ transform: open ? "translateY(-8px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className="fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto bg-[#060918]/97 px-6 pb-10 pt-6 transition-all duration-500 lg:hidden"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transform: open ? "none" : "translateY(-8px)" }}
        aria-hidden={!open}
      >
        <div className="hexgrid" aria-hidden />
        <nav className="relative flex flex-col" aria-label="Mobile">
          {[{ href: "/", label: "Home" }, ...navLinks, { href: "/ai-audit", label: "AI Operational Audit" }, { href: "/growth", label: "Growth Simulator" }].map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              tabIndex={open ? 0 : -1}
              className="font-head border-b border-[#00B4D8]/10 py-4 text-2xl font-semibold text-white"
              style={{ transition: `opacity .5s ${0.05 * i}s, transform .5s ${0.05 * i}s`, opacity: open ? 1 : 0, transform: open ? "none" : "translateY(10px)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/free-report" tabIndex={open ? 0 : -1} className="btn btn-primary mt-8 px-6 py-4 text-base">
            Get Your Free Competitive Edge Report <span aria-hidden className="btn-arrow">→</span>
          </Link>
          <p className="mt-4 text-sm text-white/50">No credit card. No sales call.</p>
        </nav>
      </div>
    </header>
  );
}
