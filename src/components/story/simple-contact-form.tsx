"use client"

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function SimpleContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  if (submitStatus === 'success') {
    return (
      <div className="story-card text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
          <svg className="w-8 h-8 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif text-warm-900 mb-4">Message Sent!</h3>
        <p className="story-body mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
        <button 
          onClick={() => setSubmitStatus('idle')}
          className="story-button-secondary"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="story-card space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-warm-900 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 bg-white"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-warm-900 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 bg-white"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-warm-900 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 bg-white"
          placeholder="What would you like to discuss?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-warm-900 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 bg-white resize-vertical"
          placeholder="Tell me about your goals, challenges, or questions..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="story-button-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-sm text-warm-600">
        * Required fields. I typically respond within 24 hours.
      </p>
    </form>
  )
}
