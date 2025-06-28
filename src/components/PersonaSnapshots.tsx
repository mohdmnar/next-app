'use client'

import { Rocket, Layers, Cog, Users, Building, Code2 } from 'lucide-react'

export function PersonaSnapshots() {
  const personas = [
    {
      icon: Rocket,
      role: "Founders",
      title: "For Founders: MVP to Scale",
      description: "Rapid prototyping and cost-effective scaling without sacrificing best practices.",
      gradient: "from-orange-400 to-red-500",
      bgColor: "bg-orange-950/20 border-orange-500/20"
    },
    {
      icon: Layers,
      role: "Architects", 
      title: "For Architects: Design to Reality",
      description: "Transform architectural diagrams into validated, production-ready infrastructure.",
      gradient: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-950/20 border-blue-500/20"
    },
    {
      icon: Cog,
      role: "DevOps",
      title: "For DevOps: Sync Diagrams & Pipelines", 
      description: "Keep documentation and deployments perfectly synchronized with automated workflows.",
      gradient: "from-green-400 to-emerald-500",
      bgColor: "bg-green-950/20 border-green-500/20"
    },
    {
      icon: Users,
      role: "Teams",
      title: "For Teams: Collaborative Infrastructure",
      description: "Enable cross-functional collaboration with visual tools everyone understands.",
      gradient: "from-purple-400 to-pink-500", 
      bgColor: "bg-purple-950/20 border-purple-500/20"
    },
    {
      icon: Building,
      role: "Enterprise",
      title: "For Enterprise: Governance at Scale",
      description: "Enforce standards and compliance across hundreds of infrastructure projects.",
      gradient: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-800/20 border-gray-500/20"
    },
    {
      icon: Code2,
      role: "Developers",
      title: "For Developers: Infrastructure as Code",
      description: "Generate clean, maintainable IaC with the same rigor as application code.",
      gradient: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-950/20 border-cyan-500/20"
    }
  ]

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">
            Built for every role in modern infrastructure
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            Whether you&apos;re a startup founder or enterprise architect, Zengech adapts to your workflow and scales with your needs.
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-8">
          {personas.map((persona, index) => {
            const IconComponent = persona.icon
            return (
              <div
                key={persona.role}
                className={`group ${persona.bgColor} border rounded-2xl p-8 hover-tilt cursor-pointer transition-all duration-300 backdrop-blur-sm`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${persona.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                    {persona.role}
                  </span>
                </div>
                
                <h3 className="mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {persona.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {persona.description}
                </p>
                
                {/* Progress indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm text-purple-400">
                    <span>Learn more</span>
                    <div className="w-4 h-0.5 bg-purple-400 rounded-full group-hover:w-8 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Mobile Scroll */}
        <div className="lg:hidden">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {personas.map((persona) => {
              const IconComponent = persona.icon
              return (
                <div
                  key={persona.role}
                  className={`flex-none w-80 ${persona.bgColor} border rounded-2xl p-6 snap-start backdrop-blur-sm`}
                >
                  <div className="mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${persona.gradient} shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                      {persona.role}
                    </span>
                  </div>
                  
                  <h3 className="mb-3 text-lg text-white">
                    {persona.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-slate-800/50 border border-slate-700 px-8 py-4 rounded-full backdrop-blur-sm">
            <div className="text-2xl">🎯</div>
            <div className="text-left">
              <p className="font-medium text-white">Perfect fit for your workflow</p>
              <p className="text-sm text-slate-400">Join teams using Zengech to ship faster</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}