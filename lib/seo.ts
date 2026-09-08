// Structured-data helpers for article-style pages. Keep the visible FAQ and
// the FAQPage JSON-LD built from the SAME array so they never drift.

export interface FAQ {
  question: string;
  answer: string;
}

const ORG = {
  '@type': 'Organization',
  name: 'Dash Notes',
  url: 'https://dashnote.io',
  logo: { '@type': 'ImageObject', url: 'https://dashnote.io/images/Dash256.png' },
};

export function articleJsonLd(opts: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
    headline: opts.headline,
    description: opts.description,
    image: 'https://dashnote.io/images/Dashfeature1.png',
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: ORG,
    publisher: ORG,
  };
}

export function faqJsonLd(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function itemListJsonLd(name: string, items: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item,
    })),
  };
}

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords: string[];
}) {
  const url = `https://dashnote.io${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${opts.title} | Dash Notes`,
      description: opts.description,
      url,
      siteName: 'Dash Notes',
      locale: 'en_US',
      type: 'article',
      images: [{ url: '/images/Dashfeature1.png', width: 1200, height: 630, alt: opts.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      creator: '@efesopoulos',
      images: ['/images/Dashfeature1.png'],
    },
  };
}
