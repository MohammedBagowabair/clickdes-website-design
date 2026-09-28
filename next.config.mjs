/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits a fully static site (plain HTML/CSS/JS) into /out on `pnpm build`.
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
