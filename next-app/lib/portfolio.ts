export type PortfolioItem = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  image: string;
  tags: readonly string[];
  year: string;
  challenge: string;
  approach: readonly string[];
  results: readonly string[];
};

export const portfolioItems = [
  {
    slug: "babylon",
    title: "Babylon",
    client: "Babylon",
    summary: "A gastronomic journey through time.",
    image: "https://tikii.in/wp-content/uploads/2024/11/Babylon-Pic-scaled-e1732791359101.jpg",
    tags: ["Branding"],
    year: "2024",
    challenge:
      "Build a restaurant identity that turns history, food, and ambience into one memorable dining world.",
    approach: [
      "Created a distinctive identity system with an opulent palette, historical references, and a destination-led narrative.",
      "Connected visual language, service experience, and storytelling so the brand could feel coherent before the first course arrived."
    ],
    results: [
      "Built a loyal following around the restaurant experience.",
      "Strengthened recognition through a brand system that made the dining concept easier to remember and share."
    ]
  },
  {
    slug: "vedamorph",
    title: "Vedamorph",
    client: "Vedamorph",
    summary: "A fresh take on natural luxury. Indulge in nature's bounty.",
    image: "https://tikii.in/wp-content/uploads/2024/11/Banner-Image-All-Desktop-scaled.jpg",
    tags: ["Brand Guideline", "Branding", "Logo & Trademark", "Product Marketing"],
    year: "2024",
    challenge:
      "Shape a natural luxury brand with enough restraint to feel premium and enough clarity to work across product marketing.",
    approach: [
      "Built a visual identity and brand guideline system around natural cues, premium product language, and clean usage rules.",
      "Defined core messaging and brand assets so campaigns and packaging could speak in the same voice."
    ],
    results: [
      "Created a more coherent market presence for a premium nature-led product.",
      "Gave internal and external teams a clearer foundation for future launches."
    ]
  },
  {
    slug: "young-learners-montessori-house",
    title: "Young Learners' Montessori House",
    client: "Young Learners' Montessori House",
    summary: "Revitalizing a legacy.",
    image: "https://tikii.in/wp-content/uploads/2024/11/Revitalizing-a-Legacy-Hero-Banner.jpg",
    tags: ["Art Direction", "Branding", "Strategy", "Website Design"],
    year: "2024",
    challenge:
      "Refresh a trusted education brand without sanding away the warmth and credibility families already knew.",
    approach: [
      "Balanced legacy cues with a more current digital identity and a clearer parent-facing content structure.",
      "Used art direction, website design, and brand strategy to make the school easier to understand and remember."
    ],
    results: [
      "Made the institution feel current while preserving familiarity.",
      "Improved the digital surface for parents comparing early learning options."
    ]
  },
  {
    slug: "chandrani-pearls-marketing",
    title: "New Pearls",
    client: "Chandrani Pearls",
    summary:
      "A rich offline legacy needed a younger, more engaged social audience. The campaign made customers part of the story.",
    image: "https://tikii.in/wp-content/uploads/2024/10/Chandrani-Pearls-Campaign2075_edit_hue_2_NL_Compressed-scaled.jpg",
    tags: ["Online Advertising", "Performance Marketing", "Product Marketing", "Social Media"],
    year: "2024",
    challenge:
      "Turn a beloved offline jewellery brand into a stronger social presence for a younger audience.",
    approach: [
      "Built the Face of Chandrani Pearls campaign around customer participation and user-generated content.",
      "Focused on organic growth, engagement quality, and brand visibility instead of buying empty attention."
    ],
    results: [
      "Expanded social visibility for a heritage jewellery brand.",
      "Created a stronger bridge between existing customers and a younger online audience."
    ]
  },
  {
    slug: "chandrani-pearls-shopify-switch",
    title: "Pearls and You",
    client: "Chandrani Pearls",
    summary: "From glitchy to global with a Shopify glow-up.",
    image: "https://tikii.in/wp-content/uploads/2024/08/Deepas-20x10_SKin1_Compressed-1024x686.webp",
    tags: ["Performance", "Shopify", "UX/UI Design", "Website"],
    year: "2024",
    challenge:
      "Move a growing jewellery business away from a slow, outdated store into a faster, scalable ecommerce experience.",
    approach: [
      "Rebuilt the store experience on Shopify with improved navigation, search filters, and richer product storytelling.",
      "Prepared the platform for international storefronts through Shopify Markets."
    ],
    results: [
      "Monthly online sales doubled in the first year compared to the previous website.",
      "The second year doubled again, with ecommerce accounting for more than 15% of total brand sales across 67 offline stores."
    ]
  }
] as const satisfies readonly PortfolioItem[];

export function getPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
