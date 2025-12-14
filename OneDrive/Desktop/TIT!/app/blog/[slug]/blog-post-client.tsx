"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog"

interface BlogPostClientProps {
  post: BlogPost
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-video rounded-2xl overflow-hidden mb-12"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 prose dark:prose-invert max-w-none"
          >
            <div
              className="text-lg leading-relaxed text-muted-foreground space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Author Card */}
            <div className="bg-card border rounded-xl p-6 sticky top-4">
              <h3 className="font-bold mb-2">About Author</h3>
              <p className="text-sm text-muted-foreground mb-3">{post.author}</p>
              <p className="text-xs text-muted-foreground">{post.authorRole}</p>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link key={index} href={`/blog?tag=${tag}`}>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors cursor-pointer">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6">
              <h3 className="font-bold mb-2">Want to Learn More?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get insights directly to your inbox with our monthly newsletter.
              </p>
              <Button className="w-full">Subscribe</Button>
            </div>

            {/* Related Posts Section */}
            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-bold mb-4">More Articles</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((index) => (
                  <Link key={index} href="/blog" className="block group">
                    <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                      Article {index}
                    </h4>
                    <p className="text-xs text-muted-foreground">Read article</p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 pt-12 border-t grid grid-cols-2 gap-8"
        >
          <Link href="/blog" className="group">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">← Previous</p>
              <h3 className="font-bold group-hover:text-primary transition-colors">
                Back to Articles
              </h3>
            </div>
          </Link>
          <div className="text-right space-y-2">
            <p className="text-sm text-muted-foreground">Share This Article →</p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" size="sm">Twitter</Button>
              <Button variant="outline" size="sm">LinkedIn</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
