import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/payment/', '/sync-check'],
      },
    ],
    sitemap: 'https://dashnote.io/sitemap.xml',
  };
}
