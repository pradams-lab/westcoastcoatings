import { Link } from "@tanstack/react-router";

import { site } from "@/lib/site";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-warm-white/10 lg:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center bg-charcoal py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-white"
      >
        Call Now
      </a>
      <Link
        to="/contact"
        className="flex items-center justify-center bg-gold py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal"
      >
        Get Estimate
      </Link>
    </div>
  );
}
