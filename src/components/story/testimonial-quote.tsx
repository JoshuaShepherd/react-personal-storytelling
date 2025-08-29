"use client"

import Image from 'next/image'

interface Testimonial {
  quote: string
  author: string
  title: string
  imageUrl?: string
  imageAlt?: string
}

interface TestimonialQuoteProps {
  testimonial: Testimonial
}

export function TestimonialQuote({ testimonial }: TestimonialQuoteProps) {
  return (
    <div className="story-card text-center">
      <blockquote className="mb-8">
        <p className="story-quote mb-6">"{testimonial.quote}"</p>
        
        <div className="flex items-center justify-center space-x-4">
          {testimonial.imageUrl && (
            <div className="relative w-12 h-12">
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.imageAlt || `${testimonial.author} profile picture`}
                fill
                className="rounded-full object-cover"
              />
            </div>
          )}
          <div className="text-left">
            <div className="font-semibold text-warm-900">{testimonial.author}</div>
            <div className="text-warm-600 text-sm">{testimonial.title}</div>
          </div>
        </div>
      </blockquote>
    </div>
  )
}
