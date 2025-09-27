# Sam Bot Alpha Test - Design Guidelines

## Design Approach
**Reference-Based Approach**: Taking inspiration from modern messaging apps (iMessage, WhatsApp) and clean tech landing pages like Linear or Notion. The design should feel familiar and trustworthy while maintaining simplicity for the alpha test phase.

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Primary: 213 100% 50% (bright blue, iMessage-inspired)
- Background: 0 0% 98% (near white)
- Text: 0 0% 15% (dark charcoal)
- Message bubbles: 213 100% 50% (primary blue) and 0 0% 92% (light gray)
- Input fields: 0 0% 100% (white with subtle border)

**Dark Mode:**
- Primary: 213 90% 60% (slightly lighter blue)
- Background: 0 0% 8% (dark background)
- Text: 0 0% 90% (light text)
- Message bubbles: 213 90% 60% (primary) and 0 0% 18% (dark gray)
- Input fields: 0 0% 12% (dark with border)

### B. Typography
- **Primary Font**: Inter (Google Fonts) for clean, modern readability
- **Hierarchy**: 
  - "alpha test": text-xs (12px)
  - Main title: text-2xl md:text-3xl, font-bold
  - Subtitle: text-lg, font-normal
  - Chat text: text-base
  - Footer: text-sm

### C. Layout System
**Tailwind Spacing**: Consistent use of 4, 6, 8, 12, 16, 24 units
- Padding: p-4, p-6, p-8
- Margins: m-4, m-6, m-12
- Gaps: gap-4, gap-6, gap-8

### D. Component Library

**Core Components:**
1. **Header Section**: Minimal with "alpha test" in muted small text
2. **Hero Text Block**: Large title and subtitle with proper hierarchy
3. **iMessage Chat Interface**: 
   - Rounded message bubbles with proper shadows
   - Input field styled like iOS message input
   - Blue send button matching iMessage aesthetic
4. **Name Input Field**: Clean, rounded input with placeholder text
5. **CTA Button**: Primary blue, rounded, with subtle shadow
6. **Footer Text**: Small, muted text about UCSB restriction

**Visual Treatments:**
- Message bubbles: rounded-2xl with subtle shadows
- Input fields: rounded-lg with border focus states
- Buttons: rounded-lg with hover/active states
- Overall container: max-width centered with padding

### E. Layout Structure
**Single Page Layout:**
1. **Top Section**: "alpha test" label (small, muted)
2. **Hero Section**: Main title and subtitle
3. **Interactive Section**: Name input + chat preview + send button
4. **Footer**: UCSB restriction text

**Mobile-First Design**: Optimized for smartphone usage with touch-friendly elements and appropriate sizing for mobile screens.

## Key Design Principles
- **Simplicity**: Clean, uncluttered interface focusing on the core interaction
- **Familiarity**: iMessage-inspired design for immediate user recognition
- **Trust**: Professional typography and spacing to build confidence
- **Accessibility**: Strong color contrast and readable text sizes
- **Mobile-Optimized**: Primary focus on mobile experience since users will likely text from phones

## Images
No hero images or large graphics needed. The design relies on clean typography and the iMessage-style interface for visual appeal. Keep it minimal and focused on the interaction.