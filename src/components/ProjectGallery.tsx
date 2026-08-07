import { useMemo, useState } from "react";

import { galleryItems, type GalleryItem } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ProjectGallery({ filters }: { filters: string[] }) {
  const [active, setActive] = useState(filters[0] ?? "All");

  const items = useMemo<GalleryItem[]>(
    () =>
      active === "All" ? galleryItems : galleryItems.filter((item) => item.tags.includes(active)),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-charcoal/10 pb-5" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={cn(
              "border-b pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors",
              active === filter
                ? "border-gold text-charcoal"
                : "border-transparent text-charcoal/45 hover:text-charcoal",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {items.map((item, i) => (
          <figure
            key={item.id}
            className="reveal-in group break-inside-avoid overflow-hidden bg-charcoal"
            style={{ animationDelay: `${Math.min(i, 6) * 60}ms` }}
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-warm-white/70">
              <span>{item.caption}</span>
              <span className="text-gold">{item.tags[0]}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">No projects in this category yet.</p>
      ) : null}
    </div>
  );
}
