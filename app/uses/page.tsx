import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/lib/data"
import { NavBar } from "@/components/shared/NavBar"
import { Footer } from "@/components/shared/Footer"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "/uses",
  description:
    "Gabriel Henrique's hardware setup, software tools, editor config, and daily workflow. An honest look at the rig behind the systems.",
  openGraph: {
    title: `/uses | ${siteConfig.name}`,
    description:
      "Hardware setup, software tools, editor config, and daily workflow of a backend + AI engineer.",
    url: `${siteConfig.url}/uses`,
  },
}

interface UsesCategory {
  id: string
  label: string
  prefix: string
  items: { name: string; detail: string; note?: string }[]
}

const usesData: UsesCategory[] = [
  {
    id: "hardware",
    label: "Hardware",
    prefix: "## hardware.spec",
    items: [
      {
        name: "CPU",
        detail: "AMD Ryzen 7 5800X 8-Core (3.80 GHz)",
        note: "8 cores / 16 threads — solid for parallel builds and running local LLMs",
      },
      {
        name: "RAM",
        detail: "64 GB DDR4",
        note: "Critical for running large models locally + Docker stacks + browser",
      },
      {
        name: "GPU",
        detail: "NVIDIA GeForce RTX 5070 (12 GB VRAM)",
        note: "Powers local Whisper inference, FAISS indexing, and CUDA-accelerated workloads",
      },
      {
        name: "OS",
        detail: "Windows 11 (WSL2 Ubuntu for dev)",
        note: "Most of the heavy lifting runs inside WSL2 with proper Linux tooling",
      },
      {
        name: "Storage",
        detail: "NVMe SSD (primary dev drive)",
        note: "Fast I/O matters — especially for Docker builds and large dataset processing",
      },
    ],
  },
  {
    id: "editor",
    label: "Editor & Terminal",
    prefix: "## editor.config",
    items: [
      {
        name: "Editor",
        detail: "Visual Studio Code",
        note: "With Vim keybindings. Muscle memory at this point.",
      },
      {
        name: "Terminal",
        detail: "Windows Terminal + WSL2 (zsh)",
        note: "Oh-my-zsh with a minimal prompt. Fast and predictable.",
      },
      {
        name: "Font",
        detail: "JetBrains Mono",
        note: "Ligatures on. The only acceptable mono font for serious work.",
      },
      {
        name: "Theme",
        detail: "Dark themes only",
        note: "Eyes aren't meant for white backgrounds at 2AM.",
      },
      {
        name: "AI assist",
        detail: "GitHub Copilot",
        note: "Pair programmer that never complains. Good for boilerplate, I handle architecture.",
      },
    ],
  },
  {
    id: "languages",
    label: "Languages & Runtimes",
    prefix: "## lang.stack",
    items: [
      {
        name: "Python",
        detail: "3.12+ with uv / venv",
        note: "Primary language. FastAPI, LangChain, data pipelines, AI glue code.",
      },
      {
        name: "Rust",
        detail: "stable + nightly",
        note: "For systems work, CLI tools, and anything where performance is non-negotiable.",
      },
      {
        name: "TypeScript",
        detail: "strict mode, always",
        note: "Next.js, Fastify, edge functions. No JavaScript without types.",
      },
      {
        name: "C / C++",
        detail: "gcc + clang",
        note: "Low-level algorithms, CSV parsers, FFI targets. Knows exactly what the machine does.",
      },
      {
        name: "SQL",
        detail: "PostgreSQL + MSSQL",
        note: "Write it raw. ORMs hide too much.",
      },
    ],
  },
  {
    id: "tools",
    label: "Dev Tools",
    prefix: "## dev.tools",
    items: [
      {
        name: "Docker",
        detail: "Docker + Docker Compose",
        note: "Everything runs in a container. No 'works on my machine' excuses.",
      },
      {
        name: "Git",
        detail: "CLI-first, conventional commits",
        note: "Never touching a Git GUI. `git log --oneline --graph` is beautiful.",
      },
      {
        name: "API Testing",
        detail: "Bruno / curl",
        note: "Bruno for complex flows, curl for quick pokes.",
      },
      {
        name: "DB Client",
        detail: "DBeaver",
        note: "Multi-engine, good enough.",
      },
      {
        name: "Infra",
        detail: "GitHub Actions + VPS (Ubuntu)",
        note: "CI/CD pipelines, cron jobs, Nginx reverse proxy. Kubernetes when truly needed.",
      },
    ],
  },
  {
    id: "workflow",
    label: "Workflow",
    prefix: "## workflow.md",
    items: [
      {
        name: "Work style",
        detail: "Async-first, deep work blocks",
        note: "Notifications off. 2–3 hour focus sessions. Ship, then communicate.",
      },
      {
        name: "Planning",
        detail: "Plain text + git issues",
        note: "No Jira. A `TODO.md` and a clear backlog is enough for solo/small team.",
      },
      {
        name: "Documentation",
        detail: "Architecture decision records (ADRs)",
        note: "Why a decision was made matters more than what was decided.",
      },
      {
        name: "Remote",
        detail: "Always. UTC-3 (Minas Gerais, Brazil)",
        note: "Fully async-capable. Overlap hours negotiable.",
      },
    ],
  },
]

export default function UsesPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft size={12} />
            back
          </Link>

          {/* Header */}
          <div className="mb-12">
            <p className="font-mono text-xs text-primary mb-2">~/codennomad $ cat uses.md</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              /uses
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              The hardware, software, and workflow behind the systems. Updated when something
              meaningfully changes — not a sponsored list.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-14">
            {usesData.map((cat) => (
              <section key={cat.id} id={cat.id}>
                <p className="font-mono text-xs text-primary mb-2">{cat.prefix}</p>
                <h2 className="text-xl font-bold text-foreground mb-6">{cat.label}</h2>

                <div className="space-y-0 divide-y divide-border">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="py-4 grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4"
                    >
                      <span className="font-mono text-xs text-muted-foreground pt-0.5 shrink-0">
                        {item.name}
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">{item.detail}</p>
                        {item.note && (
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">// </span>
              Inspired by{" "}
              <a
                href="https://uses.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                uses.tech
              </a>
              {" "}— a collection of developers&apos; setups.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
