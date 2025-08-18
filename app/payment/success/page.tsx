'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Download, Mail, Shield, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [downloadToken, setDownloadToken] = useState<string | null>(null);
  const [downloadsRemaining, setDownloadsRemaining] = useState<number>(0);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const sessionId = searchParams.get('session_id');
        if (!sessionId) {
          setError('No session ID provided');
          setIsLoading(false);
          return;
        }

        // Verify payment with our API
        const response = await fetch(
          `/api/verify-payment?session_id=${sessionId}`
        );
        const data = await response.json();

        // Check if payment was successful based on paymentStatus
        if (data.paymentStatus === 'paid') {
          setPaymentDetails(data);

          // Generate secure download token
          const tokenResponse = await fetch('/api/generate-download-token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sessionId }),
          });

          if (tokenResponse.ok) {
            const tokenData = await tokenResponse.json();
            setDownloadToken(tokenData.downloadToken);
            setDownloadsRemaining(tokenData.downloadsRemaining);
          } else {
            console.error('Failed to generate download token');
          }
        } else {
          setError(
            `Payment verification failed. Status: ${data.paymentStatus}`
          );
        }
      } catch (err) {
        setError('Failed to verify payment');
        console.error('Payment verification error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    verifyPayment();
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className='min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-gray-950 flex items-center justify-center'>
        <div className='text-center'>
          <Loader2 className='w-12 h-12 animate-spin text-blue-600 mx-auto mb-4' />
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Verifying your payment...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-red-950/20 dark:to-gray-950'>
        <div className='container mx-auto px-6 lg:px-8 py-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-2xl mx-auto text-center'
          >
            <div className='w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-8'>
              <Shield className='w-10 h-10 text-red-600' />
            </div>

            <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
              Payment Verification Failed
            </h1>

            <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
              {error}. Please contact support if you believe this is an error.
            </p>

            <div className='space-y-4'>
              <Button
                href='/'
                className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg'
              >
                Return to Home
              </Button>

              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Need help? Contact us at support@dashnote.io
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-gray-950'>
      <div className='container mx-auto px-6 lg:px-8 py-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='max-w-2xl mx-auto text-center'
        >
          <div className='w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8'>
            <CheckCircle className='w-10 h-10 text-green-600' />
          </div>

          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
            Payment Successful!
          </h1>

          <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
            Thank you for purchasing Dash! Your download will begin shortly.
          </p>

          <div className='space-y-4'>
            {downloadToken ? (
              <div className='space-y-4'>
                <Button
                  href={`/api/secure-download?token=${downloadToken}`}
                  className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg'
                  rel='noopener noreferrer'
                >
                  <Download className='mr-2 h-5 w-5' />
                  Download Dash
                </Button>

                <div className='bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 text-sm'>
                  <p className='text-blue-800 dark:text-blue-200'>
                    🔒 Secure download link • {downloadsRemaining} downloads
                    remaining
                  </p>
                  <p className='text-blue-600 dark:text-blue-300 mt-1'>
                    Save this page to re-download if needed (expires in 24
                    hours)
                  </p>
                </div>
              </div>
            ) : (
              <Button
                href='/api/latest-release'
                className='bg-gray-500 text-white px-8 py-3 text-lg cursor-not-allowed'
                disabled
              >
                <Download className='mr-2 h-5 w-5' />
                Generating Secure Link...
              </Button>
            )}

            <div className='pt-4'>
              <Link
                href='/'
                className='text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
              >
                Return to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
