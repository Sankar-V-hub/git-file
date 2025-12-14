"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Zap } from "lucide-react"
import projects from "@/lib/projects"

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

export default function WorkPage() {
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
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Portfolio</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Transforming Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Digital Excellence</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore our collection of award-winning projects that showcase innovation, creativity, and measurable business impact. Each project represents our commitment to excellence and client success.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{projects.length}+</div>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="w-px bg-border/50" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <p className="text-sm text-muted-foreground">Satisfied Clients</p>
            </div>
            <div className="w-px bg-border/50" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$10M+</div>
              <p className="text-sm text-muted-foreground">Revenue Generated</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`/work/${project.slug}`}>
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-96 overflow-hidden bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:via-black/30 transition-all duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm"
                      >
                        {project.category}
                      </Badge>
                    </div>

                    {/* Arrow Icon */}
                    <motion.div
                      className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-primary font-medium mb-2">{project.subcategory}</p>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                      {/* Stats Preview */}
                      <div className="grid grid-cols-2 gap-4 py-4 border-t border-border/50">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <div key={idx}>
                            <p className="text-primary font-bold text-lg">{result.value}</p>
                            <p className="text-xs text-muted-foreground">{result.label}</p>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-foreground/80"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-foreground/80">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* View Details Link */}
                    <motion.div
                      className="mt-6 inline-flex items-center gap-2 text-primary font-semibold group/link"
                      whileHover={{ gap: 8 }}
                    >
                      View Case Study
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 py-16 px-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Great?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can deliver exceptional results for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all font-semibold"
          >
            Start Your Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
