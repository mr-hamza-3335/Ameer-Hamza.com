"use client"

import { motion } from "framer-motion"

// Change the z-index to make sure bubbles stay in the background
export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Floating elements */}
      <motion.div
        className="absolute h-32 w-32 rounded-full bg-primary/5 backdrop-blur-md"
        animate={{
          x: [0, 100, 50, -50, 0],
          y: [0, -100, -200, -100, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{ top: "10%", right: "15%" }}
      />

      <motion.div
        className="absolute h-24 w-24 rounded-full bg-primary/10 backdrop-blur-md"
        animate={{
          x: [0, -80, -40, 40, 0],
          y: [0, 80, 160, 80, 0],
          rotate: [0, -90, -180, -270, -360],
        }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{ bottom: "20%", left: "10%" }}
      />

      <motion.div
        className="absolute h-16 w-16 rounded-full bg-primary/15 backdrop-blur-md"
        animate={{
          x: [0, 60, 0, -60, 0],
          y: [0, 60, 120, 60, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{ top: "30%", left: "20%" }}
      />

      <motion.div
        className="absolute h-20 w-20 rounded-full bg-primary/10 backdrop-blur-md"
        animate={{
          x: [0, -70, 0, 70, 0],
          y: [0, 70, 140, 70, 0],
          scale: [1, 0.8, 1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{ bottom: "15%", right: "25%" }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-primary/80 blur-sm animate-pulse-scale"></div>
      <div
        className="absolute top-3/4 right-1/4 h-3 w-3 rounded-full bg-primary/80 blur-sm animate-pulse-scale"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/3 h-2 w-2 rounded-full bg-primary/80 blur-sm animate-pulse-scale"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 h-3 w-3 rounded-full bg-primary/80 blur-sm animate-pulse-scale"
        style={{ animationDelay: "3s" }}
      ></div>
    </div>
  )
}
