import React from 'react'
import { CheckCircle, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ComparisonTable() {
  const comparisonData = [
    {
      feature: '100% Offline',
      dash: true,
      notion: false,
      evernote: false,
      obsidian: true
    },
    {
      feature: 'No Account Required',
      dash: true,
      notion: false,
      evernote: false,
      obsidian: true
    },
    {
      feature: 'Zero Tracking',
      dash: true,
      notion: false,
      evernote: false,
      obsidian: true
    },
    {
      feature: 'Military Encryption',
      dash: true,
      notion: false,
      evernote: false,
      obsidian: false
    },
    {
      feature: 'No Monthly Subscription',
      dash: true,
      notion: false,
      evernote: false,
      obsidian: false
    },
    {
      feature: 'Free to Sync',
      dash: true,
      notion: false,
      evernote: false,
      obsidian: false
    },
    {
      feature: 'Rich Text Editor',
      dash: true,
      notion: true,
      evernote: true,
      obsidian: true
    },
    {
      feature: 'No Cloud Dependencies',
      dash: true,
      notion: false,
      evernote: false,
      obsidian: true
    },
    {
      feature: 'Cross-Platform',
      dash: true,
      notion: true,
      evernote: true,
      obsidian: true
    }
  ]

  const renderCheckmark = (value: boolean) => {
    return value ? (
      <CheckCircle className='mx-auto h-5 w-5 text-green-500' />
    ) : (
      <X className='mx-auto h-5 w-5 text-gray-300 dark:text-gray-600' />
    )
  }

  return (
    <section id='comparison' className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            How Dash compares
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            See why privacy-conscious users choose Dash over alternatives
          </p>
        </div>

        <div className='max-w-5xl mx-auto'>
          <div className='overflow-x-auto'>
            <div className='inline-block min-w-full align-middle'>
              <div className='overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg'>
                <table className='min-w-full'>
                  <thead className='bg-gray-50 dark:bg-gray-800'>
                    <tr>
                      <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white'>
                        Feature
                      </th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-blue-600 dark:text-blue-400'>
                        Dash
                      </th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-500 dark:text-gray-400'>
                        Notion
                      </th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-500 dark:text-gray-400'>
                        Evernote
                      </th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-500 dark:text-gray-400'>
                        Obsidian
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                    {comparisonData.map((row, index) => (
                      <motion.tr
                        key={row.feature}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className='hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      >
                        <td className='px-6 py-4 text-sm font-medium text-gray-900 dark:text-white'>
                          {row.feature}
                        </td>
                        <td className='px-6 py-4 text-center'>
                          {renderCheckmark(row.dash)}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
