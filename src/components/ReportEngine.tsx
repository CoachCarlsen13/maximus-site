"use client";
// Code-built motion: how a Competitive Edge Report is assembled.
// Specialist agents (left) -> quality gates (middle) -> report sections (right).
// Illustrative only: no numbers, no client data. Respects reduced motion.
import { useEffect, useState } from "react";

const AGENTS = ["Market", "Competitors", "AI visibility", "Operations", "Revenue", "Strategy"];
const GATES = ["Source check", "Consistency", "Human review"];
const SECTIONS = ["Market position", "Top 5 competitors", "AI visibility score", "Biggest revenue leak", "90-day action plan"];

export default function ReportEngine() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(SECTIONS.length);
      return;
    }
    const id = window.setInterval(() => setStep((s) => (s >= SECTIONS.length + 3 ? 0 : s + 1)), 1100);
    return () => window.clearInterval(id);
  }, []);

  const done = Math.min(step, SECTIONS.length);

  return (
    <div className="glass relative overflow-hidden p-5 sm:p-6" aria-label="Illustration: how a Maximus report is assembled">
      <div className="flex items-center justify-between">
        <span className="label !text-[10.5px]">Report engine</span>
        <span className="font-data text-[10.5px] tracking-[0.12em] text-white/45">ILLUSTRATIVE</span>
      </div>

      <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-stretch gap-3 sm:gap-4">
        {/* Agents */}
        <ul className="flex flex-col justify-between gap-2">
          {AGENTS.map((a, i) => (
            <li
              key={a}
              className="font-data flex items-center gap-2 rounded-lg border border-[#00B4D8]/15 bg-[#060918]/60 px-2.5 py-1.5 text-[10.5px] text-[#E0F7FF]/85 sm:text-[11px]"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 flex-none rounded-full bg-[#00D4FF]"
                style={{ animation: `nodepulse 1.8s ease-in-out ${i * 0.22}s infinite`, boxShadow: "0 0 8px #00D4FF" }}
              />
              {a}
            </li>
          ))}
        </ul>

        {/* Flow + gates */}
        <div className="relative flex w-14 flex-col items-center justify-center gap-3 sm:w-20">
          <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 80 240" preserveAspectRatio="none">
            {[20, 60, 100, 140, 180, 220].map((y, i) => (
              <path
                key={y}
                d={`M0 ${y} C 30 ${y}, 40 120, 80 120`}
                fill="none"
                stroke="#00B4D8"
                strokeOpacity=".55"
                strokeWidth="1"
                strokeDasharray="4 8"
                style={{ animation: `dash 3.2s linear ${i * 0.15}s infinite` }}
              />
            ))}
          </svg>
          {GATES.map((g, i) => (
            <div
              key={g}
              className="relative z-10 w-full rounded-md border px-1 py-1.5 text-center"
              style={{
                borderColor: step > i ? "rgba(0,212,255,.75)" : "rgba(0,180,216,.2)",
                background: step > i ? "rgba(0,119,182,.35)" : "rgba(6,9,24,.85)",
                boxShadow: step > i ? "0 0 16px rgba(0,180,216,.35)" : "none",
                transition: "all .5s ease",
              }}
            >
              <span className="font-data block text-[8.5px] leading-tight tracking-wide text-[#E0F7FF] sm:text-[9.5px]">{g}</span>
            </div>
          ))}
        </div>

        {/* Report */}
        <div className="rounded-xl border border-[#00B4D8]/20 bg-[#060918]/80 p-3">
          <div className="font-head text-[11px] font-semibold text-white sm:text-xs">Competitive Edge Report</div>
          <div className="mt-1 h-px bg-gradient-to-r from-[#00D4FF] to-transparent" />
          <ul className="mt-3 space-y-2">
            {SECTIONS.map((s, i) => {
              const on = i < done;
              return (
                <li key={s} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="grid h-3.5 w-3.5 flex-none place-items-center rounded-[4px] border"
                    style={{
                      borderColor: on ? "#00D4FF" : "rgba(255,255,255,.18)",
                      background: on ? "#00B4D8" : "transparent",
                      transition: "all .4s ease",
                    }}
                  >
                    {on && (
                      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5">
                        <path d="M2.5 6.3l2.2 2.2 4.8-5" stroke="#060918" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                  <span className="text-[10.5px] leading-tight sm:text-[11.5px]" style={{ color: on ? "#E0F7FF" : "rgba(255,255,255,.4)", transition: "color .4s" }}>
                    {s}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full bg-[#00B4D8]" style={{ width: `${(done / SECTIONS.length) * 100}%`, transition: "width .6s ease", boxShadow: "0 0 10px #00B4D8" }} />
          </div>
        </div>
      </div>
      <p className="mt-4 text-[11.5px] leading-snug text-white/50">Specialist AI agents research in parallel. Findings without a source are cut. A person reviews the report before it ships.</p>
    </div>
  );
}
