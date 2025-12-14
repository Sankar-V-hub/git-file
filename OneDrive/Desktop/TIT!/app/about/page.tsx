"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Briefcase } from "lucide-react"
import Link from "next/link"
import team from "@/lib/team"

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

const cardHoverVariants = {
  initial: { y: 0, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" },
  hover: { 
    y: -12, 
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    }
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">TIT</span>
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side - GIF */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <Image 
                src="/modern-tech-company-team-collaboration-animated-gi.jpg" 
                alt="Thulir Info Tech Team" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Right side - 3 Paragraphs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-right"
            >
              {[
                "At TIT, we believe in the power of storytelling. We bring your brand's story to life with captivating design, innovative strategies, and data-driven insights. Our mission is simple: to set your brand ablaze and make a lasting impact in your industry.",
                "Collaboration is key. We work hand-in-hand with you, uncovering your unique voice and crafting tailored solutions that drive results. Whether you're a startup, an established business, or an industry leader, we've got the expertise to make your brand shine.",
                "From comprehensive marketing campaigns to captivating visual identities, we've got your back. Our team of marketing mavericks and branding enthusiasts is always one step ahead, ensuring you stay ahead too."
              ].map((text, idx) => (
                <motion.p 
                  key={idx}
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Meet Our <span className="text-primary">Leadership</span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              The passionate minds and strategic thinkers behind your brand's success.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {team.map((leader, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                variants={cardHoverVariants}
                className="bg-card hover:bg-accent/50 transition-colors p-6 rounded-xl border border-secondary/40 shadow-sm group flex flex-col h-full relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="mb-4">
                  {leader.image ? (
                    <motion.div 
                      className={`relative mx-auto mb-4 ${leader.name === "Vignesh M" ? "w-20 h-20" : "w-24 h-24"}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        fill
                        className="rounded-full object-cover border-2 border-primary/20 group-hover:border-primary transition-colors duration-500"
                      />
                    </motion.div>
                  ) : (
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-500 border-2 border-primary/20 group-hover:border-primary">
                      <span className="text-2xl font-bold">{leader.name.charAt(0)}</span>
                    </div>
                  )}
                </div>

                <motion.div 
                  className="flex items-center justify-end mb-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <Briefcase className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors duration-300" />
                </motion.div>

                <motion.h3 
                  className="font-bold text-lg mb-1 text-center group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  {leader.name}
                </motion.h3>

                <motion.p 
                  className="text-primary font-medium text-xs mb-3 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                >
                  {leader.role}
                </motion.p>

                <motion.p 
                  className="text-sm text-muted-foreground leading-relaxed text-center flex-grow"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {leader.bio}
                </motion.p>

                <motion.div 
                  className="mt-6 pt-4 border-t border-secondary/40 flex gap-2 justify-center w-full"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                >
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/about/leader/${leader.slug}`}
                      className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-2 rounded-lg hover:shadow-lg transition-all font-semibold text-sm w-full"
                    >
                      View Profile
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
