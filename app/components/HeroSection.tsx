'use client';

import React, { useRef, useEffect } from 'react';
import { Lock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import FloatingOrbs from './ui/FloatingOrbs';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import type Player from 'video.js/dist/types/player';

interface HeroSectionProps {
  email: string;
  setEmail: (email: string) => void;
  isEmailSubmitted: boolean;
  downloadError: string;
  downloadUrl: string;
  handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function HeroSection({
  email,
  setEmail,
  isEmailSubmitted,
  downloadError,
  downloadUrl,
  handleEmailSubmit,
}: HeroSectionProps) {
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
        sources: [{ src: '/images/Dash.mp4', type: 'video/mp4' }],
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
    <section className='relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950 min-h-[90vh] flex items-center'>
      {/* Subtle floating orbs background */}
      <FloatingOrbs variant='light' density='low' />

      <div className='container mx-auto px-6 lg:px-8 py-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/50 px-4 py-2 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
            >
              <Lock className='mr-2 h-4 w-4' />
              <span className='text-sm font-medium'>Military-grade privacy</span>
            </motion.div>

            {/* Heading */}
            <div className='space-y-6'>
              <h1 className='text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl leading-[1.1]'>
                Own Your Notes
                <br />
                <span className='text-blue-600 dark:text-blue-400'>
                  For Real
                </span>
              </h1>

              <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl'>
                The only notes app that puts <strong>you</strong> in complete
                control. No cloud, no tracking, no corporate surveillance.
              </p>
            </div>

            {/* Checkmarks */}
            <div className='flex flex-wrap gap-4'>
              {[
                'No sign-up needed',
                'Works 100% offline',
                'Private by design',
              ].map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className='flex items-center gap-2'
                >
                  <CheckCircle className='w-5 h-5 text-green-500' />
                  <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className='flex flex-col sm:flex-row items-start gap-4'
            >
              <Button
                onClick={() =>
                  document
                    .getElementById('payment-section')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className='h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-colors duration-200'
              >
                Get Dash for Mac
              </Button>

              <p className='text-gray-500 dark:text-gray-400 self-center'>
                No account required • Works on Mac
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='relative'
          >
            {/* Video directly without browser chrome */}
            <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
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

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className='absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-xl px-4 py-2.5 shadow-lg border border-gray-200 dark:border-gray-700'
            >
              <div className='flex items-center gap-2'>
                <div className='h-2 w-2 rounded-full bg-green-500 animate-pulse' />
                <span className='font-medium text-sm text-gray-900 dark:text-white'>
                  100% Private
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className='absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 rounded-xl px-4 py-2.5 shadow-lg border border-gray-200 dark:border-gray-700'
            >
              <div className='flex items-center gap-2'>
                <Lock className='h-4 w-4 text-blue-600' />
                <span className='font-medium text-sm text-gray-900 dark:text-white'>
                  Bank-level security
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
