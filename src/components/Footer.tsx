import { Link } from "@tanstack/react-router";

import { LogoMark } from "@/components/Logo";
import { nav, site, systems } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal pb-28 pt-20 text-warm-white/60 lg:pb-20">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark tone="light" className="h-7 w-7" />
              <span className="flex flex-col leading-none">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-white">
                  West Coast
                </span>
                <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  Coatings
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-[38ch] text-sm leading-relaxed">{site.brandStatement}</p>
          </div>

          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-warm-white/40">
              Navigation
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-warm-white/40">
              Services
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              {systems.map((s) => (
                <li key={s.title}>
                  <Link to="/services" className="transition-colors hover:text-gold">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-warm-white/40">
              Contact
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li className="pt-3 text-warm-white/40">{site.hours[0]}</li>
              <li className="text-warm-white/40">{site.hours[1]}</li>
              <li className="pt-3 text-warm-white/40">Serving {site.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-warm-white/10 pt-8 text-[10px] uppercase tracking-[0.2em] text-warm-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} West Coast Coatings. All rights reserved.</p>
          <p>{site.counties.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
