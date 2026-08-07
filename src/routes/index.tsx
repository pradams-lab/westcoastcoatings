import { createFileRoute } from "@tanstack/react-router";

import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Reveal } from "@/components/Reveal";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import {
  ActionAnchor,
  ActionLink,
  SectionHeader,
  TextLink,
} from "@/components/ui-kit";
import { homeGalleryFilters, images, site, systems } from "@/lib/site";

const title = "West Coast Coatings — Epoxy & Concrete Flooring in Southwest Florida";
const description =
  "Epoxy coatings, overlays, quartz systems, stains, sealers and polyaspartics for residential, commercial and industrial concrete across Southwest Florida.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const valueFeatures = [
  {
    number: "01",
    title: "Quality Workmanship",
    copy: "Attention to the details that make the finished result stand out.",
  },
  {
    number: "02",
    title: "Professional Service",
    copy: "Clear communication and a straightforward experience from start to finish.",
  },
  {
    number: "03",
    title: "Built Around Your Project",
    copy: "Solutions selected around your space, surface, and desired result.",
  },
  {
    number: "04",
    title: "Free Estimates",
    copy: "Tell us what you're working on and let's talk about the right solution.",
  },
];

const differences = [
  {
    title: "Attention To Detail",
    copy: "The finished result is only as good as the work underneath it. We approach every project with care from preparation through completion.",
  },
  {
    title: "Quality-Focused Results",
    copy: "We don't believe in cutting corners to get the job done faster. The goal is a finish that looks right and feels right.",
  },
  {
    title: "Straightforward Communication",
    copy: "No confusing process. No unnecessary runaround. Just clear communication about your project and what to expect.",
  },
  {
    title: "A Local Approach",
    copy: "We're proud to serve our community and build our reputation one project at a time.",
  },
];

const applications = [
  {
    label: "Residential",
    title: "Make Your Home Stand Out",
    copy: "Garages, patios, porches, pool decks, and other residential spaces can benefit from a surface that combines functionality with a finished appearance.",
    image: images.galleryPorch,
    alt: "Residential porch with a decorative coated concrete floor",
  },
  {
    label: "Commercial",
    title: "A Better Surface For Your Business",
    copy: "Create clean, durable, professional flooring solutions for commercial environments.",
    image: images.galleryCommercial,
    alt: "Modern commercial interior with a seamless light grey resinous floor",
  },
  {
    label: "Industrial",
    title: "Performance Where It Matters Most",
    copy: "For spaces where durability, performance, texture, and slip resistance matter, choose a system suited to the conditions.",
    image: images.galleryIndustrial,
    alt: "Industrial warehouse with a durable coated concrete floor",
  },
];

const process = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    copy: "Fill out our quick estimate form or give us a call. Tell us what you're looking to transform.",
  },
  {
    number: "02",
    title: "Let's Take A Look",
    copy: "We'll learn more about your space, understand what you're looking for, and discuss the best approach.",
  },
  {
    number: "03",
    title: "Prepare & Coat",
    copy: "Proper preparation and careful application are key to achieving a quality finish.",
  },
  {
    number: "04",
    title: "Enjoy The Transformation",
    copy: "We complete the project and leave you with a finished surface you can be proud of.",
  },
];

function Home() {
  return (
    <>
      {/* 01 — HERO */}
      <section className="relative overflow-hidden bg-charcoal">
        <img
          src={images.heroGarage}
          alt="Modern residential garage with a high-gloss grey epoxy flake floor"
          width={1920}
          height={1200}
          fetchPriority="high"
          className="unveil-in absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/70 to-charcoal/20" />
        <div className="relative shell flex min-h-[88vh] flex-col justify-end pb-20 pt-32 lg:min-h-[92vh] lg:pb-24">
          <p className="eyebrow reveal-in">Epoxy & Concrete Flooring Specialists</p>
          <h1
            className="reveal-in mt-6 max-w-4xl text-balance text-4xl leading-[1.03] text-warm-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Transform Your Concrete Into Something Extraordinary.
          </h1>
          <p
            className="reveal-in mt-7 max-w-[58ch] text-[15px] leading-relaxed text-warm-white/70"
            style={{ animationDelay: "170ms" }}
          >
            From residential garages and patios to commercial and industrial spaces, West Coast
            Coatings delivers durable, beautiful flooring systems designed around the way you use
            your space.
          </p>
          <div
            className="reveal-in mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "250ms" }}
          >
            <ActionLink to="/contact" variant="gold">
              Get a Free Estimate
            </ActionLink>
            <ActionAnchor href={site.phoneHref} variant="outlineLight">
              Call {site.phone}
            </ActionAnchor>
          </div>
          <p
            className="reveal-in mt-10 border-t border-warm-white/15 pt-6 text-[10px] uppercase tracking-[0.25em] text-warm-white/45"
            style={{ animationDelay: "330ms" }}
          >
            Serving Southwest Florida • Residential • Commercial • Industrial
          </p>
        </div>
      </section>

      {/* 02 — VALUE BAR */}
      <section className="shell border-b border-charcoal/10 py-20 lg:py-28">
        <Reveal>
          <h2 className="max-w-2xl text-balance text-3xl leading-[1.1] sm:text-4xl">
            A Better Finish Starts With Better Work.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {valueFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className="border-l border-charcoal/15 pl-6">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-gold">{f.number}</span>
              <h3 className="mt-4 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-charcoal">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 03 — INTRODUCTION */}
      <section className="shell grid gap-14 py-20 lg:grid-cols-2 lg:gap-24 lg:py-32">
        <Reveal variant="unveil" className="order-2 lg:order-1">
          <img
            src={images.craftDetail}
            alt="Installer troweling a fresh concrete coating by hand"
            loading="lazy"
            width={1280}
            height={1200}
            className="h-full w-full object-cover"
          />
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeader
              eyebrow="Why West Coast Coatings"
              headline="More Than A New Coat. A Complete Transformation."
              copy={[
                "A great coating does more than change the appearance of a surface. It can completely change how a space looks, feels, and functions.",
                "At West Coast Coatings, we transform concrete surfaces through professionally installed flooring and coating systems designed around each project's needs.",
                "From epoxy flake floors and decorative overlays to quartz systems, stains, sealers, and polyaspartics, we offer a range of solutions for spaces that need more from their floors.",
                "Our approach combines technical execution with an appreciation for the finished result—because a successful project should perform well and look right.",
              ]}
            />
            <div className="mt-9">
              <TextLink to="/our-work">See Our Work</TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — SERVICES */}
      <section className="bg-charcoal py-20 lg:py-32">
        <div className="shell">
          <Reveal>
            <SectionHeader
              eyebrow="Our Systems"
              tone="light"
              headline="The Right System For The Right Surface."
              copy="Whether you're looking to refresh a garage, improve an outdoor space, protect an industrial floor, or create a decorative concrete finish, we offer a range of systems designed for different applications."
            />
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90} className="group">
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between border-b border-warm-white/15 pb-4">
                  <h3 className="text-2xl text-warm-white">{s.title}</h3>
                  <span className="text-[10px] tracking-[0.25em] text-gold">{s.number}</span>
                </div>
                <p className="mt-4 text-sm font-medium text-gold">{s.tagline}</p>
                <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-warm-white/60">
                  {s.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <TextLink to="/services" tone="light">
              Explore All Services
            </TextLink>
          </Reveal>
        </div>
      </section>

      {/* 05 — DIFFERENCE */}
      <section className="shell py-20 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <SectionHeader
              eyebrow="The West Coast Difference"
              headline="Good Work Shows In The Details."
              copy={[
                "When you invest in a coating project, you shouldn't have to wonder whether the job was done properly.",
                "We focus on the details that matter—from preparing the surface to delivering a clean, consistent finish.",
              ]}
            />
          </Reveal>
          <div className="divide-y divide-charcoal/10 border-t border-charcoal/10">
            {differences.map((d, i) => (
              <Reveal key={d.title} delay={i * 70} className="py-8">
                <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-charcoal">
                  {d.title}
                </h3>
                <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
                  {d.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — BEFORE / AFTER */}
      <section className="bg-charcoal py-20 lg:py-32">
        <div className="shell">
          <Reveal>
            <SectionHeader
              eyebrow="See The Difference"
              tone="light"
              headline="From Worn Out To Wow."
              copy="The right coating can completely change a space."
            />
          </Reveal>
          <Reveal variant="unveil" className="mt-14">
            <BeforeAfterSlider
              beforeImage={images.beforeGarage}
              afterImage={images.afterGarage}
              beforeAlt="Worn, stained bare concrete garage floor before coating"
              afterAlt="The same garage with a finished grey epoxy flake floor"
            />
          </Reveal>
          <Reveal className="mt-12">
            <TextLink to="/our-work" tone="light">
              View Our Projects
            </TextLink>
          </Reveal>
        </div>
      </section>

      {/* 07 — APPLICATIONS */}
      <section className="shell py-20 lg:py-32">
        <Reveal>
          <SectionHeader eyebrow="Where We Work" headline="From Home Garages To Industrial Floors." />
        </Reveal>
        <div className="mt-16 space-y-20">
          {applications.map((a, i) => (
            <Reveal
              key={a.label}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="overflow-hidden">
                <img
                  src={a.image}
                  alt={a.alt}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </figure>
              <div>
                <p className="eyebrow">{a.label}</p>
                <h3 className="mt-5 text-3xl leading-tight sm:text-4xl">{a.title}</h3>
                <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
                  {a.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 08 — PROCESS */}
      <section className="border-y border-charcoal/10 bg-secondary py-20 lg:py-32">
        <div className="shell">
          <Reveal>
            <SectionHeader eyebrow="How It Works" headline="A Simple Process. A Better Experience." />
          </Reveal>
          <ol className="mt-16 grid gap-px bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.number} className="bg-secondary p-8">
                <Reveal delay={i * 80}>
                  <span className="font-display text-4xl text-gold">{p.number}</span>
                  <h3 className="mt-6 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 09 — PROJECT GALLERY */}
      <section className="shell py-20 lg:py-32">
        <Reveal>
          <SectionHeader
            eyebrow="Our Work"
            headline="See What We've Been Working On."
            copy={[
              "A coating project is best understood when you can see the finished result.",
              "Explore examples of our work and get inspired for your own project.",
            ]}
          />
        </Reveal>
        <div className="mt-14">
          <ProjectGallery filters={homeGalleryFilters} />
        </div>
      </section>

      {/* 11 — SERVICE AREA */}
      <section className="border-t border-charcoal/10 py-20 lg:py-32">
        <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionHeader
              eyebrow="Proudly Serving Southwest Florida"
              headline="Local Service. Professional Results."
              copy="West Coast Coatings serves customers throughout Southwest Florida."
            />
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

      {/* 12 — FINAL CTA */}
      <FinalCta />
    </>
  );
}

function FinalCta() {
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
          <p className="eyebrow">Ready To Get Started?</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl leading-[1.05] text-warm-white sm:text-5xl">
            Let's Transform Your Space.
          </h2>
          <p className="mx-auto mt-7 max-w-[62ch] text-[15px] leading-relaxed text-warm-white/65">
            Whether you already know exactly what you want or you're still figuring out the best
            option, we're ready to talk about your project. Tell us what you're working with, what
            you're looking to achieve, and we'll help you take the next step.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ActionLink to="/contact" variant="gold">
              Get My Free Estimate
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
