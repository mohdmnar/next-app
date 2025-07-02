'use client'

import { useState, useEffect } from 'react'
import { Crown, Headphones, Users, ChevronRight, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: "Early access users will help shape the roadmap",
    description: "Your feedback directly influences features and priorities. Be part of building the future of infrastructure automation.",
    highlight: "Product Co-creation"
  },
  {
    icon: Crown,
    title: "First 100 users get 50% off for life",
    description: "Lock in exclusive pricing that will never increase. A $500/month value for just $250/month, forever.",
    highlight: "Lifetime Savings"
  },
  {
    icon: Headphones,
    title: "Priority onboarding and support",
    description: "Skip the queue with dedicated onboarding sessions and direct access to our engineering team.",
    highlight: "VIP Treatment"
  }
]

export function ConversionSection() {
  const [visibleBenefits, setVisibleBenefits] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleBenefits(prev => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const benefitElements = document.querySelectorAll('[data-benefit-card]')
    benefitElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleGetEarlyAccess = () => {
    const element = document.getElementById('waitlist')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-800/30 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent)]" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Limited Time</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-orange-200 bg-clip-text text-transparent">
              Why Join Now?
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience the future of infrastructure automation. 
            Early adopters get exclusive benefits that won't be available later.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isVisible = visibleBenefits.includes(index)
            
            return (
              <div
                key={index}
                data-benefit-card
                data-index={index}
                className={`group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 transition-all duration-700 hover:border-slate-600 hover:bg-slate-800/60 hover-lift ${
                  isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10">
                  {/* Highlight badge */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6">
                    <span className="text-xs font-medium text-primary">{benefit.highlight}</span>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary p-2.5 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {benefit.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-orange-300">Waitlist Filling Fast</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Infrastructure Workflow?
              </h3>
              
              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                Join the waitlist now to secure your spot and lock in exclusive early-adopter benefits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleGetEarlyAccess}
                className="group bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Get Early Access</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span>•</span>
                <span>No Card Required</span>
                <span>•</span>
                <span>Setup in 2 minutes</span>
              </div>
            </div>

            {/* Social proof */}
            <div className="mt-8 pt-8 border-t border-slate-700/50">
              <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border border-slate-800"></div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 border border-slate-800"></div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border border-slate-800"></div>
                  </div>
                  <span>1,000+ engineers already joined</span>
                </div>
                <span className="hidden sm:block">•</span>
                <span>⭐ Featured on ProductHunt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}