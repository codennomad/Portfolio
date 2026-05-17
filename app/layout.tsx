import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import { siteConfig } from "@/lib/data"
import { KonamiEasterEgg } from "@/components/effects/KonamiEasterEgg"
import { MotionProvider } from "@/components/shared/MotionProvider"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Mid-level Backend + AI Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Mid-level Backend + AI Engineer specializing in AI systems, cognitive pipelines, and high-performance architectures. Available for remote contracts.",
  keywords: [
    "mid-level backend engineer",
    "ai engineer",
    "software engineer",
    "python",
    "rust",
    "typescript",
    "ai systems",
    "cognitive pipelines",
    "distributed systems",
    "fastapi",
    "next.js",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.handle,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Mid-level Backend + AI Engineer`,
    description:
      "Mid-level Backend + AI Engineer specializing in AI systems, cognitive pipelines, and high-performance architectures.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} — ${siteConfig.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    creator: `@${siteConfig.handle}`,
    title: `${siteConfig.name} — Mid-level Backend + AI Engineer`,
    description:
      "Mid-level Backend + AI Engineer specializing in AI systems, cognitive pipelines, and high-performance architectures.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL(siteConfig.url),
}

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scanlines`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${siteConfig.url}/#person`,
                  name: siteConfig.name,
                  url: siteConfig.url,
                  email: siteConfig.email,
                  jobTitle: siteConfig.title,
                  description: siteConfig.bio,
                  sameAs: [
                    siteConfig.github,
                    siteConfig.linkedin,
                    siteConfig.youtube,
                    siteConfig.instagram,
                  ],
                  knowsAbout: [
                    "Python", "Rust", "TypeScript", "C", "C++",
                    "AI Systems", "Backend Engineering", "FastAPI",
                    "LangChain", "Distributed Systems",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteConfig.url}/#website`,
                  url: siteConfig.url,
                  name: siteConfig.name,
                  description: "Mid-level Backend + AI Engineer specializing in AI systems, cognitive pipelines, and high-performance architectures.",
                  author: { "@id": `${siteConfig.url}/#person` },
                },
              ],
            }),
          }}
        />
        <MotionProvider>
          <TooltipProvider>
            <KonamiEasterEgg />
            {children}
          </TooltipProvider>
        </MotionProvider>
      </body>
    </html>
  )
}
