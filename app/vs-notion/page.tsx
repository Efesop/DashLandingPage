import { Metadata } from 'next';
import VsNotionContent from './VsNotionContent';

export const metadata: Metadata = {
  title: 'Dash vs Notion: Private Notes Alternative | No Cloud, No Tracking',
  description:
    'Compare Dash to Notion. Get the same note-taking power without cloud dependency, data collection, or monthly subscriptions. One-time $14.99.',
  keywords: [
    'Notion alternative',
    'Notion privacy',
    'private Notion alternative',
    'Notion without cloud',
    'offline Notion alternative',
    'Notion competitor',
    'notes app vs Notion',
    'secure Notion alternative',
  ],
  openGraph: {
    title: 'Dash vs Notion: Private Notes Alternative | No Cloud, No Tracking',
    description:
      'Compare Dash to Notion. Get the same note-taking power without cloud dependency or data collection.',
    type: 'website',
  },
};

export default function VsNotionPage() {
  return <VsNotionContent />;
}
