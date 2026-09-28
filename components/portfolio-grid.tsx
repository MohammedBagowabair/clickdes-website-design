'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import type { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'

const filters = ['All', 'Residential', 'Commercial'] as const
type Filter = (typeof filters)[number]

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>('All')
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section aria-label="Projects" className="mx-auto max-w-[1440px] px-5 pb-24 md:px-10 md:pb-40">
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2 border-b border-border pb-6">
        {filters.map((filter) => {
          const count = filter === 'All' ? projects.length : projects.filter((p) => p.category === filter).length
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={cn(
                'rounded-full border px-5 py-2.5 text-sm transition-colors',
                active === filter
                  ? 'border-ink bg-ink text-cream'
                  : 'border-border hover:border-ink',
              )}
            >
              {filter}
              <sup className="ml-1 text-[0.65rem] text-saffron">{count}</sup>
            </button>
          )
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {active === 'All' ? '' : active.toLowerCase()} projects
      </p>

      <ul key={active} className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3">
        {visible.map((project, i) => (
          <Reveal as="li" key={project.slug} delay={(i % 3) * 100} className="mb-14 break-inside-avoid">
            <ProjectCard
              project={project}
              showDescription
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
