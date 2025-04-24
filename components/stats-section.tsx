"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface StatProps {
  value: number
  label: string
  suffix?: string
  duration?: number
}

function AnimatedStat({ value, label, suffix = "", duration = 2000 }: StatProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = Math.min(value, 9999)
      const incrementTime = duration / end
      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) clearInterval(timer)
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [inView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400">
        {inView ? count : 0}
        {suffix}
      </div>
      <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  )
}

export default function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const stats = [
    { value: 500, label: "Clients Served", suffix: "+" },
    { value: 98, label: "Satisfaction Rate", suffix: "%" },
    { value: 10, label: "Years Experience", suffix: "+" },
    { value: 5000, label: "Projects Completed", suffix: "+" },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 w-full">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn("transition-all duration-700", inView ? "opacity-100" : "opacity-0")}>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} value={stat.value} label={stat.label} suffix={stat.suffix} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
