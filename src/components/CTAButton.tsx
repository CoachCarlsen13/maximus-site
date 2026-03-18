// Reusable CTA button with gold shimmer
// Created: 2026-03-17
import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  size?: "base" | "lg" | "xl";
  className?: string;
  micro?: string;
}

const sizes = {
  base: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  xl: "px-10 py-5 text-lg",
};

export default function CTAButton({
  href,
  children,
  size = "lg",
  className = "",
  micro,
}: CTAButtonProps) {
  return (
    <div className="inline-flex flex-col items-center gap-2">
      <Link
        href={href}
        className={`btn-gold rounded-xl ${sizes[size]} inline-flex items-center gap-2 ${className}`}
      >
        {children}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
      {micro && (
        <span className="text-xs text-white/40 max-w-xs text-center">{micro}</span>
      )}
    </div>
  );
}
