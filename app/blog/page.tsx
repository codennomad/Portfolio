import Link from "next/link"
import { ArrowLeft, Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { NavBar } from "@/components/shared/NavBar"
import { Footer } from "@/components/shared/Footer"
import { getAllPosts } from "@/lib/mdx"
import { formatDate } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, AI, and systems architecture.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <Link
              href="/"
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 mb-8"
            >
              <ArrowLeft size={12} />
              back
            </Link>
            <p className="font-mono text-xs text-primary mb-2">## /notes</p>
            <h1 className="text-3xl font-bold text-foreground">Blog</h1>
            <p className="text-muted-foreground mt-2 text-sm">
              Thoughts on software engineering, AI, and systems architecture.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-mono text-sm text-muted-foreground">
                // No posts published yet.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="glass-card rounded-lg p-5 hover:border-primary/40 transition-all duration-200 group border border-border">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h2>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="font-mono text-[10px] px-1.5 py-0 border-border text-muted-foreground"
                          >
                            <Tag size={8} className="mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 text-[11px] font-mono text-muted-foreground shrink-0">
                        <span className="flex items-center gap-1">
                          <Clock size={10} />
                          {post.readingTime}min
                        </span>
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
