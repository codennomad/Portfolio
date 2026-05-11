"use client"

import { motion } from "framer-motion"
import type { ContributionWeek } from "@/lib/github"

interface ContributionHeatmapProps {
  weeks: ContributionWeek[]
  totalContributions: number
}

const LEVELS = [
  "rgba(26,26,46,0.8)",           // 0  – muted
  "rgba(168,85,247,0.22)",        // 1-2
  "rgba(168,85,247,0.45)",        // 3-5
  "rgba(168,85,247,0.70)",        // 6-9
  "rgba(168,85,247,1)",           // 10+
]

function getLevel(count: number): number {
  if (count === 0) return 0
  if (count <= 2) return 1
  if (count <= 5) return 2
  if (count <= 9) return 3
  return 4
}

const DAY_ABBR = ["S", "M", "T", "W", "T", "F", "S"]

export function ContributionHeatmap({ weeks, totalContributions }: ContributionHeatmapProps) {
  // Show last 16 weeks for a compact, readable view
  const displayWeeks = weeks.slice(-16)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card rounded-lg p-4 space-y-3"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs text-primary">## activity.log</p>
        <span className="font-mono text-[10px] text-muted-foreground">
          {totalContributions.toLocaleString()} contributions this year
        </span>
      </div>

      <div className="flex gap-0.5 overflow-x-auto pb-1">
        {/* Day-of-week labels on the left */}
        <div className="flex flex-col gap-0.5 mr-1 shrink-0">
          {DAY_ABBR.map((d, i) => (
            <span
              key={i}
              className="font-mono text-[9px] leading-none h-3 flex items-center"
              style={{ color: "var(--muted-foreground)", opacity: i % 2 === 1 ? 1 : 0 }}
            >
              {d}
            </span>
          ))}
        </div>

        {/* Heatmap columns */}
        {displayWeeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-0.5 shrink-0">
            {week.contributionDays.map((day, di) => (
              <div
                key={di}
                title={`${day.date}: ${day.contributionCount} contribution${day.contributionCount !== 1 ? "s" : ""}`}
                className="w-3 h-3 rounded-xs transition-transform hover:scale-125 cursor-default"
                style={{ background: LEVELS[getLevel(day.contributionCount)] }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1.5">
        <span className="font-mono text-[9px] text-muted-foreground">less</span>
        {LEVELS.map((color, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-xs"
            style={{ background: color }}
          />
        ))}
        <span className="font-mono text-[9px] text-muted-foreground">more</span>
      </div>
    </motion.div>
  )
}
