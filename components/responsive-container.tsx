import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none"
  padding?: boolean
}

const maxWidthClasses = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  full: "max-w-full",
  none: "",
}

export function ResponsiveContainer({
  children,
  className,
  as: Component = "div",
  maxWidth = "2xl",
  padding = true,
}: ResponsiveContainerProps) {
  return (
    <Component
      className={cn("w-full mx-auto", maxWidthClasses[maxWidth], padding && "px-4 sm:px-6 md:px-8", className)}
    >
      {children}
    </Component>
  )
}
