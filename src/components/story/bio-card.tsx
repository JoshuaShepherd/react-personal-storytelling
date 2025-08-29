"use client"

import Image from 'next/image'

interface BioCardProps {
  name: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

export function BioCard({ name, title, description, imageUrl, imageAlt }: BioCardProps) {
  return (
    <div className="story-card">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <div className="relative w-48 h-48 lg:w-32 lg:h-32 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl font-serif text-warm-900 mb-2">{name}</h3>
          <p className="text-lg text-sage-600 font-medium mb-4">{title}</p>
          <p className="story-body">{description}</p>
        </div>
      </div>
    </div>
  )
}
