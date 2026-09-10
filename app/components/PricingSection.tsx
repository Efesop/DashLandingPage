'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Cloud, Laptop, Lock, Shield, Smartphone } from 'lucide-react';
import BitsField from './BitsField';
import PaymentSection from './PaymentSection';
import { APP_STORE_URL } from '../../lib/links';

const EDGE_MASK = 'linear-gradient(90deg, #000 0%, transparent 18%, transparent 82%, #000 100%)';

const IPHONE_FEATURES = ['Same encryption, Face ID', 'Works fully offline', 'No account to make', 'Free on the web too'];

function PlatformHeading({ icon: Icon, name }: { icon: typeof Laptop; name: string }) {
  return (
    <span className='inline-flex items-center gap-2.5 font-semibold text-[17px] text-gray-900'>
      <Icon className='w-[18px] h-[18px] text-gray-700' aria-hidden='true' />
      {name}
    </span>
  );
}

export default function PricingSection({ band = true }: { band?: boolean }) {
  return (
    <section
      id='pricing'
      className={band ? 'relative overflow-hidden isolate py-20 sm:py-24 mt-8' : 'py-16 sm:py-20'}
      style={band ? { background: 'linear-gradient(120deg, #f7f7f8 0%, #eeeff2 50%, #f7f7f8 100%)' } : undefined}
    >
      {band && (
        <BitsField
          className='absolute inset-0 w-full h-full -z-10'
          base={0.07}
          peak={0.18}
          period={11}
          style={{ WebkitMaskImage: EDGE_MASK, maskImage: EDGE_MASK }}
        />
      )}

      <div className='container mx-auto px-6 lg:px-8 flex flex-col gap-8'>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex flex-col items-center text-center gap-2'
        >
          <h2 className='text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.035em] leading-[1.05] text-gray-900 text-balance max-w-[22ch]'>
            One purchase. Two platforms. Sync only if you want it.
          </h2>
          <p className='text-[17px] text-gray-500'>You never need a subscription to take notes.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex flex-col gap-4'
        >
          {/* One product, two platforms: a single frame so Mac and iPhone read as the same app. */}
          <div id='payment-section' className='scroll-mt-24 rounded-[24px] bg-white border border-gray-200 overflow-hidden'>
            <div className='px-6 sm:px-8 py-5 border-b border-gray-200 flex flex-wrap items-baseline gap-x-3 gap-y-1'>
              <span className='text-xl font-bold tracking-[-0.02em] text-gray-900'>Get Dash</span>
              <span className='text-[15px] text-gray-500'>the same app, on both platforms</span>
            </div>

            <div className='flex flex-col lg:flex-row items-stretch'>
              {/* Mac — the real Stripe and Lightning checkout, unchanged */}
              <div className='flex-1 p-6 sm:p-8 flex flex-col gap-4'>
                <PlatformHeading icon={Laptop} name='Mac' />
                <PaymentSection embedded bare />
              </div>

              <div className='w-full h-px lg:w-px lg:h-auto bg-gray-200 flex-shrink-0' aria-hidden='true' />

              {/* iPhone */}
              <div className='flex-1 p-6 sm:p-8 flex flex-col gap-4'>
                <PlatformHeading icon={Smartphone} name='iPhone' />
                <div className='flex items-baseline gap-2'>
                  <span className='text-[46px] leading-none font-bold tracking-[-0.04em] text-gray-900'>Free</span>
                  <span className='text-base text-gray-500'>on the App Store</span>
                </div>
                <p className='text-[15px] text-gray-500'>No purchase, no trial, no account</p>
                <div className='flex flex-col gap-2.5 mt-2'>
                  {IPHONE_FEATURES.map((f) => (
                    <span key={f} className='flex items-start gap-2.5 text-sm text-gray-700'>
                      <Check className='w-4 h-4 mt-0.5 text-[#1a7f4b] flex-shrink-0' aria-hidden='true' />
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  href={APP_STORE_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-auto h-12 flex items-center justify-center px-4 rounded-[10px] bg-gray-900 text-white font-semibold text-base hover:bg-gray-800 transition-colors'
                >
                  Download
                </Link>
              </div>
            </div>
          </div>

          {/* The add-on, deliberately lighter than the card above it. */}
          <div className='rounded-[20px] bg-[#f5f5f7] border border-dashed border-gray-300 p-6 sm:px-8 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8'>
            <div className='flex flex-col gap-2'>
              <span className='inline-flex flex-wrap items-center gap-3'>
                <span className='inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-gray-300 text-[12.5px] font-semibold uppercase tracking-[0.04em] text-gray-500'>
                  Optional
                </span>
                <span className='inline-flex items-center gap-2 font-semibold text-[17px] text-gray-900'>
                  <Cloud className='w-[18px] h-[18px] text-gray-700' aria-hidden='true' />
                  Add Dash Sync
                </span>
              </span>
              <p className='text-[15.5px] text-gray-600 max-w-[62ch]'>
                Keeps Mac, iPhone, iPad and web in step, encrypted on your device first.{' '}
                <strong className='font-semibold text-gray-900'>Dash works completely without it</strong> — notes,
                encryption and everything else.
              </p>
            </div>
            <div className='lg:ml-auto flex flex-wrap items-center gap-4 lg:gap-5 flex-shrink-0'>
              <div className='lg:text-right'>
                <div className='text-[26px] leading-tight font-bold tracking-[-0.03em] text-gray-900'>
                  $4.99
                  <span className='text-[15px] font-normal text-gray-500'> / mo</span>
                </div>
                <div className='text-[13px] text-gray-500'>or $47.99 / year · 7-day trial</div>
              </div>
              <Link
                href='/subscribe'
                className='px-5 py-3 rounded-[10px] border border-gray-300 bg-white text-gray-900 font-semibold text-[15px] hover:bg-gray-50 transition-colors'
              >
                Start free trial
              </Link>
            </div>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-gray-500 pt-2'>
            <span className='inline-flex items-center gap-1.5'>
              <Shield className='w-3.5 h-3.5 text-[#1a7f4b]' aria-hidden='true' />
              Secure checkout
            </span>
            <span className='inline-flex items-center gap-1.5'>
              <Lock className='w-3.5 h-3.5 text-gray-500' aria-hidden='true' />
              SSL encrypted
            </span>
            <Link href='/payment/recovery' className='underline underline-offset-[3px] decoration-gray-400 hover:decoration-gray-900'>
              Already purchased? Recover your download
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
