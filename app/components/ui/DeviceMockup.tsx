'use client';

import React from 'react';
import { cn } from '../../../lib/utils';

interface DeviceMockupProps {
  children: React.ReactNode;
  variant?: 'macbook' | 'browser' | 'floating';
  className?: string;
  title?: string;
}

export default function DeviceMockup({
  children,
  variant = 'browser',
  className,
  title = 'Dash Notes',
}: DeviceMockupProps) {
  if (variant === 'macbook') {
    return (
      <div className={cn('relative', className)}>
        {/* MacBook Frame */}
        <div className="relative">
          {/* Screen bezel */}
          <div className="relative bg-gray-900 rounded-t-xl p-2 pb-0">
            {/* Camera notch */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full" />
            
            {/* Screen content */}
            <div className="bg-gray-800 rounded-t-lg overflow-hidden">
              {children}
            </div>
          </div>
          
          {/* Bottom bezel with keyboard hint */}
          <div className="relative">
            {/* Hinge */}
            <div className="h-3 bg-gradient-to-b from-gray-800 to-gray-700 rounded-b-lg" />
            {/* Base */}
            <div className="h-2 bg-gradient-to-b from-gray-600 to-gray-500 mx-4 rounded-b-xl" />
            {/* Shadow */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-black/20 blur-md rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'browser') {
    return (
      <div className={cn('relative', className)}>
        <div className="glass-card-dark rounded-xl overflow-hidden shadow-2xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/80 border-b border-white/5">
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            
            {/* Address bar */}
            <div className="flex-1 mx-4">
              <div className="flex items-center gap-2 bg-gray-800/60 rounded-md px-3 py-1.5">
                <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-gray-400 font-medium">{title}</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="relative">
            {children}
          </div>
        </div>
      </div>
    );
  }

  // Floating variant - minimal frame
  return (
    <div className={cn('relative', className)}>
      <div className="glass-card rounded-2xl overflow-hidden shadow-2xl animate-float">
        {/* Simple header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/50 dark:bg-gray-900/50 border-b border-gray-200/50 dark:border-white/5">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium ml-2">{title}</span>
        </div>
        
        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
}
