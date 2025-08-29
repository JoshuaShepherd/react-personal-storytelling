"use client"

import Link from 'next/link'

interface OfferTier {
  name: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
  ctaText: string
  ctaLink: string
}

interface OfferTierCardProps {
  offer: OfferTier
}

export function OfferTierCard({ offer }: OfferTierCardProps) {
  return (
    <div className={`relative story-card ${offer.isPopular ? 'ring-2 ring-sage-500' : ''}`}>
      {offer.isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-sage-600 text-white px-4 py-1 text-sm font-medium rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-2xl font-serif text-warm-900 mb-2">{offer.name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-sage-600">{offer.price}</span>
        </div>
        <p className="story-body mb-6">{offer.description}</p>
        
        <ul className="space-y-3 mb-8 text-left">
          {offer.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-sage-500 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-warm-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link
          href={offer.ctaLink}
          className={`block w-full text-center ${
            offer.isPopular ? 'story-button-primary' : 'story-button-secondary'
          }`}
        >
          {offer.ctaText}
        </Link>
      </div>
    </div>
  )
}
