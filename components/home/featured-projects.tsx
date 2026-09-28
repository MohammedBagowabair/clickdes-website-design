import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { featuredProjects } from '@/lib/projects'

const layout = [
  'md:col-span-5 md:mt-0',
  'md:col-span-6 md:col-start-7 md:mt-40',
  'md:col-span-5 md:col-start-2 md:-mt-10',
  'md:col-span-6 md:col-start-7 md:mt-24',
]

export function FeaturedProjects() {
  return (
    <section aria-labelledby="featured-title" className="bg-sand/60 py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow text-terracotta">Selected work</p>
            <h2 id="featured-title" className="mt-4 font-serif text-5xl leading-none md:text-8xl">
              Featured <em className="text-forest">projects</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/portfolio/"
              className="group inline-flex items-center gap-2 rounded-full border border-ink px-5 py-3 text-sm transition-colors hover:bg-ink hover:text-cream"
            >
              View all projects
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12 md:gap-x-6 md:gap-y-0">
          {featuredProjects.map((project, i) => (
            <Reveal as="li" key={project.slug} className={layout[i % layout.length]}>
              <ProjectCard
                project={project}
                index={i}
                aspect={i % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'}
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
