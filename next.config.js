/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  }
  /*assetPrefix: process.env.NODE_ENV === 'production' ? 'https://dashnote.io' : '',
  basePath: '',*/
}

module.exports = nextConfig