'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { Lock, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Input } from './ui/input'
import { Button } from './ui/button'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import type Player from 'video.js/dist/types/player'

interface HeroSectionProps {
  email: string
  setEmail: (email: string) => void
  isEmailSubmitted: boolean
  downloadError: string
  downloadUrl: string
  handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function HeroSection({
  email,
  setEmail,
  isEmailSubmitted,
  downloadError,
  downloadUrl,
  handleEmailSubmit
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const playerRef = useRef<Player | null>(null)

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current
      if (!videoElement) return

      playerRef.current = videojs(videoElement, {
        autoplay: true,
        muted: true,
        controls: false,
        responsive: true,
        fluid: true,
        sources: [{ src: '/images/Dash.mp4', type: 'video/mp4' }]
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose()
        playerRef.current = null
      }
    }
  }, [])

  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950'>
      <div className='container mx-auto px-6 lg:px-8 pt-20 pb-20'>
        <div className='grid lg:grid-cols-2 gap-20 items-center'>
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-10'
          >
            <div className='inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/50 px-4 py-2 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'>
              <Lock className='mr-2 h-4 w-4' />
              <span className='text-sm font-medium'>
                Military-grade privacy
              </span>
              <svg
                className='ml-2 h-4 w-4'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z' />
                <path d='M15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701' />
              </svg>
            </div>

            <div className='space-y-8'>
              <h1 className='text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl leading-none'>
                Own Your Notes
                <br />
                <span className='text-blue-600 dark:text-blue-400'>
                  For Real
                </span>
              </h1>

              <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl'>
                The only notes app that puts <strong>you</strong> in
                complete control. No cloud, no tracking, no corporate
                surveillance.
              </p>
            </div>

            <div className='flex flex-wrap gap-8 text-gray-600 dark:text-gray-400'>
              <div className='flex items-center gap-3'>
                <CheckCircle className='w-5 h-5 text-green-600' />
                <span className='font-medium'>No sign-up needed</span>
              </div>
              <div className='flex items-center gap-3'>
                <CheckCircle className='w-5 h-5 text-green-600' />
                <span className='font-medium'>Works 100% offline</span>
              </div>
              <div className='flex items-center gap-3'>
                <CheckCircle className='w-5 h-5 text-green-600' />
                <span className='font-medium'>Private by design</span>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-6 pt-6'>
              {!isEmailSubmitted ? (
                <form
                  onSubmit={handleEmailSubmit}
                  className='flex w-full max-w-lg gap-4'
                >
                  <Input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    required
                    className='flex-1 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    aria-label='Email address for download'
                  />
                  <Link
                    href='https://buy.stripe.com/cN29B00000000000000000000'
                    className='h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold inline-flex items-center justify-center rounded-md'
                  >
                    Buy now
                  </Link>
                </form>
              ) : (
                <Button>Redirect to payment</Button>
              )}
            </div>

            <p className='text-gray-500 dark:text-gray-400'>
              No account required • Works on Mac
            </p>
          </motion.div>

          {/* Right side - Video prominently featured */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative scale-110'
          >
            <div className='relative'>
              {/* Video container */}
              <div className='relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'>
                <div data-vjs-player className='aspect-video'>
                  <video
                    ref={videoRef}
                    className='video-js w-full h-full rounded-2xl'
                    playsInline
                    muted
                    aria-label='Dash app demonstration video'
                  />
                </div>
              </div>

              {/* Floating indicators */}
              <div className='absolute -top-4 -right-4 rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-3'>
                <div className='flex items-center gap-2 text-sm'>
                  <div className='h-2 w-2 rounded-full bg-green-500 animate-pulse' />
                  <span className='font-medium text-gray-900 dark:text-white'>
                    100% Private
                  </span>
                </div>
              </div>

              <div className='absolute -bottom-4 -left-4 rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-3'>
                <div className='flex items-center gap-2 text-sm'>
                  <Lock className='h-4 w-4 text-blue-600' />
                  <span className='font-medium text-gray-900 dark:text-white'>
                    Bank-level security
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
