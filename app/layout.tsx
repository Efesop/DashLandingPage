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
  title: "Dash - Own Your Notes For Real",
  description: "Dash is a secure, offline-first note-taking app that keeps your data private and local.",
  openGraph: {
    title: "Dash - Own Your Notes For Real",
    description: "Secure, offline-first note-taking app that keeps your data private and local.",
    url: "https://dashnote.io",
    siteName: "Dash",
    images: [
      {
        url: "https://dashnote.io/og-image.png", // Make sure to create and add this image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dash - Own Your Notes For Real",
    description: "Secure, offline-first note-taking app that keeps your data private and local.",
    creator: "@efesopoulos",
    images: ["https://dashnote.io/twitter-image.png"], // Make sure to create and add this image
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
