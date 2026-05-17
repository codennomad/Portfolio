"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

interface Connection {
  a: number
  b: number
  opacity: number
}

const MAX_DISTANCE = 120
const PARTICLE_SPEED = 0.3
const PRIMARY_COLOR = "168, 85, 247"

export function ParticleGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animRef = useRef<number>(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const getParticleCount = () =>
      window.matchMedia("(max-width: 768px)").matches ? 25 : 60

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const init = () => {
      const count = getParticleCount()
      particles.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * PARTICLE_SPEED,
        vy: (Math.random() - 0.5) * PARTICLE_SPEED,
      }))
    }

    const getConnections = (): Connection[] => {
      const connections: Connection[] = []
      const pts = particles.current
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DISTANCE) {
            connections.push({ a: i, b: j, opacity: 1 - dist / MAX_DISTANCE })
          }
        }
      }
      return connections
    }

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })

      const connections = getConnections()
      connections.forEach(({ a, b, opacity }) => {
        const pa = particles.current[a]
        const pb = particles.current[b]
        ctx.beginPath()
        ctx.strokeStyle = `rgba(${PRIMARY_COLOR}, ${opacity * 0.25})`
        ctx.lineWidth = 1
        ctx.moveTo(pa.x, pa.y)
        ctx.lineTo(pb.x, pb.y)
        ctx.stroke()
      })

      particles.current.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${PRIMARY_COLOR}, 0.5)`
        ctx.fill()
      })

      animRef.current = requestAnimationFrame(animate)
    }

    resize()
    init()
    animate()

    const observer = new ResizeObserver(() => {
      resize()
      init()
      // re-init with updated count when crossing mobile breakpoint
    })
    observer.observe(canvas)

    return () => {
      cancelAnimationFrame(animRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      aria-hidden="true"
    />
  )
}
