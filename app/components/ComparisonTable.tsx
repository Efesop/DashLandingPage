'use client';

import React from 'react';
import { CheckCircle, X, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import GradientText from './ui/GradientText';

export default function ComparisonTable() {
  const comparisonData = [
    { feature: '100% Offline', dash: true, notion: false, evernote: false, obsidian: true },
    { feature: 'No Account Required', dash: true, notion: false, evernote: false, obsidian: true },
    { feature: 'Zero Tracking', dash: true, notion: false, evernote: false, obsidian: true },
    { feature: 'Military Encryption', dash: true, notion: false, evernote: false, obsidian: false },
    { feature: 'No Monthly Subscription', dash: true, notion: false, evernote: false, obsidian: false },
    { feature: 'Free to Sync', dash: true, notion: false, evernote: false, obsidian: false },
    { feature: 'Rich Text Editor', dash: true, notion: true, evernote: true, obsidian: true },
    { feature: 'No Cloud Dependencies', dash: true, notion: false, evernote: false, obsidian: true },
    { feature: 'Cross-Platform', dash: true, notion: true, evernote: true, obsidian: true },
  ];

  const renderCheckmark = (value: boolean, isDash: boolean = false) => {
    if (value) {
      return (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className={`flex items-center justify-center ${isDash ? 'text-green-400' : 'text-green-500'}`}
        >
          <CheckCircle className={`h-5 w-5 ${isDash ? 'drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]' : ''}`} />
        </motion.div>
      );
    }
    return (
      <div className='flex items-center justify-center'>
        <X className='h-5 w-5 text-gray-500 dark:text-gray-600' />
      </div>
    );
  };

  return (
    <section id='comparison' className='py-24 bg-gray-100 dark:bg-gray-900 relative overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl' />

      <div className='container mx-auto px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            How Dash <span className='text-blue-600 dark:text-blue-400'>compares</span>
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            See why privacy-conscious users choose Dash over alternatives
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='max-w-5xl mx-auto'
        >
          <GlassCard variant='light' className='overflow-hidden'>
            <div className='overflow-x-auto'>
              <table className='min-w-full'>
                {/* Header */}
                <thead>
                  <tr className='border-b border-gray-200/50 dark:border-gray-700/50'>
                    <th className='px-6 py-5 text-left text-sm font-semibold text-gray-900 dark:text-white'>
                      Feature
                    </th>
                    {/* Dash column - highlighted */}
                    <th className='px-6 py-5 text-center relative'>
                      <div className='absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent' />
                      <div className='relative flex flex-col items-center gap-1'>
                        <div className='flex items-center gap-1'>
                          <Crown className='w-4 h-4 text-yellow-500' />
                          <span className='text-sm font-bold text-blue-600 dark:text-blue-400'>
                            Dash
                          </span>
                        </div>
                      </div>
                    </th>
                    <th className='px-6 py-5 text-center text-sm font-semibold text-gray-500 dark:text-gray-400'>
                      Notion
                    </th>
                    <th className='px-6 py-5 text-center text-sm font-semibold text-gray-500 dark:text-gray-400'>
                      Evernote
                    </th>
                    <th className='px-6 py-5 text-center text-sm font-semibold text-gray-500 dark:text-gray-400'>
                      Obsidian
                    </th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody className='divide-y divide-gray-200/50 dark:divide-gray-700/50'>
                  {comparisonData.map((row, index) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className='hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors'
                    >
                      <td className='px-6 py-4 text-sm font-medium text-gray-900 dark:text-white'>
                        {row.feature}
                      </td>
                      {/* Dash column - highlighted */}
                      <td className='px-6 py-4 text-center relative'>
                        <div className='absolute inset-0 bg-blue-500/5' />
                        <div className='relative'>
                          {renderCheckmark(row.dash, true)}
                        </div>
                      </td>
                      <td className='px-6 py-4 text-center'>
                        {renderCheckmark(row.notion)}
                      </td>
                      <td className='px-6 py-4 text-center'>
                        {renderCheckmark(row.evernote)}
                      </td>
                      <td className='px-6 py-4 text-center'>
                        {renderCheckmark(row.obsidian)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary footer */}
            <div className='border-t border-gray-200/50 dark:border-gray-700/50 px-6 py-4 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5'>
              <div className='flex items-center justify-center gap-2 text-sm'>
                <CheckCircle className='w-4 h-4 text-green-500' />
                <span className='text-gray-600 dark:text-gray-400'>
                  Dash leads in{' '}
                  <span className='font-semibold text-gray-900 dark:text-white'>
                    privacy-focused features
                  </span>
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
