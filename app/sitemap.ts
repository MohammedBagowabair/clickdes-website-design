import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'
import { siteConfig } from '@/site.config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', 'studio/', 'services/', 'portfolio/', 'contact/']
  return [
    ...pages.map((p) => ({
      url: `${siteConfig.url}/${p}`,
      changeFrequency: 'monthly' as const,
      priority: p === '' ? 1 : 0.8,
    })),
    ...projects.map((p) => ({
      url: `${siteConfig.url}/projects/${p.slug}/`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
