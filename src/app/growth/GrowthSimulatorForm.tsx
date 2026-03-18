// Growth Simulator — Interactive form component (client-side)
// Created: 2026-03-17
"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "submitted";

export default function GrowthSimulatorForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    companyName: "",
    website: "",
    industry: "",
    location: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.companyName || !form.industry || !form.location) return;
    setState("submitting");
    // Simulate brief processing delay — will connect to Command Center API later
    setTimeout(() => setState("submitted"), 1200);
  }

  const industries = [
    "Healthcare / Medical",
    "Legal Services",
    "Financial Services",
    "Real Estate",
    "Home Services",
    "Restaurants / Hospitality",
    "Fitness / Wellness",
    "Retail / E-Commerce",
    "Professional Services",
    "Construction / Trades",
    "Marketing / Creative Agency",
    "Technology / SaaS",
    "Education / Training",
    "Automotive",
    "Other",
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {state === "submitted" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-navy mb-3">
            Your simulation is being generated.
          </h3>
          <p className="text-slate text-lg leading-relaxed max-w-md mx-auto">
            We are building your custom growth model for{" "}
            <span className="font-semibold text-navy">{form.companyName}</span>.
            You will see your results here shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Company Name */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-semibold text-navy mb-1.5"
            >
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              value={form.companyName}
              onChange={handleChange}
              placeholder="Acme Services LLC"
              className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
            />
          </div>

          {/* Website */}
          <div>
            <label
              htmlFor="website"
              className="block text-sm font-semibold text-navy mb-1.5"
            >
              Website{" "}
              <span className="text-muted font-normal">(optional)</span>
            </label>
            <input
              id="website"
              name="website"
              type="url"
              value={form.website}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
            />
          </div>

          {/* Industry */}
          <div>
            <label
              htmlFor="industry"
              className="block text-sm font-semibold text-navy mb-1.5"
            >
              Industry
            </label>
            <select
              id="industry"
              name="industry"
              required
              value={form.industry}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all appearance-none"
            >
              <option value="" disabled>
                Select your industry
              </option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-navy mb-1.5"
            >
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              value={form.location}
              onChange={handleChange}
              placeholder="Jupiter, FL"
              className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={state === "submitting"}
              className="w-full btn-gold rounded-xl px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === "submitting" ? (
                <>
                  <svg
                    className="w-5 h-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Building Your Model...
                </>
              ) : (
                <>
                  Generate My Growth Model
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>

          <p className="text-center text-muted text-xs pt-1">
            No signup required. Your data is never shared.
          </p>
        </form>
      )}
    </div>
  );
}
