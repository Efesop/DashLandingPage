import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

// The subscribe page itself is a client component (Stripe checkout), so its
// metadata lives here.
export const metadata: Metadata = pageMetadata({
  title: 'Dash Sync: End-to-End Encrypted Notes Sync',
  description:
    'Dash Sync keeps notes in step across Mac, iPhone, iPad and the web, encrypted on your device first. $4.99 a month or $47.99 a year, with a 7-day trial.',
  path: '/subscribe',
  keywords: [
    'dash sync',
    'end to end encrypted notes sync',
    'encrypted notes sync subscription',
    'sync notes across devices privately',
  ],
});

export default function SubscribeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
