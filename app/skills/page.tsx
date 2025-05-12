"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/section-heading"
import {
  ArrowRight,
  Database,
  Layout,
  Server,
  Smartphone,
  Zap,
  Layers,
  Palette,
  Globe,
  Terminal,
  GitBranch,
  Cpu,
} from "lucide-react"

export default function SkillsPage() {
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
              My Skills
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              Technical Expertise
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              A comprehensive overview of my technical skills, tools, and technologies I work with.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-12 md:py-16 glass-effect">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Skills Overview" subtitle="My technical toolkit at a glance" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: <Layout className="h-10 w-10 text-primary" />,
                title: "Frontend Development",
                description:
                  "Creating responsive and interactive user interfaces with modern frameworks and libraries.",
                skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
              },
              {
                icon: <Server className="h-10 w-10 text-primary" />,
                title: "Backend Development",
                description: "Building robust server-side applications and APIs to power web applications.",
                skills: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL"],
              },
              {
                icon: <Database className="h-10 w-10 text-primary" />,
                title: "Database Management",
                description: "Designing efficient database schemas and implementing data storage solutions.",
                skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
              },
              {
                icon: <Smartphone className="h-10 w-10 text-primary" />,
                title: "Responsive Design",
                description: "Ensuring applications look and function perfectly on all devices and screen sizes.",
                skills: ["Mobile-First", "Adaptive UI", "Cross-Browser", "Media Queries", "Flexbox/Grid"],
              },
              {
                icon: <GitBranch className="h-10 w-10 text-primary" />,
                title: "Version Control & CI/CD",
                description: "Managing code versions and implementing continuous integration/deployment pipelines.",
                skills: ["Git", "GitHub", "GitLab", "CI/CD Pipelines", "Vercel", "Netlify"],
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Performance Optimization",
                description: "Optimizing applications for speed, efficiency, and the best user experience.",
                skills: ["Lazy Loading", "Code Splitting", "Caching", "Bundling", "Compression"],
              },
              {
                icon: <Palette className="h-10 w-10 text-primary" />,
                title: "UI/UX Design",
                description: "Creating visually appealing and user-friendly interfaces with attention to detail.",
                skills: ["Figma", "Adobe XD", "UI Components", "Animation", "Color Theory"],
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Web Standards",
                description: "Implementing best practices and standards for accessible, secure web applications.",
                skills: ["Accessibility (a11y)", "SEO", "Web Vitals", "Security", "HTTPS"],
              },
              {
                icon: <Cpu className="h-10 w-10 text-primary" />,
                title: "AI & Machine Learning",
                description: "Integrating artificial intelligence and machine learning capabilities into applications.",
                skills: ["AI APIs", "TensorFlow.js", "Natural Language Processing", "Computer Vision"],
              },
            ].map((skill, index) => (
              <motion.div key={index} variants={fadeInUp} className="hover-card">
                <Card className="h-full overflow-hidden transition-all hover:shadow-md border-white/10 glass-effect group tilt-card">
                  <CardContent className="p-6">
                    <div className="mb-4 relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="group-hover:animate-pulse-scale"
                      >
                        {skill.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold gradient-text">{skill.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{skill.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {skill.skills.map((item, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-primary/10 text-primary-foreground group-hover:animate-pulse-scale"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skill Proficiency Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Skill Proficiency"
            subtitle="A detailed breakdown of my technical proficiency levels"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="frontend" className="text-sm sm:text-base">
                  <Layout className="h-4 w-4 mr-2 hidden sm:inline-block" />
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="backend" className="text-sm sm:text-base">
                  <Server className="h-4 w-4 mr-2 hidden sm:inline-block" />
                  Backend
                </TabsTrigger>
                <TabsTrigger value="tools" className="text-sm sm:text-base">
                  <Terminal className="h-4 w-4 mr-2 hidden sm:inline-block" />
                  Tools
                </TabsTrigger>
                <TabsTrigger value="other" className="text-sm sm:text-base">
                  <Layers className="h-4 w-4 mr-2 hidden sm:inline-block" />
                  Other
                </TabsTrigger>
              </TabsList>

              <TabsContent value="frontend" className="space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-6"
                >
                  {[
                    { name: "HTML5 & CSS3", level: 95 },
                    { name: "JavaScript (ES6+)", level: 90 },
                    { name: "TypeScript", level: 85 },
                    { name: "React.js", level: 90 },
                    { name: "Next.js", level: 85 },
                    { name: "Tailwind CSS", level: 90 },
                    { name: "Framer Motion", level: 80 },
                    { name: "Responsive Design", level: 95 },
                    { name: "UI/UX Principles", level: 85 },
                  ].map((skill, index) => (
                    <motion.div key={index} variants={fadeInUp} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                        indicatorClassName="bg-gradient-to-r from-primary to-purple-400"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="backend" className="space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-6"
                >
                  {[
                    { name: "Node.js", level: 85 },
                    { name: "Express.js", level: 80 },
                    { name: "RESTful APIs", level: 90 },
                    { name: "GraphQL", level: 75 },
                    { name: "MongoDB", level: 85 },
                    { name: "MySQL", level: 80 },
                    { name: "PostgreSQL", level: 75 },
                    { name: "Firebase", level: 85 },
                    { name: "Authentication & Authorization", level: 85 },
                  ].map((skill, index) => (
                    <motion.div key={index} variants={fadeInUp} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                        indicatorClassName="bg-gradient-to-r from-primary to-purple-400"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="tools" className="space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-6"
                >
                  {[
                    { name: "Git & GitHub", level: 90 },
                    { name: "VS Code", level: 95 },
                    { name: "Figma", level: 80 },
                    { name: "Adobe XD", level: 75 },
                    { name: "Webpack", level: 80 },
                    { name: "Vite", level: 85 },
                    { name: "Chrome DevTools", level: 90 },
                    { name: "Postman", level: 85 },
                    { name: "CI/CD Pipelines", level: 80 },
                  ].map((skill, index) => (
                    <motion.div key={index} variants={fadeInUp} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                        indicatorClassName="bg-gradient-to-r from-primary to-purple-400"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="other" className="space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-6"
                >
                  {[
                    { name: "Problem Solving", level: 90 },
                    { name: "Agile Methodology", level: 85 },
                    { name: "Technical Writing", level: 80 },
                    { name: "Project Management", level: 75 },
                    { name: "SEO Optimization", level: 80 },
                    { name: "Web Performance", level: 85 },
                    { name: "Accessibility", level: 80 },
                    { name: "Testing & Debugging", level: 85 },
                    { name: "AI Integration", level: 75 },
                  ].map((skill, index) => (
                    <motion.div key={index} variants={fadeInUp} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                        indicatorClassName="bg-gradient-to-r from-primary to-purple-400"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="py-16 md:py-24 glass-effect">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Learning Journey"
            subtitle="My approach to continuous learning and skill development"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-4"
            >
              <p className="text-muted-foreground">
                As a developer, I believe in the power of continuous learning and staying updated with the latest
                technologies and best practices. My learning journey is guided by a few core principles:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Practical Application:</span> I learn by building real
                    projects that solve actual problems.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Community Engagement:</span> I actively participate in
                    developer communities, forums, and open-source projects.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Structured Learning:</span> I follow structured
                    courses and tutorials to build a solid foundation in new technologies.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Teaching Others:</span> I create content and tutorials
                    to solidify my understanding and help others learn.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Experimentation:</span> I'm not afraid to try new
                    technologies and approaches to find better solutions.
                  </p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative mx-auto max-w-md"
            >
              <div className="aspect-video overflow-hidden rounded-lg border border-white/10 glass-effect shadow-lg">
                <div className="relative w-full h-full">
                  <Image
                    src="/11.jpg"
                    alt="Learning Journey"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-primary/20 text-primary-foreground animate-pulse-scale">
                      Continuous Learning
                    </Badge>
                    <h3 className="text-lg font-semibold text-white">Always Evolving</h3>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-lg bg-primary/20 blur-md"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Current Focus"
            subtitle="Technologies and skills I'm currently learning and improving"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Advanced Next.js 15",
                description:
                  "Exploring the latest features and optimizations in Next.js 15, including server components, streaming, and the App Router.",
                progress: 75,
              },
              {
                title: "AI Integration",
                description:
                  "Learning to integrate AI capabilities into web applications using tools like the AI SDK, OpenAI API, and TensorFlow.js.",
                progress: 65,
              },
              {
                title: "Web Animation",
                description:
                  "Mastering advanced animation techniques with Framer Motion and GSAP to create engaging user experiences.",
                progress: 70,
              },
              {
                title: "TypeScript",
                description:
                  "Deepening my understanding of TypeScript's advanced features for building type-safe, maintainable applications.",
                progress: 80,
              },
              {
                title: "Web3 & Blockchain",
                description:
                  "Exploring the fundamentals of blockchain technology and how to build decentralized applications.",
                progress: 40,
              },
              {
                title: "Testing Strategies",
                description:
                  "Improving my testing skills with Jest, React Testing Library, and Cypress for comprehensive test coverage.",
                progress: 60,
              },
            ].map((focus, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-white/10 glass-effect hover:shadow-md transition-all duration-300 group">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold gradient-text mb-2">{focus.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{focus.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm text-muted-foreground">{focus.progress}%</span>
                      </div>
                      <Progress
                        value={focus.progress}
                        className="h-2 group-hover:animate-pulse-scale"
                        indicatorClassName="bg-gradient-to-r from-primary to-purple-400"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
                Let's build something amazing together
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Looking for a skilled developer to bring your ideas to life? I'd love to collaborate on your next
                project.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
                <Button size="lg" asChild className="gradient-border group">
                  <Link href="/contact" className="relative overflow-hidden">
                    <span className="relative z-10">Get in Touch</span>
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white/10 hover:border-white/20">
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
