'use client';

import React from 'react';
import {
  Shield,
  HardDrive,
  Eye,
  Sparkles,
  ArrowDown,
  CheckCircle,
  X,
  Lock,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeatureShowcase() {
  return (
    <section id='features' className='py-24 bg-slate-900 relative overflow-hidden'>
      {/* Background effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' />
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl' />

      <div className='container mx-auto px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-slate-300 mb-6'
          >
            <Sparkles className='mr-2 h-4 w-4 text-blue-400' />
            <span className='text-sm font-medium'>Everything you need</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-4xl md:text-5xl font-bold text-white mb-6'
          >
            Private notes,{' '}
            <span className='text-blue-400'>perfected</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-slate-300 max-w-3xl mx-auto'
          >
            All the power you need, with none of the privacy compromises
          </motion.p>
        </div>

        {/* Main feature grid */}
        <div className='grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
          {/* Large feature - Encryption */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:col-span-2'
          >
            <div className='bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 relative overflow-hidden'>
              {/* Gradient accent */}
              <div className='absolute top-0 right-0 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-purple-500' />

              <div className='grid lg:grid-cols-2 gap-8 items-center'>
                <div>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='p-3 bg-blue-500/20 rounded-xl border border-blue-500/30'>
                      <Shield className='w-8 h-8 text-blue-400' />
                    </div>
                    <h3 className='text-3xl font-bold text-white'>
                      Military-Grade Encryption
                    </h3>
                  </div>
                  <p className='text-lg text-slate-300 mb-6 leading-relaxed'>
                    Every note is protected with AES-256 encryption before it
                    touches your storage. The same standard trusted by banks
                    and governments worldwide.
                  </p>
                  <div className='flex flex-wrap items-center gap-4'>
                    <div className='flex items-center gap-2 bg-slate-700/50 border border-slate-600/50 px-3 py-2 rounded-full'>
                      <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                      <span className='text-sm text-slate-300'>600k iterations</span>
                    </div>
                    <div className='flex items-center gap-2 bg-slate-700/50 border border-slate-600/50 px-3 py-2 rounded-full'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse' />
                      <span className='text-sm text-slate-300'>Local key generation</span>
                    </div>
                  </div>
                </div>

                {/* Encryption Demo in Browser Frame */}
                <div className='bg-slate-800/60 border border-slate-700/50 rounded-xl overflow-hidden'>
                  {/* Window chrome */}
                  <div className='flex items-center justify-between px-4 py-2.5 bg-slate-800 border-b border-slate-700/50'>
                    <div className='flex items-center gap-1.5'>
                      <div className='w-3 h-3 rounded-full bg-[#ff5f57]' />
                      <div className='w-3 h-3 rounded-full bg-[#febc2e]' />
                      <div className='w-3 h-3 rounded-full bg-[#28c840]' />
                    </div>
                    <div className='flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-700/50 border border-slate-600/50'>
                      <Lock className='w-2.5 h-2.5 text-green-400' />
                      <span className='text-[11px] text-slate-400 font-medium'>
                        Dash - Encryption
                      </span>
                    </div>
                    <div className='w-[44px]' />
                  </div>

                  <div className='p-6'>
                    <div className='space-y-4'>
                      <div>
                        <div className='text-xs text-slate-400 mb-2 flex items-center gap-2'>
                          <span className='w-1.5 h-1.5 bg-green-500 rounded-full' />
                          Your note:
                        </div>
                        <div className='text-white bg-slate-800/80 rounded-lg p-3 text-sm border border-slate-700/50'>
                          &ldquo;Meeting with whistleblower at 3pm...&rdquo;
                        </div>
                      </div>
                      <div className='text-center py-2'>
                        <div className='inline-flex items-center gap-2 text-xs text-slate-500'>
                          <ArrowDown className='w-4 h-4 text-blue-400 animate-bounce' />
                          <span>AES-256 Encryption</span>
                          <ArrowDown className='w-4 h-4 text-blue-400 animate-bounce' />
                        </div>
                      </div>
                      <div>
                        <div className='text-xs text-slate-400 mb-2 flex items-center gap-2'>
                          <span className='w-1.5 h-1.5 bg-blue-500 rounded-full' />
                          Encrypted output:
                        </div>
                        <div className='text-blue-400 bg-slate-800/80 rounded-lg p-3 text-xs font-mono break-all border border-blue-500/20'>
                          U2FsdGVkX1+vupppZksvRf5pq5g5XjFRIipRkwB0K1Y96Qsv2Lm+31cmzaAILwyt
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Offline Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className='h-full bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 relative overflow-hidden group'>
              {/* Gradient accent */}
              <div className='absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent' />

              {/* Status badge */}
              <div className='absolute top-4 right-4'>
                <div className='flex items-center gap-2 bg-slate-700/50 border border-emerald-500/30 px-3 py-1.5 rounded-full'>
                  <div className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse' />
                  <span className='text-emerald-400 text-xs font-medium'>
                    Always Available
                  </span>
                </div>
              </div>

              <div className='flex items-center gap-3 mb-6'>
                <div className='p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/30'>
                  <HardDrive className='w-6 h-6 text-emerald-400' />
                </div>
                <h3 className='text-2xl font-bold text-white'>
                  100% Offline
                </h3>
              </div>

              <p className='text-slate-300 mb-8 leading-relaxed'>
                No internet? No problem. Your notes are always accessible,
                whether you&apos;re in airplane mode or off the grid.
              </p>

              <div className='space-y-3'>
                {[
                  'Lightning fast access',
                  'No server dependencies',
                  'Works anywhere',
                ].map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className='flex items-center gap-3 bg-slate-700/40 border border-slate-600/30 px-4 py-3 rounded-lg'
                  >
                    <CheckCircle className='w-4 h-4 text-emerald-400' />
                    <span className='text-slate-300 text-sm'>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Privacy Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className='h-full bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 relative overflow-hidden group'>
              {/* Gradient accent */}
              <div className='absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent' />

              <div className='flex items-center gap-3 mb-6'>
                <div className='p-3 bg-purple-500/20 rounded-xl border border-purple-500/30'>
                  <Eye className='w-6 h-6 text-purple-400' />
                </div>
                <h3 className='text-2xl font-bold text-white'>
                  Zero Tracking
                </h3>
              </div>

              <p className='text-slate-300 mb-8 leading-relaxed'>
                We don&apos;t collect analytics, track usage, or store any data
                about you. Your privacy is absolute.
              </p>

              <div className='space-y-3'>
                <div className='flex items-center justify-between p-4 bg-slate-700/40 border border-slate-600/30 rounded-lg'>
                  <span className='text-slate-300 text-sm'>Data collection</span>
                  <div className='flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20'>
                    <X className='w-3 h-3 text-red-400' />
                    <span className='text-red-400 text-xs font-medium'>Zero</span>
                  </div>
                </div>
                <div className='flex items-center justify-between p-4 bg-slate-700/40 border border-slate-600/30 rounded-lg'>
                  <span className='text-slate-300 text-sm'>User tracking</span>
                  <div className='flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20'>
                    <X className='w-3 h-3 text-red-400' />
                    <span className='text-red-400 text-xs font-medium'>None</span>
                  </div>
                </div>
                <div className='flex items-center justify-between p-4 bg-slate-700/40 border border-slate-600/30 rounded-lg'>
                  <span className='text-slate-300 text-sm'>Your control</span>
                  <div className='flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20'>
                    <CheckCircle className='w-3 h-3 text-green-400' />
                    <span className='text-green-400 text-xs font-medium'>Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
