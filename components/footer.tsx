"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"
import AnimatedLogo from "./animated-logo"

export default function Footer() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <footer className="border-t border-white/10 glass-effect">
      <div className="container py-12 md:py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="relative">
                <AnimatedLogo />
              </div>
              <span className="text-xl font-bold gradient-text">Ameer Hamza</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Full Stack Web Developer and GIAIC Senior Student specializing in creating beautiful, functional, and
              user-friendly websites and applications.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" asChild className="relative group">
                <Link href="https://github.com/mr-hamza-3335" target="_blank" aria-label="GitHub">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="relative group">
                <Link href="https://www.linkedin.com/in/ameer-hamza-8615a02a5/" target="_blank" aria-label="LinkedIn">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="relative group">
                <Link href="https://www.youtube.com/@HamzaOnAir" target="_blank" aria-label="YouTube">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Youtube className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="relative group">
                <Link
                  href="https://www.facebook.com/profile.php?id=100089248872843"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Responsive Design
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span>ameerhamza94572@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span>+92 314 033 2320</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span>WhatsApp: +92 325 210 6239</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ameer Hamza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
