"use client"

import Link from 'next/link'
import { useState } from 'react'

export function StoryHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-warm-200 sticky top-0 z-40">
      <nav className="story-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-serif text-xl font-semibold text-warm-900">
            Your Story
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-warm-700 hover:text-warm-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-warm-700 hover:text-warm-900 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/work-with-me"
              className="text-warm-700 hover:text-warm-900 font-medium transition-colors"
            >
              Work With Me
            </Link>
            <Link
              href="/contact"
              className="story-button-primary"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-warm-700 hover:text-warm-900 hover:bg-warm-100"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-warm-200 bg-white">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-3 py-2 text-warm-700 hover:text-warm-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-warm-700 hover:text-warm-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/work-with-me"
                className="px-3 py-2 text-warm-700 hover:text-warm-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Work With Me
              </Link>
              <Link
                href="/contact"
                className="mx-3 mt-2 story-button-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
