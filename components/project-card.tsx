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
}

export function ProjectCard({
  project,
  index,
  aspect,
  showDescription = false,
  sizes = '(min-width: 768px) 50vw, 100vw',
}: ProjectCardProps) {
  const accent = accentClasses[project.accent]
  return (
    <Link href={`/projects/${project.slug}/`} className="group block">
      <div className={cn('relative overflow-hidden rounded-sm bg-sand', aspect)}>
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
        <span
          className={cn(
            'absolute left-4 top-4 rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em]',
            accent.bg,
            accent.text,
          )}
        >
          {project.category}
        </span>
        <span className="absolute bottom-4 right-4 flex size-11 translate-y-2 items-center justify-center rounded-full bg-cream text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100">
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl leading-tight md:text-3xl">
            {index !== undefined && (
              <span className="mr-3 align-top font-sans text-xs text-terracotta">
                {String(index + 1).padStart(2, '0')}
              </span>
            )}
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.location}</p>
          {showDescription && (
            <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          )}
        </div>
        <span className="shrink-0 pt-2 text-sm tabular-nums text-muted-foreground">{project.year}</span>
      </div>
    </Link>
  )
}
