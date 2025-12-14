import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Paintbrush as Pinterest } from "lucide-react"

export function Footer() {
  return ( 
    <footer className="bg-secondary/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="relative h-16 w-48">
              <Image src="/images/tit.jpg" alt="Thulir Info Tech" fill className="object-contain object-left" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We make digital beautiful! Every story we tell, every brand we build, and every marketing strategy we
              develop not only looks beautiful but feels and functions beautifully too.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary">Explore</h3>
            <ul className="space-y-3">
              {["Home", "About us", "Services", "Case Study", "Careers"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-") === "home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary">Reach us</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>We are excited to get in touch with you!</p>
              <p>
                <a href="mailto:techthulirinfo@gmail.com" className="hover:text-primary">
                  techthulirinfo@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+917904730223" className="hover:text-primary">
                  +91 7904730223
                </a>
              </p>
              <p>
                Odasalpatti X Road, Dharmapuri,
                <br />
                TamilNadu – 635303
              </p>
              <div className="pt-2">
                <p className="font-semibold text-foreground">Opening Hours:</p>
                <p>Mon – Sat: 10:00 AM – 07:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <SocialLink
                href="https://x.com/InfoThulir?t=DLcMqn6crKOWIV2h0hkbYQ&s=09"
                icon={<Twitter className="h-5 w-5" />}
                label="X (Twitter)"
              />
              <SocialLink
                href="https://www.instagram.com/thulir_infotech?utm_source=qr&igsh=MWVyNnZldmd6NXZ2ZA=="
                icon={<Instagram className="h-5 w-5" />}
                label="Instagram"
              />
              <SocialLink
                href="https://www.linkedin.com/in/thulir-info-tech-bbb204396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://youtube.com/@thulirinfotech?si=Cmv1tqYMFji6rWNF"
                icon={<Youtube className="h-5 w-5" />}
                label="YouTube"
              />
              <SocialLink
                href="https://www.facebook.com/share/19mggAMtQa/"
                icon={<Facebook className="h-5 w-5" />}
                label="Facebook"
              />
              <SocialLink href="https://pin.it/2ljcZcuVj" icon={<Pinterest className="h-5 w-5" />} label="Pinterest" />
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>©2026 TIT.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white p-3 rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all hover:-translate-y-1"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
