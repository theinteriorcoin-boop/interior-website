# Design Guidelines for The Interior.co.in

## Design Approach

**Reference-Based Approach**: Drawing inspiration from luxury experience platforms (Airbnb, Apple, high-end design portfolios) with emphasis on visual storytelling and scroll-driven narrative. This interior design showcase demands a premium, experience-focused aesthetic where the transformation animation becomes the hero moment.

## Core Design Elements

### Typography System
- **Primary Font**: Cormorant Garamond (serif) - sophisticated, luxury feel for headings
- **Secondary Font**: Inter (sans-serif) - clean, modern for body text
- **Hierarchy**:
  - H1: 4xl-6xl (72-96px desktop), bold weight
  - H2: 3xl-4xl (48-60px), medium weight
  - H3: 2xl-3xl (36-48px), regular weight
  - Body: lg-xl (18-20px), light-regular weight
  - Captions: sm-base (14-16px)

### Layout System
**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12 for grids
- Container max-width: max-w-7xl for full sections, max-w-4xl for text content

### Hero Section - Scroll Animation
**Structure**: Full-height viewport section (h-screen) featuring the transformation sequence
- Canvas-based or image sequence implementation showing 8-12 frames
- Progression: empty room → furniture additions → decor items → full luxury interior
- Overlay text: Large centered headline with subtle fade-in
- Scroll indicator at bottom to encourage interaction
- Fixed positioning during scroll animation phase
- Mobile: Simplified 4-6 frame sequence, still impactful

### Component Library

**Navigation**
- Fixed transparent header with blur backdrop
- Thin, elegant design (h-16 to h-20)
- Logo left-aligned, menu items right-aligned with generous spacing (gap-8)
- Subtle underline hover states for navigation links

**Content Sections** (5-6 sections total)

1. **Services Grid** (post-hero)
   - 3-column grid (lg:grid-cols-3)
   - Large icons or minimalist illustrations
   - Title + brief description per service
   - Generous card padding (p-8 to p-12)

2. **Portfolio Gallery**
   - Masonry-style or 2-column staggered grid
   - High-quality interior images (6-8 projects)
   - Overlay on hover: Project name + category
   - Mix of portrait and landscape orientations

3. **Transformation Showcase**
   - Before/After slider component (2-3 examples)
   - Side-by-side comparison or interactive slider
   - Captions describing the transformation

4. **About Section**
   - 2-column layout: Text + Team image or process diagram
   - Emphasize expertise and luxury positioning
   - Stats or achievements (Years experience, Projects completed, etc.)

5. **Testimonials**
   - Large pull quotes with client names
   - Single-column centered layout for impact
   - Rotate through 3-4 testimonials

6. **Contact Section**
   - 2-column: Form + Contact information/Office image
   - Form fields: Name, Email, Phone, Project Type, Message
   - Elegant input styling with subtle borders

**Footer**
- Multi-column layout: Brand statement, Quick links, Services, Contact info
- Social media icons
- Copyright and legal links

### Images

**Hero Animation Sequence**:
- 8-12 high-quality images showing progressive transformation
- Same room/angle throughout sequence
- Professional photography, consistent lighting
- Dimensions: 1920x1080 minimum for desktop clarity

**Portfolio Images**:
- 6-8 luxury interior photos showcasing variety (living rooms, bedrooms, kitchens)
- Professional photography with warm, inviting lighting
- Minimum 1200px width

**About Section**:
- Team photo or designer at work (authentic, professional)
- Or process/mood board visual

**Contact Section**:
- Office space or consultation area image (optional but recommended)

### Animations
- **Hero scroll transform**: Smooth frame transitions tied to scroll position
- **Fade-in on scroll**: Gentle reveals for sections (use Intersection Observer)
- **Hover states**: Subtle scale (1.02-1.05) on portfolio images
- **Navigation**: Smooth blur backdrop transition on scroll
- Minimize other animations - let the hero transformation be the star

### Accessibility & Polish
- Preload animation frames for smooth playback
- Loading state for hero section
- Alt text for all images
- Keyboard navigation support
- Responsive breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly tap targets (minimum 44px)

### Quality Standards
- Premium, magazine-quality aesthetic throughout
- Generous whitespace - let luxury breathe
- Consistent vertical rhythm across all sections
- Professional photography only - no stock-looking images
- Polished micro-interactions on all interactive elements