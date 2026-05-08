"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"
import type { BlogPostMeta } from "@/lib/mdx"

interface BlogGridProps {
  posts: BlogPostMeta[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <Link href={`/blog/${post.slug}`}>
            <Card className="glass-card h-full hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.06)] group cursor-pointer">
              <CardHeader className="pb-2">
                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] font-mono text-muted-foreground">
                  <span>{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {post.readingTime}min
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-3">
                  {post.description}
                </p>
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
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
