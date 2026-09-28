import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { featuredProjects } from '@/lib/projects'

export function FeaturedProjects() {
  return (
    <section aria-labelledby="featured-title" className="bg-cream">
      {/* Mobile: cinematic full-bleed story panels — no cards */}
      <div className="md:hidden">
        <div className="px-4 py-12">
          <p className="eyebrow text-terracotta">Selected work</p>
          <h2 id="featured-title" className="mt-3 font-serif text-[clamp(2.5rem,12vw,3.5rem)] leading-[0.95]">
            Featured <em className="text-forest">projects</em>
          </h2>
        </div>
        <ul>
          {featuredProjects.map((project, i) => (
            <li key={project.slug}>
              <ProjectCard project={project} index={i} variant="panel" showDescription={i === 0} />
            </li>
          ))}
        </ul>
        <div className="px-4 py-10">
          <Link
            href="/portfolio/"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-ink px-5 py-3 text-sm transition-colors hover:bg-ink hover:text-cream"
          >
            View all projects
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Desktop: open editorial grid, still without card chrome */}
      <div className="mx-auto hidden max-w-[1440px] px-10 py-28 md:block">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow text-terracotta">Selected work</p>
            <h2 className="mt-3 font-serif text-7xl leading-none xl:text-8xl">
              Featured <em className="text-forest">projects</em>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Link
              href="/portfolio/"
              className="inline-flex items-center gap-2 border-b border-ink pb-1 text-sm"
            >
              View all projects
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-20 grid grid-cols-12 gap-x-8 gap-y-20">
          {featuredProjects.map((project, i) => (
            <Reveal
              as="li"
              key={project.slug}
              delay={(i % 2) * 80}
              className={
                i % 2 === 0 ? 'col-span-5 col-start-1' : 'col-span-6 col-start-7 mt-24'
              }
            >
              <ProjectCard
                project={project}
                index={i}
                aspect={i % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[5/4]'}
                sizes="45vw"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
