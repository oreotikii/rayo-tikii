export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: readonly string[];
  sections: readonly {
    heading: string;
    body: readonly string[];
  }[];
};

export const blogPosts = [
  {
    slug: "brand-strategy-without-the-fog",
    title: "Brand Strategy Without the Fog",
    date: "2026-01-12",
    readTime: "4 min read",
    excerpt:
      "A practical note on turning positioning, audience insight, and visual decisions into a brand system people can actually use.",
    tags: ["Branding", "Strategy"],
    sections: [
      {
        heading: "Start with the decision the brand must make easier",
        body: [
          "Brand strategy is not a mood board with a dramatic voiceover. It should make business decisions easier: who the brand is for, why those people should care, what the offer must prove, and which choices should be avoided.",
          "When those answers are clear, identity work gets sharper. Logos, type, color, content, campaigns, and websites stop behaving like separate projects and start acting like one system."
        ]
      },
      {
        heading: "Make the system usable",
        body: [
          "A good brand system survives real work. It gives founders, marketers, designers, writers, and sales teams rules they can apply without booking a two-hour meeting for every banner.",
          "That is the difference between pretty output and a useful brand: the useful one keeps working after launch day."
        ]
      }
    ]
  },
  {
    slug: "performance-marketing-without-vanity-metrics",
    title: "Performance Marketing Without Vanity Metrics",
    date: "2026-01-19",
    readTime: "5 min read",
    excerpt:
      "Campaigns need reach, but reach without a business signal is just a graph doing theatre.",
    tags: ["Performance Marketing", "Analytics"],
    sections: [
      {
        heading: "Measure the movement that matters",
        body: [
          "Clicks, views, and impressions are useful only when they explain what happened next. A performance system should connect creative, targeting, landing pages, lead quality, revenue, and retention.",
          "The point is not to worship a dashboard. The point is to learn which message, audience, and offer combination is worth scaling."
        ]
      },
      {
        heading: "Creative is part of the math",
        body: [
          "Media buying cannot rescue weak positioning forever. Better creative improves the quality of attention, and better tracking shows which creative is actually doing useful work.",
          "That loop is where campaign efficiency usually comes from: sharper message, cleaner path, better signal, faster iteration."
        ]
      }
    ]
  },
  {
    slug: "websites-that-sell-before-the-form",
    title: "Websites That Sell Before the Form",
    date: "2026-01-26",
    readTime: "4 min read",
    excerpt:
      "A website should answer the buyer's doubts before asking them to become a lead.",
    tags: ["Website Design", "Conversion"],
    sections: [
      {
        heading: "The form is not the beginning",
        body: [
          "Most visitors decide whether a business feels credible before they reach the contact section. The page has to do the selling earlier: clear offer, specific proof, useful navigation, and a path that respects how people compare options.",
          "That means layout and content are not separate jobs. The structure must make the argument easier to scan."
        ]
      },
      {
        heading: "Design for comparison",
        body: [
          "Buyers rarely inspect a website in isolation. They compare you with alternatives, memory, budget, and internal politics. Good pages help them make that comparison quickly.",
          "Show what you do, who it is for, why it works, and what the next step looks like. Then the form has a fighting chance."
        ]
      }
    ]
  }
] as const satisfies readonly BlogPost[];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
