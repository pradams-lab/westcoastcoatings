import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

type LogoProps = {
  /** "light" for dark backgrounds, "dark" for light backgrounds. */
  tone?: "dark" | "light";
  className?: string;
  showWordmark?: boolean;
};

/**
 * Layered-slab mark: three stacked bars that read as coating layers and as
 * the strokes of a W. Simple enough for trucks, uniforms and signage.
 */
export function LogoMark({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      fill="none"
    >
      <rect x="2" y="6" width="28" height="4" className={tone === "dark" ? "fill-charcoal" : "fill-warm-white"} />
      <rect x="2" y="14" width="18" height="4" className="fill-gold" />
      <rect x="2" y="22" width="28" height="4" className={tone === "dark" ? "fill-charcoal" : "fill-warm-white"} />
    </svg>
  );
}

export function Logo({ tone = "dark", className, showWordmark = true }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="West Coast Coatings — home"
      className={cn("flex items-center gap-3", className)}
    >
      <LogoMark tone={tone} className="h-7 w-7 shrink-0" />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "text-[11px] font-semibold uppercase tracking-[0.22em]",
              tone === "dark" ? "text-charcoal" : "text-warm-white",
            )}
          >
            West Coast
          </span>
          <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            Coatings
          </span>
        </span>
      ) : null}
    </Link>
  );
}
