import React from 'react'
import { Shield, HardDrive, Eye, Sparkles, ArrowDown, CheckCircle, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FeatureShowcase() {
  return (
    <section className='py-24 bg-slate-900 relative overflow-hidden'>
      {/* Background pattern */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]' />

      <div className='container mx-auto px-6 lg:px-8 relative'>
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center rounded-full bg-slate-800 border border-slate-700 px-4 py-2 text-slate-300 mb-6'
          >
            <Sparkles className='mr-2 h-4 w-4 text-blue-400' />
            <span className='text-sm font-medium'>Everything you need</span>
          </motion.div>

          <h2 className='text-5xl md:text-6xl font-bold text-white mb-6'>
            Private notes,{' '}
            <span className='bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>
              perfected
            </span>
          </h2>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
            All the power you need, with none of the privacy compromises
          </p>
        </div>

        {/* Main feature grid */}
        <div className='grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
          {/* Large feature - Encryption */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 relative overflow-hidden'
          >
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
                <div className='flex items-center gap-4 text-sm text-slate-400'>
                  <div className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                    <span>200k+ iterations</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse' />
                    <span>Local key generation</span>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <div className='bg-slate-900 rounded-xl border border-slate-600 p-6'>
                  <div className='space-y-4'>
                    <div>
                      <div className='text-xs text-slate-400 mb-2'>
                        Your note:
                      </div>
                      <div className='text-white bg-slate-800 rounded-lg p-3 text-sm'>
                        "Meeting with whistleblower at 3pm..."
                      </div>
                    </div>
                    <div className='text-center'>
                      <ArrowDown className='w-5 h-5 text-blue-400 mx-auto animate-bounce' />
                    </div>
                    <div>
                      <div className='text-xs text-slate-400 mb-2'>
                        Encrypted (AES-256):
                      </div>
                      <div className='text-blue-400 bg-slate-800 rounded-lg p-3 text-xs font-mono break-all'>
                        U2FsdGVkX1+vupppZksvRf5pq5g5XjFRIipRkwB0K1Y96Qsv2Lm+31cmzaAILwyt
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className='bg-gradient-to-br from-emerald-900/30 to-slate-900 rounded-2xl border border-slate-700 p-8 relative overflow-hidden'
          >
            <div className='absolute top-4 right-4'>
              <div className='flex items-center gap-2 bg-emerald-500/20 rounded-full px-3 py-1 border border-emerald-500/30'>
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
                'Works anywhere'
              ].map((feature, i) => (
                <div key={feature} className='flex items-center gap-3'>
                  <CheckCircle className='w-4 h-4 text-emerald-400' />
                  <span className='text-slate-300 text-sm'>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Privacy Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='bg-gradient-to-br from-purple-900/30 to-slate-900 rounded-2xl border border-slate-700 p-8 relative overflow-hidden'
          >
            <div className='flex items-center gap-3 mb-6'>
              <div className='p-3 bg-purple-500/20 rounded-xl border border-purple-500/30'>
                <Eye className='w-6 h-6 text-purple-400' />
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
              <div className='flex items-center justify-between p-3 bg-slate-800 rounded-lg'>
                <span className='text-slate-300 text-sm'>
                  Data collection
                </span>
                <div className='flex items-center gap-2'>
                  <X className='w-4 h-4 text-red-400' />
                  <span className='text-red-400 text-sm'>Zero</span>
                </div>
              </div>
              <div className='flex items-center justify-between p-3 bg-slate-800 rounded-lg'>
                <span className='text-slate-300 text-sm'>
                  User tracking
                </span>
                <div className='flex items-center gap-2'>
                  <X className='w-4 h-4 text-red-400' />
                  <span className='text-red-400 text-sm'>None</span>
                </div>
              </div>
              <div className='flex items-center justify-between p-3 bg-slate-800 rounded-lg'>
                <span className='text-slate-300 text-sm'>Your control</span>
                <div className='flex items-center gap-2'>
                  <CheckCircle className='w-4 h-4 text-green-400' />
                  <span className='text-green-400 text-sm'>Complete</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
