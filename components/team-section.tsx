"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    title: "CEO & Founder",
    bio: "With over 15 years in IT leadership, Sarah founded Luvsmith Corp with a vision to transform how businesses leverage technology.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      email: "sarah@luvsmithcorp.com",
    },
  },
  {
    name: "Michael Chen",
    title: "CTO",
    bio: "Michael brings extensive experience in network architecture and cloud solutions, leading our technical innovation.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      email: "michael@luvsmithcorp.com",
    },
  },
  {
    name: "Jessica Williams",
    title: "Head of IT Support",
    bio: "Jessica ensures our clients receive world-class IT support with her team of certified technicians available 24/7.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      email: "jessica@luvsmithcorp.com",
    },
  },
  {
    name: "David Rodriguez",
    title: "LinkedIn Services Director",
    bio: "David specializes in LinkedIn growth strategies and has helped hundreds of professionals expand their networks.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      email: "david@luvsmithcorp.com",
    },
  },
  {
    name: "Aisha Patel",
    title: "Client Success Manager",
    bio: "Aisha works closely with our clients to ensure they get the most value from our services and solutions.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      email: "aisha@luvsmithcorp.com",
    },
  },
  {
    name: "Robert Kim",
    title: "Network Solutions Architect",
    bio: "Robert designs custom networking solutions that optimize performance and security for businesses of all sizes.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      email: "robert@luvsmithcorp.com",
    },
  },
]

export default function TeamSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Meet Our Team
        </h2>

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={cn(
                "bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300",
                "transform hover:-translate-y-2",
                "transition-all duration-700 delay-[calc(100ms*var(--index))]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ "--index": index } as React.CSSProperties}
            >
              <div className="relative group">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 sm:p-6 w-full">
                    <p className="text-white text-xs sm:text-sm">{member.bio}</p>
                    <div className="flex mt-2 sm:mt-3 space-x-3">
                      <a
                        href={member.social.linkedin}
                        className="text-white hover:text-blue-400 transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-white hover:text-blue-400 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
