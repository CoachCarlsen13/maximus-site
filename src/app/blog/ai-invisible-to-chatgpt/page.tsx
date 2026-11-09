import type { Metadata } from "next";
import Article, { Source } from "../../../components/Article";

export const metadata: Metadata = {
  title: "Why Your Business Is Invisible to ChatGPT — And How to Fix It",
  description: "When someone asks AI for the best provider in your city, does your business appear? What drives AI visibility, and five things you can do today.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Why Your Business Is Invisible to ChatGPT",
    description: "What drives AI visibility, and what to do about it.",
    type: "article",
    publishedTime: "2026-04-03",
    authors: ["Joel Winns"],
    images: [{ url: "/media/blog-invisible.webp" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Your Business Is Invisible to ChatGPT — And How to Fix It",
  author: { "@type": "Person", name: "Joel Winns" },
  publisher: { "@type": "Organization", name: "Maximus AI Strategic Advisory", url: "https://maximusintel.com" },
  datePublished: "2026-04-03",
  dateModified: "2026-11-08",
  image: "https://maximusintel.com/media/blog-invisible.webp",
  description: "What drives AI visibility for local businesses, and five things you can do today.",
  mainEntityOfPage: "https://maximusintel.com/blog/ai-invisible-to-chatgpt",
};

export default function ArticlePage() {
  return (
    <Article
      category="AI visibility (AEO)"
      title="Why your business is invisible to ChatGPT, and how to fix it"
      date="April 3, 2026 · updated Nov 8, 2026"
      read="7 min read"
      image="/media/blog-invisible.webp"
      schema={schema}
      cta={{ title: "Get your AI visibility checked", body: "Your free Competitive Edge Report includes an AI visibility check: whether AI answer engines recommend you or your competitors, and what to fix first. No sales call required." }}
    >
      <p className="!text-xl !leading-relaxed text-white/85">
        When a potential customer asks ChatGPT, Perplexity or Google&apos;s AI for &ldquo;the best medical spa in Jupiter, FL,&rdquo; does your business appear in the answer?
      </p>
      <p>
        For many local businesses, the honest answer is no, and most owners have never checked. As more people start their search with an AI assistant instead of a list of links, that invisibility is turning into lost customers. Gartner predicted that traditional search engine volume would drop 25% by 2026 as people move to AI chatbots and other virtual agents.{" "}
        <Source href="https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents">Gartner, Feb 2024</Source>
      </p>

      <h2>The shift from SEO to AEO</h2>
      <p>
        Traditional SEO optimized for Google&apos;s link-based results: backlinks, meta tags, keyword-rich pages. That still matters, but a new layer now sits on top of it.
      </p>
      <p>
        <strong>Answer Engine Optimization (AEO)</strong> is the practice of structuring your digital presence so AI systems can find, understand and recommend your business. That includes ChatGPT, Perplexity, Google&apos;s AI Overviews, Claude, Gemini and Grok.
      </p>
      <p>
        These systems build their answers from many sources at once: structured data, review sites, directories, social profiles and content that shows real expertise. If your information is thin, inconsistent or hard for machines to read, you are less likely to be part of the answer.
      </p>

      <h2>What makes a business visible to AI?</h2>
      <p>In our work on AI visibility, five factors come up again and again:</p>
      <ol>
        <li>
          <strong>Structured data.</strong> Schema.org markup (JSON-LD) that tells machines exactly what your business does, where it is and what it offers.
        </li>
        <li>
          <strong>Consistent name, address and phone everywhere.</strong> The same details across your Google Business Profile, Yelp, industry directories and social profiles.
        </li>
        <li>
          <strong>Review volume and recency.</strong> A steady stream of recent, specific reviews tells every system, human or AI, that you are active and trusted.
        </li>
        <li>
          <strong>Content that shows expertise.</strong> Pages that answer real customer questions in depth, not keyword filler.
        </li>
        <li>
          <strong>AI crawler access.</strong> Some sites block AI crawlers such as GPTBot, ClaudeBot or PerplexityBot in robots.txt without knowing it.
        </li>
      </ol>

      <h2>What you can do today</h2>
      <ol>
        <li>
          <strong>Check your AI visibility.</strong> Ask ChatGPT, Perplexity and Google&apos;s AI for your service in your city, the way a customer would. Note who appears.
        </li>
        <li>
          <strong>Check your robots.txt.</strong> Make sure you are not blocking the AI crawlers you want to be found by.
        </li>
        <li>
          <strong>Add structured data.</strong> LocalBusiness, Service and FAQ schema at a minimum.
        </li>
        <li>
          <strong>Claim and clean up your listings.</strong> Not just Google Business Profile: Yelp and the directories that matter in your industry.
        </li>
        <li>
          <strong>Publish what you actually know.</strong> Answer the questions customers ask you every week, in your own words.
        </li>
      </ol>
    </Article>
  );
}
