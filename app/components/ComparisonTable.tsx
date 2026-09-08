'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

type Row = { feature: string; dash: boolean; notion: boolean; evernote: boolean; obsidian: boolean };

const rows: Row[] = [
  { feature: 'Works fully offline', dash: true, notion: false, evernote: false, obsidian: true },
  { feature: 'No account required', dash: true, notion: false, evernote: false, obsidian: true },
  { feature: 'Zero tracking', dash: true, notion: false, evernote: false, obsidian: true },
  { feature: 'AES-256 note encryption', dash: true, notion: false, evernote: false, obsidian: false },
  { feature: 'No subscription required', dash: true, notion: false, evernote: false, obsidian: true },
  { feature: 'End-to-end encrypted sync', dash: true, notion: false, evernote: false, obsidian: true },
  { feature: 'Biometric lock', dash: true, notion: false, evernote: true, obsidian: false },
  { feature: 'Self-destructing notes', dash: true, notion: false, evernote: false, obsidian: false },
  { feature: 'Duress password', dash: true, notion: false, evernote: false, obsidian: false },
  { feature: 'Wiki-style [[links]]', dash: true, notion: true, evernote: false, obsidian: true },
  { feature: 'Local AI (on-device)', dash: true, notion: false, evernote: false, obsidian: false },
  { feature: 'Open source', dash: true, notion: false, evernote: false, obsidian: false },
];

const columns: { key: keyof Omit<Row, 'feature'>; label: string }[] = [
  { key: 'dash', label: 'Dash' },
  { key: 'notion', label: 'Notion' },
  { key: 'evernote', label: 'Evernote' },
  { key: 'obsidian', label: 'Obsidian' },
];

function Mark({ value }: { value: boolean }) {
  return value ? (
    <CheckCircle2 className='w-5 h-5 text-green-600 dark:text-green-400' aria-label='Yes' />
  ) : (
    <X className='w-[18px] h-[18px] text-gray-400 dark:text-gray-600' aria-label='No' />
  );
}

export default function ComparisonTable() {
  return (
    <section id='comparison' className='py-16 sm:py-20 bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-6 lg:px-8 flex flex-col gap-7'>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 lg:gap-10'
        >
          <h2 className='text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.035em] leading-[1.05] text-gray-900 dark:text-white'>
            How Dash compares
          </h2>
          <p className='text-[17px] text-gray-500 dark:text-gray-400 max-w-[40ch]'>
            The honest version. Notion and Obsidian are excellent at things Dash does not try to do.
          </p>
        </motion.div>

        <div className='overflow-x-auto rounded-[20px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950'>
          <table className='w-full min-w-[720px] border-collapse text-[15.5px]'>
            <thead>
              <tr className='bg-gray-50 dark:bg-gray-900 text-[12px] font-semibold uppercase tracking-[0.04em] text-gray-500 dark:text-gray-400'>
                <th scope='col' className='text-left font-semibold px-6 h-14 border-b border-gray-200 dark:border-gray-800'>
                  Feature
                </th>
                {columns.map((c) => (
                  <th
                    key={c.key}
                    scope='col'
                    className={`w-40 h-14 font-semibold border-b border-gray-200 dark:border-gray-800 ${
                      c.key === 'dash' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : ''
                    }`}
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i < rows.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}>
                  <th scope='row' className='text-left font-normal px-6 h-[54px] text-gray-900 dark:text-white'>
                    {row.feature}
                  </th>
                  {columns.map((c) => (
                    <td key={c.key} className={`h-[54px] ${c.key === 'dash' ? 'bg-blue-50/60 dark:bg-blue-900/20' : ''}`}>
                      <div className='flex items-center justify-center'>
                        <Mark value={row[c.key]} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
