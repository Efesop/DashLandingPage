'use client';

import React, { useRef, useEffect } from 'react';
import {
  Lock,
  Shield,
  Fingerprint,
  WifiOff,
  EyeOff,
  Star,
  Download,
} from 'lucide-react';
import { motion } from 'framer-motion';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import type Player from 'video.js/dist/types/player';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
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
        sources: [{ src: '/images/Dashdemo2.mp4', type: 'video/mp4' }],
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  const trustItems = [
    { icon: Shield, label: 'AES-256 Encrypted' },
    { icon: Fingerprint, label: 'Touch ID Protected' },
    { icon: WifiOff, label: '100% Offline' },
    { icon: EyeOff, label: 'Zero Tracking' },
  ];

  return (
    <section className='relative overflow-hidden bg-white dark:bg-gray-950'>
      {/* Background */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-blue-100/60 dark:bg-blue-950/30 rounded-full blur-[120px]' />
        <div className='absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-50/50 dark:bg-indigo-950/20 rounded-full blur-[100px]' />
      </div>

      <div className='container mx-auto px-6 lg:px-8 pt-20 pb-8 relative z-10'>
        {/* Centered content */}
        <div className='max-w-3xl mx-auto text-center space-y-6'>
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className='inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'>
              <Lock className='w-3.5 h-3.5' />
              <span>Privacy-first note taking</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className='text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.05]'
          >
            Own Your Notes
            <br />
            <span className='text-blue-600 dark:text-blue-400'>For Real</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className='text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed'
          >
            The only notes app that puts <strong className='text-gray-700 dark:text-gray-200'>you</strong> in complete control.
            No cloud, no tracking, no corporate surveillance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-2'
          >
            <a
              href='#payment-section'
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className='py-3.5 px-10 bg-blue-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-600/25 inline-flex items-center justify-center gap-2 hover:bg-blue-700 active:bg-blue-800'
            >
              <Download className='w-4 h-4' />
              Get Dash for Mac
            </a>
            <button
              onClick={() =>
                document
                  .getElementById('features')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className='text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors font-medium'
            >
              See how it works &darr;
            </button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className='flex flex-col items-center gap-5 pt-4'
          >
            {/* Avatars + downloads + stars */}
            <div className='flex items-center gap-3'>
              {/* Overlapping avatar circles */}
              <div className='flex -space-x-2'>
                {[
                  { initials: 'JM', bg: 'bg-blue-500' },
                  { initials: 'AK', bg: 'bg-emerald-500' },
                  { initials: 'TS', bg: 'bg-purple-500' },
                  { initials: 'RD', bg: 'bg-amber-500' },
                  { initials: 'LP', bg: 'bg-rose-500' },
                ].map((avatar) => (
                  <div
                    key={avatar.initials}
                    className={`w-8 h-8 rounded-full ${avatar.bg} flex items-center justify-center text-[11px] font-bold text-white ring-2 ring-white dark:ring-gray-950`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
              <div className='flex flex-col items-start'>
                <div className='flex items-center gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-3.5 h-3.5 fill-amber-400 text-amber-400' />
                  ))}
                </div>
                <span className='text-xs text-gray-500 dark:text-gray-400'>
                  100+ downloads
                </span>
              </div>
            </div>

            {/* Trust pills */}
            <div className='flex flex-wrap items-center justify-center gap-3'>
              {trustItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.55 + i * 0.06 }}
                  className='flex items-center gap-2 px-3.5 py-2 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
                >
                  <item.icon className='w-4 h-4 text-blue-600 dark:text-blue-400' />
                  <span className='text-sm text-gray-700 dark:text-gray-300 font-medium'>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Video mockup - full width below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='relative max-w-5xl mx-auto mt-16'
        >
          {/* Glow behind */}
          <div className='absolute -inset-8 bg-blue-200/60 dark:bg-blue-800/25 rounded-[2rem] blur-3xl' />
          <div className='absolute -inset-4 bg-indigo-100/40 dark:bg-indigo-900/15 rounded-[2rem] blur-2xl' />

          <div className='relative bg-white dark:bg-gray-900 rounded-2xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)] border border-gray-200 dark:border-gray-800 overflow-hidden'>
            {/* Window chrome */}
            <div className='flex items-center justify-between px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700'>
              <div className='flex items-center gap-1.5'>
                <div className='w-3 h-3 rounded-full bg-[#ff5f57]' />
                <div className='w-3 h-3 rounded-full bg-[#febc2e]' />
                <div className='w-3 h-3 rounded-full bg-[#28c840]' />
              </div>
              <div className='flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600'>
                <Lock className='w-2.5 h-2.5 text-green-600 dark:text-green-400' />
                <span className='text-[11px] text-gray-500 dark:text-gray-400 font-medium'>
                  Dash Notes
                </span>
              </div>
              <div className='w-[44px]' />
            </div>

            {/* Video */}
            <div data-vjs-player className='aspect-video'>
              <video
                ref={videoRef}
                className='video-js w-full h-full'
                playsInline
                muted
                aria-label='Dash app demonstration video'
              />
            </div>
          </div>

          {/* Floating badge - top right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className='absolute -top-4 -right-2 sm:-right-4 bg-white dark:bg-gray-800 rounded-xl px-4 py-2.5 shadow-lg border border-gray-200 dark:border-gray-700'
          >
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
              <span className='text-sm font-semibold text-gray-900 dark:text-white'>
                100% Private
              </span>
            </div>
          </motion.div>

          {/* Floating badge - bottom left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className='absolute -bottom-4 -left-2 sm:-left-4 bg-white dark:bg-gray-800 rounded-xl px-4 py-2.5 shadow-lg border border-gray-200 dark:border-gray-700'
          >
            <div className='flex items-center gap-2'>
              <Shield className='w-4 h-4 text-blue-600 dark:text-blue-400' />
              <span className='text-sm font-semibold text-gray-900 dark:text-white'>
                Bank-level security
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
