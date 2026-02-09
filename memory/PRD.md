# Flinza Works - Product Requirements Document

## Project Overview
**Project Name**: Flinza Works - Premium Editorial Agency Website  
**Date Started**: February 9, 2025  
**Status**: Phase 1 Complete (Homepage + AI UGC + Contact Frontend)

## Original Problem Statement
Build a complete 6-page editorial-style agency website for Flinza Works with:
- Premium dark theme design (#06141B, #11212D, #253745)
- Interactive 3D globe for contact page
- Integration with Calendly for bookings
- 3 user-provided video files for case studies
- Locations: NEW YORK, LONDON, CYPRUS, IRELAND, INDIA

## User Personas
1. **E-commerce Brand Founders** - Looking for creative & media buying services
2. **Marketing Directors** - Seeking AI UGC and content strategy
3. **Venture Capital Partners** - Exploring agency partnerships

## Core Requirements (Static)
### Design System
- **Colors**: Primary BG (#06141B), Secondary BG (#11212D), CTA Button (#253745), Border (#4A5C6A), Silver Accent (#CCD0CF)
- **Typography**: DM Sans (body), Cormorant Garamond italic (headings)
- **Components**: Glass morphism nav, atmospheric glows, card hover effects
- **Animations**: Fade-up on scroll, hover glows, image transitions

### Key Features
1. Fixed glass navigation with dropdown
2. Hero sections with atmospheric effects
3. Service cards with hover image effects
4. Interactive 3D globe (planned)
5. Contact form with validation
6. Global office locations
7. Stats showcase section

## What's Been Implemented (Complete - Feb 9, 2025)

### ✅ All 6 Pages Completed

**1. Homepage (/)**
- Hero section with main headline and CTA
- Stats section (4 metrics)
- The Arsenal section (3 service cards with images)
- CTA section with dual buttons
- Footer with links

**2. AI UGC Service Page (/ai-ugc)**
- Hero with service category
- Bottleneck vs Breakthrough comparison cards
- Our Methodology (4-card grid)
- What's Included (3 features)
- Final CTA section

**3. Contact Page (/contact)**
- Hero section
- Contact form (Name, Email, Company, Service dropdown, Message)
- Globe placeholder (3D implementation pending)
- Global Stations section (3 offices: London, New York, India)
- Social links integration
- Form validation with toast notifications

**4. Case Studies Page (/case-studies)**
- Hero with editorial headline
- Video carousel with 3 user-provided videos
- Previous/Next navigation buttons
- Video info cards (category, company, metrics)
- Carousel dots navigation
- Play/pause and mute controls
- CTA section with dual buttons

**5. Organic Content Page (/organic-content)**
- Hero with service category
- The Strategic Shift (Legacy vs Flinza Way comparison)
- The Process (4-phase methodology cards)
- CTA section with availability note

**6. Meta Ads Page (/meta-ads)**
- Hero with atmospheric glows
- Strategic Excellence (3 service cards)
- Stats showcase (4 metrics)
- The Methodology (4-step process with highlighted step)
- Final CTA section

**7. Navigation & UX**
- ✅ ScrollToTop component implemented - pages open at top
- Working dropdown menu with all 4 service pages
- Active page highlighting in navigation
- All Calendly links integrated
- Responsive navigation (mobile-ready)

**8. Technical Implementation**
- React 19 + React Router with ScrollToTop
- Tailwind CSS with custom design system
- Framer Motion ready for animations
- Three.js installed for 3D globe (implementation pending)
- Shadcn UI components (Button, Input, Textarea, Select)
- Sonner for toast notifications
- Video player with custom controls

### 📦 Dependencies Installed
- three@0.160.0
- @react-three/fiber@8.15.0
- @react-three/drei@9.92.0
- framer-motion@12.33.0
- lucide-react (for icons)

### 🎨 Design Adherence
- ✅ No emoji icons (using lucide-react)
- ✅ Editorial dark theme
- ✅ Glass morphism navigation
- ✅ Atmospheric glow effects (subtle, <20% page area)
- ✅ Proper hover states with transitions
- ✅ Serif italic headings
- ✅ Premium imagery from Unsplash

## Prioritized Backlog

### P0 (Critical - Next Phase)
1. **Backend API Development**
   - Contact form submission endpoint (POST /api/contact)
   - Store submissions in MongoDB
   - Email notification integration (optional)

2. **3D Globe Implementation**
   - Complete Globe3D component with Three.js
   - Add location markers for 5 cities (NEW YORK, LONDON, CYPRUS, IRELAND, INDIA)
   - Implement interactive rotation
   - Add glow effects on location pins

### P1 (High Priority)
1. ~~Form validation enhancement~~ ✅ DONE
2. ~~Video carousel implementation~~ ✅ DONE (user's 3 videos integrated)
3. Scroll animations with Framer Motion
4. Image lazy loading optimization
5. Mobile responsive testing & refinement

### P2 (Medium Priority)
1. SEO meta tags for all pages
2. Page transition animations
3. Preload fonts for performance
4. Add favicon
5. Analytics integration

## API Contracts (Planned)

### POST /api/contact
**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "company": "string (optional)",
  "service": "string (ai-ugc|creative-strategy|media-buying|organic-content|other)",
  "message": "string"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "id": "generated_id"
}
```

## MongoDB Schema (Planned)

### Contact Submissions
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  company: String,
  service: String,
  message: String,
  createdAt: Date,
  status: String (new|contacted|archived)
}
```

## Next Action Items
1. Build backend API for contact form (POST /api/contact)
2. Complete interactive 3D Globe with location markers for 5 cities
3. Test contact form end-to-end with backend
4. Add scroll-triggered animations with Framer Motion
5. Mobile responsive testing across all 6 pages
6. SEO optimization (meta tags, og:image, etc.)

---

**Last Updated**: February 9, 2025  
**Phase**: Complete Frontend (6/6 pages) - Backend Pending
