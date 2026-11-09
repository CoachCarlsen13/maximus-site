// ReportForm — free Competitive Edge Report request
// Created: 2026-03-17 · 2026-11-08: HubSpot Forms API (Railway endpoint retired), email fallback
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
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // Leads go to HubSpot (portal "Maximus AIOS"). The form GUID is set as a public
      // Vercel env var once the HubSpot form exists. Until then, there is no live
      // endpoint (the old Railway server is gone), so we go straight to the email fallback.
      const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "246661416";
      const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID;
      const hsHost = process.env.NEXT_PUBLIC_HUBSPOT_FORMS_HOST || "https://api.hsforms.com";
      if (!formGuid) throw new Error("No lead endpoint configured");

      const [firstname, ...rest] = form.name.trim().split(/\s+/);
      const fields = [
        { name: "firstname", value: firstname || form.name },
        { name: "lastname", value: rest.join(" ") },
        { name: "email", value: form.email },
        { name: "company", value: form.businessName },
        { name: "website", value: form.website },
        { name: "phone", value: form.phone },
        { name: "message", value: form.challenge },
      ].filter((f) => f.value);
      const hutk = document.cookie.match(/(?:^|; )hubspotutk=([^;]+)/)?.[1];

      const res = await fetch(`${hsHost}/submissions/v3/integration/submit/${portalId}/${formGuid}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields,
          context: { pageUri: window.location.href, pageName: document.title, ...(hutk ? { hutk } : {}) },
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      // Surface error to user instead of silent fail
      const noEndpoint = err instanceof Error && err.message === "No lead endpoint configured";
      setError(
        noEndpoint
          ? "Almost done. One click below sends your details to Joel by email, and your report starts from there."
          : "We could not send your request just now. One click below sends the same details by email, and we will start your report from there."
      );
      console.error("ReportForm submit error:", err);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12 rise" role="status">
        <div className="w-16 h-16 rounded-full bg-[#00B4D8]/15 border border-[#00B4D8]/40 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,180,216,.35)]">
          <svg
            className="w-8 h-8 text-[#00D4FF]"
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
        <h3 className="font-head text-2xl sm:text-3xl font-bold text-white mb-3">
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
            className="field-label"
          >
            Business Name <span className="text-[#00D4FF]" aria-hidden>*</span>
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            value={form.businessName}
            onChange={handleChange}
            placeholder="Your Company"
            className="field"
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="field-label"
          >
            Website URL <span className="text-[#00D4FF]" aria-hidden>*</span>
          </label>
          <input
            type="url"
            id="website"
            name="website"
            required
            value={form.website}
            onChange={handleChange}
            placeholder="https://yourcompany.com"
            className="field"
          />
        </div>
      </div>

      {/* Row 2: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="field-label"
          >
            Your Name <span className="text-[#00D4FF]" aria-hidden>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="field"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="field-label"
          >
            Email <span className="text-[#00D4FF]" aria-hidden>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@yourcompany.com"
            className="field"
          />
        </div>
      </div>

      {/* Row 3: Phone */}
      <div>
        <label
          htmlFor="phone"
          className="field-label"
        >
          Phone{" "}
          <span className="font-normal text-white/45">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          className="field"
        />
      </div>

      {/* Row 4: Challenge */}
      <div>
        <label
          htmlFor="challenge"
          className="field-label"
        >
          What&apos;s your biggest challenge right now?{" "}
          <span className="font-normal text-white/45">(optional)</span>
        </label>
        <textarea
          id="challenge"
          name="challenge"
          value={form.challenge}
          onChange={handleChange}
          rows={3}
          placeholder="Tell us what keeps you up at night..."
          className="field resize-none"
        />
      </div>

      {/* Submit */}
      {error && (
        <div role="alert" className="rounded-xl border border-[#00B4D8]/40 bg-[#060918]/80 px-4 py-4 text-sm text-white">
          <p>{error}</p>
          <a
            href={`mailto:joel@maximusintel.com?subject=${encodeURIComponent("Free Competitive Edge Report: " + form.businessName)}&body=${encodeURIComponent(
              `Business: ${form.businessName}\nWebsite: ${form.website}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nBiggest challenge: ${form.challenge}`
            )}`}
            className="btn btn-deep mt-3 px-4 py-2.5 text-sm"
          >
            Send my request by email <span aria-hidden className="btn-arrow">→</span>
          </a>
        </div>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary w-full px-8 py-4 text-base sm:text-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Me My Free Competitive Edge Report"}
        {!submitting && <span aria-hidden className="btn-arrow">→</span>}
      </button>

      {/* Trust Elements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-4">
        {[
          "No credit card required",
          "No sales calls unless you ask",
          "Delivered within 48 hours",
          "Yours to keep, no matter what",
          "Used only to prepare your report",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2.5">
            <svg
              className="w-4 h-4 text-[#00B4D8] shrink-0"
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
            <span className="text-white/60 text-sm">{item}</span>
          </div>
        ))}
      </div>
    </form>
  );
}
