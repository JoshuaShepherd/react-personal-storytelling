"use client"

import { SimpleContactForm, MobileCTAButton } from '@/components/story'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="story-section bg-gradient-to-b from-warm-50 to-warm-100">
        <div className="story-narrow-container text-center">
          <h1 className="text-4xl lg:text-5xl font-serif text-warm-900 leading-tight mb-8">
            Let's Start a <span className="text-sage-600">Conversation</span>
          </h1>
          <p className="text-xl text-warm-700 leading-relaxed max-w-3xl mx-auto">
            Whether you have questions about coaching, want to explore working together, or simply want to share your story with me, I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="story-section">
        <div className="story-narrow-container">
          <SimpleContactForm />
        </div>
      </section>

      {/* Additional Contact Information */}
      <section className="story-section bg-warm-100">
        <div className="story-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="story-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-warm-900 mb-4">Email Response</h3>
              <p className="story-body">
                I personally read and respond to every message within 24 hours during business days. 
                Expect a thoughtful, personalized response.
              </p>
            </div>

            <div className="story-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-warm-900 mb-4">Discovery Calls</h3>
              <p className="story-body">
                Interested in coaching? I offer complimentary 30-minute discovery calls to explore 
                your goals and see if we're a good fit for working together.
              </p>
            </div>

            <div className="story-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-warm-900 mb-4">Based in Portland</h3>
              <p className="story-body">
                While I work with clients globally via video calls, I'm based in Portland, Oregon 
                and occasionally offer in-person sessions for local clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Include */}
      <section className="story-section">
        <div className="story-narrow-container">
          <div className="story-card">
            <h2 className="story-subheading mb-8 text-center">Not sure what to say?</h2>
            <div className="space-y-6">
              <p className="story-body">
                Here are some things I'd love to know about you:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sage-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-warm-700">What's prompting you to explore storytelling or coaching right now?</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sage-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-warm-700">What challenges are you facing in sharing your story or expertise?</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sage-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-warm-700">What would change in your life or business if you felt confident sharing your authentic story?</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-sage-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-warm-700">Any questions about my approach or the coaching process?</span>
                </li>
              </ul>

              <p className="story-body italic text-sage-700 text-center mt-8">
                Remember, there's no such thing as a perfect message. I'm here to listen and support you wherever you are in your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile CTA Button */}
      <MobileCTAButton />
    </>
  )
}
