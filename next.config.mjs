/** @type {import('next').NextConfig} */
const githubPages = process.env.GITHUB_PAGES === 'true'
const basePath = githubPages ? '/clickdes-website-design' : ''

const nextConfig = {
  // Emits a fully static site (plain HTML/CSS/JS) into /out on `pnpm build`.
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
