import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Dash - Own Your Notes For Real | Private, Encrypted Notes App",
  description: "Military-grade encrypted notes app that keeps your data 100% offline and private. No cloud, no tracking, no accounts needed. AES-256 encryption protects your thoughts from Big Tech surveillance.",
  keywords: "private notes app, encrypted notes, offline notes, secure note taking, privacy notes, no cloud notes, local storage notes, military grade encryption, AES-256, privacy-first app",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Dash - Own Your Notes For Real | Private, Encrypted Notes App",
    description: "Military-grade encrypted notes app that keeps your data 100% offline and private. No cloud, no tracking, no accounts needed.",
    url: "https://dashnote.io",
    siteName: "Dash",
    images: [
      {
        url: "https://dashnote.io/og-image.png",
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
    title: "Dash - Own Your Notes For Real",
    description: "Military-grade encrypted notes app. 100% offline, no cloud, no tracking.",
    creator: "@efesopoulos",
    images: ["https://dashnote.io/twitter-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
