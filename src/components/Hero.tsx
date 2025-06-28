'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { ChevronRight, Cloud, Database, Settings, Zap } from 'lucide-react'

export function Hero() {
  const [hoveredDiagram, setHoveredDiagram] = useState(false)
  const [ctaClicked, setCtaClicked] = useState(false)

  const handleWaitlistClick = () => {
    setCtaClicked(true)
    setTimeout(() => setCtaClicked(false), 150)
    
    const element = document.getElementById('waitlist')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-purple-950/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(0deg,rgba(0,0,0,0.8),rgba(0,0,0,0.4))]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Mobile-optimized headline with proper spacing and better contrast */}
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mt-20 sm:mt-16 lg:mt-0">
              <span className="block text-white mb-2">From Design to</span>
              <span className="block bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
                Cloud in Minutes
              </span>
            </h1>
            
            {/* Better mobile contrast for description */}
            <p className="mb-8 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-slate-200">
              Transform your architecture diagrams into production-ready infrastructure code. 
              Generate Terraform, Azure Bicep, and CloudFormation templates with AI-powered precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleWaitlistClick}
                className={`cta-button-slide bg-gradient-to-r from-primary to-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium shadow-lg transition-all duration-300 h-12 sm:h-14 ${
                  ctaClicked ? 'animate-button-press' : ''
                }`}
              >
                <span className="button-text text-sm sm:text-base">Join the Waitlist</span>
                <ChevronRight className="button-icon h-4 w-4" />
              </button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 h-12 sm:h-14 border-2 border-slate-500 text-slate-200 bg-slate-800/50 hover:bg-slate-700/70 hover:border-slate-400 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start text-xs sm:text-sm text-slate-300 animate-slide-in-left">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse-slow"></div>
                Waitlist Open
              </span>
              <span className="hidden sm:block">•</span>
              <span>No Credit Card Required</span>
            </div>
          </div>
          
          {/* Right side - Interactive Diagram */}
          <div className="relative animate-fade-in-up mt-8 lg:mt-0" style={{ animationDelay: '0.2s' }}>
            <div 
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-600 rounded-2xl p-6 sm:p-8 shadow-2xl hover-lift cursor-pointer transition-all duration-500"
              onMouseEnter={() => setHoveredDiagram(true)}
              onMouseLeave={() => setHoveredDiagram(false)}
            >
              <div className="text-center mb-6">
                <h3 className="text-base sm:text-lg mb-2 text-white font-medium">Architecture Visualizer</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Hover to see the magic ✨
                </p>
              </div>
              
              {!hoveredDiagram ? (
                // Diagram View
                <div className="space-y-6 transition-all duration-500">
                  <div className="flex justify-center">
                    <div className="bg-purple-900/40 border border-purple-400/40 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:scale-110">
                      <Cloud className="h-6 w-6 sm:h-8 sm:w-8 text-purple-300" />
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-3 sm:gap-4">
                    <div className="bg-green-900/40 border border-green-400/40 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110" style={{ animationDelay: '0.1s' }}>
                      <Database className="h-5 w-5 sm:h-6 sm:w-6 text-green-300" />
                    </div>
                    <div className="bg-orange-900/40 border border-orange-400/40 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110" style={{ animationDelay: '0.2s' }}>
                      <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-orange-300" />
                    </div>
                    <div className="bg-yellow-900/40 border border-yellow-400/40 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110" style={{ animationDelay: '0.3s' }}>
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" />
                    </div>
                  </div>
                  
                  <div className="text-center text-xs sm:text-sm text-slate-400">
                    Cloud Architecture Diagram
                  </div>
                </div>
              ) : (
                // Code View
                <div className="space-y-4 transition-all duration-500">
                  <div className="bg-slate-900/80 border border-slate-600 rounded-lg p-3 sm:p-4 text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-slate-400 text-xs font-mono">main.tf</span>
                    </div>
                    
                    <div className="font-mono text-xs space-y-1 sm:space-y-2">
                      <div className="text-purple-400 animate-slide-in-left">resource <span className="text-yellow-300">aws_instance</span> <span className="text-green-300">web_server</span> {'{'}
                      </div>
                      <div className="text-slate-300 ml-2 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                        ami = <span className="text-yellow-300">ami-0c02fb55956c7d316</span>
                      </div>
                      <div className="text-slate-300 ml-2 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                        instance_type = <span className="text-yellow-300">t3.micro</span>
                      </div>
                      <div className="text-purple-400 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>{'}'}</div>
                      
                      <div className="text-purple-400 mt-2 sm:mt-3 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>resource <span className="text-yellow-300">aws_rds_instance</span> <span className="text-green-300">database</span> {'{'}</div>
                      <div className="text-slate-300 ml-2 animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
                        engine = <span className="text-yellow-300">postgres</span>
                      </div>
                      <div className="text-purple-400 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>{'}'}</div>
                    </div>
                  </div>
                  
                  <div className="text-center text-xs sm:text-sm text-slate-400">
                    Generated Terraform Code
                  </div>
                </div>
              )}
            </div>
            
            {/* Floating elements - optimized for mobile */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-secondary to-red-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs animate-pulse-slow">
              AI Powered
            </div>
            
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-gradient-to-r from-accent to-emerald-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs">
              Real-time
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}