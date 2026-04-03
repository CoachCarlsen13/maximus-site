// Maximus AI Strategic Advisory — Blog Shell
// Created: 2026-03-28
// Empty shell with Next.js routing ready for content pipeline
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTAButton from "../../components/CTAButton";

export const metadata: Metadata = {
  title: "Blog — AI Strategy & Competitive Intelligence Insights",
  description:
    "Insights on AI strategy, competitive intelligence, and business operations from Joel Wynn and the Maximus AI team. Practical intelligence for business owners who intend to win.",
  robots: { index: true, follow: true },
};

const categories = [
  "AI Strategy",
  "Competitive Intelligence",
  "Business Operations",
  "AI Visibility (AEO)",
  "Market Analysis",
  "Case Studies",
];

const publishedArticles = [
  {
    category: "AI Visibility (AEO)",
    title: "Why Your Business Is Invisible to ChatGPT — And How to Fix It",
    teaser: "When someone asks AI 'what's the best medical spa in Jupiter FL,' does your business appear? Here's why 87% of businesses don't — and what changes that.",
    href: "/blog/ai-invisible-to-chatgpt",
    date: "April 3, 2026",
    readTime: "8 min",
  },
  {
    category: "AI Strategy",
    title: "Why Your Competitors Are Using AI and You Don't Know It Yet",
    teaser: "81% of businesses are adopting AI — but only 6% have embedded it into operations. The gap between leaders and laggards is accelerating.",
    href: "/blog/competitors-using-ai",
    date: "April 3, 2026",
    readTime: "7 min",
  },
  {
    category: "Business Operations",
    title: "The Hidden Cost of Manual Processes (And the AI That Eliminates Them)",
    teaser: "The average SMB spends 40% of labor costs on tasks AI handles for pennies. The math of automation is more compelling than most owners realize.",
    href: "/blog/hidden-cost-manual-processes",
    date: "April 3, 2026",
    readTime: "6 min",
  },
];

const comingTopics = [
  {
    category: "Competitive Intelligence",
    title: "The 5 Questions Every Business Owner Should Be Asking About Their Market",
    teaser: "Enterprise companies pay consultants $50K to answer these questions. AI can answer them in 48 hours for a fraction of that cost.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* ── HERO ── */}
        <section className="bg-navy py-16 sm:py-20 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-80" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Intelligence Briefings
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              What You Need to Know{" "}
              <span className="text-gradient">Before Your Competitors Do</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Practical intelligence on AI strategy, competitive positioning, and business operations.
              Written by{" "}
              <strong className="text-white">Joel Wynn</strong>, Founder of Maximus AI.
            </p>
          </div>
        </section>

        {/* ── CATEGORIES ── */}
        <section className="bg-white border-b border-slate/10 py-4">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-1.5 rounded-full bg-light text-navy text-sm font-medium border border-slate/20"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PUBLISHED ARTICLES ── */}
        <section className="bg-light py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-black text-navy">
                Latest Intelligence
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedArticles.map((post) => (
                <a key={post.title} href={post.href} className="bg-white rounded-2xl p-7 border border-slate/20 hover:border-gold/40 transition-colors block">
                  <span className="px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-bold">
                    {post.category}
                  </span>
                  <h3 className="text-navy font-black text-lg mt-4 mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mb-4">{post.teaser}</p>
                  <div className="flex items-center gap-2 text-slate/50 text-xs">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate/30" />
                    <span>{post.readTime} read</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMING SOON ── */}
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-black text-navy">
                Coming Next
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {comingTopics.map((post) => (
                <div key={post.title} className="bg-light rounded-2xl p-7 border border-slate/20">
                  <span className="px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-bold">
                    {post.category}
                  </span>
                  <h3 className="text-navy font-black text-lg mt-4 mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mb-4">{post.teaser}</p>
                  <div className="flex items-center gap-2 text-slate/50 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate/30" />
                    <span>Publishing soon</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EMAIL CTA ── */}
        <section className="bg-navy py-16 sm:py-20 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Get the Intelligence First
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Start with your free competitive intelligence report. We&apos;ll include the
              most relevant insights for your market and industry.
            </p>
            <CTAButton href="/free-report" size="lg" micro="Free report. No sales call.">
              $5,000 Business Intelligence Report... FREE
            </CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
