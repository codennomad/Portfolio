import Link from "next/link"
import { Mail } from "lucide-react"
import { siteConfig } from "@/lib/data"
import { GithubIcon, LinkedinIcon, YoutubeIcon, InstagramIcon } from "@/components/shared/BrandIcons"

const socialLinks = [
  { href: siteConfig.github, icon: GithubIcon, label: "GitHub" },
  { href: siteConfig.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: siteConfig.youtube, icon: YoutubeIcon, label: "YouTube" },
  { href: siteConfig.instagram, icon: InstagramIcon, label: "Instagram" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-auto pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">~/</span>{siteConfig.handle} ·{" "}
            <span className="text-muted-foreground/60">
              built with Next.js + TypeScript
            </span>
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={15} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
