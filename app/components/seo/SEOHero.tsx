'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, type LucideIcon } from 'lucide-react';
import BitsField from '../BitsField';

interface SEOHeroProps {
  badge?: { icon: LucideIcon; text: string };
  headline: string;
  /** Ignored. Kept so pages on the legacy skeleton compile until they migrate to ArticleLayout. */
  highlightedWord?: string;
  subheadline: string;
  primaryCTA?: { text: string; onClick?: () => void };
  secondaryCTA?: { text: string; href: string };
  /** e.g. "September 2026". Renders the mono "Updated … · Dash team" caption. */
  updated?: string;
  /** The faint binary field behind the headline: the one BitsField a non-home page gets (plus the footer divider). */
  field?: boolean;
  /** Optional right-hand column (legacy mockups). Without it the stack is centered like the homepage. */
  children?: React.ReactNode;
  /** Ignored. Kept for legacy call sites. */
  variant?: 'light' | 'dark';
}

export const PRIMARY_BUTTON =
  'inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-[15px] rounded-[10px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base shadow-[0_10px_30px_-10px_rgba(37,99,235,0.6)] transition-colors';
export const SECONDARY_BUTTON =
  'inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-[15px] rounded-[10px] border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 font-medium text-base transition-colors';

export function scrollToPayment() {
  document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
}

export default function SEOHero({
  badge,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  updated,
  field = true,
  children,
}: SEOHeroProps) {
  const reduced = useReducedMotion();
  const rise = reduced ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };
  const BadgeIcon = badge?.icon;
  const centered = !children;

  const stack = (
    <motion.div {...rise} className={`flex flex-col gap-5 ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
      {badge && BadgeIcon && (
        <span className='inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-[13.5px] font-medium text-gray-700'>
          <BadgeIcon className='w-3.5 h-3.5 text-gray-700' aria-hidden='true' />
          {badge.text}
        </span>
      )}
      <h1
        className={`text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-[-0.04em] leading-[1.05] text-gray-900 text-balance ${
          centered ? 'max-w-[20ch]' : 'max-w-[18ch]'
        }`}
      >
        {headline}
      </h1>
      <p className={`text-lg sm:text-xl leading-relaxed text-gray-600 text-pretty ${centered ? 'max-w-[58ch]' : 'max-w-[48ch]'}`}>
        {subheadline}
      </p>
      {(primaryCTA || secondaryCTA) && (
        <div className={`flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-1 ${centered ? 'sm:justify-center' : ''}`}>
          {primaryCTA && (
            <a
              href='#payment-section'
              onClick={(e) => {
                e.preventDefault();
                if (primaryCTA.onClick) primaryCTA.onClick();
                else scrollToPayment();
              }}
              className={PRIMARY_BUTTON}
            >
              {primaryCTA.text}
            </a>
          )}
          {secondaryCTA && (
            <a href={secondaryCTA.href} className={SECONDARY_BUTTON}>
              {secondaryCTA.text}
              <ArrowDown className='w-4 h-4 text-gray-500' aria-hidden='true' />
            </a>
          )}
        </div>
      )}
      {updated && (
        <span className='font-mono text-[12.5px] uppercase tracking-[0.06em] text-gray-500 mt-1'>Updated {updated} · Dash team</span>
      )}
    </motion.div>
  );

  return (
    <section className='relative overflow-hidden bg-white'>
      {field && <BitsField className='absolute inset-0 w-full h-full' base={0.09} peak={0.32} fade={0.58} clear={centered} period={7} />}
      <div aria-hidden='true' className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fbfbfc]' />
      <div className='container mx-auto px-6 lg:px-8 relative pt-24 sm:pt-28 pb-16 sm:pb-20'>
        {children ? (
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {stack}
            <motion.div
              {...(reduced ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.15 } })}
              className='relative'
            >
              {children}
            </motion.div>
          </div>
        ) : (
          stack
        )}
      </div>
    </section>
  );
}
