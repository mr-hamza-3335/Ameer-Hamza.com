"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Layout, Database, Smartphone, Palette, LineChart, Rocket, Lightbulb } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Layout className="h-10 w-10 text-purple-500" />,
      title: "Web Design",
      description:
        "Creating beautiful, responsive websites that look great on all devices and provide an excellent user experience.",
      tags: ["UI/UX", "Responsive", "Modern"],
    },
    {
      icon: <Code className="h-10 w-10 text-purple-500" />,
      title: "Frontend Development",
      description:
        "Building interactive user interfaces with modern frameworks like React and Next.js for optimal performance.",
      tags: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      icon: <Database className="h-10 w-10 text-purple-500" />,
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs to power your web applications.",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      icon: <Smartphone className="h-10 w-10 text-purple-500" />,
      title: "Responsive Design",
      description: "Ensuring your website looks and functions perfectly on all devices from desktops to smartphones.",
      tags: ["Mobile-First", "Cross-Browser", "Adaptive"],
    },
    {
      icon: <Palette className="h-10 w-10 text-purple-500" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that enhance the user experience.",
      tags: ["Wireframing", "Prototyping", "User Testing"],
    },
    {
      icon: <LineChart className="h-10 w-10 text-purple-500" />,
      title: "Performance Optimization",
      description: "Improving website speed and performance for better user experience and SEO rankings.",
      tags: ["Speed", "SEO", "Core Web Vitals"],
    },
    {
      icon: <Rocket className="h-10 w-10 text-purple-500" />,
      title: "Deployment & Hosting",
      description: "Setting up and configuring hosting environments and deployment pipelines for your applications.",
      tags: ["Vercel", "Netlify", "AWS"],
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-purple-500" />,
      title: "Consultation",
      description: "Providing expert advice on web development strategies, technologies, and best practices.",
      tags: ["Strategy", "Planning", "Architecture"],
    },
  ]

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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {services.map((service, index) => (
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
                  {service.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-bold gradient-text">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
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
  )
}
