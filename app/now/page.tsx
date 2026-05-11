import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/lib/data"
import { NavBar } from "@/components/shared/NavBar"
import { Footer } from "@/components/shared/Footer"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "/now",
  description:
    "What Gabriel Henrique is doing right now — current projects, learning, and focus.",
  openGraph: {
    title: `/now | ${siteConfig.name}`,
    description: "What I'm doing now — current projects, learning, and focus.",
    url: `${siteConfig.url}/now`,
  },
}

// Last updated manually — edit this when updating the page
const LAST_UPDATED = "May 10, 2026"

const nowSections = [
  {
    id: "building",
    prefix: "## currently_building",
    title: "Building",
    items: [
      {
        name: "Souljin AI VTuber",
        detail:
          "A cognitive AI VTuber system — real-time voice, reactive personality, live streaming integration. Python + Rust + LangChain. My most ambitious side project.",
      },
      {
        name: "analytics-saas",
        detail:
          "Pushing the multi-tenant analytics platform to production. Currently hardening observability and load testing at 5k+ concurrent events.",
      },
    ],
  },
  {
    id: "learning",
    prefix: "## currently_learning",
    title: "Learning",
    items: [
      {
        name: "Rust + Distributed Systems",
        detail:
          "Going deep into consensus algorithms (Raft), async runtimes (Tokio internals), and building fault-tolerant systems from scratch. Reading 'Designing Data-Intensive Applications' concurrently.",
      },
      {
        name: "Low-latency AI inference",
        detail:
          "Optimizing local LLM inference pipelines with CUDA, quantization (GGUF/GPTQ), and speculative decoding. The RTX 5070 is getting a workout.",
      },
    ],
  },
  {
    id: "reading",
    prefix: "## reading_stack",
    title: "Reading",
    items: [
      {
        name: "Designing Data-Intensive Applications",
        detail: "Martin Kleppmann. Third read. Noticing different things every time.",
      },
      {
        name: "The Rust Programming Language",
        detail: "Re-reading with focus on async and unsafe. Understanding, not just compiling.",
      },
      {
        name: "Cognitive Systems Engineering",
        detail:
          "Woods & Hollnagel. Applying resilience engineering concepts to AI pipeline design.",
      },
    ],
  },
  {
    id: "focus",
    prefix: "## current_focus",
    title: "Focus",
    items: [
      {
        name: "Remote contract work",
        detail:
          "Actively looking for backend + AI engineering contracts. Senior-level scope, mid-level rate. Async-first teams preferred. UTC-3, flexible overlap.",
      },
      {
        name: "Open source contributions",
        detail:
          "Putting real projects on GitHub — not toy repos. Every project has a README worth reading and code worth reviewing.",
      },
    ],
  },
  {
    id: "not-doing",
    prefix: "## not_doing",
    title: "Not doing",
    items: [
      {
        name: "Frontend work",
        detail:
          "Not taking pure frontend contracts right now. I can do it — I built this portfolio — but my edge is in backend systems and AI.",
      },
      {
        name: "Tutorial hell",
        detail: "Building real things. The best way to learn is to ship.",
      },
    ],
  },
]

export default function NowPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft size={12} />
            back
          </Link>

          {/* Header */}
          <div className="mb-12">
            <p className="font-mono text-xs text-primary mb-2">~/codennomad $ cat now.md</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">/now</h1>
            <p className="text-muted-foreground leading-relaxed">
              A snapshot of what I&apos;m doing at this point in time. Updated manually — not
              auto-generated.
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-3">
              <span className="text-primary">// </span>
              Last updated:{" "}
              <span className="text-foreground">{LAST_UPDATED}</span>
              {" · "}
              <span className="text-muted-foreground/60">Minas Gerais, Brazil</span>
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {nowSections.map((section) => (
              <section key={section.id} id={section.id}>
                <p className="font-mono text-xs text-primary mb-2">{section.prefix}</p>
                <h2 className="text-lg font-bold text-foreground mb-5">{section.title}</h2>

                <div className="space-y-5">
                  {section.items.map((item) => (
                    <div key={item.name} className="glass-card rounded-lg p-4 space-y-1.5">
                      <p className="font-mono text-sm font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* nownownow.com credit */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">// </span>
              This is a{" "}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                /now page
              </a>
              , inspired by{" "}
              <a
                href="https://sivers.org/now"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Derek Sivers
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
