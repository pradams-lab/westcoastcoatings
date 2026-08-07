import { createFileRoute } from "@tanstack/react-router";

import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { CtaSection } from "@/components/CtaSection";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Reveal } from "@/components/Reveal";
import { ActionLink, PageHero, SectionHeader } from "@/components/ui-kit";
import { images, workGalleryFilters } from "@/lib/site";

const title = "Our Work — Concrete Coating & Epoxy Floor Projects";
const description =
  "Explore finished epoxy coatings, decorative overlays and quartz flooring surfaces installed by West Coast Coatings across Southwest Florida.";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-work" },
    ],
    links: [{ rel: "canonical", href: "/our-work" }],
  }),
  component: OurWork,
});

function OurWork() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        headline="See The Difference A Finished Surface Can Make."
        subheadline="From residential garages and patios to commercial and industrial spaces, explore some of the surfaces transformed by West Coast Coatings."
        image={images.galleryPatio}
        alt="Coated concrete patio at a Florida home in evening light"
        actions={
          <ActionLink to="/contact" variant="gold">
            Get Your Free Estimate
          </ActionLink>
        }
      />

      <section className="shell py-20 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="The Transformation"
            headline="Ordinary Concrete Doesn't Have To Stay Ordinary."
            copy={[
              "The right flooring system can completely change the way a space looks and feels.",
              "Browse our work to see examples of epoxy coatings, decorative concrete systems, and finished surfaces.",
            ]}
          />
        </Reveal>
        <div className="mt-14">
          <ProjectGallery filters={workGalleryFilters} />
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-secondary py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeader headline="From Worn Concrete To A Finished Surface." />
          </Reveal>
          <Reveal variant="unveil" className="mt-12">
            <BeforeAfterSlider
              beforeImage={images.beforeGarage}
              afterImage={images.afterGarage}
              beforeAlt="Worn bare concrete garage floor before coating"
              afterAlt="Finished epoxy flake garage floor after coating"
            />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal">
        <img
          src={images.systemEpoxy}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative shell py-28 text-center lg:py-36">
          <Reveal>
            <h2 className="text-balance text-4xl text-warm-white sm:text-6xl">
              Surfaces Made To Be Seen.
            </h2>
            <p className="mt-7 text-[10px] uppercase tracking-[0.35em] text-gold">
              Epoxy • Concrete • Craftsmanship
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        headline="Your Space Could Be Next."
        copy="Have a concrete surface you're ready to transform?"
      />
    </>
  );
}
