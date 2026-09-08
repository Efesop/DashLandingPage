'use client';

import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type FAQItem = { question: string; answer: string };

// Homepage FAQ. Keep these answers identical to the FAQPage JSON-LD in app/page.tsx.
export const HOME_FAQS: FAQItem[] = [
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

type Props = {
  faqs?: FAQItem[];
  heading?: string;
  /** Pass an empty string to omit the line under the heading. */
  subheading?: string;
  id?: string;
};

export default function FAQSection({
  faqs = HOME_FAQS,
  heading = 'Frequently asked questions',
  subheading = 'Everything you need to know about Dash',
  id = 'faq',
}: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id={id} className='py-20 sm:py-24'>
      <div className='container mx-auto px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12 sm:mb-14 flex flex-col gap-3'
        >
          <h2 className='text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.035em] leading-[1.05] text-gray-900'>{heading}</h2>
          {subheading && <p className='text-[17px] text-gray-500'>{subheading}</p>}
        </motion.div>

        <div className='max-w-3xl mx-auto space-y-3'>
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.04 }}
              className='rounded-xl bg-white border border-gray-200 overflow-hidden'
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className='w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors'
                aria-expanded={openFaq === index}
              >
                <span className='font-semibold text-gray-900 pr-4'>{faq.question}</span>
                <div className='flex-shrink-0'>
                  {openFaq === index ? (
                    <Minus className='h-5 w-5 text-gray-700' aria-hidden='true' />
                  ) : (
                    <Plus className='h-5 w-5 text-gray-400' aria-hidden='true' />
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
                    <div className='px-6 pb-5 text-gray-600 leading-relaxed'>{faq.answer}</div>
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
