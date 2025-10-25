# Personal Portfolio Application

## Overview

This is a personal portfolio web application built as a full-stack TypeScript project. It showcases a developer's professional profile, experience, and work through a clean, minimalist interface inspired by modern design principles (Brittany Chiang's portfolio and Linear's landing page). The application features a React-based frontend with shadcn/ui components, an Express backend, and is configured to work with a PostgreSQL database using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Core Libraries:**
- React 18 with TypeScript for the UI layer
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management

**UI Component System:**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Custom theme system supporting light/dark modes
- Component-based architecture with reusable UI elements in `client/src/components/ui/`

**Design Approach:**
- Minimalist aesthetics with emphasis on typography hierarchy and white space
- Mobile-first responsive design
- Inter font for body text and UI elements
- Structured sections: Hero, About, Experiences, Widgets, Contact, Footer
- Theme toggle functionality with localStorage persistence

**State Management:**
- React Query for async state and caching
- Local component state with React hooks
- Theme state persisted to localStorage

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- HTTP server creation for potential WebSocket support
- Modular route registration system (currently minimal, designed for expansion)
- Custom request logging middleware
- JSON body parsing with raw body access for webhook support

**Development Environment:**
- Vite integration in development mode for HMR (Hot Module Replacement)
- Separate production build with esbuild for server code
- Custom error overlay and development tooling for Replit environment

**Storage Layer:**
- Abstracted storage interface (`IStorage`) for CRUD operations
- In-memory storage implementation (`MemStorage`) as default
- Designed to be swapped with database-backed implementation

### Data Storage

**Database Configuration:**
- Drizzle ORM configured for PostgreSQL
- Schema defined in `shared/schema.ts` with Zod validation
- Database migrations managed through Drizzle Kit
- Connection via environment variable `DATABASE_URL`

**Current Schema:**
- Users table with UUID primary keys, username, and password fields
- Insert schemas generated with drizzle-zod for type-safe validation

**Design Decision:**
The application uses an in-memory storage implementation by default (`MemStorage`) but is structured to easily connect to PostgreSQL. This allows for rapid prototyping while maintaining production-ready database architecture. The storage interface can be extended with additional methods as features are added.

### External Dependencies

**UI Component Libraries:**
- @radix-ui/* - Unstyled, accessible component primitives (accordion, dialog, dropdown, popover, etc.)
- shadcn/ui - Pre-styled components built on Radix UI
- lucide-react - Icon library
- class-variance-authority & clsx - Utility-first styling helpers
- tailwind-merge - Intelligent Tailwind class merging

**Database & ORM:**
- @neondatabase/serverless - PostgreSQL client optimized for serverless environments
- drizzle-orm - TypeScript ORM
- drizzle-kit - Schema management and migrations
- drizzle-zod - Zod schema generation from Drizzle schemas

**Form Handling:**
- react-hook-form - Form state management
- @hookform/resolvers - Validation resolvers
- zod - Schema validation

**Development Tools:**
- tsx - TypeScript execution for development
- esbuild - Fast JavaScript/TypeScript bundler for production builds
- @replit/vite-plugin-* - Replit-specific development enhancements

**Routing & Navigation:**
- wouter - Lightweight routing library (alternative to React Router)

**Session Management:**
- connect-pg-simple - PostgreSQL session store for Express (configured but not actively used)

**Utility Libraries:**
- date-fns - Date manipulation
- nanoid - Unique ID generation
- embla-carousel-react - Carousel component

**Asset Management:**
- Profile images stored in `attached_assets/generated_images/`
- Static assets served through Vite in development, Express in production

### API Structure

**Current Implementation:**
- API routes prefixed with `/api` (currently minimal)
- Storage interface for user CRUD operations ready for expansion
- Designed for RESTful endpoints

**Future Expansion Points:**
- Contact form submission endpoint
- Widget data endpoints (Spotify, weather integrations)
- Q&A/chatbot integration for the "AskMe" component

### Authentication & Authorization

**Current State:**
- User schema defined with username/password fields
- Session middleware configured (connect-pg-simple)
- No active authentication implementation

**Design Consideration:**
The foundation is laid for authentication with user schema and session storage, ready to implement login/registration flows when needed.