/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/blog',
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
