import { site } from "@/lib/site";

/** Tasteful, non-interactive service-area map graphic (no external map SDK). */
export function ServiceAreaMap({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const line = tone === "dark" ? "stroke-charcoal/15" : "stroke-warm-white/20";
  const coast = tone === "dark" ? "stroke-charcoal/40" : "stroke-warm-white/40";

  return (
    <div className="relative">
      <svg viewBox="0 0 400 520" role="img" aria-label={`Map illustration of ${site.serviceArea}`} className="w-full">
        <g className={line} strokeWidth="1">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 45} x2="400" y2={i * 45} />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="520" />
          ))}
        </g>
        <path
          d="M150 20 C 120 90, 110 150, 130 210 C 150 270, 140 330, 170 390 C 190 435, 210 470, 205 505"
          fill="none"
          className={coast}
          strokeWidth="2"
        />
        {[
          { y: 90, label: "Hillsborough" },
          { y: 180, label: "Manatee" },
          { y: 260, label: "Sarasota" },
          { y: 350, label: "Charlotte" },
          { y: 440, label: "Lee" },
        ].map((pin) => (
          <g key={pin.label}>
            <circle cx="170" cy={pin.y} r="4" className="fill-gold" />
            <line x1="178" y1={pin.y} x2="230" y2={pin.y} className="stroke-gold" strokeWidth="1" />
            <text
              x="240"
              y={pin.y + 4}
              className={tone === "dark" ? "fill-charcoal" : "fill-warm-white"}
              style={{ fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase" }}
            >
              {pin.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
