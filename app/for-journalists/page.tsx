import { Metadata } from 'next';
import ForJournalistsContent from './ForJournalistsContent';

export const metadata: Metadata = {
  title: 'Secure Notes for Journalists | Encrypted, Offline Note Taking - Dash',
  description:
    'Protect your sources with Dash. Military-grade encrypted notes that never touch the cloud. No accounts, no tracking, no subpoena risk.',
  keywords: [
    'notes app for journalists',
    'secure notes for reporters',
    'journalist note taking',
    'encrypted notes journalism',
    'source protection notes',
    'investigative journalist tools',
    'secure reporting tools',
    'offline notes for journalists',
  ],
  openGraph: {
    title: 'Secure Notes for Journalists | Encrypted, Offline Note Taking - Dash',
    description:
      'Protect your sources with Dash. Military-grade encrypted notes that never touch the cloud.',
    type: 'website',
  },
};

export default function ForJournalistsPage() {
  return <ForJournalistsContent />;
}
