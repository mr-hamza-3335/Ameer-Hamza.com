"use client"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Award, Clock } from "lucide-react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef<HTMLSpanElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (nodeRef.current) {
      observer.observe(nodeRef.current)
    }

    return () => {
      if (nodeRef.current) {
        observer.unobserve(nodeRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, isInView])

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  const stats = [
    { icon: <Code className="h-8 w-8 text-purple-500" />, value: 50, suffix: "+", label: "Projects Completed" },
    { icon: <Users className="h-8 w-8 text-purple-500" />, value: 30, suffix: "+", label: "Satisfied Clients" },
    { icon: <Award className="h-8 w-8 text-purple-500" />, value: 5, suffix: "+", label: "Years Experience" },
    { icon: <Clock className="h-8 w-8 text-purple-500" />, value: 1000, suffix: "+", label: "Hours Coded" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="border-white/10 glass-effect hover:shadow-md transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold gradient-text">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
