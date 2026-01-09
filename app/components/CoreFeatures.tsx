'use client';

import React, { useState, useEffect } from 'react';
import { Edit3, Search, Folder, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoreFeatures() {
  const [typedText, setTypedText] = useState('');

  // Faster typing animation
  const textToType = 'My private thoughts and sensitive information...';
  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let pauseCounter = 0;

    const timer = setInterval(() => {
      if (pauseCounter > 0) {
        pauseCounter--;
        return;
      }

      if (!isDeleting) {
        if (i < textToType.length) {
          setTypedText(textToType.slice(0, i + 1));
          i++;
        } else {
          pauseCounter = 15; // Short pause before deleting
          isDeleting = true;
        }
      } else {
        if (i > 0) {
          setTypedText(textToType.slice(0, i));
          i--;
        } else {
          pauseCounter = 8; // Short pause before typing again
          isDeleting = false;
        }
      }
    }, isDeleting ? 30 : 80); // Much faster deletion

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Edit3,
      title: 'Rich text editing',
      desc: 'Format your thoughts beautifully with a powerful editor',
    },
    {
      icon: Search,
      title: 'Instant search',
      desc: 'Find any note in milliseconds across your entire library',
    },
    {
      icon: Folder,
      title: 'Smart organization',
      desc: 'Folders, tags, and categories to structure your knowledge',
    },
  ];

  return (
    <section className='py-24 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            Your thoughts are yours.
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Dash stores notes privately on your device, so you can access
            them quickly, even offline. No one else can read them, not even
            us.
          </p>
        </motion.div>

        {/* Interactive Feature Demo */}
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left - Features list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
              Write with confidence.
            </h3>
            <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
              Rich text editing, powerful organization, and lightning-fast
              search - all while keeping your data completely private.
            </p>

            <div className='space-y-5'>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='flex gap-4 items-start'
                >
                  <div className='flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center'>
                    <feature.icon className='w-5 h-5 text-blue-600 dark:text-blue-400' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 dark:text-white mb-1'>
                      {feature.title}
                    </h4>
                    <p className='text-gray-600 dark:text-gray-400 text-sm'>
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Live typing demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='relative'
          >
            <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden'>
              {/* Window chrome */}
              <div className='flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700'>
                <div className='flex items-center gap-1.5'>
                  <div className='w-3 h-3 rounded-full bg-red-500' />
                  <div className='w-3 h-3 rounded-full bg-yellow-500' />
                  <div className='w-3 h-3 rounded-full bg-green-500' />
                </div>
                <span className='text-sm text-gray-500 dark:text-gray-400 ml-3 font-medium'>
                  Dash Notes
                </span>
              </div>

              {/* Content */}
              <div className='p-6'>
                <div className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                  Project Ideas
                </div>
                <div className='min-h-[80px] text-gray-700 dark:text-gray-300 leading-relaxed'>
                  {typedText}
                  <span className='inline-block w-0.5 h-5 bg-blue-500 ml-0.5 animate-pulse' />
                </div>

                <div className='flex items-center gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-gray-700'>
                  <Lock className='w-4 h-4 text-green-500' />
                  <span className='text-xs text-gray-500 dark:text-gray-400'>
                    Encrypted and saved locally on your device
                  </span>
                </div>
              </div>
            </div>

            {/* Auto-save indicator */}
            <div className='absolute -bottom-3 -right-3 bg-white dark:bg-gray-900 rounded-lg px-3 py-1.5 shadow-lg border border-gray-200 dark:border-gray-700'>
              <div className='flex items-center gap-2 text-sm'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                <span className='font-medium text-gray-900 dark:text-white text-xs'>
                  Auto-saved
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
