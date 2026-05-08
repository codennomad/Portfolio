# 🧠 PORTFOLIO TOP 1% — PROMPT DEFINITIVO
**Stack: Next.js 15 + TypeScript + Tailwind v4 + shadcn/ui + Framer Motion**
**Identidade: Hacker Underground Elite**

---

## COMO USAR
Cole esse prompt inteiro no **Claude Code**, **Cursor** ou **Windsurf**.
Para seções individuais, use no **v0.dev**.

---

## O PROMPT

```
Você é um engenheiro frontend sênior e designer de sistemas especializado em portfolios de elite para desenvolvedores internacionais.

Construa um portfolio pessoal completo e funcional usando o seguinte stack e especificações:

════════════════════════════════════════════════════════
STACK TÉCNICO OBRIGATÓRIO
════════════════════════════════════════════════════════

Framework:    Next.js 15 (App Router, React 19)
Linguagem:    TypeScript — strict mode, sem "any"
Estilização:  Tailwind CSS v4 (CSS-first config)
Componentes:  shadcn/ui (tema customizado "hacker")
Animações:    Framer Motion v11
Ícones:       Lucide React
Fontes:       next/font → JetBrains Mono + Space Grotesk
Deploy:       Vercel
Linting:      ESLint + Prettier + Husky pre-commit

════════════════════════════════════════════════════════
CONFIGURAÇÃO SHADCN — TEMA "HACKER"
════════════════════════════════════════════════════════

Execute na raiz do projeto:
  npx shadcn@latest init

Ao iniciar, selecione: Style → Default, Base color → Zinc, CSS variables → yes

Em seguida sobrescreva o arquivo globals.css com este tema customizado:

@layer base {
  :root {
    --background: 222 47% 4%;          /* #0a0a0f */
    --foreground: 0 0% 88%;            /* #e0e0e0 */
    --card: 222 47% 6%;
    --card-foreground: 0 0% 88%;
    --popover: 222 47% 5%;
    --popover-foreground: 0 0% 88%;
    --primary: 152 100% 50%;           /* #00ff88 verde terminal */
    --primary-foreground: 222 47% 4%;
    --secondary: 217 91% 60%;          /* #3b82f6 azul elétrico */
    --secondary-foreground: 0 0% 100%;
    --muted: 222 30% 12%;
    --muted-foreground: 0 0% 40%;
    --accent: 152 100% 50%;
    --accent-foreground: 222 47% 4%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 222 30% 14%;
    --input: 222 30% 12%;
    --ring: 152 100% 50%;
    --radius: 0.5rem;
  }
}

Componentes shadcn a instalar:
  npx shadcn@latest add button card badge dialog sheet
  npx shadcn@latest add tabs tooltip separator skeleton
  npx shadcn@latest add command input label textarea

Personalize cada componente para o tema hacker:
  - Button variante "terminal": borda verde, fundo transparente, hover com glow
  - Card: glassmorphism (backdrop-blur-sm, borda sutil, fundo rgba)
  - Badge: estilo de terminal tag com fonte mono
  - Dialog: fundo ultra-dark com borda accent

════════════════════════════════════════════════════════
IDENTIDADE VISUAL — "UNDERGROUND ELITE TERMINAL"
════════════════════════════════════════════════════════

CONCEITO:
Como se o portfolio fosse o painel de controle de um hacker de elite.
Cada seção é um "módulo do sistema". A navegação é um terminal.
Inspiração: Obsidian + Linear + Vercel + Raycast

PALETA (via CSS variables do shadcn):
  background:   #0a0a0f   — preto profundo com toque azulado
  foreground:   #e0e0e0   — texto principal
  primary:      #00ff88   — verde terminal (CTAs, cursor, accent)
  secondary:    #3b82f6   — azul elétrico (links, destaques)
  muted:        #1a1a2e   — superfícies elevadas
  border:       #1e1e2e   — bordas sutis
  muted-fg:     #555570   — texto secundário

TIPOGRAFIA:
  Display:  Space Grotesk 600 — headings grandes
  Code:     JetBrains Mono 400/500 — labels, terminal, badges
  Body:     Space Grotesk 400 — parágrafos

EFEITOS (implementar com CSS + Tailwind + Framer Motion):
  1. Scanlines overlay — pseudo-elemento fixo, opacity 0.04
     background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 4px)

  2. Grid de pontos no background do hero
     background-image: radial-gradient(circle, #1a1a2e 1px, transparent 1px)
     background-size: 32px 32px

  3. Glow no primary accent (hover states)
     box-shadow: 0 0 20px rgba(0,255,136,0.3)

  4. Cursor piscante
     animate-pulse com width 2px, height 1.2em, bg-primary

  5. Glassmorphism nos cards
     backdrop-blur-sm, bg-white/[0.02], border border-white/[0.06]

════════════════════════════════════════════════════════
ESTRUTURA DE ARQUIVOS
════════════════════════════════════════════════════════

/app
  layout.tsx              — metadata global, fonts, providers
  page.tsx                — home: todas as seções em ordem
  /blog
    page.tsx              — listagem de posts
    /[slug]
      page.tsx            — post individual em MDX
  /projects
    /[slug]
      page.tsx            — detalhe do projeto (OG dinâmico)

/components
  /ui                     — shadcn (não editar diretamente)
  /sections
    Hero.tsx
    About.tsx
    Projects.tsx
    Skills.tsx
    Blog.tsx
    Contact.tsx
  /effects
    ParticleGraph.tsx     — Three.js / tsParticles
    TerminalPrompt.tsx    — terminal interativo
    TypedText.tsx         — texto rotacionando
    ScanlineOverlay.tsx   — efeito CRT
    GraphView.tsx         — D3.js force-directed (Obsidian style)
  /shared
    NavBar.tsx
    Footer.tsx
    ProjectCard.tsx
    BlogCard.tsx
    SkillBadge.tsx
    CommandPalette.tsx    — ⌘K palette de navegação

/lib
  github.ts               — GitHub GraphQL API
  mdx.ts                  — parser MDX para blog
  data.ts                 — dados estáticos (bio, skills, links)
  utils.ts                — cn() e helpers

/content
  /blog                   — arquivos .mdx dos posts
  /projects               — metadados extras por projeto

/public
  og-default.png
  favicon.svg             — logo em SVG com tema hacker

════════════════════════════════════════════════════════
SEÇÕES — IMPLEMENTAÇÃO DETALHADA
════════════════════════════════════════════════════════

── 1. NAVBAR ──────────────────────────────────────────

Layout: fixed top, backdrop-blur, border-bottom sutil
Esquerda: logo "~/ codennomad" em JetBrains Mono + verde
Centro: links de navegação em mono minúsculo
Direita: [⌘K] + status badge "● available" pulsando
Mobile: Sheet do shadcn com menu full-screen estilo terminal
Animação: fade-in + slide-down com Framer Motion ao montar

── 2. HERO ─────────────────────────────────────────────

Layout: full viewport height, centralizado, partículas no bg

Conteúdo:
  Linha 1 (mono, verde, pequeno):
    "~/codennomad $ whoami"

  Linha 2 (Space Grotesk, 72px, bold):
    "Full-Stack" ← cor normal
    "Engineer"   ← cor primary (verde)
    + cursor piscando

  Linha 3 (TypedText rotacionando, mono, muted):
    ["Security Researcher", "OSS Builder", "Digital Nomad", "System Architect"]

  Linha 4 (bio curta, 1 linha, muted-foreground):
    "Construo sistemas que importam. Sempre remoto. Sempre em movimento."

  CTAs (shadcn Button customizado):
    [→ Explorar Projetos]   — variante "terminal" (borda verde, hover glow)
    [↗ GitHub]              — variante ghost

Background:
  tsParticles com nós conectados (densidade média, cor #00ff88 opacity 0.3)
  Ou Three.js com Points geometry

Scroll indicator:
  "scroll ↓" em mono, opacity 0.3, animação bounce

── 3. SOBRE — "README.md" ─────────────────────────────

Layout: 2 colunas (texto | timeline) em desktop, stack mobile

Coluna esquerda:
  Header estilo arquivo: "## about.md"
  Parágrafos de bio em prosa
  Seção de tech stack com SkillBadge components (shadcn Badge customizado)
  Fun facts em formato de comentário:
    // timezone: UTC-3 (Minas Gerais, BR)
    // coffee_level: critical
    // currently_learning: Rust
    // open_to: remote contracts, OSS

Coluna direita (Timeline):
  Linha vertical conectora (borda esquerda, cor primary)
  Cada evento: dot colorido + ano + título + empresa/stack
  Animação: cada item aparece com staggered fade-in ao entrar no viewport

── 4. PROJETOS — "git log --oneline" ──────────────────

Header:
  "$ git log --all --author=codennomad" em mono verde

Filtros (shadcn Tabs):
  [Todos] [Frontend] [Backend] [Security] [AI/ML] [OSS]
  Filtro por linguagem sem reload (estado React)

Grid de ProjectCards (shadcn Card customizado):
  Layout: masonry ou grid 3col → 2col → 1col
  Card contém:
    - Header: nome + ícone de linguagem
    - Descrição: 2 linhas com truncate
    - Stack badges (2-3 tags coloridas por linguagem)
    - Footer: [⭐ stars] [🍴 forks] [status badge] [↗ link]
    - Status: LIVE (verde) | WIP (amarelo) | ARCHIVED (cinza)
  Hover: borda primary ilumina + scale(1.01)
  Click: abre Dialog do shadcn com detalhe completo

GRAPH VIEW (diferencial Obsidian):
  Botão toggle: [◉ Graph View] acima do grid
  Quando ativo, o grid se transforma em:
    - Canvas D3.js force-directed graph
    - Nós circulares: projetos (maior) + tecnologias (menor)
    - Arestas: conexão projeto ↔ tecnologia que usa
    - Hover no nó: tooltip com Card do shadcn
    - Click no nó-projeto: navega para detalhe
    - Zoom, pan, drag habilitados
    - Cores: projetos = primary, tech = secondary, muted = archived

Dados:
  Buscar via GitHub API (lib/github.ts) com ISR (revalidate: 3600)
  Complementar com metadados locais em /content/projects

── 5. SKILLS — "system.map" ───────────────────────────

Layout: seções por categoria com badges agrupados

Categorias:
  ◈ Languages    → TypeScript, Python, Rust, Go, SQL
  ◈ Frontend     → React, Next.js, Tailwind, Framer Motion
  ◈ Backend      → Node.js, FastAPI, PostgreSQL, Redis
  ◈ DevOps       → Docker, GitHub Actions, Vercel, AWS
  ◈ Security     → OWASP, Pentesting, Cryptography
  ◈ AI/ML        → LangChain, OpenAI API, HuggingFace

Visual de cada SkillBadge:
  - shadcn Badge com variante customizada
  - Ícone da tecnologia (Simple Icons via CDN)
  - Nome em mono
  - Nível implícito via opacidade (principal = 100%, learning = 60%)

Animação: staggered reveal ao scroll com Framer Motion viewport

── 6. BLOG/NOTAS — "knowledge vault" ──────────────────

Estilo: Obsidian-inspired dark knowledge base

Header: "## /notes — pensamentos em público"

Grid de BlogCards (shadcn Card):
  - Título + data em mono
  - Tags clicáveis (filtram posts)
  - Preview: primeiras 2 linhas
  - Tempo de leitura estimado
  - Indicador se tem backlinks

Página de post (/blog/[slug]):
  - Layout editorial: max-w-2xl, centralizado
  - Barra de progresso de leitura (top da tela, cor primary)
  - TOC flutuante na direita (desktop)
  - Syntax highlighting com Shiki (tema "github-dark")
  - Backlinks ao final: "← posts relacionados"
  - OG image gerada dinamicamente com next/og

Engine:
  next-mdx-remote + gray-matter
  Shiki para código
  Rehype plugins: rehype-slug, rehype-autolink-headings

── 7. CONTATO — "send_message()" ──────────────────────

Layout: 2 colunas (links | formulário-terminal)

Coluna esquerda:
  Links sociais com ícones Lucide:
    [GitHub]   github.com/codennomad
    [LinkedIn] linkedin.com/in/...
    [Email]    email com copy-on-click
    [Telegram] @...

Coluna direita (Terminal interativo):
  Input estilo CLI com prompt "$ "
  Comandos disponíveis:
    help      → lista comandos
    contact   → mostra formulário real (shadcn Form)
    projects  → lista projetos
    whoami    → bio rápida
    clear     → limpa terminal
    matrix    → easter egg (chuva de código)
    hack      → easter egg (fake hacking screen)
  Histórico de comandos com ↑↓
  Autocompletar com Tab

════════════════════════════════════════════════════════
FUNCIONALIDADES ESPECIAIS ELITE
════════════════════════════════════════════════════════

1. ⌘K COMMAND PALETTE
   shadcn Command component
   Busca projetos, posts, seções
   Atalhos de navegação rápida
   Atalho: Ctrl+K / ⌘K

2. GITHUB STATS AO VIVO (via GitHub GraphQL API)
   Total de commits (último ano)
   Linguagens mais usadas (% por cor)
   Repos públicos com mais stars
   Contribution streak
   Cache via ISR (revalidate: 3600)

3. MODO KONAMI (easter egg secreto)
   Sequência: ↑↑↓↓←→←→BA
   Ativa: tema CRT intenso + scanlines fortes + som de terminal
   Texto muda para verde puro, aparece "ACESSO CONCEDIDO"

4. CURSOR CUSTOMIZADO
   Cursor padrão: ponteiro normal
   Em links/botões: cursor especial com efeito de trail verde
   Implementar com Framer Motion + useMousePosition

5. OPEN GRAPH DINÂMICO
   /app/projects/[slug]/opengraph-image.tsx
   Card dark com nome do projeto + stack + logo
   /app/blog/[slug]/opengraph-image.tsx
   Card dark com título + data + tags

════════════════════════════════════════════════════════
SEGURANÇA E PERFORMANCE
════════════════════════════════════════════════════════

next.config.ts — headers de segurança:

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https://avatars.githubusercontent.com https://raw.githubusercontent.com",
      "connect-src 'self' https://api.github.com",
    ].join('; '),
  },
]

Performance:
  - next/font para fontes (zero CLS)
  - next/image em todos os <img>
  - React.lazy + Suspense para componentes pesados (Three.js, D3)
  - loading.tsx por rota
  - ISR nos dados do GitHub (revalidate: 3600)
  - Lighthouse score alvo: 100/100/100/100

Variáveis de ambiente:
  GITHUB_TOKEN=           — GitHub PAT (read:user, read:packages)
  NEXT_PUBLIC_SITE_URL=   — URL de produção
  RESEND_API_KEY=         — envio de email do formulário de contato

════════════════════════════════════════════════════════
SEO COMPLETO
════════════════════════════════════════════════════════

/app/layout.tsx — metadata base:

export const metadata: Metadata = {
  title: { default: 'CodeNomad — Full-Stack Engineer', template: '%s | CodeNomad' },
  description: 'Full-Stack Engineer especializado em sistemas distribuídos, segurança e OSS. Disponível para projetos remotos.',
  keywords: ['full-stack', 'typescript', 'next.js', 'security', 'developer'],
  authors: [{ name: 'CodeNomad', url: 'https://codennomad.dev' }],
  creator: 'CodeNomad',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    siteName: 'CodeNomad',
  },
  twitter: { card: 'summary_large_image', creator: '@codennomad' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

Adicionar também:
  /app/sitemap.ts         — sitemap dinâmico (projetos + posts)
  /app/robots.ts          — robots.txt
  /public/schema.json     — JSON-LD Person + SoftwareSourceCode

════════════════════════════════════════════════════════
ORDEM DE DESENVOLVIMENTO RECOMENDADA
════════════════════════════════════════════════════════

Fase 1 — Base (1-2 dias):
  [ ] Setup Next.js 15 + TypeScript strict
  [ ] Configurar Tailwind v4 + tema shadcn hacker
  [ ] Instalar componentes shadcn necessários
  [ ] Configurar fontes com next/font
  [ ] NavBar + Footer + layout global
  [ ] ScanlineOverlay + grid background

Fase 2 — Hero + About (1 dia):
  [ ] Hero com TypedText + partículas
  [ ] Seção About com timeline animada
  [ ] Skill badges

Fase 3 — Projetos (2 dias):
  [ ] GitHub API integration (lib/github.ts)
  [ ] ProjectCard component
  [ ] Grid com filtros
  [ ] Dialog de detalhe
  [ ] Graph View com D3.js

Fase 4 — Blog (1 dia):
  [ ] Setup MDX + Shiki
  [ ] BlogCard + listagem
  [ ] Página de post com TOC + progresso

Fase 5 — Contato + Extras (1 dia):
  [ ] Terminal interativo
  [ ] Command Palette (⌘K)
  [ ] Easter eggs
  [ ] Open Graph dinâmico

Fase 6 — Qualidade (1 dia):
  [ ] Lighthouse 100/100
  [ ] SEO completo
  [ ] Security headers
  [ ] Testes básicos
  [ ] Deploy Vercel + domínio

════════════════════════════════════════════════════════
ENTREGÁVEIS FINAIS
════════════════════════════════════════════════════════

1. Repositório GitHub completo e organizado
2. README.md com: setup local, variáveis de ambiente, estrutura
3. .env.example documentado
4. next.config.ts com todos os headers de segurança
5. Componentes 100% tipados (TypeScript strict, zero "any")
6. Mobile-first, responsivo em todos os breakpoints
7. Lighthouse: Performance 100, Accessibility 95+, SEO 100
8. Comentários em inglês nos componentes complexos

USERNAME GITHUB: codennomad
Busque repositórios automaticamente via GitHub GraphQL API.
Popule o portfolio com dados reais, usando ISR para cache.
```

---

## COMANDOS DE SETUP

```bash
# 1. Criar o projeto
npx create-next-app@latest portfolio \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd portfolio

# 2. Instalar dependências principais
npm install framer-motion lucide-react next-mdx-remote gray-matter
npm install @types/d3 d3 three @types/three
npm install shiki rehype-slug rehype-autolink-headings
npm install resend zod react-hook-form @hookform/resolvers

# 3. Inicializar shadcn
npx shadcn@latest init

# 4. Instalar componentes shadcn
npx shadcn@latest add button card badge dialog sheet
npx shadcn@latest add tabs tooltip separator skeleton
npx shadcn@latest add command input label textarea form

# 5. Iniciar servidor de desenvolvimento
npm run dev
```

---

## REFERÊNCIAS DE INSPIRAÇÃO

| Site | O que pegar |
|------|-------------|
| obsidian.md | Graph view, dark linked notes |
| linear.app | Cards, motion, grid clean |
| raycast.com | Hero com terminal, animations |
| vercel.com | Dark clean, product feel |
| leerob.io | Portfolio de dev bem feito |
| antfu.me | Minimalismo técnico elegante |