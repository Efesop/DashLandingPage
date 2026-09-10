import { MetadataRoute } from 'next';

// lastModified is the date the page's CONTENT last changed — not the build
// date. Bump an entry when you edit that page; add a row for every new route.
const BASE = 'https://dashnote.io';

type Entry = [path: string, lastModified: string, changeFrequency: 'weekly' | 'monthly' | 'yearly', priority: number];

const entries: Entry[] = [
  ['', '2026-09-08', 'weekly', 1.0],
  // Product & keyword pages
  ['/private-notes', '2026-09-08', 'monthly', 0.9],
  ['/encrypted-notes', '2026-09-08', 'monthly', 0.9],
  ['/offline-notes', '2026-09-08', 'monthly', 0.9],
  ['/password-protected-notes', '2026-09-08', 'monthly', 0.9],
  ['/secure-journal', '2026-09-08', 'monthly', 0.8],
  ['/journal-app-mac', '2026-09-08', 'monthly', 0.8],
  ['/day-one-alternative', '2026-09-08', 'monthly', 0.6],
  ['/is-apple-notes-secure', '2026-09-08', 'monthly', 0.7],
  ['/is-notion-private', '2026-09-08', 'monthly', 0.7],
  ['/standard-notes-vs-notesnook', '2026-09-08', 'monthly', 0.7],
  ['/standard-notes-alternative', '2026-09-08', 'monthly', 0.6],
  ['/apple-notes-alternative', '2026-09-08', 'monthly', 0.6],
  ['/joplin-alternative', '2026-09-08', 'monthly', 0.6],
  ['/bear-alternative', '2026-09-08', 'monthly', 0.6],
  ['/simplenote-alternative', '2026-09-08', 'monthly', 0.6],
  ['/craft-alternative', '2026-09-08', 'monthly', 0.6],
  ['/share', '2026-09-08', 'monthly', 0.7],
  ['/download', '2026-09-08', 'monthly', 0.9],
  // Roundups & alternatives
  ['/best-notes-app-for-mac', '2026-09-08', 'monthly', 0.9],
  ['/open-source-notes-app', '2026-09-08', 'monthly', 0.8],
  ['/obsidian-alternatives', '2026-09-08', 'monthly', 0.8],
  ['/notion-alternatives', '2026-09-08', 'monthly', 0.8],
  ['/evernote-alternatives', '2026-09-08', 'monthly', 0.8],
  ['/privnote-alternatives', '2026-09-08', 'monthly', 0.8],
  // Use cases
  ['/for-journalists', '2026-09-08', 'monthly', 0.7],
  ['/for-writers', '2026-09-08', 'monthly', 0.7],
  ['/for-bitcoiners', '2026-09-08', 'monthly', 0.7],
  ['/for-students', '2026-09-08', 'monthly', 0.7],
  ['/therapist-notes-app', '2026-09-08', 'monthly', 0.8],
  ['/for-researchers', '2026-09-08', 'monthly', 0.7],
  // Comparisons
  ['/vs-google-keep', '2026-09-08', 'monthly', 0.7],
  // Guides
  ['/guides', '2026-09-08', 'monthly', 0.7],
  ['/guides/lock-notes-on-iphone-and-mac', '2026-09-08', 'monthly', 0.8],
  ['/guides/duress-password', '2026-09-08', 'monthly', 0.8],
  ['/guides/seed-phrase-storage', '2026-09-08', 'monthly', 0.8],
  ['/guides/local-ai', '2026-09-08', 'monthly', 0.8],
  ['/guides/encryption', '2026-09-08', 'monthly', 0.7],
  ['/guides/self-destructing-notes', '2026-09-08', 'monthly', 0.7],
  ['/guides/offline-first', '2026-09-08', 'monthly', 0.7],
  ['/guides/privacy-first-note-taking', '2026-09-08', 'monthly', 0.7],
  ['/guides/app-lock', '2026-09-08', 'monthly', 0.7],
  ['/guides/page-linking', '2026-09-08', 'monthly', 0.6],
  // Misc
  ['/changelog', '2026-09-08', 'weekly', 0.5],
  ['/privacy-policy', '2026-09-08', 'yearly', 0.3],
  ['/terms', '2026-03-17', 'yearly', 0.3],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(([path, lastModified, changeFrequency, priority]) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(`${lastModified}T00:00:00Z`),
    changeFrequency,
    priority,
  }));
}
