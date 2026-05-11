"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// Benchmark data: throughput (MiB/s) per chunk size per implementation
const CHUNKS = ["64KB", "256KB", "1MB", "4MB", "16MB"]

const SERIES = [
  {
    key: "rust",
    label: "Rust runtime",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.45)",
    data: [6.1, 15.3, 29.8, 41.0, 38.4],
  },
  {
    key: "c99",
    label: "C99 parser",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.35)",
    data: [3.2, 8.4, 14.8, 21.2, 19.4],
  },
  {
    key: "python",
    label: "Python (PyO3)",
    color: "#555570",
    glow: "rgba(85,85,112,0.2)",
    data: [1.4, 3.8, 7.2, 10.9, 9.8],
  },
]

const MAX_Y = 45
const SVG_W = 460
const SVG_H = 200
const ML = 44
const MR = 12
const MT = 12
const MB = 32
const CHART_W = SVG_W - ML - MR  // 404
const CHART_H = SVG_H - MT - MB  // 156

const N_GROUPS = CHUNKS.length
const GROUP_W = CHART_W / N_GROUPS          // ~80.8
const BAR_W = 12
const BAR_GAP = 3
const GROUP_BARS_W = SERIES.length * BAR_W + (SERIES.length - 1) * BAR_GAP  // 42
const GROUP_PAD = (GROUP_W - GROUP_BARS_W) / 2  // ~19.4

const Y_TICKS = [0, 10, 20, 30, 40]

function toY(val: number) {
  return MT + CHART_H - (val / MAX_Y) * CHART_H
}
function toH(val: number) {
  return (val / MAX_Y) * CHART_H
}

interface TooltipData {
  x: number
  y: number
  series: (typeof SERIES)[0]
  chunkIdx: number
}

export function CsvBenchmarkChart() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null)
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] text-primary">// throughput_benchmark.csv</p>
        <span className="font-mono text-[10px] text-muted-foreground">MiB/s vs chunk size</span>
      </div>

      <div className="relative rounded-md overflow-hidden" style={{ background: "rgba(10,10,15,0.6)" }}>
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="w-full"
          style={{ maxHeight: 220 }}
          onMouseLeave={() => setTooltip(null)}
        >
          {/* Y-axis gridlines */}
          {Y_TICKS.map((tick) => {
            const y = toY(tick)
            return (
              <g key={tick}>
                <line
                  x1={ML}
                  y1={y}
                  x2={ML + CHART_W}
                  y2={y}
                  stroke="#1e1e2e"
                  strokeWidth="1"
                />
                <text
                  x={ML - 6}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="9"
                  fill="#555570"
                  fontFamily="monospace"
                >
                  {tick}
                </text>
              </g>
            )
          })}

          {/* 41 MiB/s peak line */}
          <line
            x1={ML}
            y1={toY(41)}
            x2={ML + CHART_W}
            y2={toY(41)}
            stroke="rgba(168,85,247,0.4)"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
          <text
            x={ML + CHART_W + 2}
            y={toY(41) + 3}
            fontSize="8"
            fill="#a855f7"
            fontFamily="monospace"
          >
            41
          </text>

          {/* Bars */}
          {CHUNKS.map((chunk, ci) => {
            const groupX = ML + ci * GROUP_W
            return (
              <g key={chunk}>
                {SERIES.map((s, si) => {
                  const val = s.data[ci]
                  const barX = groupX + GROUP_PAD + si * (BAR_W + BAR_GAP)
                  const barY = toY(val)
                  const barH = toH(val)
                  const isActive = active === null || active === s.key
                  return (
                    <motion.rect
                      key={s.key}
                      x={barX}
                      y={barY}
                      width={BAR_W}
                      height={barH}
                      rx="2"
                      fill={s.color}
                      opacity={isActive ? 1 : 0.2}
                      initial={{ scaleY: 0, originY: 1 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: ci * 0.07 + si * 0.04, ease: "easeOut" }}
                      style={{
                        transformOrigin: `${barX + BAR_W / 2}px ${MT + CHART_H}px`,
                        filter: isActive ? `drop-shadow(0 0 4px ${s.glow})` : "none",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        const rect = (e.target as SVGElement)
                          .closest("svg")!
                          .getBoundingClientRect()
                        setTooltip({
                          x: barX + BAR_W / 2,
                          y: barY - 4,
                          series: s,
                          chunkIdx: ci,
                        })
                      }}
                    />
                  )
                })}
                {/* X-axis label */}
                <text
                  x={groupX + GROUP_W / 2}
                  y={MT + CHART_H + 16}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#555570"
                  fontFamily="monospace"
                >
                  {chunk}
                </text>
              </g>
            )
          })}

          {/* Tooltip */}
          {tooltip && (
            <g>
              <rect
                x={Math.min(tooltip.x - 38, SVG_W - ML - 90)}
                y={tooltip.y - 26}
                width={82}
                height={22}
                rx="3"
                fill="#0d0d16"
                stroke="#1e1e2e"
                strokeWidth="1"
              />
              <text
                x={Math.min(tooltip.x - 38, SVG_W - ML - 90) + 41}
                y={tooltip.y - 10}
                textAnchor="middle"
                fontSize="9"
                fill={tooltip.series.color}
                fontFamily="monospace"
              >
                {tooltip.series.data[tooltip.chunkIdx]} MiB/s
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {SERIES.map((s) => (
          <button
            key={s.key}
            onClick={() => setActive((prev) => (prev === s.key ? null : s.key))}
            className="flex items-center gap-1.5 font-mono text-[10px] transition-opacity"
            style={{
              color: active === null || active === s.key ? s.color : "var(--muted-foreground)",
              opacity: active === null || active === s.key ? 1 : 0.5,
            }}
          >
            <span
              className="inline-block w-2.5 h-2.5 rounded-xs"
              style={{ background: s.color }}
            />
            {s.label}
          </button>
        ))}
      </div>

      <p className="font-mono text-[9px] text-muted-foreground">
        Peak: Rust runtime @ 4MB chunks →{" "}
        <span style={{ color: "#a855f7" }}>41.0 MiB/s</span> · click legend to isolate
      </p>
    </div>
  )
}
