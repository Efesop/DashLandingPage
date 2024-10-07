"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { PenLine, Lock, Wifi, Laptop, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-14 flex items-center fixed w-full bg-white/80 backdrop-blur-md z-50 dark:bg-gray-800/80">
        <Link className="flex items-center justify-center" href="#">
          <PenLine className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-xl">Dash</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#about">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none xl:text-8xl/none">
                  Own Your Notes<br />For Real
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  All of your notes securely saved onto your device, no cloud storage required. You don't even need an account.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg">
                    Download for Mac
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg">
                    Learn More
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-20 blur-xl rounded-full" />
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="NoteSafe App Screenshot"
                  className="rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
                  width={800}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
            >
              Key Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Lock, title: "Completely Private", description: "Your notes are stored solely on your device, ensuring complete privacy." },
                { icon: Wifi, title: "Offline Functionality", description: "Work on your notes anytime, anywhere, with or without an internet connection." },
                //{ icon: Laptop, title: "Mac-Optimized", description: "Designed specifically for macOS, providing a seamless native experience." },
                { icon: Laptop, title: "Own Your Data", description: "No account needed as your notes are never shared with anyone, not even us." },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <feature.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-4"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  No Cloud, No Worries
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Dash combines a clean, intuitive interface with secure, privacy-preserving features for optimal note-taking.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    <span>Pages, Folders, Tags... Nice</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    <span>Rich text editing capabilities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    <span>Everything is stored locally on your device</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-20 blur-xl rounded-full" />
                <img
                  src="/Users/ollie/DashLandingPage/assets/Dash1.png?height=400&width=600"
                  alt="NoteSafe app interface"
                  className="rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
                  width={600}
                  height={400}
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
            >
              Download Now
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-center max-w-4xl mx-auto">
              {[
                {
                  title: "Free",
                  price: "$0",
                  features: ["Rich note-taking features", "Secure local storage", "Pages, Folders, Tags", "Offline access", "Account-less", "Export Options"],
                  cta: "Download",
                },
                /*{
                  title: "Pro",
                  price: "$4.99/mo",
                  features: ["All Free features", "Advanced formatting options", "Unlimited storage", "Priority support"],
                  cta: "Upgrade to Pro",
                },*/
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-center mb-4">{plan.title}</h3>
                  <p className="text-4xl font-bold text-center mb-4">{plan.price}</p>
                  <ul className="mb-6 space-y-2 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-auto w-full">{plan.cta}</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Our Story</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Team</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">FAQ</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Contact Us</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Terms of Service</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Twitter</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">LinkedIn</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">GitHub</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-xs text-gray-600 dark:text-gray-400">
              © 2024 NoteSafe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}