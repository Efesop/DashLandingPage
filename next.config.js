/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/DashLandingPage/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/DashLandingPage' : '',
}

module.exports = nextConfig