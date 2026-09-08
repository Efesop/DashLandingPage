'use client';

import React from 'react';
import CTASection from '../CTASection';

/**
 * Compatibility wrapper for pages still on the legacy skeleton: renders the homepage closing band
 * (black, no binary field) with the page's copy. New pages use CTASection directly through ArticleLayout.
 * `buttonText`, `onClick` and `variant` are accepted and ignored.
 */
interface CTABannerProps {
  headline: string;
  subheadline?: string;
  buttonText?: string;
  onClick?: () => void;
  variant?: 'default' | 'dark' | 'gradient';
}

export default function CTABanner({ headline, subheadline }: CTABannerProps) {
  return <CTASection headline={headline} subheadline={subheadline} bits={false} />;
}
