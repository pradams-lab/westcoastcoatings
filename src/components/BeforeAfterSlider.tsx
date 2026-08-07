import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

/** Keyboard- and pointer-accessible before/after comparison slider. */
export function BeforeAfterSlider({ beforeImage, afterImage, beforeAlt, afterAlt }: Props) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const move = (e: PointerEvent) => updateFromClientX(e.clientX);
    const up = () => setDragging(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [dragging, updateFromClientX]);

  return (
    <div
      ref={frameRef}
      className="relative aspect-4/3 w-full touch-none select-none overflow-hidden bg-charcoal sm:aspect-16/9"
      onPointerDown={(e) => {
        setDragging(true);
        updateFromClientX(e.clientX);
      }}
    >
      <img
        src={afterImage}
        alt={afterAlt}
        loading="lazy"
        width={1440}
        height={960}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img
          src={beforeImage}
          alt={beforeAlt}
          loading="lazy"
          width={1440}
          height={960}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: frameRef.current?.offsetWidth ? `${frameRef.current.offsetWidth}px` : "100%" }}
        />
      </div>

      <span className="pointer-events-none absolute left-5 top-5 bg-charcoal/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-warm-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-5 top-5 bg-gold px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-gold"
        style={{ left: `${position}%` }}
      />

      <input
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Reveal the finished surface"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-gold text-charcoal"
        style={{ left: `${position}%` }}
      >
        <span className="text-xs tracking-tight">◀ ▶</span>
      </div>
    </div>
  );
}
