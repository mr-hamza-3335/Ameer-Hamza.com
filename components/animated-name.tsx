"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface AnimatedNameProps {
  name: string
  className?: string
}

export default function AnimatedName({ name, className = "" }: AnimatedNameProps) {
  const [isClient, setIsClient] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const fullText = name
  const period = 2000 // Pause at full name before deleting

  useEffect(() => {
    setIsClient(true)

    const ticker = setInterval(() => {
      tick()
    }, typingSpeed)

    return () => clearInterval(ticker)
  }, [displayText, isDeleting])

  const tick = () => {
    // Current text is full name and not deleting - wait before deleting
    if (displayText === fullText && !isDeleting) {
      setTimeout(() => {
        setIsDeleting(true)
        setTypingSpeed(75) // Delete faster than typing
      }, period)
      return
    }

    // Current text is empty and was deleting - start typing again
    if (displayText === "" && isDeleting) {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(150) // Normal typing speed
      return
    }

    // Calculate new text
    const newText = isDeleting
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1)

    setDisplayText(newText)
  }

  // Always render the name statically first to prevent flashing
  if (!isClient) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <div className="flex">
          <span className="inline-block gradient-text glow-text">{name}</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div className="flex" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
        <span className="inline-block gradient-text glow-text">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
      </motion.div>
    </div>
  )
}
