# Portfolio — Especificação Completa
> Gabriel Henrique Ferreira Vieira · @codennomad  
> Atualizado em: 08/05/2026 (v2)

---

## 🎨 Paleta de Cores (Design System)

| Token CSS | Hex | Uso |
|---|---|---|
| `--background` | `#0a0a0f` | Fundo geral da página |
| `--card` | `#0d0d16` | Fundo de cards |
| `--popover` | `#0b0b12` | Fundo de popovers/dialogs |
| `--foreground` | `#e0e0e0` | Texto principal |
| `--card-foreground` | `#e0e0e0` | Texto dentro de cards |
| `--primary` | `#a855f7` | Cor de destaque principal (roxo) |
| `--primary-foreground` | `#ffffff` | Texto sobre botão/badge primário |
| `--secondary` | `#7c3aed` | Roxo mais escuro (hover, secundário) |
| `--secondary-foreground` | `#ffffff` | Texto sobre elementos secundários |
| `--muted` | `#1a1a2e` | Fundo de áreas discretas |
| `--muted-foreground` | `#555570` | Textos apagados, subtítulos, placeholders |
| `--accent` | `#a855f7` | Mesmo que primary |
| `--border` | `#1e1e2e` | Cor das bordas |
| `--input` | `#1a1a2e` | Fundo de inputs |
| `--ring` | `#a855f7` | Outline de foco |
| `--destructive` | `#ef4444` | Vermelho de erro |

### Efeitos visuais globais
- **Dot grid** — background pontilhado usando `radial-gradient` com bolinhas `#1a1a2e` a cada `32x32px` (Hero)
- **Scanlines** — overlay de linhas horizontais em toda a página, `opacity: 0.03`
- **Glass card** — `background: 2% white + transparent`, `backdrop-filter: blur(4px)`, borda `6% white`
- **Glow primário** — `box-shadow: 0 0 20px rgba(168,85,247, 0.3)` em botões CTA
- **Cursor piscando** — animação `blink` 1s loop no terminal
- **Scrollbar customizada** — 6px, thumb `#1e1e2e`, hover thumb `40% purple`
- **Seleção de texto** — background `25% purple`, cor `#a855f7`

### Fontes
| Fonte | Uso |
|---|---|
| **Space Grotesk** (Google Fonts) | Corpo, títulos (`font-sans`) |
| **JetBrains Mono** (Google Fonts) | Todo elemento `font-mono` |

---

## 📐 Estrutura de Páginas

```
/ (home)              → todas as seções
/blog                 → listagem de posts
/blog/[slug]          → post individual
```

---

## 🧩 Seções — Conteúdo Detalhado

---

### 1. NavBar (fixo, topo)

**Aparência:**  
- Fundo: transparente ao topo → ao rolar: `bg-background/80 + backdrop-blur-md + border-b`  
- Altura: `h-14`  
- Animação de entrada: `opacity 0 → 1, y -20 → 0` (500ms)

**Esquerda — Logo:**
```
Terminal icon  ~/codennomad
```
- Cor: `text-primary` (`#a855f7`), hover: `text-primary/80`
- Link: `/` (home)

**Centro — Links de Navegação (desktop md+):**
```
about    projects    skills    blog    contact
```
- Fonte: `font-mono text-xs`  
- Cor: `text-muted-foreground` → hover: `text-primary`  
- Comportamento: se estiver na home `/`, link vai para `#about`. Se estiver em outra página (ex: `/blog/post`), vai para `/#about` (volta para home + ancora)

**Direita:**
- Badge pulsante `● available` em `text-primary` (só se `available: true`)
- Ícone hamburger em mobile → abre Sheet lateral direita

**Mobile Sheet (menu lateral):**
- Fundo: `bg-card`, borda: `border-border`, largura: `w-72`
- Header: `~/navigation` em `text-muted-foreground`
- Links: `→ about`, `→ projects`, etc — cor `text-foreground` → hover `text-primary`
- Rodapé do sheet: link `github.com/codennomad`

---

### 2. Hero (tela cheia)

**Container:** `min-h-screen`, centralizado, fundo `dot-grid`  
**Camadas:**
1. `ParticleGraph` — canvas de partículas conectadas em roxo `rgba(168,85,247)` no fundo
2. Gradiente radial `ellipse 80%x60%` transparente → `#0a0a0f` nas bordas
3. Conteúdo centralizado `z-10`

**Conteúdo (de cima para baixo):**

```
~/codennomad $ whoami
```
- `font-mono text-sm`, cor: `text-primary`, `$` em `text-muted-foreground`, `whoami` em `text-foreground`

```
Software Engineer
```
- `text-5xl` / `6xl` / `7xl` bold  
- "Software" em `text-foreground` (#e0e0e0)  
- "Engineer" em `text-primary` (#a855f7) com `glow-primary-text`

```
[texto digitado animado]
```
- `font-mono text-base/lg`, cor: `text-muted-foreground`  
- Textos que ciclam com efeito de digitação:
  1. `Backend Engineer`
  2. `AI Systems Builder`
  3. `Cognitive Pipeline Designer`
  4. `Open Source Builder`
  5. `Low-Level Programmer`
  6. `Distributed Systems Architect`

```
I build systems that matter. Intelligent architectures,
cognitive pipelines and high-performance code.
Always remote.
```
- `text-base`, cor: `text-muted-foreground`  
- "Always remote." em `text-primary`

**Botões CTA:**
| Botão | Estilo | Ação |
|---|---|---|
| `→ Explore Projects` | borda `border-primary`, texto `text-primary`, hover: fundo roxo + glow `rgba(168,85,247,0.3)` | scroll para `#projects` |
| GitHub icon + `GitHub` | texto `text-muted-foreground`, hover: `text-primary` + `bg-muted` | abre `github.com/codennomad` |

**Indicador de scroll (bottom center):**  
Texto `scroll` + ícone `ChevronDown` pulsando, `opacity: 0.4` → hover `0.8`, link para `#about`

---

### 3. About

**Subtítulo:** `## about.md` em `font-mono text-xs text-primary`  
**Título:** `About` — `text-3xl/4xl font-bold text-foreground`

**Layout:** 2 colunas em `lg` (desktop)

#### Coluna esquerda — Bio
```
Software engineer obsessed with building things that matter — from high-throughput
backend systems to cognitive AI pipelines. I write Python, Rust, C/C++ and TypeScript.
Always remote. Always shipping.
```
```
I build solutions ranging from cognitive AI pipelines to robust C and C++ development,
automation tools, bots, high-performance APIs, and intelligent data systems.
```
```
My focus: solid, performant, intelligent, and well-architected systems
— that don't just work, they think, learn, and deliver real value.
```
- "solid, performant..." em `text-primary`

**Fun Facts (glass-card):**
```js
// timezone:            UTC-3 (Minas Gerais, BR)
// coffee_level:        critical
// currently_building:  Souljin AI VTuber
// currently_learning:  Rust + distributed systems
// open_to:             remote contracts, OSS collabs
```
- `//` em `text-muted-foreground`, chave em `text-secondary` (#7c3aed), valor em `text-primary`

**Tech Stack Badges:**  
Subtítulo `## tech_stack` + badges das linguagens e backend primários  
Badge primário: fundo `primary/10`, borda `primary/30`, texto `primary`

#### Coluna direita — Duas timelines lado a lado
Layout: `sm:grid-cols-2` — as duas colunas ficam lado a lado em tablet/desktop e empilhadas em mobile.

**`## career_path`** — evolução técnica (dot `bg-primary/20`, borda `border-primary/60`)

| Ano | Cargo | Empresa | Stack |
|---|---|---|---|
| 2026 | Mid-level Backend + AI Engineer | Freelance / OSS | Python, Rust, TypeScript, FastAPI |
| 2025 | Backend Engineer | Projects & Open Source | Rust, Python, Docker, PostgreSQL |
| 2024 | Full-Stack Developer | Self-Taught & Bootcamps | Python, FastAPI, Node.js, React |
| 2023 | Software Engineering Student | Learning Phase | Python, C, SQL, JavaScript |

**`## work_experience`** — empregos reais (dot `bg-secondary/30`, borda `border-secondary/70`)

| Período | Cargo | Empresa | Tipo |
|---|---|---|---|
| 2024 — present | Backend & AI Engineer | Freelancer | Freelance · Remote |
| Jul 2025 — present | Analista de Sistemas | Gigantão Engenharia de Movimentação | Full-time · Presencial |
| Jul 2025 | Consultor de Automação e Infraestrutura | Oral Blue – Clínicas Odontológicas | Temporary · Remote |

---

### 4. Projects

**Subtítulo:** `$ git log --all --author=codennomad` em `font-mono text-xs text-primary`  
**Título:** `Projects`

**Filtros por categoria (Tabs):**  
`All` · `Backend` · `AI/ML` · `Security` · `Frontend` · `OSS`  
- Aba ativa: `bg-primary text-primary-foreground`  
- Inativa: `font-mono text-xs text-muted-foreground`

**Grid de projetos (3 colunas desktop, 2 tablet, 1 mobile):**

| Projeto | Descrição | Stack | Categoria | Status |
|---|---|---|---|---|
| **analytics-saas** | Production-Grade Real-Time Analytics Platform. Multi-tenant SaaS com sub-200ms ingestion, ClickHouse OLAP, e observabilidade enterprise. | TypeScript, Next.js, Fastify, Kubernetes, Redis, Stripe | Backend | LIVE |
| **csv_parsing** | High-performance CSV parser: C99 5-state machine + Rust runtime + Python bindings. 41 MiB/s throughput, zero-copy mmap, GIL-free PyO3. | Rust, C99, Python, PyO3 | Backend | LIVE |
| **Feature_Flags** | Production-grade feature flag platform em Python. Sub-millisecond evaluation via in-process cache, 5-level targeting, JWT/RBAC auth, Redis pub/sub. | Python, Redis, PostgreSQL, JWT, FastAPI | Backend | LIVE |
| **aegis-workers** | Production-grade async job processing system. At-least-once delivery, idempotency, DLQ com manual retry, exponential backoff, full observability. | Python, Celery, Redis, PostgreSQL, FastAPI | Backend | LIVE |
| **SAE** | Secure Anonymous Echo — ephemeral encrypted messenger em Rust. X25519 + ChaCha20-Poly1305, zero data persistence (RAM-only), trustless architecture. | Rust, X25519, ChaCha20, TUI | Security | LIVE |
| **NoctiVox** | AI pipeline que transcreve vídeos e gera títulos SEO-otimizados usando Whisper + GPT. Production-ready multimedia content processor. | Python, Whisper, GPT, FastAPI | AI/ML | LIVE |
| **LIENYX** | AI-powered content transformer. Converte vídeos, PDFs e áudios em notas inteligentes e resumos com backend de AI cognitiva. | Python, AI, FastAPI, LangChain | AI/ML | LIVE |
| **Message_Broker** | Custom message broker em Rust — async TCP server com Tokio, broadcast channels e protocolo de frame binário para pub/sub multi-subscriber. | Rust, Tokio, TCP, Pub/Sub | Backend | LIVE |
| **Butler** | Voice-driven AI assistant — speech recognition em tempo real com Faster Whisper + VAD, LLM conversacional via OpenRouter, GPU-accelerated. | Python, Whisper, GPT-4, VAD | AI/ML | LIVE |
| **nytheris_core** | URL shortener com arquitetura moderna, observabilidade em tempo real e full monitoring stack. | Python, FastAPI, Redis, PostgreSQL | Backend | LIVE |

**Card de projeto:**
- Fundo: `glass-card` (glassmorphism)
- Hover: `border-primary/40` + `shadow rgba(168,85,247,0.08)`
- Badge de status LIVE: texto + borda + fundo em `primary/10`
- Badge de status WIP: amarelo `yellow-400`
- Stars e forks em `text-muted-foreground`
- Linguagem com bolit `●` em `text-primary`
- Stack: badges pequenos `secondary/20`
- Clique no card abre Dialog com detalhes + botão GitHub

---

### 5. Skills

**Subtítulo:** `## system.map` em `font-mono text-xs text-primary`  
**Título:** `Skills`  
**Subtítulo extra:** `› scanning capability modules... 6/6 loaded` com cursor pulsante
**Fundo da seção:** grid sutil de `40×40px` em roxo `opacity 2.5%`

**Grid 3 colunas (desktop), 2 (tablet), 1 (mobile):**

| Categoria | Module ID | Itens primários | Itens secundários |
|---|---|---|---|
| **Languages** | LANG_SYS | Python, C, C++, Rust, TypeScript, SQL | JavaScript |
| **Backend** | BACK_SVC | FastAPI, Node.js, PostgreSQL, Redis, Celery | Flask, Microservices |
| **AI / ML** | AI__CORE | LangChain, OpenAI API, Whisper, FAISS, RAG, Embeddings | ChromaDB, NLP |
| **DevOps** | DEV_OPS_ | Docker, GitHub Actions, Linux, Git | Kubernetes, Vercel |
| **Architecture** | ARCH_MOD | Clean Architecture, Cognitive Pipelines, Distributed Systems | Event-Driven, CQRS |
| **Security** | SEC_GATE | OWASP, Cryptography, JWT / Auth | Pentesting |

**Card de módulo (por categoria):**
- Fundo: `bg-card/60 backdrop-blur`, borda `border-border` → hover: `border-primary/50` + glow `rgba(168,85,247,0.1)`
- **Scan line** no topo: linha roxa aparece no hover via `group-hover:opacity-100`
- **Header**: `◈ LANGUAGES` bold monospace + badge `LANG_SYS` com ponto pulsante
- **Primários**: badges neon roxo — hover acende `shadow-[0_0_8px_rgba(168,85,247,0.35)]`
- **Secundários**: separados por linha pontilhada, dashed border, texto `opacity-50`
- **Status bar** no rodapé: `Nx primary · Nx extended` + `STATUS: OK`

---

### 6. Blog (Thoughts in Public)

**Subtítulo:** `## /notes` em `font-mono text-xs text-primary`  
**Título:** `Thoughts in Public`  
**Link topo direito:** `View all →` (visível apenas em desktop)  
**Link rodapé:** `View all posts →` (visível apenas em mobile)  

**Grid de posts (3 colunas desktop):**  
Exibe os 3 posts mais recentes.

**Posts disponíveis (11 total):**

| Slug | Título | Data | Tags |
|---|---|---|---|
| `cognitive-ai-pipelines` | Building Cognitive Pipelines with LangChain and FAISS | 10/12/2025 | AI, LangChain, Python, RAG, Backend |
| `csv-parser-rust-c99` | 41 MiB/s CSV Parser: C99 + Rust + Python Together | 15/01/2026 | Rust, C, Python, Performance, Systems |
| `ai-pipelines-production-failures` | When AI Pipelines Fail in Production | 28/01/2026 | AI, Python, Reliability, Backend |
| `message-broker-rust` | Building a Message Broker in Rust | 10/02/2026 | Rust, Tokio, Systems, Backend |
| `supply-chain-attacks` | The Silent Threat: Supply Chain Attacks | 24/02/2026 | Security, DevOps, Python |
| `systems-that-feel-instant` | Systems That Feel Instant | 10/03/2026 | Performance, Backend, Architecture |
| `linux-rats-analysis` | Linux RATs: A Technical Analysis | 24/03/2026 | Security, Linux, Systems |
| `python-is-not-slow` | Python Is Not Slow, You Are | 07/04/2026 | Python, Performance, Rust, Systems |
| `resilience-engineering` | Resilience Engineering for Backend Systems | 21/04/2026 | Backend, Architecture, Reliability |
| `microservices-complexity` | The Hidden Cost of Microservices | 05/05/2026 | Architecture, Backend, Systems |
| `cognitive-systems-engineering` | Cognitive Systems Engineering | 08/05/2026 | AI, Architecture, Systems |

**Card de post:**
- Fundo: `glass-card`
- Hover: `border-primary/40` + `shadow rgba(168,85,247,0.06)`
- Título: `text-sm font-semibold text-foreground` → hover: `text-primary`
- Tags: badges pequenos `secondary/20`
- Data: `font-mono text-xs text-muted-foreground`
- Tempo de leitura estimado

---

### 7. Contact

**Subtítulo:** `## /connect` em `font-mono text-xs text-primary`  
**Título:** `Get in Touch`

**Layout:** 2 colunas

#### Coluna esquerda — Redes sociais
Cada link tem ícone + label + valor:

| Rede | Link | Exibido |
|---|---|---|
| GitHub | `github.com/codennomad` | `github.com/codennomad` |
| LinkedIn | `linkedin.com/in/gabrielhenrique-tech` | `in/gabrielhenrique-tech` |
| YouTube | canal YouTube | `YouTube Channel` |
| Instagram | `@codennomad` | `@codennomad` |
| Email | `gabrielheh03@gmail.com` | `gabrielheh03@gmail.com` |

Botão **Copy Email**: `Copy` / `Copied!` com ícone `Copy` / `Check`

#### Coluna direita — Terminal interativo
**Prompt:** `~/codennomad $`  
**Texto inicial:** `Type "help" to see available commands.`  
**Fundo:** `bg-card` com borda `border-border`  
**Entrada de input:** cursor piscando, suporte a histórico (↑↓)

**Comandos disponíveis:**
```
help      → lista todos os comandos
whoami    → about Gabriel Henrique
skills    → main tech stack
projects  → featured projects
contact   → ways to reach me
github    → abre GitHub no navegador
clear     → limpa o terminal
matrix    → ;)
```

**Saída de `whoami`:**
```
Gabriel Henrique
Handle: codennomad
Role: Mid-level Backend + AI Engineer
Location: Minas Gerais, Brazil
Status: ● Available for remote contracts
"I don't just build software. I design intelligent, high-performance, living systems."
```

**Saída de `matrix`:**
```
01001000 01100001 01100011 01101011 01100101 01110010
███╗░░░███╗░█████╗░████████╗██████╗░██╗██╗░░██╗
░░░ ACCESS GRANTED ░░░
Welcome to the matrix, codennomad.
```

**Cores do terminal:**
- Input digitado: `text-primary`
- Output: `text-muted-foreground`
- Erro: `text-destructive` (`#ef4444`)

---

### 8. Footer

```
~/codennomad · built with Next.js + TypeScript
```
- `~/` em `text-primary`, resto em `text-muted-foreground`
- Lado direito: ícones das redes sociais (GitHub, LinkedIn, YouTube, Instagram, Email)  
  - Cor: `text-muted-foreground` → hover: `text-primary`

---

## 🌐 Página Blog `/blog`

**Título:** `Thoughts on software engineering, systems, and AI`  
**Subtítulo:** Listagem de todos os posts com busca por tag  
**Link voltar:** `← back` linkando para `/`

---

## ⌨️ Command Palette (`Ctrl+K`)

**Groups disponíveis:**

**Navigation:**  
Home · About · Projects · Skills · Blog · Contact

**Projects:**  
Lista todos os projetos — clique abre o GitHub

**Links:**  
GitHub (abre `github.com/codennomad`)

---

## 📡 Informações Pessoais

| Campo | Valor |
|---|---|
| Nome | Gabriel Henrique |
| Handle | codennomad |
| Cargo | Mid-level Backend + AI Engineer |
| Localização | Minas Gerais, Brazil |
| Timezone | UTC-3 |
| Disponível | ✅ Sim (open to remote contracts) |
| GitHub | https://github.com/codennomad |
| LinkedIn | https://www.linkedin.com/in/gabrielhenrique-tech |
| YouTube | https://www.youtube.com/channel/UCbC4Y4xa7pg06pdtAj8A21g |
| Instagram | https://www.instagram.com/codennomad |
| ORCID | https://orcid.org/0009-0005-2878-741X |
| Email | gabrielheh03@gmail.com |
| Site | https://codennomad.dev |

**Tagline:**  
> "I don't just build software. I design intelligent, high-performance, living systems."

**Bio:**  
> Software engineer obsessed with building things that matter — from high-throughput backend systems to cognitive AI pipelines. I write Python, Rust, C/C++ and TypeScript. Always remote. Always shipping.

---

## ⚙️ Stack Técnica do Portfolio

| Tecnologia | Versão / Detalhe |
|---|---|
| Next.js | 16.2.6 (App Router, React 19, Turbopack) |
| TypeScript | Strict mode |
| Tailwind CSS | v4 (CSS-first, sem `tailwind.config.js`) |
| @tailwindcss/typography | 0.5.19 — via `@plugin` em globals.css |
| shadcn/ui | style: `base-nova` (usa `@base-ui/react`, sem Radix) |
| Framer Motion | v12.38.0 |
| next-mdx-remote | 6.0.0 — Blog MDX (rsc) |
| rehype-highlight | 7.0.2 — syntax highlighting nos posts |
| highlight.js | 11.11.1 |
| gray-matter | Frontmatter dos posts |
| pnpm | Package manager |
| Porta dev | `4010` (`next dev -p 4010`) |

---

## 📁 Estrutura de Arquivos

```
app/
  layout.tsx          → root layout (lang=en, SEO, fonts)
  page.tsx            → home com todas as seções
  loading.tsx         → skeleton de carregamento
  globals.css         → tema hacker, variáveis CSS, Tailwind v4
  blog/
    page.tsx          → listagem de posts
    [slug]/page.tsx   → post individual

components/
  effects/
    ParticleGraph.tsx → canvas de partículas roxas animadas
    TypedText.tsx     → efeito de digitação no Hero
    ScanlineOverlay.tsx → overlay de scanlines CRT
  sections/
    Hero.tsx          → seção inicial (tela cheia)
    About.tsx         → bio + timeline + tech stack
    Projects.tsx      → grid de projetos com filtro
    Skills.tsx        → grid de habilidades por categoria
    Blog.tsx          → server component (busca posts)
    BlogGrid.tsx      → client component (renderiza cards animados)
    Contact.tsx       → redes sociais + terminal interativo
  shared/
    NavBar.tsx        → header fixo com nav
    Footer.tsx        → rodapé com redes sociais
    CommandPalette.tsx → Ctrl+K search
    ProjectCard.tsx   → card de projeto animado
    SkillBadge.tsx    → badge de habilidade
    BrandIcons.tsx    → SVG icons (GitHub, LinkedIn, YouTube, Instagram)

lib/
  data.ts             → todos os dados estáticos do portfolio
  github.ts           → GitHub GraphQL API (ISR 3600s)
  mdx.ts              → parser de posts MDX
  utils.ts            → utilitários (cn, formatDate en-US)

content/
  blog/
    cognitive-ai-pipelines.mdx
    csv-parser-rust-c99.mdx
    ai-pipelines-production-failures.mdx
    message-broker-rust.mdx
    supply-chain-attacks.mdx
    systems-that-feel-instant.mdx
    linux-rats-analysis.mdx
    python-is-not-slow.mdx
    resilience-engineering.mdx
    microservices-complexity.mdx
    cognitive-systems-engineering.mdx
```
