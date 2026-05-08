"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"

const moduleIds: Record<string, string> = {
  "Languages":     "LANG_SYS",
  "Backend":       "BACK_SVC",
  "AI / ML":       "AI__CORE",
  "DevOps":        "DEV_OPS_",
  "Architecture":  "ARCH_MOD",
  "Security":      "SEC_GATE",
}

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-primary mb-2">## system.map</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Skills</h2>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary/50">›</span>{" "}
            scanning capability modules...{" "}
            <span className="text-primary">6/6 loaded</span>
            <span className="inline-block w-1.5 h-3 bg-primary ml-1 animate-pulse" />
          </p>
        </motion.div>

        {/* Module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((category, catIndex) => {
            const primary = category.items.filter((i) => i.level === "primary")
            const secondary = category.items.filter((i) => i.level === "secondary")

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.07 }}
                className="group relative rounded-lg border border-border bg-card/60 backdrop-blur-sm
                  hover:border-primary/50 hover:shadow-[0_0_24px_rgba(168,85,247,0.1)]
                  transition-all duration-300 overflow-hidden"
              >
                {/* Scan line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Module header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/5">
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-sm">{category.icon}</span>
                    <span className="font-mono text-[11px] text-foreground font-bold tracking-wider">
                      {category.category.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="font-mono text-[9px] text-primary/50 tracking-widest">
                      {moduleIds[category.category] ?? "MODULE"}
                    </span>
                  </div>
                </div>

                {/* Skills body */}
                <div className="p-4 space-y-3">
                  {/* Primary */}
                  <div className="flex flex-wrap gap-1.5">
                    {primary.map((item) => (
                      <span
                        key={item.name}
                        className="font-mono text-[11px] px-2.5 py-1 rounded
                          border border-primary/30 bg-primary/8 text-primary
                          hover:bg-primary/15 hover:border-primary/70
                          hover:shadow-[0_0_8px_rgba(168,85,247,0.35)]
                          transition-all duration-200 cursor-default select-none"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>

                  {/* Secondary */}
                  {secondary.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-dashed border-border/50">
                      {secondary.map((item) => (
                        <span
                          key={item.name}
                          className="font-mono text-[10px] px-2 py-0.5 rounded
                            border border-dashed border-border/50 text-muted-foreground/50
                            hover:text-muted-foreground/80 hover:border-border
                            transition-all duration-200 cursor-default select-none"
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Status bar */}
                <div className="px-4 py-2 border-t border-border/40 bg-muted/5 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-muted-foreground/35">
                    {primary.length}x primary · {secondary.length}x extended
                  </span>
                  <span className="font-mono text-[9px] text-primary/40">STATUS: OK</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
