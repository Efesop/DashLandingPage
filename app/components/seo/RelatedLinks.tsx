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
  return (
    <section className="py-16 bg-[#0a1628]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-semibold text-white">{heading}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all"
              >
                <h3 className="text-white font-medium mb-1 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  {link.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
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
