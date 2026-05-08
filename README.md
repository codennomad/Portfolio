# codennomad.dev — Portfolio

> Personal portfolio of **Gabriel Henrique** (@codennomad)
> Backend & AI Engineer · Minas Gerais, Brazil · Always remote.

Live at **[codennomad.dev](https://codennomad.dev)**

---

## Stack

| Technology | Version | Notes |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.6 | App Router · React 19 · Turbopack |
| [TypeScript](https://www.typescriptlang.org) | 5 | Strict mode |
| [Tailwind CSS](https://tailwindcss.com) | v4 | CSS-first config, no `tailwind.config.js` |
| [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) | 0.5.19 | Blog prose styling |
| [shadcn/ui](https://ui.shadcn.com) | base-nova | Uses `@base-ui/react` (no Radix) |
| [Framer Motion](https://www.framer.com/motion) | 12 | Animations (client components only) |
| [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) | 6.0.0 | MDX blog rendering (RSC) |
| [rehype-highlight](https://github.com/rehypejs/rehype-highlight) | 7.0.2 | Syntax highlighting in posts |
| [pnpm](https://pnpm.io) | — | Package manager |

---

## Features

- **Hacker dark theme** — deep purple accent (`#a855f7`), dot-grid background, CRT scanline overlay
- **Animated Hero** — particle network canvas, typewriter cycling effect, scroll indicator
- **About** — bio, fun facts, dual timeline (career path + real work experience)
- **Projects** — 10 production projects with category filter tabs and detail dialogs
- **Skills** — cyber module cards with module IDs, neon glow badges, scan line on hover
- **Blog** — 11 long-form technical posts rendered from MDX with syntax highlighting
- **Contact** — social links, copy-email button, interactive terminal (`help`, `whoami`, `matrix`...)
- **Command Palette** — `Ctrl+K` for navigation and quick project access
- **SEO** — `generateMetadata`, `sitemap.ts`, `robots.ts` with dynamic post URLs

---

## Project Structure

```
app/
  layout.tsx            root layout (fonts, SEO, CommandPalette, ScanlineOverlay)
  page.tsx              home — all sections in order
  loading.tsx           skeleton loader
  globals.css           Tailwind v4 theme, CSS variables, syntax highlight tokens
  blog/
    page.tsx            blog listing with tag filter
    [slug]/page.tsx     individual post (MDX + prose + rehype-highlight)
  robots.ts             dynamic robots.txt
  sitemap.ts            dynamic sitemap

components/
  effects/              ParticleGraph · TypedText · ScanlineOverlay
  sections/             Hero · About · Projects · Skills · Blog · BlogGrid · Contact
  shared/               NavBar · Footer · CommandPalette · ProjectCard · SkillBadge · BrandIcons
  ui/                   shadcn/ui base components

lib/
  data.ts               all static data (siteConfig, skills, timelines, projects)
  mdx.ts                MDX parser (gray-matter, reading time)
  github.ts             GitHub GraphQL API (ISR 3600s)
  utils.ts              cn(), formatDate()

content/blog/           11 MDX posts
```

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server (port 4010)
pnpm dev
```

Open [http://localhost:4010](http://localhost:4010) in your browser.

---

## Blog Posts

| Title | Date |
|---|---|
| Building Cognitive Pipelines with LangChain and FAISS | Dec 2025 |
| 41 MiB/s CSV Parser: C99 + Rust + Python Together | Jan 2026 |
| When AI Pipelines Fail in Production | Jan 2026 |
| Building a Message Broker in Rust | Feb 2026 |
| The Silent Threat: Supply Chain Attacks | Feb 2026 |
| Systems That Feel Instant | Mar 2026 |
| Linux RATs: A Technical Analysis | Mar 2026 |
| Python Is Not Slow, You Are | Apr 2026 |
| Resilience Engineering for Backend Systems | Apr 2026 |
| The Hidden Cost of Microservices | May 2026 |
| Cognitive Systems Engineering | May 2026 |

---

## Links

- GitHub: [github.com/codennomad](https://github.com/codennomad)
- LinkedIn: [linkedin.com/in/gabrielhenrique-tech](https://www.linkedin.com/in/gabrielhenrique-tech)
- Email: gabrielheh03@gmail.com
