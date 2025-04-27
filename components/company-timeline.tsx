"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

const timelineEvents = [
  {
    year: "2023",
    title: "Company Founded",
    description: "Luvsmith Corp was established with a vision to transform IT services for businesses of all sizes.",
  },
  {
    year: "2023",
    title: "Expansion of Services",
    description: "Added networking solutions to our portfolio, helping businesses build robust infrastructure.",
  },
  {
    year: "2023",
    title: "National Recognition",
    description: "Received industry recognition for innovative IT support methodologies.",
  },
  {
    year: "2023",
    title: "LinkedIn Services Launch",
    description: "Pioneered our LinkedIn account acquisition services, helping professionals expand their network.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded operations to serve clients across three continents with 24/7 support.",
  },
  {
    year: "2024",
    title: "Technology Innovation",
    description: "Launched AI-powered IT solutions to provide predictive maintenance and support.",
  },
]

export default function CompanyTimeline() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Our Journey
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

          {/* Timeline Events */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <TimelineEvent key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({ event, index }: { event: (typeof timelineEvents)[0]; index: number }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12 flex items-center justify-center",
        "transition-all duration-700",
        inView ? "opacity-100" : "opacity-0",
        isEven ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      {/* Content */}
      <div
        className={cn(
          "w-full md:w-5/12 px-4",
          isEven ? "md:text-right" : "md:text-left",
          "transition-all duration-700",
          inView
            ? isEven
              ? "md:translate-x-0"
              : "md:translate-x-0"
            : isEven
              ? "md:translate-x-10"
              : "md:-translate-x-10",
        )}
      >
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="text-blue-600 dark:text-blue-400 font-bold text-xl mb-2">{event.year}</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{event.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
        </div>
      </div>

      {/* Center Point */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10"></div>
    </div>
  )
}
