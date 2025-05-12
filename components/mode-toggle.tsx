"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Sun
          className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${theme === "dark" ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Moon
          className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"}`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
