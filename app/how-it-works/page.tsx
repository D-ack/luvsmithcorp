"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    number: 1,
    title: "Initial Consultation",
    description:
      "We start with a thorough assessment of your current IT infrastructure, business goals, and challenges to understand your specific needs.",
    image: "/images/how-it-works/initial-consultation.png",
  },
  {
    number: 2,
    title: "Custom Solution Design",
    description:
      "Our experts design a tailored solution that addresses your unique requirements, optimizing for performance, security, and scalability.",
    image: "/images/how-it-works/custom-solution.png",
  },
  {
    number: 3,
    title: "Implementation",
    description:
      "Our skilled technicians implement the solution with minimal disruption to your operations, ensuring a smooth transition.",
    image: "/images/how-it-works/implementation.png",
  },
  {
    number: 4,
    title: "Training & Onboarding",
    description:
      "We provide comprehensive training for your team to ensure they can effectively utilize the new systems and processes.",
    image: "/images/how-it-works/training.png",
  },
  {
    number: 5,
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end at implementation. We provide continuous support and maintenance to ensure optimal performance.",
    image: "/images/how-it-works/support.png",
  },
]

export default function HowItWorksPage() {
  const handleContactClick = () => {
    window.open("https://wa.me/2349123032034", "_blank")
  }

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our streamlined process ensures a smooth experience from initial consultation to ongoing support.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {steps.map((step, index) => (
            <StepItem key={index} step={step} index={index} isLast={index === steps.length - 1} />
          ))}

          <div className="mt-10 sm:mt-16 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              Ready to Get Started?
            </h3>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base"
              onClick={handleContactClick}
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function StepItem({ step, index, isLast }: { step: (typeof steps)[0]; index: number; isLast: boolean }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const isEven = index % 2 === 0

  return (
    <div ref={ref} className="mb-12 sm:mb-20">
      <div className={cn("flex flex-col md:flex-row items-center", isEven ? "" : "md:flex-row-reverse")}>
        {/* Image */}
        <div
          className={cn(
            "w-full md:w-1/2 mb-6 md:mb-0",
            isEven ? "md:pr-4 lg:pr-8" : "md:pl-4 lg:pl-8",
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video relative">
              <Image
                src={step.image || "/placeholder.svg"}
                alt={`Step ${step.number}: ${step.title}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-base sm:text-xl font-bold">
              {step.number}
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={cn(
            "w-full md:w-1/2",
            isEven ? "md:pl-4 lg:pl-8" : "md:pr-4 lg:pr-8",
            "transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
            {step.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
            {step.description}
          </p>
        </div>
      </div>

      {/* Connector Line */}
      {!isLast && (
        <div className="hidden md:block relative h-12 sm:h-16 md:h-20 w-full">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
        </div>
      )}
    </div>
  )
}
