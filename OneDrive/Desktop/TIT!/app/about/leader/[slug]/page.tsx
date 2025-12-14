import type { Metadata } from "next"
import team from "@/lib/team"
import { ProfileClient } from "./profile-client"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const member = team.find((t) => t.slug === slug)
  return {
    title: member ? `${member.name} — TIT Profile` : "TIT Profile",
    description: member?.bio || "Team member profile at TIT",
  }
}

export default async function LeaderProfile({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = team.find((t) => t.slug === slug)
  
  return <ProfileClient member={member} />
}
