"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { submitContact } from "@/app/actions"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success?: string; error?: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormStatus(null)

    const result = await submitContact(formData)

    if (result.error) {
      setFormStatus({ error: result.error })
    } else if (result.success) {
      setFormStatus({ success: result.success })
      const form = document.querySelector("form") as HTMLFormElement
      form?.reset()
    }

    setIsSubmitting(false)
  }

  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/917904730223", "_blank")
  }

  const handleEmailRedirect = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=techthulirinfo@gmail.com", "_blank")
  }

  return (
    <div className="min-h-screen py-20 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          {/* Top Section: Contact Info with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h1 className="text-4xl font-bold mb-4">Let's not be Strangers</h1>
                <p className="text-lg text-muted-foreground">
                  We at TIT are always ready to help! Give us a call, send us an email, or fill out the form.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    {index === 0 && (
                      <>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="bg-white p-3 rounded-full shadow-sm text-primary"
                        >
                          <Phone className="w-6 h-6" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-lg">Phone</h3>
                          <a
                            href="https://wa.me/917904730223"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                          >
                            +91 7904730223
                          </a>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="bg-white p-3 rounded-full shadow-sm text-primary"
                        >
                          <Mail className="w-6 h-6" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-lg">Email</h3>
                          <button
                            onClick={handleEmailRedirect}
                            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-left"
                          >
                            techthulirinfo@gmail.com
                          </button>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="bg-white p-3 rounded-full shadow-sm text-primary"
                        >
                          <MapPin className="w-6 h-6" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-lg">Address</h3>
                          <p className="text-muted-foreground">
                            Odasalpatti X Road, Dharmapuri,
                            <br />
                            TamilNadu – 635303
                          </p>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps?q=Odasalpatti+X+Road,+Dharmapuri,+Tamil+Nadu+635303&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thulir Info Tech Office Location - Odasalpatti X Road, Dharmapuri"
                className="rounded-2xl"
              />
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-border"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                await handleSubmit(formData)
              }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="example@gmail.com" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  className="min-h-[120px]"
                  required
                />
              </div>

              {formStatus?.error && <p className="text-sm text-red-500">{formStatus.error}</p>}
              {formStatus?.success && <p className="text-sm text-green-600">{formStatus.success}</p>}

              <Button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Send Message via WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
