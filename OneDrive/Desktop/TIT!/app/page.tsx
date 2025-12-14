"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Zap, Rocket, Users, Target, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                TIT - Your Trusted <span className="text-primary">Marketing Partner</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Welcome to TIT, where marketing meets fire. We're not your ordinary agency. We're a passionate team of
              creative minds and strategic thinkers dedicated to sparking brand success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-lg"
                asChild
              >
                <Link href="/contact">Let's TIT Up</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 text-lg border-primary text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/50 rounded-full blur-3xl -z-10" />
      </section>

      {/* Let's TIT Up Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-evenly gap-12 items-center">
            {/* Image on LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] w-full lg:w-[45%] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/ai-artificial-intelligence-technology-growth-digit.jpg"
                alt="AI Technology Growth"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </motion.div>

            {/* Text on RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 w-full lg:w-[45%]"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-right">
                Let's <span className="text-primary">TIT Up</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-right">
                <p>
                  At TIT, we believe in the power of storytelling. We bring your brand's story to life with captivating
                  design, innovative strategies, and data-driven insights. Our mission is simple: to set your brand
                  ablaze and make a lasting impact in your industry.
                </p>
                <p>
                  Collaboration is key. We work hand-in-hand with you, uncovering your unique voice and crafting
                  tailored solutions that drive results. Whether you're a startup, an established business, or an
                  industry leader, we've got the expertise to make your brand shine.
                </p>
                <p>
                  From comprehensive marketing campaigns to captivating visual identities, we've got your back. Our team
                  of marketing mavericks and branding enthusiasts is always one step ahead, ensuring you stay ahead too.
                </p>
              </div>
              <div className="flex justify-end">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-lg mt-6"
                  asChild
                >
                  <Link href="/contact">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 relative"
            >
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary font-medium text-sm shadow-sm">
                <Target className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Igniting Global <span className="text-primary">Brand Transformation</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the spark that redefines industry standards, blending creative mastery with technological
                innovation. We envision a world where every brand story is told with passion, precision, and purpose.
              </p>
              <ul className="space-y-3">
                {["Global Innovation", "Creative Excellence", "Sustainable Growth"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-secondary relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary font-medium text-sm mb-6">
                  <Lightbulb className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Setting Your Brand Ablaze</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our mission is simple: to set your brand ablaze and make a lasting impact in your industry. We bring
                  your brand's story to life with captivating design, innovative strategies, and data-driven insights.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Client-Centric Partnership</h4>
                      <p className="text-sm text-muted-foreground">We work hand-in-hand with you as family.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Rocket className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Results-Driven Execution</h4>
                      <p className="text-sm text-muted-foreground">Tailored solutions that drive real impact.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative background blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose TIT Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TIT</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We bring your brand's story to life with captivating design, innovative strategies, and data-driven
              insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-10 h-10 text-primary" />}
              title="Strategic Expertise"
              description="Our team of marketing mavericks is always one step ahead, ensuring you stay ahead too."
            />
            <FeatureCard
              icon={<Rocket className="w-10 h-10 text-primary" />}
              title="Results-Driven Approach"
              description="We craft tailored solutions that drive results, whether you're a startup or an industry leader."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10 text-primary" />}
              title="Collaboration is Key"
              description="We work hand-in-hand with you, uncovering your unique voice and making your brand shine."
            />
            <FeatureCard
              icon={<CheckCircle2 className="w-10 h-10 text-primary" />}
              title="Unmatched Excellence"
              description="From comprehensive marketing campaigns to captivating visual identities, we've got your back."
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10 text-primary" />}
              title="Diverse Portfolio"
              description="A track record of success across various industries and scales of operation."
            />
            <FeatureCard
              icon={<Rocket className="w-10 h-10 text-primary" />}
              title="Scale of Operations"
              description="Join us on this exciting journey as we unleash your brand's full potential."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Spark Your Brand's Success?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            When you partner with TIT, you're not just a client – you're family. Let's leave a trail of sparks in your
            wake.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-lg font-semibold" asChild>
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 rounded-2xl bg-secondary/20 border border-secondary hover:border-primary/50 transition-colors"
    >
      <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  )
}
