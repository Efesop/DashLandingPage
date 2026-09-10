/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  trailingSlash: false,
  // Same-origin path to the Dash Sync relay. Some phones (iCloud Private
  // Relay resolvers, DNS-filter apps) refuse every *.deno.net name, while
  // dashnote.io is reachable everywhere. Dash clients (v1.5.6+, iOS build 77+)
  // list `wss://dashnote.io/relay` as a last-resort alias: plain HTTPS sync
  // works through this proxy; the WebSocket doorbell does not (Vercel
  // rewrites are HTTP-only), so those devices fall back to the 60s poll +
  // foreground pull. Real fix later: a custom domain on the relay itself.
  // Serve one host: Google was indexing both www.dashnote.io and dashnote.io.
  async redirects() {
    return [
      {
        source: '/vs-notion',
        destination: '/notion-alternatives',
        permanent: true,
      },
      {
        source: '/vs-evernote',
        destination: '/evernote-alternatives',
        permanent: true,
      },
      {
        source: '/vs-obsidian',
        destination: '/obsidian-alternatives',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.dashnote.io' }],
        destination: 'https://dashnote.io/:path*',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      { source: '/relay', destination: 'https://dash-relay.efesop.deno.net/' },
      { source: '/relay/:path*', destination: 'https://dash-relay.efesop.deno.net/:path*' },
    ];
  },
};

module.exports = nextConfig;
