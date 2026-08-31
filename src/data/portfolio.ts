export const personal = {
  name: 'Jaheer Midde',
  title: 'Software Engineer II',
  tagline:
    'Frontend engineer at Verizon\'s enterprise telecom e-commerce platform - conversion, multi-device configuration, and production reliability across six Next.js micro-frontends serving ~60k cart sessions/day.',
  /** Sharp win - rendered on its own line in Hero for mobile readability */
  taglineProof: 'Improved p95 latency on an owned browse surface from 3.8s to 1.7s (55% faster).',
  photoUrl: '/Jaheer_Midde_DP.jpg',
  email: 'middejaheer36@gmail.com',
  company: 'Verizon',
  location: 'Hyderabad, India',
  github: 'https://github.com/JaheerMidde',
  linkedin: 'https://www.linkedin.com/in/midde-jaheer/',
  resume: '/Jaheer_Midde_s_Resume.pdf' as string | null,
  /** Set when ready: 'https://gitlab.com/your-username' */
  gitlab: null as string | null,
  /** Public source for this portfolio */
  portfolioRepo: 'https://github.com/JaheerMidde/portfolio',
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
  category: 'language' | 'framework' | 'database' | 'tooling' | 'platform' | 'backend';
  context?: string;
  /** When true, shown in the Core Strengths section */
  core?: boolean;
}

export const skills: Skill[] = [
  // Core strengths, each grounded in the case studies below
  { name: 'TypeScript', category: 'language', context: 'Primary language across six Next.js micro-frontend repositories', core: true },
  { name: 'React', category: 'framework', context: 'UI architecture for high-volume purchase flows', core: true },
  { name: 'Next.js', category: 'framework', context: 'Server-rendered and federated commerce surfaces', core: true },
  { name: 'Micro-frontends (Module Federation)', category: 'platform', context: 'Remote composition, shared dependencies, and cross-repository contracts', core: true },
  { name: 'Web Performance', category: 'platform', context: 'Request sequencing, render-path optimization, and CI performance budgets', core: true },
  { name: 'Design Systems', category: 'platform', context: 'Shared UI patterns and component contracts across product surfaces', core: true },

  // Supporting tools and patterns
  { name: 'Tailwind CSS', category: 'framework', context: 'Responsive styling across portfolio and product surfaces' },
  { name: 'TanStack Query', category: 'framework', context: 'Server-state management in catalog and federated remotes' },
  { name: 'Zustand', category: 'framework', context: 'Persistent device-context and cart UI state' },
  { name: 'SSR & Data Boundaries', category: 'platform', context: 'Server-rendering security boundaries and hydration-safe data' },
  { name: 'Feature Flags & Rollouts', category: 'platform', context: 'Graduated release and experiment control' },
  { name: 'Accessibility', category: 'platform', context: 'WCAG 2.1 practices on checkout and configurator surfaces' },
  { name: 'Jest', category: 'tooling', context: 'Unit coverage gates on squad-owned surfaces' },
  { name: 'Playwright', category: 'tooling', context: 'Golden-path end-to-end coverage in open-source demos' },
  { name: 'Lighthouse CI', category: 'tooling', context: 'Performance budgets enforced before merge' },
  { name: 'GitLab CI', category: 'tooling', context: 'Multi-repository delivery pipelines' },
  { name: 'Sonar', category: 'tooling', context: 'Static analysis and quality gates' },
  { name: 'Node.js & REST APIs', category: 'backend', context: 'Frontend integration and foundational backend knowledge' },
];

export interface ProjectMetric {
  label: string;
  before: string;
  after: string;
  unit?: string;
  display?: 'delta' | 'kpi';
}

export interface DecisionRecord {
  title: string;
  context: string;
  decision: string;
  outcome: string;
}

export interface ProjectArtifacts {
  decisionRecord?: DecisionRecord;
  perfFindings?: PerfFinding[];
  showApiSequence?: boolean;
  showStateDiagram?: boolean;
  showArchitecture?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  /** Outcome headline shown on collapsed card - unique per case study */
  headlineMetric: string;
  /** Explains the baseline, measurement type, or scope of the headline metrics */
  metricContext?: string;
  description: string;
  highlights: string[];
  tech: string[];
  badge?: string;
  color: string;
  icon: string;
  href?: string;
  repo?: string;
  problem?: string;
  approach?: string;
  outcome?: string;
  /** One line clarifying owned vs designed vs reviewed */
  myContribution?: string;
  technicalDeepDive?: string;
  metrics?: ProjectMetric[];
  artifacts?: ProjectArtifacts;
}

export interface PerfFinding {
  tool: string;
  finding: string;
  fix: string;
}

export const projects: Project[] = [
  {
    id: 'shopforge',
    title: 'ShopForge - Micro-Frontend E-Commerce Demo',
    subtitle: 'Module Federation · 3-app monorepo · Lighthouse CI',
    headlineMetric: '49 tests · 3 federated apps · LCP 919 ms · public repo',
    metricContext: 'Test total includes unit and E2E coverage; LCP and CLS are Lighthouse results for the demo catalog route.',
    description:
      'Open-source frontend-only micro-frontend e-commerce demo - App Router host, Pages Router remotes, shared singletons across federation boundaries, typed local catalog data, and cart-open bundle-pricing precomputation.',
    myContribution:
      'Frontend focus - Module Federation composition, flyout promo UI, shared query/cart state, local data adapter, CI with Lighthouse budgets, and ADRs.',
    metrics: [
      { label: 'Unit + E2E tests', before: '-', after: '49', display: 'kpi' },
      { label: 'Federated apps', before: '-', after: '3', display: 'kpi' },
      { label: 'Demo /catalog LCP', before: '-', after: '919 ms', display: 'kpi' },
      { label: 'CLS (Lighthouse)', before: '-', after: '0', display: 'kpi' },
    ],
    artifacts: {
      decisionRecord: {
        title: 'Hybrid App Router host + Pages Router remotes',
        context: '@module-federation/nextjs-mf blocks App Router in remotes; needed independent deploy without patching the plugin.',
        decision: 'App Router host consumes remotes via enhanced/runtime (client-side); catalog and cart remotes stay on Pages Router with NextFederationPlugin.',
        outcome: 'Officially supported MF path; host composes catalog PromoCarousel into cart flyout via promoSection slot.',
      },
    },
    highlights: [
      'npm workspaces monorepo - host, catalog-remote, cart-remote, shared packages',
      'Shared React, TanStack Query, and Zustand singletons across remote boundaries',
      'Playwright E2E + Lighthouse CI on pull requests',
      'ADRs and perf sequence diagrams in repo docs/',
    ],
    tech: ['Next.js', 'Module Federation', 'TypeScript', 'TanStack Query', 'Zustand', 'Jest', 'Playwright', 'Lighthouse CI'],
    badge: 'Open Source',
    color: 'from-violet-500 to-purple-600',
    icon: 'layers',
    href: 'http://localhost:3000/catalog',
    repo: 'https://github.com/JaheerMidde/shopforge',
  },
  {
    id: 'configstack',
    title: 'ConfigStack - Frontend Product Configurator',
    subtitle: 'Module Federation · Zustand · Local persistence · Playwright E2E',
    headlineMetric: '41 tests · persisted browser state · SSR-safe hydration · public repo',
    metricContext: 'Test total includes unit and E2E coverage; persistence refers to same-browser localStorage behavior.',
    description:
      'Open-source frontend-only product configurator - multi-device UI, typed local catalog fixtures, browser-persisted sessions and demo receipts, and a checkout flow with client-side dependency validation.',
    myContribution:
      'Frontend focus - configurator and checkout UI, persisted Zustand state, validation integration, and golden-path E2E.',
    metrics: [
      { label: 'Unit + E2E tests', before: '-', after: '41', display: 'kpi' },
      { label: 'Validation rule cases', before: '-', after: '21+', display: 'kpi' },
      { label: 'Checkout funnel', before: '-', after: '3 stages', display: 'kpi' },
      { label: 'Persistence', before: '-', after: 'localStorage', display: 'kpi' },
    ],
    artifacts: {
      decisionRecord: {
        title: 'Browser-persisted state with SSR-safe hydration',
        context: 'The configurator spans host and remote boundaries and must survive refreshes without hydration mismatches or exposing state in URLs.',
        decision: 'Persist the Zustand device-context stack plus local session and receipt records in browser localStorage; hydrate after mount and keep validation shared across client flows.',
        outcome: 'Phone, Watch, and Tablet selections survive tab switches and same-browser refreshes; production-only auth, inventory, final pricing, payments, and order writes remain behind a trusted server.',
      },
    },
    highlights: [
      'Typed public catalog fixtures and pure pricing helpers - no database or API process required',
      'Persisted Zustand state restores same-browser sessions and demo receipts',
      'Shared validation rules keep client-side dependency checks consistent across flows',
      'Production boundary documented for server-authoritative pricing, inventory, payments, and orders',
    ],
    tech: ['Next.js', 'Module Federation', 'TypeScript', 'TanStack Query', 'Zustand', 'Tailwind CSS', 'localStorage', 'Jest', 'Playwright', 'Lighthouse CI'],
    badge: 'Open Source',
    color: 'from-cyan-500 to-blue-600',
    icon: 'box',
    href: 'http://localhost:3000/configure',
    repo: 'https://github.com/JaheerMidde/configstack',
  },
  {
    id: 'ecommerce-platform',
    title: 'Cart Conversion & Performance',
    subtitle: 'High-Traffic Cart Surfaces · Offer Merchandising · Controlled Rollouts · Sub-2s Target',
    headlineMetric: 'Owned browse-surface p95 3.8s -> 1.7s · retention-offer conversion +12% relative · cart add-to-cart +8% relative',
    metricContext: 'Anonymized internal production results on owned e-commerce surfaces. The latency figure is p95 before and after optimization; percentage figures are relative lifts against a pre-change or control baseline; rollout exposure describes a controlled feature-flag progression. Measurement windows, exact traffic, dates, and sample sizes are omitted.',
    description:
      'Frontend engineer focussed on conversion at Verizon\'s enterprise telecom e-commerce platform - improving promotional merchandising, retention offers, and purchase journeys across high-volume browse and checkout surfaces.',
    myContribution:
      'Owned end-to-end: request sequencing design, offer render optimization, and controlled rollout architecture. Led code reviews; backend and QA coordinated integration and experiment operations.',
    problem:
      'High-traffic cart and offer surfaces exceeded performance targets and showed visible jank. A modal retention experience underperformed, while merchandising changes needed a safer path to production during peak traffic.',
    approach:
      'Moved the eligibility and pricing request earlier to run when the cart opened; optimized the promotional render path; integrated retention scoring with graduated feature-flag rollout; and replaced an intrusive modal experience with an in-page offer flow.',
    outcome:
      'On owned surfaces, p95 latency improved from 3.8s to 1.7s; a controlled retention-offer rollout delivered a 12% relative conversion lift; cart merchandising delivered an 8% relative add-to-cart lift; and full rollout completed with zero squad-owned release-day incidents.',
    technicalDeepDive:
      'The bottleneck came from rendering a full promotional experience before eligibility data arrived. I moved the eligibility and pricing request to cart-open, parallel with shell render, so data was available before first paint; deferred non-critical analytics; reduced cascading re-renders; and separated new and legacy experiences behind independent flags. Each change shipped through staged rollout with performance budgets enforced pre-merge.',
    metrics: [
      { label: 'Owned browse-surface p95 latency', before: '3.8s', after: '1.7s' },
      { label: 'Retention-offer relative conversion lift', before: 'pre-change/control', after: '+12%' },
      { label: 'Cart relative add-to-cart lift', before: 'pre-change/control', after: '+8%' },
      { label: 'Feature rollout exposure', before: '10% traffic', after: '100% traffic' },
    ],
    artifacts: {
      showArchitecture: true,
      showApiSequence: true,
      decisionRecord: {
        title: 'Fetch pricing data on cart open, not render',
        context: 'The promotional surface rendered before pricing and eligibility data arrived, blocking first paint and causing visible jank during peak traffic.',
        decision: 'Start the pricing and eligibility request when the cart opens - in parallel with shell render - and defer non-critical analytics off the critical path.',
        outcome: 'Promotional content paints with pricing data already in cache; sub-2s p95 on an owned browse surface during peak traffic.',
      },
      perfFindings: [
        {
          tool: 'Chrome DevTools Performance',
          finding: 'Long task (340ms) during promotional render blocked the main thread before pricing data resolved',
          fix: 'Parallelized pricing and eligibility fetch on cart open; deferred analytics hooks post-paint',
        },
        {
          tool: 'React Profiler',
          finding: 'Promotional content re-rendered 3x on cart open due to cascading state updates',
          fix: 'Batched eligibility state into a single update; memoized the item list',
        },
        {
          tool: 'Lighthouse CI',
          finding: 'LCP element (hero promo tile) delayed 2.1s by render-blocking API waterfall',
          fix: 'Pre-fetch on cart open brought LCP below the 2.1s performance target on staging attestation',
        },
      ],
    },
    highlights: [
      'Re-sequenced eligibility and pricing requests ahead of the promotional render path - eliminating visible jank during peak traffic',
      'Replaced an intrusive modal retention experience with an in-page offer flow on high-traffic purchase surfaces',
      'Optimized cart merchandising and delivered an 8% relative add-to-cart lift against the comparison baseline',
      'Integrated retention scoring with a graduated 10%->100% feature-flag rollout for controlled release',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Feature Flags', 'Jest', 'Lighthouse CI', 'TanStack Query', 'Module Federation'],
    badge: 'Production',
    color: 'from-accent-500 to-accent-600',
    icon: 'shopping-cart',
  },
  {
    id: 'design-system',
    title: 'Multi-Product Configurator Platform',
    subtitle: 'Cross-Device Configuration · Dependency Validation · UI Leadership',
    headlineMetric: 'Connected-device attach +18% relative · zero state loss · 76 MRs across 6 repos',
    metricContext: 'Anonymized internal production result on owned purchase flows. The attach-rate figure is a relative lift against a pre-change baseline; onboarding compares approximate durations; MR and repository counts describe H1 2026 leadership scope. Measurement window, exact traffic, and sample size are omitted.',
    description:
      'Core UI engineering for a Next.js multi-product device configurator spanning phones, wearables, and tablets - multi-device navigation, persistent state, and dependency validation across connected-device purchase journeys.',
    myContribution:
      'Designed the device-context state model and cross-category validation rules. Owned system design docs and final review on 76 MRs across 6 repositories; mentored the squad on configurator patterns and grooming.',
    problem:
      'Customers combining devices in mixed orders hit dead-end flows, lost configuration state between product pages and the configurator, and encountered blank pages when switching device contexts mid-journey. Connected-device attach rates lagged on bundle paths.',
    approach:
      'Engineered a device-context stack in client state for multi-product sessions; built cross-category dependency validation so selections and companion-device eligibility persist across product paths; and led system design, grooming, and code reviews for the purchase-flow UI group.',
    outcome:
      'Enabled bidirectional add journeys with zero data loss across device-context switches; connected-device attach rate delivered an 18% relative lift on bundle flows. Cut new-developer onboarding from ~3 weeks to ~1.5 weeks through structured knowledge-transfer sessions.',
    technicalDeepDive:
      'The configurator maintains a device-context stack in client state - when a user adds one device and navigates to another, the newest device becomes active while prior selections and eligibility decisions remain available. Cross-category logic validates dependencies before checkout rather than deferring them to the cart. I finalized approach docs, supported grooming, and conducted code reviews across six repositories - merging 76 MRs in H1 2026 with zero static-analysis issues and quality gates on every push.',
    metrics: [
      { label: 'Connected-device relative attach-rate lift', before: 'pre-change baseline', after: '+18%' },
      { label: 'MRs merged (H1 2026)', before: '-', after: '76', display: 'kpi' },
      { label: 'Developer onboarding time', before: '~3 wks', after: '~1.5 wks' },
      { label: 'Repositories involved', before: '-', after: '6', display: 'kpi' },
    ],
    artifacts: {
      showStateDiagram: true,
      decisionRecord: {
        title: 'Client-side device-context stack vs. URL-driven state',
        context: 'Multi-device journeys needed persistent configuration across page navigations without exposing sensitive purchase data in URL parameters.',
        decision: 'Maintain a device-context stack in client state with dependency validation during configuration; sync only non-sensitive selections to the URL for shareability.',
        outcome: 'Zero state loss on device-context switches; cross-category dependencies enforced before checkout, not at cart.',
      },
    },
    highlights: [
      'Built multi-device navigation - seamless switching between product categories without state loss',
      'Orchestrated connected-device bundle flows with an in-context path to add a companion product',
      'Contributed to purchase-flow engineering: system design, grooming, knowledge transfer, and code reviews across six repositories',
      'Delivered purchase-flow migrations and guided checkout integrations as a core UI point of contact',
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'Feature Flags', 'Jest', 'Sonar', 'Zustand', 'Module Federation'],
    badge: 'Platform',
    color: 'from-emerald-500 to-teal-600',
    icon: 'package',
  },
  {
    id: 'cms-platform',
    title: 'Production Reliability & Release Engineering',
    subtitle: 'SSR Data Boundary · Incident Triage · Launch Quality',
    headlineMetric: '~847 errors/wk -> 0 observed · launch MTTR 4h -> <60min · checkout completion +6% relative',
    metricContext: 'Anonymized internal production results on owned checkout surfaces. Error volume is a weekly before/after log comparison; zero means no observed errors during the post-fix window. MTTR is launch-window time to mitigation; checkout completion is a relative comparison against the pre-fix baseline. Measurement windows, exact traffic, dates, and sample sizes are omitted.',
    description:
      'Frontend owner of production stability for squad-owned e-commerce surfaces - triaging high-severity defects during flagship launches, enforcing security and coverage gates, and driving performance attestation across staging environments.',
    myContribution:
      'Owned the server-rendering migration, production defect triage, and cross-platform incident coordination. Designed attestation and coverage gates; QA and backend executed test plans and platform fixes.',
    problem:
      'A client-side data integration exposed sensitive eligibility fields during compliance review. An accessory purchase flow logged ~847 production errors per week, depressing checkout completion; the defect backlog aged during high-traffic launches with MTTR spiking above four hours.',
    approach:
      'Moved the sensitive eligibility fetch behind Next.js server-side rendering and stripped sensitive fields before hydration; triaged 25+ production defects using log analysis and triage tooling; coordinated fixes with backend and QA in incident sessions; and validated each fix across staged rollout regions before release.',
    outcome:
      'Closed the security finding through the SSR migration; reduced accessory-flow errors from ~847/week to zero observed on owned checkout surfaces while checkout completion delivered a 6% relative lift. Achieved zero carry-forward defects within squad scope, zero post-deployment rollbacks across consecutive flagship launches, and reduced launch-window MTTR from 4h+ to under 60 minutes.',
    technicalDeepDive:
      'The highest-impact frontend fix moved a sensitive eligibility integration from the client boundary to Next.js server-side rendering, stripped fields before hydration, and added tests for the boundary - closing the finding without changing the user-facing UI. Accessory-flow errors were a separate thread: recurring log patterns pointed to race conditions during multi-item sessions. I isolated the pattern in production logs, coordinated a root-cause fix with platform teams, and verified it in canary before regional promotion. Every feature ships with performance attestation and >90% unit test coverage as a defense against MTTR spikes on squad-owned surfaces.',
    metrics: [
      { label: 'Accessory errors/week observed', before: '~847', after: '0' },
      { label: 'Launch MTTR', before: '4h+', after: '<60m' },
      { label: 'Checkout completion relative lift', before: 'pre-fix', after: '+6%' },
      { label: 'Launch rollbacks', before: '-', after: '0', display: 'kpi' },
    ],
    artifacts: {
      decisionRecord: {
        title: 'Move sensitive eligibility data behind SSR',
        context: 'A client-side data integration exposed sensitive eligibility fields during security compliance review.',
        decision: 'Move the integration behind server-side rendering, strip sensitive fields before hydration, and add tests for the boundary.',
        outcome: 'Security finding closed with zero UI changes; sensitive eligibility data no longer crosses the client boundary.',
      },
      perfFindings: [
        {
          tool: 'Production log analysis',
          finding: '~847 accessory-flow errors/week from a race condition in multi-item purchase state',
          fix: 'Isolated pattern in logs, coordinated root-cause fix with platform teams, verified in canary',
        },
        {
          tool: 'Defect triage tooling',
          finding: '25+ high-severity defects aging during flagship launch windows',
          fix: 'War-room triage with backend/QA; zero carry-forward defects release-over-release',
        },
      ],
    },
    highlights: [
      'Moved sensitive eligibility data behind Next.js SSR for security clearance - protected fields no longer cross the client boundary',
      'Eliminated recurring accessory flow errors via log analysis and cross-platform root-cause fix on owned checkout surfaces',
      'War-room triage on 25+ high-severity defects during flagship launch windows with zero carry-forward release-over-release',
      'Zero rollbacks on squad-owned flagship releases across consecutive launch cycles',
    ],
    tech: ['Next.js', 'Jest', 'SSR', 'Sonar', 'GitLab CI', 'Jenkins', 'Accessibility (WCAG 2.1)'],
    badge: 'Production',
    color: 'from-violet-500 to-purple-600',
    icon: 'server',
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
  description: string;
  achievements: string[];
  collaboration?: string[];
  tech: string[];
  progression?: RoleProgression[];
}

export const experiences: Experience[] = [
  {
    company: 'Verizon',
    role: 'Software Engineer II',
    period: 'Feb 2022 - Present',
    location: 'Hyderabad, India',
    progression: [
      { role: 'Software Engineering Intern', period: 'Feb 2022 - Jun 2022' },
      { role: 'Software Engineer I', period: 'Jul 2022 - Nov 2023' },
      { role: 'Software Engineer II', period: 'Dec 2023 - Present' },
    ],
    description:
      'Core UI engineering for purchase-flow engineering on Verizon\'s enterprise telecom e-commerce platform - owning conversion improvements, multi-product configurator architecture, and production reliability across browse, configuration, and checkout micro-frontends serving high-volume customer journeys.',
    achievements: [
      'Contributed to conversion and offer experiences across browse and checkout micro-frontends',
      'Architected a multi-product configurator enabling persistent cross-device state and bidirectional add flows',
      'Owned production stability for squad surfaces - SSR security remediation, defect triage, and launch-window war rooms during flagship releases',
      'Shipped consecutive flagship launch cycles with coordinated cross-platform triage and no carry-forward defects on owned surfaces',
    ],
    collaboration: [
      'Contributed to purchase-flow engineering: system design, story grooming, approach finalization, and code reviews across 6 repositories',
      'Authored an RFC-style design doc on micro-frontend integration and semver upgrade paths - adopted as a squad standard for remote-entry contracts',
      'Conducted knowledge-transfer sessions on squad EPICs - cut new-developer onboarding from ~3 weeks to ~1.5 weeks; mentored junior engineers on platform architecture',
      'Primary UI liaison between feature flags, backend services, and QA - leading incident triage during flagship and holiday releases',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Micro-Frontends', 'Feature Flags', 'Jest', 'GitLab CI'],
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
    period: '2018 - 2022',
    location: 'Thanjavur, Tamil Nadu, India',
    score: '8.12 CGPA',
  },
  {
    institution: 'Bhavana Junior College',
    degree: 'Intermediate (MPC)',
    period: '2016 - 2018',
    location: 'Proddatur, Andhra Pradesh, India',
    score: '98.5%',
  },
  {
    institution: 'Sri Sangameswara High School',
    degree: 'SSC - 10th Class',
    period: '2016',
    location: 'Proddatur, Andhra Pradesh, India',
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
    description: 'Regular workouts - badminton, swimming, boxing, and whatever keeps things interesting.',
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

export interface BeyondWorkSignal {
  title: string;
  type: string;
  description: string;
}

/** Cross-squad contributions - RFCs, design docs, etc. Empty array hides the About section. */
export const beyondWorkSignals: BeyondWorkSignal[] = [
  {
    title: 'Module Federation Integration RFC',
    type: 'RFC',
    description:
      'Authored design doc on remote entry contracts and semver upgrade paths - adopted as squad standard for cross-repo micro-frontend integration.',
  },
];

/** Activity metrics - supporting detail, referenced only in Experience */
export const activityMetrics = {
  mergedMrs: '150+',
  productionItems: '230+',
  repositories: 'six',
};

export const siteMeta = {
  url: 'https://jaheermidde.vercel.app',
  ogImage: '/og-image.png',
  description:
    'Software Engineer II at Verizon - cart performance, configurator architecture, and production reliability. Open source: ShopForge and ConfigStack frontend demos.',
  builtWith: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS'],
  /** Shields.io badge for CI - update org/repo if different on GitHub */
  ciBadgeUrl: 'https://img.shields.io/github/actions/workflow/status/JaheerMidde/portfolio/ci.yml?branch=main&label=CI',
  ciWorkflowUrl: 'https://github.com/JaheerMidde/portfolio/actions',
};
