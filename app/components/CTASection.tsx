import React from 'react'
import { Download } from 'lucide-react'
import { Button } from './ui/button'


interface CTASectionProps {
  email: string
  setEmail: (email: string) => void
  isEmailSubmitted: boolean
  downloadError: string
  downloadUrl: string
  handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function CTASection({
  email,
  setEmail,
  isEmailSubmitted,
  downloadError,
  downloadUrl,
  handleEmailSubmit
}: CTASectionProps) {
  return (
    <section className='py-20 bg-blue-600 dark:bg-blue-700'>
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Take back control of your notes
          </h2>
          <p className='text-lg text-blue-100 mb-10 max-w-2xl mx-auto'>
            Join thousands who've chosen true privacy over corporate
            surveillance. Download Dash and own your thoughts for real.
          </p>

          {/* Email form hidden but not deleted */}
          {/* 
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-8'>
            {!isEmailSubmitted ? (
              <form
                onSubmit={handleEmailSubmit}
                className='flex w-full max-w-md gap-3'
              >
                <Input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  required
                  className='flex-1 h-12 bg-white text-gray-900 border-0 focus:ring-2 focus:ring-blue-300'
                  aria-label='Email address for download'
                />
                <Button
                  type='submit'
                  className='h-12 px-6 bg-white text-blue-600 hover:bg-gray-100 font-semibold'
                >
                  <Download className='mr-2 h-4 w-4' />
                  Download
                </Button>
              </form>
            ) : (
              <>
                {downloadError ? (
                  <div className='rounded-lg bg-red-50 p-4 border border-red-200'>
                    <p className='text-red-600 font-medium'>
                      Download Error
                    </p>
                    <p className='text-red-500 text-sm'>{downloadError}</p>
                    <Button
                      onClick={() => window.location.reload()}
                      className='mt-2 bg-red-600 text-white'
                      size='sm'
                    >
                      Try Again
                    </Button>
                  </div>
                ) : (
                  <Button
                    href={downloadUrl || '#'}
                    className='h-12 px-6 bg-white text-blue-600 hover:bg-gray-100 font-semibold'
                    disabled={!downloadUrl}
                  >
                    <Download className='mr-2 h-4 w-4' />
                    {downloadUrl ? 'Download for Mac' : 'Loading...'}
                  </Button>
                )}
              </>
            )}
          </div>
          */}

          {/* CTA button that anchors to pricing section */}
          <div className='mb-8'>
            <Button
              onClick={() =>
                document
                  .getElementById('payment-section')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className='h-12 px-8 bg-white text-blue-600 hover:bg-gray-100 font-semibold'
            >
              <Download className='mr-2 h-4 w-4' />
              Get Dash for Mac
            </Button>
          </div>

          <p className='text-blue-200'>No account required • Mac</p>
        </div>
      </div>
    </section>
  )
}
