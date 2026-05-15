"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01"

function randomChar() {
  return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
}

function MatrixRain({ cols }: { cols: number }) {
  const [grid, setGrid] = useState<string[][]>(() =>
    Array.from({ length: 8 }, () => Array.from({ length: cols }, () => randomChar()))
  )

  useEffect(() => {
    const id = setInterval(() => {
      setGrid((prev) =>
        prev.map((row) => row.map(() => randomChar()))
      )
    }, 80)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="font-mono text-[10px] sm:text-xs leading-tight select-none pointer-events-none">
      {grid.map((row, ri) => (
        <div key={ri} className="flex gap-0.5">
          {row.map((ch, ci) => (
            <span
              key={ci}
              style={{
                color: ri === 0 ? "#ffffff" : `rgba(168,85,247,${0.9 - ri * 0.1})`,
                textShadow: ri < 2 ? "0 0 6px rgba(168,85,247,0.8)" : "none",
              }}
            >
              {ch}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export function KonamiEasterEgg() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handler = () => setActive(true)
    window.addEventListener("portfolio:easter-egg", handler)
    return () => window.removeEventListener("portfolio:easter-egg", handler)
  }, [])

  useEffect(() => {
    if (!active) return
    const id = setTimeout(() => setActive(false), 5000)
    return () => clearTimeout(id)
  }, [active])

  const COLS = 24

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="konami"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-200 flex items-center justify-center"
          style={{ background: "rgba(10,10,15,0.97)" }}
          onClick={() => setActive(false)}
        >
          {/* Matrix rain top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden opacity-60 pt-4">
            <MatrixRain cols={COLS} />
          </div>

          {/* Center panel */}
          <motion.div
            initial={{ scale: 0.8, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center px-8 max-w-lg"
          >
            <div
              className="border rounded-lg p-8 space-y-4"
              style={{
                borderColor: "rgba(168,85,247,0.5)",
                background: "rgba(13,13,22,0.95)",
                boxShadow: "0 0 60px rgba(168,85,247,0.3), inset 0 0 30px rgba(168,85,247,0.05)",
              }}
            >
              <motion.p
                className="font-mono text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                01001000 01100001 01100011 01101011 01100101 01110010
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <p
                  className="font-mono text-2xl sm:text-3xl font-bold"
                  style={{ color: "#a855f7", textShadow: "0 0 30px rgba(168,85,247,0.6)" }}
                >
                  ░░░ ACCESS GRANTED ░░░
                </p>
              </motion.div>

              <motion.div
                className="space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                <p className="font-mono text-sm text-foreground">Welcome, codennomad.</p>
                <p className="font-mono text-xs text-muted-foreground">
                  You know the code. You were always in.
                </p>
              </motion.div>

              <motion.div
                className="pt-2 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
              >
                <p className="font-mono text-[10px] text-muted-foreground/60">
                  ↑↑↓↓←→←→BA — classic
                </p>
                <p
                  className="font-mono text-[10px]"
                  style={{ color: "rgba(168,85,247,0.6)" }}
                >
                  [click anywhere to exit]
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Matrix rain bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden opacity-60 pb-4 rotate-180">
            <MatrixRain cols={COLS} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
