import React from 'react'
import { Shield, Key, Eye, Database } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'AES-256 encryption',
      description:
        'The gold standard used by banks and governments to protect the most sensitive data worldwide.'
    },
    {
      icon: Key,
      title: 'Your keys, your control',
      description:
        'Encryption keys are generated and stored only on your device. We never see or store them.'
    },
    {
      icon: Eye,
      title: 'Zero-knowledge design',
      description:
        "Even we can't read your notes. Your data is encrypted before it touches our code."
    },
    {
      icon: Database,
      title: 'Local-only storage',
      description:
        'Notes never leave your device. No cloud uploads, no external dependencies.'
    }
  ]

  const technicalSpecs = [
    { label: 'Encryption', value: 'AES-256-GCM' },
    {
      label: 'Key Derivation',
      value: 'PBKDF2-SHA256 (200k iterations)'
    },
    {
      label: 'Random Generation',
      value: 'Cryptographically secure'
    },
    { label: 'Storage', value: 'Local device only' },
    { label: 'Transmission', value: 'Never transmitted' }
  ]

  return (
    <section
      id='security'
      className='py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950'
    >
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            Bank-vault security for your thoughts
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Your privacy is mathematically guaranteed with military-grade
            encryption and zero-knowledge architecture.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 items-center mb-20'>
          <div className='space-y-8'>
            {securityFeatures.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='flex gap-4'
              >
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center'>
                    <item.icon className='w-6 h-6 text-blue-600' />
                  </div>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className='relative'>
            <div className='bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8'>
              <div className='text-center mb-6'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                  Technical Security Details
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  For the technically minded
                </p>
              </div>

              <div className='space-y-4'>
                {technicalSpecs.map((spec, index) => (
                  <div
                    key={spec.label}
                    className='flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0'
                  >
                    <span className='font-medium text-gray-900 dark:text-white'>
                      {spec.label}
                    </span>
                    <span className='text-gray-600 dark:text-gray-300 font-mono text-sm'>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
