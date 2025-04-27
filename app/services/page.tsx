"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Server, Network, Users, Database, Shield, Clock, Target } from "lucide-react"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("it-support")

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs and drive growth.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="it-support" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-6 sm:mb-8">
            <TabsList className="grid w-full max-w-xs sm:max-w-md grid-cols-1 sm:grid-cols-3 h-auto">
              <TabsTrigger value="it-support" className="py-2 sm:py-3">
                IT Support
              </TabsTrigger>
              <TabsTrigger value="networking" className="py-2 sm:py-3">
                Networking
              </TabsTrigger>
              <TabsTrigger value="linkedin" className="py-2 sm:py-3">
                LinkedIn Services
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="it-support" className="space-y-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                IT Support Services
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Comprehensive IT support to keep your business running smoothly with minimal downtime.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "24/7 Technical Support",
                  description:
                    "Round-the-clock assistance for all your IT issues, ensuring minimal disruption to your operations.",
                  icon: Clock,
                  results: ["99.9% uptime guarantee", "15-minute response time", "Remote and on-site support"],
                },
                {
                  title: "System Maintenance",
                  description:
                    "Regular maintenance of your IT infrastructure to prevent issues before they impact your business.",
                  icon: Server,
                  results: ["Reduced system failures", "Extended hardware lifespan", "Optimized performance"],
                },
                {
                  title: "Data Backup & Recovery",
                  description:
                    "Secure backup solutions and rapid recovery services to protect your valuable business data.",
                  icon: Database,
                  results: ["Automated daily backups", "Quick disaster recovery", "Data encryption"],
                },
                {
                  title: "Cybersecurity",
                  description: "Comprehensive security solutions to protect your business from evolving cyber threats.",
                  icon: Shield,
                  results: ["Threat detection & prevention", "Security audits", "Employee training"],
                },
                {
                  title: "Help Desk Services",
                  description: "User-friendly support for your team's day-to-day technical questions and issues.",
                  icon: Users,
                  results: ["Multi-channel support", "Knowledge base access", "User training"],
                },
                {
                  title: "IT Consulting",
                  description:
                    "Strategic guidance to align your IT infrastructure with your business goals and objectives.",
                  icon: Server,
                  results: ["Technology roadmaps", "Budget optimization", "Digital transformation"],
                },
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3 sm:mb-4">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                      <h4 className="font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {service.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1 sm:mr-2 mt-0.5 sm:mt-1 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="networking" className="space-y-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Networking Solutions
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Custom network infrastructure design and implementation for optimal performance and security.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Network Design & Implementation",
                  description: "Custom network architecture designed to meet your specific business requirements.",
                  icon: Network,
                  results: ["Scalable infrastructure", "Optimized for performance", "Future-proof design"],
                },
                {
                  title: "Wireless Solutions",
                  description: "Secure and reliable wireless networks for your office or campus environment.",
                  icon: Network,
                  results: ["Complete coverage", "High-speed connectivity", "Secure guest access"],
                },
                {
                  title: "Cloud Networking",
                  description: "Seamless integration between your on-premises and cloud-based resources.",
                  icon: Server,
                  results: ["Hybrid cloud solutions", "Secure cloud access", "Optimized cloud costs"],
                },
                {
                  title: "Network Security",
                  description:
                    "Comprehensive security measures to protect your network from internal and external threats.",
                  icon: Shield,
                  results: ["Firewall protection", "Intrusion detection", "VPN solutions"],
                },
                {
                  title: "Network Monitoring",
                  description:
                    "24/7 monitoring of your network to identify and resolve issues before they impact your business.",
                  icon: Clock,
                  results: ["Real-time alerts", "Performance analytics", "Capacity planning"],
                },
                {
                  title: "VoIP & Unified Communications",
                  description: "Integrated communication solutions to enhance collaboration and productivity.",
                  icon: Users,
                  results: ["HD voice quality", "Video conferencing", "Mobile integration"],
                },
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3 sm:mb-4">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                      <h4 className="font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {service.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1 sm:mr-2 mt-0.5 sm:mt-1 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="linkedin" className="space-y-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                LinkedIn Services
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Strategic LinkedIn account acquisition and management to boost your professional presence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Account Acquisition",
                  description: "Strategic acquisition of LinkedIn accounts to expand your professional network.",
                  icon: Users,
                  results: ["Targeted connections", "Industry-specific growth", "Enhanced visibility"],
                },
                {
                  title: "Profile Optimization",
                  description: "Expert optimization of your LinkedIn profile to attract the right connections.",
                  icon: Users,
                  results: ["SEO-optimized content", "Professional branding", "Increased profile views"],
                },
                {
                  title: "Content Strategy",
                  description: "Development and implementation of content strategies to establish thought leadership.",
                  icon: Database,
                  results: ["Engaging posts", "Consistent publishing", "Audience growth"],
                },
                {
                  title: "Lead Generation",
                  description: "Targeted lead generation campaigns to connect with potential clients and partners.",
                  icon: Target,
                  results: ["Qualified leads", "Conversion tracking", "ROI measurement"],
                },
                {
                  title: "LinkedIn Advertising",
                  description: "Strategic advertising campaigns to reach your target audience on LinkedIn.",
                  icon: Target,
                  results: ["Targeted campaigns", "Performance analytics", "Budget optimization"],
                },
                {
                  title: "Training & Workshops",
                  description: "Comprehensive training on LinkedIn best practices for your team.",
                  icon: Users,
                  results: ["Skill development", "Strategy implementation", "Ongoing support"],
                },
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3 sm:mb-4">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                      <h4 className="font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {service.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1 sm:mr-2 mt-0.5 sm:mt-1 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
