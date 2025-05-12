"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  continuous?: boolean
  delay?: number
  duration?: number
}

export function AnimatedText({
  text,
  className,
  once = false,
  continuous = false,
  delay = 0.04,
  duration = 0.12,
}: AnimatedTextProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const words = text.split(" ")

  // Variants for container of words
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
    ...(continuous && {
      visible: (i = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren: duration,
          delayChildren: delay * i,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
          repeatDelay: 5,
        },
      }),
    }),
  }

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    ...(continuous && {
      visible: {
        opacity: [0, 1, 1, 0],
        y: [20, 0, 0, -20],
        transition: {
          times: [0, 0.2, 0.8, 1],
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
          repeatDelay: 1,
        },
      },
    }),
  }

  // If not client-side yet, render a static version to prevent hydration mismatch
  if (!isClient) {
    return (
      <div className={cn("flex flex-wrap", className)}>
        {words.map((word, index) => (
          <span key={index} className="mr-1.5">
            {word}
          </span>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      className={cn("flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="mr-1.5" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
