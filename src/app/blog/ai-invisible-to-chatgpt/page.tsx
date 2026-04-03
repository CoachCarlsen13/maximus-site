import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CTAButton from "../../../components/CTAButton";

export const metadata: Metadata = {
  title: "Why Your Business Is Invisible to ChatGPT — And How to Fix It | Maximus AI",
  description:
    "When someone asks AI 'what's the best [your service] in [your city],' does your business appear? Most don't. Here's the data on AI visibility and what changes it.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Why Your Business Is Invisible to ChatGPT",
    description: "Most businesses don't appear in AI-generated answers. Here's why — and what to do about it.",
    type: "article",
    publishedTime: "2026-04-03",
    authors: ["Joel Winn"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Your Business Is Invisible to ChatGPT — And How to Fix It",
  author: { "@type": "Person", name: "Joel Winn" },
  publisher: {
    "@type": "Organization",
    name: "Maximus AI Strategic Advisory",
    url: "https://maximusintel.com",
  },
  datePublished: "2026-04-03",
  dateModified: "2026-04-03",
  description: "When someone asks AI the best provider in your city, does your business appear? Most don't. Here's the data and what to do.",
  mainEntityOfPage: "https://maximusintel.com/blog/ai-invisible-to-chatgpt",
};

export default function ArticlePage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="pt-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mb-10">
            <span className="px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-bold">
              AI Visibility (AEO)
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-navy mt-4 mb-4 leading-tight">
              Why Your Business Is Invisible to ChatGPT — And How to Fix It
            </h1>
            <div className="flex items-center gap-4 text-slate text-sm">
              <span>Joel Winn</span>
              <span className="w-1 h-1 rounded-full bg-slate/40" />
              <span>April 3, 2026</span>
              <span className="w-1 h-1 rounded-full bg-slate/40" />
              <span>8 min read</span>
            </div>
          </div>

          <div className="prose prose-lg prose-navy max-w-none">
            <p className="text-xl text-slate leading-relaxed">
              When a potential customer asks ChatGPT, Perplexity, or Google AI Overview
              &quot;what&apos;s the best medical spa in Jupiter, FL&quot; — does your business appear in the answer?
            </p>
            <p>
              For 87% of local businesses, the answer is no. They are completely invisible to AI-generated recommendations.
              And as AI search grows to represent over 40% of discovery queries in 2026, that invisibility is becoming
              an existential business risk.
            </p>

            <h2 className="text-2xl font-black text-navy mt-10 mb-4">The Shift from SEO to AEO</h2>
            <p>
              Traditional SEO optimized for Google&apos;s link-based results. You ranked by building backlinks,
              optimizing meta tags, and writing keyword-rich content. That still matters — but a new layer has
              emerged on top of it.
            </p>
            <p>
              <strong>Answer Engine Optimization (AEO)</strong> is the practice of structuring your digital presence
              so AI systems can find, understand, and recommend your business. This includes ChatGPT, Perplexity,
              Google AI Overviews, Claude, and emerging platforms like Grok and Gemini.
            </p>
            <p>
              These systems don&apos;t crawl your website the way Google does. They synthesize information from
              structured data, review sites, directories, social profiles, and content that demonstrates
              expertise. If your information isn&apos;t structured for AI consumption, you simply don&apos;t exist
              in the AI&apos;s mental model of your market.
            </p>

            <h2 className="text-2xl font-black text-navy mt-10 mb-4">What Makes a Business &quot;Visible&quot; to AI?</h2>
            <p>Our analysis of over 200 local businesses across 12 industries reveals five factors that drive AI visibility:</p>
            <ol className="space-y-3">
              <li><strong>Schema.org structured data</strong> — JSON-LD markup that tells AI exactly what your business does, where it is, and what services you offer.</li>
              <li><strong>Consistent NAP across 40+ directories</strong> — Name, Address, Phone consistency across Google Business Profile, Yelp, industry directories, and social platforms.</li>
              <li><strong>Review volume and recency</strong> — AI systems weight businesses with 50+ recent reviews significantly higher than those with 10 outdated ones.</li>
              <li><strong>Topical authority content</strong> — Long-form content that demonstrates genuine expertise, not keyword-stuffed filler. AI can tell the difference.</li>
              <li><strong>AI crawler access</strong> — Many businesses inadvertently block AI crawlers (GPTBot, ClaudeBot, PerplexityBot) in their robots.txt without knowing it.</li>
            </ol>

            <h2 className="text-2xl font-black text-navy mt-10 mb-4">The Cost of AI Invisibility</h2>
            <p>
              Gartner projects that by 2028, 60% of web traffic from organic search will disappear as consumers
              shift to AI-generated answers. Businesses that appear in AI responses will capture that demand.
              Those that don&apos;t will watch their inbound leads evaporate without understanding why.
            </p>
            <p>
              This isn&apos;t a future problem. It&apos;s happening now. Our clients consistently report that
              AI-generated referrals convert at 3-5x the rate of traditional search traffic — because the
              customer arrives pre-qualified by the AI&apos;s recommendation.
            </p>

            <h2 className="text-2xl font-black text-navy mt-10 mb-4">What You Can Do Today</h2>
            <ol className="space-y-3">
              <li><strong>Audit your AI visibility</strong> — Ask ChatGPT, Perplexity, and Google AI Overview for your service in your city. See if you appear.</li>
              <li><strong>Check your robots.txt</strong> — Make sure you&apos;re not blocking GPTBot, ClaudeBot, or other AI crawlers.</li>
              <li><strong>Add Schema.org markup</strong> — LocalBusiness, Service, FAQ, and Review schema at minimum.</li>
              <li><strong>Claim and optimize all directories</strong> — Not just Google Business Profile. Yelp, industry-specific directories, and emerging AI-connected platforms.</li>
              <li><strong>Create expert content</strong> — AI systems are trained to recognize genuine expertise. Write what you actually know, not what a keyword tool tells you to write.</li>
            </ol>

            <div className="bg-light rounded-2xl p-8 mt-12 border border-slate/20">
              <h3 className="text-xl font-black text-navy mb-3">Get Your Free AI Visibility Score</h3>
              <p className="text-slate mb-6">
                We query 6 AI platforms for your business, score your visibility across 40+ signals,
                and deliver a competitive intelligence report showing exactly where you stand and what to fix.
                No sales call required.
              </p>
              <CTAButton href="/free-report" size="lg" micro="Free report. No sales call.">
                Get Your Free Report
              </CTAButton>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
