import { createFileRoute } from "@tanstack/react-router";

import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { CtaSection } from "@/components/CtaSection";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { ActionAnchor, ActionLink, PageHero, SectionHeader, TextLink } from "@/components/ui-kit";
import { images, site, systemsDetailed } from "@/lib/site";

const title = "Services — Epoxy, Overlay, Quartz & Polyaspartic Systems";
const description =
  "Epoxy coatings, decorative overlays, quartz systems, stains, sealers and polyaspartics for residential, commercial and industrial concrete in Southwest Florida.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
  component: Services,
});

const faqs: FaqItem[] = [
  {
    question: "Which flooring system is right for me?",
    answer:
      "It depends on your surface, how the space will be used, the performance requirements, and the appearance you're looking for. If you're unsure, contact us and we'll discuss your project.",
  },
  {
    question: "Can you coat existing concrete?",
    answer:
      "Yes. Several of our systems can be used to transform existing concrete, depending on its condition and the requirements of the project.",
  },
  {
    question: "Do you work on residential and commercial projects?",
    answer: "Yes. West Coast Coatings serves residential, commercial, and industrial customers.",
  },
  {
    question: "Are epoxy floors only for garages?",
    answer:
      "No. Epoxy systems can be used across a range of applications, including garages, patios, porches, pool decks, and commercial spaces.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Southwest Florida, including Hillsborough, Manatee, Sarasota, Charlotte, and Lee County.",
  },
  {
    question: "I don't know which system I need. Can you help?",
    answer:
      "Absolutely. Tell us about your space and what you're trying to achieve, and we'll help you determine the appropriate direction.",
  },
];

const selection = [
  {
    title: "Durability",
    copy: "How much traffic, weight, and wear will the surface take? Higher demands point toward quartz and polyaspartic systems.",
  },
  {
    title: "Decorative Finish",
    copy: "If appearance leads the decision, overlays and stains offer patterns, textures, and color you can design around.",
  },
  {
    title: "Existing Concrete",
    copy: "The condition of what's already there shapes the options. Several systems are built to cover and renew existing slabs.",
  },
  {
    title: "Texture / Slip Resistance",
    copy: "Pool decks and industrial floors often need texture. Quartz systems allow slip resistance to be adjusted to the space.",
  },
];

const processSteps = [
  "Consultation",
  "Surface Assessment",
  "System Selection",
  "Preparation & Installation",
  "Final Result",
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        headline="Concrete Flooring, Reimagined."
        subheadline="From durable epoxy systems to decorative overlays and high-performance coatings, West Coast Coatings provides flooring solutions designed for the demands of residential, commercial, and industrial spaces."
        image={images.systemQuartz}
        alt="Textured quartz flooring system inside an industrial facility"
        actions={
          <>
            <ActionLink to="/contact" variant="gold">
              Get A Free Estimate
            </ActionLink>
            <ActionAnchor href={site.phoneHref} variant="outlineLight">
              Call {site.phone}
            </ActionAnchor>
          </>
        }
      />

      <section className="shell py-20 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="The Right System For Your Space"
            headline="Not Every Surface Needs The Same Solution."
            copy={[
              "Every project has different requirements.",
              "The condition of the concrete, how the space will be used, the level of durability required, the desired appearance, and factors such as texture and slip resistance can all influence which system makes sense.",
              "That's why West Coast Coatings offers a range of concrete flooring and coating systems rather than taking a one-size-fits-all approach.",
            ]}
          />
        </Reveal>
      </section>

      <section className="border-t border-charcoal/10">
        {systemsDetailed.map((s, i) => (
          <article
            key={s.title}
            className={i % 2 === 1 ? "border-b border-charcoal/10 bg-secondary" : "border-b border-charcoal/10"}
          >
            <div className="shell grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-24 lg:py-24">
              <Reveal variant="unveil" className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </Reveal>
              <Reveal>
                <p className="eyebrow">
                  {s.number} — {s.title}
                </p>
                <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">{s.tagline}</h2>
                <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </Reveal>
            </div>
          </article>
        ))}
      </section>

      <section className="shell py-20 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Where Our Systems Work"
            headline="Designed Around How You Use Your Space."
          />
        </Reveal>
        <div className="mt-12 grid gap-px border border-charcoal/10 bg-charcoal/10 sm:grid-cols-3">
          {site.customerTypes.map((t, i) => (
            <div key={t} className="bg-background p-10">
              <Reveal delay={i * 70}>
                <span className="text-[10px] tracking-[0.25em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-2xl">{t}</h3>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <SectionHeader
              eyebrow="Find Your Fit"
              tone="light"
              headline="Different Spaces. Different Demands."
            />
            <div className="mt-10 border-t border-warm-white/15 pt-8">
              <p className="font-display text-xl text-warm-white">Not Sure What You Need?</p>
              <div className="mt-5">
                <TextLink to="/contact" tone="light">
                  Talk To Our Team
                </TextLink>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-px bg-warm-white/10 sm:grid-cols-2">
            {selection.map((s, i) => (
              <div key={s.title} className="bg-charcoal p-8">
                <Reveal delay={i * 70}>
                  <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-warm-white/65">{s.copy}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="How It Works"
            headline="From Existing Concrete To A Finished Surface."
          />
        </Reveal>
        <ol className="mt-14 grid gap-px bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <li key={step} className="bg-background p-8">
              <Reveal delay={i * 60}>
                <span className="font-display text-3xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-charcoal">
                  {step}
                </h3>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-charcoal/10 bg-secondary py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeader
              eyebrow="See The Difference"
              headline="The Transformation Speaks For Itself."
            />
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

      <section className="shell py-20 lg:py-28">
        <Reveal>
          <SectionHeader eyebrow="Questions" headline="Answers Before You Commit." />
        </Reveal>
        <div className="mt-12">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaSection
        headline="Let's Build A Floor You'll Be Proud Of."
        copy="Whether you're upgrading a garage, refreshing a patio, transforming a pool deck, or looking for a solution for a commercial or industrial space, we're ready to talk about your project."
      />
    </>
  );
}
