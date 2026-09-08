'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lock, Clock, WifiOff, UserX, Smartphone, User, Code } from 'lucide-react';
import BitsField from './BitsField';
import { APP_STORE_URL } from '../../lib/links';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';


const scrollToPayment = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
};

const AVATARS = ['bg-gray-200 text-gray-500', 'bg-gray-300 text-gray-600', 'bg-gray-400 text-white', 'bg-gray-500 text-white'];


export default function HeroSection() {
  const videoHostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  // video.js owns its element: create it inside the host on mount and dispose on unmount,
  // so React strict mode's double effect (mount, cleanup, mount) still ends with a live player.
  useEffect(() => {
    const host = videoHostRef.current;
    if (!host) return;
    const videoElement = document.createElement('video-js');
    videoElement.setAttribute('aria-label', 'Dash app demonstration video');
    host.appendChild(videoElement);
    const player = videojs(videoElement, {
      autoplay: true,
      muted: true,
      playsinline: true,
      controls: false,
      responsive: true,
      fluid: true,
      loop: true,
      preload: 'metadata',
      poster: '/images/Dashdemo2-poster.jpg',
      sources: [{ src: '/images/Dashdemo2-1280.mp4', type: 'video/mp4' }],
    });
    playerRef.current = player;
    return () => {
      player.dispose();
      playerRef.current = null;
    };
  }, []);

  return (
    <>
      {/* Cipher hero: white with a faint field of binary that a slow "decrypt" sweep crosses */}
      <section className='relative overflow-hidden bg-white'>
        <BitsField className='absolute inset-0 w-full h-full' base={0.09} peak={0.32} fade={0.58} clear period={7} />
        <div aria-hidden='true' className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fbfbfc]' />

        <div className='container mx-auto px-6 lg:px-8 relative pt-24 sm:pt-28 pb-[150px] sm:pb-[190px]'>
          <div className='max-w-4xl mx-auto flex flex-col items-center text-center gap-5 sm:gap-6'>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className='inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-[13.5px] font-medium text-gray-700'
            >
              <span className='w-[7px] h-[7px] rounded-full bg-green-600' aria-hidden='true' />
              Private notes for Mac and iPhone
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className='text-5xl sm:text-6xl lg:text-[76px] font-extrabold tracking-[-0.045em] leading-[1.0] text-gray-900 text-balance max-w-[13ch]'
            >
              Your notes are none of our business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className='text-lg sm:text-xl leading-relaxed text-gray-600 max-w-[50ch]'
            >
              An encrypted notes app that keeps everything on your device. No account, no cloud unless you ask for it,
              and a Mac app you buy once.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className='flex flex-col sm:flex-row items-center justify-center gap-3 pt-0.5 w-full sm:w-auto'
            >
              <a
                href='#payment-section'
                onClick={scrollToPayment}
                className='inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-[15px] rounded-[10px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base shadow-[0_10px_30px_-10px_rgba(37,99,235,0.6)] transition-colors'
              >
                Get Dash for Mac
                <span className='font-normal opacity-85'>$14.99, once</span>
              </a>
              <Link
                href={APP_STORE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-[15px] rounded-[10px] border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 font-medium text-base transition-colors'
              >
                <Smartphone className='w-4 h-4' />
                Free on iPhone
              </Link>
            </motion.div>

            {/* Proof row. Avatars are neutral placeholders until real people are supplied. */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className='flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 pt-1'
            >
              <div className='flex' aria-hidden='true'>
                {AVATARS.map((cls, i) => (
                  <span
                    key={cls}
                    className={`w-7 h-7 rounded-full ${cls} ring-2 ring-white inline-flex items-center justify-center ${i > 0 ? '-ml-2' : ''}`}
                  >
                    <User className='w-3.5 h-3.5' />
                  </span>
                ))}
              </div>
              <span className='text-sm text-gray-600'>
                <span className='font-semibold text-gray-900'>100+ downloads</span> · Open source (MIT) · Works offline
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product window, pulled up into the first screen and overlapping the hero */}
      <div className='relative z-10 container mx-auto px-6 lg:px-8 -mt-[120px] sm:-mt-[170px]'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='relative max-w-[980px] mx-auto'
        >
          <div className='rounded-[14px] overflow-hidden bg-white border border-gray-900/[0.06] shadow-[0_50px_120px_-40px_rgba(17,24,39,0.35)]'>
            <div className='flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-200'>
              <div className='flex items-center gap-1.5' aria-hidden='true'>
                <span className='w-3 h-3 rounded-full bg-[#ff5f57]' />
                <span className='w-3 h-3 rounded-full bg-[#febc2e]' />
                <span className='w-3 h-3 rounded-full bg-[#28c840]' />
              </div>
              <div className='flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-gray-200'>
                <Lock className='w-2.5 h-2.5 text-green-600' />
                <span className='text-[11px] text-gray-500 font-medium'>Dash Notes</span>
              </div>
              <div className='w-[44px]' aria-hidden='true' />
            </div>
            <div data-vjs-player className='aspect-video bg-gray-100'>
              <div ref={videoHostRef} className='w-full h-full' />
            </div>
          </div>

          <div className='hidden md:flex absolute -left-6 bottom-9 items-center gap-2.5 px-[15px] py-[11px] rounded-xl bg-white border border-gray-200 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.35)] text-[13.5px]'>
            <span className='w-[26px] h-[26px] rounded-[7px] bg-green-50 text-green-700 inline-flex items-center justify-center'>
              <Lock className='w-3.5 h-3.5' />
            </span>
            <span className='text-gray-900'>
              <span className='font-semibold'>Encrypted on this Mac</span>
              <span className='text-gray-500'> · the key never leaves</span>
            </span>
          </div>
          <div className='hidden md:flex absolute -right-6 top-[34px] items-center gap-2.5 px-[15px] py-[11px] rounded-xl bg-white border border-gray-200 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.35)] text-[13.5px]'>
            <span className='w-[26px] h-[26px] rounded-[7px] bg-gray-100 text-gray-700 inline-flex items-center justify-center'>
              <Clock className='w-3.5 h-3.5' />
            </span>
            <span className='text-gray-900'>
              <span className='font-semibold'>Door code</span>
              <span className='text-gray-500'> deletes itself in 6h 12m</span>
            </span>
          </div>
        </motion.div>

        <div className='flex flex-wrap items-center justify-center gap-x-9 gap-y-3 pt-10 text-sm text-gray-500'>
          <span className='inline-flex items-center gap-[7px]'>
            <Lock className='w-[15px] h-[15px] text-gray-700' />
            AES-256-GCM encryption
          </span>
          <span className='inline-flex items-center gap-[7px]'>
            <WifiOff className='w-[15px] h-[15px] text-gray-700' />
            Works offline
          </span>
          <span className='inline-flex items-center gap-[7px]'>
            <UserX className='w-[15px] h-[15px] text-gray-700' />
            No account
          </span>
          <span className='inline-flex items-center gap-[7px]'>
            <Code className='w-[15px] h-[15px] text-gray-700' />
            Open source
          </span>
        </div>
      </div>
    </>
  );
}
