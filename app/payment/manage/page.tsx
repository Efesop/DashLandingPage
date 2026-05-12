'use client';

// Subscription self-service entry. User enters their email, we open a
// real Stripe Billing Portal session (cancel / change plan / update
// card). Distinct from /payment/recovery, which is for Mac DMG download
// recovery via the original $14.99 one-time purchase.

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Mail, Shield, ArrowLeft, Settings2 } from 'lucide-react';
import Link from 'next/link';

export default function ManageSubscriptionPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/customer-portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(data.error || 'No subscription found for this email.');
        return;
      }
      window.location.href = data.url;
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
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
          className='max-w-md mx-auto'
        >
          <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6'>
            <Settings2 className='w-8 h-8 text-blue-600' />
          </div>

          <h1 className='text-3xl font-bold text-gray-900 dark:text-white text-center mb-3'>
            Manage subscription
          </h1>
          <p className='text-gray-600 dark:text-gray-300 text-center mb-8'>
            Enter the email you used to subscribe and we'll open the Stripe
            self-service portal where you can cancel, change plan, or update
            your card.
          </p>

          {error && (
            <div className='mb-4 p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-lg text-sm text-red-800 dark:text-red-200'>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='relative'>
              <Mail className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400' />
              <Input
                type='email'
                required
                placeholder='you@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='pl-10'
              />
            </div>
            <Button
              type='submit'
              disabled={loading || !email}
              className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3'
            >
              {loading ? 'Loading…' : 'Open portal'}
            </Button>
          </form>

          <div className='mt-8 flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400'>
            <Shield className='h-4 w-4 flex-shrink-0 mt-0.5' />
            <span>
              We never see your payment info. Stripe handles cards directly.
            </span>
          </div>

          <p className='text-xs text-gray-400 dark:text-gray-500 mt-8 text-center'>
            Bought the Mac desktop app (one-time)?{' '}
            <Link
              href='/payment/recovery'
              className='text-blue-600 hover:underline'
            >
              Recover your download
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
