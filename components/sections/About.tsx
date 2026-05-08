"use client"

import { motion } from "framer-motion"
import { SkillBadge } from "@/components/shared/SkillBadge"
import { siteConfig, skills, timeline, workTimeline, funFacts } from "@/lib/data"

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="font-mono text-xs text-primary mb-2">## about.md</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">About</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Bio + skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {siteConfig.bioEn}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I build solutions ranging from cognitive AI pipelines to robust C and C++ development,
              automation tools, bots, high-performance APIs, and intelligent data systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My focus:{" "}
              <span className="text-primary">
                solid, performant, intelligent, and well-architected systems
              </span>{" "}
              — that don&apos;t just work, they think, learn, and deliver real value.
            </p>
          </div>

          {/* Fun facts */}
          <div className="glass-card rounded-lg p-4 space-y-2">
            {funFacts.map(({ key, value }) => (
              <p key={key} className="font-mono text-xs">
                <span className="text-muted-foreground">// </span>
                <span className="text-secondary">{key}</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-primary">{value}</span>
              </p>
            ))}
          </div>

          {/* Tech stack badges */}
          <div>
          <p className="font-mono text-xs text-muted-foreground mb-3">## tech_stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 2).flatMap((cat) =>
                cat.items.filter((i) => i.level === "primary").map((item) => (
                  <SkillBadge key={`${cat.category}-${item.name}`} name={item.name} level="primary" />
                ))
              )}
            </div>
          </div>
        </motion.div>

        {/* Right: Two timelines side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {/* Career path */}
          <div>
            <p className="font-mono text-xs text-primary mb-6">## career_path</p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative pl-5 border-l border-border space-y-6"
            >
              {timeline.map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="relative">
                  <div className="absolute -left-5.25 w-2.5 h-2.5 rounded-full bg-primary/20 border-2 border-primary/60 top-1" />
                  <div className="space-y-0.5">
                    <p className="font-mono text-[10px] text-primary">{item.year}</p>
                    <h3 className="font-semibold text-foreground text-xs leading-snug">{item.title}</h3>
                    <p className="text-[10px] text-muted-foreground">{item.company}</p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.stack.map((tech) => (
                        <SkillBadge key={tech} name={tech} level="secondary" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Work experience */}
          <div>
            <p className="font-mono text-xs text-primary mb-6">## work_experience</p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative pl-5 border-l border-border space-y-6"
            >
              {workTimeline.map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="relative">
                  <div className="absolute -left-5.25 w-2.5 h-2.5 rounded-full bg-secondary/30 border-2 border-secondary/70 top-1" />
                  <div className="space-y-0.5">
                    <p className="font-mono text-[10px] text-primary">{item.period}</p>
                    <h3 className="font-semibold text-foreground text-xs leading-snug">{item.title}</h3>
                    <p className="text-[10px] text-muted-foreground font-medium">{item.company}</p>
                    <p className="font-mono text-[9px] text-secondary/80">{item.type}</p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.stack.map((tech) => (
                        <SkillBadge key={tech} name={tech} level="secondary" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
