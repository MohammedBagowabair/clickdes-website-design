import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CtaSection } from '@/components/cta-section'
import { accentClasses, getAdjacentProjects, getProject, projects } from '@/lib/projects'
import { cn } from '@/lib/utils'

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} — ${project.category} Interior`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: { images: [{ url: project.coverImage.src }] },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(project.slug)
  const accent = accentClasses[project.accent]
  const meta = [
    { label: 'Location', value: project.location },
    { label: 'Category', value: project.category },
    { label: 'Year', value: project.year },
    ...project.details,
  ]

  return (
    <>
      <section aria-labelledby="project-title" className="relative flex min-h-[90svh] items-end overflow-hidden bg-ink text-cream">
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          fill
          preload
          sizes="100vw"
          className="animate-in fade-in zoom-in-105 object-cover duration-[1600ms]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/40" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-10 pt-32 md:px-10 md:pb-16">
          <span className={cn('inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em]', accent.bg, accent.text)}>
            {project.category} · {project.year}
          </span>
          <h1
            id="project-title"
            className="animate-in fade-in slide-in-from-bottom-6 mt-6 text-balance font-serif text-6xl leading-[0.9] duration-1000 md:text-[10rem]"
          >
            {project.title}
          </h1>
          <p className="mt-4 text-cream/80">{project.location}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <dl className="divide-y divide-border border-y border-border">
              {meta.map((m) => (
                <div key={m.label} className="flex justify-between gap-6 py-4 text-sm">
                  <dt className="text-muted-foreground">{m.label}</dt>
                  <dd className="text-right">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal>
              <p className="eyebrow text-terracotta">Overview</p>
              <p className="mt-5 text-pretty font-serif text-3xl leading-snug md:text-5xl">{project.description}</p>
            </Reveal>
            <Reveal delay={100} className="mt-14">
              <h2 className="eyebrow text-terracotta">Design concept</h2>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{project.concept}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="Project gallery" className="mx-auto max-w-[1440px] px-5 pb-24 md:px-10 md:pb-40">
        <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
          {project.images.map((img, i) => {
            const wide = img.width > img.height * 1.3
            return (
              <Reveal as="li" key={`${img.src}-${i}`} className={cn(wide && 'md:col-span-2')}>
                <div className="img-reveal overflow-hidden rounded-sm bg-sand">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes={wide ? '100vw' : '(min-width: 768px) 50vw, 100vw'}
                    className="h-auto w-full"
                  />
                </div>
              </Reveal>
            )
          })}
        </ul>
      </section>

      <nav aria-label="More projects" className="border-t border-border">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
          <Link
            href={`/projects/${prev.slug}/`}
            className="group flex flex-col gap-3 px-5 py-12 transition-colors hover:bg-sand md:border-r md:border-border md:px-10 md:py-16"
          >
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              Previous project
            </span>
            <span className="font-serif text-4xl md:text-6xl">{prev.title}</span>
          </Link>
          <Link
            href={`/projects/${next.slug}/`}
            className="group flex flex-col items-end gap-3 border-t border-border px-5 py-12 text-right transition-colors hover:bg-sand md:border-t-0 md:px-10 md:py-16"
          >
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              Next project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
            <span className="font-serif text-4xl md:text-6xl">{next.title}</span>
          </Link>
        </div>
      </nav>

      <CtaSection title="Imagine what we could create for you." />
    </>
  )
}
