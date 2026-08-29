export const personal = {
  name: 'Jaheer Midde',
  title: 'Software Engineer II · Frontend UI Lead',
  tagline:
    'Frontend UI lead for Verizon e-commerce – cart conversion, configurator architecture, and production reliability across 6-repo Next.js micro-frontends handling ~60k cart sessions/day.',
  /** Sharp win - rendered on its own line in Hero for mobile readability */
  taglineProof: 'Unlocked Offers p95 3.8s -> 1.7s (55% faster) on an owned browse surface.',
  photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQEHyvtv1C4hrw/profile-displayphoto-crop_800_800/B56Z3Yl2JfJ8AI-/0/1777455294894?e=1789603200&v=beta&t=0GVJpKHXVqUr7yAZqkcR0SlHXPkmel1klhw0z5mi_S0",
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
  level: 'expert' | 'proficient' | 'familiar';
  context?: string;
  /** When true, shown in the Core Strengths section */
  core?: boolean;
}

export const skills: Skill[] = [
  // Core - highlighted in Skills section; each backed by a case study below
  { name: 'TypeScript', category: 'language', level: 'expert', context: 'Primary language across e-commerce micro-frontends', core: true },
  { name: 'JavaScript', category: 'language', level: 'proficient', context: 'Runtime and tooling across both project monorepos' },
  { name: 'HTML', category: 'language', level: 'proficient', context: 'Semantic structure across product and checkout surfaces' },
  { name: 'CSS', category: 'language', level: 'proficient', context: 'Responsive styling with Tailwind CSS' },
  { name: 'React', category: 'framework', level: 'expert', context: 'High-volume customer buy flows', core: true },
  { name: 'Next.js', category: 'framework', level: 'expert', context: 'Configurator, cart, and checkout at scale', core: true },
  { name: 'Micro-Frontends', category: 'platform', level: 'expert', context: 'Module Federation across browse, configurator, checkout', core: true },
  { name: 'Module Federation', category: 'platform', level: 'expert', context: 'Runtime remotes and shared singletons across project monorepos' },
  { name: 'Design Systems', category: 'platform', level: 'expert', context: 'Shared UI components across product surfaces', core: true },
  { name: 'Web Performance', category: 'platform', level: 'expert', context: 'SRE <2s targets, Lighthouse CI in every pipeline', core: true },

  // Frameworks & libraries
  { name: 'Tailwind CSS', category: 'framework', level: 'proficient', context: 'Utility-first UI on portfolio and product surfaces' },
  { name: 'TanStack Query', category: 'framework', level: 'proficient', context: 'Server state in cart, catalog, and federated remotes' },
  { name: 'Zustand', category: 'framework', level: 'proficient', context: 'Device-context stack and cart UI state' },

  // Platform & patterns
  { name: 'SSR & Data Boundaries', category: 'platform', level: 'proficient', context: 'Plan sanitization, security remediation, hydration' },
  { name: 'Feature Flags & Rollouts', category: 'platform', level: 'proficient', context: 'Graduated A/B throttling for ML cart closers' },
  { name: 'Accessibility', category: 'platform', level: 'proficient', context: 'WCAG 2.1 on checkout and configurator surfaces' },
  { name: 'E-Commerce Systems', category: 'platform', level: 'expert', context: 'Cart conversion, configurators, and checkout funnels' },

  // Testing & CI
  { name: 'Jest', category: 'tooling', level: 'proficient', context: '>90% coverage gates on squad-owned surfaces' },
  { name: 'Playwright', category: 'tooling', level: 'proficient', context: 'Golden-path E2E in ShopForge and ConfigStack' },
  { name: 'Lighthouse CI', category: 'tooling', level: 'proficient', context: 'Performance budgets enforced pre-merge' },
  { name: 'GitLab CI', category: 'tooling', level: 'proficient', context: 'Multi-repo pipelines across 6 e-commerce repos' },
  { name: 'Sonar', category: 'tooling', level: 'proficient', context: 'Static analysis and quality gates on every push' },
  { name: 'Git', category: 'tooling', level: 'proficient', context: 'Version control and collaboration across project repos' },

  // Backend & APIs
  { name: 'Node.js', category: 'backend', level: 'familiar', context: 'Foundational backend knowledge' },
  { name: 'Express.js', category: 'backend', level: 'familiar', context: 'Basic familiarity with REST service concepts' },
  { name: 'MongoDB', category: 'backend', level: 'familiar', context: 'Basic familiarity with document storage' },
  { name: 'Mongoose', category: 'backend', level: 'familiar', context: 'Basic MongoDB model integration' },
  { name: 'REST APIs', category: 'backend', level: 'familiar', context: 'Frontend integration, request flows, and response handling' },
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
      'Open-source frontend-only micro-frontend e-commerce demo – App Router host, Pages Router remotes, shared singletons across federation boundaries, typed local catalog data, and cart-open bundle-pricing precomputation.',
    myContribution:
      'Frontend focus – Module Federation composition, flyout promo UI, shared query/cart state, local data adapter, CI with Lighthouse budgets, and ADRs.',
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
      'ADRs and perf sequence diagrams in repo docs',
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
      'Open-source frontend-only product configurator – multi-device UI, typed local catalog fixtures, browser-persisted sessions and demo receipts, and a checkout flow with client-side dependency validation.',
    myContribution:
      'Frontend focus – configurator and checkout UI, persisted Zustand state, validation integration, and golden-path E2E.',
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
    subtitle: 'Save the Sale · Promotional Flyout · ML Retention · Sub-2s SRE',
    headlineMetric: 'Unlocked Offers p95 3.8s -> 1.7s · Save the Sale +12% relative lift · flyout add-to-cart +8% relative lift',
    metricContext: 'p95 is the 95th-percentile latency measure; percentage figures are relative lifts against the stated baselines; 10%-100% describes rollout exposure.',
    description:
      'UI lead for cart conversion on Verizon\'s Next.js e-commerce platform - Save the Sale gift-card closers, Buy More Save More flyout merchandising, and ML-based retention scoring for cart closers across high-volume purchase and upgrade journeys.',
    myContribution:
      'Owned end-to-end: API re-sequencing design, flyout render optimization, and ML closer rollout architecture. Led code reviews; backend and QA coordinated on integration and A/B throttling.',
    problem:
      'Flyout cart and Unlocked Offers pages exceeded SRE latency targets during promotional traffic, causing visible jank on the highest-traffic browse surfaces. Save the Sale gift-card closers ran as intrusive modals with low conversion, and promotional flyout merchandising underperformed on add-to-cart during peak campaigns.',
    approach:
      'Re-architected the bundle-pricing API call sequence to fire on cart open instead of after carousel mount; optimized promotional carousel rendering in the flyout cart; integrated ML retention scoring with graduated traffic throttling (10%-100%) behind a feature flag platform; replaced modal closers with in-page Save the Sale flows.',
    outcome:
      'Delivered measurable conversion lift on cart surfaces – Save the Sale gift-card closer conversion delivered a relative lift of 12%, and promotional flyout add-to-cart rate delivered a relative lift of 8%. Eliminated visible jank on the flyout cart during peak traffic and shipped ML-driven in-page closers at full rollout with zero squad-owned release-day incidents during flagship launch windows.',
    technicalDeepDive:
      'The flyout cart bottleneck came from rendering the full promotional carousel before bundle eligibility data arrived. I moved the bundle-pricing fetch earlier in the React lifecycle – triggering it on cart open rather than after carousel mount – so pricing and stackability rules were available before the first paint. Non-critical analytics hooks were deferred off the critical path. For ML cart closers, I built a split-flag architecture separating the new platform from legacy flows, allowing independent A/B throttling without cross-contamination. Each change shipped behind feature flags with Lighthouse CI budgets enforced pre-merge.',
    metrics: [
      { label: 'Save the Sale relative conversion lift', before: 'pre-rollout', after: '+12%' },
      { label: 'Flyout relative add-to-cart lift', before: 'pre-optimization', after: '+8%' },
      { label: 'ML closer traffic rollout', before: '10% traffic', after: '100% traffic' },
      { label: 'Modal -> in-page closers', before: 'modal', after: 'in-page' },
    ],
    artifacts: {
      showArchitecture: true,
      showApiSequence: true,
      decisionRecord: {
        title: 'Fetch bundle pricing on cart open, not carousel mount',
        context: 'Promotional flyout rendered the full carousel before bundle eligibility data arrived, blocking first paint and causing visible jank during peak traffic.',
        decision: 'Move the bundle-pricing API call to fire on cart open - parallel with shell render - and defer non-critical analytics off the critical path.',
        outcome: 'Carousel paints with pricing data already in cache; sub-2s p95 on Unlocked Offers during peak promo traffic.',
      },
      perfFindings: [
        {
          tool: 'Chrome DevTools Performance',
          finding: 'Long task (340ms) on carousel mount blocked main thread before bundle API resolved',
          fix: 'Parallelized bundle-pricing fetch on cart open; deferred analytics hooks post-paint',
        },
        {
          tool: 'React Profiler',
          finding: 'PromotionalCarousel re-rendered 3x on cart open due to cascading state updates',
          fix: 'Batched eligibility state into single update; memoized carousel item list',
        },
        {
          tool: 'Lighthouse CI',
          finding: 'LCP element (hero promo tile) delayed 2.1s by render-blocking API waterfall',
          fix: 'Pre-fetch on cart open brought LCP below the 2.1s SRE target on staging attestation',
        },
      ],
    },
    highlights: [
      'Re-sequenced bundle-pricing API calls ahead of carousel render - eliminated visible jank on promotional flyout cart during peak traffic',
      'Shipped in-page Save the Sale gift-card closers (multi-tier $100/$200/$270+) replacing intrusive modals on high-traffic cart surfaces',
      'Optimized flyout merchandising render path - measurable add-to-cart lift during peak campaign windows',
      'Integrated ML-driven cart closers with propensity scoring and graduated 10%-100% traffic throttle for controlled rollout',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Feature Flags', 'Jest', 'Lighthouse CI', 'TanStack Query', 'Module Federation'],
    badge: 'Production',
    color: 'from-accent-500 to-accent-600',
    icon: 'shopping-cart',
  },
  {
    id: 'design-system',
    title: 'Multi-Product Configurator Platform',
    subtitle: 'Cross-Device Journeys · Plan Stacking · Squad UI Lead',
    headlineMetric: 'Watch+Phone attach +18% relative lift · zero state loss on device switches · 76 MRs merged across 6 repos',
    metricContext: 'The attach-rate figure is a relative lift versus the stated baseline; onboarding times compare approximate durations; MRs and repository counts describe H1 2026 leadership scope.',
    description:
      'Core UI lead for a Next.js device configurator spanning smartphones, watches, and tablets – multi-device navigation, cross-device state persistence, and complex plan-stacking logic across connected-device buy journeys.',
    myContribution:
      'Designed the device-context state machine and cross-category validation rules. Owned system design docs and final review on 76 MRs across 6 repos; mentored squad on configurator patterns and grooming.',
    problem:
      'Customers adding watches, tablets, and phones in mixed orders hit dead-end flows, lost configuration state between product pages and the configurator, and encountered blank pages when switching device contexts mid-journey. Multi-device attach rates lagged on Watch+Phone bundling paths.',
    approach:
      'Engineered a device-context stack in client state for multi-product sessions; built cross-category dependency validation so attributes and Number Share eligibility persist across Watch -> Phone -> Configurator paths; led system design, grooming, and code reviews for the cart & promotions UI squad.',
    outcome:
      'Enabled bi-directional add journeys (Watch->Phone or Phone->Watch) with zero data loss across device-context switches; multi-device attach rate delivered a relative lift of 18% on Watch+Phone bundling flows. Delivered promo selection flows for major campaigns and cut new-developer onboarding from ~3 weeks -> 1.5 weeks via structured knowledge-transfer sessions.',
    technicalDeepDive:
      'The configurator maintains a device-context stack in client state - when a user adds a smartwatch then navigates to add a phone, the configurator auto-focuses the newest device while persisting prior selections (case/band/size variants, Number Share eligibility, plan tier). Cross-category logic validates dependencies before checkout: a Number Share watch requires an eligible phone line, enforced at config time rather than cart. As UI lead for the cart & promotions squad, I finalize approach docs, lead grooming, and conduct code reviews across 6 repositories – merging 76 MRs in H1 2026 with zero static-analysis issues and Sonar quality gates on every push.',
    metrics: [
      { label: 'Watch+Phone relative attach-rate lift', before: 'pre-state machine', after: '+18%' },
      { label: 'MRs merged (H1 2026)', before: '-', after: '76', display: 'kpi' },
      { label: 'Developer onboarding time', before: '~3 wks', after: '~1.5 wks' },
      { label: 'Repositories led', before: '-', after: '6', display: 'kpi' },
    ],
    artifacts: {
      showStateDiagram: true,
      decisionRecord: {
        title: 'Client-side device-context stack vs. URL-driven state',
        context: 'Multi-device journeys (Watch->Phone->Tablet) needed persistent config across page navigations without exposing internal plan data in URL params.',
        decision: 'Maintain a device-context stack in client state with dependency validation at config time; sync only non-sensitive selections to URL for shareability.',
        outcome: 'Zero state loss on device-context switches; Number Share dependencies enforced before checkout, not at cart.',
      },
    },
    highlights: [
      'Built multi-device navigation - seamless toggle between Phone, Watch, and Tablet in a single session without state loss',
      'Orchestrated Watch+Phone bundling with in-flow "Shop Phone" from Number Share modal, driving multi-device attachment',
      'UI lead for cart & promotions squad: system design, grooming, knowledge transfer, and code reviews across 6 repos',
      'Delivered Pay Off Your Phone migration and chatbot-to-checkout integration as core UI POC on the e-commerce platform',
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'Feature Flags', 'Jest', 'Sonar', 'Zustand', 'Module Federation'],
    badge: 'Platform',
    color: 'from-emerald-500 to-teal-600',
    icon: 'package',
  },
  {
    id: 'cms-platform',
    title: 'Production Reliability & Release Engineering',
    subtitle: 'SSR Security Fix · Defect Triage · Launch Quality',
    headlineMetric: '847 accessory errors/wk -> 0 · launch MTTR 4h -> <60min · checkout completion +6% relative lift',
    metricContext: 'Error and MTTR values are weekly or launch-window measures on owned surfaces; checkout completion shows a relative lift versus the pre-fix baseline.',
    description:
      'Frontend owner of production stability for squad-owned e-commerce surfaces – triaging Blocker/Critical defects during flagship device launch windows, enforcing security and coverage gates, and driving performance attestation across staging environments.',
    myContribution:
      'Owned SSR migration design and implementation, production defect triage, and cross-platform war-room coordination. Designed attestation and coverage gates; QA and backend executed test plans and platform fixes.',
    problem:
      'A client-side API integration exposed plan eligibility data flagged in security compliance review. Accessory purchase flows logged ~847 production errors per week, depressing checkout completion; defect backlog aged during high-traffic device launches with MTTR spiking to 4+ hours.',
    approach:
      'Re-architected the vulnerable client-side fetch to Next.js server-side rendering, stripping sensitive fields before hydration; triaged 25+ production defects using log analysis and internal triage tooling; coordinated cross-platform fixes with backend and QA in war-room sessions; validated every fix across staged rollout regions before release.',
    outcome:
      'Closed the security finding via SSR migration; brought accessory flow system errors from 847/week -> 0 on owned checkout surfaces with checkout completion delivering a relative lift of 6%. Zero carry-forward defects release-over-release within squad scope; zero post-deployment rollbacks on iPhone 17 and Samsung S25 releases; MTTR during launch windows reduced from 4h -> <60min.',
    technicalDeepDive:
      'The highest-impact frontend fix was migrating a plan-eligibility API integration from client-side fetch to Next.js server-side rendering. The client bundle had been exposing plan eligibility data in network responses flagged by security review. I moved the fetch into getServerSideProps, stripped sensitive fields before hydration, and added Jest tests for the SSR boundary – closing the finding without changing the user-facing UI. Accessory flow errors were a separate thread: recurring log patterns pointed to race conditions in add-to-cart state during multi-item sessions. I isolated the pattern in production logs, coordinated a root-cause fix with platform teams, and verified in canary before east/west promotion. Every feature ships with performance attestation and >90% unit test coverage as primary defense against MTTR spikes on squad-owned surfaces.',
    metrics: [
      { label: 'Accessory errors/wk', before: '847', after: '0' },
      { label: 'Launch MTTR', before: '4h+', after: '<60m' },
      { label: 'Checkout completion relative lift', before: 'pre-fix', after: '+6%' },
      { label: 'Launch rollbacks', before: '-', after: '0', display: 'kpi' },
    ],
    artifacts: {
      decisionRecord: {
        title: 'Migrate plan-eligibility fetch from client to SSR',
        context: 'Client-side fetch exposed plan eligibility data in network responses, flagged in security compliance review.',
        decision: 'Move fetch to getServerSideProps, strip sensitive fields before hydration; add Jest tests for the SSR boundary.',
        outcome: 'Security finding closed with zero UI changes; client bundle no longer exposes eligibility data.',
      },
      perfFindings: [
        {
          tool: 'Production log analysis',
          finding: '847 accessory flow errors/week from race condition in multi-item add-to-cart state',
          fix: 'Isolated pattern in logs, coordinated root-cause fix with platform teams, verified in canary',
        },
        {
          tool: 'Defect triage tooling',
          finding: '25+ Blocker/Critical defects aging during iPhone/Samsung launch windows',
          fix: 'War-room triage with backend/QA; zero carry-forward defects release-over-release',
        },
      ],
    },
    highlights: [
      'Migrated client-side API to Next.js SSR for security clearance - sensitive plan data no longer exposed in client bundles',
      'Eliminated recurring accessory flow errors via log analysis and cross-platform root-cause fix on owned checkout surfaces',
      'War-room triage on 25+ Blocker/Critical defects during flagship launch windows with zero carry-forward release-over-release',
      'Zero rollbacks on squad-owned iPhone 17 and Samsung S25 releases across consecutive launch cycles',
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
  leadership?: string[];
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
      'Core UI lead for cart & promotions engineering on Verizon\'s customer-facing e-commerce platform - owning cart conversion, multi-product configurator architecture, and production reliability across browse, configurator, and checkout micro-frontends serving high-volume customer journeys.',
    achievements: [
      'Cart & promotions UI lead - Save the Sale, promotional flyout merchandising, and ML retention closers across browse and checkout micro-frontends',
      'Architected multi-device configurator enabling Watch+Phone+Tablet journeys with persistent cross-device state and bi-directional add flows',
      'Owned production stability for squad surfaces - SSR security remediation, defect triage, and launch-window war rooms during flagship releases',
      'Shipped consecutive iPhone and Samsung launch cycles with coordinated cross-platform triage and no carry-forward defects on owned surfaces',
    ],
    leadership: [
      'UI lead for cart & promotions squad: system design, story grooming, approach finalization, and code reviews across 6 repositories',
      'Authored RFC-style design doc on Module Federation integration and semver upgrade paths - adopted as squad standard for cross-repo remote entry contracts',
      'Conducted knowledge-transfer sessions on squad EPICs - cut new-developer onboarding from ~3 weeks -> 1.5 weeks; mentored junior engineers on platform architecture',
      'Primary UI liaison between the feature flag platform, backend services, and QA - leading war-room triage during flagship device and holiday releases',
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
    'Frontend UI lead at Verizon - cart performance, configurator architecture, and production reliability. Open source: ShopForge and ConfigStack frontend demos.',
  builtWith: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS'],
  /** Shields.io badge for CI - update org/repo if different on GitHub */
  ciBadgeUrl: 'https://img.shields.io/github/actions/workflow/status/JaheerMidde/portfolio/ci.yml?branch=main&label=CI',
  ciWorkflowUrl: 'https://github.com/JaheerMidde/portfolio/actions',
};
