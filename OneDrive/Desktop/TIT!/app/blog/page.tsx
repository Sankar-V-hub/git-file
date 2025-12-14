"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Calendar, Clock, User, Search } from "lucide-react"
import blogPosts from "@/lib/blog"
import { useState, useMemo } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const categories = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = !selectedCategory || post.tags.includes(selectedCategory)
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="text-sm font-medium text-primary">📰 Insights & Articles</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Insights That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Drive Strategy</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Stay ahead of industry trends with expert analysis, actionable strategies, and proven methodologies. Discover how leading brands are transforming their digital presence.
          </motion.p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          {/* Search Bar */}
          <div className="relative mb-8 max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-xl border border-border/50 bg-card focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary/50 text-foreground hover:bg-secondary"
              }`}
            >
              All Articles
            </motion.button>
            {Array.from(new Set(blogPosts.flatMap((p) => p.tags)))
              .slice(0, 5)
              .map((tag) => (
                <motion.button
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(tag)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === tag
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-secondary/50 text-foreground hover:bg-secondary"
                  }`}
                >
                  {tag}
                </motion.button>
              ))}
          </div>

          {/* Results Count */}
          <p className="text-center text-muted-foreground mt-6">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
          </p>
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-16"
          >
            <Link href={`/blog/${filteredPosts[0].slug}`}>
              <motion.div className="group relative rounded-3xl overflow-hidden bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-96 md:h-full min-h-96 overflow-hidden bg-muted">
                    <Image
                      src={filteredPosts[0].image || "/placeholder.svg"}
                      alt={filteredPosts[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      {/* Featured Badge */}
                      <div>
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                          Featured Article
                        </Badge>
                      </div>

                      {/* Title */}
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                          {filteredPosts[0].title}
                        </h2>
                      </div>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-lg leading-relaxed">{filteredPosts[0].excerpt}</p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-t border-border/50 pt-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>
                            {filteredPosts[0].author} • <span className="text-primary font-medium">{filteredPosts[0].authorRole}</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{filteredPosts[0].date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{filteredPosts[0].readTime} min read</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {filteredPosts[0].tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary/50">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.div
                        className="inline-flex items-center gap-2 text-primary font-semibold group/link w-fit"
                        whileHover={{ gap: 8 }}
                      >
                        Read Full Article
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        )}

        {/* Blog Grid */}
        {filteredPosts.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredPosts.slice(1).map((post) => (
              <motion.div key={post.slug} variants={itemVariants} whileHover={{ y: -8 }} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden bg-muted">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Badge variant="secondary" className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="space-y-3 flex-grow">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                      </div>

                      {/* Meta Info */}
                      <div className="space-y-4 pt-4 border-t border-border/50">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime} min</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Read More */}
                      <motion.div
                        className="mt-4 inline-flex items-center gap-2 text-primary font-semibold group/link text-sm"
                        whileHover={{ gap: 6 }}
                      >
                        Read More
                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl font-bold mb-4">No articles found</h3>
            <p className="text-muted-foreground mb-8">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSelectedCategory(null)
                setSearchQuery("")
              }}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              View All Articles
            </button>
          </motion.div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          className="mt-24 py-16 px-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Get the latest insights, trends, and strategies delivered directly to your inbox.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border/50 bg-card focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
