'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const useCases = [
  { href: '/for-journalists', title: 'Journalists', blurb: 'Sources that never touch a server.' },
  { href: '/for-writers', title: 'Writers', blurb: 'Drafts that cannot train a model.' },
  { href: '/for-students', title: 'Students', blurb: 'Notes without data mining.' },
  { href: '/for-researchers', title: 'Researchers', blurb: 'Findings kept confidential.' },
  { href: '/for-bitcoiners', title: 'Bitcoiners', blurb: 'Seed phrases, encrypted at rest.' },
];

export default function UseCaseRow() {
  return (
    <section className='py-16 sm:py-20'>
      <div className='container mx-auto px-6 lg:px-8 flex flex-col gap-5'>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex items-baseline justify-between gap-6'
        >
          <h2 className='text-2xl sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.08] text-gray-900 dark:text-white'>
            Who keeps their notes in Dash
          </h2>
          <span className='text-[15px] text-gray-500 dark:text-gray-400 hidden sm:inline'>Guides for each</span>
        </motion.div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5'>
          {useCases.map((u) => (
            <Link
              key={u.href}
              href={u.href}
              className='group rounded-2xl border border-gray-200 bg-white p-5 flex flex-col gap-1.5 hover:border-gray-400 transition-colors'
            >
              <span className='font-semibold text-base text-gray-900 dark:text-white inline-flex items-center gap-1.5'>
                {u.title}
                <ArrowRight className='w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600 dark:text-blue-400' />
              </span>
              <span className='text-sm text-gray-500 dark:text-gray-400'>{u.blurb}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
