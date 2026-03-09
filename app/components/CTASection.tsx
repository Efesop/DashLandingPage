'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className='py-24 bg-gradient-to-b from-blue-600 via-blue-700 to-gray-900 relative overflow-hidden'>
      {/* Subtle background pattern */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,transparent_50%)]' />

      <div className='container mx-auto px-6 lg:px-8 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Take back control of
              <br />
              <span className='text-blue-200'>your notes</span>
            </h2>

            <p className='text-xl text-blue-100 mb-10 max-w-2xl mx-auto'>
              Join thousands who&apos;ve chosen true privacy over corporate
              surveillance. Download Dash and own your thoughts for real.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='mb-8'
            >
              <a
                href='#payment-section'
                onClick={(e) => { e.preventDefault(); document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' }); }}
                className='py-3.5 px-10 bg-white text-blue-600 hover:bg-blue-50 active:bg-blue-100 text-lg font-semibold rounded-lg shadow-xl inline-flex items-center gap-2'
              >
                <Download className='h-5 w-5' />
                Get Dash for Mac
              </a>
            </motion.div>

            {/* Trust indicators */}
            <div className='flex flex-wrap items-center justify-center gap-6 text-blue-200'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-green-400' />
                <span className='text-sm'>No account required</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-green-400' />
                <span className='text-sm'>Works on Mac</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-green-400' />
                <span className='text-sm'>One-time purchase</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
