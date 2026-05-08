import dynamic from "next/dynamic"
import { NavBar } from "@/components/shared/NavBar"
import { Footer } from "@/components/shared/Footer"
import { Hero } from "@/components/sections/Hero"

// Lazy-load below-fold sections for faster LCP / INP
const CommandPalette = dynamic(() =>
  import("@/components/shared/CommandPalette").then((m) => ({ default: m.CommandPalette }))
)
const About = dynamic(() =>
  import("@/components/sections/About").then((m) => ({ default: m.About }))
)
const Projects = dynamic(() =>
  import("@/components/sections/Projects").then((m) => ({ default: m.Projects }))
)
const Skills = dynamic(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills }))
)
const Blog = dynamic(() =>
  import("@/components/sections/Blog").then((m) => ({ default: m.Blog }))
)
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact }))
)

export default function Home() {
  return (
    <>
      <NavBar />
      <CommandPalette />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

