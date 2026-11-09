"use client";
// Interactive cost-of-manual-work estimate. Formula shown; result labeled ESTIMATE.
import { useState } from "react";

const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function AuditMath() {
  const [hours, setHours] = useState(16);
  const [rate, setRate] = useState(50);
  const yearly = hours * rate * 52;
  const monthly = yearly / 12;

  return (
    <div className="glass p-6 sm:p-9" aria-live="polite">
      <div className="flex items-center justify-between">
        <span className="label !text-[11px]">Your numbers</span>
        <span className="font-data rounded-md border border-[#FFA500]/40 px-2 py-0.5 text-[10.5px] tracking-[0.14em] text-[#FFA500]">ESTIMATE</span>
      </div>

      <div className="mt-8 space-y-8">
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor="hours" className="text-[15px] text-white/80">
              Hours per week spent on repeatable manual tasks
            </label>
            <span className="font-data text-xl font-semibold text-white">{hours} h</span>
          </div>
          <input id="hours" type="range" min={2} max={60} step={1} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="mt-4 w-full" />
        </div>
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor="rate" className="text-[15px] text-white/80">
              Loaded cost per hour (pay, benefits, overhead)
            </label>
            <span className="font-data text-xl font-semibold text-white">${rate}</span>
          </div>
          <input id="rate" type="range" min={15} max={200} step={5} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-4 w-full" />
        </div>
      </div>

      <div className="mt-10 grid gap-6 border-t border-[#00B4D8]/15 pt-8 sm:grid-cols-2">
        <div>
          <div className="font-data text-4xl font-semibold text-white sm:text-5xl" style={{ textShadow: "0 0 26px rgba(0,180,216,.45)" }}>
            {fmt(yearly)}
          </div>
          <div className="mt-2 text-sm text-white/60">per year on manual work</div>
        </div>
        <div>
          <div className="font-data text-4xl font-semibold text-white/85 sm:text-5xl">{fmt(monthly)}</div>
          <div className="mt-2 text-sm text-white/60">per month</div>
        </div>
      </div>
      <p className="font-data mt-7 text-[12px] leading-relaxed text-white/45">
        {hours} h × ${rate} × 52 weeks = {fmt(yearly)}. Not every task can or should be automated; the audit finds which ones can, and what each fix would cost.
      </p>
    </div>
  );
}
