"use client"

import Image from 'next/image'
import Link from 'next/link'
import { TestimonialQuote, InlineCTA, MobileCTAButton } from '@/components/story'

const testimonials = [
  {
    quote: "Working with them transformed not just my career, but my entire perspective on what's possible when you embrace your authentic story.",
    author: "Sarah Chen",
    title: "Marketing Director",
    imageUrl: "/placeholder-testimonial-1.svg",
    imageAlt: "Sarah Chen headshot"
  },
  {
    quote: "The storytelling workshop gave me the confidence to share my journey publicly. The response has been incredible.",
    author: "Michael Rodriguez",
    title: "Entrepreneur",
    imageUrl: "/placeholder-testimonial-2.svg",
    imageAlt: "Michael Rodriguez headshot"
  },
  {
    quote: "I finally found my voice and learned how to use it authentically. This work is life-changing.",
    author: "Emma Thompson",
    title: "Creative Professional",
    imageUrl: "/placeholder-testimonial-3.svg", 
    imageAlt: "Emma Thompson headshot"
  }
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="story-section bg-gradient-to-b from-warm-50 to-warm-100">
        <div className="story-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-serif text-warm-900 leading-tight">
                Your Story Matters.<br />
                <span className="text-sage-600">Let's Tell It Together.</span>
              </h1>
              <p className="text-xl text-warm-700 leading-relaxed">
                I help authentic individuals discover their unique narrative and share it with confidence. 
                Through personalized coaching and storytelling workshops, we'll uncover the power in your experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/work-with-me" className="story-button-primary">
                  Explore Coaching
                </Link>
                <Link href="/about" className="story-button-secondary">
                  Learn My Story
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                <Image
                  src="/placeholder-hero-portrait.svg"
                  alt="Warm, authentic portrait of the coach in natural lighting"
                  fill
                  className="rounded-2xl object-cover shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Story */}
      <section className="story-section">
        <div className="story-narrow-container text-center">
          <h2 className="story-heading mb-8">Every Person Has a Unique Story Worth Telling</h2>
          <div className="space-y-6 text-lg text-warm-700 leading-relaxed">
            <p>
              For years, I watched talented individuals struggle to articulate their value, 
              diminish their achievements, and hide behind generic professional personas. 
              I saw the gap between who they truly were and how they presented themselves to the world.
            </p>
            <p>
              That's when I realized that storytelling isn't just about communication—it's about 
              connection. It's about honoring your journey, acknowledging your growth, and sharing 
              your wisdom in a way that resonates deeply with others.
            </p>
            <p className="story-quote text-sage-700">
              "When you own your story, you get to write the ending."
            </p>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="story-section bg-warm-100">
        <div className="story-container">
          <div className="text-center mb-16">
            <h2 className="story-heading mb-6">How We'll Work Together</h2>
            <p className="story-body max-w-2xl mx-auto">
              Whether you're looking for one-on-one guidance or prefer learning in a group setting, 
              I offer several pathways to help you discover and share your authentic story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="story-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-warm-900 mb-4">Individual Coaching</h3>
              <p className="story-body mb-6">
                Personalized one-on-one sessions to uncover your unique narrative and develop 
                your authentic voice through tailored exercises and guided reflection.
              </p>
              <Link href="/work-with-me" className="story-button-secondary">
                Learn More
              </Link>
            </div>

            <div className="story-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-warm-900 mb-4">Storytelling Workshops</h3>
              <p className="story-body mb-6">
                Interactive group workshops where you'll learn storytelling fundamentals, practice 
                with supportive peers, and gain confidence in sharing your experiences.
              </p>
              <Link href="/work-with-me" className="story-button-secondary">
                View Schedule
              </Link>
            </div>

            <div className="story-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-warm-900 mb-4">Content Strategy</h3>
              <p className="story-body mb-6">
                Strategic support for translating your personal story into compelling content 
                that builds your personal brand and connects with your ideal audience.
              </p>
              <Link href="/work-with-me" className="story-button-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="story-section">
        <div className="story-container">
          <div className="text-center mb-16">
            <h2 className="story-heading mb-6">Stories of Transformation</h2>
            <p className="story-body max-w-2xl mx-auto">
              Here's what happens when people embrace their authentic stories and learn to share them with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialQuote key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture CTA */}
      <InlineCTA
        title="Ready to Discover Your Story?"
        description="Join my community of storytellers and receive weekly insights, prompts, and inspiration to help you uncover and share your authentic narrative."
        primaryButtonText="Start Your Journey"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More About Me"
        secondaryButtonLink="/about"
        backgroundColor="sage"
      />

      {/* Mobile CTA Button */}
      <MobileCTAButton />
    </>
  )
}
