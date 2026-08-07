import { createFileRoute } from "@tanstack/react-router";

import { CtaSection } from "@/components/CtaSection";
import { EstimateForm } from "@/components/EstimateForm";
import { Reveal } from "@/components/Reveal";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { SectionHeader } from "@/components/ui-kit";
import { site } from "@/lib/site";

const title = "Contact — Request a Free Concrete Coating Estimate";
const description =
  "Tell West Coast Coatings about your garage, patio, pool deck, commercial or industrial concrete project and request a free estimate in Southwest Florida.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-charcoal">
        <div className="shell py-24 lg:py-32">
          <p className="eyebrow reveal-in">Let's Talk</p>
          <h1
            className="reveal-in mt-6 max-w-3xl text-balance text-4xl leading-[1.05] text-warm-white sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Tell Us About Your Project.
          </h1>
          <p
            className="reveal-in mt-7 max-w-[58ch] text-[15px] leading-relaxed text-warm-white/70"
            style={{ animationDelay: "160ms" }}
          >
            Whether you're transforming a garage, patio, pool deck, commercial space, or industrial
            floor, we'd love to hear what you're working on.
          </p>
          <a
            href={site.phoneHref}
            className="reveal-in mt-9 inline-block font-display text-3xl text-gold"
            style={{ animationDelay: "240ms" }}
          >
            {site.phone}
          </a>
        </div>
      </section>

      <section className="shell grid gap-16 py-20 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24 lg:py-28">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">Request A Free Estimate</h2>
          <div className="mt-10">
            <EstimateForm />
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-10">
          <div className="border-t border-charcoal/15 pt-6">
            <p className="eyebrow">Call</p>
            <a href={site.phoneHref} className="mt-4 block font-display text-2xl text-charcoal">
              {site.phone}
            </a>
          </div>
          <div className="border-t border-charcoal/15 pt-6">
            <p className="eyebrow">Hours</p>
            <p className="mt-4 text-[15px] text-charcoal">{site.hours[0]}</p>
            <p className="text-[15px] text-charcoal">{site.hours[1]}</p>
          </div>
          <div className="border-t border-charcoal/15 pt-6">
            <p className="eyebrow">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block break-words text-[15px] text-charcoal underline decoration-gold underline-offset-4"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-charcoal/10 py-20 lg:py-28">
        <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionHeader eyebrow="Where We Serve" headline="Proudly Serving Southwest Florida." />
            <ul className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10">
              {site.counties.map((c) => (
                <li
                  key={c}
                  className="py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-charcoal"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <ServiceAreaMap />
          </Reveal>
        </div>
      </section>

      <CtaSection headline="Let's Transform That Concrete." />
    </>
  );
}
