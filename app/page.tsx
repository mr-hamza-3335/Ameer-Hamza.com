"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import StatsCounter from "@/components/stats-counter"
import ServicesSection from "@/components/services-section"
import TimelineSection from "@/components/timeline-section"
import BlogPreview from "@/components/blog-preview"
import { ArrowRight, Github, Linkedin, Facebook, Youtube, Code, Server, Layout, Database } from "lucide-react"
import AnimatedName from "@/components/animated-name" // Import the AnimatedName component

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
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
      <section className="py-10 md:py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.15),transparent_65%)]"></div>
        </div>

        {/* Floating orbs */}
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

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge className="mb-2 px-3 py-1 text-sm" variant="secondary">
                    Full Stack Developer & GIAIC Senior Student
                  </Badge>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                >
                  {/* Replace static text with AnimatedName component */}
                  <AnimatedName name="Ameer Hamza" />
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <div className="max-w-[600px] text-muted-foreground md:text-xl">
                    Passionate Full Stack Developer creating modern, responsive web applications with cutting-edge
                    technologies. Currently pursuing IT at GIAIC.
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
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
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.4 }}
                className="flex gap-4 mt-4"
              >
                <Link
                  href="https://github.com/mr-hamza-3335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ameer-hamza-8615a02a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://www.youtube.com/@HamzaOnAir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100089248872843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="relative mx-auto lg:mx-0"
            >
              {/* Purple glow effect */}
              <div className="absolute -inset-4 rounded-full bg-purple-600/30 blur-3xl opacity-70"></div>

              {/* Profile image container */}
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white/10 z-10">
                <Image
                  src="/6.jpg"
                  alt="Ameer Hamza"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 bg-purple-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/30 z-20">
                <span className="text-xs font-medium">Next.js</span>
              </div>
              <div className="absolute top-1/4 -left-4 bg-purple-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/30 z-20">
                <span className="text-xs font-medium">React</span>
              </div>
              <div className="absolute bottom-1/4 -right-4 bg-purple-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/30 z-20">
                <span className="text-xs font-medium">TypeScript</span>
              </div>
              <div className="absolute -bottom-2 left-1/4 bg-purple-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/30 z-20">
                <span className="text-xs font-medium">Tailwind</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <StatsCounter />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 glass-effect">
        <div className="container px-4 md:px-6">
          <SectionHeading title="About Me" subtitle="Get to know more about me and what I do" />

          <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-muted-foreground">
                I'm a passionate Full Stack Developer with expertise in building modern web applications using the
                latest technologies. As a GIAIC Senior Student, I'm constantly learning and improving my skills to stay
                at the forefront of web development.
              </p>
              <p className="text-muted-foreground">
                My educational background includes Intermediate in Engineering field, and I'm currently pursuing an IT
                Course at GIAIC to further enhance my technical skills and knowledge in the field of web development and
                artificial intelligence.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
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
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white hover-button">
                  <Link href="/about" className="relative overflow-hidden">
                    <span className="relative z-10">More About Me</span>
                    <motion.div
                      className="absolute inset-0 bg-purple-500/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="relative mx-auto max-w-md"
            >
              <div className="aspect-video overflow-hidden rounded-lg border border-white/10 glass-effect shadow-lg">
                <div className="relative w-full h-full">
                  <Image
                    src="/7.jpg"
                    alt="About Me"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 animate-pulse-scale">
                      Full Stack Developer
                    </Badge>
                    <h3 className="text-lg font-semibold text-white">Turning Ideas into Reality</h3>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-lg bg-purple-500/20 blur-md"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionHeading title="My Journey" subtitle="The path that led me to where I am today" />
          <div className="mt-12">
            <TimelineSection />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 glass-effect">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Services I Offer" subtitle="Professional services to help you achieve your goals" />
          <div className="mt-12">
            <ServicesSection />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionHeading title="My Skills" subtitle="Technologies and tools I work with" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: <Layout className="h-10 w-10 text-purple-500" />,
                title: "Frontend",
                skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
              },
              {
                icon: <Server className="h-10 w-10 text-purple-500" />,
                title: "Backend",
                skills: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL"],
              },
              {
                icon: <Database className="h-10 w-10 text-purple-500" />,
                title: "Database",
                skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase"],
              },
              {
                icon: <Code className="h-10 w-10 text-purple-500" />,
                title: "Others",
                skills: ["Git", "GitHub", "VS Code", "Responsive Design", "UI/UX Principles"],
              },
            ].map((category, index) => (
              <motion.div key={index} variants={fadeInUp} className="hover-card">
                <Card className="h-full overflow-hidden transition-all hover:shadow-md border-white/10 glass-effect group tilt-card">
                  <CardContent className="p-6">
                    <div className="mb-4 relative">
                      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="group-hover:animate-pulse-scale"
                      >
                        {category.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold gradient-text">{category.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {category.skills.map((skill, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 text-center">
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white hover-button">
              <Link href="/skills">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 glass-effect">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "E-commerce Platform",
                description: "A fully responsive e-commerce website with product catalog, shopping cart, and checkout functionality.",
                image: "/e comm.PNG",
                tags: ["Next.js", "Tailwind CSS", "TypeScript"],
              },
              {
                title: "Portfolio Website",
                description: "A personal portfolio website showcasing my projects and skills.",
                image: "/port.PNG",
                tags: ["React", "Framer Motion", "Tailwind CSS"],
              },
              {
                title: "Revolutionizing E-Commerce Trends (Blog Website)",
                description: "Explore the latest innovations and insights shaping the future of online shopping",
                image: "/e.PNG",
                tags: ["TypeScript", "React", "Next.js","Tailwind"],
              },
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp} className="hover-card">
                <Card className="h-full overflow-hidden transition-all hover:shadow-md border-white/10 glass-effect group">
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold gradient-text">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-purple-500/10 text-purple-300 group-hover:animate-pulse-scale"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 text-center">
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white hover-button">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Latest Articles" subtitle="Insights and thoughts on web development" />
          <div className="mt-12">
            <BlogPreview />
          </div>
          <div className="mt-8 text-center">
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white hover-button">
              <Link href="#">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 glass-effect">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Testimonials" subtitle="What people say about my work" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director",
                content:
                  "Ameer delivered an exceptional website that perfectly captured our brand. His attention to detail and technical expertise are impressive.",
                image: "/8.webp",
              },
              {
                name: "Michael Chen",
                role: "Startup Founder",
                content:
                  "Working with Ameer was a pleasure. He understood our requirements quickly and delivered a solution that exceeded our expectations.",
                image: "/9.webp",
              },
              {
                name: "Shahsmeen Zahra",
                role: "Senior Student Of GIAIC",
                content:
                  "Our online store's performance improved significantly after Ameer's optimization. His technical knowledge and problem-solving skills are outstanding.",
                image: "/10.jpeg",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp} className="hover-card">
                <Card className="h-full overflow-hidden transition-all hover:shadow-md border-white/10 glass-effect group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                    </div>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
                Let's work together on your next project
              </h2>
              <p className="text-muted-foreground md:text-lg">
                I'm currently available for freelance work. If you have a project that you want to get started or need
                help with something, feel free to reach out.
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
                    View My Work
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
