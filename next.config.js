/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to enable dynamic API routes for Stripe integration
  images: {
    unoptimized: true,
  },
  /*assetPrefix: process.env.NODE_ENV === 'production' ? 'https://dashnote.io' : '',
  basePath: '',*/
};

module.exports = nextConfig;
