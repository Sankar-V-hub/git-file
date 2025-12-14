import { notFound } from "next/navigation"
import { ProjectDetailClient } from "./project-detail-client"
import projects from "@/lib/projects"

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
