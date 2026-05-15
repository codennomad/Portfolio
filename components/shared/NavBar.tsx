"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Terminal } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { siteConfig } from "@/lib/data"

const navLinks = [
  { href: "#about", label: "about", hash: true },
  { href: "#projects", label: "projects", hash: true },
  { href: "#skills", label: "skills", hash: true },
  { href: "#blog", label: "blog", hash: true },
  { href: "#contact", label: "contact", hash: true },
  { href: "/now", label: "now", hash: false },
  { href: "/uses", label: "uses", hash: false },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const clickCount = useRef(0)
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleLogoClick = () => {
    clickCount.current += 1
    if (clickTimer.current) clearTimeout(clickTimer.current)
    if (clickCount.current >= 7) {
      clickCount.current = 0
      window.dispatchEvent(new CustomEvent("portfolio:easter-egg"))
      return
    }
    clickTimer.current = setTimeout(() => {
      clickCount.current = 0
    }, 2000)
  }

  const resolveHref = (link: (typeof navLinks)[0]) =>
    !link.hash ? link.href : pathname === "/" ? link.href : `/${link.href}`

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top)] ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo — click 7× rapidly to unlock easter egg */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="font-mono text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 select-none"
        >
          <Terminal size={14} />
          <span>~/ {siteConfig.handle}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={resolveHref(link)}
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {siteConfig.available && (
            <span className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              available
            </span>
          )}

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="md:hidden inline-flex items-center justify-center size-12 rounded-md text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-border w-72">
              <div className="flex flex-col gap-1 pt-8">
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  ~/navigation
                </p>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={resolveHref(link)}
                    onClick={() => setOpen(false)}
                    className="font-mono text-sm text-foreground hover:text-primary transition-colors min-h-12 flex items-center px-3 rounded hover:bg-muted"
                  >
                    <span className="text-primary mr-2">→</span>
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 pt-6 border-t border-border">
                  <Link
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/{siteConfig.handle}
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
