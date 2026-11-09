"use client";
// Growth Simulator (2026-11 redesign): a real, client-side model.
// Replaces the old form that faked a "generating" state and computed nothing.
// Every assumption is visible and editable; every output is labeled an estimate.
import { useMemo, useState } from "react";

const TASKS = [
  { id: "followup", label: "Lead follow-up and replies", cut: 0.25 },
  { id: "schedule", label: "Scheduling and reminders", cut: 0.2 },
  { id: "intake", label: "Intake, forms and paperwork", cut: 0.2 },
  { id: "reporting", label: "Reporting and admin updates", cut: 0.15 },
  { id: "content", label: "Marketing content drafts", cut: 0.2 },
];

const SCENARIOS = [
  { key: "conservative", label: "Conservative", fill: 0.25 },
  { key: "moderate", label: "Moderate", fill: 0.5 },
  { key: "aggressive", label: "Aggressive", fill: 0.8 },
] as const;

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function Num({ id, label, value, onChange, prefix, suffix, step = 1, min = 0 }: { id: string; label: string; value: number; onChange: (v: number) => void; prefix?: string; suffix?: string; step?: number; min?: number }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <div className="relative">
        {prefix && <span className="font-data pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/45">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
          className={`field font-data ${prefix ? "pl-8" : ""} ${suffix ? "pr-14" : ""}`}
        />
        {suffix && <span className="font-data pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-white/45">{suffix}</span>}
      </div>
    </div>
  );
}

export default function GrowthSimulatorForm() {
  const [price, setPrice] = useState(1200);
  const [clients, setClients] = useState(12);
  const [hours, setHours] = useState(10);
  const [adminShare, setAdminShare] = useState(40);
  const [newStream, setNewStream] = useState(0);
  const [on, setOn] = useState<Record<string, boolean>>({ followup: true, schedule: true, intake: false, reporting: false, content: false });
  const [scenario, setScenario] = useState<(typeof SCENARIOS)[number]["key"]>("moderate");

  const m = useMemo(() => {
    const cut = TASKS.reduce((s, t) => s + (on[t.id] ? t.cut : 0), 0); // share of admin time removed
    const a = Math.min(adminShare, 95) / 100;
    const newHours = hours * (1 - a * cut); // hours per client after delegation
    const capacity = newHours > 0 ? (clients * hours) / newHours : clients; // same team hours, more clients
    const freed = Math.max(0, capacity - clients);
    const baseRev = price * clients;
    const out = SCENARIOS.map((s) => {
      const target = clients + freed * s.fill;
      const months = Array.from({ length: 36 }, (_, i) => {
        const ramp = Math.min(1, (i + 1) / 6); // reach the scenario level over six months
        const c = clients + (target - clients) * ramp;
        const stream = i >= 3 ? newStream : 0; // a new service line starts in month 4
        return price * c + stream;
      });
      const total = (n: number) => months.slice(0, n).reduce((x, y) => x + y, 0);
      return { ...s, target, monthly: months[11], months, y1: total(12) - baseRev * 12, y3: total(36) - baseRev * 36 };
    });
    return { cut, a, newHours, capacity, freed, baseRev, out };
  }, [price, clients, hours, adminShare, newStream, on]);

  const cur = m.out.find((s) => s.key === scenario)!;
  const max = Math.max(...m.out.map((s) => Math.max(...s.months)), m.baseRev) * 1.05;
  const W = 640;
  const H = 220;
  const path = (arr: number[]) => arr.map((v, i) => `${i === 0 ? "M" : "L"}${((i / 35) * W).toFixed(1)},${(H - (v / max) * H).toFixed(1)}`).join(" ");

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      {/* Inputs */}
      <div className="glass p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="label !text-[11px]">1 · Your business</span>
          <span className="font-data text-[10.5px] tracking-[0.12em] text-white/45">NOTHING IS SENT OR STORED</span>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Num id="price" label="Average revenue per client" value={price} onChange={setPrice} prefix="$" step={50} />
          <Num id="clients" label="Clients served per month" value={clients} onChange={setClients} />
          <Num id="hours" label="Team hours per client" value={hours} onChange={setHours} suffix="h" step={0.5} />
          <Num id="admin" label="Share of those hours that is admin" value={adminShare} onChange={(v) => setAdminShare(Math.min(95, v))} suffix="%" />
        </div>

        <span className="label mt-9 block !text-[11px]">2 · Tasks to delegate to AI</span>
        <ul className="mt-4 space-y-2.5">
          {TASKS.map((t) => (
            <li key={t.id}>
              <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-[#00B4D8]/15 bg-[#060918]/50 px-4 py-3 transition-colors hover:border-[#00B4D8]/40">
                <span className="flex items-center gap-3">
                  <input type="checkbox" checked={!!on[t.id]} onChange={(e) => setOn((o) => ({ ...o, [t.id]: e.target.checked }))} className="h-4 w-4 accent-[#00B4D8]" />
                  <span className="text-[15px] text-white/85">{t.label}</span>
                </span>
                <span className="font-data text-[11.5px] text-white/45">−{Math.round(t.cut * 100)}% admin</span>
              </label>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Num id="stream" label="Optional: monthly revenue from a new AI-enabled service (from month 4)" value={newStream} onChange={setNewStream} prefix="$" step={250} />
        </div>
      </div>

      {/* Outputs */}
      <div className="glass p-6 sm:p-8" aria-live="polite">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="label !text-[11px]">3 · Your scenarios</span>
          <span className="font-data rounded-md border border-[#FFA500]/40 px-2 py-0.5 text-[10.5px] tracking-[0.14em] text-[#FFA500]">ESTIMATE</span>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2" role="tablist" aria-label="Scenario">
          {SCENARIOS.map((s) => (
            <button
              key={s.key}
              role="tab"
              aria-selected={scenario === s.key}
              onClick={() => setScenario(s.key)}
              className={`rounded-xl border px-2 py-2.5 text-sm font-semibold transition-colors ${scenario === s.key ? "border-[#00B4D8] bg-[#00B4D8] text-[#060918]" : "border-[#00B4D8]/25 text-white/75 hover:border-[#00B4D8]/60"}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <dl className="mt-7 grid grid-cols-2 gap-5">
          <div>
            <dt className="text-xs text-white/55">Capacity with the same team</dt>
            <dd className="font-data mt-1 text-2xl font-semibold text-white">{m.capacity.toFixed(1)} <span className="text-sm text-white/50">clients/mo</span></dd>
          </div>
          <div>
            <dt className="text-xs text-white/55">Clients in this scenario</dt>
            <dd className="font-data mt-1 text-2xl font-semibold text-white">{cur.target.toFixed(1)} <span className="text-sm text-white/50">/mo</span></dd>
          </div>
          <div>
            <dt className="text-xs text-white/55">Added revenue, year 1</dt>
            <dd className="font-data mt-1 text-2xl font-semibold text-white" style={{ textShadow: "0 0 22px rgba(0,180,216,.45)" }}>
              {usd(cur.y1)}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-white/55">Added revenue, 3 years</dt>
            <dd className="font-data mt-1 text-2xl font-semibold text-white" style={{ textShadow: "0 0 22px rgba(0,180,216,.45)" }}>
              {usd(cur.y3)}
            </dd>
          </div>
        </dl>

        <figure className="mt-7">
          <svg viewBox={`0 0 ${W} ${H + 24}`} className="w-full" role="img" aria-label="Monthly revenue over 36 months for each scenario">
            {[0.25, 0.5, 0.75, 1].map((g) => (
              <line key={g} x1="0" x2={W} y1={H - g * H} y2={H - g * H} stroke="rgba(255,255,255,.07)" />
            ))}
            <line x1="0" x2={W} y1={H - (m.baseRev / max) * H} y2={H - (m.baseRev / max) * H} stroke="rgba(255,255,255,.35)" strokeDasharray="4 6" />
            {m.out.map((s) => (
              <path
                key={s.key}
                d={path(s.months)}
                fill="none"
                stroke={s.key === "conservative" ? "#0077B6" : s.key === "moderate" ? "#00B4D8" : "#00D4FF"}
                strokeWidth={s.key === scenario ? 3 : 1.4}
                strokeOpacity={s.key === scenario ? 1 : 0.45}
                style={{ transition: "all .4s ease", filter: s.key === scenario ? "drop-shadow(0 0 6px rgba(0,212,255,.6))" : "none" }}
              />
            ))}
            {[0, 12, 24, 36].map((mo) => (
              <text key={mo} x={Math.min(W - 18, (mo / 36) * W)} y={H + 18} fill="rgba(255,255,255,.45)" fontSize="11" fontFamily="var(--font-data), monospace">
                {mo === 0 ? "Now" : `M${mo}`}
              </text>
            ))}
          </svg>
          <figcaption className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-white/55">
            <span>— Today: {usd(m.baseRev)}/mo</span>
            <span className="text-[#0077B6]">■ Conservative</span>
            <span className="text-[#00B4D8]">■ Moderate</span>
            <span className="text-[#00D4FF]">■ Aggressive</span>
          </figcaption>
        </figure>

        <details className="mt-6 rounded-xl border border-white/[0.07] bg-[#060918]/50 p-4 text-[12.5px] leading-relaxed text-white/60">
          <summary className="cursor-pointer font-semibold text-white/80">How this is calculated</summary>
          <p className="mt-3 font-data">
            Admin removed = {m.a * 100}% admin × {Math.round(m.cut * 100)}% cut = {(m.a * m.cut * 100).toFixed(1)}% of hours. Hours per client: {hours} → {m.newHours.toFixed(2)}. Same team hours serve {m.capacity.toFixed(1)} clients/mo.
          </p>
          <p className="mt-2">
            Scenarios assume you fill 25%, 50% or 80% of the freed capacity with new clients, reached over six months. A new service line, if entered, starts in month 4. These are assumptions to explore, not a forecast; real results depend on demand, pricing and execution. The free report checks them against your market.
          </p>
        </details>
      </div>
    </div>
  );
}
