import CompanyTimeline from "@/components/company-timeline"
import TeamSection from "@/components/team-section"
import CoreValues from "@/components/core-values"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Luvsmith Corp</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Learn about our journey, our team, and the values that drive us to deliver exceptional IT services.
          </p>
        </div>
      </div>

      <CompanyTimeline />
      <TeamSection />
      <CoreValues />
    </div>
  )
}
