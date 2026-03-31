// ReportForm — Client-side form for free competitive intelligence report
// Created: 2026-03-17
"use client";

import { useState, type FormEvent } from "react";

export default function ReportForm() {
  const [form, setForm] = useState({
    businessName: "",
    website: "",
    name: "",
    email: "",
    phone: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const apiBase =
        process.env.NEXT_PUBLIC_API_URL ||
        "https://command-center-production-ffc0.up.railway.app";

      const res = await fetch(`${apiBase}/api/leads/trojan-horse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: form.businessName,
          websiteUrl: form.website,
          contactName: form.name,
          email: form.email,
          phone: form.phone || undefined,
          challenge: form.challenge || undefined,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `HTTP ${res.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      // Surface error to user instead of silent fail
      alert(
        "Something went wrong submitting your request. Please try again or email us directly."
      );
      console.error("ReportForm submit error:", err);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12 animate-fade-in-up">
        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Your Report Is On Its Way
        </h3>
        <p className="text-white/60 text-lg max-w-md mx-auto">
          We&apos;re building your competitive intelligence report now. Expect
          it in your inbox within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1: Business Name + Website */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="businessName"
            className="block text-sm font-medium text-white/70 mb-1.5"
          >
            Business Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            value={form.businessName}
            onChange={handleChange}
            placeholder="Your Company"
            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium text-white/70 mb-1.5"
          >
            Website URL <span className="text-gold">*</span>
          </label>
          <input
            type="url"
            id="website"
            name="website"
            required
            value={form.website}
            onChange={handleChange}
            placeholder="https://yourcompany.com"
            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white/70 mb-1.5"
          >
            Your Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white/70 mb-1.5"
          >
            Email <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@yourcompany.com"
            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-white/70 mb-1.5"
        >
          Phone{" "}
          <span className="text-white/30 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
        />
      </div>

      {/* Row 4: Challenge */}
      <div>
        <label
          htmlFor="challenge"
          className="block text-sm font-medium text-white/70 mb-1.5"
        >
          What&apos;s your biggest challenge right now?{" "}
          <span className="text-white/30 font-normal">(optional)</span>
        </label>
        <textarea
          id="challenge"
          name="challenge"
          value={form.challenge}
          onChange={handleChange}
          rows={3}
          placeholder="Tell us what keeps you up at night..."
          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full btn-gold rounded-xl px-8 py-4 text-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "$5,000 Business Intelligence Report... FREE"}
      </button>

      {/* Trust Elements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-4">
        {[
          "No credit card required",
          "No sales calls unless you ask",
          "Delivered within 48 hours",
          "Yours to keep, no matter what",
          "100% confidential",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2.5">
            <svg
              className="w-4 h-4 text-gold shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-white/50 text-sm">{item}</span>
          </div>
        ))}
      </div>
    </form>
  );
}
