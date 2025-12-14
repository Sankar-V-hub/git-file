"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Megaphone, Monitor, FlaskConical } from "lucide-react"
import { ServiceDetailDialog } from "@/components/service-detail-dialog"

const servicesData = {
  marketing: {
    id: "marketing",
    title: "Marketing Services",
    icon: <Megaphone className="w-12 h-12 text-primary" />,
    tagline: "Power your digital marketing and take your company forward",
    description:
      "Transform your business with our game-changing service that will revolutionize the way you work and boost your bottom line.",
    preview: [
      "Social Media Marketing",
      "SEO & Performance Marketing",
      "Influencer Marketing",
      "Email Marketing",
      "E-Commerce Marketing",
      "Video & Content Marketing",
    ],
    services: [
      {
        title: "Social Media Marketing",
        description:
          "Maximize your social presence with a captivating design that sparks engagement and drives results. Level up your social media marketing game.",
      },
      {
        title: "Search Engine Optimization",
        description:
          "Boost your online visibility and outrank competitors with strategic SEO solutions that drive organic traffic and propel your business to new heights.",
      },
      {
        title: "Performance Marketing",
        description:
          "Supercharge your marketing efforts with performance-driven strategies that deliver measurable results and maximize your return on investment.",
      },
      {
        title: "Influencer Marketing",
        description:
          "Amplify your brand's reach and influence with impactful influencer marketing campaigns that engage audiences and drive authentic connections.",
      },
      {
        title: "Email Marketing",
        description:
          "Unlock the power of personalized communication and drive conversions with targeted email marketing campaigns that engage and inspire action.",
      },
      {
        title: "E-Commerce Marketing",
        description:
          "Scale your online store and drive sales with strategic ecommerce marketing solutions that attract, convert, and retain customers for sustainable growth.",
      },
      {
        title: "Video Marketing",
        description:
          "Capture attention and tell your brand's story through compelling video marketing that resonates, engages, and drives meaningful results.",
      },
      {
        title: "PR Marketing",
        description:
          "Shape your brand's narrative and generate buzz with strategic PR marketing that builds credibility, enhances reputation, and fuels growth.",
      },
      {
        title: "Content Marketing",
        description:
          "Fuel your digital presence with captivating content marketing strategies that engage, educate, and convert your audience into loyal customers.",
      },
    ],
  },
  it: {
    id: "it",
    title: "IT Based Services",
    icon: <Monitor className="w-12 h-12 text-primary" />,
    tagline: "Your brand is your story. We will help you portray it brilliantly!",
    description:
      "Stand out from the crowd and make a lasting impression with our expert branding service that will elevate your brand to new heights.",
    preview: [
      "Web Development",
      "UI/UX Design",
      "Brand Identity",
      "Package Design",
      "Stationery Design",
      "Pitch Deck Design",
    ],
    services: [
      {
        title: "Brand Identity",
        description:
          "Crafting your brand identity, leaving a lasting impression that captivates. Unlock your business's true potential with a distinct, memorable brand presence.",
      },
      {
        title: "Package Design",
        description:
          "Unleash your product's potential with an eye-catching package design. Stand out, captivate customers, and elevate your brand presence.",
      },
      {
        title: "Stationery Design",
        description:
          "Elevate your workspace with premium stationery essentials that inspire creativity and enhance productivity. Discover the perfect tools for your professional success.",
      },
      {
        title: "Website Design & Development",
        description:
          "Transform your online presence with stunning website design that captivates visitors and drives results. Stand out, engage, and succeed in the digital realm.",
      },
      {
        title: "UI/UX Design",
        description:
          "Elevate user experiences with seamless UI/UX design that delights visitors and drives engagement. Unlock the full potential of your digital platform.",
      },
      {
        title: "Pitch Deck Design",
        description:
          "Impress investors and secure funding with compelling pitch deck design that tells your story and showcases your business's potential.",
      },
      {
        title: "Mobile App Development",
        description:
          "Build powerful mobile applications that engage users and drive business growth with cutting-edge technology and intuitive design.",
      },
      {
        title: "E-Commerce Solutions",
        description:
          "Create robust e-commerce platforms that drive sales and deliver seamless shopping experiences for your customers.",
      },
    ],
  },
  rnd: {
    id: "rnd",
    title: "Research & Development",
    icon: <FlaskConical className="w-12 h-12 text-primary" />,
    tagline: "Empower Your Brand's Success with Strategic Promotion",
    description:
      "Supercharge your marketing with our advertising service that ignites your audience and accelerates your ROI like never before.",
    preview: [
      "Building Advertising",
      "Vehicle Advertising",
      "Outdoor Advertising",
      "Digital Advertising",
      "Television & Newspaper Advertising",
    ],
    services: [
      {
        title: "Building Advertising",
        description:
          "Building advertising has emerged as a powerful tool to capture the attention of your target audience and promote your brand, products, and services.",
      },
      {
        title: "Vehicle Advertising",
        description:
          "Vehicle advertising has emerged as a powerful marketing strategy, leveraging the widespread presence of popular transportation modes to maximize brand visibility.",
      },
      {
        title: "Outdoor Advertising",
        description:
          "Outdoor advertising has emerged as a compelling medium to captivate audiences and drive brand visibility in high-traffic locations.",
      },
      {
        title: "Magazine Advertising",
        description:
          "Magazine advertising continues to be a valuable marketing tool that can make a lasting impact on your target audience with premium placements.",
      },
      {
        title: "Digital Advertising",
        description:
          "Digital advertising has emerged as a game-changer in marketing strategies. We empower brands to harness the full potential of digital channels.",
      },
      {
        title: "Television Advertising",
        description:
          "Television advertising has long been a dominant force in the marketing world, captivating audiences with its visual appeal and storytelling capabilities.",
      },
      {
        title: "Newspaper Advertising",
        description:
          "Newspaper advertising remains a timeless and effective marketing strategy that can give your business a competitive edge in local markets.",
      },
      {
        title: "Market Research & Analytics",
        description:
          "Leverage data-driven insights to understand market trends, consumer behavior, and competitive landscape for informed decision-making.",
      },
    ],
  },
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<{
    id: string
    title: string
    tagline: string
    services: Array<{ title: string; description: string }>
  } | null>(null)

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to ignite your brand's potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.values(servicesData).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:border-primary transition-all"
            >
              <div className="mb-6 p-4 bg-secondary/30 rounded-xl w-fit">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.preview.map((detail) => (
                  <li key={detail} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  onClick={() => setSelectedService(service)}
                >
                  View Services
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceDetailDialog
        open={!!selectedService}
        onOpenChange={(open) => !open && setSelectedService(null)}
        service={selectedService}
      />
    </div>
  )
}
