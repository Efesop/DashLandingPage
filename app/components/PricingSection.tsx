'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PaymentSection from './PaymentSection';
import { APP_STORE_URL } from './HeroSection';

export default function PricingSection() {
  return (
    <section id='pricing' className='py-16 sm:py-20 bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-6 lg:px-8 flex flex-col gap-8'>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex flex-col items-center text-center gap-2'
        >
          <h2 className='text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.035em] leading-[1.05] text-gray-900 dark:text-white text-balance'>
            Pay once for the app. Sync is the only subscription.
          </h2>
          <p className='text-[17px] text-gray-500 dark:text-gray-400'>No plan needed to take notes. Ever.</p>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-5 items-start'>
          {/* Mac: the real checkout form, unchanged logic */}
          <PaymentSection embedded />

          <div className='rounded-[20px] bg-gray-50 dark:bg-gray-900 p-8 flex flex-col gap-4'>
            <span className='font-semibold text-[17px] text-gray-900 dark:text-white'>Dash for iPhone</span>
            <div className='flex items-baseline gap-2'>
              <span className='text-[46px] font-bold tracking-[-0.04em] text-gray-900 dark:text-white'>Free</span>
              <span className='text-gray-500 dark:text-gray-400'>on the App Store</span>
            </div>
            <ul className='flex flex-col gap-2 text-[15.5px] text-gray-600 dark:text-gray-300'>
              <li>Same encryption, Face ID</li>
              <li>Works fully offline</li>
              <li>No account to make</li>
            </ul>
            <Link
              href={APP_STORE_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-auto px-4 py-3.5 rounded-[10px] bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-center font-semibold text-[15.5px] hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors'
            >
              Download
            </Link>
          </div>

          <div className='rounded-[20px] bg-gray-50 dark:bg-gray-900 p-8 flex flex-col gap-4'>
            <span className='font-semibold text-[17px] text-gray-900 dark:text-white'>
              Dash Sync <span className='font-normal text-gray-500 dark:text-gray-400'>(optional)</span>
            </span>
            <div className='flex items-baseline gap-2 flex-wrap'>
              <span className='text-[46px] font-bold tracking-[-0.04em] text-gray-900 dark:text-white'>$4.99</span>
              <span className='text-gray-500 dark:text-gray-400'>/ month, or $47.99 / year</span>
            </div>
            <ul className='flex flex-col gap-2 text-[15.5px] text-gray-600 dark:text-gray-300'>
              <li>Mac, iPhone, iPad and web in step</li>
              <li>Encrypted on your device first</li>
              <li>7-day free trial, cancel any time</li>
            </ul>
            <Link
              href='/subscribe'
              className='mt-auto px-4 py-3.5 rounded-[10px] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-center font-semibold text-[15.5px] hover:bg-white dark:hover:bg-gray-800 transition-colors'
            >
              Start free trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
