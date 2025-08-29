"use client"

import Link from 'next/link'

export function StoryFooter() {
  return (
    <footer className="bg-warm-100 border-t border-warm-200">
      <div className="story-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-xl font-semibold text-warm-900 mb-4 block">
              Your Story
            </Link>
            <p className="text-warm-700 mb-4 max-w-md">
              Authentic coaching and storytelling services to help you discover and share your unique narrative.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-warm-600 hover:text-warm-800 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348s-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
              <a href="#" className="text-warm-600 hover:text-warm-800 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-warm-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-warm-700 hover:text-warm-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-warm-700 hover:text-warm-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work-with-me" className="text-warm-700 hover:text-warm-900 transition-colors">
                  Work With Me
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-warm-700 hover:text-warm-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-warm-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-warm-700">Individual Coaching</span>
              </li>
              <li>
                <span className="text-warm-700">Storytelling Workshops</span>
              </li>
              <li>
                <span className="text-warm-700">Content Strategy</span>
              </li>
              <li>
                <span className="text-warm-700">Speaking Engagements</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-warm-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-warm-600 text-sm">
            © 2024 Your Story. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-warm-600 hover:text-warm-800 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-warm-600 hover:text-warm-800 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
