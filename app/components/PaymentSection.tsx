'use client';

import React, { useState } from 'react';
import { Shield, Lock, CheckCircle, CreditCard, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface PaymentSectionProps {
  email: string;
  setEmail: (email: string) => void;
  isEmailSubmitted: boolean;
  downloadError: string;
  downloadUrl: string;
  handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function PaymentSection({
  email,
  setEmail,
  isEmailSubmitted,
  downloadError,
  downloadUrl,
  handleEmailSubmit,
}: PaymentSectionProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 2000);
  };

  if (isCompleted) {
    return (
      <section className='py-20 bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-gray-950'>
        <div className='container mx-auto px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-2xl mx-auto text-center'
          >
            <div className='w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8'>
              <CheckCircle className='w-10 h-10 text-green-600' />
            </div>

            <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
              Payment Successful!
            </h2>

            <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
              Thank you for purchasing Dash! Your download will begin shortly.
            </p>

            <div className='bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 mb-8'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                What's Next?
              </h3>
              <div className='space-y-4 text-left'>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full' />
                  <span className='text-gray-600 dark:text-gray-300'>
                    Check your email for download instructions
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full' />
                  <span className='text-gray-600 dark:text-gray-300'>
                    Install Dash on your Mac
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full' />
                  <span className='text-gray-600 dark:text-gray-300'>
                    Start taking private notes immediately
                  </span>
                </div>
              </div>
            </div>

            <Button
              href='https://github.com/Efesop/rich-text-editor/releases/latest'
              className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg'
              rel='noopener noreferrer'
            >
              <Download className='mr-2 h-5 w-5' />
              Download Dash
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id='payment-section'
      className='py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950'
    >
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center mb-16'
          >
            <div className='inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/50 px-4 py-2 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-6'>
              <Lock className='mr-2 h-4 w-4' />
              <span className='text-sm font-medium'>Secure Purchase</span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
              Get Dash Today
            </h2>

            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Join thousands of privacy-conscious users who've chosen Dash over
              corporate surveillance. One payment, lifetime access.
            </p>
          </motion.div>

          <div className='gap-12 items-start'>
            {/* Payment Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl'
            >
              <div className='flex items-center gap-3 mb-6'>
                <CreditCard className='w-6 h-6 text-blue-600' />
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                  Complete Your Purchase
                </h3>
              </div>

              <form onSubmit={handlePayment} className='space-y-6'>
                <div className='space-y-4'>
                  <span className='font-semibold text-gray-900 dark:text-white text-2xl'>
                    $9.99
                  </span>

                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                    What You Get
                  </h3>
                  <div className='space-y-4'>
                    {[
                      'Full access to Dash Notes App',
                      'Lifetime license (no subscriptions)',
                      'Free updates and new features',
                      'Priority customer support',
                      '30-day money-back guarantee',
                    ].map((benefit, index) => (
                      <div key={index} className='flex items-center gap-3'>
                        <CheckCircle className='w-5 h-5 text-green-600 flex-shrink-0' />
                        <span className='text-gray-700 dark:text-gray-300'>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='border-t border-gray-200 dark:border-gray-700 pt-4'>
                  <div className='flex items-center justify-between text-lg font-bold text-gray-900 dark:text-white'>
                    <span>Total</span>
                    <span>$9.99</span>
                  </div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
                    One-time payment, no subscriptions
                  </p>
                </div>

                <Button
                  type='submit'
                  disabled={isProcessing}
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold'
                >
                  {isProcessing ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className='mr-2 h-5 w-5' />
                      Complete Purchase
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
