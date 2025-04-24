"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function TrustedBySection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Placeholder company logos
  const companies = [
    { name: "Company 1", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company 2", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company 3", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company 4", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company 5", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company 6", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn("transition-all duration-700", inView ? "opacity-100" : "opacity-0")}>
          <h2 className="text-2xl font-semibold text-center mb-10 text-gray-700 dark:text-gray-300">
            Trusted by Industry Leaders
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className={cn(
                  "grayscale hover:grayscale-0 transition-all duration-300",
                  "opacity-70 hover:opacity-100",
                )}
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
