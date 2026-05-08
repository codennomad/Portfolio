"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Copy, Check } from "lucide-react"
import { GithubIcon, LinkedinIcon, YoutubeIcon, InstagramIcon } from "@/components/shared/BrandIcons"
import { siteConfig } from "@/lib/data"
import { cn } from "@/lib/utils"

interface TerminalLine {
  type: "input" | "output" | "error"
  content: string
}

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  help      → list all commands",
    "  whoami    → about Gabriel Henrique",
    "  skills    → main tech stack",
    "  projects  → featured projects",
    "  contact   → ways to reach me",
    "  github    → open GitHub profile",
    "  clear     → clear terminal",
    "  matrix    → ;)",
  ],
  whoami: [
    `${siteConfig.name}`,
    `Handle: ${siteConfig.handle}`,
    `Role: Mid-level Backend + AI Engineer`,
    `Location: ${siteConfig.location}`,
    `Status: ${siteConfig.available ? "● Available for remote contracts" : "○ Not available"}`,
    `"${siteConfig.tagline}"`,
  ],
  skills: [
    "Languages:    Python | C | C++ | Rust | TypeScript",
    "Backend:      FastAPI | Node.js | PostgreSQL | Redis",
    "AI/ML:        LangChain | Whisper | FAISS | RAG",
    "DevOps:       Docker | GitHub Actions | Linux",
    "Architecture: Clean Arch | Cognitive Pipelines",
  ],
  projects: [
    "Featured projects:",
    "  analytics-saas  → Real-Time Analytics SaaS (TS + K8s)",
    "  csv_parsing     → C99+Rust CSV parser 41MiB/s",
    "  Feature_Flags   → Sub-ms feature flag platform",
    "  SAE             → Encrypted messenger in Rust",
    "  NoctiVox        → AI video transcription pipeline",
    "  LIENYX          → AI content transformer",
    "",
    "→ github.com/codennomad",
  ],
  contact: [
    `GitHub:    ${siteConfig.github}`,
    `LinkedIn:  ${siteConfig.linkedin}`,
    `Email:     ${siteConfig.email}`,
    `Instagram: @codennomad`,
  ],
  github: [`Opening ${siteConfig.github} ...`],
  matrix: [
    "01001000 01100001 01100011 01101011 01100101 01110010",
    "███╗░░░███╗░█████╗░████████╗██████╗░██╗██╗░░██╗",
    "░░░ ACCESS GRANTED ░░░",
    "Welcome to the matrix, codennomad.",
  ],
}

const socialLinks = [
  { href: siteConfig.github, icon: GithubIcon, label: "GitHub", value: "github.com/codennomad" },
  { href: siteConfig.linkedin, icon: LinkedinIcon, label: "LinkedIn", value: "in/gabrielhenrique-tech" },
  { href: siteConfig.youtube, icon: YoutubeIcon, label: "YouTube", value: "YouTube Channel" },
  { href: siteConfig.instagram, icon: InstagramIcon, label: "Instagram", value: "@codennomad" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email", value: siteConfig.email },
]

export function Contact() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: 'Type "help" to see available commands.' },
  ])
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [copied, setCopied] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight)
  }, [lines])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()

    setLines((prev) => [...prev, { type: "input", content: `$ ${cmd}` }])
    setHistory((h) => [cmd, ...h])
    setHistoryIndex(-1)

    if (trimmed === "clear") {
      setLines([])
    } else if (trimmed === "github") {
      setLines((prev) => [
        ...prev,
        ...COMMANDS.github.map((c) => ({ type: "output" as const, content: c })),
      ])
      setTimeout(() => window.open(siteConfig.github, "_blank"), 500)
    } else if (COMMANDS[trimmed]) {
      setLines((prev) => [
        ...prev,
        ...COMMANDS[trimmed].map((c) => ({ type: "output" as const, content: c })),
      ])
    } else if (trimmed === "") {
      // do nothing
    } else {
      setLines((prev) => [
        ...prev,
        { type: "error", content: `Command not found: "${trimmed}". Try "help".` },
      ])
    }

    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const idx = Math.min(historyIndex + 1, history.length - 1)
      setHistoryIndex(idx)
      setInput(history[idx] ?? "")
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const idx = Math.max(historyIndex - 1, -1)
      setHistoryIndex(idx)
      setInput(idx === -1 ? "" : history[idx])
    }
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-primary mb-2">## send_message()</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Contact</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="font-mono text-xs text-muted-foreground mb-6">// social_links</p>
            {socialLinks.map(({ href, icon: Icon, label, value }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-4 p-3 min-h-[48px] rounded-lg border border-border glass-card hover:border-primary/40 hover:text-primary transition-all duration-200 group"
              >
                <Icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                <div className="min-w-0">
                  <p className="font-mono text-xs text-muted-foreground">{label}</p>
                  <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors truncate">
                    {value}
                  </p>
                </div>
                {label === "Email" && (
                  <button
                    type="button"
                    onClick={(e) => { e.preventDefault(); copyEmail() }}
                    className="ml-auto min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-colors shrink-0"
                    aria-label="Copy email"
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                  </button>
                )}
              </a>
            ))}
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-lg overflow-hidden border border-border"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/20">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="font-mono text-xs text-muted-foreground ml-2">
                terminal — codennomad
              </span>
            </div>

            {/* Terminal body */}
            <div
              ref={terminalRef}
              className="h-48 sm:h-64 overflow-y-auto p-4 font-mono text-xs space-y-1"
            >
              {lines.map((line, i) => (
                <p
                  key={i}
                  className={cn(
                    "leading-relaxed whitespace-pre-wrap break-all",
                    line.type === "input" && "text-primary",
                    line.type === "output" && "text-muted-foreground",
                    line.type === "error" && "text-destructive"
                  )}
                >
                  {line.content}
                </p>
              ))}

              {/* Input line */}
              <div className="flex items-center gap-2 text-primary">
                <span>$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none font-mono text-xs text-foreground caret-primary"
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Terminal input"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
