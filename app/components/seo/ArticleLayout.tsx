'use client';

import React from 'react';
import Link from 'next/link';
import { MotionConfig } from 'framer-motion';
import { Check, X, Laptop, Shield, Lock, KeyRound, Flame, BookOpen, Search, Share2, type LucideIcon } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import PricingSection from '../PricingSection';
import FAQSection from '../FAQSection';
import CTASection from '../CTASection';
import ComparisonTable, { type ComparisonColumn, type ComparisonRow } from '../ComparisonTable';
import BitsField from '../BitsField';
import SEOHero from './SEOHero';
import InlineCTA from './InlineCTA';
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

export interface ArticleComparison {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  heading?: string;
  subheading?: string;
}

export interface ArticleLayoutProps {
  badgeIcon: keyof typeof ICONS;
  badgeText: string;
  headline: string;
  subheadline: string;
  /** e.g. "September 2026" */
  updated: string;
  intro: React.ReactNode;
  /** Feature grid rendered between the intro and the listicle. */
  comparison?: ArticleComparison;
  apps?: ArticleApp[];
  appsHeading?: string;
  sections?: ArticleSection[];
  faqs: ArticleFAQ[];
  related: { title: string; href: string; description: string }[];
  /** One sentence above a "Get Dash for Mac" button, placed after the listicle. */
  inlineCTA?: string;
  ctaHeadline: string;
  ctaSubheadline: string;
  /** The three pricing cards (Mac checkout, iPhone, Dash Sync). Off for short answer pages. */
  showPayment?: boolean;
}

/**
 * Body copy: gray-600 at 18px, ink links with a grey underline, 24px h3s, mono code on the card grey,
 * hairline tables. Every article and guide shares this so the pages carry only data.
 */
export const prose =
  'max-w-3xl mx-auto text-lg leading-[1.7] text-gray-600 ' +
  '[&_p]:mb-5 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_li]:mb-2 ' +
  '[&_strong]:font-semibold [&_strong]:text-gray-900 ' +
  '[&_a]:text-gray-900 [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:decoration-gray-400 [&_a:hover]:decoration-gray-900 ' +
  '[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-[-0.02em] [&_h3]:text-gray-900 [&_h3]:mt-10 [&_h3]:mb-3 ' +
  '[&_code]:font-mono [&_code]:text-[0.9em] [&_code]:bg-[#f5f5f7] [&_code]:border [&_code]:border-gray-200 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md ' +
  '[&_table]:w-full [&_table]:text-[15.5px] [&_table]:mb-5 [&_th]:text-left [&_th]:font-semibold [&_th]:text-gray-900 [&_th]:py-2 [&_th]:border-b [&_th]:border-gray-200 [&_td]:py-2 [&_td]:border-b [&_td]:border-gray-100';

export default function ArticleLayout({
  badgeIcon,
  badgeText,
  headline,
  subheadline,
  updated,
  intro,
  comparison,
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
  const BadgeIcon = ICONS[badgeIcon] ?? Shield;

  return (
    <MotionConfig reducedMotion='user'>
      <main className='min-h-screen bg-[#fbfbfc]'>
        <Header />

        <SEOHero
          badge={{ icon: BadgeIcon, text: badgeText }}
          headline={headline}
          subheadline={subheadline}
          primaryCTA={{ text: 'Get Dash for Mac' }}
          secondaryCTA={{ text: 'Read on', href: '#article' }}
          updated={updated}
          field
        />

        <article id='article' className='scroll-mt-24 pt-6 sm:pt-8'>
          <div className='container mx-auto px-6 lg:px-8'>
            <div className={prose}>{intro}</div>
          </div>
        </article>

        {comparison && (
          <ComparisonTable
            band={false}
            id='comparison'
            columns={comparison.columns}
            rows={comparison.rows}
            heading={comparison.heading ?? ''}
            subheading={comparison.subheading ?? ''}
          />
        )}

        {apps && apps.length > 0 && (
          <section className='py-16 sm:py-20'>
            <div className='container mx-auto px-6 lg:px-8'>
              <div className='max-w-[880px] mx-auto flex flex-col gap-6'>
                {appsHeading && (
                  <h2 className='text-3xl sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.05] text-gray-900'>{appsHeading}</h2>
                )}
                <ol className='flex flex-col gap-4'>
                  {apps.map((app, index) => (
                    <li
                      key={app.name}
                      className={`rounded-[20px] border p-6 sm:p-8 ${
                        app.isDash ? 'bg-gradient-to-br from-white to-[#f3f4f6] border-[#d4d4d8]' : 'bg-[#f5f5f7] border-[#e5e7eb]'
                      }`}
                    >
                      <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2'>
                        <span className='font-mono text-[13px] text-gray-400 tabular-nums'>{String(index + 1).padStart(2, '0')}</span>
                        <h3 className='text-2xl font-bold tracking-[-0.02em] text-gray-900'>{app.name}</h3>
                        {app.isDash && (
                          <span className='text-xs font-semibold px-2 py-[3px] rounded-md bg-gray-900 text-white'>Our app</span>
                        )}
                      </div>
                      <p className='text-gray-600 mb-5 leading-relaxed'>{app.tagline}</p>
                      <dl className='grid sm:grid-cols-3 gap-4 text-sm mb-5'>
                        <div>
                          <dt className='text-gray-500 mb-0.5'>Best for</dt>
                          <dd className='text-gray-900 font-medium'>{app.bestFor}</dd>
                        </div>
                        <div>
                          <dt className='text-gray-500 mb-0.5'>Price</dt>
                          <dd className='text-gray-900 font-medium'>{app.price}</dd>
                        </div>
                        <div>
                          <dt className='text-gray-500 mb-0.5'>Privacy</dt>
                          <dd className='text-gray-900 font-medium'>{app.privacy}</dd>
                        </div>
                      </dl>
                      <div className='grid sm:grid-cols-2 gap-4 text-[14.5px]'>
                        <ul className='space-y-1.5'>
                          {app.pros.map((p) => (
                            <li key={p} className='flex gap-2 text-gray-700'>
                              <Check className='w-4 h-4 mt-0.5 text-[#1a7f4b] flex-shrink-0' aria-hidden='true' />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                        <ul className='space-y-1.5'>
                          {app.cons.map((c) => (
                            <li key={c} className='flex gap-2 text-gray-700'>
                              <X className='w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0' aria-hidden='true' />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        )}

        {inlineCTA && <InlineCTA text={inlineCTA} />}

        {sections.map((section) => (
          <section key={section.heading} id={section.id} className='scroll-mt-24 py-10 sm:py-12'>
            <div className='container mx-auto px-6 lg:px-8'>
              <h2 className='max-w-3xl mx-auto text-3xl sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.05] text-gray-900 mb-5'>
                {section.heading}
              </h2>
              <div className={prose}>{section.body}</div>
            </div>
          </section>
        ))}

        {showPayment && <PricingSection band={false} />}

        <FAQSection faqs={faqs} heading='Frequently asked questions' subheading='' id='faq' />

        <RelatedLinks heading='Keep reading' links={related} />

        <CTASection headline={ctaHeadline} subheadline={ctaSubheadline} bits={false} />

        <div className='sr-only'>
          <Link href='/download'>Download Dash Notes</Link>
        </div>

        <div aria-hidden='true' className='relative h-[18px] mt-4'>
          <BitsField className='absolute inset-0 w-full h-full' base={0.14} peak={0.3} period={13} cell={10.2} line={18} font={11} />
        </div>
        <Footer />
      </main>
    </MotionConfig>
  );
}
