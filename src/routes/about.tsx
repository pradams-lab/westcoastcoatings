import { createFileRoute } from "@tanstack/react-router";

import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";
import { ActionLink, PageHero, SectionHeader } from "@/components/ui-kit";
import { images, systems } from "@/lib/site";

const title = "About — West Coast Coatings | Concrete Flooring Craftsmanship";
const description =
  "West Coast Coatings installs epoxy and concrete flooring systems built around durability, performance and finish for Southwest Florida homes and businesses.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const approach = [
  {
    title: "Quality",
    copy: "We aim to consistently exceed customer expectations through every installation.",
  },
  {
    title: "Craftsmanship",
    copy: "We pay attention to the details that turn a functional surface into a finished space.",
  },
  {
    title: "The Right System",
    copy: "Every environment has different requirements. Our range of flooring systems allows us to approach projects according to their intended application.",
  },
  {
    title: "Customer Experience",
    copy: "From the initial conversation to the completed installation, we want the process to be straightforward, professional, and clear.",
  },
];

const expertise = [
  "Epoxy Coatings",
  "Overlay Systems",
  "Quartz Systems",
  "Stains & Sealers",
  "Polyaspartics",
];

const applications = [
  {
    label: "Residential",
    copy: "Transform garages, patios, porches, pool decks, and other areas around your home with a finished surface designed around your space.",
  },
  {
    label: "Commercial",
    copy: "Create cleaner, more polished flooring environments for businesses and commercial properties.",
  },
  {
    label: "Industrial",
    copy: "For demanding environments where durability, performance, texture, and slip resistance matter, our flooring systems provide solutions suited to industrial applications.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About West Coast Coatings"
        headline="Craftsmanship You Can See. Quality You Can Trust."
        subheadline="West Coast Coatings specializes in epoxy and concrete flooring systems that bring together durability, performance, and thoughtful design for residential, commercial, and industrial spaces across Southwest Florida."
        image={images.systemPolyaspartic}
        alt="Reflective polyaspartic coated concrete floor in a modern space"
        actions={
          <>
            <ActionLink to="/contact" variant="gold">
              Get A Free Estimate
            </ActionLink>
            <ActionLink to="/services" variant="outlineLight">
              Explore Our Services
            </ActionLink>
          </>
        }
      />

      <section className="shell grid gap-14 py-20 lg:grid-cols-2 lg:gap-24 lg:py-32">
        <Reveal>
          <SectionHeader
            eyebrow="Who We Are"
            headline="We Believe Concrete Should Look As Good As It Performs."
            copy={[
              "Concrete is practical. But that doesn't mean it has to look ordinary.",
              "At West Coast Coatings, we transform concrete surfaces through professionally installed flooring and coating systems designed around each project's needs.",
              "From epoxy flake floors and decorative overlays to quartz systems, stains, sealers, and polyaspartics, we offer a range of solutions for spaces that need more from their floors.",
              "Our approach combines technical execution with an appreciation for the finished result—because a successful project should perform well and look right.",
            ]}
          />
        </Reveal>
        <Reveal variant="unveil" delay={100}>
          <img
            src={images.systemStain}
            alt="Stained concrete floor with warm mottled tones in a bright interior"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Reveal>
      </section>

      <section className="bg-charcoal py-20 lg:py-32">
        <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <SectionHeader
              eyebrow="Our Approach"
              tone="light"
              headline="The Finish Matters. The Work Behind It Matters More."
              copy={[
                "A beautiful floor starts long before the final coat is applied.",
                "Surface preparation, system selection, application, and finishing all play a role in the final result.",
              ]}
            />
          </Reveal>
          <div className="divide-y divide-warm-white/10 border-t border-warm-white/10">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 70} className="py-8">
                <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-gold">
                  {a.title}
                </h3>
                <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-warm-white/65">{a.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20 lg:py-28">
        <Reveal>
          <SectionHeader eyebrow="Our Expertise" headline="One Company. Multiple Flooring Solutions." />
        </Reveal>
        <ul className="mt-12 grid gap-px border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-5">
          {expertise.map((e, i) => (
            <li key={e} className="bg-background p-8">
              <Reveal delay={i * 60}>
                <span className="text-[10px] tracking-[0.25em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl text-charcoal">{e}</h3>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell py-20 lg:py-28">
        <Reveal>
          <h2 className="max-w-2xl text-balance text-3xl leading-[1.1] sm:text-4xl">
            From Your Garage To Your Business.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {applications.map((a, i) => (
            <Reveal key={a.label} delay={i * 80} className="border-t border-charcoal/15 pt-6">
              <p className="eyebrow">{a.label}</p>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{a.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-charcoal/10 py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal variant="unveil">
            <img
              src={images.craftDetail}
              alt="Installer carefully finishing a concrete coating by hand"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal>
            <SectionHeader
              eyebrow="Our Commitment"
              headline="We Care About More Than The Finished Floor."
              copy={[
                "Our commitment extends beyond the practical execution of an installation.",
                "It's about the craftsmanship, the appearance of the finished surface, and the experience of getting there.",
                "We believe clients should understand what they're investing in and feel confident about the work being done in their space.",
                "That's why we focus on delivering thoughtful flooring solutions with quality and attention to detail at every stage.",
              ]}
            />
            <p className="mt-10 text-[10px] uppercase tracking-[0.25em] text-charcoal/40">
              {systems.map((s) => s.title).join(" · ")}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        headline="Let's Talk About Your Project."
        copy="Tell us what you're working with, what you want to achieve, and we'll help you take the next step."
      />
    </>
  );
}
