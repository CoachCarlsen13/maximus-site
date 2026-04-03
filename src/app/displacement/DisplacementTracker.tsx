"use client";
// AI Displacement Tracker — Client Component
// Created: 2026-04-03
// Purpose: Animated dual counters + timeline feed. Fetches from Railway API.

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

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

  return (
    <div className="min-h-screen bg-[#070E1C] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-gold font-display text-xl tracking-wide">
            MAXIMUS AI
          </Link>
          <nav className="flex items-center gap-6 text-sm text-white/60">
            <Link href="/free-report" className="hover:text-gold transition-colors">
              Free Report
            </Link>
            <Link href="/ai-audit" className="hover:text-gold transition-colors">
              AI Audit
            </Link>
            <Link href="/book" className="hover:text-gold transition-colors">
              Book
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">
            LIVE DATA
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            AI Displacement Tracker
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real-time tracking of AI infrastructure investment vs. AI-driven
            workforce displacement. The numbers tell the story.
          </p>
        </div>
      </section>

      {/* Dual Counters */}
      <section className="pb-12 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Investment Counter */}
          <div className="bg-gradient-to-br from-[#0F1A2E] to-[#1B2A4A] rounded-2xl p-8 border border-gold/20 text-center">
            <div className="text-gold/80 uppercase tracking-widest text-xs mb-2">
              Total AI Investment Announced
            </div>
            <div className="font-display text-5xl md:text-6xl text-gold mb-2">
              {loading ? (
                <span className="animate-pulse">...</span>
              ) : data ? (
                <AnimatedCounter
                  target={parseFloat(data.counters.total_investment_usd)}
                  formatter={(n) => formatUSD(String(n))}
                />
              ) : (
                "$0"
              )}
            </div>
            <div className="text-white/40 text-sm">
              across{" "}
              {data?.counters.total_investment_count || 0} announcements
            </div>
          </div>

          {/* Layoff Counter */}
          <div className="bg-gradient-to-br from-[#2A0F0F] to-[#1A0505] rounded-2xl p-8 border border-red-500/20 text-center">
            <div className="text-red-400/80 uppercase tracking-widest text-xs mb-2">
              Total AI-Related Job Losses
            </div>
            <div className="font-display text-5xl md:text-6xl text-red-400 mb-2">
              {loading ? (
                <span className="animate-pulse">...</span>
              ) : data ? (
                <AnimatedCounter
                  target={data.counters.total_layoffs}
                  formatter={formatNumber}
                />
              ) : (
                "0"
              )}
            </div>
            <div className="text-white/40 text-sm">
              across{" "}
              {data?.counters.total_layoff_events || 0} tracked events
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-2 mb-8 overflow-x-auto">
            {(
              [
                { key: "all", label: "All Events" },
                { key: "investments", label: "Investments" },
                { key: "layoffs", label: "Layoffs" },
              ] as const
            ).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  filter === key
                    ? "bg-gold text-navy-dark font-semibold"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Timeline Feed */}
          {error ? (
            <div className="text-center py-12 text-red-400">
              <p className="text-lg mb-2">Unable to load data</p>
              <p className="text-sm text-white/40">{error}</p>
            </div>
          ) : loading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-xl p-6 animate-pulse h-24"
                />
              ))}
            </div>
          ) : data?.events.length === 0 ? (
            <div className="text-center py-12 text-white/40">
              No events found for this filter.
            </div>
          ) : (
            <div className="space-y-3">
              {data?.events.map((event, idx) => (
                <div
                  key={event.id || idx}
                  className={`rounded-xl p-5 border transition-all hover:border-opacity-40 ${
                    event.event_type === "investment"
                      ? "bg-[#0F1A2E]/60 border-gold/10 hover:border-gold/30"
                      : "bg-[#1A0505]/60 border-red-500/10 hover:border-red-500/30"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                            event.event_type === "investment"
                              ? "bg-gold/20 text-gold"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {event.event_type === "investment"
                            ? "Investment"
                            : "Layoff"}
                        </span>
                        <span className="text-white/40 text-xs">
                          {formatDate(event.date)}
                        </span>
                        {event.category && (
                          <span className="text-white/30 text-xs">
                            {event.category.replace(/_/g, " ")}
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-semibold mb-1">
                        {event.company}
                        {event.metric_value && (
                          <span
                            className={`ml-2 ${
                              event.event_type === "investment"
                                ? "text-gold"
                                : "text-red-400"
                            }`}
                          >
                            {event.event_type === "investment"
                              ? formatUSD(event.metric_value)
                              : `${parseInt(event.metric_value).toLocaleString()} ${event.metric_unit}`}
                          </span>
                        )}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    {event.source_url && (
                      <a
                        href={event.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/30 hover:text-gold text-xs whitespace-nowrap"
                      >
                        Source
                      </a>
                    )}
                  </div>
                  {event.source_name && (
                    <div className="mt-2 text-white/20 text-xs">
                      Source: {event.source_name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
            The displacement is real. The opportunity is now.
          </h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">
            Every displaced professional needs guidance. Every company needs an
            AI strategy. Maximus helps both sides of the equation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-report"
              className="px-8 py-3 bg-gold text-navy-dark font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Get Your Free Intelligence Report
            </Link>
            <Link
              href="/book"
              className="px-8 py-3 border border-white/20 text-white rounded-lg hover:border-gold/40 hover:text-gold transition-colors"
            >
              Read The Book
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>
            Data sourced from public filings, earnings calls, news reports, and
            government statistics. Updated daily.
          </p>
          <p>Maximus AI Strategic Advisory</p>
        </div>
      </footer>
    </div>
  );
}
