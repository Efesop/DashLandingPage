'use client';

import React, { useState } from 'react';
import {
  Shield,
  Lock,
  CheckCircle,
  CreditCard,
  Download,
  Loader2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  createCheckoutSession,
  validateEmail,
  handlePaymentError,
} from '../../lib/payment';
import { CheckoutSessionRequest } from '../../types/payment';

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
    
    // Validate email
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Create checkout session request
      const request: CheckoutSessionRequest = {
        email,
        productId: 'dash-notes-app',
        successUrl: `${window.location.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/payment/cancel`,
      };
      
      // Create Stripe checkout session
      const response = await createCheckoutSession(request);
      
      // Redirect to Stripe Checkout
      if (response.url) {
        window.location.href = response.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Payment error:', error);
      const paymentError = handlePaymentError(error);
      alert(`Payment failed: ${paymentError.message}`);
      setIsProcessing(false);
    }
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

          <div className='bg-white  flex flex-col border border-gray-200 dark:border-gray-700 rounded-2xl p-8 w-1/2 mx-auto'>
            <div className='flex items-center justify-center gap-3 mb-2'>
              <CreditCard className='w-6 h-6 text-blue-600' />
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                Complete Your Purchase
              </h3>
            </div>

            <form onSubmit={handlePayment} className='space-y-6'>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center justify-center mb-2'>
                  <span className='font-bold text-gray-900 dark:text-white text-3xl'>
                    $9.99
                  </span>
                </div>

                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                  What You Get:
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
                                      <Loader2 className='w-5 h-5 animate-spin mr-2' />
                                      Creating Checkout...
                                    </>
                                  ) : (
                                    <>
                                      <CreditCard className='mr-2 h-5 w-5' />
                                      Complete Purchase
                                    </>
                                  )}
                                </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
