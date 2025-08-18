'use client'

import React, { useState, useEffect } from 'react'
import { Edit3, Search, Folder, Lock } from 'lucide-react'

export default function CoreFeatures() {
  const [typedText, setTypedText] = useState('')

  // Fixed typing animation
  const textToType = 'My private thoughts and sensitive information...'
  useEffect(() => {
    let i = 0
    let isDeleting = false

    const timer = setInterval(
      () => {
        if (!isDeleting) {
          if (i < textToType.length) {
            setTypedText(textToType.slice(0, i + 1))
            i++
          } else {
            isDeleting = true
            setTimeout(() => {}, 2000) // Pause before deleting
          }
        } else {
          if (i > 0) {
            setTypedText(textToType.slice(0, i))
            i--
          } else {
            isDeleting = false
            setTimeout(() => {}, 1000) // Pause before typing again
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      icon: Edit3,
      title: 'Rich text editing',
      desc: 'Format your thoughts beautifully with a powerful editor'
    },
    {
      icon: Search,
      title: 'Instant search',
      desc: 'Find any note in milliseconds across your entire library'
    },
    {
      icon: Folder,
      title: 'Smart organization',
      desc: 'Folders, tags, and categories to structure your knowledge'
    }
  ]

  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            Your thoughts are yours.
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Dash stores notes privately on your device, so you can access
            them quickly, even offline. No one else can read them, not even
            us.
          </p>
        </div>

        {/* Interactive Feature Demo */}
        <div className='grid lg:grid-cols-2 gap-16 items-center mb-16'>
          <div>
            <h3 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
              Write with confidence.
            </h3>
            <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
              Rich text editing, powerful organization, and lightning-fast
              search - all while keeping your data completely private.
            </p>

            <div className='space-y-6'>
              {features.map((feature, index) => (
                <div key={feature.title} className='flex gap-4'>
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center'>
                      <feature.icon className='w-5 h-5 text-blue-600' />
                    </div>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 dark:text-white mb-1'>
                      {feature.title}
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300'>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live typing demo */}
          <div className='relative'>
            <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6'>
              <div className='flex items-center gap-2 mb-6'>
                <div className='w-3 h-3 bg-red-500 rounded-full' />
                <div className='w-3 h-3 bg-yellow-500 rounded-full' />
                <div className='w-3 h-3 bg-green-500 rounded-full' />
                <span className='text-sm text-gray-500 ml-3 font-medium'>
                  Dash Notes
                </span>
              </div>

              <div className='space-y-4'>
                <div className='text-lg font-semibold text-gray-900 dark:text-white'>
                  Project Ideas
                </div>
                <div className='min-h-[80px] text-gray-900 dark:text-white'>
                  {typedText}
                  <span className='animate-pulse'>|</span>
                </div>

                <div className='flex items-center gap-3 text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 rounded-lg p-3'>
                  <Lock className='w-4 h-4 text-green-600' />
                  <span>Encrypted and saved locally on your device</span>
                </div>
              </div>
            </div>

            <div className='absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-2'>
              <div className='flex items-center gap-2 text-sm'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                <span className='font-medium text-gray-900 dark:text-white'>
                  Auto-saved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
