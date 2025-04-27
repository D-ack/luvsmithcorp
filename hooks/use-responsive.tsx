"use client"

import { useState, useEffect } from "react"

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export function useResponsive() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>("xs")
  const [width, setWidth] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleResize = () => {
      const windowWidth = window.innerWidth
      setWidth(windowWidth)

      if (windowWidth >= breakpoints["2xl"]) {
        setCurrentBreakpoint("2xl")
      } else if (windowWidth >= breakpoints.xl) {
        setCurrentBreakpoint("xl")
      } else if (windowWidth >= breakpoints.lg) {
        setCurrentBreakpoint("lg")
      } else if (windowWidth >= breakpoints.md) {
        setCurrentBreakpoint("md")
      } else if (windowWidth >= breakpoints.sm) {
        setCurrentBreakpoint("sm")
      } else {
        setCurrentBreakpoint("xs")
      }
    }

    // Initial check
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isAbove = (breakpoint: Breakpoint) => {
    if (!isMounted) return false
    return width >= breakpoints[breakpoint]
  }

  const isBelow = (breakpoint: Breakpoint) => {
    if (!isMounted) return false
    return width < breakpoints[breakpoint]
  }

  return {
    breakpoint: currentBreakpoint,
    width,
    isAbove,
    isBelow,
    isMobile: isBelow("md"),
    isTablet: isAbove("md") && isBelow("lg"),
    isDesktop: isAbove("lg"),
  }
}
