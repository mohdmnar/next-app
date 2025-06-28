'use client'

import { Lightbulb, Shield, RefreshCcw, Code, Zap, Target, Brain, Users, DollarSign } from 'lucide-react'

export function FeatureHighlights() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Architecture Suggestions",
      description: "Get intelligent recommendations for optimal architecture patterns, security best practices, and cost optimization.",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: Zap,
      title: "One-Click Cloud Transitions",
      description: "Instantly port your architecture between AWS, Azure, and GCP with automated cloud-specific optimizations.",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Users,
      title: "Real-Time User Collaboration",
      description: "Work together on infrastructure designs with live cursors, comments, and synchronized editing across teams.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Smart Templates",
      description: "AI-powered infrastructure templates that adapt to your architecture patterns and industry best practices.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: RefreshCcw,
      title: "Drift Detection",
      description: "Automatically detect and highlight differences between your diagrams and deployed infrastructure in real-time.",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: DollarSign,
      title: "Cost & Resource Monitoring",
      description: "Track infrastructure costs and resource usage with detailed analytics and optimization recommendations.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Built-in security and compliance checks ensure your infrastructure meets SOC2, HIPAA, and PCI standards.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Code,
      title: "Production-Ready Code Generation",
      description: "Generate clean, maintainable infrastructure code following industry standards and best practices.",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: Target,
      title: "Version Control Integration",
      description: "Full Git integration with branching, merging, and collaborative workflow support for infrastructure changes.",
      color: "from-pink-400 to-rose-500"
    }
  ]

  const handleWaitlistClick = () => {
    const element = document.getElementById('waitlist')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="py-24 bg-slate-800/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white animate-fade-in-up">
            Everything you need to scale infrastructure
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            From rapid prototyping to enterprise deployment, Zengech provides the tools 
            to transform your architectural vision into production-ready infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.title}
                className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover-lift transition-all duration-300 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h3 className="mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-slate-400 mb-6">
            Ready to experience the future of infrastructure development?
          </p>
          <div className="inline-flex gap-4">
            <button 
              onClick={handleWaitlistClick}
              className="cta-button px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium shadow-lg"
            >
              Join the Waitlist
            </button>
            <button className="px-6 py-3 h-12 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 font-medium hover:scale-105">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}