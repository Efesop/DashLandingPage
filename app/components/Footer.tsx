import React from 'react'
import Link from 'next/link'
import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-gray-900 dark:bg-black'>
      <div className='container mx-auto px-6 lg:px-8 py-12'>
        <div className='grid gap-8 md:grid-cols-4'>
          <div className='md:col-span-2'>
            <div className='flex items-center space-x-3 mb-4'>
              <Shield className='h-8 w-8 text-blue-400' />
              <span className='text-xl font-semibold text-white'>Dash</span>
            </div>
            <p className='text-gray-300 mb-4 max-w-md'>
              Own your notes for real. The only notes app that puts privacy
              first and keeps your thoughts completely secure.
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-white mb-4'>Privacy</h3>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>100% Offline</li>
              <li>No Tracking</li>
              <li>No Accounts</li>
              <li>Military Encryption</li>
              <li>Zero Knowledge</li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-white mb-4'>Connect</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='https://twitter.com/efesopoulos'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Follow on X/Twitter
                </Link>
              </li>
              <li>
                <Link
                  href='https://buymeacoffee.com/efez'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Buy me a coffee
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-gray-800 text-center'>
          <p className='text-gray-400 text-sm'>
            © 2025 Dash. Your privacy is our priority.
          </p>
        </div>
      </div>
    </footer>
  )
}
