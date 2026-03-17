'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

interface RelatedLink {
  title: string;
  href: string;
  description: string;
}

interface RelatedLinksProps {
  heading?: string;
  links: RelatedLink[];
}

export default function RelatedLinks({
  heading = 'Related Resources',
  links,
}: RelatedLinksProps) {
  const displayLinks = links.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block p-5 rounded-xl border border-gray-200 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm"
              >
                <h3 className="text-gray-900 font-medium mb-1 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                  {link.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
