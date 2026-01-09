import { Metadata } from 'next';
import PrivateNotesContent from './PrivateNotesContent';

export const metadata: Metadata = {
  title: 'Private Notes App | Secure Note Taking Without Cloud - Dash',
  description:
    'Take truly private notes with Dash. 100% offline, AES-256 encrypted, no accounts required. Your notes never leave your device.',
  keywords: [
    'private notes app',
    'private note taking',
    'notes app without cloud',
    'secure notes',
    'encrypted notes',
    'offline notes app',
    'no cloud notes',
    'privacy notes app',
  ],
  openGraph: {
    title: 'Private Notes App | Secure Note Taking Without Cloud - Dash',
    description:
      'Take truly private notes with Dash. 100% offline, AES-256 encrypted, no accounts required.',
    type: 'website',
  },
};

export default function PrivateNotesPage() {
  return <PrivateNotesContent />;
}
