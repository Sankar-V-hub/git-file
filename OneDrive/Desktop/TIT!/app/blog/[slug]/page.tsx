import { notFound } from "next/navigation"
import { BlogPostClient } from "./blog-post-client"
import blogPosts from "@/lib/blog"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
