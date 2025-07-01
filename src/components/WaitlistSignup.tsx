'use client'

import { useState } from 'react'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { CheckCircle, Mail } from 'lucide-react'

export function WaitlistSignup() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !role) return

    setIsLoading(true)

    const formData = new FormData()
    formData.append("email", email)
    formData.append("role", role)

    await fetch("https://formspree.io/f/xblyzkqg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    })

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-purple-950/30 to-orange-950/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 animate-fade-in-up">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4 animate-fade-in-down" />
              <h2 className="mb-4 text-white">You&apos;re on the waitlist! 🎉</h2>
              <p className="text-lg text-slate-300 mb-6">
                Welcome to the Zengech waitlist. We&apos;ll notify you as soon as early access is available.
              </p>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm hover-lift">
                <h3 className="mb-3 text-white">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-slate-300">Confirmation sent to <strong className="text-white">{email}</strong></span>
                  </div>
                  <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm text-slate-300">Early access invitation when we launch</span>
                  </div>
                  <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-slate-300">Exclusive updates and behind-the-scenes content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-br from-purple-950/30 to-orange-950/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-down">
              <Mail className="h-4 w-4" />
              Join Waitlist
            </div>
            
            <h2 className="mb-4 text-white animate-fade-in-up">
              Ready to transform your infrastructure workflow?
            </h2>
            <p className="text-lg text-slate-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Be among the first to experience the future of infrastructure development. Join our exclusive waitlist for early access.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 shadow-lg backdrop-blur-sm hover-lift">
              <div className="space-y-6">
                <div className="text-left">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus-ring h-12 bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 transition-all duration-300 hover:border-slate-500"
                    required
                  />
                </div>
                
                <div className="text-left">
                  <label htmlFor="role" className="block mb-2 text-sm font-medium text-white">
                    Your Role
                  </label>
                  <Select value={role} onValueChange={setRole} required name="role">
                    <SelectTrigger className="h-12 focus-ring bg-slate-900/50 border-slate-600 text-white transition-all duration-300 hover:border-slate-500">
                      <SelectValue placeholder="Select your role" className="text-slate-400" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700 text-white">
                      <SelectItem value="founder">Founder / CEO</SelectItem>
                      <SelectItem value="architect">Solutions Architect</SelectItem>
                      <SelectItem value="devops">DevOps Engineer</SelectItem>
                      <SelectItem value="developer">Software Developer</SelectItem>
                      <SelectItem value="manager">Engineering Manager</SelectItem>
                      <SelectItem value="consultant">Consultant</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <button 
                  type="submit" 
                  className={`cta-button w-full h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium shadow-lg group disabled:opacity-50 ${
                    !email || !role || isLoading ? 'cursor-not-allowed' : ''
                  }`}
                  disabled={!email || !role || isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="loading-spinner"></div>
                      <span>Joining Waitlist...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <span>Join the Waitlist</span>
                      <div className="group-hover:translate-x-1 transition-transform duration-300">→</div>
                    </div>
                  )}
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    No spam, ever
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Unsubscribe anytime
                  </span>
                </div>
              </div>
            </div>
          </form>
          
          <p className="mt-8 text-sm text-slate-500 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            By joining our waitlist, you agree to our{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors duration-300">Terms of Service</a> and{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors duration-300">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  )
}