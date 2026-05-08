import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllPosts } from "@/lib/mdx"
import { BlogGrid } from "@/components/sections/BlogGrid"

export async function Blog() {
  const posts = getAllPosts().slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section id="blog" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-xs text-primary mb-2">## /notes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Thoughts in Public
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            View all
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* Posts grid */}
        <BlogGrid posts={posts} />

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-1.5"
          >
            View all posts
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  )
}
