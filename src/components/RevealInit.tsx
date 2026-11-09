"use client";
// Scroll-reveal driver. Content is visible by default; only when JS runs do
// .reveal elements start hidden and fade up as they enter the viewport.
// Fixes the blank-section bug on the old site (sections stuck invisible).
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealInit() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    root.classList.add("js");
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95) el.classList.add("in");
      else io.observe(el);
    });
    // Safety net: never leave content hidden.
    const t = window.setTimeout(() => els.forEach((el) => el.classList.add("in")), 12000);
    return () => { io.disconnect(); window.clearTimeout(t); };
  }, [pathname]);
  return null;
}
