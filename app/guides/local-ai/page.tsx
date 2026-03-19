import type { Metadata } from 'next';
import LocalAIGuideContent from './LocalAIGuideContent';

export const metadata: Metadata = {
  title: 'Local AI: Private AI That Never Leaves Your Device | Guide',
  description:
    'Use AI to summarize, rewrite, brainstorm, and chat — powered by local models like Ollama and LM Studio. No cloud, no API keys, no data ever sent anywhere.',
  keywords: [
    'local ai notes app',
    'private ai writing',
    'offline ai assistant',
    'ollama notes app',
    'local llm notes',
    'ai notes no cloud',
    'private ai note taking',
    'local ai writing assistant',
    'lm studio notes',
    'on-device ai notes',
  ],
  openGraph: {
    title: 'Local AI: Private AI That Never Leaves Your Device',
    description: 'AI writing assistance powered by local models. No cloud, no API keys, no data ever sent anywhere.',
    url: 'https://dashnote.io/guides/local-ai',
    siteName: 'Dash',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/Dashfeature1.png', width: 1200, height: 630, alt: 'Local AI Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local AI Guide - Dash',
    description: 'AI writing assistance that runs entirely on your device.',
    creator: '@efesopoulos',
    images: ['/images/Dashfeature1.png'],
  },
  alternates: { canonical: 'https://dashnote.io/guides/local-ai' },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Local AI: Private AI That Never Leaves Your Device',
  description: 'Learn how Dash integrates with local AI models for private, on-device writing assistance.',
  author: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  publisher: { '@type': 'Organization', name: 'Dash', url: 'https://dashnote.io' },
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: 'https://dashnote.io/guides/local-ai',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Local AI work in Dash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash connects to AI models running on your computer via localhost. It works with Ollama, LM Studio, LocalAI, Jan, or any OpenAI-compatible local server. Your notes are sent to the local model for processing — they never leave your device.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dash send my notes to the cloud for AI processing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Dash enforces a hard localhost restriction — the code rejects any non-local endpoint. Your notes are processed entirely on your device by a model you control. No cloud servers are ever contacted for AI features.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI providers does Dash support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dash includes built-in presets for Ollama, LM Studio, LocalAI, and Jan. It also supports any OpenAI-compatible endpoint running on localhost. All providers connect via local network only.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI access my encrypted pages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Encrypted pages are automatically blocked from AI access. The AI panel shows "Unlock this note to use AI" for locked pages. You must explicitly unlock a page before AI can process its content.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an API key or subscription for AI features?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Local AI servers like Ollama are free and open source. Dash requires no API keys, no accounts, and no subscriptions for AI features. Just install a local model and connect.',
      },
    },
  ],
};

export default function LocalAIGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <LocalAIGuideContent />
    </>
  );
}
