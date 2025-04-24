"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Shield, Users, Zap, Target, Heart, Award } from "lucide-react"

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every service we provide, ensuring the highest quality solutions for our clients.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "We embrace new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead.",
    icon: Zap,
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty and transparency in all our dealings, building trust with our clients and partners.",
    icon: Shield,
  },
  {
    title: "Client-Focused",
    description:
      "We put our clients' needs first, tailoring our solutions to address their specific challenges and goals.",
    icon: Target,
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, both within our organization and in partnership with our clients.",
    icon: Users,
  },
  {
    title: "Passion",
    description: "We are passionate about technology and its potential to transform businesses and improve lives.",
    icon: Heart,
  },
]

export default function CoreValues() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            These principles guide everything we do at Luvsmith Corp, from how we develop our services to how we
            interact with our clients.
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8",
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className={cn(
                  "bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-100 dark:border-gray-700",
                  "transition-all duration-500 delay-[calc(100ms*var(--index))]",
                  "hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
                style={{ "--index": index } as React.CSSProperties}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
