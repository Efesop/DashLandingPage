'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
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
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out ${isScrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
          } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          willChange: 'transform',
        }}
      >
        <div className='container mx-auto px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            {/* Logo */}
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

            {/* Navigation */}
            <nav className='hidden md:flex items-center space-x-1'>
              <BuyMeCoffeeButton />

              {[
                { href: '#features', label: 'Features' },
                { href: '#security', label: 'Security' },
                { href: '#comparison', label: 'Compare' },
                { href: '#faq', label: 'FAQ' },
              ].map((link) => (
                <Link
                  key={link.href}
                  className='px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className='flex items-center space-x-4'>
              <Button
                onClick={() =>
                  document
                    .getElementById('payment-section')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className='h-9 px-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200'
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
