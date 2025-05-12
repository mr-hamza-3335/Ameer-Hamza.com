"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Youtube, Facebook } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form and show success message
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="animate-in">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm" variant="secondary">
              Get in Touch
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Let's Connect</h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 md:py-16 glass-effect">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: <Mail className="h-10 w-10 text-primary" />,
                title: "Email",
                description: "Feel free to reach out via email",
                contact: "ameerhamza94572@gmail.com",
                link: "mailto:ameerhamza94572@gmail.com",
              },
              {
                icon: <Phone className="h-10 w-10 text-primary" />,
                title: "Phone",
                description: "Call me for quick inquiries",
                contact: "+92 314 033 2320",
                link: "tel:+923140332320",
              },
              {
                icon: <MapPin className="h-10 w-10 text-primary" />,
                title: "Location",
                description: "Based in",
                contact: "Karachi, Pakistan",
                link: "https://maps.google.com/?q=Karachi,Pakistan",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="hover-card">
                <Card className="h-full overflow-hidden transition-all hover:shadow-md border-white/10 glass-effect group tilt-card">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="group-hover:animate-pulse-scale"
                      >
                        {item.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold gradient-text">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-primary hover:underline"
                    >
                      {item.contact}
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24" id="contact-form">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <SectionHeading
                title="Send Me a Message"
                subtitle="Fill out the form and I'll get back to you as soon as possible"
                className="text-left"
              />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="border-white/10 bg-white/5"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="border-white/10 bg-white/5"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="border-white/10 bg-white/5"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    required
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    className="border-white/10 bg-white/5 min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full gradient-border hover-button" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </div>
                  )}
                </Button>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-md bg-primary/20 text-center text-sm"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold gradient-text">Connect on Social Media</h3>
                <p className="text-muted-foreground">
                  Follow me on social media to see my latest projects, updates, and more.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: <Github className="h-5 w-5" />,
                      name: "GitHub",
                      username: "@mr-hamza-3335",
                      link: "https://github.com/mr-hamza-3335",
                    },
                    {
                      icon: <Linkedin className="h-5 w-5" />,
                      name: "LinkedIn",
                      username: "Ameer Hamza",
                      link: "https://www.linkedin.com/in/ameer-hamza-8615a02a5/",
                    },
                    {
                      icon: <Youtube className="h-5 w-5" />,
                      name: "Youtube",
                      username: "@hamzaonair",
                      link: "https://www.youtube.com/@HamzaOnAir",
                    },
                    {
                      icon: <Facebook className="h-5 w-5" />,
                      name: "Facebook",
                      username: "@ameerhamza",
                      link: "https://www.facebook.com/profile.php?id=100089248872843",
                    },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{social.name}</h4>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold gradient-text">Availability</h3>
                <p className="text-muted-foreground">
                  I'm currently available for freelance work and open to discussing new opportunities.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-muted-foreground">Available for freelance projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-muted-foreground">Open to full-time opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-muted-foreground">Available for consultations</span>
                  </div>
                </div>

                <div className="p-4 rounded-md bg-primary/10 border border-primary/20">
                  <p className="text-sm">
                    <span className="font-medium">Response Time:</span> I typically respond to inquiries within 24-48
                    hours. For urgent matters, please mention "Urgent" in the subject line.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 glass-effect">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Frequently Asked Questions" subtitle="Common questions about working with me" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {[
              {
                question: "What is your typical project process?",
                answer:
                  "My process typically includes an initial consultation, proposal and scope definition, design and development phases, client feedback and revisions, and finally launch and support.",
              },
              {
                question: "How do you handle project pricing?",
                answer:
                  "I offer both fixed-price and hourly rate options depending on the project scope. For most projects, I prefer a fixed-price approach based on detailed requirements to ensure clarity for both parties.",
              },
              {
                question: "What is your typical turnaround time?",
                answer:
                  "Turnaround time varies based on project complexity. Small websites might take 2-4 weeks, while larger applications can take 2-3 months. I always provide a timeline estimate before starting.",
              },
              {
                question: "Do you offer ongoing maintenance?",
                answer:
                  "Yes, I offer maintenance packages for websites and applications I've built. These can include regular updates, security patches, content updates, and technical support.",
              },
              {
                question: "Can you work with existing designs?",
                answer:
                  "I can work with designs provided in various formats (Figma, Adobe XD, PSD, etc.) and turn them into fully functional websites or applications.",
              },
              {
                question: "Do you offer SEO services?",
                answer:
                  "I build all websites with SEO best practices in mind, including proper semantic HTML, optimized performance, and mobile responsiveness. For advanced SEO campaigns, I can recommend trusted partners.",
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-white/10 glass-effect hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold gradient-text mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">Ready to start a project?</h2>
              <p className="text-muted-foreground md:text-lg">
                Let's create something amazing together. Reach out and let's discuss your ideas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
                <Button size="lg" asChild className="gradient-border group">
                  <a href="#contact-form" className="relative overflow-hidden">
                    <span className="relative z-10">Send a Message</span>
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <Send className="ml-2 h-4 w-4 relative z-10" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white/10 hover:border-white/20">
                  <Link href="/projects">View My Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
