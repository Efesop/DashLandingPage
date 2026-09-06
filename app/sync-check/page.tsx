import type { Metadata } from 'next';
import SyncCheck from './SyncCheck';

// Support tool: lets a user prove from their own phone whether the Dash Sync
// relay is reachable, and shows which layer is failing (DNS / provider block /
// general connectivity). Not linked from navigation; noindex.
export const metadata: Metadata = {
  title: 'Dash Sync connection check',
  robots: { index: false, follow: false },
};

export default function SyncCheckPage() {
  return <SyncCheck />;
}
