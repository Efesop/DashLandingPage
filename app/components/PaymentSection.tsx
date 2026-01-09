'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  Lock,
  CreditCard,
  Loader2,
  Check,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
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

  const benefits = [
    'Full access to Dash',
    'Lifetime license (no subscriptions)',
    'Free updates and new features',
    'Priority customer support',
  ];

  return (
    <section
      id='payment-section'
      className='py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-12 sm:mb-16'
          >
            <div className='inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/50 px-4 py-2 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-6'>
              <Lock className='mr-2 h-4 w-4' />
              <span className='text-sm font-medium'>Secure Purchase</span>
            </div>

            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
              Get <span className='text-blue-600 dark:text-blue-400'>Dash</span> Today
            </h2>

            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Join thousands of privacy-conscious users who've chosen Dash
              over corporate surveillance. One payment, lifetime access.
            </p>

            <div className='mt-6'>
              <Link
                href='/payment/recovery'
                className='text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors'
              >
                Already purchased? Recover your downloads →
              </Link>
            </div>
          </motion.div>

          {/* Pricing Card - Centered with side mockup */}
          <div className='relative flex justify-center'>
            {/* App Preview - positioned to the left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8'
            >
              <div className='relative w-56'>
                <div className='bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700'>
                  <div className='flex items-center gap-3 mb-4'>
                    <Image
                      src='/images/Dash256.png'
                      alt='Dash Logo'
                      width={40}
                      height={40}
                      className='rounded-lg'
                    />
                    <div>
                      <p className='font-semibold text-gray-900 dark:text-white'>
                        Dash
                      </p>
                      <p className='text-xs text-gray-500'>Private Notes App</p>
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <div className='h-2 bg-gray-100 dark:bg-gray-700 rounded-full w-full' />
                    <div className='h-2 bg-gray-100 dark:bg-gray-700 rounded-full w-3/4' />
                    <div className='h-2 bg-gray-100 dark:bg-gray-700 rounded-full w-5/6' />
                  </div>
                </div>

                {/* Floating badge */}
                <div className='absolute -top-3 -right-3 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700'>
                  <div className='flex items-center gap-1.5'>
                    <Zap className='w-3 h-3 text-blue-500' />
                    <span className='text-xs font-medium text-gray-700 dark:text-gray-300'>
                      Instant Download
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing Card - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='w-full max-w-md'
            >
              <div className='bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden'>
                <form onSubmit={handlePayment} className='p-6 sm:p-8'>
                  {/* Price header */}
                  <div className='text-center mb-8'>
                    <p className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                      One-time purchase
                    </p>
                    <div className='flex items-baseline justify-center gap-1'>
                      <span className='text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white'>
                        $14
                      </span>
                      <span className='text-2xl font-bold text-gray-400'>
                        .99
                      </span>
                    </div>
                    <p className='text-gray-500 dark:text-gray-400 mt-2'>
                      Lifetime access • No subscriptions
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className='space-y-3 mb-8'>
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className='flex items-center gap-3'
                      >
                        <div className='flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center'>
                          <Check className='w-3 h-3 text-green-600 dark:text-green-400' />
                        </div>
                        <span className='text-sm text-gray-700 dark:text-gray-300'>
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Buy button */}
                  <Button
                    type='submit'
                    disabled={isProcessing}
                    className='w-full h-12 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-colors duration-200'
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

                  {/* Trust badges */}
                  <div className='flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-100 dark:border-gray-800'>
                    <div className='flex items-center gap-1.5 text-xs text-gray-500'>
                      <Shield className='w-4 h-4 text-green-500' />
                      <span>Secure checkout</span>
                    </div>
                    <div className='flex items-center gap-1.5 text-xs text-gray-500'>
                      <Lock className='w-4 h-4 text-blue-500' />
                      <span>SSL encrypted</span>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
