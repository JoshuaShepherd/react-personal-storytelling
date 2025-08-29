"use client"

import { BioCard, Timeline, ValuesRow, InlineCTA, MobileCTAButton } from '@/components/story'

const timelineItems = [
  {
    year: "2018",
    title: "The Awakening",
    description: "After years of helping others craft their professional narratives, I realized I had lost my own voice. This moment of vulnerability became the catalyst for my transformation."
  },
  {
    year: "2020",
    title: "Finding My Purpose",
    description: "Through intensive self-reflection and mentorship, I discovered that authentic storytelling wasn't just about communication—it was about healing and connection."
  },
  {
    year: "2022",
    title: "Sharing the Gift",
    description: "Launched my coaching practice focused on helping others discover and embrace their unique stories. Every client's breakthrough reminds me why this work matters."
  }
]

const values = [
  {
    title: "Authenticity",
    description: "I believe in the power of truth-telling and vulnerable sharing. Your real story, with all its complexity, is more compelling than any polished facade.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Growth Mindset",
    description: "Every experience, even the challenging ones, contains wisdom and opportunity for growth. I help you find the gifts hidden in your journey.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Connection",
    description: "Stories are bridges between souls. When you share authentically, you create space for others to do the same, fostering genuine human connection.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="story-section bg-gradient-to-b from-warm-50 to-warm-100">
        <div className="story-narrow-container text-center">
          <h1 className="text-4xl lg:text-5xl font-serif text-warm-900 leading-tight mb-8">
            My Story of <span className="text-sage-600">Rediscovering Voice</span>
          </h1>
          <p className="text-xl text-warm-700 leading-relaxed max-w-3xl mx-auto">
            For years, I helped others tell their stories while hiding my own. Here's how I learned that 
            vulnerability isn't weakness—it's the birthplace of authentic connection and transformative growth.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="story-section">
        <div className="story-container">
          <BioCard
            name="Jordan Taylor"
            title="Storytelling Coach & Narrative Consultant"
            description="I'm a storytelling coach who believes that every person has a unique narrative worth sharing. After spending a decade helping brands craft their stories, I discovered my true calling lies in helping individuals uncover and embrace their authentic voices. Through personalized coaching and group workshops, I guide people through the vulnerable yet empowering process of owning their stories."
            imageUrl="/placeholder-about-portrait.svg"
            imageAlt="Professional headshot of Jordan Taylor with a warm, genuine smile"
          />
        </div>
      </section>

      {/* Longform Story */}
      <section className="story-section bg-warm-50">
        <div className="story-narrow-container">
          <div className="space-y-8 text-lg text-warm-700 leading-relaxed">
            <p>
              The irony wasn't lost on me. I spent my days crafting compelling narratives for Fortune 500 companies, 
              helping them find their authentic voice and connect with their audiences. Yet when it came to my own 
              story, I was a master of deflection, hiding behind professional accolades and carefully curated social media posts.
            </p>
            
            <p>
              It took a personal crisis in 2018—a career setback that left me questioning everything I thought I knew 
              about success—to realize I had become disconnected from my own truth. In my pursuit of professional perfection, 
              I had lost sight of the very thing I helped others find: authenticity.
            </p>

            <blockquote className="story-quote my-12 text-center">
              "The stories we tell ourselves about our failures often become the foundation of our greatest breakthroughs."
            </blockquote>

            <p>
              The healing began when I started writing—not for clients or campaigns, but for myself. I wrote about 
              the messy middle of career transitions, about imposter syndrome, about the gap between who I was and 
              who I thought I should be. For the first time in years, my words felt alive.
            </p>

            <p>
              As I began sharing these more vulnerable pieces of my story, something magical happened. People started 
              responding—not with judgment, but with recognition. They saw themselves in my struggles and found permission 
              to share their own. I realized that my greatest professional asset wasn't my ability to craft perfect narratives, 
              but my willingness to be imperfect in public.
            </p>

            <p>
              This revelation led to a complete pivot in my career. I transitioned from corporate storytelling to personal 
              narrative coaching, specializing in helping individuals—entrepreneurs, creatives, leaders, and life-changers—
              uncover and share their authentic stories.
            </p>

            <p>
              Today, I work with clients who, like my former self, have accomplished much but struggle to articulate their 
              value in a way that feels genuine. Together, we excavate the gold hidden in their experiences, transform their 
              perceived failures into wisdom, and help them find the confidence to share their truth with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="story-section">
        <div className="story-container">
          <div className="text-center mb-16">
            <h2 className="story-heading mb-6">The Journey to Authenticity</h2>
            <p className="story-body max-w-2xl mx-auto">
              My path to becoming a storytelling coach wasn't linear. Here are the key moments that shaped my approach to authentic narrative.
            </p>
          </div>

          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Values */}
      <section className="story-section bg-warm-100">
        <div className="story-container">
          <div className="text-center mb-16">
            <h2 className="story-heading mb-6">What Guides My Work</h2>
            <p className="story-body max-w-2xl mx-auto">
              These core values shape how I approach every coaching relationship and inform the safe, supportive environment I create for storytelling.
            </p>
          </div>

          <ValuesRow values={values} />
        </div>
      </section>

      {/* Personal Touch */}
      <section className="story-section">
        <div className="story-narrow-container">
          <div className="story-card text-center">
            <h2 className="story-subheading mb-6">Beyond the Professional</h2>
            <div className="space-y-4 text-lg text-warm-700 leading-relaxed">
              <p>
                When I'm not helping others craft their stories, you'll find me hiking local trails with my rescue dog, Milo, 
                experimenting with sourdough recipes (with varying degrees of success), and collecting vintage typewriters—
                because there's something magical about the tactile experience of storytelling.
              </p>
              <p>
                I'm endlessly fascinated by the intersection of vulnerability and courage, and I believe that sharing our 
                stories is one of the most radical acts of self-love and service to others we can offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <InlineCTA
        title="Ready to Uncover Your Story?"
        description="If my journey resonates with you, I'd love to support you in discovering and sharing your own authentic narrative. Let's explore what's possible when you embrace your truth."
        primaryButtonText="Let's Connect"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Coaching Options"
        secondaryButtonLink="/work-with-me"
        backgroundColor="sage"
      />

      {/* Mobile CTA Button */}
      <MobileCTAButton />
    </>
  )
}
