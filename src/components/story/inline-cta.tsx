"use client"

import Link from 'next/link'

interface InlineCTAProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  backgroundColor?: 'default' | 'warm' | 'sage'
}

export function InlineCTA({ 
  title, 
  description, 
  primaryButtonText, 
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundColor = 'default'
}: InlineCTAProps) {
  const bgClass = {
    default: 'bg-warm-100',
    warm: 'bg-warm-200',
    sage: 'bg-sage-50'
  }[backgroundColor]

  return (
    <section className={`story-section ${bgClass}`}>
      <div className="story-narrow-container">
        <div className="text-center">
          <h2 className="story-heading mb-6">{title}</h2>
          <p className="story-body mb-8 max-w-2xl mx-auto">{description}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={primaryButtonLink} className="story-button-primary">
              {primaryButtonText}
            </Link>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink} className="story-button-secondary">
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
