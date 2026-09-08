import { Metadata } from 'next';
import DownloadContent from './DownloadContent';

export const metadata: Metadata = {
  title: 'Download Dash Notes for Mac, iPhone & Web',
  description:
    'Get Dash for Mac as a native app with auto-updates, get the free iPhone app on the App Store, or use the free Progressive Web App in any browser. One-time purchase for Mac, no subscription required.',
  keywords: [
    'download Dash',
    'Dash for Mac',
    'Dash PWA',
    'private notes app download',
    'encrypted notes app Mac',
    'offline notes app download',
  ],
  openGraph: {
    title: 'Download Dash Notes for Mac, iPhone & Web | Dash Notes',
    description:
      'Get Dash for Mac as a native app with auto-updates, or use the free Progressive Web App in any browser.',
    url: 'https://dashnote.io/download',
    siteName: 'Dash Notes',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/Dashfeature1.png',
        width: 1200,
        height: 630,
        alt: 'Download Dash - Private Notes App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download Dash Notes for Mac, iPhone & Web',
    description: 'Get Dash for Mac or use the free PWA in any browser.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: {
    canonical: 'https://dashnote.io/download',
  },
};

export default function DownloadPage() {
  return <DownloadContent />;
}
