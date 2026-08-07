import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Logo } from "@/components/Logo";
import { ActionLink } from "@/components/ui-kit";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-charcoal/10 bg-background/95 backdrop-blur-sm"
          : "border-b border-transparent bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/70 transition-colors hover:text-charcoal"
              activeProps={{ className: "text-charcoal" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/70 transition-colors hover:text-gold"
          >
            {site.phone}
          </a>
          <ActionLink to="/contact" variant="solid" className="px-6 py-3">
            Get a Free Estimate
          </ActionLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 shrink-0 flex-col items-end justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "h-px bg-charcoal transition-all duration-300",
              open ? "w-6 translate-y-[3px] rotate-45" : "w-6",
            )}
          />
          <span
            className={cn(
              "h-px bg-charcoal transition-all duration-300",
              open ? "w-6 -translate-y-[3px] -rotate-45" : "w-4",
            )}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-[73px] bottom-0 z-40 overflow-y-auto bg-charcoal px-6 pb-32 pt-10 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="reveal-in border-b border-warm-white/10 py-5 font-display text-2xl text-warm-white"
              style={{ animationDelay: `${i * 50}ms` }}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-10 space-y-2">
          <p className="eyebrow">Call us</p>
          <a href={site.phoneHref} className="block font-display text-2xl text-warm-white">
            {site.phone}
          </a>
          <p className="pt-4 text-xs uppercase tracking-[0.2em] text-warm-white/50">
            {site.hours.join(" · ")}
          </p>
        </div>
      </div>
    </header>
  );
}
