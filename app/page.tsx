import HeroSection from "@/components/hero-section"
import CompanyIntro from "@/components/company-intro"
import StatsSection from "@/components/stats-section"
import TrustedBySection from "@/components/trusted-by-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <CompanyIntro />
      <StatsSection />
      <TrustedBySection />
    </div>
  )
}
