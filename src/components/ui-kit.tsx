import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 disabled:opacity-60 disabled:pointer-events-none";

const variants = {
  gold: "bg-gold text-charcoal hover:bg-charcoal hover:text-warm-white",
  solid: "bg-charcoal text-warm-white hover:bg-gold hover:text-charcoal",
  outline: "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-warm-white",
  outlineLight:
    "border border-warm-white/30 text-warm-white hover:bg-warm-white hover:text-charcoal",
} as const;

export type ActionVariant = keyof typeof variants;

export function ActionLink({
  to,
  variant = "solid",
  className,
  children,
}: {
  to: string;
  variant?: ActionVariant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function ActionAnchor({
  href,
  variant = "outline",
  className,
  children,
  ...rest
}: ComponentProps<"a"> & { variant?: ActionVariant }) {
  return (
    <a href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}

export function ActionButton({
  variant = "gold",
  className,
  children,
  ...rest
}: ComponentProps<"button"> & { variant?: ActionVariant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function TextLink({
  to,
  children,
  tone = "dark",
  className,
}: {
  to: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold",
        className,
      )}
    >
      <span className={cn("border-b border-transparent pb-1 transition-colors group-hover:border-gold", tone === "light" && "text-gold")}>
        {children}
      </span>
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

export function SectionHeader({
  eyebrow,
  headline,
  copy,
  tone = "dark",
  align = "left",
  className,
}: {
  eyebrow?: string;
  headline: string;
  copy?: string | string[];
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const paragraphs = typeof copy === "string" ? [copy] : (copy ?? []);
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        className={cn(
          "mt-5 text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-5xl",
          tone === "light" ? "text-warm-white" : "text-charcoal",
        )}
      >
        {headline}
      </h2>
      {paragraphs.length > 0 ? (
        <div className={cn("mt-6 space-y-4", align === "center" && "mx-auto")}>
          {paragraphs.map((p) => (
            <p
              key={p}
              className={cn(
                "max-w-[62ch] text-[15px] leading-relaxed",
                align === "center" && "mx-auto",
                tone === "light" ? "text-warm-white/70" : "text-muted-foreground",
              )}
            >
              {p}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  headline,
  subheadline,
  actions,
  image,
  alt,
}: {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  actions?: ReactNode;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1200}
        className="unveil-in absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="relative shell flex min-h-[60vh] flex-col justify-end py-24 lg:min-h-[70vh] lg:py-32">
        <p className="eyebrow reveal-in">{eyebrow}</p>
        <h1 className="reveal-in mt-6 max-w-4xl text-balance text-4xl leading-[1.05] text-warm-white sm:text-5xl lg:text-6xl" style={{ animationDelay: "90ms" }}>
          {headline}
        </h1>
        {subheadline ? (
          <p
            className="reveal-in mt-6 max-w-[58ch] text-[15px] leading-relaxed text-warm-white/70"
            style={{ animationDelay: "180ms" }}
          >
            {subheadline}
          </p>
        ) : null}
        {actions ? (
          <div className="reveal-in mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "260ms" }}>
            {actions}
          </div>
        ) : null}
      </div>
    </section>
  );
}
