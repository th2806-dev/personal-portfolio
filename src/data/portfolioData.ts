import { Project, TechSkill, EducationInfo, StatMetric } from '../types';

export const PERSONAL_INFO = {
  name: 'Thach Hien',
  title: 'SOFTWARE ENGINEER',
  subtitle: 'Passionate Full-Stack .NET Developer specializing in building high-performance web applications and structured web services. Highly skilled in .NET 10, ASP.NET Core, and ReactJS. Seeking an Intern Full-Stack position.',
  cardBio: 'Software Engineer who loves building scalable and reliable backend systems.',
  email: 'thachhien.dev@gmail.com',
  github: 'https://github.com/thachhien',
  linkedin: 'https://linkedin.com/in/thachhien',
  portfolioUrl: 'https://thachhien.dev',
  location: 'HCM City, Vietnam',
  availability: 'Available for Remote Work',
  status: 'SYSTEMS INITIALIZED',
  year: '2026',
};

export const STAT_METRICS: StatMetric[] = [
  { value: '3.9', label: 'GPA EXCELLENCE' },
  { value: '.NET', label: '10 SPECIALIZED' },
  { value: '05+', label: 'PORTFOLIO PROJECTS' },
];

export const EDUCATION_DATA: EducationInfo = {
  school: 'HO CHI MINH CITY COLLEGE OF TRANSPORT',
  degree: 'Technology (Software Application)',
  period: '2024 — 2027',
  gpa: '3.9/4.0',
};

export const TECH_STACK_DATA: TechSkill[] = [
  // Languages & Core
  { name: '.NET 10 (C# 13)', category: 'languages', level: 'PRIMARY CORE', highlight: true },
  { name: 'JavaScript ES6+ / TypeScript', category: 'languages', level: 'ADVANCED', highlight: true },
  { name: 'HTML5 & CSS3 / Tailwind', category: 'languages', level: 'PROFICIENT' },

  // Frameworks & Architecture
  { name: 'ASP.NET Core Web API', category: 'frameworks', level: 'PRIMARY CORE', highlight: true },
  { name: 'Entity Framework Core (EF Core)', category: 'frameworks', level: 'PRIMARY CORE', highlight: true },
  { name: 'ReactJS (Vite + Tailwind)', category: 'frameworks', level: 'ADVANCED', highlight: true },
  { name: '3-Tier Layered Architecture', category: 'other', level: 'PRIMARY PATTERN', highlight: true },
  { name: 'RESTful API Design & OpenApi', category: 'other', level: 'ADVANCED', highlight: true },

  // Persistence & Caching
  { name: 'SQL Server (T-SQL & Indexing)', category: 'persistence', level: 'PRIMARY CORE', highlight: true },
  { name: 'Redis (Distributed Cache & Lock)', category: 'persistence', level: 'ADVANCED', highlight: true },
  { name: 'MongoDB (NoSQL Logs)', category: 'persistence', level: 'PROFICIENT' },

  // Security & Patterns
  { name: 'JWT Authentication & Refresh Tokens', category: 'other', level: 'ADVANCED', highlight: true },
  { name: 'Role-Based Access Control (RBAC)', category: 'other', level: 'ADVANCED' },
  { name: 'Strategy & Factory OOP Patterns', category: 'other', level: 'ADVANCED' },
  { name: 'Hangfire Background Workers', category: 'other', level: 'PROFICIENT' },

  // DevOps & Tools
  { name: 'Docker & Docker Compose', category: 'tools', level: 'ADVANCED', highlight: true },
  { name: 'Git & GitHub Workflow', category: 'tools', level: 'ADVANCED', highlight: true },
  { name: 'Postman & Swagger UI', category: 'tools', level: 'ADVANCED' },
  { name: 'Visual Studio 2022 / VS Code', category: 'tools', level: 'PROFICIENT' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'movie-booking-ecosystem',
    number: '01',
    title: 'MOVIE BOOKING ECOSYSTEM',
    categoryTags: 'FULL-STACK / .NET 10 / MONOREPO',
    description: 'Designed and structured a production-ready Movie Booking API using a 3-Tier Layered Architecture to achieve strict separation of concerns. Implemented secure JWT authentication and Role-Based Access Control (RBAC). Optimized for high-concurrency seat selection and containerized using Docker.',
    keyStack: ['.NET 10', 'ASP.NET CORE', 'EF CORE', 'SQL SERVER', 'REACTJS', 'DOCKER'],
    image: '/src/assets/images/movie_booking_demo_1785175602739.jpg',
    architectureDetails: {
      pattern: '3-Tier Layered Monorepo Architecture (Presentation, Business Logic, Data Access)',
      highlights: [
        'Optimized concurrent seat reservation with distributed Redis locking to prevent double-booking',
        'JWT + Refresh Token authentication with granular Role-Based Access Control (RBAC)',
        'EF Core query optimization reducing API response latency by 65%',
        'Containerized multi-service deployment with Docker Compose'
      ],
      apiEndpoints: [
        'POST /api/v1/auth/login - JWT issuance',
        'GET /api/v1/movies/showtimes - Cached showtimes querying',
        'POST /api/v1/bookings/reserve-seats - Redis atomic seat lock'
      ],
      databaseDesign: 'SQL Server relational model normalized to 3NF with index tuning for high-traffic movie showtimes.'
    },
    demoUrl: 'https://movie-booking-demo.example.com',
    githubUrl: 'https://github.com/thachhien/movie-booking-ecosystem'
  },
  {
    id: 'enterprise-logistics-hub',
    number: '02',
    title: 'ENTERPRISE LOGISTICS HUB',
    categoryTags: 'CORE BACKEND / SYSTEM DESIGN',
    description: 'High-performance distribution ecosystem designed for high-concurrency big data. Integrated Redis for master data lookup, accelerating response times up to 50x. Leveraged Strategy/Factory patterns and Hangfire for async jobs. Polyglot persistence using SQL Server and MongoDB.',
    keyStack: ['.NET 10', 'REDIS', 'MONGODB', 'HANGFIRE', 'PATTERNS', 'REACT'],
    image: '/src/assets/images/logistics_hub_demo_1785175618427.jpg',
    architectureDetails: {
      pattern: 'Polyglot Persistence with Async Job Queue & Event Pipeline',
      highlights: [
        'Master data in-memory lookup via Redis cluster yielding 50x speedup for routing queries',
        'Hangfire background worker processing 10,000+ telemetry waypoints concurrently',
        'Strategy & Factory OOP design patterns for modular shipping rate calculation engines',
        'Hybrid SQL Server (relational transactions) & MongoDB (unstructured telemetry logs) persistence'
      ],
      apiEndpoints: [
        'POST /api/v1/logistics/calculate-route - Strategy pattern routing',
        'GET /api/v1/telemetry/live-tracking - Hybrid polyglot data fetch',
        'POST /api/v1/jobs/sync-inventory - Hangfire scheduled worker trigger'
      ],
      databaseDesign: 'SQL Server for transactional order tracking, MongoDB for high-ingestion IoT fleet telemetry logs.'
    },
    demoUrl: 'https://logistics-hub-demo.example.com',
    githubUrl: 'https://github.com/thachhien/enterprise-logistics-hub'
  }
];
