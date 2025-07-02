'use client'

import { useState, useEffect } from 'react'
import { Building2, Cog, Rocket, Users } from 'lucide-react'

const personas = [
  {
    icon: Building2,
    name: "Architect Anna",
    role: "Enterprise Solutions",
    quote: "Zengech helps me standardize our infrastructure patterns across 50+ microservices without the usual headaches.",
    company: "Fortune 500 Tech",
    gradient: "from-blue-400 to-purple-500",
    bgGradient: "from-blue-900/20 to-purple-900/20"
  },
  {
    icon: Cog,
    name: "DevOps Dave",
    role: "Mid-Market Operations",
    quote: "Finally, a tool that speaks both architect and developer. Our deployment velocity increased 3x since adopting Zengech.",
    company: "Growing SaaS",
    gradient: "from-green-400 to-cyan-500",
    bgGradient: "from-green-900/20 to-cyan-900/20"
  },
  {
    icon: Rocket,
    name: "Startup Sarah",
    role: "Solo Founder & CTO",
    quote: "As a solo founder, I use Zengech to build infra faster than I can Google the docs. It's like having a senior DevOps engineer on tap.",
    company: "AI Startup",
    gradient: "from-orange-400 to-red-500",
    bgGradient: "from-orange-900/20 to-red-900/20"
  },
  {
    icon: Users,
    name: "Freelancer Frank",
    role: "Cloud Consultant",
    quote: "My clients love seeing their architecture ideas become real infrastructure in minutes. Zengech makes me look like a wizard.",
    company: "Independent Consultant",
    gradient: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-900/20 to-pink-900/20"
  }
]

export function PersonaSnapshots() {
  const [visiblePersonas, setVisiblePersonas] = useState<number[]>([])
  const [hoveredPersona, setHoveredPersona] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisiblePersonas(prev => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const personaElements = document.querySelectorAll('[data-persona-card]')
    personaElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-950/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-800/20 [mask-image:linear-gradient(0deg,transparent,black_20%,black_80%,transparent)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 mb-6">
            <Users className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-orange-200 bg-clip-text text-transparent">
            Trusted by Engineers Everywhere
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From solo founders to enterprise architects, see how Zengech is transforming 
            infrastructure workflows across teams of all sizes.
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {personas.map((persona, index) => {
            const Icon = persona.icon
            const isVisible = visiblePersonas.includes(index)
            const isHovered = hoveredPersona === index
            
            return (
              <div
                key={index}
                data-persona-card
                data-index={index}
                className={`group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 transition-all duration-700 hover:border-slate-600 hover:bg-slate-800/60 hover-tilt cursor-default ${
                  isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  transitionDelay: `${index * 0.15}s`
                }}
                onMouseEnter={() => setHoveredPersona(index)}
                onMouseLeave={() => setHoveredPersona(null)}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${persona.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${persona.gradient} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-full w-full text-white" />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors duration-300">
                        {persona.name}
                      </h3>
                      <p className="text-sm font-medium text-slate-400 mb-1">
                        {persona.role}
                      </p>
                      <p className="text-xs text-slate-500">
                        {persona.company}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="relative">
                    <div className={`absolute -left-2 -top-2 text-4xl text-gradient bg-gradient-to-br ${persona.gradient} bg-clip-text text-transparent opacity-50 leading-none`}>
                      "
                    </div>
                    <p className="text-slate-300 leading-relaxed italic text-lg pl-6 pr-2 group-hover:text-slate-200 transition-colors duration-300">
                      {persona.quote}
                    </p>
                    <div className={`absolute -right-1 -bottom-2 text-4xl text-gradient bg-gradient-to-br ${persona.gradient} bg-clip-text text-transparent opacity-50 leading-none rotate-180`}>
                      "
                    </div>
                  </blockquote>

                  {/* Author attribution */}
                  <div className="mt-6 pt-4 border-t border-slate-700/50 group-hover:border-slate-600/50 transition-colors duration-300">
                    <p className="text-sm text-slate-400">
                      – <span className="font-medium text-slate-300">{persona.name.split(' ')[0]}</span>, {persona.role.split(' ')[0]}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover glow effect */}
                  {isHovered && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${persona.gradient} opacity-10 blur-xl rounded-2xl -z-10 transition-opacity duration-500`} />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-slate-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 border-2 border-slate-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-slate-800"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-slate-800"></div>
            </div>
            <span className="text-sm text-slate-300 font-medium ml-2">
              Join the engineers building better infrastructure
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}