"use client"

import Link from 'next/link'

export function MobileCTAButton() {
  return (
    <div className="mobile-cta-button">
      <Link href="/contact" className="story-button-primary shadow-lg">
        Get in Touch
      </Link>
    </div>
  )
}
