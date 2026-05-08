import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import { Badge } from "@/components/ui/badge"
import { NavBar } from "@/components/shared/NavBar"
import { Footer } from "@/components/shared/Footer"
import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import { formatDate } from "@/lib/utils"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft size={12} />
            back to blog
          </Link>

          {/* Tags above title */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="font-mono text-[10px] border-primary/30 text-primary bg-primary/5"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-base text-muted-foreground leading-relaxed mb-6 border-l-2 border-primary/40 pl-4">
            {post.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground pb-8 border-b border-border mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={11} className="text-primary/60" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={11} className="text-primary/60" />
              {post.readingTime} min read
            </span>
            <span className="ml-auto text-primary/40 hidden sm:block">~/codennomad</span>
          </div>

          {/* MDX content */}
          <article className="
            prose prose-invert max-w-none

            [&>*:first-child]:mt-0

            prose-p:text-[#c0c0d0] prose-p:leading-[1.85] prose-p:text-[15px]

            prose-h2:text-foreground prose-h2:text-xl prose-h2:font-bold
            prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2
            prose-h2:border-b prose-h2:border-border

            prose-h3:text-foreground prose-h3:text-base prose-h3:font-semibold
            prose-h3:mt-8 prose-h3:mb-3

            prose-h4:text-primary prose-h4:text-sm prose-h4:font-mono
            prose-h4:uppercase prose-h4:tracking-wider prose-h4:mt-6 prose-h4:mb-2

            prose-blockquote:border-l-2 prose-blockquote:border-primary/60
            prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-md
            prose-blockquote:px-5 prose-blockquote:py-3 prose-blockquote:my-8
            prose-blockquote:not-italic
            prose-blockquote:text-foreground prose-blockquote:text-lg
            prose-blockquote:font-medium
            [&_blockquote_p]:text-foreground [&_blockquote_p]:text-lg
            [&_blockquote_p]:font-medium [&_blockquote_p]:leading-snug
            [&_blockquote_p]:before:content-none [&_blockquote_p]:after:content-none

            prose-code:font-mono prose-code:text-primary prose-code:text-[13px]
            prose-code:bg-primary/8 prose-code:px-1.5 prose-code:py-0.5
            prose-code:rounded prose-code:border prose-code:border-primary/20
            prose-code:before:content-none prose-code:after:content-none

            prose-pre:bg-[#0d0d16] prose-pre:border prose-pre:border-border
            prose-pre:rounded-lg prose-pre:my-6 prose-pre:overflow-x-auto
            prose-pre:text-[13px] prose-pre:leading-[1.7]
            [&_pre_code]:bg-transparent [&_pre_code]:border-none
            [&_pre_code]:text-[#c0c0d0] [&_pre_code]:p-0

            prose-strong:text-foreground prose-strong:font-semibold

            prose-a:text-primary prose-a:no-underline prose-a:font-medium
            hover:prose-a:underline

            prose-ul:text-[#c0c0d0] prose-ul:my-4
            prose-ol:text-[#c0c0d0] prose-ol:my-4
            prose-li:text-[15px] prose-li:leading-[1.8] prose-li:my-1
            [&_li::marker]:text-primary/60

            prose-table:text-sm prose-table:border-collapse
            prose-thead:border-b prose-thead:border-border
            prose-th:text-foreground prose-th:font-semibold prose-th:px-4 prose-th:py-2
            prose-td:text-[#c0c0d0] prose-td:px-4 prose-td:py-2
            prose-td:border-b prose-td:border-border/40

            prose-hr:border-border prose-hr:my-10
          ">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: "wrap" }],
                    rehypeHighlight,
                  ],
                },
              }}
            />
          </article>

          {/* Footer do post */}
          <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="font-mono text-[10px] border-border text-muted-foreground"
                >
                  <Tag size={8} className="mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={12} />
              back to all posts
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
