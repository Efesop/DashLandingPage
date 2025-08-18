import React from 'react'
import { Globe, Zap, Heart, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Globe,
      title: 'Works anywhere',
      description:
        "No internet? No problem. Your notes are always available, whether you're on a plane or in a remote location.",
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Lightning fast',
      description:
        "No network delays or server downtime. Everything loads instantly because it's stored right on your device.",
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Stress-free privacy',
      description:
        'Never worry about data breaches, account hacks, or corporate surveillance. Your notes stay yours.',
      color: 'blue'
    }
  ]

  return (
    <section className='py-24 bg-gray-900 relative overflow-hidden'>
      {/* Background pattern */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]' />

      <div className='container mx-auto px-6 lg:px-8 relative'>
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center rounded-full bg-gray-800 border border-gray-700 px-4 py-2 text-gray-300 mb-6'
          >
            <CheckCircle className='mr-2 h-4 w-4 text-blue-400' />
            <span className='text-sm font-medium'>
              No cloud dependencies
            </span>
          </motion.div>

          <h2 className='text-5xl md:text-6xl font-bold text-white mb-6'>
            No Cloud,{' '}
            <span className='bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>
              No Worries
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Experience the freedom of truly private notes that work exactly
            how you'd expect
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className='relative group'
            >
              <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 text-center hover:border-gray-600 transition-all duration-300'>
                <div
                  className={`w-20 h-20 bg-${benefit.color}-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-${benefit.color}-500/30`}
                >
                  <benefit.icon
                    className={`w-10 h-10 text-${benefit.color}-400`}
                  />
                </div>

                <h3 className='text-2xl font-bold text-white mb-4'>
                  {benefit.title}
                </h3>

                <p className='text-gray-300 leading-relaxed'>
                  {benefit.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r from-${benefit.color}-500/20 to-${benefit.color}-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity -z-10`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
