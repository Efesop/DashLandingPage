'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  Lock,
  CreditCard,
  Loader2,
  Check,
  Zap,
  X,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { createCheckoutSession, handlePaymentError } from '../../lib/payment';
import { CheckoutSessionRequest } from '../../types/payment';

// Feature flag - set to true when Bitcoin payments are ready
const ENABLE_BITCOIN_PAYMENTS = false;

// Bitcoin icon component
const BitcoinIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546z" />
    <path
      fill="#fff"
      d="M14.434 9.094c.238-1.59-.973-2.446-2.63-3.016l.538-2.155-1.313-.327-.524 2.1c-.345-.086-.7-.167-1.053-.248l.528-2.115-1.312-.328-.537 2.155c-.286-.065-.567-.13-.84-.197l.001-.006-1.811-.452-.35 1.403s.973.223.953.237c.531.133.627.484.61.763l-.611 2.45c.036.01.084.024.136.045l-.138-.034-.857 3.437c-.065.161-.23.402-.601.31.013.019-.954-.238-.954-.238l-.652 1.503 1.71.426c.318.08.63.163.937.242l-.543 2.18 1.312.327.537-2.157c.358.097.706.187 1.046.272l-.535 2.143 1.313.328.543-2.176c2.236.424 3.917.253 4.625-1.772.571-1.631-.028-2.572-1.207-3.185.86-.198 1.507-.764 1.68-1.932zM11.93 15.52c-.406 1.63-3.153.749-4.044.528l.721-2.893c.892.222 3.75.662 3.323 2.365zm.407-4.115c-.37 1.485-2.657.73-3.4.545l.654-2.623c.743.185 3.133.53 2.746 2.078z"
    />
  </svg>
);

// Lightning invoice data type
interface LightningInvoice {
  paymentId: string;
  lnInvoice: string;
  amountSats: number;
  amountUsd: number;
  expiresAt: string;
  expirationInSec: number;
}

export default function PaymentSection() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isBitcoinProcessing, setIsBitcoinProcessing] = useState(false);
  const [bitcoinError, setBitcoinError] = useState<string | null>(null);
  const [lightningInvoice, setLightningInvoice] = useState<LightningInvoice | null>(null);
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isPolling, setIsPolling] = useState(false);

  // Poll for payment status
  const pollPaymentStatus = useCallback(async (paymentId: string) => {
    try {
      const response = await fetch(`/api/voltage/verify-payment?payment_id=${paymentId}`);
      const data = await response.json();

      if (data.paymentStatus === 'paid') {
        // Payment successful! Redirect to success page
        window.location.href = `/payment/success?source=voltage&payment_id=${paymentId}`;
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error polling payment status:', error);
      return false;
    }
  }, []);

  // Start polling when invoice is created
  useEffect(() => {
    if (!lightningInvoice || isPolling) return;

    setIsPolling(true);
    const pollInterval = setInterval(async () => {
      const paid = await pollPaymentStatus(lightningInvoice.paymentId);
      if (paid) {
        clearInterval(pollInterval);
      }
    }, 3000); // Poll every 3 seconds

    return () => {
      clearInterval(pollInterval);
      setIsPolling(false);
    };
  }, [lightningInvoice, pollPaymentStatus, isPolling]);

  // Countdown timer for invoice expiration
  useEffect(() => {
    if (!lightningInvoice) return;

    setTimeLeft(lightningInvoice.expirationInSec);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setLightningInvoice(null);
          setBitcoinError('Invoice expired. Please try again.');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [lightningInvoice]);

  const handleBitcoinPayment = async () => {
    setIsBitcoinProcessing(true);
    setBitcoinError(null);

    try {
      const response = await fetch('/api/voltage/create-invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create Bitcoin invoice');
      }

      // Set the lightning invoice to show the modal
      setLightningInvoice(data);
      setIsBitcoinProcessing(false);
    } catch (error) {
      console.error('Bitcoin payment error:', error);
      setBitcoinError(
        error instanceof Error ? error.message : 'Failed to create Bitcoin payment'
      );
      setIsBitcoinProcessing(false);
    }
  };

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

  const copyToClipboard = async () => {
    if (!lightningInvoice) return;
    try {
      await navigator.clipboard.writeText(lightningInvoice.lnInvoice);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const openInWallet = () => {
    if (!lightningInvoice) return;
    window.location.href = `lightning:${lightningInvoice.lnInvoice}`;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
            {/* Pricing Card - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='w-full max-w-md relative'
            >
              {/* App Preview - positioned to the left of pricing card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='hidden xl:block absolute right-full top-1/2 -translate-y-1/2 mr-12'
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

            {/* Pricing card content */}
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

                  {/* Buy button - Card payment */}
                  <Button
                    type='submit'
                    disabled={isProcessing || isBitcoinProcessing || !!lightningInvoice}
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
                        Buy with Card
                      </>
                    )}
                  </Button>

                  {/* Bitcoin payment section - controlled by feature flag */}
                  {ENABLE_BITCOIN_PAYMENTS && (
                    <>
                      {/* Divider */}
                      <div className='flex items-center gap-4 my-4'>
                        <div className='flex-1 h-px bg-gray-200 dark:bg-gray-700' />
                        <span className='text-sm text-gray-500 dark:text-gray-400'>or</span>
                        <div className='flex-1 h-px bg-gray-200 dark:bg-gray-700' />
                      </div>

                      {/* Bitcoin payment button */}
                      <Button
                        type='button'
                        onClick={handleBitcoinPayment}
                        disabled={isProcessing || isBitcoinProcessing || !!lightningInvoice}
                        className='w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-lg shadow-orange-500/20 transition-colors duration-200'
                      >
                        {isBitcoinProcessing ? (
                          <>
                            <Loader2 className='w-5 h-5 animate-spin mr-2' />
                            Creating Invoice...
                          </>
                        ) : (
                          <>
                            <BitcoinIcon className='mr-2 h-5 w-5' />
                            Pay with Bitcoin
                          </>
                        )}
                      </Button>

                      {/* Lightning Invoice Modal */}
                      <AnimatePresence>
                        {lightningInvoice && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className='mt-4 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg'
                          >
                            {/* Header with timer */}
                            <div className='flex items-center justify-between mb-3'>
                              <div className='flex items-center gap-2'>
                                <Zap className='w-4 h-4 text-yellow-500' />
                                <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                                  Lightning Invoice
                                </span>
                              </div>
                              <div className='flex items-center gap-2'>
                                <span className='text-xs text-gray-500'>Expires in</span>
                                <span className={`text-sm font-mono font-medium ${timeLeft < 60 ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>
                                  {formatTime(timeLeft)}
                                </span>
                              </div>
                            </div>

                            {/* Amount */}
                            <div className='text-center mb-3'>
                              <span className='text-2xl font-bold text-gray-900 dark:text-white'>
                                ${lightningInvoice.amountUsd.toFixed(2)} USD
                              </span>
                              <p className='text-sm text-gray-500 dark:text-gray-400'>
                                ≈ {lightningInvoice.amountSats.toLocaleString()} sats
                              </p>
                            </div>

                            {/* Invoice string (truncated) */}
                            <div className='mb-3'>
                              <div className='bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-600'>
                                <code className='text-xs text-gray-600 dark:text-gray-400 break-all'>
                                  {lightningInvoice.lnInvoice.slice(0, 50)}...
                                </code>
                              </div>
                            </div>

                            {/* Action buttons */}
                            <div className='flex gap-2 mb-3'>
                              <Button
                                type='button'
                                onClick={openInWallet}
                                className='flex-1 h-10 bg-yellow-500 hover:bg-yellow-600 text-white font-medium'
                              >
                                <ExternalLink className='w-4 h-4 mr-2' />
                                Open Wallet
                              </Button>
                              <Button
                                type='button'
                                onClick={copyToClipboard}
                                variant='outline'
                                className='h-10 px-4'
                              >
                                {copied ? (
                                  <Check className='w-4 h-4 text-green-500' />
                                ) : (
                                  <Copy className='w-4 h-4' />
                                )}
                              </Button>
                            </div>

                            {/* Polling indicator */}
                            <div className='flex items-center justify-center gap-2 text-xs text-gray-500'>
                              <Loader2 className='w-3 h-3 animate-spin' />
                              <span>Waiting for payment...</span>
                            </div>

                            {/* Cancel button */}
                            <button
                              type='button'
                              onClick={() => setLightningInvoice(null)}
                              className='mt-3 w-full text-center text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                            >
                              Cancel and try again
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Bitcoin error message */}
                      <AnimatePresence>
                        {bitcoinError && !lightningInvoice && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className='mt-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg'
                          >
                            <div className='flex items-start gap-2'>
                              <X className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                              <p className='text-sm text-red-600 dark:text-red-400'>
                                {bitcoinError}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Bitcoin info badge */}
                      {!lightningInvoice && (
                        <div className='mt-3 p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg'>
                          <div className='flex items-center gap-2'>
                            <Zap className='w-4 h-4 text-orange-500' />
                            <p className='text-xs text-orange-700 dark:text-orange-300'>
                              Lightning Network - instant, private, near-zero fees
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  )}

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
