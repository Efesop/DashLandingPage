'use client';

import BitsField from './BitsField';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const rows: [string, string][] = [
  ['Note encryption', 'AES-256-GCM'],
  ['Key derivation', 'PBKDF2-SHA256 · 600,000 rounds'],
  ['Unlock', 'Touch ID · Face ID · password'],
  ['Under coercion', 'Duress password → decoy'],
  ['Sync (optional)', 'End-to-end · relay holds ciphertext'],
  ['Source', 'MIT · github.com/Efesop'],
];

export default function SecurityLedger() {
  return (
    <section id='security' className='py-16 sm:py-20'>
      <div className='container mx-auto px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='relative overflow-hidden isolate rounded-[24px] border border-gray-200 bg-gradient-to-br from-white to-[#f3f4f6] p-8 sm:p-12 lg:p-14 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start'
        >
          <BitsField className='absolute left-0 top-0 w-full h-[18px] -z-10' base={0.16} peak={0.34} period={9} cell={10.2} line={18} font={11} />
          <div className='flex flex-col gap-4'>
            <span className='text-[13px] font-semibold uppercase tracking-[0.06em] text-gray-500 dark:text-gray-400'>Security you can read</span>
            <h2 className='text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-[-0.035em] leading-[1.08] text-gray-900 dark:text-white text-balance'>
              The details are the promise.
            </h2>
            <p className='text-[17px] text-gray-600 dark:text-gray-300 max-w-[44ch]'>
              Every claim on this page is checkable in the source. We would rather show the algorithm than say
              &ldquo;military-grade&rdquo;.
            </p>
            <Link
              href='https://github.com/Efesop/rich-text-editor'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 w-fit px-4.5 py-3 rounded-[10px] border border-gray-300 dark:border-gray-700 text-[15px] font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors'
            >
              <Code className='w-4 h-4' />
              Read the source on GitHub
            </Link>
          </div>
          <dl className='font-mono text-[14px] flex flex-col'>
            {rows.map(([label, value], i) => (
              <div
                key={label}
                className={`flex items-baseline justify-between gap-6 py-3.5 ${i < rows.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}
              >
                <dt className='text-gray-500 dark:text-gray-400'>{label}</dt>
                <dd className='text-right text-gray-900 dark:text-white'>{value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
