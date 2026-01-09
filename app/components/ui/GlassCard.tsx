'use client';

import React from 'react';
import { cn } from '../../../lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'gradient-border';
  className?: string;
  hover?: boolean;
  glow?: 'blue' | 'purple' | 'green' | 'none';
}

export default function GlassCard({
  children,
  variant = 'light',
  className,
  hover = true,
  glow = 'none',
}: GlassCardProps) {
  const baseClasses = 'rounded-2xl transition-all duration-300';

  const variantClasses = {
    light: 'glass-card',
    dark: 'glass-card-dark',
    'gradient-border': 'glass-card-dark gradient-border',
  };

  const hoverClasses = hover
    ? 'hover:translate-y-[-4px] hover:shadow-xl'
    : '';

  const glowClasses = {
    none: '',
    blue: 'glow-blue',
    purple: 'glow-purple',
    green: 'glow-green',
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        glowClasses[glow],
        className
      )}
    >
      {children}
    </div>
  );
}
