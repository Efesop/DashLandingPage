'use client';

import React from 'react';
import Link from 'next/link';
import { XCircle, ArrowLeft, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';

export default function PaymentCancel() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950/20 dark:to-gray-950'>
      <div className='container mx-auto px-6 lg:px-8 py-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='max-w-2xl mx-auto text-center'
        >
          <div className='w-20 h-20 bg-gray-100 dark:bg-gray-900/30 rounded-full flex items-center justify-center mx-auto mb-8'>
            <XCircle className='w-10 h-10 text-gray-600' />
          </div>

          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
            Payment Cancelled
          </h1>

          <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
            No worries! Your payment was cancelled and you haven't been charged.
            You can try again anytime.
          </p>

          <div className='bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 mb-8'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
              Why was the payment cancelled?
            </h3>
            <div className='space-y-4 text-left text-gray-600 dark:text-gray-300'>
              <p>• You closed the payment window</p>
              <p>• You navigated away from the payment page</p>
              <p>• There was an issue with your payment method</p>
              <p>• You decided not to complete the purchase</p>
            </div>
          </div>

          <div className='space-y-4'>
            <Button
              onClick={() => window.history.back()}
              className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg'
            >
              <ArrowLeft className='mr-2 h-5 w-5' />
              Try Again
            </Button>

            <div className='pt-4'>
              <Link
                href='/'
                className='text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
              >
                Return to Home
              </Link>
            </div>
          </div>

          <div className='mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
            <h4 className='font-semibold text-gray-900 dark:text-white mb-3'>
              Need Help?
            </h4>
            <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>
              If you're experiencing issues with payments, we're here to help.
            </p>
            <div className='flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
              <CreditCard className='w-4 h-4' />
              <span>support@dashnote.io</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
