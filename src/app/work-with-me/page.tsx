"use client"

import { OfferTierCard, InlineCTA, MobileCTAButton } from '@/components/story'

const coachingPackages = [
  {
    name: "Story Discovery",
    price: "$497",
    description: "Perfect for getting started with your storytelling journey. Ideal for individuals ready to uncover their unique narrative.",
    features: [
      "2 one-on-one coaching sessions (90 minutes each)",
      "Personal story mapping exercise",
      "Core narrative themes identification",
      "Basic storytelling framework",
      "Email support between sessions"
    ],
    ctaText: "Start Your Discovery",
    ctaLink: "/contact?package=discovery"
  },
  {
    name: "Authentic Voice",
    price: "$1,297",
    description: "Comprehensive coaching to develop your authentic voice and storytelling confidence. Most popular choice for committed storytellers.",
    features: [
      "6 one-on-one coaching sessions (90 minutes each)",
      "Complete story arc development",
      "Multiple storytelling formats (elevator pitch to keynote)",
      "Confidence-building exercises",
      "Practice sessions with feedback",
      "Ongoing Voxer support",
      "Resource library access"
    ],
    isPopular: true,
    ctaText: "Develop Your Voice",
    ctaLink: "/contact?package=voice"
  },
  {
    name: "Story Mastery",
    price: "$2,497",
    description: "Elite program for leaders and entrepreneurs ready to leverage their story for maximum impact and influence.",
    features: [
      "12 one-on-one coaching sessions (90 minutes each)",
      "Complete personal brand story development",
      "Multiple story variations for different audiences",
      "Content strategy and planning",
      "Public speaking coaching",
      "Media training basics",
      "LinkedIn and social media optimization",
      "Unlimited email and Voxer support",
      "Quarterly check-ins for 6 months post-program"
    ],
    ctaText: "Master Your Story",
    ctaLink: "/contact?package=mastery"
  }
]

const faqs = [
  {
    question: "How long does the coaching process typically take?",
    answer: "The timeline varies depending on your chosen package and personal goals. Story Discovery spans 4-6 weeks, Authentic Voice takes 8-12 weeks, and Story Mastery is a 16-20 week journey. I believe in allowing adequate time for reflection and integration between sessions."
  },
  {
    question: "What if I don't think I have an interesting story?",
    answer: "This is one of the most common concerns I hear, and it's precisely why this work is so powerful. Every person has experienced challenges, growth, and unique perspectives that others can learn from. Often, the stories we think are 'boring' are exactly what others need to hear. Part of our work together is helping you see the extraordinary in your ordinary experiences."
  },
  {
    question: "Can you help if I'm not comfortable sharing personal details?",
    answer: "Absolutely. We'll work at a pace that feels safe and comfortable for you. Authenticity doesn't mean sharing everything—it means sharing what feels true and aligned for you. We'll explore different levels of vulnerability and help you find your comfort zone while still creating meaningful connection."
  },
  {
    question: "Do you offer group programs or workshops?",
    answer: "Yes! I offer quarterly storytelling workshops and occasionally run small group coaching cohorts. These are announced on my email list and social media. Group settings can be incredibly powerful for practicing storytelling in a supportive environment."
  },
  {
    question: "What's your coaching style like?",
    answer: "I combine gentle challenge with unconditional support. I'll push you to dig deeper and step into your power while creating a completely safe space for vulnerability. My approach is intuitive and adaptive—some sessions might be more strategic, others more reflective, depending on what you need."
  },
  {
    question: "What if I need to pause or reschedule our work?",
    answer: "Life happens, and I understand that. All packages include flexibility for rescheduling sessions, and if you need to pause our work, we can discuss extending your program timeline. My goal is to support you, not add stress to your life."
  }
]

export default function WorkWithMePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="story-section bg-gradient-to-b from-warm-50 to-warm-100">
        <div className="story-narrow-container text-center">
          <h1 className="text-4xl lg:text-5xl font-serif text-warm-900 leading-tight mb-8">
            Let's Uncover <span className="text-sage-600">Your Story Together</span>
          </h1>
          <p className="text-xl text-warm-700 leading-relaxed max-w-3xl mx-auto">
            Whether you're just beginning to explore your narrative or ready to master the art of authentic storytelling, 
            I have a pathway designed to meet you where you are and take you where you want to go.
          </p>
        </div>
      </section>

      {/* Coaching Packages */}
      <section className="story-section">
        <div className="story-container">
          <div className="text-center mb-16">
            <h2 className="story-heading mb-6">Choose Your Storytelling Journey</h2>
            <p className="story-body max-w-2xl mx-auto">
              Each package is thoughtfully designed to provide exactly what you need at your current stage of story development. 
              All include personalized attention, practical exercises, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coachingPackages.map((pkg, index) => (
              <OfferTierCard key={index} offer={pkg} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-warm-600 mb-4">
              Not sure which package is right for you?
            </p>
            <a
              href="/contact?type=consultation"
              className="story-button-secondary"
            >
              Schedule a Free Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="story-section bg-warm-100">
        <div className="story-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="story-heading mb-8">What You Can Expect</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sage-500 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-warm-900 mb-2">Deep Listening</h3>
                    <p className="text-warm-700">
                      Every session begins with where you are right now. I'll listen deeply to understand 
                      your experiences, challenges, and aspirations before we craft your narrative.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sage-500 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-warm-900 mb-2">Guided Exploration</h3>
                    <p className="text-warm-700">
                      Through thoughtful questions and exercises, we'll uncover the themes, lessons, and 
                      wisdom embedded in your life experiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sage-500 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-warm-900 mb-2">Practical Application</h3>
                    <p className="text-warm-700">
                      You'll leave each session with concrete tools, exercises, and frameworks you can 
                      use immediately to start sharing your story with confidence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sage-500 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-warm-900 mb-2">Ongoing Support</h3>
                    <p className="text-warm-700">
                      Between sessions, you'll have support through email or Voxer (depending on your package) 
                      to help you integrate what you're learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="story-card">
              <blockquote className="text-center">
                <p className="story-quote mb-6">
                  "Working with Jordan didn't just change how I talk about my business—it changed how I see myself. 
                  I finally understand that my story isn't something to get past, it's something to step into."
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-left">
                    <div className="font-semibold text-warm-900">Maria Santos</div>
                    <div className="text-warm-600 text-sm">Creative Entrepreneur</div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="story-section">
        <div className="story-narrow-container">
          <div className="text-center mb-16">
            <h2 className="story-heading mb-6">Frequently Asked Questions</h2>
            <p className="story-body">
              I know taking the step to work with a coach can feel vulnerable. Here are answers to the questions I hear most often.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="story-card">
                <h3 className="text-xl font-serif text-warm-900 mb-4">{faq.question}</h3>
                <p className="story-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="story-section bg-sage-50">
        <div className="story-container">
          <div className="text-center mb-16">
            <h2 className="story-heading mb-6">Ready to Get Started?</h2>
            <p className="story-body max-w-2xl mx-auto">
              Here's exactly what happens when you decide to work with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-warm-900 mb-4">1. Discovery Call</h3>
              <p className="story-body">
                We start with a complimentary 30-minute call to explore your goals, answer questions, and determine if we're a good fit for working together.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-warm-900 mb-4">2. Package Selection</h3>
              <p className="story-body">
                Based on our conversation, I'll recommend the package that best fits your needs and goals. You'll receive a detailed welcome packet with next steps.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-warm-900 mb-4">3. Begin Your Journey</h3>
              <p className="story-body">
                We schedule your first session and begin the beautiful work of uncovering, crafting, and sharing your authentic story with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <InlineCTA
        title="Your Story is Waiting"
        description="Every day you wait to share your authentic story is another day someone who needs to hear it doesn't get the chance. Let's change that together."
        primaryButtonText="Schedule Discovery Call"
        primaryButtonLink="/contact?type=consultation"
        secondaryButtonText="Send a Message"
        secondaryButtonLink="/contact"
        backgroundColor="warm"
      />

      {/* Mobile CTA Button */}
      <MobileCTAButton />
    </>
  )
}
