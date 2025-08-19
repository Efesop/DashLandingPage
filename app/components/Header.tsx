'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Input } from './ui/input';
import BuyMeCoffeeButton from './ui/BuyMeCoffeeButton';

interface HeaderProps {
  email: string;
  setEmail: (email: string) => void;
  isEmailSubmitted: boolean;
  downloadError: string;
  downloadUrl: string;
  handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Header({
  email,
  setEmail,
  isEmailSubmitted,
  downloadError,
  downloadUrl,
  handleEmailSubmit,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled down
      setIsScrolled(currentScrollY > 10);

      // Hide/show header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Spacer div to prevent content jump */}
      <div className='h-16' />

      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full  dark:border-gray-800 backdrop-blur-xl shadow-sm transition-all duration-300 ease-out ${
          isScrolled && 'bg-white/90 dark:bg-gray-950/90 shadow-sm'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          willChange: 'transform',
          transform: 'translateY(0)',
        }}
      >
        <div className='container mx-auto px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <Link
              className='flex items-center space-x-3'
              href='#'
              aria-label='Dash - Private Notes App'
            >
              <Image
                src='/images/Dash256.png'
                alt='Dash Logo'
                width={32}
                height={32}
                className='h-8 w-8'
              />
              <span className='text-xl font-semibold text-gray-900 dark:text-white'>
                Dash
              </span>
            </Link>

            <nav className='hidden md:flex items-center space-x-8'>
              <BuyMeCoffeeButton />
              <Link
                className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'
                href='#features'
              >
                Features
              </Link>
              <Link
                className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'
                href='#security'
              >
                Security
              </Link>
              <Link
                className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'
                href='#comparison'
              >
                Compare
              </Link>
              <Link
                className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'
                href='#faq'
              >
                FAQ
              </Link>
            </nav>

            <div className='flex items-center space-x-4'>
              <Button
                onClick={() =>
                  document
                    .getElementById('payment-section')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className='h-8 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold'
              >
                Get Dash
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
