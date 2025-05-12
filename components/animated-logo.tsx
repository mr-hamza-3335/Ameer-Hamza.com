"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code } from "lucide-react"

export default function AnimatedLogo() {
  const [colorIndex, setColorIndex] = useState(0)
  const colors = [
    "rgba(180, 120, 255, 1)", // Purple
    "rgba(255, 120, 180, 1)", // Pink
    "rgba(120, 180, 255, 1)", // Blue
    "rgba(120, 255, 180, 1)", // Teal
    "rgba(255, 180, 120, 1)", // Orange
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <motion.div
        animate={{
          boxShadow: [
            `0 0 10px ${colors[colorIndex]}`,
            `0 0 20px ${colors[colorIndex]}`,
            `0 0 10px ${colors[colorIndex]}`,
          ],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0 rounded-full opacity-70"
      ></motion.div>
      <Code className="h-8 w-8 relative z-10 animate-spin-slow" style={{ color: colors[colorIndex] }} />
    </div>
  )
}
