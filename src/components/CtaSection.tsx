import { Reveal } from "@/components/Reveal";
import { ActionAnchor, ActionLink } from "@/components/ui-kit";
import { images, site } from "@/lib/site";

export function CtaSection({
  eyebrow,
  headline,
  copy,
  primaryLabel = "Get A Free Estimate",
}: {
  eyebrow?: string;
  headline: string;
  copy?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <img
        src={images.textureConcrete}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div className="relative shell py-24 text-center lg:py-32">
        <Reveal>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl leading-[1.05] text-warm-white sm:text-5xl">
            {headline}
          </h2>
          {copy ? (
            <p className="mx-auto mt-7 max-w-[62ch] text-[15px] leading-relaxed text-warm-white/65">
              {copy}
            </p>
          ) : null}
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ActionLink to="/contact" variant="gold">
              {primaryLabel}
            </ActionLink>
            <ActionAnchor href={site.phoneHref} variant="outlineLight">
              Call {site.phone}
            </ActionAnchor>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
