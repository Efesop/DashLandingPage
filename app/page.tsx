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
      {/* FAQ JSON-LD */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How is Dash different from other notes apps?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Dash is the only notes app that keeps everything 100% on your device. No cloud servers, no data collection, no corporate surveillance. Your notes are encrypted and completely private.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much is Dash?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Dash is a one-time purchase with no subscriptions or hidden costs. We believe privacy is a fundamental right, not a premium feature.',
                },
              },
              {
                '@type': 'Question',
                name: 'How secure is the encryption?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Dash uses AES-256 encryption, the same standard used by banks and governments. Your notes are encrypted locally on your device before being saved, ensuring complete privacy.',
                },
              },
              {
                '@type': 'Question',
                name: 'What happens if I lose my device?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Since your notes are stored locally, losing your device means losing your notes. We recommend regularly exporting your notes as encrypted backups to external storage for safekeeping.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I sync between devices?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Dash doesn't offer cloud sync to maintain your privacy. However, you can export your notes as encrypted files and import them on other devices manually.",
                },
              },
              {
                '@type': 'Question',
                name: "Why don't you offer cloud storage?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Cloud storage requires sending your data to external servers, which compromises privacy. Dash's core principle is keeping your data exclusively on your device where you have complete control.",
                },
              },
            ],
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
