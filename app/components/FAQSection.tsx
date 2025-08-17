'use client'

import React, { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How is Dash different from other notes apps?',
      answer:
        'Dash is the only notes app that keeps everything 100% on your device. No cloud servers, no data collection, no corporate surveillance. Your notes are encrypted and completely private.'
    },
    {
      question: 'Is Dash really free?',
      answer:
        'Dash is a one-time purchase with no subscriptions or hidden costs. We believe privacy is a fundamental right, not a premium feature.'
    },
    {
      question: 'How secure is the encryption?',
      answer:
        'Dash uses AES-256 encryption, the same standard used by banks and governments. Your notes are encrypted locally on your device before being saved, ensuring complete privacy.'
    },
    {
      question: 'What happens if I lose my device?',
      answer:
        'Since your notes are stored locally, losing your device means losing your notes. We recommend regularly exporting your notes as encrypted backups to external storage for safekeeping.'
    },
    {
      question: 'Can I sync between devices?',
      answer:
        "Dash doesn't offer cloud sync to maintain your privacy. However, you can export your notes as encrypted files and import them on other devices manually."
    },
    {
      question: "Why don't you offer cloud storage?",
      answer:
        "Cloud storage requires sending your data to external servers, which compromises privacy. Dash's core principle is keeping your data exclusively on your device where you have complete control."
    }
  ]

  return (
    <section id='faq' className='py-20 bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            Frequently asked questions
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Everything you need to know about Dash
          </p>
        </div>

        <div className='max-w-3xl mx-auto space-y-4'>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-hidden'
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className='w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors'
              >
                <span className='font-semibold text-gray-900 dark:text-white pr-4'>
                  {faq.question}
                </span>
                {openFaq === index ? (
                  <Minus className='h-5 w-5 text-gray-500 flex-shrink-0' />
                ) : (
                  <Plus className='h-5 w-5 text-gray-500 flex-shrink-0' />
                )}
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden'
                  >
                    <div className='px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed'>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
