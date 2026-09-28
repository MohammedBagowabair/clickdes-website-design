import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { accentClasses, type Project } from '@/lib/projects'
import { cn } from '@/lib/utils'

type ProjectCardProps = {
  project: Project
  index?: number
  aspect?: string
  showDescription?: boolean
  sizes?: string
  /** Full-bleed cinematic panel — used on mobile to avoid card chrome */
  variant?: 'editorial' | 'panel'
}

export function ProjectCard({
  project,
  index,
  aspect = 'aspect-[4/5]',
  showDescription = false,
  sizes = '(min-width: 768px) 50vw, 100vw',
  variant = 'editorial',
}: ProjectCardProps) {
  const accent = accentClasses[project.accent]

  if (variant === 'panel') {
    return (
      <Link
        href={`/projects/${project.slug}/`}
        className="group relative block min-h-[72vh] w-full overflow-hidden bg-ink text-cream"
      >
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-4 pb-6 pt-24 sm:px-6">
          <div className="min-w-0">
            <p className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.2em] text-cream/75">
              {index !== undefined && (
                <span className="text-saffron">{String(index + 1).padStart(2, '0')}</span>
              )}
              <span>{project.category}</span>
              <span aria-hidden="true" className={cn('inline-block size-1.5 rounded-full', accent.bg)} />
              <span>{project.year}</span>
            </p>
            <h3 className="mt-3 font-serif text-[clamp(1.85rem,8vw,2.75rem)] leading-[0.95] tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-cream/80">{project.location}</p>
            {showDescription && (
              <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-cream/70">
                {project.description}
              </p>
            )}
          </div>
          <span className="mb-1 flex size-11 shrink-0 items-center justify-center border border-cream/40 text-cream transition-colors group-hover:border-saffron group-hover:bg-saffron group-hover:text-ink">
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/projects/${project.slug}/`} className="group block">
      <div className={cn('relative overflow-hidden bg-sand', aspect)}>
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          width={project.coverImage.width}
          height={project.coverImage.height}
          sizes={sizes}
          className={cn(
            'w-full transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]',
            aspect ? 'absolute inset-0 h-full object-cover' : 'h-auto',
          )}
        />
        <span className={cn('absolute bottom-0 left-0 h-1 w-16', accent.bg)} aria-hidden="true" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 border-t border-border pt-4">
        <div className="min-w-0">
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            {index !== undefined && (
              <span className="mr-2 text-terracotta">{String(index + 1).padStart(2, '0')}</span>
            )}
            {project.category} · {project.year}
          </p>
          <h3 className="mt-2 font-serif text-2xl leading-tight md:text-3xl">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.location}</p>
          {showDescription && (
            <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          )}
        </div>
        <ArrowUpRight
          className="mt-1 size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </Link>
  )
}
