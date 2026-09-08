'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface RelatedLink {
  title: string;
  href: string;
  description: string;
}

interface RelatedLinksProps {
  heading?: string;
  links: RelatedLink[];
}

export default function RelatedLinks({ heading = 'Keep reading', links }: RelatedLinksProps) {
  const displayLinks = links.slice(0, 3);

  return (
    <section className='py-16 sm:py-20'>
      <div className='container mx-auto px-6 lg:px-8 flex flex-col gap-5'>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-2xl sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.08] text-gray-900'
        >
          {heading}
        </motion.h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {displayLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='group rounded-2xl border border-gray-200 bg-white p-5 flex flex-col gap-1.5 hover:border-gray-400 transition-colors'
            >
              <span className='font-semibold text-[17px] text-gray-900 inline-flex items-center justify-between gap-3'>
                {link.title}
                <ArrowRight
                  className='w-4 h-4 flex-shrink-0 text-gray-400 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all'
                  aria-hidden='true'
                />
              </span>
              <span className='text-[14.5px] leading-relaxed text-gray-600'>{link.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
