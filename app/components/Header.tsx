'use client'

import React from 'react'
import Link from 'next/link'
import { Shield } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import BuyMeCoffeeButton from './ui/BuyMeCoffeeButton'

interface HeaderProps {
  email: string
  setEmail: (email: string) => void
  isEmailSubmitted: boolean
  downloadError: string
  downloadUrl: string
  handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function Header({
  email,
  setEmail,
  isEmailSubmitted,
  downloadError,
  downloadUrl,
  handleEmailSubmit
}: HeaderProps) {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl'>
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <Link
            className='flex items-center space-x-3'
            href='#'
            aria-label='Dash - Private Notes App'
          >
            <Shield className='h-8 w-8 text-blue-600' />
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
            {!isEmailSubmitted ? (
              <form
                onSubmit={handleEmailSubmit}
                className='hidden sm:flex items-center space-x-3'
              >
                <Input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter email'
                  required
                  className='w-40 h-9 text-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                  aria-label='Email address for download'
                />
                <Button
                  type='submit'
                  size='sm'
                  className='h-9 bg-blue-600 hover:bg-blue-700 text-white'
                >
                  Buy now
                </Button>
              </form>
            ) : (
              <div className='hidden sm:flex'>
                {downloadError ? (
                  <div className='text-xs text-red-500'>{downloadError}</div>
                ) : (
                  <Button
                    href={downloadUrl || '#'}
                    disabled={!downloadUrl}
                    size='sm'
                    className='h-9 bg-blue-600 hover:bg-blue-700 text-white'
                  >
                    {downloadUrl ? 'Download' : 'Loading...'}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
