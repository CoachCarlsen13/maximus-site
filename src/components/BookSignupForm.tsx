// Book launch list (2026-11 redesign). The old form showed "Chapter 1 is on its way"
// without sending the email anywhere. Until a real list endpoint is approved, this
// opens a prefilled email so every request actually reaches Joel.
export default function BookSignupForm() {
  const href = `mailto:joel@maximusintel.com?subject=${encodeURIComponent("Add me to The Agent Revolution launch list")}&body=${encodeURIComponent(
    "Please let me know when The Agent Revolution launches, and send an early chapter when one is available.\n\nName:\nBusiness (optional):"
  )}`;
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center text-center">
      <a href={href} className="btn btn-primary btn-pulse px-8 py-4 text-base sm:text-lg">
        Join the Launch List <span aria-hidden className="btn-arrow">→</span>
      </a>
      <p className="mt-5 text-sm leading-relaxed text-white/55">Opens a short email to Joel. One note when the book launches, and an early chapter when it is ready. No spam.</p>
    </div>
  );
}
