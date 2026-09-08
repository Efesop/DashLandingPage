'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Minus,
  Plus,
  Check,
  X,
  Laptop,
  Shield,
  Lock,
  KeyRound,
  Flame,
  BookOpen,
  Search,
  Share2,
  type LucideIcon,
} from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import PaymentSection from '../PaymentSection';
import SEOHero from './SEOHero';
import InlineCTA from './InlineCTA';
import CTABanner from './CTABanner';
import RelatedLinks from './RelatedLinks';

// Icons are referenced by name so server components can pass plain data.
const ICONS: Record<string, LucideIcon> = {
  Laptop,
  Shield,
  Lock,
  KeyRound,
  Flame,
  BookOpen,
  Search,
  Share2,
};

export interface ArticleApp {
  name: string;
  tagline: string;
  bestFor: string;
  price: string;
  privacy: string;
  pros: string[];
  cons: string[];
  isDash?: boolean;
}

export interface ArticleSection {
  id?: string;
  heading: string;
  body: React.ReactNode;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleLayoutProps {
  badgeIcon: keyof typeof ICONS;
  badgeText: string;
  headline: string;
  highlightedWord?: string;
  subheadline: string;
  updated: string;
  intro: React.ReactNode;
  apps?: ArticleApp[];
  appsHeading?: string;
  sections?: ArticleSection[];
  faqs: ArticleFAQ[];
  related: { title: string; href: string; description: string }[];
  inlineCTA?: string;
  ctaHeadline: string;
  ctaSubheadline: string;
  showPayment?: boolean;
}

const prose =
  'max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-gray-300 ' +
  '[&_p]:mb-5 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 ' +
  '[&_li]:mb-2 [&_strong]:font-semibold [&_strong]:text-gray-900 dark:[&_strong]:text-white ' +
  '[&_a]:text-blue-600 dark:[&_a]:text-blue-400 [&_a]:underline [&_a]:underline-offset-2 ' +
  '[&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 dark:[&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 ' +
  '[&_code]:font-mono [&_code]:text-[0.9em] [&_code]:bg-gray-100 dark:[&_code]:bg-gray-800 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded';

export default function ArticleLayout({
  badgeIcon,
  badgeText,
  headline,
  highlightedWord,
  subheadline,
  updated,
  intro,
  apps,
  appsHeading,
  sections = [],
  faqs,
  related,
  inlineCTA,
  ctaHeadline,
  ctaSubheadline,
  showPayment = true,
}: ArticleLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const BadgeIcon = ICONS[badgeIcon] ?? Shield;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <SEOHero
        badge={{ icon: BadgeIcon, text: badgeText }}
        headline={headline}
        highlightedWord={highlightedWord}
        subheadline={subheadline}
        primaryCTA={{ text: 'Get Dash for Mac' }}
        secondaryCTA={{ text: 'Read the guide', href: '#article' }}
      />

      <article id="article" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="max-w-3xl mx-auto text-sm text-gray-500 dark:text-gray-400 mb-8">
            Updated {updated} · By the Dash team
          </p>
          <div className={prose}>{intro}</div>
        </div>
      </article>

      {apps && apps.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-8">
            {appsHeading && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                {appsHeading}
              </h2>
            )}
            <ol className="max-w-4xl mx-auto space-y-6">
              {apps.map((app, index) => (
                <li
                  key={app.name}
                  className={`rounded-2xl border p-6 md:p-8 bg-white dark:bg-gray-950 ${
                    app.isDash
                      ? 'border-blue-300 dark:border-blue-700 shadow-lg shadow-blue-500/10'
                      : 'border-gray-200 dark:border-gray-800'
                  }`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <span className="text-sm font-mono text-gray-400">{index + 1}.</span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{app.name}</h3>
                    {app.isDash && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                        Our app
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-5">{app.tagline}</p>
                  <dl className="grid sm:grid-cols-3 gap-4 text-sm mb-5">
                    <div>
                      <dt className="text-gray-500 dark:text-gray-400 mb-0.5">Best for</dt>
                      <dd className="text-gray-900 dark:text-white font-medium">{app.bestFor}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500 dark:text-gray-400 mb-0.5">Price</dt>
                      <dd className="text-gray-900 dark:text-white font-medium">{app.price}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500 dark:text-gray-400 mb-0.5">Privacy</dt>
                      <dd className="text-gray-900 dark:text-white font-medium">{app.privacy}</dd>
                    </div>
                  </dl>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-1.5">
                      {app.pros.map((p) => (
                        <li key={p} className="flex gap-2 text-gray-700 dark:text-gray-300">
                          <Check className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-1.5">
                      {app.cons.map((c) => (
                        <li key={c} className="flex gap-2 text-gray-700 dark:text-gray-300">
                          <X className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {inlineCTA && <InlineCTA text={inlineCTA} />}

      {sections.map((section, index) => (
        <section
          key={section.heading}
          id={section.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}`}
        >
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="max-w-3xl mx-auto text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {section.heading}
            </h2>
            <div className={prose}>{section.body}</div>
          </div>
        </section>
      ))}

      {showPayment && <PaymentSection />}

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Frequently asked questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks heading="Keep reading" links={related} />

      <CTABanner headline={ctaHeadline} subheadline={ctaSubheadline} />

      <div className="sr-only">
        <Link href="/download">Download Dash Notes</Link>
      </div>

      <Footer />
    </main>
  );
}
