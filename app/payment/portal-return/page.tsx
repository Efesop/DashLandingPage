'use client';

// Return URL after the user closes the Stripe Billing Portal.
// Stripe sends the user back here once they're done managing their sub.
// We just confirm + offer a couple of next steps. Subscription state
// updates are handled by the webhook (customer.subscription.* events),
// not by this page.

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Check, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PortalReturnPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950'>
      <div className='container mx-auto px-6 lg:px-8 py-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='max-w-2xl mx-auto text-center'
        >
          <div className='w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-8'>
            <Check className='w-10 h-10 text-blue-600' />
          </div>

          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Subscription updated
          </h1>

          <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
            Your changes are saved. You can return to the Dash app — the
            entitlement state updates within a few seconds.
          </p>

          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Button
              href='/'
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3'
            >
              Back to home
            </Button>
            <Button
              href='/subscribe'
              variant='outline'
              className='px-6 py-3'
            >
              View subscription options
            </Button>
          </div>

          <Link
            href='/'
            className='inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 mt-12'
          >
            <ArrowLeft className='h-4 w-4 mr-1' /> Return to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
