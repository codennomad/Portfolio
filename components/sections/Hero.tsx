"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { GithubIcon } from "@/components/shared/BrandIcons"
import { ParticleGraph } from "@/components/effects/ParticleGraph"
import { TypedText } from "@/components/effects/TypedText"
import { siteConfig, typedTexts } from "@/lib/data"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* Particle background */}
      <ParticleGraph />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, var(--background) 75%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Terminal prompt line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm text-primary mb-6"
        >
          ~/codennomad{" "}
          <span className="text-muted-foreground">$</span>{" "}
          <span className="text-foreground">whoami</span>
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4"
        >
          <span className="text-foreground">Software</span>
          {" "}
          <span className="text-primary glow-primary-text">Engineer</span>
        </motion.h1>

        {/* Typed subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="font-mono text-base sm:text-lg text-muted-foreground mb-6 h-7"
        >
          <TypedText texts={typedTexts} />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I build systems that matter. Intelligent architectures,
          cognitive pipelines and high-performance code.
          <span className="text-primary"> Always remote.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center font-mono text-sm bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] px-6 py-3 min-h-[48px] rounded-md"
          >
            <ArrowRight size={14} className="mr-2" />
            Explore Projects
          </a>
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors px-4 py-3 min-h-[48px] rounded-md hover:bg-muted"
          >
            <GithubIcon size={14} className="mr-2" />
            GitHub
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ opacity: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 font-mono text-xs text-muted-foreground transition-opacity"
        >
          scroll
          <ChevronDown size={14} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  )
}
