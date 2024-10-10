/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove or comment out these lines:
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://dashnotes.io' : '',
  // basePath: '',
}

module.exports = nextConfig