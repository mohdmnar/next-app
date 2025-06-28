'use client'

import { ChevronRight, Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Zengech
              </h3>
              <p className="text-slate-400 mt-2 max-w-md">
                Transform your architecture diagrams into production-ready infrastructure code with AI-powered precision.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-white">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                  API Reference
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-medium mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Roadmap Teaser */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="bg-gradient-to-r from-purple-950/50 to-orange-950/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium mb-2 text-white">See what&apos;s next</h4>
                <p className="text-slate-400 text-sm">
                  Explore our roadmap and upcoming features
                </p>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 text-sm font-medium shadow-lg"
              >
                View Roadmap
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Zengech. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}