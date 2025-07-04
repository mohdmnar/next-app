'use client'
import '../styles/globals.css'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Hero } from '../components/Hero'
import { TrustSignals } from '../components/TrustSignals'
import { FeatureHighlights } from '../components/FeatureHighlights'
import { PersonaSnapshots } from '../components/PersonaSnapshots'
import { WaitlistSignup } from '../components/WaitlistSignup'
import { Footer } from '../components/Footer'
import Image from "next/image";

export default function App() {
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'personas', 'waitlist']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    // Close mobile menu after navigation
    setMobileMenuOpen(false)
  }

  const handleWaitlistClick = () => {
    scrollToSection('waitlist')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-10">
  <h1 className="text-xl font-bold text-primary">Hello Tailwind</h1>
</div>
      {/* Navigation - Enhanced with mobile menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Image
                src="/zengech-logo.png"
                alt="Zengech Logo"
                width={63}
                height={35}
                priority
              />
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              >
                Zengech
              </button>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                <button 
                  onClick={() => scrollToSection('features')}
                  className={`nav-link text-sm transition-colors ${
                    activeSection === 'features' ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('personas')}
                  className={`nav-link text-sm transition-colors ${
                    activeSection === 'personas' ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Use Cases
                </button>
                <button 
                  onClick={() => scrollToSection('waitlist')}
                  className={`nav-link text-sm transition-colors ${
                    activeSection === 'waitlist' ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Waitlist
                </button>
                <a 
                  href="#docs" 
                  className="nav-link text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Docs
                </a>
              </nav>
            </div>
            
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm text-slate-400 hover:text-white transition-colors duration-300 hover:scale-105">
                Sign In
              </button>
              <button 
                onClick={handleWaitlistClick}
                className="cta-button bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
              >
                Join Waitlist
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors duration-300 relative z-[60]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Fixed positioning to prevent overlay issues */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 md:hidden bg-slate-900/95 backdrop-blur-lg z-40 animate-fade-in-down">
            <div className="px-4 py-6 space-y-4 h-full overflow-y-auto">
              <button 
                onClick={() => scrollToSection('features')}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === 'features' 
                    ? 'text-white bg-slate-800/50' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('personas')}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === 'personas' 
                    ? 'text-white bg-slate-800/50' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                Use Cases
              </button>
              <button 
                onClick={() => scrollToSection('waitlist')}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === 'waitlist' 
                    ? 'text-white bg-slate-800/50' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                Waitlist
              </button>
              <a 
                href="#docs" 
                className="block w-full text-left px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/30 transition-all duration-300"
              >
                Docs
              </a>
              
              <div className="pt-4 border-t border-slate-700 space-y-3">
                <button className="block w-full text-left px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/30 transition-all duration-300">
                  Sign In
                </button>
                <button 
                  onClick={handleWaitlistClick}
                  className="w-full cta-button bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 rounded-lg font-medium shadow-lg"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content with smooth section transitions */}
      <main>
        <div id="hero">
          <Hero />
        </div>
        <TrustSignals />
        <div id="features">
          <FeatureHighlights />
        </div>
        <div id="personas">
          <PersonaSnapshots />
        </div>
        <div id="waitlist">
          <WaitlistSignup />
        </div>
      </main>

      <Footer />
    </div>
  )
}