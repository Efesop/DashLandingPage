'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lock, Clock, WifiOff, UserX, Smartphone, User } from 'lucide-react';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';

export const APP_STORE_URL = 'https://apps.apple.com/app/id6766192836';

const scrollToPayment = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
};

const AVATARS = [
  'bg-blue-100 text-blue-500',
  'bg-sky-100 text-sky-500',
  'bg-indigo-100 text-indigo-500',
  'bg-slate-200 text-slate-500',
  'bg-blue-200 text-blue-600',
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      playerRef.current = videojs(videoElement, {
        autoplay: true,
        muted: true,
        controls: false,
        responsive: true,
        fluid: true,
        loop: true,
        preload: 'metadata',
        poster: '/images/Dashdemo2-poster.jpg',
        sources: [{ src: '/images/Dashdemo2-1280.mp4', type: 'video/mp4' }],
      });
    }
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <section className='relative bg-white dark:bg-gray-950'>
      {/* Headline block */}
      <div className='container mx-auto px-6 lg:px-8 pt-16 sm:pt-24'>
        <div className='max-w-4xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-7'>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-300'
          >
            <span className='w-[7px] h-[7px] rounded-full bg-green-600' aria-hidden='true' />
            Private notes for Mac and iPhone
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className='text-5xl sm:text-6xl lg:text-[80px] font-extrabold tracking-[-0.045em] leading-[1.0] text-gray-900 dark:text-white text-balance max-w-[13ch]'
          >
            Your notes are none of our business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className='text-lg sm:text-[21px] leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl'
          >
            Dash is an encrypted notes app for Mac and iPhone that keeps everything on your device. No account, no cloud
            unless you ask for it, and a Mac app you buy once.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className='flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 w-full sm:w-auto'
          >
            <a
              href='#payment-section'
              onClick={scrollToPayment}
              className='inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-4 rounded-[10px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base transition-colors'
            >
              Get Dash for Mac
              <span className='font-normal opacity-85'>$14.99, once</span>
            </a>
            <Link
              href={APP_STORE_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-4 rounded-[10px] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium text-base hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors'
            >
              <Smartphone className='w-4 h-4' />
              Free on iPhone
            </Link>
          </motion.div>

          {/* Proof row. The avatar circles are neutral placeholders: swap in real people before leaning on them. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2'
          >
            <div className='flex' aria-hidden='true'>
              {AVATARS.map((cls, i) => (
                <span
                  key={cls}
                  className={`w-8 h-8 rounded-full ${cls} ring-2 ring-white dark:ring-gray-950 inline-flex items-center justify-center ${i > 0 ? '-ml-2.5' : ''}`}
                >
                  <User className='w-4 h-4' />
                </span>
              ))}
            </div>
            <span className='text-sm text-gray-600 dark:text-gray-400'>
              <span className='font-semibold text-gray-900 dark:text-white'>100+ downloads</span> · Open source (MIT) · Works offline
            </span>
          </motion.div>
        </div>
      </div>

      {/* Product window: the demo video plays inside a Mac window on a dotted panel */}
      <div className='container mx-auto px-6 lg:px-8 pt-12 sm:pt-16 pb-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='relative rounded-[28px] overflow-hidden bg-[#f3f5f9] dark:bg-gray-900 bg-[radial-gradient(#dfe4ec_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:18px_18px]'
        >
          <div className='px-4 sm:px-10 lg:px-[106px] pt-8 sm:pt-14 pb-14 sm:pb-20'>
            <div className='rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-[0_40px_100px_-40px_rgba(13,13,13,0.45)]'>
              <div className='flex items-center justify-between px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700'>
                <div className='flex items-center gap-1.5' aria-hidden='true'>
                  <span className='w-3 h-3 rounded-full bg-[#ff5f57]' />
                  <span className='w-3 h-3 rounded-full bg-[#febc2e]' />
                  <span className='w-3 h-3 rounded-full bg-[#28c840]' />
                </div>
                <div className='flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600'>
                  <Lock className='w-2.5 h-2.5 text-green-600 dark:text-green-400' />
                  <span className='text-[11px] text-gray-500 dark:text-gray-400 font-medium'>Dash Notes</span>
                </div>
                <div className='w-[44px]' aria-hidden='true' />
              </div>
              <div data-vjs-player className='aspect-video'>
                <video
                  ref={videoRef}
                  className='video-js w-full h-full'
                  playsInline
                  muted
                  preload='metadata'
                  poster='/images/Dashdemo2-poster.jpg'
                  aria-label='Dash app demonstration video'
                />
              </div>
            </div>
          </div>

          {/* Live chips */}
          <div className='hidden sm:flex absolute left-6 lg:left-10 bottom-6 lg:bottom-10 items-center gap-2.5 px-4 py-3 rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.35)] text-sm'>
            <span className='w-7 h-7 rounded-lg bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 inline-flex items-center justify-center'>
              <Lock className='w-3.5 h-3.5' />
            </span>
            <span className='text-gray-900 dark:text-white'>
              <span className='font-semibold'>Encrypted on this Mac</span>
              <span className='text-gray-500 dark:text-gray-400'> · the key never leaves</span>
            </span>
          </div>
          <div className='hidden sm:flex absolute right-6 lg:right-10 top-6 lg:top-9 items-center gap-2.5 px-4 py-3 rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.35)] text-sm'>
            <span className='w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 inline-flex items-center justify-center'>
              <Clock className='w-3.5 h-3.5' />
            </span>
            <span className='text-gray-900 dark:text-white'>
              <span className='font-semibold'>Door code</span>
              <span className='text-gray-500 dark:text-gray-400'> deletes itself in 6h 12m</span>
            </span>
          </div>
          <div className='hidden lg:flex absolute right-10 bottom-10 items-center gap-4 px-3.5 py-2.5 rounded-[10px] bg-white/85 dark:bg-gray-950/85 border border-gray-200 dark:border-gray-800 text-[13px] text-gray-600 dark:text-gray-300'>
            <span className='inline-flex items-center gap-1.5'>
              <Lock className='w-3.5 h-3.5 text-blue-600 dark:text-blue-400' />
              AES-256 encryption
            </span>
            <span className='inline-flex items-center gap-1.5'>
              <WifiOff className='w-3.5 h-3.5 text-blue-600 dark:text-blue-400' />
              Works offline
            </span>
            <span className='inline-flex items-center gap-1.5'>
              <UserX className='w-3.5 h-3.5 text-blue-600 dark:text-blue-400' />
              No account
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
