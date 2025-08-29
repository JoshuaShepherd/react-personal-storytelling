# Personal Storytelling Site - Style Guide

## Narrative Zones & Design Philosophy

This site is built around the concept of "authentic storytelling" with a warm, human approach that prioritizes readability and genuine connection over flashy design elements.

## Design Principles

### Warmth & Authenticity
- **Warm color palette**: Earth tones, sage greens, and creamy neutrals
- **Generous whitespace**: Creates breathing room and reduces cognitive load
- **Serif typography for headings**: Adds personality and warmth
- **Sans-serif for body**: Ensures maximum readability

### Scannability & Hierarchy
- **Large, clear headings**: Easy to scan and understand page structure
- **Short paragraphs**: Break up text for better readability
- **Pull quotes**: Highlight key insights and wisdom
- **Visual hierarchy**: Clear distinction between different content types

### Human-Centered Experience
- **Authentic language**: Conversational, vulnerable, and relatable tone
- **Personal anecdotes**: Real stories over generic corporate speak
- **Accessible design**: High contrast, meaningful alt text, semantic HTML

## Color Palette

### Warm Neutrals
- `warm-50`: #fefdfb (Background)
- `warm-100`: #fdf9f2 (Light sections)
- `warm-200`: #faf0e0 (Borders, subtle backgrounds)
- `warm-300`: #f5e3ca (Borders)
- `warm-700`: #c87d3c (Body text)
- `warm-800`: #a5612a (Secondary text)
- `warm-900`: #8a4f23 (Headings, dark text)

### Sage Accents
- `sage-50`: #f6f8f6 (Light accents)
- `sage-100`: #e3e9e3 (Button backgrounds)
- `sage-500`: #5a735a (Primary buttons, accents)
- `sage-600`: #465a46 (Primary button hover)
- `sage-700`: #3a4a3a (Dark sage)

### Cream Highlights
- `cream-300`: #f7e8d3 (Accent backgrounds)

## Typography

### Font Families
- **Headings**: Lora (serif) - adds warmth and personality
- **Body Text**: Inter (sans-serif) - optimal readability
- **UI Elements**: Inter (sans-serif)

### Type Scale
- **Hero Headline**: 4xl/5xl (text-4xl lg:text-5xl)
- **Section Headings**: 3xl/4xl (story-heading class)
- **Subheadings**: xl/2xl (story-subheading class)
- **Body Text**: lg (story-body class)
- **Pull Quotes**: 2xl/3xl (story-quote class)

## Photography & Imagery Guidelines

### Portrait Photography
- **Style**: Warm, natural lighting preferred over studio lighting
- **Mood**: Approachable, genuine expressions over polished headshots
- **Setting**: Natural environments, cozy spaces, authentic contexts
- **Aspect Ratios**: 
  - Hero portraits: 4:5 or 3:4 for vertical orientation
  - Bio cards: 1:1 square crops for consistency
  - Testimonial photos: 1:1 square crops

### Image Placeholders
Current placeholders include:
- `/placeholder-hero-portrait.jpg` - Main hero portrait
- `/placeholder-about-portrait.jpg` - About page portrait
- `/placeholder-testimonial-1.jpg` - Client testimonial photo
- `/placeholder-testimonial-2.jpg` - Client testimonial photo
- `/placeholder-testimonial-3.jpg` - Client testimonial photo

### Alt Text Guidelines
- **Descriptive**: Describe what's visible in the image
- **Context-aware**: Include relevant context for the page
- **Emotion**: Include the mood/feeling when relevant
- **Professional**: "Professional headshot of [Name] with warm, genuine smile"
- **Environmental**: "Portrait of [Name] in natural outdoor setting with soft lighting"

## Layout Components

### Story Sections
- `.story-section`: Standard vertical padding (py-16 lg:py-24)
- `.story-container`: Max width with responsive padding (max-w-4xl)
- `.story-wide-container`: Wider max width for grid layouts (max-w-6xl)
- `.story-narrow-container`: Narrower for focused content (max-w-2xl)

### Cards & Content
- `.story-card`: Consistent card styling with subtle shadows
- White background, rounded corners, gentle shadow
- Hover effects for interactive elements

### Buttons
- `.story-button-primary`: Sage green, for main actions
- `.story-button-secondary`: Outlined, for secondary actions
- Rounded full corners for friendly, approachable feel

## Content Strategy

### Narrative Zones

#### 1. Hero/Above-the-fold
- **Purpose**: Immediate connection and value proposition
- **Content**: Personal story hook + clear benefit
- **Tone**: Warm welcome, promise of transformation

#### 2. Personal Introduction
- **Purpose**: Build trust through vulnerability
- **Content**: Origin story, why this work matters
- **Tone**: Authentic, relatable, humble

#### 3. Social Proof
- **Purpose**: Validate approach through client stories
- **Content**: Testimonials with specific outcomes
- **Tone**: Celebratory, inspiring

#### 4. Service Offerings
- **Purpose**: Clear path to working together
- **Content**: Practical packages with clear benefits
- **Tone**: Supportive, comprehensive

#### 5. Connection Points
- **Purpose**: Lower barrier to engagement
- **Content**: Multiple touchpoints (email, social, contact form)
- **Tone**: Welcoming, accessible

### Content Principles
- **Story-first**: Every section should advance the narrative
- **Specificity**: Use concrete examples over generic statements
- **Vulnerability**: Share challenges alongside successes
- **Client-centered**: Focus on their transformation, not your expertise
- **Action-oriented**: Clear next steps in every section

## Mobile Experience

### Key Features
- **Fixed CTA button**: "Get in Touch" always accessible on mobile
- **Touch-friendly**: 44px minimum touch targets
- **Readable**: 16px minimum font size
- **Scannable**: Shorter paragraphs, more whitespace
- **Progressive disclosure**: Key info first, details on tap/click

### Navigation
- **Hamburger menu**: Clean, accessible mobile navigation
- **Sticky header**: Always available navigation
- **Clear hierarchy**: Important links prioritized

## Accessibility Features

### Design Considerations
- **High contrast**: Text meets WCAG AA standards
- **Focus indicators**: Clear keyboard navigation
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt text**: Meaningful descriptions for all images
- **Form labels**: Clear, associated labels for all inputs

### Testing Checklist
- [ ] Keyboard navigation works throughout
- [ ] Screen reader can navigate content logically
- [ ] Color is not the only way information is conveyed
- [ ] Text contrast meets WCAG AA standards
- [ ] Images have appropriate alt text
- [ ] Forms are properly labeled

## Implementation Notes

### Technical Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom color palette
- **Typography**: Google Fonts (Inter + Lora)
- **Icons**: Heroicons for consistency
- **Deployment**: Vercel recommended for optimal Next.js performance

### Performance Considerations
- **Image optimization**: Use Next.js Image component
- **Font loading**: Preload critical fonts
- **Critical CSS**: Inline critical styles
- **Lazy loading**: Non-critical images and components

This style guide ensures consistency while maintaining the warm, authentic, and human-centered approach that makes personal storytelling effective.
