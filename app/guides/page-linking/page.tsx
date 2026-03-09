import type { Metadata } from 'next';
import PageLinkingGuideContent from './PageLinkingGuideContent';

export const metadata: Metadata = {
  title: 'Page Linking: Wiki-Style Links Between Your Notes | Guide',
  description:
    'Learn how to connect your notes with [[wiki links]] in Dash. Build a personal knowledge base with instant navigation between pages.',
  keywords: [
    'wiki links notes',
    'page linking notes app',
    'backlinks notes',
    'connected notes',
    'knowledge base app',
    'wiki style notes',
    'link notes together',
    'note linking app',
  ],
  openGraph: {
    title: 'Page Linking: Wiki-Style Links Between Your Notes',
    description: 'Connect your notes with [[wiki links]] and build a personal knowledge base.',
    url: 'https://dashnote.io/guides/page-linking',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/Dashfeature1.png', width: 1200, height: 630, alt: 'Page Linking Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Linking Guide - Dash',
    description: 'Wiki-style links to connect your notes into a knowledge base.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: { canonical: 'https://dashnote.io/guides/page-linking' },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Page Linking: Wiki-Style Links Between Your Notes',
  description: 'Learn how to use [[wiki links]] in Dash to build a connected knowledge base.',
  author: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  publisher: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  datePublished: '2026-03-07',
  dateModified: '2026-03-07',
  mainEntityOfPage: 'https://dashnote.io/guides/page-linking',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I create a page link in Dash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Type [[ anywhere in a text block to open an autocomplete dropdown of all your pages. Select a page to insert a clickable link. You can also select text and use the link icon in the inline toolbar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do page links break when I rename a page?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Page links reference the page\u2019s unique ID, not its title. Renaming a page does not break any existing links to it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I link to encrypted pages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can link to any page, including encrypted ones. Clicking the link will prompt for the page password if it is locked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do page links require an internet connection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Page links are purely local references stored on your device. They work fully offline with zero network requests.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Dash compare to Obsidian for page linking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both Dash and Obsidian support [[ wiki-style links. Dash also offers toolbar-based linking. Obsidian has backlinks and graph view, which are planned for Dash. Both work offline and keep data local.',
      },
    },
  ],
};

export default function PageLinkingGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageLinkingGuideContent />
    </>
  );
}
