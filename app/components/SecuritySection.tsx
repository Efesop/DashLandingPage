'use client';

import React from 'react';
import { Shield, Key, Eye, Database, Lock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'AES-256 encryption',
      description:
        'The gold standard used by banks and governments to protect the most sensitive data worldwide.',
    },
    {
      icon: Key,
      title: 'Your keys, your control',
      description:
        'Encryption keys are generated and stored only on your device. We never see or store them.',
    },
    {
      icon: Eye,
      title: 'Zero-knowledge design',
      description:
        "Even we can't read your notes. Your data is encrypted before it touches our code.",
    },
    {
      icon: Database,
      title: 'Local-only storage',
      description:
        'Notes never leave your device. No cloud uploads, no external dependencies.',
    },
  ];

  const technicalSpecs = [
    { label: 'Encryption', value: 'AES-256-GCM' },
    { label: 'Key Derivation', value: 'PBKDF2-SHA256 (200k iterations)' },
    { label: 'Storage', value: 'Local device only' },
    { label: 'Transmission', value: 'Never transmitted' },
  ];

  return (
    <section
      id='security'
      className='py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950'
    >
      <div className='container mx-auto px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            Bank-vault security for your{' '}
            <span className='text-blue-600 dark:text-blue-400'>thoughts</span>
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Your privacy is mathematically guaranteed with military-grade
            encryption and zero-knowledge architecture.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
          {/* Left - Security Features */}
          <div className='space-y-6'>
            {securityFeatures.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='flex gap-4'
              >
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center'>
                    <item.icon className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                  </div>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Technical Specs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className='bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden'>
              <div className='px-6 py-5 border-b border-gray-100 dark:border-gray-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center'>
                    <Shield className='w-5 h-5 text-blue-600 dark:text-blue-400' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                      Technical Security
                    </h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      For the technically minded
                    </p>
                  </div>
                </div>
              </div>

              <div className='p-6 space-y-4'>
                {technicalSpecs.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className='flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0'
                  >
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span className='font-medium text-gray-900 dark:text-white'>
                        {spec.label}
                      </span>
                    </div>
                    <span className='text-gray-600 dark:text-gray-400 font-mono text-xs'>
                      {spec.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className='px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800'>
                <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
                  <Lock className='w-4 h-4 text-green-500' />
                  <span>Open-source and auditable</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
