"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function CVDownload() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative">
      <Button
        asChild
        variant="outline"
        className="border-white/10 hover:border-white/20 relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href="/Ameer-Hamza-CV.pdf" target="_blank" download>
          <motion.div
            className="absolute inset-0 bg-primary/20"
            initial={{ x: "-100%" }}
            animate={isHovered ? { x: "0%" } : { x: "-100%" }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 flex items-center">
            <Download className="mr-2 h-4 w-4 relative z-10" />
            Download CV
          </span>
        </Link>
      </Button>

      {/* Animated particles on hover */}
      {isHovered && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary rounded-full"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, (i % 2 === 0 ? -1 : 1) * (10 + i * 5)],
                y: [0, -20 - i * 5],
              }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: i * 0.1,
              }}
              style={{ left: "50%", bottom: "0%" }}
            />
          ))}
        </>
      )}
    </div>
  )
}
