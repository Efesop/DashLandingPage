'use client';

// Dash Sync subscription pricing + checkout page.
//
// Two cards (monthly + yearly). On click, POSTs to /api/create-checkout-session
// with the relevant productType, then redirects to Stripe Checkout.
//
// Anti-steering note: this page is reachable from web + Mac/Electron
// (via shell.openExternal). It is NEVER linked from inside the iOS app
// per Apple App Store guidelines.

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Check, Cloud, Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type Plan = 'sync-monthly' | 'sync-yearly';

export default function SubscribePage() {
  const [loading, setLoading] = useState<Plan | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startCheckout = async (plan: Plan) => {
    setLoading(plan);
    setError(null);
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productType: plan }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(data.error || 'Could not start checkout.');
        return;
      }
      window.location.href = data.url;
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950'>
      <div className='container mx-auto px-6 lg:px-8 py-16'>
        <Link
          href='/'
          className='inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 mb-12'
        >
          <ArrowLeft className='h-4 w-4 mr-2' /> Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='max-w-4xl mx-auto text-center mb-12'
        >
          <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6'>
            <Cloud className='w-8 h-8 text-blue-600' />
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            Dash Sync
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            End-to-end encrypted sync across your devices. Your notes stay
            private — the server only sees ciphertext.
          </p>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-3'>
            7-day free trial. Cancel anytime.
          </p>
        </motion.div>

        {error && (
          <div className='max-w-2xl mx-auto mb-8 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-lg text-sm text-red-800 dark:text-red-200'>
            {error}
          </div>
        )}

        <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
          <PriceCard
            title='Monthly'
            price='$4.99'
            cadence='per month'
            features={[
              '7-day free trial',
              'Sync on all your devices',
              'End-to-end encrypted',
              'Cancel anytime',
            ]}
            ctaLabel='Start free trial'
            loading={loading === 'sync-monthly'}
            onClick={() => startCheckout('sync-monthly')}
          />
          <PriceCard
            title='Yearly'
            price='$47.99'
            cadence='per year'
            badge='Save 20%'
            highlighted
            features={[
              '7-day free trial',
              'Sync on all your devices',
              'End-to-end encrypted',
              'Cancel anytime',
              'Two months free vs monthly',
            ]}
            ctaLabel='Start free trial'
            loading={loading === 'sync-yearly'}
            onClick={() => startCheckout('sync-yearly')}
          />
        </div>

        <div className='max-w-2xl mx-auto mt-16 text-center'>
          <div className='inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
            <Shield className='h-4 w-4' />
            Your notes are encrypted on your device before they leave it. We
            cannot read them.
          </div>
          <p className='text-xs text-gray-400 dark:text-gray-500 mt-6'>
            Already subscribed?{' '}
            <Link
              href='/payment/manage'
              className='text-blue-600 hover:underline'
            >
              Manage subscription
            </Link>
            {' · '}
            <Link
              href='/payment/recovery'
              className='text-blue-600 hover:underline'
            >
              Recover Mac download
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function PriceCard(props: {
  title: string;
  price: string;
  cadence: string;
  features: string[];
  ctaLabel: string;
  loading: boolean;
  highlighted?: boolean;
  badge?: string;
  onClick: () => void;
}) {
  return (
    <div
      className={`rounded-2xl p-8 border ${
        props.highlighted
          ? 'border-blue-500 bg-white dark:bg-gray-900 shadow-lg shadow-blue-500/10'
          : 'border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/40'
      } relative`}
    >
      {props.badge && (
        <span className='absolute -top-3 right-6 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full'>
          {props.badge}
        </span>
      )}
      <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
        {props.title}
      </h3>
      <div className='flex items-baseline gap-1 mb-1'>
        <span className='text-4xl font-bold text-gray-900 dark:text-white'>
          {props.price}
        </span>
        <span className='text-sm text-gray-500 dark:text-gray-400'>
          {props.cadence}
        </span>
      </div>
      <ul className='mt-6 mb-8 space-y-3'>
        {props.features.map((f) => (
          <li
            key={f}
            className='flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300'
          >
            <Check className='h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0' />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button
        onClick={props.onClick}
        disabled={props.loading}
        className={`w-full py-3 ${
          props.highlighted
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900'
        }`}
      >
        {props.loading ? 'Loading…' : (
          <>
            {props.ctaLabel} <ArrowRight className='ml-2 h-4 w-4' />
          </>
        )}
      </Button>
    </div>
  );
}
