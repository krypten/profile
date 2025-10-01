"use client"

import { ThemeToggle, SkipNavigation, LazySection, SectionSkeleton } from "@/lib/components/ui"
import { Footer } from "@/lib/components/layout/footer"
import { Navigation } from "@/lib/components/layout/navigation"
import { Hero } from "@/lib/components/sections/hero"
import { EducationSection, CollapsibleExperienceSections, SkillsSection } from "@/lib/components/sections"
import { PageLoader, usePageLoader } from "@/lib/components/ui/page-loader"
import { getPortfolioData } from "@/lib/utils/data-loader"

export default function Home() {
  const portfolioData = getPortfolioData()
  const isLoading = usePageLoader(1200) // Show loader for 1.2 seconds

  return (
    <PageLoader isLoading={isLoading}>
      {/* Skip Navigation for accessibility */}
      <SkipNavigation />

      <main id="main-content" className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <Navigation />

        {/* Theme toggle in top right */}
        <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50">
          <ThemeToggle />
        </div>

        {/* Hero Section - Critical, load immediately */}
        <section id="hero" aria-labelledby="hero-heading">
          <Hero personal={portfolioData.personal} />
        </section>

        {/* Experience Sections - Lazy load with skeleton */}
        <LazySection
          fallback={<SectionSkeleton className="section-padding" />}
          rootMargin="100px"
        >
          <CollapsibleExperienceSections experiences={portfolioData.experiences} />
        </LazySection>

        {/* Skills Section - Lazy load */}
        <LazySection
          fallback={<SectionSkeleton className="section-padding" />}
          rootMargin="50px"
        >
          <SkillsSection skills={portfolioData.skills} />
        </LazySection>

        {/* Education Section - Lazy load */}
        <LazySection
          fallback={<SectionSkeleton className="section-padding" />}
          rootMargin="50px"
        >
          <EducationSection education={portfolioData.education} />
        </LazySection>

        {/* Footer - Lazy load */}
        <LazySection rootMargin="50px">
          <Footer personal={portfolioData.personal} />
        </LazySection>
      </main>
    </PageLoader>
  )
}