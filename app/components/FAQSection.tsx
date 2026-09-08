'use client';

import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How is Dash different from other notes apps?',
      answer:
        'Dash keeps everything on your device by default. No cloud servers, no data collection, no corporate surveillance. If you turn on the optional Dash Sync, your notes are encrypted before they leave your device, so even our relay cannot read them.',
    },
    {
      question: 'How much is Dash?',
      answer:
        'The Mac app is a one-time $14.99 purchase with lifetime updates. The iPhone app and the web app are free. The only subscription is optional Dash Sync — end-to-end encrypted sync across your devices for $4.99/month or $47.99/year with a 7-day free trial. Notes, encryption, and everything else work without it.',
    },
    {
      question: 'How secure is the encryption?',
      answer:
        'Dash uses AES-256 encryption, the same standard used by banks and governments. Your notes are encrypted locally on your device before being saved, ensuring complete privacy.',
    },
    {
      question: 'What happens if I lose my device?',
      answer:
        'Since your notes are stored locally, losing your device means losing your notes. We recommend regularly exporting your notes as encrypted backups to external storage for safekeeping.',
    },
    {
      question: 'Can I sync between devices?',
      answer:
        'Yes, two ways. Dash Sync is an optional subscription that keeps notes, folders, tags, attachments and version history in step across Mac, iPhone, iPad and the web. Everything is encrypted on your device before upload, so the relay only ever stores ciphertext it cannot read. Or, with no subscription, export an encrypted .dashpack file from one device and import it on another.',
    },
    {
      question: 'Why is sync a subscription?',
      answer:
        'Running the sync relay costs real money, so we charge for it where the cost lives instead of raising the price of the app for everyone. Sync is off by default: without it Dash never talks to a server, and with it the server only ever sees encrypted blobs.',
    },
    {
      question: 'Does Dash support Touch ID or biometric unlock?',
      answer:
        'Yes. On macOS, Dash supports Touch ID, and on iPhone Face ID (or Touch ID), to unlock the app or individual locked pages. You can also set auto-lock timers (1, 5, 15, or 30 minutes) or lock instantly with Cmd+Shift+L on Mac. A master password is available as a fallback.',
    },
  ];

  return (
    <section id='faq' className='py-24'>
      <div className='container mx-auto px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            Frequently asked questions
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Everything you need to know about Dash
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className='max-w-3xl mx-auto space-y-4'>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className='rounded-xl bg-white border border-gray-200 overflow-hidden'
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className='w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors'
              >
                <span className='font-semibold text-gray-900 dark:text-white pr-4'>
                  {faq.question}
                </span>
                <div className='flex-shrink-0'>
                  {openFaq === index ? (
                    <Minus className='h-5 w-5 text-gray-700' />
                  ) : (
                    <Plus className='h-5 w-5 text-gray-400' />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='overflow-hidden'
                  >
                    <div className='px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed'>
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
  );
}
