import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fbfbfc',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dashnote.io'),
  title: {
    default: "Dash Notes: Private, Encrypted Notes App for Mac & iPhone",
    template: "%s | Dash Notes",
  },
  description: "Dash Notes is a private, encrypted notes app for Mac, iPhone and the web. Offline by default, no account needed, AES-256 encryption, and optional end-to-end encrypted sync.",
  keywords: "dash notes, private notes app, encrypted notes app, secure notes app, offline notes app, notes app for mac, notes app with password, AES-256 encryption, privacy-first notes",
  authors: [{ name: "Dash", url: "https://dashnote.io" }],
  creator: "Dash",
  publisher: "Dash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/Dash256.png', type: 'image/png', sizes: '256x256' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/images/Dash256.png', sizes: '256x256', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Dash Notes: Private, Encrypted Notes App for Mac & iPhone",
    description: "Private, encrypted notes for Mac, iPhone and the web. Offline by default, no account needed, optional end-to-end encrypted sync.",
    url: "https://dashnote.io",
    siteName: "Dash Notes",
    images: [
      {
        url: "/images/Dashfeature1.png",
        width: 1200,
        height: 630,
        alt: "Dash - Private Notes App Interface"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dash Notes: Private, Encrypted Notes App",
    description: "Private, encrypted notes for Mac and iPhone. Offline by default, no account, no tracking.",
    creator: "@efesopoulos",
    images: ["/images/Dashfeature1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "S9tli3nJFJALWAs-JPttxIW6-ECCJJDGUxuIqCTPy44",
  },
  alternates: {
    canonical: 'https://dashnote.io',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dash Notes',
    alternateName: 'Dash',
    url: 'https://dashnote.io',
    logo: 'https://dashnote.io/images/Dash256.png',
    sameAs: [
      'https://twitter.com/efesopoulos',
      'https://github.com/Efesop/rich-text-editor',
      'https://apps.apple.com/app/id6766192836',
      'https://www.producthunt.com/products/dash-12',
    ],
  };

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dash Notes',
    alternateName: 'Dash',
    url: 'https://dashnote.io',
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
