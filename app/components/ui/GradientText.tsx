'use client';

import React from 'react';
import { cn } from '../../../lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  gradient?: 'blue-purple' | 'blue-cyan' | 'purple-pink' | 'green-cyan';
}

export default function GradientText({
  children,
  className,
  animated = false,
  gradient = 'blue-purple',
}: GradientTextProps) {
  const gradientClasses = {
    'blue-purple': 'from-blue-500 via-purple-500 to-blue-500',
    'blue-cyan': 'from-blue-500 via-cyan-500 to-blue-500',
    'purple-pink': 'from-purple-500 via-pink-500 to-purple-500',
    'green-cyan': 'from-green-500 via-cyan-500 to-green-500',
  };

  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        gradientClasses[gradient],
        animated && 'bg-[length:200%_auto] animate-gradient-shift',
        className
      )}
    >
      {children}
    </span>
  );
}
