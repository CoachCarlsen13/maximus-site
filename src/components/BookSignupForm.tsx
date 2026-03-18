// BookSignupForm — Client-side email capture for The Agent Revolution book
// Created: 2026-03-17
"use client";

import { useState, type FormEvent } from "react";

export default function BookSignupForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // TODO: Connect to Zapier/webhook endpoint for email list
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8 animate-fade-in-up">
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
          Chapter 1 Is On Its Way
        </h3>
        <p className="text-white/60 text-lg max-w-md mx-auto">
          Check your inbox. Your free chapter of The Agent Revolution will
          arrive within minutes. We&apos;ll send one more email when the
          full book launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="book-email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="book-email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-lg"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="btn-gold rounded-xl px-8 py-4 text-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {submitting ? "Sending..." : "Send Me Chapter 1"}
        </button>
      </div>
      <p className="text-white/40 text-sm text-center mt-5 leading-relaxed">
        One email when the book launches. Your free chapter arrives immediately.
        No spam. No exceptions.
      </p>
    </form>
  );
}
