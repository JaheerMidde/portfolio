export const personal = {
  name: 'Jaheer Midde',
  title: 'Frontend Engineer',
  tagline:
    'I build fast, accessible web applications with React, Next.js, and TypeScript — from customer-facing products serving millions of users to shared platforms adopted by 3+ product teams.',
  email: 'middejaheer36@gmail.com',
  company: 'Verizon',
  location: 'Hyderabad, India',
  github: 'https://github.com/JaheerMidde',
  linkedin: 'https://www.linkedin.com/in/midde-jaheer/',
  resume: './public/Jaheer_Midde_s_Resume.pdf' as string | null,
  /** Set when ready: 'https://gitlab.com/your-username' */
  gitlab: null as string | null,
  /** Optional link to this portfolio's source repo */
  portfolioRepo: null as string | null,
  /** Optional Cal.com / Calendly URL - when set, used instead of the Google Calendar invite flow */
  calendarUrl: null as string | null,
  /** Pre-filled calendar invite when calendarUrl is not set */
  calendarInvite: {
    title: 'Chat with Jaheer Midde',
    details: '30-minute intro call about full-time frontend opportunities.',
    durationMinutes: 30,
  },
};

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tooling' | 'platform';
  level: 'expert' | 'proficient' | 'familiar';
  context?: string;
}

export const skills: Skill[] = [
  // Languages
  { name: 'TypeScript', category: 'language', level: 'expert', context: 'Primary language across 4 production apps' },
  { name: 'JavaScript', category: 'language', level: 'expert' },
  { name: 'HTML5 & CSS3', category: 'language', level: 'expert' },

  // Frameworks & Libraries
  { name: 'React', category: 'framework', level: 'expert', context: 'Buy flows used by millions of customers' },
  { name: 'Next.js', category: 'framework', level: 'expert', context: 'SSR catalog pages at enterprise scale' },
  { name: 'Node.js', category: 'framework', level: 'proficient' },
  { name: 'Tailwind CSS', category: 'framework', level: 'expert' },
  { name: 'TanStack Query', category: 'framework', level: 'proficient' },
  { name: 'Zustand / Redux', category: 'framework', level: 'proficient' },

  // Tooling
  { name: 'Jest & Testing Library', category: 'tooling', level: 'expert', context: '90% coverage gate enforced in CI' },
  { name: 'GitLab CI', category: 'tooling', level: 'proficient' },
  { name: 'Jenkins', category: 'tooling', level: 'proficient' },
  { name: 'Vite', category: 'tooling', level: 'proficient', context: 'Build and bundling for this portfolio' },

  // Platforms & Patterns
  { name: 'Micro-Frontends', category: 'platform', level: 'expert' },
  { name: 'Module Federation', category: 'platform', level: 'proficient' },
  { name: 'Design Systems', category: 'platform', level: 'expert', context: 'Shared library consumed by 3 apps' },
  { name: 'Web Performance', category: 'platform', level: 'expert', context: 'Lighthouse CI budgets in every pipeline' },
  { name: 'Accessibility (WCAG)', category: 'platform', level: 'proficient' },
  { name: 'SSR & Headless CMS', category: 'platform', level: 'proficient' },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  badge?: string;
  color: string;
  icon: string;
  href?: string;
  repo?: string;
}

export interface PerfFinding {
  tool: string;
  finding: string;
  fix: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Web Platform',
    subtitle: 'React · Next.js · Micro-Frontends',
    description:
      'Full-stack frontend work on a high-traffic consumer e-commerce platform used by millions of customers. Owned purchase flows from browsing through checkout across 3 micro-frontend apps — authoring 120+ merged MRs in production.',
    highlights: [
      'Owned responsive, accessible purchase flows serving millions of customers across peak traffic windows',
      'Reduced flyout cart render jank during high-traffic promotional periods, improving interaction smoothness on bundle-heavy selections',
      'Shipped multiple in-page A/B tests across product and checkout layers in production, enabling data-driven conversion optimization at the purchase decision point',
      'Maintained 90% Jest coverage threshold in CI across buy-flow pages, blocking regressions before merge',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Module Federation', 'Jest', 'Design System'],
    badge: 'Production',
    color: 'from-indigo-500 to-purple-600',
    icon: 'shopping-cart',
  },
  {
    id: 'design-system',
    title: 'Design System & Component Library',
    subtitle: 'React · Shared UI Platform',
    description:
      'Contributed to a shared React component library consumed by 3 production micro-frontend apps. Focused on consistency, semver releases, and coordinated upgrades so teams ship UI faster with fewer regressions.',
    highlights: [
      'Built and maintained reusable UI components with tests and documented usage patterns, adopted across 3 production applications',
      'Enforced visual and behavioral consistency across 3 web applications, eliminating duplicated component implementations per team',
      'Coordinated same-day semver releases during revenue-impacting production hotfixes, keeping all consuming apps on compatible library versions',
      'Established review standards that kept the shared library stable across 3 consuming teams during major version bumps',
    ],
    tech: ['TypeScript', 'React', 'Jest', 'Testing Library'],
    badge: 'Platform',
    color: 'from-emerald-500 to-teal-600',
    icon: 'package',
  },
  {
    id: 'cms-platform',
    title: 'Content-Driven Web Platform',
    subtitle: 'Headless CMS · Server-Side Rendering',
    description:
      'Worked on server-rendered e-commerce sites powered by a headless CMS across 2 production platforms. Delivered marketing pages, authenticated shopping experiences, and post-purchase content managed by non-engineering teams.',
    highlights: [
      'Built SSR pages and templates integrated with a headless CMS, serving millions of authenticated and guest shopping sessions',
      'Delivered post-purchase gift-card and order-confirmation features, restoring high-visibility conversion touchpoints for deferred-payment customers',
      'Expanded E2E regression coverage across authenticated and prepay shopping flows, reducing release risk on high-traffic SSR pages',
      'Resolved post-purchase offer and trade-in propagation defects across 2 SSR platforms, ensuring promotional context followed users through the full purchase journey',
    ],
    tech: ['JavaScript', 'AEM / Headless CMS', 'SSR', 'Feature Flags'],
    badge: 'Production',
    color: 'from-orange-500 to-rose-600',
    icon: 'server',
  },
  {
    id: 'shopforge',
    title: 'ShopForge - Micro-Frontend E-Commerce Demo',
    subtitle: 'Next.js · Module Federation · 3-app monorepo',
    description:
      'Open-source reference implementation for independently deployed catalog and cart surfaces. It demonstrates a Next.js host with two Module Federation remotes, shared state across federation boundaries, typed local catalog data, and cart/promotion flows.',
    highlights: [
      'Reference architecture for 3 federated apps with independently deployable catalog and cart surfaces',
      '919 ms catalog-route LCP and CLS 0 under Lighthouse CI',
      '49 unit/E2E tests covering core browse and cart behavior',
      'Shared React, TanStack Query, and Zustand state across federation boundaries',
    ],
    tech: ['Next.js', 'Module Federation', 'TypeScript', 'TanStack Query', 'Zustand', 'Jest', 'Playwright', 'Lighthouse CI'],
    badge: 'Open Source',
    color: 'from-violet-500 to-purple-600',
    icon: 'shopping-cart',
    repo: 'https://github.com/JaheerMidde/shopforge',
  },
  {
    id: 'configstack',
    title: 'ConfigStack - Multi-Device Product Configurator',
    subtitle: 'Next.js · Zustand · SSR-safe hydration · Playwright',
    description:
      'Open-source reference implementation for Phone, Watch, and Tablet checkout flows where selections must survive navigation and refresh. It uses typed local catalog fixtures, browser-persisted sessions, demo receipts, and shared dependency validation without a backend.',
    highlights: [
      '3-stage checkout funnel with persisted same-browser sessions',
      '21+ dependency-validation cases across cross-device selections',
      '41 unit/E2E tests covering configuration, persistence, and checkout paths',
      'Production boundary documented for server-authoritative pricing, inventory, payments, and orders',
    ],
    tech: ['Next.js', 'Module Federation', 'TypeScript', 'TanStack Query', 'Zustand', 'Jest', 'Playwright'],
    badge: 'Open Source',
    color: 'from-cyan-500 to-blue-600',
    icon: 'package',
    repo: 'https://github.com/JaheerMidde/configstack',
  },
];

export interface RoleProgression {
  role: string;
  period: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  progression: RoleProgression[];
  description: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Verizon',
    role: 'Software Engineer II',
    period: 'Feb 2022 – Present',
    location: 'Hyderabad, India',
    progression: [
      { role: 'Software Engineering Intern', period: 'Feb 2022 – Jun 2022' },
      { role: 'Software Engineer I', period: 'Jul 2022 – Dec 2023' },
      { role: 'Software Engineer II', period: 'Dec 2023 – Present' },
    ],
    description:
      'Software engineer on customer-facing web products at enterprise scale — 150+ merged MRs and 230+ production items shipped across 4 codebases since 2022.',
    achievements: [
      'Authored 150+ merged MRs across browse, configurator, and checkout micro-frontends serving millions of users',
      'Resolved 230+ production defects spanning cart, checkout, promotions, and browse flows with sustained ownership from 2023 through 2026',
      'Owned end-to-end delivery on revenue-impacting features — from implementation and 90% test coverage through same-day cross-repo production hotfixes',
      'Coordinated semver releases of a shared component library consumed by 3 apps, aligning consuming teams during critical cart and checkout fixes',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Micro-Frontends', 'Design Systems', 'Headless CMS', 'Jest', 'GitLab CI', 'Jenkins'],
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
}

export const education: Education[] = [
  {
    institution: 'SASTRA Deemed University',
    degree: 'B.Tech - Information & Communication Technology',
    period: '2018 – 2022',
    location: 'Thanjavur, India',
    score: '8.12 CGPA',
  },
  {
    institution: 'Bhavana Junior College',
    degree: 'Intermediate (MPC)',
    period: '2016 – 2018',
    location: 'Proddatur, India',
    score: '98.5%',
  },
  {
    institution: 'Sri Sangameswara High School',
    degree: 'SSC - 10th Class',
    period: '2016',
    location: 'India',
    score: '9.8 CGPA',
  },
];

export interface PersonalInterest {
  icon: string;
  title: string;
  description: string;
}

export const personalInterests: PersonalInterest[] = [
  {
    icon: 'activity',
    title: 'Active Lifestyle',
    description: 'Regular workouts — badminton, swimming, boxing, and whatever keeps things interesting.',
  },
  {
    icon: 'film',
    title: 'Cinema',
    description: 'I follow film closely and rarely miss a well-reviewed release.',
  },
  {
    icon: 'utensils',
    title: 'Food & Travel',
    description: 'Exploring new restaurants and places on weekends.',
  },
];

export const siteMeta = {
  url: 'https://jaheermidde.dev',
  ogImage: '/og-image.svg',
  builtWith: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
};
