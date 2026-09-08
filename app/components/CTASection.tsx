'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { APP_STORE_URL } from './HeroSection';

export default function CTASection() {
  return (
    <section className='py-16 sm:py-20'>
      <div className='container mx-auto px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='rounded-[24px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8'
        >
          <div className='flex flex-col gap-2'>
            <h2 className='text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-[-0.035em] leading-[1.05] text-balance'>
              Your notes. Your device. Nobody else&apos;s server.
            </h2>
            <p className='text-[17px] text-blue-100'>$14.99 once on Mac. Free on iPhone.</p>
          </div>
          <div className='flex flex-col sm:flex-row gap-3 flex-shrink-0'>
            <a
              href='#payment-section'
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className='px-6 py-4 rounded-[10px] bg-white text-gray-900 font-semibold text-base text-center hover:bg-blue-50 transition-colors'
            >
              Get Dash for Mac
            </a>
            <Link
              href={APP_STORE_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-4 rounded-[10px] border border-white/50 text-white font-semibold text-base text-center hover:bg-white/10 transition-colors'
            >
              App Store
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
