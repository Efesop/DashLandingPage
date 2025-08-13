"use client"

import React, { useRef, useEffect, useState } from 'react';
import Link from "next/link"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import BuyMeCoffeeButton from "./components/ui/BuyMeCoffeeButton"
import { Lock, Wifi, Laptop, ChevronRight, Play, Coffee, Shield, Eye, Database, Users, FileText, Search, Folder, Download, Check, Star, Zap, Globe, Server, ArrowRight, Heart, Sparkles, Code, AlertCircle, HelpCircle, Minus, Plus, ArrowDown, CheckCircle, X, Edit3, Key, MousePointer, Layers, Network, HardDrive, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import type Player from 'video.js/dist/types/player';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [downloadError, setDownloadError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [typedText, setTypedText] = useState('');

  // Fixed typing animation
  const textToType = "My private thoughts and sensitive information...";
  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    
    const timer = setInterval(() => {
      if (!isDeleting) {
        if (i < textToType.length) {
          setTypedText(textToType.slice(0, i + 1));
          i++;
        } else {
          isDeleting = true;
          setTimeout(() => {}, 2000); // Pause before deleting
        }
      } else {
        if (i > 0) {
          setTypedText(textToType.slice(0, i));
          i--;
        } else {
          isDeleting = false;
          setTimeout(() => {}, 1000); // Pause before typing again
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mbljjdgo', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json'
        }
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
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, {
        autoplay: true,
        muted: true,
        controls: false,
        responsive: true,
        fluid: true,
        sources: [{ src: '/images/Dash.mp4', type: 'video/mp4' }],
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isEmailSubmitted) {
      fetch('https://api.github.com/repos/Efesop/rich-text-editor/releases/latest')
        .then(response => {
          if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const macAsset = data.assets.find((asset: any) => asset.name.endsWith('-arm64.dmg'));
          if (macAsset) {
            setDownloadUrl(macAsset.browser_download_url);
            setDownloadError('');
          } else {
            setDownloadError('Mac build not found in latest release');
            console.error('No ARM64 DMG asset found in release');
          }
        })
        .catch(error => {
          console.error('Error fetching latest release:', error);
          setDownloadError('Failed to fetch latest release');
        });
    }
  }, [isEmailSubmitted]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden font-sans">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Dash",
            "applicationCategory": "ProductivityApplication",
            "description": "Private notes app that keeps your data 100% offline and secure",
            "operatingSystem": ["macOS", "Windows", "Linux"],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Person",
              "name": "Efez Sopoulos",
              "url": "https://twitter.com/efesopoulos"
            }
          })
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link className="flex items-center space-x-3" href="#" aria-label="Dash - Private Notes App">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Dash</span>
        </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
          <BuyMeCoffeeButton />
              <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors" href="#features">
            Features
          </Link>
              <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors" href="#security">
                Security
          </Link>
              <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors" href="#comparison">
                Compare
              </Link>
              <Link className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors" href="#faq">
                FAQ
          </Link>
            </nav>

            <div className="flex items-center space-x-4">
          {!isEmailSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="hidden sm:flex items-center space-x-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                required
                    className="w-40 h-9 text-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    aria-label="Email address for download"
              />
                  <Button type="submit" size="sm" className="h-9 bg-blue-600 hover:bg-blue-700 text-white">
                Download
              </Button>
            </form>
          ) : (
                <div className="hidden sm:flex">
              {downloadError ? (
                    <div className="text-xs text-red-500">{downloadError}</div>
              ) : (
                <Button
                  href={downloadUrl || "#"}
                  disabled={!downloadUrl}
                  size="sm"
                      className="h-9 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {downloadUrl ? 'Download' : 'Loading...'}
                </Button>
              )}
            </div>
          )}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Video */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950">
          <div className="container mx-auto px-6 lg:px-8 pt-20 pb-20">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-10"
              >
                <div className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/50 px-4 py-2 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  <Lock className="mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">Military-grade privacy</span>
                </div>
                
                <div className="space-y-8">
                                    <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl leading-none">
                    Own Your Notes
                    <br />
                    <span className="text-blue-600 dark:text-blue-400">For Real</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                    The only notes app that puts <strong>you</strong> in complete control. No cloud, no tracking, no corporate surveillance.
                  </p>
                </div>

                <div className="flex flex-wrap gap-8 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">No sign-up needed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Works 100% offline</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Free forever</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  {!isEmailSubmitted ? (
                    <form onSubmit={handleEmailSubmit} className="flex w-full max-w-lg gap-4">
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                        className="flex-1 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        aria-label="Email address for download"
                        />
                      <Button 
                        type="submit" 
                        className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </form>
                  ) : (
                    <>
                      {downloadError ? (
                        <div className="rounded-lg bg-red-50 p-4 border border-red-200">
                          <p className="text-red-600 font-medium">Download Error</p>
                          <p className="text-red-500 text-sm">{downloadError}</p>
                          <Button 
                            onClick={() => window.location.reload()}
                            className="mt-2 bg-red-600 text-white"
                            size="sm"
                          >
                            Try Again
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          href={downloadUrl || "#"}
                          className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                          disabled={!downloadUrl}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          {downloadUrl ? 'Download for Mac' : 'Loading...'}
                        </Button>
                      )}
                    </>
                  )}
                </div>

                <p className="text-gray-500 dark:text-gray-400">
                  Free forever • No account required • Works on Mac, Windows & Linux
                </p>
              </motion.div>

              {/* Right side - Video prominently featured */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-blue-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Video container */}
                  <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-900">
                <div 
                  data-vjs-player 
                      className="aspect-video"
                >
                  <video 
                    ref={videoRef} 
                        className="video-js w-full h-full rounded-2xl" 
                    playsInline 
                    muted
                        aria-label="Dash app demonstration video"
                      />
                    </div>
                  </div>
                  
                  {/* Floating indicators */}
                  <div className="absolute -top-4 -right-4 rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-medium text-gray-900 dark:text-white">100% Private</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Lock className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-gray-900 dark:text-white">Bank-level security</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

                {/* Feature Showcase - Obsidian Style */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
          
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center rounded-full bg-slate-800 border border-slate-700 px-4 py-2 text-slate-300 mb-6"
              >
                <Sparkles className="mr-2 h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium">Everything you need</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Private notes,{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  perfected
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                All the power you need, with none of the privacy compromises
              </p>
            </div>

            {/* Main feature grid */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Large feature - Encryption */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 relative overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                        <Shield className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-white">Military-Grade Encryption</h3>
                    </div>
                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                      Every note is protected with AES-256 encryption before it touches your storage. 
                      The same standard trusted by banks and governments worldwide.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span>200k+ iterations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <span>Local key generation</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-slate-900 rounded-xl border border-slate-600 p-6">
                      <div className="space-y-4">
                        <div>
                          <div className="text-xs text-slate-400 mb-2">Your note:</div>
                          <div className="text-white bg-slate-800 rounded-lg p-3 text-sm">
                            "Meeting with whistleblower at 3pm..."
                          </div>
                        </div>
                        <div className="text-center">
                          <ArrowDown className="w-5 h-5 text-blue-400 mx-auto animate-bounce" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 mb-2">Encrypted (AES-256):</div>
                          <div className="text-blue-400 bg-slate-800 rounded-lg p-3 text-xs font-mono break-all">
                            U2FsdGVkX1+vupppZksvRf5pq5g5XjFRIipRkwB0K1Y96Qsv2Lm+31cmzaAILwyt
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </motion.div>

              {/* Offline Feature */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-emerald-900/30 to-slate-900 rounded-2xl border border-slate-700 p-8 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 bg-emerald-500/20 rounded-full px-3 py-1 border border-emerald-500/30">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-xs font-medium">Always Available</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                    <HardDrive className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">100% Offline</h3>
                </div>
                
                <p className="text-slate-300 mb-8 leading-relaxed">
                  No internet? No problem. Your notes are always accessible, 
                  whether you're in airplane mode or off the grid.
                </p>
                
                <div className="space-y-3">
                  {['Lightning fast access', 'No server dependencies', 'Works anywhere'].map((feature, i) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Privacy Feature */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-900/30 to-slate-900 rounded-2xl border border-slate-700 p-8 relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
                    <Eye className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Zero Tracking</h3>
                </div>
                
                <p className="text-slate-300 mb-8 leading-relaxed">
                  We don't collect analytics, track usage, or store any data about you. 
                  Your privacy is absolute.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                    <span className="text-slate-300 text-sm">Data collection</span>
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400" />
                      <span className="text-red-400 text-sm">Zero</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                    <span className="text-slate-300 text-sm">User tracking</span>
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400" />
                      <span className="text-red-400 text-sm">None</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                    <span className="text-slate-300 text-sm">Your control</span>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm">Complete</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Features Showcase */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Your thoughts are yours.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Dash stores notes privately on your device, so you can access them quickly, even offline. No one else can read them, not even us.
              </p>
            </div>

            {/* Interactive Feature Demo */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Write with confidence.
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Rich text editing, powerful organization, and lightning-fast search - all while keeping your data completely private.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: Edit3, title: "Rich text editing", desc: "Format your thoughts beautifully with a powerful editor" },
                    { icon: Search, title: "Instant search", desc: "Find any note in milliseconds across your entire library" },
                    { icon: Folder, title: "Smart organization", desc: "Folders, tags, and categories to structure your knowledge" }
              ].map((feature, index) => (
                    <div key={feature.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live typing demo */}
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-500 ml-3 font-medium">Dash Notes</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      Project Ideas
                    </div>
                    <div className="min-h-[80px] text-gray-900 dark:text-white">
                      {typedText}
                      <span className="animate-pulse">|</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                      <Lock className="w-4 h-4 text-green-600" />
                      <span>Encrypted and saved locally on your device</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-medium text-gray-900 dark:text-white">Auto-saved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* Security Deep Dive - Clean Technical Approach */}
        <section id="security" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Bank-vault security for your thoughts
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Your privacy is mathematically guaranteed with military-grade encryption and zero-knowledge architecture.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-8">
                {[
                  {
                    icon: Shield,
                    title: "AES-256 encryption",
                    description: "The gold standard used by banks and governments to protect the most sensitive data worldwide."
                  },
                  {
                    icon: Key,
                    title: "Your keys, your control",
                    description: "Encryption keys are generated and stored only on your device. We never see or store them."
                  },
                  {
                    icon: Eye,
                    title: "Zero-knowledge design",
                    description: "Even we can't read your notes. Your data is encrypted before it touches our code."
                  },
                  {
                    icon: Database,
                    title: "Local-only storage",
                    description: "Notes never leave your device. No cloud uploads, no external dependencies."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="relative">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Technical Security Details
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      For the technically minded
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { label: "Encryption", value: "AES-256-GCM" },
                      { label: "Key Derivation", value: "PBKDF2-SHA256 (200k iterations)" },
                      { label: "Random Generation", value: "Cryptographically secure" },
                      { label: "Storage", value: "Local device only" },
                      { label: "Transmission", value: "Never transmitted" }
                    ].map((spec, index) => (
                      <div key={spec.label} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                        <span className="font-medium text-gray-900 dark:text-white">{spec.label}</span>
                        <span className="text-gray-600 dark:text-gray-300 font-mono text-sm">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

                        {/* No Cloud, No Worries - Dark Benefits */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
          
          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center rounded-full bg-gray-800 border border-gray-700 px-4 py-2 text-gray-300 mb-6"
              >
                <CheckCircle className="mr-2 h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium">No cloud dependencies</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                No Cloud,{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  No Worries
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the freedom of truly private notes that work exactly how you'd expect
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Globe,
                  title: "Works anywhere",
                  description: "No internet? No problem. Your notes are always available, whether you're on a plane or in a remote location.",
                  color: "blue"
                },
                {
                  icon: Zap,
                  title: "Lightning fast",
                  description: "No network delays or server downtime. Everything loads instantly because it's stored right on your device.",
                  color: "blue"
                },
                {
                  icon: Heart,
                  title: "Stress-free privacy",
                  description: "Never worry about data breaches, account hacks, or corporate surveillance. Your notes stay yours.",
                  color: "blue"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 text-center hover:border-gray-600 transition-all duration-300">
                    <div className={`w-20 h-20 bg-${benefit.color}-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-${benefit.color}-500/30`}>
                      <benefit.icon className={`w-10 h-10 text-${benefit.color}-400`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${benefit.color}-500/20 to-${benefit.color}-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section id="comparison" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                How Dash compares
                </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See why privacy-conscious users choose Dash over alternatives
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
                    <table className="min-w-full">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                            Feature
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                            Dash
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Notion
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Evernote
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Obsidian
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {[
                          { 
                            feature: "100% Offline", 
                            dash: true, 
                            notion: false, 
                            evernote: false, 
                            obsidian: true 
                          },
                          { 
                            feature: "No Account Required", 
                            dash: true, 
                            notion: false, 
                            evernote: false, 
                            obsidian: true 
                          },
                          { 
                            feature: "Zero Tracking", 
                            dash: true, 
                            notion: false, 
                            evernote: false, 
                            obsidian: true 
                          },
                          { 
                            feature: "Military Encryption", 
                            dash: true, 
                            notion: false, 
                            evernote: false, 
                            obsidian: false 
                          },
                          { 
                            feature: "Free Forever", 
                            dash: true, 
                            notion: false, 
                            evernote: false, 
                            obsidian: true 
                          },
                          { 
                            feature: "No Monthly Subscription", 
                            dash: true, 
                            notion: false, 
                            evernote: false, 
                            obsidian: false 
                          },
                          { 
                            feature: "Free to Sync", 
                            dash: true, 
                            notion: false, 
                            evernote: false, 
                            obsidian: false 
                          },
                          { 
                            feature: "Rich Text Editor", 
                            dash: true, 
                            notion: true, 
                            evernote: true, 
                            obsidian: true 
                          },
                          { 
                            feature: "No Cloud Dependencies", 
                            dash: true, 
                            notion: false, 
                            evernote: false, 
                            obsidian: true 
                          },
                          { 
                            feature: "Cross-Platform", 
                            dash: true, 
                            notion: true, 
                            evernote: true, 
                            obsidian: true 
                          }
                        ].map((row, index) => (
                          <motion.tr
                            key={row.feature}
                            initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          >
                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                              {row.feature}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {row.dash ? (
                                <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                              ) : (
                                <X className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-600" />
                              )}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {row.notion ? (
                                <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                              ) : (
                                <X className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-600" />
                              )}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {row.evernote ? (
                                <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                              ) : (
                                <X className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-600" />
                              )}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {row.obsidian ? (
                                <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                              ) : (
                                <X className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-600" />
                              )}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently asked questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Everything you need to know about Dash
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "How is Dash different from other notes apps?",
                  answer: "Dash is the only notes app that keeps everything 100% on your device. No cloud servers, no data collection, no corporate surveillance. Your notes are encrypted and completely private."
                },
                {
                  question: "Is Dash really free?",
                  answer: "Yes, Dash is completely free forever. No subscriptions, no premium tiers, no hidden costs. We believe privacy is a fundamental right, not a premium feature."
                },
                {
                  question: "How secure is the encryption?",
                  answer: "Dash uses AES-256 encryption, the same standard used by banks and governments. Your notes are encrypted locally on your device before being saved, ensuring complete privacy."
                },
                {
                  question: "What happens if I lose my device?",
                  answer: "Since your notes are stored locally, losing your device means losing your notes. We recommend regularly exporting your notes as encrypted backups to external storage for safekeeping."
                },
                {
                  question: "Can I sync between devices?",
                  answer: "Dash doesn't offer cloud sync to maintain your privacy. However, you can export your notes as encrypted files and import them on other devices manually."
                },
                {
                  question: "Why don't you offer cloud storage?",
                  answer: "Cloud storage requires sending your data to external servers, which compromises privacy. Dash's core principle is keeping your data exclusively on your device where you have complete control."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 dark:bg-blue-700">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Take back control of your notes
              </h2>
              <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
                Join thousands who've chosen true privacy over corporate surveillance. Download Dash and own your thoughts for real.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  {!isEmailSubmitted ? (
                  <form onSubmit={handleEmailSubmit} className="flex w-full max-w-md gap-3">
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                      className="flex-1 h-12 bg-white text-gray-900 border-0 focus:ring-2 focus:ring-blue-300"
                      aria-label="Email address for download"
                      />
                      <Button
                        type="submit"
                      className="h-12 px-6 bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                      >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                      </Button>
                    </form>
                  ) : (
                    <>
                      {downloadError ? (
                      <div className="rounded-lg bg-red-50 p-4 border border-red-200">
                          <p className="text-red-600 font-medium">Download Error</p>
                          <p className="text-red-500 text-sm">{downloadError}</p>
                          <Button 
                            onClick={() => window.location.reload()}
                            className="mt-2 bg-red-600 text-white"
                            size="sm"
                          >
                            Try Again
                          </Button>
                        </div>
                      ) : (
                        <Button
                          href={downloadUrl || "#"}
                        className="h-12 px-6 bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                          disabled={!downloadUrl}
                        >
                        <Download className="mr-2 h-4 w-4" />
                          {downloadUrl ? 'Download for Mac' : 'Loading...'}
                        </Button>
                      )}
                    </>
                  )}
              </div>
              
              <p className="text-blue-200 mb-8">
                Free forever • No account required • 2MB download • Mac, Windows & Linux
              </p>
              
              <Button 
                href="https://buymeacoffee.com/efez"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
                rel="noopener noreferrer"
              >
                <Coffee className="mr-2 h-4 w-4" />
                Buy me a coffee
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-semibold text-white">Dash</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Own your notes for real. The only notes app that puts privacy first and keeps your thoughts completely secure.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Privacy</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>100% Offline</li>
                <li>No Tracking</li>
                <li>No Accounts</li>
                <li>Military Encryption</li>
                <li>Zero Knowledge</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://twitter.com/efesopoulos" className="text-gray-400 hover:text-white transition-colors">
                    Follow on X/Twitter
                  </Link>
                </li>
                <li>
                  <Link href="https://buymeacoffee.com/efez" className="text-gray-400 hover:text-white transition-colors">
                    Buy me a coffee
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Dash. Your privacy is our priority.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}