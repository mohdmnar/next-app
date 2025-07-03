'use client'

import { Github, Twitter, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950/80 border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-800/20 [mask-image:linear-gradient(0deg,transparent,black_50%,transparent)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                  Zengech
                </h2>
                <p className="text-slate-400 leading-relaxed max-w-md">
                  Transform your architecture diagrams into production-ready infrastructure code. 
                  Built by engineers, for engineers.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Newsletter"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid sm:grid-cols-3 gap-8 lg:col-span-3">
              {/* Product */}
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#features" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#docs" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#changelog" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-1">
                      Changelog
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="#roadmap" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#about" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#careers" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-1">
                      Careers
                      <span className="px-1.5 py-0.5 text-xs bg-primary/20 text-primary rounded">2</span>
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#brand" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      Brand Kit
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#privacy" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#terms" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="#security" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#compliance" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      Compliance
                    </a>
                  </li>
                  <li>
                    <a href="#cookies" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <p>© {currentYear} Zengech. All rights reserved.</p>
              <div className="hidden sm:flex items-center gap-4">
                <span className="flex items-center gap-1">
                  Made with <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" /> by engineers
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-400">All systems operational</span>
              </div>
              <a 
                href="#status" 
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Status
              </a>
            </div>
          </div>
          
          {/* Mobile love message */}
          <div className="sm:hidden mt-4 text-center">
            <span className="text-sm text-slate-400 flex items-center justify-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" /> by engineers
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}