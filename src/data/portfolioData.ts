import { Project, SkillItem, ArchitecturePattern } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Michael Lubega',
  title: 'Software Engineer',
  specialization: 'Mobile Application Architecture & Backend Systems',
  location: 'Kampala, Uganda',
  email: 'michaeldieve@gmail.com',
  github: 'https://github.com/michaellubega',
  githubPages: 'https://michaellubega.github.io',
  githubPagesProject: 'https://michaellubega.github.io/portfolio',
  bio: 'Specialized in cross-platform mobile engineering with Flutter and Dart, backed by clean API design, persistent offline storage, and modern backend architectures in Python & Django. Focused on crafting robust, human-centered digital experiences for real-world commerce, financial tooling, and network operations.',
  avatar: '/assets/aistudio/20261015_154125_b4158b69.jpg',
  stats: [
    { label: 'Core Projects', value: '4 Flagship', sub: 'ChazaApp, u_panel, Moneta, Kabox' },
    { label: 'Mobile Architecture', value: '100% Native-feel', sub: 'Flutter, Provider & Hive' },
    { label: 'Backend & Data', value: 'Hybrid Ready', sub: 'Django, PostgreSQL & Firebase' },
    { label: 'Network & Security', value: 'Hardened', sub: 'JWT, OTP, App Check & MikroTik' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'chazaapp',
    title: 'ChazaApp',
    tagline: 'Local business discovery and customer connection ecosystem',
    category: 'mobile',
    categoryLabel: 'Mobile & Geo-Discovery',
    description: 'A comprehensive mobile commerce platform enabling users to discover nearby businesses, browse real-time product catalogs, initiate direct customer-to-merchant chats, and view dynamic location pins via integrated Google Maps. Designed with an offline-first catalog cache and resilient state management.',
    role: 'Lead Mobile Architect & Full-Stack Developer',
    timeline: 'Production Project',
    githubUrl: 'https://github.com/michaellubega/chazaapp',
    liveDemoAvailable: true,
    featured: true,
    technologies: [
      'Flutter',
      'Dart',
      'Google Maps SDK',
      'Firebase Firestore',
      'Provider',
      'Hive Cache',
      'REST APIs',
      'Django Migration Path',
      'OneSignal Push',
    ],
    keyFeatures: [
      'Interactive geo-location store locator with custom clustering markers',
      'Multi-tenant merchant onboarding with product inventory listings',
      'Real-time customer-merchant chat with instant read receipts',
      'Offline catalog browsing powered by Hive key-value storage',
      'Comprehensive store performance and customer view analytics',
    ],
    engineeringHighlights: [
      {
        title: 'High-Density Map Rendering Optimization',
        description: 'Engineered an efficient viewport debounce mechanism for the Google Maps SDK in Flutter, preventing unnecessary redraw cycles and reducing client memory footprint by 35% on low-spec Android devices.'
      },
      {
        title: 'Offline-First Product Sync Architecture',
        description: 'Implemented a dual-layer data strategy: reading instantaneously from Hive local storage while quietly hydrating updates from Firestore or Django REST endpoints in the background.'
      },
      {
        title: 'Backend Migration Readiness',
        description: 'Architected domain repository patterns decoupling client UI from backend drivers, facilitating smooth migration from Firebase Firestore to a custom Python Django and PostgreSQL backend.'
      }
    ],
    architectureSummary: 'Flutter Mobile Client (Provider + Hive) <-> Dio HTTP / Firestore Listeners <-> Geo-Spatial Query Service <-> Google Maps API & Push Notification Relay.',
    dataFlow: [
      'User grants GPS permissions -> Flutter Geolocation service resolves current coordinate envelope.',
      'Query sent to local Hive cache; cached stores immediately populate the Map view and bottom list.',
      'Background HTTP worker queries Django / Firestore endpoint for fresh changes since last sync timestamp.',
      'Delta merge applied to state provider; smooth UI transition without flickering or blocking the main thread.'
    ],
    interactivePreviewType: 'map_store'
  },
  {
    id: 'u_panel',
    title: 'u_panel',
    tagline: 'Centralized server administration, telemetry & automation control panel',
    category: 'systems',
    categoryLabel: 'Systems & Infrastructure',
    description: 'A robust administration dashboard and orchestration panel built to manage remote endpoints, monitor server operational health, inspect network metrics, and trigger automated background routines. Built for system operators requiring unified control over distributed nodes.',
    role: 'Backend & Systems Engineer',
    timeline: 'Core Infrastructure Project',
    githubUrl: 'https://github.com/michaellubega/u_panel',
    liveDemoAvailable: true,
    featured: true,
    technologies: [
      'Python',
      'Django',
      'REST APIs',
      'PostgreSQL',
      'Redis',
      'JWT Authentication',
      'MikroTik API',
      'Docker Desktop',
      'SSH Automation',
    ],
    keyFeatures: [
      'Real-time CPU, RAM, and bandwidth telemetry visualizer',
      'Remote endpoint status probe with health check alerts',
      'Automated scheduled task queue for backups and log rotation',
      'Role-based operator permissions with cryptographically signed JWT sessions',
      'MikroTik router interface and network traffic monitoring integration',
    ],
    engineeringHighlights: [
      {
        title: 'Redis-Backed Asynchronous Metrics Ingestion',
        description: 'Configured Redis queues to ingest continuous heartbeat telemetry from external nodes without locking the relational PostgreSQL database tables.'
      },
      {
        title: 'Hardened JWT Token Revocation',
        description: 'Engineered a Redis-backed token blacklist mechanism allowing immediate session termination across administrative consoles on anomalous activity.'
      },
      {
        title: 'Resilient Network Probe Logic',
        description: 'Developed timeout-resilient socket probe workers capable of reporting accurate packet health across lossy transmission lines and rural Wi-Fi links.'
      }
    ],
    architectureSummary: 'Distributed Node Probes / MikroTik Routers -> Django REST API -> Redis Ingestion Queue -> PostgreSQL Relational Storage -> Responsive Operator Dashboard.',
    dataFlow: [
      'Edge nodes emit JSON heartbeat packets signed with pre-shared node keys.',
      'Django ingestion endpoint validates payload and queues telemetry directly into Redis.',
      'Worker daemon computes moving average health scores and pushes alerts if threshold exceeded.',
      'Web dashboard receives normalized stream, updating graphs with sub-second visual latency.'
    ],
    interactivePreviewType: 'system_telemetry'
  },
  {
    id: 'moneta',
    title: 'Moneta',
    tagline: 'Intelligent personal wealth tracker and budgeting application',
    category: 'fintech',
    categoryLabel: 'Fintech & Analytics',
    description: 'An elegant personal finance manager engineered for high responsiveness and privacy. Moneta empowers users to track recurring cashflows, configure multi-envelope budgets, analyze monthly spending trends with interactive visual charts, and maintain an offline-first transaction ledger.',
    role: 'Mobile Lead & UX Engineer',
    timeline: 'Production Mobile App',
    githubUrl: 'https://github.com/michaellubega/moneta',
    liveDemoAvailable: true,
    featured: true,
    technologies: [
      'Flutter',
      'Dart',
      'Hive Local Database',
      'Provider State Management',
      'Dio Networking',
      'Data Visualization',
      'Cryptographic Local Store',
      'CSV / Report Export',
    ],
    keyFeatures: [
      'Instant zero-latency transaction logging with categorized taggings',
      'Visual budget envelopes with progress bars and dynamic burn-rate alerts',
      '100% offline-first functionality using indexed Hive boxes',
      'Categorized analytics charts showing weekly, monthly, and annual financial health',
      'Secure biometrics unlock and automated local ledger backup',
    ],
    engineeringHighlights: [
      {
        title: 'Zero-Jank Microsecond Data Access',
        description: 'Leveraged Hive binary serialization format instead of SQLite, achieving sub-millisecond query latency when filtering 10,000+ local transaction records.'
      },
      {
        title: 'Deterministic Financial Math Logic',
        description: 'Eliminated floating-point rounding inaccuracies by implementing integer-based minor-currency arithmetic for all balance summations and conversions.'
      },
      {
        title: 'Smooth Interactive Canvas Charts',
        description: 'Crafted custom painting renderers for financial trajectory charts that maintain consistent 60 FPS frame rates during gesture zoom and pan.'
      }
    ],
    architectureSummary: 'Flutter UI (Reactive Consumer Widgets) <-> Finance Provider (State & Calculations) <-> TypeAdapter Hive Box (Encrypted Local Storage) <-> Optional Cloud Backup.',
    dataFlow: [
      'User records an expenditure entry with category, note, and amount.',
      'Provider verifies integer bounds, writes record to Hive box within 3ms.',
      'State notification triggers reactive chart re-render with smooth animated bar updates.',
      'Monthly budget balance adjusts automatically, warning if quota exceeds 85%.'
    ],
    interactivePreviewType: 'expense_tracker'
  },
  {
    id: 'kabox',
    title: 'Kabox',
    tagline: 'Modern digital wallet & multi-gateway payment orchestration app',
    category: 'fintech',
    categoryLabel: 'Fintech & Digital Wallet',
    description: 'A mobile wallet and checkout application built to bridge mobile money and card transactions. Kabox integrates multi-channel payment gateways including Marzpay and Unipesa, backed by multi-factor SMS OTP authentication, strict idempotency keys, and an auditable ledger.',
    role: 'Mobile & Fintech Integration Engineer',
    timeline: 'Fintech Core Project',
    githubUrl: 'https://github.com/michaellubega/kabox',
    liveDemoAvailable: true,
    featured: true,
    technologies: [
      'Flutter',
      'Dart',
      'Marzpay Gateway SDK',
      'Unipesa Integration',
      'Mobile Money Protocols',
      'SMS OTP Authentication',
      'PostgreSQL',
      'JWT Security',
      'REST APIs',
    ],
    keyFeatures: [
      'Multi-channel payment dispatch supporting mobile money and card gateways',
      'Two-step verification flow with automated SMS OTP validation',
      'Cryptographically verified payment receipt generation',
      'Idempotent checkout flow preventing accidental duplicate debiting',
      'Biometric sign-in security with App Check integrity verification',
    ],
    engineeringHighlights: [
      {
        title: 'Payment Gateway Fallback Routing',
        description: 'Architected an automated fallback routine that seamlessly switches transaction routing from Marzpay to Unipesa if carrier network timeouts exceed configured thresholds.'
      },
      {
        title: 'Idempotency & Replay Defense',
        description: 'Implemented unique client-side UUID generation paired with backend transaction status lockouts to eliminate duplicate payment submissions.'
      },
      {
        title: 'Strict SMS OTP Verification Flow',
        description: 'Built a resilient Flutter countdown timer and automated paste-and-verify OTP handler with secure token exchange upon carrier confirmation.'
      }
    ],
    architectureSummary: 'Flutter Mobile App -> Secure Checkout Dispatcher -> Marzpay / Unipesa Gateways -> Webhook Verification -> PostgreSQL Double-Entry Ledger.',
    dataFlow: [
      'Customer initiates checkout; client assigns unique idempotency UUID.',
      'Payment request routed via Marzpay or Unipesa with customer phone/card token.',
      'Gateway sends verification prompt or SMS OTP to carrier network.',
      'Webhook callback received, double-entry ledger updated, receipt delivered instantly.'
    ],
    interactivePreviewType: 'payment_checkout'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Practical Production Experience
  { name: 'Flutter', level: 'production', category: 'mobile', context: 'Cross-platform native Android & mobile apps with smooth 60fps UX' },
  { name: 'Dart', level: 'production', category: 'mobile', context: 'Asynchronous streams, typed models, and reactive architecture' },
  { name: 'State Management (Provider)', level: 'production', category: 'mobile', context: 'Clean dependency injection, ChangeNotifier & predictable UI state' },
  { name: 'Hive Local DB', level: 'production', category: 'mobile', context: 'High-speed NoSQL key-value store for offline-first persistence' },
  { name: 'Firebase Firestore', level: 'production', category: 'cloud', context: 'Document modeling, real-time sync listeners, and security rules' },
  { name: 'Firebase Auth & App Check', level: 'production', category: 'cloud', context: 'Phone OTP, Google sign-in, and attestation tokens' },
  { name: 'Google Maps Integration', level: 'production', category: 'mobile', context: 'Custom map markers, clustering, coordinates, and location queries' },
  { name: 'REST API & Dio HTTP', level: 'production', category: 'mobile', context: 'Interceptors, request throttling, error handling & token refresh' },
  { name: 'Google Play Store Publishing', level: 'production', category: 'tools', context: 'Bundle preparation, signing keys, app assets & release tracks' },
  { name: 'Git & GitHub Workflow', level: 'production', category: 'tools', context: 'Branching, code reviews, releases, and GitHub Pages automation' },
  { name: 'Android SDK & Gradle', level: 'production', category: 'tools', context: 'Build configurations, native dependencies, and manifest permissions' },

  // Developing Knowledge & Applied Exploration
  { name: 'Python & Django', level: 'developing', category: 'backend', context: 'REST framework endpoints, ORM modeling, and authentication backends' },
  { name: 'PostgreSQL', level: 'developing', category: 'backend', context: 'Relational data schemas, foreign key integrity, and indexing' },
  { name: 'Redis', level: 'developing', category: 'backend', context: 'In-memory caching, message queues, and token blacklist management' },
  { name: 'Backend Migration (Firebase -> Django)', level: 'developing', category: 'backend', context: 'Decoupling data layers and transitioning Firestore to relational SQL' },
  { name: 'Payment Gateways (Marzpay & Unipesa)', level: 'developing', category: 'cloud', context: 'Mobile money checkout, webhook callbacks, and transaction safety' },
  { name: 'SMS OTP & JWT Security', level: 'developing', category: 'backend', context: 'Stateless session tokens, refresh cycles, and phone validation' },
  { name: 'Docker & Containerization', level: 'developing', category: 'tools', context: 'Containerized local development environments and multi-service compose' },

  // Foundational & Academic Knowledge
  { name: 'Computer Networking & MikroTik', level: 'foundational', category: 'networking', context: 'Client-server architecture, twisted-pair transmission limits, village Wi-Fi' },
  { name: 'Algorithms & Scheduling', level: 'foundational', category: 'foundations', context: 'Round Robin CPU scheduling, time slicing, queue optimization' },
  { name: 'Object-Oriented Programming (OOP)', level: 'foundational', category: 'foundations', context: 'Encapsulation, abstraction, inheritance, and polymorphic interfaces' },
  { name: 'Applied AI & Automation (n8n & LLMs)', level: 'foundational', category: 'tools', context: 'Automated workflows, agent webhooks, and local model experiments' },
  { name: 'Electronics & Semiconductor Physics', level: 'foundational', category: 'foundations', context: 'PN junctions, forward/reverse bias, full-wave rectification, thermionic emission' },
];

export const ARCHITECTURE_PATTERNS: ArchitecturePattern[] = [
  {
    id: 'offline_first_mobile',
    title: 'Offline-First Reactive Mobile Architecture',
    subtitle: 'Flutter UI + Provider + Hive Local Cache + Cloud Sync',
    description: 'Designed for high reliability even in regions with intermittent cellular connectivity. The mobile UI reads immediately from local disk (Hive) and triggers background reconciliation with the remote API.',
    nodes: [
      { label: 'Flutter UI Screen', detail: 'Reactive Consumer widgets listening to Provider state changes', type: 'client' },
      { label: 'Domain Provider', detail: 'Centralized state coordinator; updates UI optimistically', type: 'client' },
      { label: 'Hive Local Storage', detail: 'Encrypted binary key-value store responding in <3ms', type: 'database' },
      { label: 'Dio HTTP Interceptor', detail: 'Injects JWT tokens, catches timeouts, and retries with backoff', type: 'network' },
      { label: 'Django / Firebase Backend', detail: 'Validates mutations, writes to PostgreSQL / Firestore, and emits deltas', type: 'service' },
    ],
    steps: [
      '1. User performs an action (e.g. logs expense or saves store).',
      '2. Provider writes directly to local Hive box; UI reflects change instantly with 0ms perceived lag.',
      '3. Network worker queues mutation payload and attempts background HTTP dispatch.',
      '4. If device is offline, mutation persists in an outbound sync queue until internet is restored.',
      '5. Remote server acknowledges receipt, returns server timestamp, and local entry status flips to synced.'
    ]
  },
  {
    id: 'fintech_payment_pipeline',
    title: 'Multi-Gateway Payment & Ledger Pipeline',
    subtitle: 'Kabox Checkout -> Marzpay / Unipesa -> Double-Entry Ledger',
    description: 'A transaction pipeline built to prevent duplicate charges, support carrier mobile money networks, and maintain a verifiable audit trail.',
    nodes: [
      { label: 'Mobile Client (Kabox)', detail: 'Generates client-side UUID idempotency key before request', type: 'client' },
      { label: 'Payment Gateway Router', detail: 'Routes to Marzpay or Unipesa with health fallback', type: 'network' },
      { label: 'Carrier Network (Mobile Money)', detail: 'Dispatches USSD prompt or SMS OTP to user handset', type: 'service' },
      { label: 'Webhook Ingestion Endpoint', detail: 'Verifies cryptographic HMAC signature on transaction callback', type: 'service' },
      { label: 'PostgreSQL Financial Ledger', detail: 'Atomic transaction updating debit/credit accounts concurrently', type: 'database' },
    ],
    steps: [
      '1. User confirms checkout; app generates unique idempotency token to guard against double-clicks.',
      '2. Gateway dispatch evaluates carrier status and sends payment request to Marzpay or Unipesa.',
      '3. Handset receives carrier prompt or SMS OTP code; user authorizes transaction with PIN/OTP.',
      '4. Payment processor transmits cryptographically signed webhook to backend verification handler.',
      '5. Server validates signature, commits transaction to PostgreSQL ledger, and pushes push receipt to client.'
    ]
  },
  {
    id: 'system_monitoring_pipeline',
    title: 'Remote Node Telemetry & Automation Pipeline',
    subtitle: 'u_panel -> Redis Queue -> Telemetry Processing -> Operator UI',
    description: 'Designed for network engineers and system administrators to maintain real-time visibility over distributed edge endpoints and MikroTik equipment.',
    nodes: [
      { label: 'Edge Probes & Routers', detail: 'Collects CPU, bandwidth, ping, and memory metrics', type: 'client' },
      { label: 'Ingestion Gateway', detail: 'High-throughput lightweight endpoint authenticating packets', type: 'service' },
      { label: 'Redis In-Memory Buffer', detail: 'Decouples high-frequency probe bursts from database writes', type: 'database' },
      { label: 'Django Analytics Worker', detail: 'Calculates moving health score and flags connection loss', type: 'service' },
      { label: 'Admin Dashboard', detail: 'Tabular views and telemetry visualizer for system administrators', type: 'client' },
    ],
    steps: [
      '1. Edge probes collect system vitals at 10-second intervals and post JSON packets.',
      '2. Ingestion service receives payload, validates pre-shared token, and appends to Redis stream.',
      '3. Worker daemon computes rolling averages, detecting packet loss or spike anomalies.',
      '4. Historical summaries are batch-flushed to PostgreSQL for reporting and compliance audits.',
      '5. Admin console pulls stream updates for live visual charts without page reloads.'
    ]
  }
];

export const WORK_TIMELINE = [
  {
    period: 'Current / Ongoing',
    role: 'Lead Mobile & Systems Engineer',
    project: 'ChazaApp & Kabox',
    description: 'Spearheading cross-platform Flutter architecture for local business discovery (ChazaApp) and digital wallet payment integrations (Kabox). Engineering multi-provider payment pipelines with Marzpay and Unipesa.',
    skills: ['Flutter', 'Dart', 'Provider', 'Hive', 'Payment Gateways', 'Google Maps']
  },
  {
    period: 'Infrastructure & Tools',
    role: 'Systems & Backend Developer',
    project: 'u_panel',
    description: 'Designed unified management console for remote server telemetry, automated backup scheduling, and MikroTik network equipment monitoring with Python Django and Redis.',
    skills: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'Redis', 'MikroTik']
  },
  {
    period: 'Mobile Application Engineering',
    role: 'Mobile Developer',
    project: 'Moneta',
    description: 'Created an offline-first personal finance tracking application featuring sub-millisecond Hive storage access, custom financial charts, and budgeting envelopes.',
    skills: ['Flutter', 'Dart', 'Hive DB', 'Provider', 'Dio HTTP', 'Data Visualization']
  },
  {
    period: 'Foundational Studies',
    role: 'Computer Science & Engineering Student',
    project: 'Technical Foundations',
    description: 'Studied algorithms (Round Robin scheduling), OOP design patterns, computer networking, twisted-pair transmission characteristics, and semiconductor electronics.',
    skills: ['Algorithms', 'Data Structures', 'OOP', 'Networking', 'Semiconductors']
  }
];
