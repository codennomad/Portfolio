export const siteConfig = {
  name: "Gabriel Henrique",
  handle: "codennomad",
  title: "Mid-level Backend + AI Engineer",
  tagline: "I don't just build software. I design intelligent, high-performance, living systems.",
  bio: `Software engineer obsessed with building things that matter — from high-throughput
backend systems to cognitive AI pipelines. I write Python, Rust, C/C++ and TypeScript.
Always remote. Always shipping.`,
  bioEn: `Software engineer obsessed with building things that matter — from high-throughput
backend systems to cognitive AI pipelines. I write Python, Rust, C/C++ and TypeScript.
Always remote. Always shipping.`,
  location: "Minas Gerais, Brazil",
  timezone: "UTC-3",
  available: true,
  github: "https://github.com/codennomad",
  linkedin: "https://www.linkedin.com/in/gabrielhenrique-tech",
  youtube: "https://www.youtube.com/channel/UCbC4Y4xa7pg06pdtAj8A21g",
  instagram: "https://www.instagram.com/codennomad",
  orcid: "https://orcid.org/0009-0005-2878-741X",
  email: "gabrielheh03@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://codennomad.dev",
}

export const typedTexts = [
  "Backend Engineer",
  "AI Systems Builder",
  "Cognitive Pipeline Designer",
  "Open Source Builder",
  "Low-Level Programmer",
  "Distributed Systems Architect",
]

export const funFacts = [
  { key: "timezone", value: "UTC-3 (Minas Gerais, BR)" },
  { key: "coffee_level", value: "critical" },
  { key: "currently_building", value: "Souljin AI VTuber" },
  { key: "currently_learning", value: "Rust + distributed systems" },
  { key: "open_to", value: "remote contracts, OSS collabs" },
]

export const skills = [
  {
    category: "Languages",
    icon: "◈",
    items: [
      { name: "Python", level: "primary" },
      { name: "C", level: "primary" },
      { name: "C++", level: "primary" },
      { name: "Rust", level: "primary" },
      { name: "TypeScript", level: "primary" },
      { name: "SQL", level: "primary" },
      { name: "JavaScript", level: "secondary" },
    ],
  },
  {
    category: "Backend",
    icon: "◈",
    items: [
      { name: "FastAPI", level: "primary" },
      { name: "Node.js", level: "primary" },
      { name: "PostgreSQL", level: "primary" },
      { name: "Redis", level: "primary" },
      { name: "Celery", level: "primary" },
      { name: "Flask", level: "secondary" },
      { name: "Microservices", level: "secondary" },
    ],
  },
  {
    category: "AI / ML",
    icon: "◈",
    items: [
      { name: "LangChain", level: "primary" },
      { name: "OpenAI API", level: "primary" },
      { name: "Whisper", level: "primary" },
      { name: "FAISS", level: "primary" },
      { name: "RAG", level: "primary" },
      { name: "Embeddings", level: "primary" },
      { name: "ChromaDB", level: "secondary" },
      { name: "NLP", level: "secondary" },
    ],
  },
  {
    category: "DevOps",
    icon: "◈",
    items: [
      { name: "Docker", level: "primary" },
      { name: "GitHub Actions", level: "primary" },
      { name: "Linux", level: "primary" },
      { name: "Git", level: "primary" },
      { name: "Kubernetes", level: "secondary" },
      { name: "Vercel", level: "secondary" },
    ],
  },
  {
    category: "Architecture",
    icon: "◈",
    items: [
      { name: "Clean Architecture", level: "primary" },
      { name: "Cognitive Pipelines", level: "primary" },
      { name: "Distributed Systems", level: "primary" },
      { name: "Event-Driven", level: "secondary" },
      { name: "CQRS", level: "secondary" },
    ],
  },
  {
    category: "Security",
    icon: "◈",
    items: [
      { name: "OWASP", level: "primary" },
      { name: "Cryptography", level: "primary" },
      { name: "JWT / Auth", level: "primary" },
      { name: "Pentesting", level: "secondary" },
    ],
  },
]

export const timeline = [
  {
    year: "2026",
    title: "Mid-level Backend + AI Engineer",
    company: "Freelance / OSS",
    description: "Building production-grade AI systems, cognitive pipelines and SaaS platforms. High-throughput APIs, distributed architectures, and LLM integrations.",
    stack: ["Python", "Rust", "TypeScript", "FastAPI"],
  },
  {
    year: "2025",
    title: "Backend Engineer",
    company: "Projects & Open Source",
    description:
      "Deep dive into distributed systems, Rust low-level programming, and multi-tenant architectures.",
    stack: ["Rust", "Python", "Docker", "PostgreSQL"],
  },
  {
    year: "2024",
    title: "Full-Stack Developer",
    company: "Self-Taught & Bootcamps",
    description:
      "Intensive study of backend, APIs, AI integrations and software architecture patterns.",
    stack: ["Python", "FastAPI", "Node.js", "React"],
  },
  {
    year: "2023",
    title: "Software Engineering Student",
    company: "Learning Phase",
    description:
      "Foundation in data structures, algorithms, OOP, databases, and web development.",
    stack: ["Python", "C", "SQL", "JavaScript"],
  },
]

export const workTimeline = [
  {
    period: "2024 — present",
    title: "Backend & AI Engineer",
    company: "Freelancer",
    type: "Freelance · Remote",
    description:
      "Building production systems for multiple clients: SaaS platforms, AI pipelines, performance optimization, and automation tools. Always remote.",
    stack: ["Python", "FastAPI", "TypeScript", "PostgreSQL", "Redis"],
  },
  {
    period: "Jul 2025 — present",
    title: "Analista de Sistemas",
    company: "Gigantão Engenharia de Movimentação",
    type: "Full-time · Presencial",
    description:
      "Led design and evolution of new internal systems with full technical ownership end-to-end. Architected database schemas in PostgreSQL and MSSQL, containerized environments with Docker, and managed Linux production servers.",
    stack: ["TypeScript", "PostgreSQL", "MSSQL", "Docker", "Linux"],
  },
  {
    period: "Jul 2025",
    title: "Consultor de Automação e Infraestrutura",
    company: "Oral Blue – Clínicas Odontológicas",
    type: "Temporary · Remote",
    description:
      "Technical refactoring of internal CRM built with Flask. Optimized SQL queries scaling capacity from ~5–10 to 500–1000 concurrent users. Automated deployment pipeline on Ubuntu VPS with Gunicorn + Nginx.",
    stack: ["Python", "Flask", "PostgreSQL", "Nginx", "Gunicorn"],
  },
]

export const featuredProjects = [
  {
    slug: "0xpray",
    name: "0xPray",
    description:
      "Zero-knowledge encrypted prayer vault. AES-256-GCM + PBKDF2 client-side crypto, PIN-locked, offline-first PWA. Multi-device sync via encrypted blob — server never sees plaintext.",
    stack: ["React 19", "TypeScript", "Vite", "Fastify", "PostgreSQL", "PWA"],
    category: "Frontend",
    status: "LIVE" as const,
    demo: "https://0xpray.codennomad.com",
    github: "https://github.com/codennomad/0xPray",
    stars: 0,
    language: "TypeScript",
    metric: "zero-knowledge",
  },
  {
    slug: "analytics-saas",
    name: "analytics-saas",
    description:
      "Production-Grade Real-Time Analytics Platform. Multi-tenant SaaS with sub-200ms ingestion, ClickHouse OLAP, and enterprise-grade observability.",
    stack: ["TypeScript", "Next.js", "Fastify", "Kubernetes", "Redis", "Stripe"],
    category: "Backend",
    status: "OSS" as const,
    github: "https://github.com/codennomad/analytics-saas",
    stars: 1,
    language: "TypeScript",
    metric: "sub-200ms p99",
  },
  {
    slug: "csv-parsing",
    name: "csv_parsing",
    description:
      "High-performance CSV parser: C99 5-state machine + Rust runtime + Python bindings. 41 MiB/s throughput, zero-copy mmap, GIL-free PyO3.",
    stack: ["Rust", "C99", "Python", "PyO3"],
    category: "Backend",
    status: "OSS" as const,
    github: "https://github.com/codennomad/csv_parsing",
    stars: 0,
    language: "Rust",
    metric: "41 MiB/s",
  },
  {
    slug: "feature-flags",
    name: "Feature_Flags",
    description:
      "Production-grade feature flag platform in Python. Sub-millisecond evaluation via in-process cache, 5-level targeting, JWT/RBAC auth, Redis pub/sub.",
    stack: ["Python", "Redis", "PostgreSQL", "JWT", "FastAPI"],
    category: "Backend",
    status: "OSS" as const,
    github: "https://github.com/codennomad/Feature_Flags",
    stars: 0,
    language: "Python",
    metric: "<1ms eval",
  },
  {
    slug: "aegis-workers",
    name: "aegis-workers",
    description:
      "Production-grade async job processing system. At-least-once delivery, idempotency, DLQ with manual retry, exponential backoff, full observability.",
    stack: ["Python", "Celery", "Redis", "PostgreSQL", "FastAPI"],
    category: "Backend",
    status: "OSS" as const,
    github: "https://github.com/codennomad/aegis-workers",
    stars: 0,
    language: "Python",
    metric: "5k req/s",
  },
  {
    slug: "sae",
    name: "SAE",
    description:
      "Secure Anonymous Echo — ephemeral encrypted messenger in Rust. X25519 + ChaCha20-Poly1305, zero data persistence (RAM-only), trustless architecture.",
    stack: ["Rust", "X25519", "ChaCha20", "TUI"],
    category: "Security",
    status: "OSS" as const,
    github: "https://github.com/codennomad/SAE",
    stars: 0,
    language: "Rust",
    metric: "zero-persist",
  },
  {
    slug: "noctivox",
    name: "NoctiVox",
    description:
      "AI pipeline that transcribes videos and generates SEO-optimized titles using Whisper + GPT. Production-ready multimedia content processor.",
    stack: ["Python", "Whisper", "GPT", "FastAPI"],
    category: "AI/ML",
    status: "OSS" as const,
    github: "https://github.com/codennomad/NoctiVox",
    stars: 0,
    language: "Python",
    metric: "GPU-accel",
  },
  {
    slug: "lienyx",
    name: "LIENYX",
    description:
      "AI-powered content transformer. Convert videos, PDFs and audio into intelligent notes & summaries with cognitive AI backend.",
    stack: ["Python", "AI", "FastAPI", "LangChain"],
    category: "AI/ML",
    status: "OSS" as const,
    github: "https://github.com/codennomad/LIENYX",
    stars: 0,
    language: "Python",
    metric: "multi-modal",
  },
  {
    slug: "message-broker",
    name: "Message_Broker",
    description:
      "Custom message broker in Rust — async TCP server with Tokio, broadcast channels, and binary frame protocol for multi-subscriber pub/sub messaging.",
    stack: ["Rust", "Tokio", "TCP", "Pub/Sub"],
    category: "Backend",
    status: "OSS" as const,
    github: "https://github.com/codennomad/Message_Broker",
    stars: 0,
    language: "Rust",
    metric: "async TCP",
  },
  {
    slug: "butler",
    name: "Butler",
    description:
      "Voice-driven AI assistant — real-time speech recognition with Faster Whisper + VAD, conversational LLM via OpenRouter, GPU-accelerated transcription.",
    stack: ["Python", "Whisper", "GPT-4", "VAD"],
    category: "AI/ML",
    status: "OSS" as const,
    github: "https://github.com/codennomad/Butler",
    stars: 0,
    language: "Python",
    metric: "real-time VAD",
  },
  {
    slug: "nytheris-core",
    name: "nytheris_core",
    description:
      "URL shortener with modern architecture, real-time observability, and a touch of digital espionage. Production-ready with full monitoring stack.",
    stack: ["Python", "FastAPI", "Redis", "PostgreSQL"],
    category: "Backend",
    status: "OSS" as const,
    github: "https://github.com/codennomad/nytheris_core",
    stars: 1,
    language: "Python",
    metric: "real-time obs",
  },
  {
    slug: "abyss",
    name: "Abyss",
    description:
      "Personal protocol tracking platform. Define structured routines across mind, body, discipline, social and creative dimensions. XP system, heat score, and GitHub-style contribution grid.",
    stack: ["FastAPI", "React 19", "TypeScript", "PostgreSQL", "Alembic", "PWA"],
    category: "Backend",
    status: "LIVE" as const,
    demo: "https://abyss.codennomad.com",
    github: "https://github.com/codennomad/Abyss",
    stars: 0,
    language: "Python",
    metric: "5 categories",
  },
  {
    slug: "scryll",
    name: "Scryll",
    description:
      "Self-hosted manga and manhwa reader. Resilient Python scraping engine with Cloudflare bypass, rotating proxy pool, and circuit breakers. JWT-authenticated FastAPI backend + React reader UI.",
    stack: ["Python", "FastAPI", "React", "Vite", "Selenium", "PM2"],
    category: "Backend",
    status: "OSS" as const,
    github: "https://github.com/codennomad/Scryll",
    stars: 0,
    language: "Python",
    metric: "self-hosted",
  },
]

export const projectCategories = ["All", "Backend", "AI/ML", "Security", "Frontend", "OSS"] as const

export type ProjectCategory = (typeof projectCategories)[number]
export type ProjectStatus = "LIVE" | "OSS" | "WIP" | "ARCHIVED"
