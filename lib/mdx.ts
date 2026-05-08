import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { readingTime } from "./utils"

const CONTENT_DIR = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  readingTime: number
  content: string
  published: boolean
}

export interface BlogPostMeta extends Omit<BlogPost, "content"> {}

function getSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}

export function getAllPosts(): BlogPostMeta[] {
  return getSlugs()
    .map((slug) => {
      const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
      const raw = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        tags: (data.tags as string[]) ?? [],
        readingTime: readingTime(content),
        published: (data.published as boolean) ?? true,
      }
    })
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    tags: (data.tags as string[]) ?? [],
    readingTime: readingTime(content),
    content,
    published: (data.published as boolean) ?? true,
  }
}
