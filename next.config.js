/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/DashLandingPage/',
  basePath: '/DashLandingPage',
}

module.exports = nextConfig