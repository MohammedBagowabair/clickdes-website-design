import data from '@/data/projects.json'
import { withAssetPaths } from '@/lib/asset'

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

function normalizeProject(project: Project): Project {
  return {
    ...project,
    coverImage: withAssetPaths(project.coverImage),
    images: project.images.map(withAssetPaths),
  }
}

export const projects = (data as Project[]).map(normalizeProject)

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

export const accentClasses: Record<
  Accent,
  { bg: string; text: string; border: string }
> = {
  saffron: { bg: 'bg-saffron', text: 'text-saffron', border: 'border-saffron' },
  forest: { bg: 'bg-forest', text: 'text-forest', border: 'border-forest' },
  terracotta: { bg: 'bg-terracotta', text: 'text-terracotta', border: 'border-terracotta' },
  blush: { bg: 'bg-blush', text: 'text-blush', border: 'border-blush' },
}
