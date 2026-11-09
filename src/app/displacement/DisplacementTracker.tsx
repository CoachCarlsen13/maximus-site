"use client";
// AI Displacement Tracker — Client Component
// Created: 2026-04-03
// Purpose: Animated dual counters + timeline feed. Fetches from Railway API.

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CTABand } from "../../components/ui";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://command-center-production-ffc0.up.railway.app";

interface DashboardData {
  counters: {
    total_investment_usd: string;
    total_investment_count: number;
    total_layoffs: number;
    total_layoff_events: number;
  };
  events: Array<{
    event_type: "investment" | "layoff";
    id: string;
    date: string;
    company: string;
    metric_value: string | null;
    metric_unit: string;
    category: string;
    description: string;
    source_url: string | null;
    source_name: string | null;
  }>;
  filter: string;
}

function formatUSD(valueStr: string): string {
  const value = parseFloat(valueStr);
  if (isNaN(value) || value === 0) return "$0";
  if (value >= 1_000_000_000_000)
    return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
  if (value >= 1_000_000_000)
    return `$${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(0)}M`;
  return `$${value.toLocaleString()}`;
}

function formatNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K+`;
  return value.toLocaleString();
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

// Animated counter component
function AnimatedCounter({
  target,
  formatter,
  duration = 2000,
}: {
  target: number;
  formatter: (n: number) => string;
  duration?: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (target === 0) return;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(startValue + (target - startValue) * eased);
      setCurrent(value);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{formatter(current)}</span>;
}

type FilterTab = "all" | "investments" | "layoffs";

export default function DisplacementTracker() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterTab>("all");

  const fetchData = useCallback(async (selectedFilter: FilterTab) => {
    try {
      const res = await fetch(
        `${API_BASE}/api/displacement/tracker/dashboard?filter=${selectedFilter}&limit=30`,
        { cache: "no-store" }
      );
      if (!res.ok) throw new Error(`API returned ${res.status}`);
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(filter);
    // Auto-refresh every 5 minutes
    const interval = setInterval(() => fetchData(filter), 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [filter, fetchData]);

  const offline = !!error && !data;

  return (
    <>
      <Header />
      <main id="main">
        <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
          <div className="absolute inset-0">
            <Image src="/media/displacement.webp" alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="media-veil" style={{ background: "linear-gradient(180deg, rgba(6,9,24,.82) 0%, rgba(6,9,24,.7) 50%, #0A0E27 100%)" }} />
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
            <span className="label justify-center">{offline ? "Data feed offline" : "Live data"}</span>
            <h1 className="h-display mt-6 text-[2.5rem] sm:text-6xl">AI Displacement Tracker</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Tracking announced AI infrastructure investment against AI-related workforce reductions, from public filings, earnings calls and news reports.
            </p>
          </div>

          <div className="relative mx-auto mt-14 grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-2">
            {offline ? (
              <div className="glass p-8 text-center md:col-span-2">
                <p className="font-head text-xl font-semibold text-white">The live data feed is being rebuilt.</p>
                <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/60">
                  We would rather show nothing than show numbers we cannot stand behind. The tracker returns when its data pipeline is back and verified.
                </p>
              </div>
            ) : (
              <>
                <div className="glass p-8 text-center">
                  <div className="label justify-center !text-[11px]">AI investment announced</div>
                  <div className="font-data mt-4 text-5xl font-semibold text-white md:text-6xl" style={{ textShadow: "0 0 28px rgba(0,180,216,.45)" }}>
                    {loading ? <span className="animate-pulse">…</span> : data ? <AnimatedCounter target={parseFloat(data.counters.total_investment_usd)} formatter={(n) => formatUSD(String(n))} /> : "—"}
                  </div>
                  <div className="mt-3 text-sm text-white/50">across {data?.counters.total_investment_count ?? "—"} announcements</div>
                </div>
                <div className="glass p-8 text-center">
                  <div className="font-data text-[11px] uppercase tracking-[0.15em] text-[#FF4444]">AI-related job losses</div>
                  <div className="font-data mt-4 text-5xl font-semibold text-white md:text-6xl">
                    {loading ? <span className="animate-pulse">…</span> : data ? <AnimatedCounter target={data.counters.total_layoffs} formatter={formatNumber} /> : "—"}
                  </div>
                  <div className="mt-3 text-sm text-white/50">across {data?.counters.total_layoff_events ?? "—"} tracked events</div>
                </div>
              </>
            )}
          </div>
        </section>

        {!offline && (
          <section className="section-navy px-4 pb-20 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 flex gap-2 overflow-x-auto" role="tablist" aria-label="Filter events">
                {(
                  [
                    { key: "all", label: "All events" },
                    { key: "investments", label: "Investments" },
                    { key: "layoffs", label: "Layoffs" },
                  ] as const
                ).map(({ key, label }) => (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={filter === key}
                    onClick={() => setFilter(key)}
                    className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors ${filter === key ? "border-[#00B4D8] bg-[#00B4D8] font-semibold text-[#060918]" : "border-[#00B4D8]/25 text-white/70 hover:border-[#00B4D8]/60"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="glass h-24 animate-pulse" />
                  ))}
                </div>
              ) : error ? (
                <p className="py-10 text-center text-white/55">The event feed could not be loaded. Please try again later.</p>
              ) : data?.events.length === 0 ? (
                <p className="py-10 text-center text-white/55">No events for this filter.</p>
              ) : (
                <div className="space-y-3">
                  {data?.events.map((event, idx) => (
                    <article key={event.id || idx} className="glass p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="mb-2 flex flex-wrap items-center gap-3">
                            <span className={`font-data rounded px-2 py-0.5 text-[11px] uppercase tracking-wider ${event.event_type === "investment" ? "bg-[#00B4D8]/15 text-[#00D4FF]" : "bg-[#FF4444]/15 text-[#FF8080]"}`}>
                              {event.event_type === "investment" ? "Investment" : "Layoff"}
                            </span>
                            <span className="font-data text-xs text-white/45">{formatDate(event.date)}</span>
                            {event.category && <span className="text-xs text-white/35">{event.category.replace(/_/g, " ")}</span>}
                          </div>
                          <h3 className="font-head font-semibold text-white">
                            {event.company}
                            {event.metric_value && (
                              <span className="font-data ml-2 text-[#00D4FF]">
                                {event.event_type === "investment" ? formatUSD(event.metric_value) : `${parseInt(event.metric_value).toLocaleString()} ${event.metric_unit}`}
                              </span>
                            )}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-white/60">{event.description}</p>
                        </div>
                        {event.source_url && (
                          <a href={event.source_url} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-xs text-[#00D4FF] underline underline-offset-4">
                            Source
                          </a>
                        )}
                      </div>
                      {event.source_name && <div className="mt-2 text-xs text-white/35">Source: {event.source_name}</div>}
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        <CTABand
          title="The displacement is real. So is the opportunity."
          intro="Every company needs an AI strategy, and every professional whose work AI changes deserves a path forward. Maximus works on both sides. Start with your free Competitive Edge Report."
          image="/media/hero-horizon.webp"
        />
      </main>
      <Footer />
    </>
  );
}
