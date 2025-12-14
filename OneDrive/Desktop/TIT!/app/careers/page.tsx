"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MapPin, Clock, Briefcase } from "lucide-react"
import { JobApplicationDialog } from "@/components/job-application-dialog" // Import dialog

const jobs = [
  { title: "Graphic Designer", type: "Full time", location: "Remote Job", department: "Marketing" },
  { title: "Finance Executive", type: "Full time", location: "Coimbatore South, India", department: "Finance" },
  { title: "Content Creator", type: "Freelance", location: "Remote Job", department: "Marketing" },
  {
    title: "Digital Marketing Executive",
    type: "Full time",
    location: "Coimbatore South, India",
    department: "Marketing",
  },
  { title: "Brand Marketing Manager", type: "Full time", location: "Remote Job", department: "Marketing" },
  {
    title: "Senior Program Administrator",
    type: "Full time",
    location: "Coimbatore South, India",
    department: "Operations",
  },
  { title: "Business Development Intern", type: "Full time", location: "Coimbatore South, India", department: "Sales" },
  { title: "AI ML Trainer", type: "Full time", location: "Coimbatore South, India", department: "Technology" },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Family</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're more than just a workplace. Find the career of your dreams and start your journey with us.
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ x: 10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-xl border border-border hover:border-primary transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" /> {job.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </span>
                </div>
              </div>
              <JobApplicationDialog jobTitle={job.title}>
                <Button
                  variant="outline"
                  className="shrink-0 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  Apply Now
                </Button>
              </JobApplicationDialog>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
