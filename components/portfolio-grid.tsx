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
    <section aria-label="Projects" className="pb-16 md:pb-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-5 md:px-10">
        <div
          role="group"
          aria-label="Filter projects"
          className="-mx-4 flex gap-1 overflow-x-auto border-b border-border px-4 pb-4 sm:mx-0 sm:flex-wrap sm:gap-2 sm:overflow-visible sm:px-0"
        >
          {filters.map((filter) => {
            const count =
              filter === 'All' ? projects.length : projects.filter((p) => p.category === filter).length
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={cn(
                  'shrink-0 px-4 py-2.5 text-sm tracking-wide transition-colors',
                  active === filter
                    ? 'bg-ink text-cream'
                    : 'text-muted-foreground hover:text-ink',
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
      </div>

      {/* Mobile: full-bleed story panels */}
      <ul key={`m-${active}`} className="mt-6 md:hidden">
        {visible.map((project, i) => (
          <li key={project.slug}>
            <ProjectCard project={project} index={i} variant="panel" showDescription />
          </li>
        ))}
      </ul>

      {/* Desktop: open editorial columns */}
      <ul
        key={`d-${active}`}
        className="mx-auto mt-14 hidden max-w-[1440px] grid-cols-3 gap-x-8 gap-y-16 px-10 md:grid"
      >
        {visible.map((project, i) => (
          <Reveal as="li" key={project.slug} delay={(i % 3) * 60}>
            <ProjectCard
              project={project}
              index={i}
              showDescription
              aspect="aspect-[4/5]"
              sizes="33vw"
            />
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
