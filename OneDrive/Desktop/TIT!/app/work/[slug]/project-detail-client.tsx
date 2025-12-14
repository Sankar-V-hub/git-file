"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projects"

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Button */}
        <Link href="/work">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Button>
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">{project.description}</p>
        </motion.div>

        {/* Project Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-card border rounded-xl p-6">
            <Users className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">Client</h3>
            <p className="text-muted-foreground">{project.client || "Confidential"}</p>
          </div>
          <div className="bg-card border rounded-xl p-6">
            <Calendar className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">Year</h3>
            <p className="text-muted-foreground">{project.date}</p>
          </div>
          <div className="bg-card border rounded-xl p-6">
            <Tag className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">Category</h3>
            <p className="text-muted-foreground">{project.category}</p>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Results & Impact</h2>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-muted-foreground">{result.label}: {result.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card border rounded-xl p-8 h-fit sticky top-4"
          >
            <h3 className="text-xl font-bold mb-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-8 border-t"
            >
              <h4 className="font-bold mb-4">Start Your Project</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Interested in working with us? Let's discuss your project and create something amazing together.
              </p>
              <Link href="/contact">
                <Button className="w-full">Get in Touch</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Related Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 pt-12 border-t"
        >
          <h2 className="text-3xl font-bold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Link key={index} href="/work">
                <div className="group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-4 group-hover:opacity-80 transition-opacity">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <span className="text-muted-foreground">Project {index + 1}</span>
                    </div>
                  </div>
                  <h3 className="font-bold group-hover:text-primary transition-colors">Featured Project</h3>
                  <p className="text-sm text-muted-foreground">Case Study</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
