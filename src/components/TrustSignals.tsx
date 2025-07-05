'use client'

import { useEffect, useState } from 'react'
import Image from "next/image";

export function TrustSignals() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const providers = [
    { 
      name: 'AWS', 
      logo: '/aws.png',
      description: 'Amazon Web Services'
    },
    { 
      name: 'Azure', 
      logo: '/azure.png',
      description: 'Microsoft Azure'
    },
    { 
      name: 'GCP', 
      logo: '/gcp.png',
      description: 'Google Cloud Platform'
    },
    { 
      name: 'Terraform', 
      logo: '/terraform.png',
      description: 'Infrastructure as Code'
    },
  ]

  return (
    <section className="py-16 bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-slate-400 mb-8">
            Built for AWS, Azure, GCP, Terraform
          </p>
          <h2 className="text-lg text-white mb-4">
            Used by architects, DevOps, and founders worldwide
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {providers.map((provider, index) => (
            <div
              key={provider.name}
              className={`flex flex-col items-center gap-3 transition-all duration-700 hover:scale-110 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-2 transition-transform duration-300">
                <Image
                  src={provider.logo}
                  alt={`${provider.name} Logo`}
                  width={50}
                  height={40}
                  priority
                />
              </div>
              <span className="text-sm text-slate-300 font-medium">
                {provider.name}
              </span>
              <span className="text-xs text-slate-500 text-center">
                {provider.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}