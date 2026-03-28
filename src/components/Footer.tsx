// Maximus site footer
// Created: 2026-03-17
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <span className="text-navy font-black text-sm">M</span>
              </div>
              <div>
                <div className="text-white font-bold tracking-wide text-sm">MAXIMUS</div>
                <div className="text-gold text-[9px] tracking-[0.2em] uppercase">
                  AI Strategic Advisory
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Enterprise-grade competitive intelligence, built for your business, powered by AI.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/free-report" className="text-white/50 hover:text-gold text-sm transition-colors">
                  Free Intelligence Report
                </Link>
              </li>
              <li>
                <Link href="/ai-audit" className="text-white/50 hover:text-gold text-sm transition-colors">
                  AI Operational Audit
                </Link>
              </li>
              <li>
                <Link href="/growth" className="text-white/50 hover:text-gold text-sm transition-colors">
                  Growth Simulator
                </Link>
              </li>
              <li>
                <Link href="/intelligence" className="text-white/50 hover:text-gold text-sm transition-colors">
                  Strategic Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-white/50 hover:text-gold text-sm transition-colors">
                  About Joel Wynn
                </Link>
              </li>
              <li>
                <Link href="/trust" className="text-white/50 hover:text-gold text-sm transition-colors">
                  Trust & Ethics
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/50 hover:text-gold text-sm transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/50 hover:text-gold text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-white/50 hover:text-gold text-sm transition-colors">
                  The Agent Revolution
                </Link>
              </li>
              <li>
                <a href="mailto:joel@maximusai.com" className="text-white/50 hover:text-gold text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get Started</h4>
            <p className="text-white/50 text-sm mb-4">
              Your free competitive intelligence report is ready in 48 hours.
            </p>
            <Link
              href="/free-report"
              className="inline-block btn-gold px-5 py-2.5 rounded-lg text-sm"
            >
              Claim Your Free Report
            </Link>
          </div>
        </div>

        <div className="section-divider mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Maximus AI Strategic Advisory. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Jupiter, Florida &middot; Serving businesses nationwide
          </p>
        </div>
      </div>
    </footer>
  );
}
