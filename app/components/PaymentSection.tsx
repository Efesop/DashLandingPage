'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield,
  Lock,
  CreditCard,
  Download,
  Loader2,
  Check,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { createCheckoutSession, handlePaymentError } from '../../lib/payment';
import { CheckoutSessionRequest } from '../../types/payment';

export default function PaymentSection() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsProcessing(true);

    try {
      const request: CheckoutSessionRequest = {
        productId: 'dash-notes-app',
        successUrl: `${window.location.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/payment/cancel`,
      };

      const response = await createCheckoutSession(request);

      if (response.url) {
        window.location.href = response.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Payment error:', error);
      const paymentError = handlePaymentError(error);
      console.error('Payment error details:', paymentError);
      alert(`Payment failed: ${paymentError.message}`);
      setIsProcessing(false);
    }
  };

  return (
    <>
      <section
        id='payment-section'
        className='py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950'
      >
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-6xl mx-auto'>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-center mb-12 sm:mb-16'
            >
              <div className='inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/50 px-3 sm:px-4 py-2 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-4 sm:mb-6'>
                <Lock className='mr-2 h-3 w-3 sm:h-4 sm:w-4' />
                <span className='text-xs sm:text-sm font-medium'>
                  Secure Purchase
                </span>
              </div>

              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
                Get Dash Today
              </h2>

              <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0'>
                Join thousands of privacy-conscious users who've chosen Dash
                over corporate surveillance. One payment, lifetime access.
              </p>

              <div className='mt-6'>
                <Link
                  href='/payment/recovery'
                  className='text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
                >
                  Already purchased? Recover your downloads →
                </Link>
              </div>
            </motion.div>

            <div className='bg-white dark:bg-gray-900 flex flex-col border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto'>
              <form onSubmit={handlePayment}>
                <div className='flex flex-row justify-between'>
                  <div className='text-left'>
                    <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                      What You Get:
                    </h4>
                    <div className='space-y-3'>
                      {[
                        'Full access to Dash',
                        'Lifetime license (no subscriptions)',
                        'Free updates and new features',
                        'Priority customer support',
                      ].map((benefit, index) => (
                        <div key={index} className='flex items-start gap-3'>
                          <Check className='w-4 h-4 text-green-600 flex-shrink-0 mt-0.5' />
                          <span className='text-sm text-gray-700 dark:text-gray-300 leading-relaxed'>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='mb-6'>
                    <span className='font-bold text-gray-900 dark:text-white text-3xl sm:text-4xl'>
                      $14.99
                    </span>
                    <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
                      One-time payment
                    </p>
                  </div>
                </div>
                <div className='border-t border-gray-200 dark:border-gray-700 pt-4 my-6'>
                  <div className='flex items-center justify-between text-lg font-bold text-gray-900 dark:text-white mb-2'>
                    <span>Total</span>
                    <span>$14.99</span>
                  </div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    No subscriptions
                  </p>
                </div>

                <Button
                  type='submit'
                  disabled={isProcessing}
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-xl'
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className='w-5 h-5 animate-spin mr-2' />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className='mr-2 h-5 w-5' />
                      Buy Now
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
