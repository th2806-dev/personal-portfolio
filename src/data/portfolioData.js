export const PERSONAL_INFO = {
  name: 'THACH HIEN',
  title: 'SOFTWARE ENGINEER',
  subtitle: 'Information Technology student with a strong foundation in Software Development and Computer Systems. Quick learner with basic knowledge of Linux CLI, Windows administration, and networking setup. Seeking an IT Support / Infrastructure Intern position to gain hands-on experience and prepare for a future DevOps career path.',
  cardBio: 'IT student with a foundation in software development, computer systems, Linux, Windows administration, and networking.',
  email: 'th.2806.dev@gmail.com',
  phone: '0906891704',
  github: 'https://github.com/th2806-dev',
  linkedin: 'https://www.linkedin.com/in/thachhien-dev',
  portfolioUrl: 'https://thachhiendev.vercel.app',
  location: 'HCMCT',
  availability: 'Available for Internship / Remote Work',
  status: 'SYSTEMS INITIALIZED',
  year: '2026',
};

export const STAT_METRICS = [
  { value: '3.9', label: 'GPA EXCELLENCE' },
  { value: '.NET', label: '10 SPECIALIZED' },
  { value: '05+', label: 'PORTFOLIO PROJECTS' },
];

export const EDUCATION_DATA = {
  school: 'HO CHI MINH CITY COLLEGE OF TRANSPORT',
  degree: 'Technology (Software Application)',
  period: '2024 — 2027',
  gpa: '3.9/4.0',
};

export const TECH_STACK_DATA = [
  { name: '.NET 10 (C# 13)', category: 'languages', level: 'PRIMARY CORE', highlight: true },
  { name: 'JavaScript ES6+ / TypeScript', category: 'languages', level: 'ADVANCED', highlight: true },
  { name: 'HTML5 & CSS3 / Tailwind', category: 'languages', level: 'PROFICIENT' },
  { name: 'ASP.NET Core Web API', category: 'frameworks', level: 'PRIMARY CORE', highlight: true },
  { name: 'Entity Framework Core (EF Core)', category: 'frameworks', level: 'PRIMARY CORE', highlight: true },
  { name: 'ReactJS (Vite + Tailwind)', category: 'frameworks', level: 'ADVANCED', highlight: true },
  { name: '3-Tier Layered Architecture', category: 'other', level: 'PRIMARY PATTERN', highlight: true },
  { name: 'RESTful API Design & OpenApi', category: 'other', level: 'ADVANCED', highlight: true },
  { name: 'SQL Server (T-SQL & Indexing)', category: 'persistence', level: 'PRIMARY CORE', highlight: true },
  { name: 'Redis (Distributed Cache & Lock)', category: 'persistence', level: 'ADVANCED', highlight: true },
  { name: 'MongoDB (NoSQL Logs)', category: 'persistence', level: 'PROFICIENT' },
  { name: 'JWT Authentication & Refresh Tokens', category: 'other', level: 'ADVANCED', highlight: true },
  { name: 'Role-Based Access Control (RBAC)', category: 'other', level: 'ADVANCED' },
  { name: 'Strategy & Factory OOP Patterns', category: 'other', level: 'ADVANCED' },
  { name: 'Hangfire Background Workers', category: 'other', level: 'PROFICIENT' },
  { name: 'Docker & Docker Compose', category: 'tools', level: 'ADVANCED', highlight: true },
  { name: 'Git & GitHub Workflow', category: 'tools', level: 'ADVANCED', highlight: true },
  { name: 'Postman & Swagger UI', category: 'tools', level: 'ADVANCED' },
  { name: 'Visual Studio 2022 / VS Code', category: 'tools', level: 'PROFICIENT' },
];

// export const PROJECTS_DATA = [
//   {
//     id: 'movie-booking-ecosystem',
//     number: '01',
//     title: 'MOVIE BOOKING ECOSYSTEM',
//     categoryTags: 'FULL-STACK / .NET 10 / MONOREPO',
//     description: 'Designed and structured a production-ready Movie Booking API using a 3-Tier Layered Architecture to achieve strict separation of concerns. Implemented secure JWT authentication and Role-Based Access Control (RBAC). Optimized for high-concurrency seat selection and containerized using Docker.',
//     keyStack: ['.NET 10', 'ASP.NET CORE', 'EF CORE', 'SQL SERVER', 'REACTJS', 'DOCKER'],
//     image: '/images/movie_booking_demo_1785175602739.jpg',
//     architectureDetails: {
//       pattern: '3-Tier Layered Monorepo Architecture (Presentation, Business Logic, Data Access)',
//       highlights: [
//         'Optimized concurrent seat reservation with distributed Redis locking to prevent double-booking',
//         'JWT + Refresh Token authentication with granular Role-Based Access Control (RBAC)',
//         'EF Core query optimization reducing API response latency by 65%',
//         'Containerized multi-service deployment with Docker Compose'
//       ],
//       apiEndpoints: [
//         'POST /api/v1/auth/login - JWT issuance',
//         'GET /api/v1/movies/showtimes - Cached showtimes querying',
//         'POST /api/v1/bookings/reserve-seats - Redis atomic seat lock'
//       ],
//       databaseDesign: 'SQL Server relational model normalized to 3NF with index tuning for high-traffic movie showtimes.'
//     },
//     demoUrl: '',
//     githubUrl: 'https://github.com/th2806-dev/movie-booking-system'
//   },
//   {
//     id: 'enterprise-logistics-hub',
//     number: '02',
//     title: 'ENTERPRISE LOGISTICS HUB',
//     categoryTags: 'CORE BACKEND / SYSTEM DESIGN',
//     description: 'High-performance distribution ecosystem designed for high-concurrency big data. Integrated Redis for master data lookup, accelerating response times up to 50x. Leveraged Strategy/Factory patterns and Hangfire for async jobs. Polyglot persistence using SQL Server and MongoDB.',
//     keyStack: ['.NET 10', 'REDIS', 'MONGODB', 'HANGFIRE', 'PATTERNS', 'REACT'],
//     image: '/images/logistics_hub_demo_1785175618427.jpg',
//     architectureDetails: {
//       pattern: 'Polyglot Persistence with Async Job Queue & Event Pipeline',
//       highlights: [
//         'Master data in-memory lookup via Redis cluster yielding 50x speedup for routing queries',
//         'Hangfire background worker processing 10,000+ telemetry waypoints concurrently',
//         'Strategy & Factory OOP design patterns for modular shipping rate calculation engines',
//         'Hybrid SQL Server (relational transactions) & MongoDB (unstructured telemetry logs) persistence'
//       ],
//       apiEndpoints: [
//         'POST /api/v1/logistics/calculate-route - Strategy pattern routing',
//         'GET /api/v1/telemetry/live-tracking - Hybrid polyglot data fetch',
//         'POST /api/v1/jobs/sync-inventory - Hangfire scheduled worker trigger'
//       ],
//       databaseDesign: 'SQL Server for transactional order tracking, MongoDB for high-ingestion IoT fleet telemetry logs.'
//     },
//     demoUrl: '',
//     githubUrl: 'https://github.com/th2806-dev/enterprise-logistics-system'
//   }
// ];

export const PROJECTS_DATA = [
  {
    id: 'internlink',
    number: '01',
    title: 'INTERNLINK',
    categoryTags: 'FULL-STACK / .NET / REACT',
    description:
      'Internship management platform connecting students, mentors, and organizations. Designed to centralize internship tracking, company management, evaluations, analytics, notifications, and core business workflows.',
    keyStack: [
      '.NET',
      'ASP.NET CORE',
      'REACT',
      'SQL SERVER',
      'REST API',
      'CLEAN ARCHITECTURE',
    ],
    image: '/images/logistics_hub_demo_1785175618427.jpg',
    architectureDetails: {
      pattern: 'Clean Architecture with RESTful API',
      highlights: [
        'Student, internship, company, evaluation, and grading management',
        'RESTful APIs supporting core business workflows and data handling',
        'Dashboard, analytics, notifications, and account management modules',
        'Modular system design focused on maintainability and scalability',
      ],
      apiEndpoints: [],
      databaseDesign:
        'SQL Server relational database supporting structured internship management workflows.',
    },
    demoUrl: '',
    githubUrl: 'https://github.com/th2806-dev/internlink.git',
  },

  {
    id: 'hp-detailing',
    number: '02',
    title: 'HP AUTO DETAILING',
    categoryTags: 'FULL-STACK / ASP.NET CORE / MVC',
    description:
      'Production-ready auto detailing management system built with ASP.NET Core MVC. Implemented role-based workflows, inventory management, service tickets, appointments, invoicing, and real-time notifications with SignalR.',
    keyStack: [
      'ASP.NET CORE 8',
      'EF CORE',
      'SQL SERVER',
      'IDENTITY',
      'SIGNALR',
      'TAILWIND CSS',
    ],
    image: '/images/movie_booking_demo_1785175602739.jpg',
    architectureDetails: {
      pattern: 'ASP.NET Core MVC with Layered Architecture',
      highlights: [
        'Role-Based Access Control for Admin, Receptionist, Technician, Warehouse, and Foreman',
        'Inventory, service ticket, appointment, invoice, and payment workflows',
        'Real-time notifications and status updates using SignalR',
        'Automated database migration and seed data initialization',
      ],
      apiEndpoints: [],
      databaseDesign:
        'SQL Server relational database designed with Entity Framework Core for transactional business workflows.',
    },
    demoUrl: '',
    githubUrl: 'https://github.com/thachhien-github/HP_Detailing.git',
  },

];