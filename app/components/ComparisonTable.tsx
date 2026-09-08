'use client';

import BitsField from './BitsField';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

export type ComparisonColumn = { key: string; label: string; highlight?: boolean };
/** A cell is `true`/`false` for a check/cross, or a short string ("Partial", "Plugin") rendered in mono. */
export type ComparisonRow = { feature: string; values: Record<string, boolean | string> };

export const DEFAULT_COLUMNS: ComparisonColumn[] = [
  { key: 'dash', label: 'Dash', highlight: true },
  { key: 'notion', label: 'Notion' },
  { key: 'evernote', label: 'Evernote' },
  { key: 'obsidian', label: 'Obsidian' },
];

const r = (feature: string, dash: boolean, notion: boolean, evernote: boolean, obsidian: boolean): ComparisonRow => ({
  feature,
  values: { dash, notion, evernote, obsidian },
});

export const DEFAULT_ROWS: ComparisonRow[] = [
  r('Works fully offline', true, false, false, true),
  r('No account required', true, false, false, true),
  r('Zero tracking', true, false, false, true),
  r('AES-256 note encryption', true, false, false, false),
  r('No subscription required', true, false, false, true),
  r('End-to-end encrypted sync', true, false, false, true),
  r('Biometric lock', true, false, true, false),
  r('Self-destructing notes', true, false, false, false),
  r('Duress password', true, false, false, false),
  r('Wiki-style [[links]]', true, true, false, true),
  r('Local AI (on-device)', true, false, false, false),
  r('Open source', true, false, false, false),
];

function Mark({ value }: { value: boolean | string | undefined }) {
  if (typeof value === 'string') {
    return <span className='font-mono text-[13px] text-gray-500'>{value}</span>;
  }
  return value ? (
    <CheckCircle2 className='w-5 h-5 text-green-600' aria-label='Yes' />
  ) : (
    <X className='w-[18px] h-[18px] text-gray-400' aria-label='No' />
  );
}

const EDGE_MASK = 'linear-gradient(90deg, #000 0%, transparent 18%, transparent 82%, #000 100%)';

type Props = {
  columns?: ComparisonColumn[];
  rows?: ComparisonRow[];
  heading?: string;
  subheading?: string;
  /** Silver band with the masked binary field behind the table (homepage). Off for article pages. */
  band?: boolean;
  id?: string;
};

export default function ComparisonTable({
  columns = DEFAULT_COLUMNS,
  rows = DEFAULT_ROWS,
  heading = 'How Dash compares',
  subheading = 'The honest version. Notion and Obsidian are excellent at things Dash does not try to do.',
  band = true,
  id = 'comparison',
}: Props) {
  const sectionClass = band
    ? 'relative overflow-hidden isolate py-20 sm:py-24 mt-8'
    : 'py-16 sm:py-20';
  const sectionStyle = band
    ? { background: 'linear-gradient(120deg, #f7f7f8 0%, #eeeff2 50%, #f7f7f8 100%)' }
    : undefined;

  return (
    <section id={id} className={sectionClass} style={sectionStyle}>
      {band && (
        <BitsField
          className='absolute inset-0 w-full h-full -z-10'
          base={0.07}
          peak={0.18}
          period={11}
          style={{ WebkitMaskImage: EDGE_MASK, maskImage: EDGE_MASK }}
        />
      )}
      <div className='container mx-auto px-6 lg:px-8 flex flex-col gap-7'>
        {(heading || subheading) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 lg:gap-10'
          >
            {heading && (
              <h2 className='text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.035em] leading-[1.05] text-gray-900'>
                {heading}
              </h2>
            )}
            {subheading && <p className='text-[17px] text-gray-500 max-w-[40ch]'>{subheading}</p>}
          </motion.div>
        )}

        <div className='overflow-x-auto rounded-[20px] border border-gray-200 bg-white'>
          <table className='w-full min-w-[720px] border-collapse text-[15.5px]'>
            <thead>
              <tr className='bg-gray-50 text-[12px] font-semibold uppercase tracking-[0.04em] text-gray-500'>
                <th scope='col' className='text-left font-semibold px-6 h-14 border-b border-gray-200'>
                  Feature
                </th>
                {columns.map((c) => (
                  <th
                    key={c.key}
                    scope='col'
                    className={`w-40 h-14 font-semibold border-b border-gray-200 ${c.highlight ? 'bg-blue-50 text-blue-700' : ''}`}
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}>
                  <th scope='row' className='text-left font-normal px-6 h-[54px] text-gray-900'>
                    {row.feature}
                  </th>
                  {columns.map((c) => (
                    <td key={c.key} className={`h-[54px] ${c.highlight ? 'bg-blue-50/60' : ''}`}>
                      <div className='flex items-center justify-center'>
                        <Mark value={row.values[c.key]} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
