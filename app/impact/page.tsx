"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Play, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    name: "Sarah Thompson",
    position: "Marketing Director",
    company: "Global Innovations",
    quote:
      "Luvsmith Corp transformed our IT infrastructure and helped us build a powerful LinkedIn presence. Our lead generation has increased by 45% since partnering with them.",
    image: "/placeholder.svg?height=80&width=80",
    video: true,
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "TechStart Solutions",
    quote:
      "The networking solutions provided by Luvsmith Corp have been instrumental in our company's growth. Their team's expertise and dedication to service excellence is unmatched.",
    image: "/placeholder.svg?height=80&width=80",
    video: false,
  },
  {
    name: "Jessica Williams",
    position: "Operations Manager",
    company: "Innovate Retail",
    quote:
      "We've been working with Luvsmith Corp for over 3 years, and their IT support has been flawless. Their 24/7 availability has saved us from several potential disasters.",
    image: "/placeholder.svg?height=80&width=80",
    video: true,
  },
  {
    name: "David Rodriguez",
    position: "Founder",
    company: "NextGen Consulting",
    quote:
      "The LinkedIn account acquisition services from Luvsmith Corp helped me expand my professional network exponentially. I've secured three major clients directly through these connections.",
    image: "/placeholder.svg?height=80&width=80",
    video: false,
  },
  {
    name: "Aisha Patel",
    position: "IT Director",
    company: "HealthTech Solutions",
    quote:
      "Implementing Luvsmith Corp's networking solutions has improved our system performance by 60% and significantly enhanced our data security protocols.",
    image: "/placeholder.svg?height=80&width=80",
    video: true,
  },
  {
    name: "Robert Kim",
    position: "Sales Director",
    company: "Global Connect",
    quote:
      "The strategic LinkedIn growth provided by Luvsmith Corp has revolutionized our B2B sales approach. We're now connecting with decision-makers we couldn't reach before.",
    image: "/placeholder.svg?height=80&width=80",
    video: false,
  },
]

const impactStats = [
  { value: "10,000+", label: "Accounts Connected" },
  { value: "500+", label: "Businesses Supported" },
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "45%", label: "Average Growth Rate" },
]

export default function ImpactPage() {
  const [videoDialogOpen, setVideoDialogOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState("")

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const openVideoDialog = (name: string) => {
    // In a real implementation, this would use the actual video URL
    setCurrentVideo(`/video-testimonial-${name.toLowerCase().replace(/\s/g, "-")}.mp4`)
    setVideoDialogOpen(true)
  }

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            See how Luvsmith Corp has helped businesses and professionals achieve their goals.
          </p>
        </div>
      </div>

      {/* Impact Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className={cn(
                  "text-center transition-all duration-700 delay-[calc(100ms*var(--index))]",
                  statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
                style={{ "--index": index } as React.CSSProperties}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-700 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
                onPlayVideo={() => openVideoDialog(testimonial.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Dialog */}
      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Video Testimonial</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-black rounded-md overflow-hidden">
            {/* In a real implementation, this would be a video player */}
            <div className="w-full h-full flex items-center justify-center text-white">
              <p>Video player would be here in production</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function TestimonialCard({
  testimonial,
  index,
  onPlayVideo,
}: {
  testimonial: (typeof testimonials)[0]
  index: number
  onPlayVideo: () => void
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 delay-[calc(100ms*var(--index))]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ "--index": index } as React.CSSProperties}
    >
      <Card className="h-full">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-start mb-3 sm:mb-4">
            <div className="relative mr-3 sm:mr-4">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
              />
              {testimonial.video && (
                <Button
                  size="icon"
                  className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-blue-600 hover:bg-blue-700"
                  onClick={onPlayVideo}
                >
                  <Play className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="sr-only">Play video testimonial</span>
                </Button>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">{testimonial.name}</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
              <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400">{testimonial.company}</p>
            </div>
          </div>

          <div className="relative">
            <Quote className="absolute top-0 left-0 h-5 w-5 sm:h-6 sm:w-6 text-blue-200 dark:text-blue-900 -translate-x-1 sm:-translate-x-2 -translate-y-1 sm:-translate-y-2" />
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 pl-3 sm:pl-4">{testimonial.quote}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
