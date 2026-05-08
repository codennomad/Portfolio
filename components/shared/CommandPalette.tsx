"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { FileText, User, Code2, Mail, Home } from "lucide-react"
import { GithubIcon } from "@/components/shared/BrandIcons"
import { siteConfig, featuredProjects } from "@/lib/data"

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  const run = useCallback(
    (fn: () => void) => {
      setOpen(false)
      fn()
    },
    []
  )

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search... (projects, sections, links)" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => run(() => scrollTo("hero"))}>
            <Home className="mr-2 h-4 w-4" />
            Home
          </CommandItem>
          <CommandItem onSelect={() => run(() => scrollTo("about"))}>
            <User className="mr-2 h-4 w-4" />
            About
          </CommandItem>
          <CommandItem onSelect={() => run(() => scrollTo("projects"))}>
            <Code2 className="mr-2 h-4 w-4" />
            Projects
          </CommandItem>
          <CommandItem onSelect={() => run(() => scrollTo("blog"))}>
            <FileText className="mr-2 h-4 w-4" />
            Blog
          </CommandItem>
          <CommandItem onSelect={() => run(() => scrollTo("contact"))}>
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Projects">
          {featuredProjects.slice(0, 6).map((p) => (
            <CommandItem
              key={p.slug}
              onSelect={() => run(() => window.open(p.github, "_blank"))}
            >
              <Code2 className="mr-2 h-4 w-4 text-primary" />
              {p.name}
              <span className="ml-auto text-xs text-muted-foreground">{p.language}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Links">
          <CommandItem
            onSelect={() => run(() => window.open(siteConfig.github, "_blank"))}
          >
            <GithubIcon size={16} className="mr-2" />
            GitHub
          </CommandItem>
          <CommandItem
            onSelect={() => run(() => router.push("/blog"))}
          >
            <FileText className="mr-2 h-4 w-4" />
            Blog
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
