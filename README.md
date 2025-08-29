# Personal Storytelling Website

A warm, human, and approachable personal storytelling and coaching website built with Next.js 14, featuring authentic design and narrative-focused content.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+ or 20+ (LTS recommended)
- npm, yarn, or pnpm

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:3000
```

### Build for Production
```bash
# Create production build
npm run build

# Start production server
npm start
```

### Environment Variables
Copy `.env.example` to `.env.local` and configure if needed:
```bash
cp .env.example .env.local
```

No environment variables are required for basic functionality. Optional variables are documented in `.env.example`.

## 🎯 Project Overview

This project creates a personal storytelling and coaching website that prioritizes:
- **Authenticity** over perfection
- **Warm, human connection** over corporate polish
- **Scannable, readable content** over dense text blocks
- **Meaningful storytelling** over generic marketing copy

## 🏗️ Architecture

### Pages
- **`/`** - Homepage with intro story + photo + core offerings + testimonials + email capture
- **`/about`** - Longform story + timeline + values + personal touch
- **`/work-with-me`** - Coaching packages + FAQs + clear next steps
- **`/contact`** - Simple contact form with guidance

### Components (`src/components/story/`)
- **`StoryHeader`** - Navigation with warm, personal branding
- **`BioCard`** - Personal bio with portrait and description
- **`Timeline`** - Visual journey through key life moments
- **`ValuesRow`** - Core values with icons and descriptions
- **`OfferTierCard`** - Coaching package presentation
- **`TestimonialQuote`** - Client testimonials with photos
- **`InlineCTA`** - Contextual call-to-action sections
- **`SimpleContactForm`** - Accessible contact form
- **`MobileCTAButton`** - Persistent mobile call-to-action
- **`StoryFooter`** - Site footer with navigation and social links

## 🎨 Design System

### Color Palette
- **Warm Neutrals**: Creamy backgrounds and warm grays for comfort
- **Sage Greens**: Calming accent colors for buttons and highlights  
- **High Contrast Text**: Ensuring accessibility and readability

### Typography
- **Lora (Serif)**: Headlines and quotes for warmth and personality
- **Inter (Sans-serif)**: Body text for optimal readability
- **Generous spacing**: Breathing room for comfortable reading

### Layout Philosophy
- **Story-first sections**: Each area advances the personal narrative
- **Scannable hierarchy**: Clear headings and short paragraphs
- **Mobile-responsive**: Touch-friendly with persistent CTA button

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the site.

### Required Images

Add these placeholder images to the `/public` directory:
- `placeholder-hero-portrait.jpg` - Main hero portrait (warm, authentic lighting)
- `placeholder-about-portrait.jpg` - About page portrait 
- `placeholder-testimonial-1.jpg` - Client testimonial photo
- `placeholder-testimonial-2.jpg` - Client testimonial photo  
- `placeholder-testimonial-3.jpg` - Client testimonial photo

**Image Guidelines:**
- Hero portraits: Natural lighting, genuine expressions
- Aspect ratios: 4:5 or 3:4 for portraits, 1:1 for testimonials
- Style: Approachable and warm vs. corporate/studio shots
- See `docs/story-style.md` for detailed photo guidance

## 📱 Features

### User Experience
- **Persistent mobile CTA**: "Get in Touch" always accessible
- **Smooth navigation**: Sticky header with clear hierarchy
- **Accessible forms**: Proper labels and keyboard navigation
- **Fast loading**: Optimized images and critical CSS

### Content Strategy
- **Vulnerability-based connection**: Authentic personal stories
- **Client transformation focus**: Results and outcomes highlighted
- **Multiple engagement points**: Various ways to connect and learn more
- **Progressive disclosure**: Key info first, details on deeper pages

### Technical Features
- **Next.js 14 App Router**: Modern React framework
- **Tailwind CSS**: Utility-first styling with custom theme
- **TypeScript**: Type safety throughout
- **Responsive design**: Mobile-first approach
- **SEO optimized**: Proper meta tags and semantic HTML

## 📄 Documentation

- **`docs/story-style.md`** - Complete style guide including:
  - Color palette and usage
  - Typography hierarchy  
  - Photography guidelines
  - Content strategy
  - Accessibility standards
  - Mobile experience notes

## 🎯 Content Customization

### Homepage Content
Update the testimonials, service descriptions, and personal story sections in:
- `src/app/page.tsx`

### About Page
Customize your personal journey, timeline, and values in:
- `src/app/about/page.tsx`

### Services/Packages
Modify coaching packages, pricing, and FAQs in:
- `src/app/work-with-me/page.tsx`

### Brand Customization
Update site title, navigation, and footer content in:
- `src/components/story/story-header.tsx`
- `src/components/story/story-footer.tsx`
- `src/app/layout.tsx`

## ♿ Accessibility

This site includes:
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **High contrast**: Text meets WCAG AA standards  
- **Keyboard navigation**: Full site accessible via keyboard
- **Screen reader support**: Meaningful alt text and labels
- **Focus indicators**: Clear visual focus states

## 📊 Performance

Built with performance in mind:
- **Next.js Image optimization**: Automatic image sizing and formats
- **Critical CSS**: Above-the-fold styles inlined
- **Font optimization**: Preload critical fonts
- **Lazy loading**: Non-critical content loads as needed

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
```
Connect your repository to Vercel for automatic deployments.

### Other Platforms
This is a standard Next.js application and can be deployed to any platform that supports Node.js.

## 🤝 Contributing

This is a template for personal storytelling sites. Feel free to:
1. Fork the repository
2. Customize for your brand
3. Share improvements back to the community

## 📝 License

MIT License - feel free to use this for personal or commercial projects.

---

**Built with ❤️ for authentic storytellers who want to share their truth with the world.**
