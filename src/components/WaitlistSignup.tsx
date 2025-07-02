'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { CheckCircle, Mail, Gift } from 'lucide-react'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'


const roles = [
  'Architect',
  'DevOps Engineer', 
  'Solo Founder',
  'Consultant',
  'Engineering Manager',
  'Platform Engineer',
  'Site Reliability Engineer',
  'Other'
]

const useCases = [
  'Multi-cloud infrastructure',
  'Microservices architecture',
  'Disaster recovery planning',
  'Infrastructure standardization',
  'Team collaboration',
  'Client projects'
]

export function WaitlistSignup() {
  const [formData, setFormData] = useState({
    email: '',
    role: '',
    useCases: [] as string[],
    referralCode: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showReferralCode, setShowReferralCode] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email) return

    setIsLoading(true)

    const data = new FormData()
    data.append("email", formData.email)
    data.append("role", formData.role)
    data.append("use_cases", formData.useCases.join(','))
    data.append("referralCode", formData.referralCode)

    await fetch("https://formspree.io/f/xblyzkqg", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    })

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleUseCaseChange = (useCase: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        useCases: [...prev.useCases, useCase]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        useCases: prev.useCases.filter(item => item !== useCase)
      }))
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-slate-950/50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 sm:p-12">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Welcome to the Future! 🎉
              </h2>
              
              <p className="text-slate-400 text-lg mb-8">
                You&apos;re on the waitlist! We&apos;ll send you early access and exclusive updates as we get closer to launch.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-slate-950/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-800/30 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Join the Waitlist</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-orange-200 bg-clip-text text-transparent">
              Get Early Access
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-2">
              Be among the first to transform your infrastructure workflow with AI-powered automation.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-300">Waitlist Open – No Card Required</span>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary h-12"
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <Label htmlFor="role" className="text-white font-medium">
                  Your Role *
                </Label>
                <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                  <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white h-12">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    {roles.map((role) => (
                      <SelectItem key={role} value={role} className="text-white hover:bg-slate-700">
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Use Cases */}
              <div className="space-y-3">
                <Label className="text-white font-medium">
                  Intended Use Cases <span className="text-slate-400 font-normal">(select all that apply)</span>
                </Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center space-x-3">
                      <Checkbox
                        id={useCase}
                        checked={formData.useCases.includes(useCase)}
                        onCheckedChange={(checked) => handleUseCaseChange(useCase, checked as boolean)}
                        className="border-slate-600 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <Label 
                        htmlFor={useCase} 
                        className="text-sm text-slate-300 cursor-pointer leading-tight"
                      >
                        {useCase}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Referral Code Toggle */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setShowReferralCode(!showReferralCode)}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Gift className="h-4 w-4" />
                  Have a referral code?
                </button>
                
                {showReferralCode && (
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Enter referral code"
                      value={formData.referralCode}
                      onChange={(e) => setFormData(prev => ({ ...prev, referralCode: e.target.value }))}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary h-10"
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !formData.email || !formData.role}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-4 h-auto text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Joining Waitlist...</span>
                  </div>
                ) : (
                  'Join the Waitlist'
                )}
              </Button>

              {/* Additional Info */}
              <div className="text-center text-sm text-slate-400 space-y-2">
                <p>🎯 First 100 users get 50% off for life</p>
                <p>🚀 Priority access and onboarding support</p>
                <p className="text-xs">
                  By joining, you agree to our{' '}
                  <a href="#" className="text-primary hover:underline">Terms</a> and{' '}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>

          {/* Social Proof */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-slate-800"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 border-2 border-slate-800"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-slate-800"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-slate-800"></div>
              </div>
              <span className="text-sm text-slate-300 font-medium">
                Join the engineers already on the list
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}