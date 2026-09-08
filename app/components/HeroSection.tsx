'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lock, Clock, WifiOff, UserX, Smartphone, User, Code } from 'lucide-react';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';

export const APP_STORE_URL = 'https://apps.apple.com/app/id6766192836';

const scrollToPayment = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
};

const AVATARS = ['bg-[#bfd0f2] text-[#3b5aa6]', 'bg-[#aabfe9] text-[#2f4c99]', 'bg-[#96aee0] text-[#ffffff]', 'bg-[#829dd6] text-[#ffffff]'];

const WASH =
  'radial-gradient(800px 480px at 18% 12%, rgba(191,219,254,0.95), rgba(191,219,254,0) 70%), ' +
  'radial-gradient(700px 420px at 84% 18%, rgba(221,214,254,0.85), rgba(221,214,254,0) 70%), ' +
  'radial-gradient(900px 500px at 50% 100%, rgba(247,249,253,1), rgba(247,249,253,0) 70%), ' +
  'linear-gradient(180deg, #e6efff 0%, #f5f7fb 100%)';
const DOT_MASK = 'radial-gradient(70% 60% at 50% 40%, rgba(0,0,0,1), rgba(0,0,0,0))';

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
      {/* Sky hero: blue → lavender wash, faint dot field, soft cloud blurs */}
      <section className='relative overflow-hidden bg-[#eaf1ff]'>
        <div aria-hidden='true' className='absolute inset-0' style={{ backgroundImage: WASH }} />
        <div
          aria-hidden='true'
          className='absolute inset-0 opacity-35'
          style={{
            backgroundImage: 'radial-gradient(rgba(37,99,235,0.35) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            WebkitMaskImage: DOT_MASK,
            maskImage: DOT_MASK,
          }}
        />
        <div aria-hidden='true' className='absolute -left-[120px] top-[420px] w-[520px] h-[220px] rounded-full bg-white/75 blur-[28px]' />
        <div aria-hidden='true' className='absolute -right-[80px] top-[380px] w-[460px] h-[200px] rounded-full bg-white/70 blur-[28px]' />

        <div className='container mx-auto px-6 lg:px-8 relative pt-24 sm:pt-28 pb-[150px] sm:pb-[190px]'>
          <div className='max-w-4xl mx-auto flex flex-col items-center text-center gap-5 sm:gap-6'>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className='inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/70 border border-blue-600/15 text-[13.5px] font-medium text-gray-700'
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
                className='inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-[15px] rounded-[10px] border border-[#b9c7e4] bg-white/60 hover:bg-white text-gray-900 font-medium text-base transition-colors'
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
                    className={`w-7 h-7 rounded-full ${cls} ring-2 ring-[#eaf1ff] inline-flex items-center justify-center ${i > 0 ? '-ml-2' : ''}`}
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
          <div className='rounded-[14px] overflow-hidden bg-white border border-gray-900/[0.06] shadow-[0_50px_120px_-40px_rgba(30,41,59,0.45)]'>
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
            <span className='w-[26px] h-[26px] rounded-[7px] bg-amber-50 text-amber-700 inline-flex items-center justify-center'>
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
            <Lock className='w-[15px] h-[15px] text-blue-600' />
            AES-256-GCM encryption
          </span>
          <span className='inline-flex items-center gap-[7px]'>
            <WifiOff className='w-[15px] h-[15px] text-blue-600' />
            Works offline
          </span>
          <span className='inline-flex items-center gap-[7px]'>
            <UserX className='w-[15px] h-[15px] text-blue-600' />
            No account
          </span>
          <span className='inline-flex items-center gap-[7px]'>
            <Code className='w-[15px] h-[15px] text-blue-600' />
            Open source
          </span>
        </div>
      </div>
    </>
  );
}
