import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { PortfolioGrid } from '@/components/portfolio-grid'
import { CtaSection } from '@/components/cta-section'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore residential and commercial interior design projects by ClickDes — villas, apartments, cafés, boutiques and workplaces in Mukalla and beyond.',
  alternates: { canonical: '/portfolio/' },
}

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title={
          <>
            Selected <em className="text-terracotta">work</em>
          </>
        }
        lead="A collection of homes and commercial spaces — each one shaped by its people, its light and its place."
      />
      <PortfolioGrid projects={projects} />
      <CtaSection />
    </>
  )
}
