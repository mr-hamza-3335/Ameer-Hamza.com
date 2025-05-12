"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Add custom-cursor-active class to body
    document.body.classList.add("custom-cursor-active")

    const mouseMove = (e: MouseEvent) => {
      // Immediately update position without any delay
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseEnterWindow = () => setIsVisible(true)
    const mouseLeaveWindow = () => setIsVisible(false)

    // Handle hover states
    const handleMouseEnter = () => setCursorVariant("hover")
    const handleMouseLeave = () => setCursorVariant("default")

    // Add link hover listeners
    const addLinkHoverListeners = () => {
      const links = document.querySelectorAll("a, button, [role='button'], input, textarea, select, .hover-trigger")
      links.forEach((link) => {
        link.addEventListener("mouseenter", handleMouseEnter)
        link.addEventListener("mouseleave", handleMouseLeave)
      })
    }

    // Initial setup
    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mouseenter", mouseEnterWindow)
    window.addEventListener("mouseleave", mouseLeaveWindow)

    // Setup link listeners and refresh them on DOM changes
    addLinkHoverListeners()

    // Use MutationObserver to detect DOM changes and update link listeners
    const observer = new MutationObserver(addLinkHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    // Make cursor visible immediately
    setIsVisible(true)

    return () => {
      document.body.classList.remove("custom-cursor-active")
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mouseenter", mouseEnterWindow)
      window.removeEventListener("mouseleave", mouseLeaveWindow)

      // Clean up link listeners
      const links = document.querySelectorAll("a, button, [role='button'], input, textarea, select, .hover-trigger")
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter)
        link.removeEventListener("mouseleave", handleMouseLeave)
      })

      // Disconnect observer
      observer.disconnect()
    }
  }, [])

  if (!isMounted || !isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: mousePosition.x,
        y: mousePosition.y,
        height: 24,
        width: 24,
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%239333ea' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolygon points='1 1, 1 10, 10 10, 4 16, 7 19, 13 13, 13 22, 22 22, 22 1'%3E%3C/polygon%3E%3C/svg%3E")`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
  )
}
