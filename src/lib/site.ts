/**
 * Single source of truth for business info, copy fragments and imagery.
 * Change values here to rebrand the site.
 */

import heroGarage from "@/assets/hero-garage.jpg";
import systemEpoxy from "@/assets/system-epoxy.jpg";
import systemOverlay from "@/assets/system-overlay.jpg";
import systemQuartz from "@/assets/system-quartz.jpg";
import systemStain from "@/assets/system-stain.jpg";
import systemSealer from "@/assets/system-sealer.jpg";
import systemPolyaspartic from "@/assets/system-polyaspartic.jpg";
import beforeGarage from "@/assets/before-garage.jpg";
import afterGarage from "@/assets/after-garage.jpg";
import galleryPatio from "@/assets/gallery-patio.jpg";
import galleryCommercial from "@/assets/gallery-commercial.jpg";
import galleryIndustrial from "@/assets/gallery-industrial.jpg";
import galleryPorch from "@/assets/gallery-porch.jpg";
import craftDetail from "@/assets/craft-detail.jpg";
import textureConcrete from "@/assets/texture-concrete.jpg";

export const images = {
  heroGarage,
  systemEpoxy,
  systemOverlay,
  systemQuartz,
  systemStain,
  systemSealer,
  systemPolyaspartic,
  beforeGarage,
  afterGarage,
  galleryPatio,
  galleryCommercial,
  galleryIndustrial,
  galleryPorch,
  craftDetail,
  textureConcrete,
};

export const site = {
  name: "West Coast Coatings",
  phone: "(941) 524-2963",
  phoneHref: "tel:+19415242963",
  email: "tyler@westcoastcoatings.org",
  hours: ["Monday–Friday", "8:00 AM–5:00 PM"],
  serviceArea: "Southwest Florida",
  counties: [
    "Hillsborough County",
    "Manatee County",
    "Sarasota County",
    "Charlotte County",
    "Lee County",
  ],
  customerTypes: ["Residential", "Commercial", "Industrial"],
  brandStatement:
    "Professionally installed concrete flooring and coating systems for residential, commercial, and industrial spaces across Southwest Florida.",
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/our-work" },
  { label: "Contact", to: "/contact" },
] as const;

export type ServiceSystem = {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
};

export const systems: ServiceSystem[] = [
  {
    number: "01",
    title: "Epoxy Coatings",
    tagline: "Durability meets design.",
    description:
      "Our epoxy flake systems create a beautiful, highly durable surface suitable for garages, porches, patios, pool decks, and commercial environments.",
    image: images.systemEpoxy,
    alt: "Close-up of a grey and charcoal epoxy flake concrete floor finish",
  },
  {
    number: "02",
    title: "Overlay Systems",
    tagline: "Give existing concrete a new life.",
    description:
      "Decorative overlay systems can transform new or existing concrete with patterns, textures, and finishes designed for spaces such as pool decks and outdoor patios.",
    image: images.systemOverlay,
    alt: "Decorative concrete overlay pool deck in a warm sand tone",
  },
  {
    number: "03",
    title: "Quartz Systems",
    tagline: "Built for demanding spaces.",
    description:
      "Quartz systems combine strength, aesthetics, texture, and adjustable slip resistance, making them well suited for industrial flooring and pool deck applications.",
    image: images.systemQuartz,
    alt: "Textured quartz broadcast flooring system inside an industrial facility",
  },
  {
    number: "04",
    title: "Stains",
    tagline: "Turn concrete into a design feature.",
    description: "Concrete staining offers a distinctive way to enhance existing flooring.",
    image: images.systemStain,
    alt: "Stained decorative concrete floor with mottled warm earth tones",
  },
  {
    number: "05",
    title: "Sealers",
    tagline: "Protect the surface you've invested in.",
    description:
      "Sealers help protect concrete and form an important part of many flooring installations.",
    image: images.systemSealer,
    alt: "Sealed concrete surface with a soft satin sheen in evening light",
  },
  {
    number: "06",
    title: "Polyaspartics",
    tagline: "High-performance protection.",
    description:
      "Polyaspartic coatings provide a protective layer for resinous concrete flooring systems.",
    image: images.systemPolyaspartic,
    alt: "Glossy polyaspartic coated concrete floor in a modern commercial space",
  },
];

/** Services page uses slightly expanded copy for the same six systems. */
export const systemsDetailed: ServiceSystem[] = [
  {
    ...systems[0]!,
    tagline: "Durability with a finished look.",
    description:
      "Our epoxy flake systems provide a durable, attractive surface for garages, patios, porches, pool decks, and other residential and commercial applications.",
  },
  {
    ...systems[1]!,
    description:
      "Decorative overlay systems can cover and transform new or existing concrete while creating patterns, textures, and finishes suited to the space. Ideal for applications such as pool decks and outdoor patios.",
  },
  {
    ...systems[2]!,
    tagline: "Built for demanding environments.",
    description:
      "Quartz systems combine strength, aesthetics, texture, and adjustable slip resistance, making them well suited to industrial flooring and pool deck applications.",
  },
  {
    ...systems[3]!,
    title: "Stain Systems",
    tagline: "Make concrete part of the design.",
    description:
      "Concrete staining can enhance existing surfaces with distinctive colors and finishes, turning ordinary concrete into a more intentional design element.",
  },
  {
    ...systems[4]!,
    tagline: "Protect the surface. Preserve the finish.",
    description:
      "Sealers provide an additional layer of protection for concrete surfaces and can form an important part of a complete flooring system.",
  },
  {
    ...systems[5]!,
    tagline: "Performance meets protection.",
    description:
      "Polyaspartic coatings offer a high-performance option for applications where durability and surface protection are priorities.",
  },
];

export type GalleryItem = {
  id: string;
  image: string;
  alt: string;
  caption: string;
  tags: string[];
};

/**
 * PLACEHOLDER IMAGERY — replace `image` values with real West Coast Coatings
 * project photography. Captions describe the surface type only; no project
 * details are claimed.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "epoxy-garage",
    image: images.afterGarage,
    alt: "Finished grey epoxy flake garage floor with a high-gloss surface",
    caption: "Epoxy flake garage floor",
    tags: ["Epoxy", "Residential", "Garage"],
  },
  {
    id: "overlay-pool",
    image: images.systemOverlay,
    alt: "Decorative concrete overlay pool deck in warm sand tones",
    caption: "Decorative overlay pool deck",
    tags: ["Overlays", "Residential", "Patio", "Decorative"],
  },
  {
    id: "patio",
    image: images.galleryPatio,
    alt: "Coated concrete patio surface at a Florida home surrounded by palms",
    caption: "Coated patio surface",
    tags: ["Overlays", "Residential", "Patio", "Decorative"],
  },
  {
    id: "quartz-industrial",
    image: images.systemQuartz,
    alt: "Textured quartz flooring system in an industrial facility",
    caption: "Quartz system, industrial floor",
    tags: ["Quartz", "Industrial", "Commercial"],
  },
  {
    id: "commercial-resin",
    image: images.galleryCommercial,
    alt: "Seamless light grey resinous floor in a modern commercial interior",
    caption: "Seamless commercial floor",
    tags: ["Epoxy", "Commercial"],
  },
  {
    id: "warehouse",
    image: images.galleryIndustrial,
    alt: "Durable coated warehouse floor between industrial shelving",
    caption: "Coated warehouse floor",
    tags: ["Industrial", "Commercial", "Epoxy"],
  },
  {
    id: "porch",
    image: images.galleryPorch,
    alt: "Residential porch with a decorative coated concrete floor",
    caption: "Residential porch coating",
    tags: ["Residential", "Patio", "Decorative", "Overlays"],
  },
  {
    id: "stain",
    image: images.systemStain,
    alt: "Stained concrete floor with warm mottled tones in a bright interior",
    caption: "Stained concrete interior",
    tags: ["Decorative", "Residential"],
  },
  {
    id: "polyaspartic",
    image: images.systemPolyaspartic,
    alt: "Reflective polyaspartic coated floor in a commercial corridor",
    caption: "Polyaspartic coated corridor",
    tags: ["Commercial", "Epoxy"],
  },
];

export const homeGalleryFilters = [
  "All",
  "Residential",
  "Commercial",
  "Garage",
  "Patio",
  "Decorative",
  "Industrial",
];

export const workGalleryFilters = [
  "All",
  "Epoxy",
  "Overlays",
  "Quartz",
  "Residential",
  "Commercial",
  "Industrial",
];

export const projectTypes = [
  "Epoxy Coatings",
  "Overlay Systems",
  "Quartz Systems",
  "Stains",
  "Sealers",
  "Polyaspartics",
  "Not Sure",
];

export const propertyTypes = ["Residential", "Commercial", "Industrial"];
