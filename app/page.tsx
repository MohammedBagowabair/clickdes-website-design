import { Hero } from '@/components/home/hero'
import { Intro } from '@/components/home/intro'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { ServicesPreview } from '@/components/home/services-preview'
import { CtaSection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedProjects />
      <ServicesPreview />
      <CtaSection />
    </>
  )
}
