"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"
import { ArrowRight, Calendar, GraduationCap, Briefcase, Download } from "lucide-react"

export default function AboutPage() {
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
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.15),transparent_65%)]"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-purple-500/20 text-purple-300" variant="secondary">
              About Me
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              My Journey & Story
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Get to know more about me, my background, and what drives my passion for web development.
            </p>
          </motion.div>
        </div>

        {/* Animated elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-purple-500/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
      </section>

      {/* About Me Section */}
      <section className="py-12 md:py-16 glass-effect">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-lg border border-white/10 glass-effect shadow-lg">
                <div className="relative w-full h-full">
                  <Image
                    src="/2.jpg"
                    alt="Ameer Hamza"
                    width={600}
                    height={600}
                    className="object-cover object-top w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-lg bg-purple-500/20 blur-md"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold gradient-text">Ameer Hamza</h2>
                <p className="mt-2 text-xl text-muted-foreground">Full Stack Web Developer</p>
              </div>

              <p className="text-muted-foreground">
                I'm a passionate Full Stack Developer with a strong focus on creating beautiful, functional, and
                user-friendly websites and applications. With expertise in both frontend and backend technologies, I
                strive to build digital experiences that are not only visually appealing but also performant and
                accessible.
              </p>

              <p className="text-muted-foreground">
                My journey in web development began during my studies at GIAIC, where I discovered my passion for coding
                and problem-solving. I have completed my Intermediate in Engineering field and am currently pursuing an
                IT Course at GIAIC to further enhance my skills.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-muted-foreground">Based in Karachi, Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-muted-foreground">GIAIC Senior Student</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-muted-foreground">Available for Freelance</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white hover-button">
                  <Link href="/contact" className="relative overflow-hidden">
                    <span className="relative z-10">Get in Touch</span>
                    <motion.div
                      className="absolute inset-0 bg-purple-500/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-purple-500/30 hover:border-purple-500/50 hover:text-purple-500"
                >
                  <Link href="/Ameer-Hamza-CV.pdf" target="_blank" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Education & Experience" subtitle="My academic and professional journey" />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Education */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-purple-500" />
                Education
              </h3>

              {[
                {
                  degree: "IT Course",
                  institution: "GIAIC",
                  duration: "2023 - Present",
                  description:
                    "Studying advanced web development concepts, AI, and their practical applications in building modern applications.",
                },
                {
                  degree: "Intermediate in Engineering",
                  institution: "College",
                  duration: "2021 - 2023",
                  description:
                    "Completed intermediate education with a focus on engineering subjects, building a strong foundation in technical concepts.",
                },
                {
                  degree: "Web Development Bootcamp",
                  institution: "Online Platform",
                  duration: "2022",
                  description:
                    "Intensive bootcamp covering full stack web development with modern JavaScript frameworks and libraries.",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="relative pl-8 border-l border-white/10">
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-purple-500/20 border border-purple-500"></div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-purple-500" />
                      <span className="text-sm text-muted-foreground">{item.duration}</span>
                    </div>
                    <h4 className="text-lg font-semibold gradient-text">{item.degree}</h4>
                    <p className="text-muted-foreground">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Experience */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-purple-500" />
                Experience
              </h3>

              {[
                {
                  position: "Freelance Web Developer",
                  company: "Self-employed",
                  duration: "2022 - Present",
                  description:
                    "Designing and developing custom websites and web applications for clients across various industries.",
                  responsibilities: [
                    "Building responsive and accessible websites",
                    "Implementing frontend designs with React and Next.js",
                    "Developing backend APIs and database integrations",
                    "Optimizing website performance and SEO",
                  ],
                },
                {
                  position: "Junior Web Developer",
                  company: "Tech Solutions",
                  duration: "2022 - 2023",
                  description:
                    "Worked on developing and maintaining web applications for clients in the e-commerce sector.",
                  responsibilities: [
                    "Implementing UI components using React",
                    "Collaborating with designers to translate mockups into code",
                    "Fixing bugs and improving application performance",
                    "Participating in code reviews and team meetings",
                  ],
                },
                {
                  position: "Web Development Intern",
                  company: "Digital Creations",
                  duration: "2021 - 2022",
                  description:
                    "Assisted the development team in building websites and learned practical web development skills.",
                  responsibilities: [
                    "Assisting senior developers with coding tasks",
                    "Building and maintaining websites",
                    "Learning modern web development practices",
                    "Testing websites across different browsers and devices",
                  ],
                },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="relative pl-8 border-l border-white/10">
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-purple-500/20 border border-purple-500"></div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-purple-500" />
                      <span className="text-sm text-muted-foreground">{item.duration}</span>
                    </div>
                    <h4 className="text-lg font-semibold gradient-text">{item.position}</h4>
                    <p className="text-muted-foreground">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <ul className="space-y-1 mt-2">
                      {item.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 glass-effect">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
                Interested in working together?
              </h2>
              <p className="text-muted-foreground md:text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
                <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700 text-white hover-button">
                  <Link href="/contact" className="relative overflow-hidden">
                    <span className="relative z-10">Get in Touch</span>
                    <motion.div
                      className="absolute inset-0 bg-purple-500/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-purple-500/30 hover:border-purple-500/50 hover:text-purple-500"
                >
                  <Link href="/projects">
                    View My Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
