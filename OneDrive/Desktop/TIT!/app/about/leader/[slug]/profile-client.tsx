"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Calendar, Award, Briefcase, Code } from "lucide-react"
import { motion } from "framer-motion"
import type { TeamMember } from "@/lib/team"

export function ProfileClient({ member }: { member: TeamMember | undefined }) {
  if (!member) {
    return (
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Profile Not Found</h2>
          <p className="text-muted-foreground">We couldn't find the team member you're looking for.</p>
          <div className="mt-6">
            <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90">
              <ArrowLeft className="w-4 h-4" />
              Back to Team
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-secondary/10 via-background to-secondary/5">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/about" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Back to Team
          </Link>
        </motion.div>

        <motion.div 
          className="bg-card rounded-2xl p-8 md:p-12 border border-secondary/40 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Header Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="md:col-span-1 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-6"
                whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image 
                  src={member.image ?? "/placeholder.svg"} 
                  alt={member.name} 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h1 className="text-2xl md:text-3xl font-bold">{member.name}</h1>
                <p className="text-primary font-semibold text-lg mt-2 flex items-center justify-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  {member.role}
                </p>
              </motion.div>
            </motion.div>

            {/* Info Cards */}
            <motion.div 
              className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              {[
                { icon: MapPin, label: "Address", value: member.address },
                { icon: Award, label: "Qualification", value: member.qualification },
                { icon: Calendar, label: "Joined", value: member.dateOfJoining },
                { icon: Briefcase, label: "Internships", value: member.interns?.slice(0, 1).join(", ") || "—" }
              ].map(({ icon: Icon, label, value }, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-gradient-to-br from-secondary/20 to-secondary/10 p-4 rounded-lg border border-secondary/40 hover:border-primary/40 transition-colors duration-300 group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.05, duration: 0.4 }}
                  whileHover={{ translateY: -2 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{label}</div>
                  </div>
                  <div className="font-semibold">{value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bio Section */}
          <motion.div 
            className="mb-12 pb-8 border-b border-secondary/40"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{member.bio}</p>
          </motion.div>

          {/* Projects Section */}
          <motion.div 
            className="mb-12 pb-8 border-b border-secondary/40"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">Projects</h2>
            </div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.05, delayChildren: 0.5 }}
            >
              {member.projects.map((p, idx) => (
                <motion.div 
                  key={p} 
                  className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.03, duration: 0.3 }}
                  whileHover={{ translateX: 4 }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="font-medium">{p}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Internships Section */}
          {member.interns && member.interns.length > 0 && (
            <motion.div 
              className="mb-12 pb-8 border-b border-secondary/40"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Internships & Mentorship</h2>
              </div>
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.05, delayChildren: 0.55 }}
              >
                {member.interns.map((i, idx) => (
                  <motion.div 
                    key={i} 
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-full font-medium text-sm hover:border-primary hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.55 + idx * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {i}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Skills Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">Skills</h2>
            </div>
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.05, delayChildren: 0.6 }}
            >
              {member.skills.map((s, idx) => (
                <motion.div 
                  key={s} 
                  className="px-4 py-2 bg-gradient-to-r from-primary to-primary/70 text-white rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + idx * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-secondary/40"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <motion.div 
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/contact" 
                className="flex-1 w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg hover:shadow-lg transition-all font-semibold flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact {member.name.split(" ")[0]}
              </Link>
            </motion.div>
            <motion.div 
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/about" 
                className="flex-1 w-full px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold text-center"
              >
                View All Team
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
