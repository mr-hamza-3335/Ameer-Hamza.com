"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TimelineSection() {
  const timelineItems = [
    {
      year: "2021",
      title: "Started Learning Web Development",
      description: "Began my journey in web development by learning HTML, CSS, and JavaScript fundamentals.",
      icon: "🚀",
    },
    {
      year: "2022",
      title: "First Freelance Project",
      description: "Completed my first freelance project, a portfolio website for a local photographer.",
      icon: "💼",
    },
    {
      year: "2023",
      title: "Learned React & Next.js",
      description: "Expanded my skills by learning React and Next.js for building modern web applications.",
      icon: "⚛️",
    },
    {
      year: "2023",
      title: "Joined GIAIC",
      description: "Enrolled in GIAIC to further enhance my skills in web development and AI technologies.",
      icon: "🎓",
    },
    {
      year: "2025",
      title: "Full Stack Developer",
      description: "Working as a full stack developer, building comprehensive web solutions for clients.",
      icon: "👨‍💻",
    },
  ]

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-500/30 transform -translate-x-1/2 hidden md:block"></div>

      <div className="space-y-12 relative">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
          >
            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <Card className="border-white/10 glass-effect hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-6">
                  <Badge className="mb-2 px-3 py-1 text-sm bg-purple-500/20 text-purple-300">{item.year}</Badge>
                  <h3 className="text-xl font-bold gradient-text">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>

            {/* Timeline node */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center text-xl">
                {item.icon}
              </div>
            </div>

            <div className="md:w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
