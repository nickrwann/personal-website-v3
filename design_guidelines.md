# Personal Portfolio Design Guidelines

## Design Approach
Reference-based approach inspired by **Brittany Chiang's portfolio** and **Linear's landing page**, emphasizing minimalist aesthetics with perfect typography hierarchy and generous white space.

## Layout Structure

### Hero Section
- **Centered circular profile picture** as the focal point (150-200px diameter on desktop, 120-150px on mobile)
- Name displayed prominently below profile picture using primary display font
- Tagline positioned beneath name in secondary weight/size
- Vertical centering with ample breathing room above and below

### About Me Section
- Clean, readable paragraph layout with optimal line length (max-width: 650px)
- Generous vertical padding (64px+ on desktop, 48px on mobile)
- Subtle top border separator (1px, cool grey)
- Left-aligned or centered text based on content length

### Experiences Section
- Timeline or card-based layout showcasing professional history
- Each experience entry includes: role/title, company/organization, date range, brief description
- Consistent spacing between entries (32px minimum)
- Subtle dividers between experiences
- Icons or visual markers for timeline progression

### Flexible Widget Area
- Grid-based layout for modular component placement (2-column on desktop, 1-column on mobile)
- Placeholder structure for future widgets (Spotify now-playing, weather, etc.)
- Consistent card styling with subtle borders and padding
- Easy add/remove architecture with maintained spacing

### Footer with Social Links
- Horizontal row of social media icons (GitHub, LinkedIn, Instagram)
- Icon size: 24-32px with comfortable spacing between (24px minimum)
- Centered alignment
- Bottom padding: 48-64px

## Typography System

**Font Families:**
- Primary: Inter (body text, UI elements)
- Display: SF Pro Display (headings, name)

**Type Scale:**
- Hero Name: 48-64px, weight 700
- Hero Tagline: 18-24px, weight 400
- Section Headings: 32-40px, weight 600
- Body Text: 16-18px, weight 400, line-height 1.7
- Experience Titles: 20-24px, weight 600
- Experience Details: 14-16px, weight 400

## Color Palette (User-Specified)

- **Primary:** #000000 (pure black) - main headings, icons
- **Secondary:** #FAFAFA (off-white) - background
- **Accent:** #6B7280 (cool grey) - borders, dividers
- **Text:** #1F2937 (dark grey) - body text
- **Hover:** #3B82F6 (subtle blue) - interactive elements

## Spacing System

- **Section Spacing:** 64-96px vertical between major sections
- **Element Spacing:** 32px+ between components within sections
- **Container Padding:** 24px on mobile, 48px on tablet, 64px+ on desktop
- **Max Content Width:** 1200px with centered alignment

## Component Specifications

### Profile Picture
- Circular border-radius (50%)
- Subtle shadow or border for depth
- Responsive sizing (120px mobile → 200px desktop)

### Dividers
- 1px solid lines using accent color (#6B7280)
- Centered or full-width based on section
- Margin: 48px top and bottom

### Social Icons
- Simple, monochromatic design
- Smooth hover transition (0.3s ease)
- Hover state: transform scale(1.1) + color change to #3B82F6
- No active/pressed states needed

### Widget Cards
- Subtle border (1px, #6B7280)
- Padding: 24-32px
- Border-radius: 8-12px
- Background: pure white or very subtle off-white

## Interactions & Animations

- **Hover Transitions:** 300ms ease for all interactive elements
- **Icon Hover:** Scale (1.1) + color shift to hover blue
- **Link Hover:** Underline animation or color transition
- **Scroll Behavior:** Smooth scrolling enabled
- Minimal animations - focus on smoothness over complexity

## Responsive Behavior

**Mobile First Approach:**
- Base: Single column, 24px padding
- Tablet (768px+): Increase spacing, introduce 2-column widget grid
- Desktop (1024px+): Full spacing (64px+), larger typography, 2-3 column layouts where appropriate

**Breakpoints:**
- Mobile: 0-767px
- Tablet: 768-1023px
- Desktop: 1024px+

## Accessibility
- Semantic HTML structure (header, main, section, footer)
- ARIA labels for icon links
- Sufficient color contrast (WCAG AA minimum)
- Focus states for keyboard navigation
- Responsive text sizing

## Images
No hero image required. The design relies on the centered circular profile picture as the primary visual element. The profile picture should be a high-quality headshot with clean background, professionally presented.