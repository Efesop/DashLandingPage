import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureShowcase from './components/FeatureShowcase';
import CoreFeatures from './components/CoreFeatures';
import SecuritySection from './components/SecuritySection';
import BiometricLockSection from './components/BiometricLockSection';
import AdvancedSecuritySection from './components/AdvancedSecuritySection';
import LocalAISection from './components/LocalAISection';
import BenefitsSection from './components/BenefitsSection';
import ComparisonTable from './components/ComparisonTable';
import FAQSection from './components/FAQSection';
import PaymentSection from './components/PaymentSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden font-sans'>
      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Dash Notes',
            alternateName: 'Dash',
            url: 'https://dashnote.io',
            applicationCategory: 'ProductivityApplication',
            applicationSubCategory: 'Note-taking',
            softwareVersion: '1.6.3',
            downloadUrl: 'https://dashnote.io/download',
            installUrl: 'https://apps.apple.com/app/id6766192836',
            screenshot: 'https://dashnote.io/images/Dashfeature1.png',
            description:
              'Private, encrypted notes app for Mac, iPhone and the web. Offline by default, with optional end-to-end encrypted sync.',
            operatingSystem: ['macOS', 'iOS', 'Web'],
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
                  text: 'Dash keeps everything on your device by default. No cloud servers, no data collection, no corporate surveillance. If you turn on the optional Dash Sync, your notes are encrypted before they leave your device, so even our relay cannot read them.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much is Dash?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The Mac app is a one-time $14.99 purchase with lifetime updates. The iPhone app and the web app are free. The only subscription is optional Dash Sync — end-to-end encrypted sync across your devices for $4.99/month or $47.99/year with a 7-day free trial. Notes, encryption, and everything else work without it.',
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
                  text: 'Yes, two ways. Dash Sync is an optional subscription that keeps notes, folders, tags, attachments and version history in step across Mac, iPhone, iPad and the web. Everything is encrypted on your device before upload, so the relay only ever stores ciphertext it cannot read. Or, with no subscription, export an encrypted .dashpack file from one device and import it on another.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why is sync a subscription?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Running the sync relay costs real money, so we charge for it where the cost lives instead of raising the price of the app for everyone. Sync is off by default: without it Dash never talks to a server, and with it the server only ever sees encrypted blobs.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does Dash support Touch ID or biometric unlock?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. On macOS, Dash supports Touch ID, and on iPhone Face ID (or Touch ID), to unlock the app or individual locked pages. You can also set auto-lock timers (1, 5, 15, or 30 minutes) or lock instantly with Cmd+Shift+L on Mac. A master password is available as a fallback.',
                },
              },
            ],
          }),
        }}
      />

      <Header />

      <main className='flex-1'>
        <HeroSection />
        <FeatureShowcase />
        <CoreFeatures />
        <LocalAISection />
        <SecuritySection />
        <BiometricLockSection />
        <AdvancedSecuritySection />
        <BenefitsSection />
        <ComparisonTable />
        <PaymentSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
