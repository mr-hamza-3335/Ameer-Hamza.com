"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function BlogPreview() {
  const articles = [
    {
      title: "The Future of Web Development in 2026",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
      image: "/8 (2).jpg",
      date: "May 10, 2025",
      category: "Web Development",
      url: "#",
    },
    {
      title: "Mastering Next.js: Tips and Tricks",
      excerpt: "Learn advanced techniques to improve your Next.js applications and boost performance.",
      image: "/8 (1).jpg",
      date: "May 10, 2025",
      category: "Next.js",
      url: "#",
    },
    {
      title: "The Power of Tailwind CSS",
      excerpt: "How Tailwind CSS can streamline your workflow and improve your design process.",
      image: "/css.png",
      date: "May 10, 2025",
      category: "CSS",
      url: "#",
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
      className="grid gap-6 md:grid-cols-3"
    >
      {articles.map((article, index) => (
        <motion.div key={index} variants={fadeInUp} className="hover-card">
          <Card className="h-full overflow-hidden transition-all hover:shadow-md border-white/10 glass-effect group">
            <div className="relative overflow-hidden h-48">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-3">
                <Badge variant="secondary" className="bg-purple-500/10 text-purple-300">
                  {article.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>
              <h3 className="text-xl font-bold gradient-text mb-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
              <Button
                variant="ghost"
                asChild
                className="p-0 h-auto text-purple-400 hover:text-purple-300 hover:bg-transparent"
              >
                <Link href={article.url} className="flex items-center gap-1">
                  Read More <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
