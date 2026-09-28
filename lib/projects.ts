import data from '@/data/projects.json'

export type Accent = 'saffron' | 'forest' | 'terracotta' | 'blush'

export type ProjectImage = {
  src: string
  width: number
  height: number
  alt: string
}

export type Project = {
  slug: string
  title: string
  location: string
  category: 'Residential' | 'Commercial' | string
  year: string
  accent: Accent
  featured: boolean
  coverImage: ProjectImage
  description: string
  concept: string
  details: { label: string; value: string }[]
  images: ProjectImage[]
}

export const projects = data as Project[]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  return { prev, next }
}

export const accentClasses: Record<Accent, { bg: string; text: string; dot: string }> = {
  saffron: { bg: 'bg-saffron', text: 'text-ink', dot: 'bg-saffron' },
  forest: { bg: 'bg-forest', text: 'text-cream', dot: 'bg-forest' },
  terracotta: { bg: 'bg-terracotta', text: 'text-cream', dot: 'bg-terracotta' },
  blush: { bg: 'bg-blush', text: 'text-ink', dot: 'bg-blush' },
}
