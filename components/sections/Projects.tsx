"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/shared/ProjectCard"
import { featuredProjects, projectCategories } from "@/lib/data"
import type { ProjectCategory } from "@/lib/data"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/shared/BrandIcons"
import Link from "next/link"
import dynamic from "next/dynamic"

const CsvBenchmarkChart = dynamic(
  () => import("@/components/sections/CsvBenchmarkChart").then((m) => ({ default: m.CsvBenchmarkChart })),
  { ssr: false }
)

export function Projects() {
  const [category, setCategory] = useState<ProjectCategory>("All")
  const [selected, setSelected] = useState<(typeof featuredProjects)[0] | null>(null)

  const filtered =
    category === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === category)

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="font-mono text-xs text-primary mb-2">
            $ git log --all --author=codennomad
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Projects</h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8"
        >
          <Tabs value={category} onValueChange={(v) => setCategory(v as ProjectCategory)}>
            <TabsList className="bg-muted/40 border border-border h-auto flex-wrap gap-1 p-1">
              {projectCategories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="font-mono text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.slug}
              {...project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="https://github.com/codennomad?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-mono text-xs border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors px-4 py-2 rounded-md"
          >
            <GithubIcon size={13} className="mr-2" />
            View all repositories
          </Link>
        </motion.div>
      </div>

      {/* Project detail dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="bg-card border-border max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="font-mono text-primary">{selected.name}</DialogTitle>
                  <Badge variant="outline" className="font-mono text-[10px] text-primary border-primary/30 bg-primary/10">
                    {selected.status}
                  </Badge>
                </div>
                <DialogDescription className="text-muted-foreground leading-relaxed">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div>
                  <p className="font-mono text-xs text-muted-foreground mb-2">// stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono text-xs bg-muted/50 text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Interactive benchmark chart for csv_parsing */}
                {selected.slug === "csv-parsing" && (
                  <div className="border border-border rounded-md p-3">
                    <CsvBenchmarkChart />
                  </div>
                )}

                <div className="flex gap-2 pt-2">
                  <Link
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-mono text-xs bg-muted/60 border border-border text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 px-3 py-1.5 rounded-md transition-colors"
                  >
                    <GithubIcon size={13} className="mr-1.5" />
                    GitHub
                  </Link>
                  {selected.demo && (
                    <Link
                      href={selected.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-mono text-xs bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/20 hover:border-emerald-400/60 px-3 py-1.5 rounded-md transition-colors"
                    >
                      <ExternalLink size={13} className="mr-1.5" />
                      Visit site →
                    </Link>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
