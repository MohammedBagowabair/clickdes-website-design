/** Public asset path helper for GitHub Pages basePath. */
export function assetPath(path: string): string {
  if (!path) return path
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) return path
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (!base) return normalized
  if (normalized === base || normalized.startsWith(`${base}/`)) return normalized
  return `${base}${normalized}`
}

/**
 * Path for Next metadata (openGraph/twitter) that resolves against metadataBase.
 * metadataBase already includes the Pages project URL, so do not prefix basePath.
 */
export function metadataAssetPath(path: string): string {
  if (!path) return path
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) return path
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (base && (normalized === base || normalized.startsWith(`${base}/`))) {
    const stripped = normalized.slice(base.length)
    return stripped.startsWith('/') ? stripped : `/${stripped}`
  }
  return normalized
}

export function withAssetPaths<T extends { src: string }>(image: T): T {
  return { ...image, src: assetPath(image.src) }
}
