"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, Send } from "lucide-react"

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    whatsapp: false,
    newsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Redirect to WhatsApp if selected
      if (formData.whatsapp) {
        const whatsappMessage = encodeURIComponent(
          `Hello, I'm ${formData.name} from ${formData.company}. I'm interested in joining the Luvsmith Corp network.`,
        )
        window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, "_blank")
      }
    }, 1500)
  }

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Our Network</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Become a partner with Luvsmith Corp and unlock new opportunities for growth and success.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Partner Benefits
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Lucrative Earnings",
                    description:
                      "Earn competitive rates for each account you manage, with bonuses as you reach higher badge levels.",
                  },
                  {
                    title: "Flexible Schedule",
                    description: "Work on your own terms and manage your accounts according to your schedule.",
                  },
                  {
                    title: "Comprehensive Training",
                    description: "Access detailed guides and training materials to help you succeed.",
                  },
                  {
                    title: "Dedicated Support",
                    description: "Get assistance from our experienced team whenever you need it.",
                  },
                  {
                    title: "Growth Opportunities",
                    description: "Expand your portfolio and increase your earnings potential over time.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-900 dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Resources</h3>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open("/onboarding-guide.pdf")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Onboarding Guide
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open("/partner-faq.pdf")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Partner FAQ
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Sign-up Form */}
            <div>
              <Card className="border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <CardTitle>Join Our Partner Network</CardTitle>
                  <CardDescription>Fill out the form below to start your journey with Luvsmith Corp.</CardDescription>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="grid grid-cols-1 gap-3 sm:gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              required
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              required
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="+1 (123) 456-7890"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="company">Company (if applicable)</Label>
                            <Input
                              id="company"
                              name="company"
                              placeholder="Your Company"
                              value={formData.company}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Why are you interested in joining?</Label>
                            <Textarea
                              id="message"
                              name="message"
                              placeholder="Tell us a bit about yourself and your goals..."
                              rows={4}
                              value={formData.message}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="whatsapp"
                              checked={formData.whatsapp}
                              onCheckedChange={(checked) => handleCheckboxChange("whatsapp", checked as boolean)}
                            />
                            <Label htmlFor="whatsapp" className="text-sm">
                              Redirect to WhatsApp after submission
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="newsletter"
                              checked={formData.newsletter}
                              onCheckedChange={(checked) => handleCheckboxChange("newsletter", checked as boolean)}
                            />
                            <Label htmlFor="newsletter" className="text-sm">
                              Subscribe to our newsletter for updates
                            </Label>
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            Submit Application
                          </span>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        Application Submitted!
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Thank you for your interest in joining our network. We'll review your application and get back
                        to you shortly.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Submit Another Application
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
