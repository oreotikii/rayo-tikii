export const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
    children: [
      { label: 'Main Home', href: '/' },
      { label: 'Software Development Company', href: '/home/software-development' },
      { label: 'Freelancer Portfolio', href: '/home/freelancer-portfolio' },
      { label: 'Digital Agency', href: '/home/digital-agency' },
      { label: 'Creative Design Studio', href: '/home/creative-design-studio' },
      { label: 'Personal Portfolio', href: '/home/personal-portfolio' },
      { label: 'Web Agency', href: '/home/web-agency' },
      { label: 'Creative Developer', href: '/home/creative-developer' },
      { label: 'Designer', href: '/home/designer' },
    ],
  },
  {
    label: 'Works',
    href: '/works',
    children: [
      { label: 'Portfolio', href: '/works' },
      { label: 'Works Masonry', href: '/works/masonry' },
      { label: 'Project Details', href: '/works/project-details' },
    ],
  },
  {
    label: 'Pages',
    href: '/about',
    children: [
      { label: 'About Me', href: '/about/me' },
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Our Team', href: '/team' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQ', href: '/faq' },
      { label: '404 Error', href: '/not-found' },
    ],
  },
  {
    label: 'Insights',
    href: '/blog',
    children: [
      { label: 'Blog Standard', href: '/blog' },
      { label: 'Blog Creative', href: '/blog/creative' },
      { label: 'Single Post', href: '/blog/article' },
    ],
  },
  { label: 'Contact', href: '/contact' },
] as const;

export const SITE_CONFIG = {
  name: 'Rayo',
  description:
    'Elevate your digital presence with Rayo - dynamic and stylish template designed for creative agencies and personal brands.',
  url: 'https://mixdesign.dev/themeforest/rayo',
  ogImage: '/img/og-image.jpg',
} as const;
