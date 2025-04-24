"use client"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function CompanyIntro() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Empowering Businesses
            </span>{" "}
            Through Technology
          </h2>

          <p
            className={cn(
              "text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 transition-all duration-700 delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            At Luvsmith Corp, we believe that technology should work for you, not against you. Our team of experts is
            dedicated to providing tailored IT solutions that help your business thrive in the digital landscape.
          </p>

          <div
            className={cn(
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12 transition-all duration-700 delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            {[
              {
                title: "IT Support",
                description: "24/7 technical support and maintenance to keep your systems running smoothly.",
                icon: "💻",
              },
              {
                title: "Networking Solutions",
                description: "Custom network infrastructure design and implementation for optimal performance.",
                icon: "🌐",
              },
              {
                title: "LinkedIn Services",
                description: "Strategic account acquisition and management to boost your professional presence.",
                icon: "🔗",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={cn(
                  "bg-gray-50 dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300",
                  "transform hover:-translate-y-1",
                )}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
