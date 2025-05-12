"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Fix the type import issue
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  // Ensure theme is only applied after mounting to prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Always render children to prevent flashing
  return (
    <NextThemesProvider {...props} defaultTheme="dark" enableSystem={false}>
      {children}
    </NextThemesProvider>
  )
}
