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
} from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingOrbs from './ui/FloatingOrbs';
import GlassCard from './ui/GlassCard';

export default function FeatureShowcase() {
  return (
    <section className='py-24 bg-slate-900 relative overflow-hidden'>
      {/* Background effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' />
      <FloatingOrbs variant='dark' density='low' />

      {/* Subtle grid pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0' style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className='container mx-auto px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='inline-flex items-center rounded-full bg-slate-800 border border-slate-700 px-4 py-2 text-slate-300 mb-6'
          >
            <Sparkles className='mr-2 h-4 w-4 text-blue-400' />
            <span className='text-sm font-medium'>Everything you need</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-5xl md:text-6xl font-bold text-white mb-6'
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
            <GlassCard variant='dark' hover={false} className='p-8'>
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
                    <div className='flex items-center gap-2 bg-slate-700/50 px-3 py-2 rounded-lg'>
                      <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                      <span className='text-sm text-slate-300'>200k+ iterations</span>
                    </div>
                    <div className='flex items-center gap-2 bg-slate-700/50 px-3 py-2 rounded-lg'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse' />
                      <span className='text-sm text-slate-300'>Local key generation</span>
                    </div>
                  </div>
                </div>

                {/* Encryption Demo */}
                <div className='bg-slate-900 rounded-xl border border-slate-700 overflow-hidden'>
                  <div className='flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700'>
                    <div className='flex items-center gap-1.5'>
                      <div className='w-2.5 h-2.5 rounded-full bg-red-500' />
                      <div className='w-2.5 h-2.5 rounded-full bg-yellow-500' />
                      <div className='w-2.5 h-2.5 rounded-full bg-green-500' />
                    </div>
                    <span className='text-xs text-slate-400 ml-2'>Encryption Demo</span>
                  </div>
                  <div className='p-5 space-y-4'>
                    <div>
                      <div className='text-xs text-slate-400 mb-2 flex items-center gap-2'>
                        <span className='w-1.5 h-1.5 bg-green-500 rounded-full' />
                        Your note:
                      </div>
                      <div className='text-white bg-slate-800 rounded-lg p-3 text-sm border border-slate-700'>
                        "Meeting with whistleblower at 3pm..."
                      </div>
                    </div>
                    <div className='text-center py-1'>
                      <ArrowDown className='w-4 h-4 text-blue-400 mx-auto animate-bounce' />
                    </div>
                    <div>
                      <div className='text-xs text-slate-400 mb-2 flex items-center gap-2'>
                        <span className='w-1.5 h-1.5 bg-blue-500 rounded-full' />
                        Encrypted (AES-256):
                      </div>
                      <div className='text-blue-400 bg-slate-800 rounded-lg p-3 text-xs font-mono break-all border border-blue-500/20'>
                        U2FsdGVkX1+vupppZksvRf5pq5g5XjFRIipRkwB0K1Y96Qsv2Lm+31cmzaAILwyt
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Offline Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard variant='dark' hover={false} className='p-8 h-full relative'>
              {/* Status badge */}
              <div className='absolute top-4 right-4'>
                <div className='flex items-center gap-2 bg-emerald-500/10 rounded-full px-3 py-1 border border-emerald-500/20'>
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
                whether you're in airplane mode or off the grid.
              </p>

              <div className='space-y-3'>
                {[
                  'Lightning fast access',
                  'No server dependencies',
                  'Works anywhere',
                ].map((feature) => (
                  <div key={feature} className='flex items-center gap-3'>
                    <CheckCircle className='w-4 h-4 text-emerald-400' />
                    <span className='text-slate-300 text-sm'>{feature}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Privacy Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard variant='dark' hover={false} className='p-8 h-full'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-3 bg-blue-500/20 rounded-xl border border-blue-500/30'>
                  <Eye className='w-6 h-6 text-blue-400' />
                </div>
                <h3 className='text-2xl font-bold text-white'>
                  Zero Tracking
                </h3>
              </div>

              <p className='text-slate-300 mb-8 leading-relaxed'>
                We don't collect analytics, track usage, or store any data
                about you. Your privacy is absolute.
              </p>

              <div className='space-y-3'>
                <div className='flex items-center justify-between p-3 bg-slate-700/50 rounded-lg'>
                  <span className='text-slate-300 text-sm'>Data collection</span>
                  <div className='flex items-center gap-2'>
                    <X className='w-4 h-4 text-red-400' />
                    <span className='text-red-400 text-sm'>Zero</span>
                  </div>
                </div>
                <div className='flex items-center justify-between p-3 bg-slate-700/50 rounded-lg'>
                  <span className='text-slate-300 text-sm'>User tracking</span>
                  <div className='flex items-center gap-2'>
                    <X className='w-4 h-4 text-red-400' />
                    <span className='text-red-400 text-sm'>None</span>
                  </div>
                </div>
                <div className='flex items-center justify-between p-3 bg-slate-700/50 rounded-lg'>
                  <span className='text-slate-300 text-sm'>Your control</span>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span className='text-green-400 text-sm'>Complete</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
