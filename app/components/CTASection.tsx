'use client';

import React from 'react';
import { Download, Shield, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface CTASectionProps {
  email: string;
  setEmail: (email: string) => void;
  isEmailSubmitted: boolean;
  downloadError: string;
  downloadUrl: string;
  handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function CTASection({
  email,
  setEmail,
  isEmailSubmitted,
  downloadError,
  downloadUrl,
  handleEmailSubmit,
}: CTASectionProps) {
  return (
    <section className='py-24 bg-gradient-to-b from-blue-600 via-blue-700 to-gray-900 relative overflow-hidden'>
      {/* Subtle background pattern */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,transparent_50%)]' />

      <div className='container mx-auto px-6 lg:px-8 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          {/* Floating badges */}
          <div className='relative'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='absolute -left-16 top-8 hidden lg:block'
            >
              <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3'>
                <div className='flex items-center gap-2'>
                  <Shield className='w-4 h-4 text-green-400' />
                  <span className='text-white text-sm font-medium'>Encrypted</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className='absolute -right-16 top-16 hidden lg:block'
            >
              <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3'>
                <div className='flex items-center gap-2'>
                  <Lock className='w-4 h-4 text-blue-300' />
                  <span className='text-white text-sm font-medium'>100% Private</span>
                </div>
              </div>
            </motion.div>

            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
                Take back control of
                <br />
                <span className='text-blue-200'>your notes</span>
              </h2>

              <p className='text-xl text-blue-100 mb-10 max-w-2xl mx-auto'>
                Join thousands who've chosen true privacy over corporate
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
                <Button
                  onClick={() =>
                    document
                      .getElementById('payment-section')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className='h-14 px-10 bg-white text-blue-600 hover:bg-blue-50 text-lg font-semibold rounded-lg shadow-xl transition-colors duration-200'
                >
                  <Download className='mr-2 h-5 w-5' />
                  Get Dash for Mac
                </Button>
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
      </div>
    </section>
  );
}
