'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Mail, Shield, ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';

export default function PaymentRecovery() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [portalUrl, setPortalUrl] = useState<string | null>(null);

  const handleRecovery = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/customer-portal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setPortalUrl(data.url);
      } else {
        setError(data.error || 'Failed to access account');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (portalUrl) {
    return (
      <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950'>
        <div className='container mx-auto px-6 lg:px-8 py-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-2xl mx-auto text-center'
          >
            <div className='w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-8'>
              <Shield className='w-10 h-10 text-blue-600' />
            </div>

            <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
              Account Access Granted
            </h1>

            <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
              You're being redirected to your secure customer portal where you
              can access your downloads and manage your account.
            </p>

            <div className='bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-6 mb-8'>
              <p className='text-sm text-blue-800 dark:text-blue-200 mb-4'>
                🔒 This link will expire in 30 minutes for security
              </p>
              <Button
                href={portalUrl}
                className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg'
                rel='noopener noreferrer'
              >
                <Download className='mr-2 h-5 w-5' />
                Access My Account
              </Button>
            </div>

            <Link
              href='/'
              className='text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
            >
              Return to Home
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950/20 dark:to-gray-950'>
      <div className='container mx-auto px-6 lg:px-8 py-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='max-w-2xl mx-auto text-center'
        >
          <div className='w-20 h-20 bg-gray-100 dark:bg-gray-900/30 rounded-full flex items-center justify-center mx-auto mb-8'>
            <Mail className='w-10 h-10 text-gray-600' />
          </div>

          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
            Recover Your Downloads
          </h1>

          <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
            Enter the email you used when purchasing Dash to access your secure
            customer portal and download history.
          </p>

          <div className='bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 mb-8'>
            <form onSubmit={handleRecovery} className='space-y-6'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-left'
                >
                  Email Address
                </label>
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='your-email@example.com'
                  required
                  className='w-full'
                />
              </div>

              {error && (
                <div className='bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4'>
                  <p className='text-red-800 dark:text-red-200 text-sm'>
                    {error}
                  </p>
                </div>
              )}

              <Button
                type='submit'
                disabled={isLoading}
                className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg'
              >
                {isLoading ? 'Verifying...' : 'Access My Account'}
              </Button>
            </form>
          </div>

          <div className='space-y-4'>
            <Link
              href='/'
              className='inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Return to Home
            </Link>

            <div className='pt-4'>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Need help? Contact us at support@dashnote.io
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
