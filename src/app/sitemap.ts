// Dynamic sitemap for maximusintel.com
// Created: 2026-03-31
// Next.js App Router sitemap — auto-served at /sitemap.xml
import type { MetadataRoute } from "next";

const BASE_URL = "https://maximusintel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    // ── Core pages ──────────────────────────────────────────────────
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/free-report`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/ai-audit`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/intelligence`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/growth`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.70 },
    { url: `${BASE_URL}/trust`, lastModified: now, changeFrequency: "monthly", priority: 0.70 },
    { url: `${BASE_URL}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE_URL}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // ── Blog articles ────────────────────────────────────────────────
    { url: `${BASE_URL}/blog/ai-invisible-to-chatgpt`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/blog/competitors-using-ai`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/blog/hidden-cost-manual-processes`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },

    // ── Location / programmatic SEO pages ───────────────────────────
    { url: `${BASE_URL}/locations/ai-consulting-jupiter-fl`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/locations/ai-consulting-palm-beach-gardens`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/locations/ai-consulting-west-palm-beach`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/locations/ai-strategy-south-florida`, lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/locations/aeo-optimization-florida`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
  ];
}
