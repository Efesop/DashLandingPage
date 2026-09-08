'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRIMARY_BUTTON } from './SEOHero';

interface InlineCTAProps {
  /** One sentence above the button. */
  text?: string;
  href?: string;
  /** Ignored. Kept for legacy call sites. */
  variant?: 'light' | 'dark';
}

export default function InlineCTA({
  text = 'Lock a note in one click. Dash is $14.99 once on Mac, free on iPhone.',
  href = '#payment-section',
}: InlineCTAProps) {
  return (
    <div className='container mx-auto px-6 lg:px-8 py-12 sm:py-14'>
      <div className='flex flex-col items-center gap-4 text-center'>
        <p className='text-lg text-gray-600 max-w-[52ch] text-pretty'>{text}</p>
        <a
          href={href}
          onClick={(e) => {
            if (!href.startsWith('#')) return;
            e.preventDefault();
            document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={PRIMARY_BUTTON}
        >
          Get Dash for Mac
          <ArrowRight className='w-4 h-4' aria-hidden='true' />
        </a>
      </div>
    </div>
  );
}
