"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Simulate video background with fallback to image
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          console.log("Video autoplay was prevented")
        })
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/video-placeholder.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div
          className={cn(
            "max-w-2xl transition-all duration-1000 transform",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          )}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            <span className="block">Transforming IT Services</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              for Your Business
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-lg">
            Professional IT support, networking solutions, and LinkedIn account acquisition services tailored to elevate
            your business to the next level.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 text-sm sm:text-base w-full sm:w-auto mt-2 sm:mt-0"
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll Down</span>
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
        </button>
      </div>
    </div>
  )
}
