'use client';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureShowcase from './components/FeatureShowcase';
import CoreFeatures from './components/CoreFeatures';
import SecuritySection from './components/SecuritySection';
import BenefitsSection from './components/BenefitsSection';
import ComparisonTable from './components/ComparisonTable';
import FAQSection from './components/FAQSection';
import PaymentSection from './components/PaymentSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function LandingPage() {
  const [downloadUrl, setDownloadUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [downloadError, setDownloadError] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mbljjdgo', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setIsEmailSubmitted(true);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    if (isEmailSubmitted) {
      fetch(
        'https://api.github.com/repos/Efesop/rich-text-editor/releases/latest'
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const macAsset = data.assets.find((asset: any) =>
            asset.name.endsWith('-arm64.dmg')
          );
          if (macAsset) {
            setDownloadUrl(macAsset.browser_download_url);
            setDownloadError('');
          } else {
            setDownloadError('Mac build not found in latest release');
            console.error('No ARM64 DMG asset found in release');
          }
        })
        .catch((error) => {
          console.error('Error fetching latest release:', error);
          setDownloadError('Failed to fetch latest release');
        });
    }
  }, [isEmailSubmitted]);

  const sharedProps = {
    email,
    setEmail,
    isEmailSubmitted,
    downloadError,
    downloadUrl,
    handleEmailSubmit,
  };

  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden font-sans'>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Dash',
            applicationCategory: 'ProductivityApplication',
            description:
              'Private notes app that keeps your data 100% offline and secure',
            operatingSystem: ['macOS'],
            offers: {
              '@type': 'Offer',
              price: '14.99',
              priceCurrency: 'USD',
            },
            author: {
              '@type': 'Person',
              name: 'Efez Sopoulos',
              url: 'https://twitter.com/efesopoulos',
            },
          }),
        }}
      />

      <Header {...sharedProps} />

      <main className='flex-1'>
        <HeroSection {...sharedProps} />
        <FeatureShowcase />
        <CoreFeatures />
        <SecuritySection />
        <BenefitsSection />
        <ComparisonTable />
        <PaymentSection />
        <FAQSection />
        <CTASection {...sharedProps} />
      </main>

      <Footer />
    </div>
  );
}
