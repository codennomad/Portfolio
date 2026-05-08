"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star, GitFork, ExternalLink, Circle } from "lucide-react"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { ProjectStatus } from "@/lib/data"

interface ProjectCardProps {
  name: string
  description: string
  stack: string[]
  status: ProjectStatus
  github: string
  stars?: number
  forks?: number
  language?: string
  index?: number
  onClick?: () => void
}

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  LIVE: { label: "LIVE", className: "text-primary border-primary/30 bg-primary/10" },
  WIP: { label: "WIP", className: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10" },
  ARCHIVED: { label: "ARCHIVED", className: "text-muted-foreground border-muted/30 bg-muted/30" },
}

export function ProjectCard({
  name,
  description,
  stack,
  status,
  github,
  stars = 0,
  forks = 0,
  language,
  index = 0,
  onClick,
}: ProjectCardProps) {
  const statusStyle = statusConfig[status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card
        className={cn(
          "glass-card h-full flex flex-col cursor-pointer group transition-all duration-300",
          "hover:border-primary/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.08)]",
          "hover:scale-[1.01]"
        )}
        onClick={onClick}
      >
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-mono text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {name}
            </h3>
            <Badge
              variant="outline"
              className={cn("font-mono text-[10px] shrink-0 px-1.5 py-0", statusStyle.className)}
            >
              <Circle size={5} className="mr-1 fill-current" />
              {statusStyle.label}
            </Badge>
          </div>
          {language && (
            <span className="font-mono text-[11px] text-muted-foreground">{language}</span>
          )}
        </CardHeader>

        <CardContent className="flex-1 pb-3">
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {stack.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="font-mono text-[10px] bg-muted/50 text-muted-foreground border-border/50 px-1.5 py-0"
              >
                {tech}
              </Badge>
            ))}
            {stack.length > 3 && (
              <Badge
                variant="secondary"
                className="font-mono text-[10px] bg-muted/50 text-muted-foreground border-border/50 px-1.5 py-0"
              >
                +{stack.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-0 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="flex items-center gap-1 font-mono text-[11px]">
              <Star size={11} />
              {stars}
            </span>
            <span className="flex items-center gap-1 font-mono text-[11px]">
              <GitFork size={11} />
              {forks}
            </span>
          </div>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`Ver ${name} no GitHub`}
          >
            <ExternalLink size={13} />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
