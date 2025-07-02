'use client'

import { useState, useEffect } from 'react'
import { 
  Zap, 
  Code, 
  Users, 
  Layers, 
  Lightbulb, 
  Shield, 
  ChevronRight 
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: "Generate IaC Instantly",
    description: "Transform diagrams to production-ready code in seconds, not hours.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Suggestions",
    description: "Get intelligent recommendations for optimal architecture.",
    gradient: "from-orange-400 to-red-500"
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description: "Work together on architecture designs with live updates.",
    gradient: "from-green-400 to-cyan-500"
  },
  {
    icon: Code,
    title: "Supports Terraform, Bicep & CloudFormation",
    description: "Export to your preferred IaC format with full compatibility.",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    icon: Layers,
    title: "Reusable Architecture Templates",
    description: "Build once, deploy everywhere with standardized patterns.",
    gradient: "from-purple-400 to-pink-500"
  },  
  {
    icon: Shield,
    title: "Secure & Compliant by Default",
    description: "Built-in security best practices and compliance frameworks.",
    gradient: "from-cyan-400 to-blue-500"
  }
]

export function FeatureHighlights() {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleFeatures(prev => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const featureElements = document.querySelectorAll('[data-feature-card]')
    featureElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-slate-950/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-800/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-orange-200 bg-clip-text text-transparent">
            Everything You Need to Build Better
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From concept to cloud deployment, Zengech streamlines your entire infrastructure workflow 
            with AI-powered automation and enterprise-grade reliability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleFeatures.includes(index)
            
            return (
              <div
                key={index}
                data-feature-card
                data-index={index}
                className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 transition-all duration-700 hover:border-slate-600 hover:bg-slate-800/70 hover-lift ${
                  isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="flex items-center text-sm font-medium text-transparent group-hover:text-primary transition-all duration-300">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">Ready to transform your infrastructure workflow?</p>
          <button 
            onClick={() => {
              const element = document.getElementById('waitlist')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Get Early Access</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}