# Personal Portfolio Website

## Overview

This is a modern, full-stack personal portfolio website built for Nick Wanner, a Software Engineer II at Dell Technologies. The application showcases professional experience, personal background, and features an AI-powered chatbot that answers questions about Nick's work and expertise. The design emphasizes minimalism, clean typography, and responsive layouts inspired by Brittany Chiang's portfolio and Linear's landing page aesthetics.

## Recent Changes

**October 25, 2025**
- **Chat Feature Enhancements**:
  - Personalized chat header to "Ask about Nick" with visitor-focused example prompts
  - Added "Ask me" label next to chat icon with smooth transitions on hover and keyboard focus
  - Replaced single-line input with auto-expanding textarea (42px-200px height)
  - Implemented Enter to submit and Shift+Enter for new lines
  - Enhanced keyboard accessibility using peer/peer-focus-visible pattern
  - Added smooth scrolling globally and improved ARIA labels
  - Mobile layout: Chat card now covers theme toggle when open (z-index: 60 vs 50)

- **Theme Improvements**:
  - Changed default theme to dark mode (previously defaulted to light)
  - Site now loads in dark mode for first-time visitors
  - Theme preference still respects user selection and localStorage

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- Built with React 18 and TypeScript for type safety across the entire frontend
- Uses Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Client-side routing handled by Wouter (lightweight alternative to React Router)

**UI Component System**
- Utilizes shadcn/ui component library based on Radix UI primitives
- Components follow the "new-york" style variant with CSS variables for theming
- Tailwind CSS for utility-first styling with custom design tokens
- Dark mode by default with light/dark theme toggle, system preference detection, and localStorage persistence

**State Management & Data Fetching**
- React Query (@tanstack/react-query) for server state management and caching
- Custom query client with API request helpers in `lib/queryClient.ts`
- Configured with infinite staleTime and disabled refetch on window focus for static portfolio content

**Design System**
- Custom color palette defined via CSS variables supporting light/dark themes
- Typography system using Inter (body) and SF Pro Display (headings)
- Consistent spacing, border radius, and elevation system
- Hover and active state utilities (`hover-elevate`, `active-elevate-2`) for interactive feedback

**Component Structure**
- Page components in `client/src/pages/` (Home, NotFound)
- Reusable UI components in `client/src/components/` (Hero, About, Experiences, Widgets, Footer, ThemeToggle, FloatingChatbot)
- shadcn/ui primitives in `client/src/components/ui/`
- Path aliases configured: `@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`

### Backend Architecture

**Server Framework**
- Express.js on Node.js with TypeScript
- ESM modules (type: "module" in package.json)
- Custom Vite integration for development mode with HMR support
- Middleware for JSON parsing, URL encoding, and request logging

**API Design**
- RESTful endpoint at `/api/ask` for AI chatbot functionality
- Request/response logging middleware that captures JSON responses and duration
- Error handling with appropriate HTTP status codes

**Development vs Production**
- Development: Vite middleware serves the React app with HMR
- Production: Static files served from `dist/public` after build
- Server compiled with esbuild targeting Node ESM

### External Dependencies

**AI Service Integration**
- OpenRouter API for LLM-powered chatbot responses
- Uses Mistral Small 3.2 24B Instruct (free tier) model
- System prompt engineering in `server/prompt.ts` defines chatbot personality and knowledge boundaries
- API key stored in environment variables (`OPENROUTER_API_KEY`)

**Database & ORM**
- Drizzle ORM configured but currently using in-memory storage
- PostgreSQL-ready setup with Neon serverless driver (@neondatabase/serverless)
- Migration tooling available via `drizzle-kit`
- Note: Database may be added later by code agents, infrastructure is prepared

**Third-Party UI Libraries**
- Radix UI primitives for accessible, unstyled component foundations
- Lucide React for consistent iconography
- react-markdown with remark-gfm for rendering chatbot responses
- vaul for drawer component (mobile-friendly)
- embla-carousel-react for carousel functionality
- react-day-picker for date selection
- cmdk for command palette components

**Styling & CSS**
- Tailwind CSS with PostCSS and Autoprefixer
- Custom Tailwind configuration extending default theme
- CSS variables for dynamic theming
- class-variance-authority for variant-based component styling
- clsx and tailwind-merge for conditional class composition

**Development Tooling**
- TypeScript with strict mode enabled
- tsx for running TypeScript in development
- esbuild for production server bundling
- Separate tsconfig files for client and server
- Path mapping for clean imports

**Asset Management**
- Static assets stored in `attached_assets/` directory
- Vite handles asset resolution with `@assets` alias
- Profile image imported directly in Hero component