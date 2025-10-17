# MedIntel.AI - Healthcare Directory Validation Platform

## Overview

MedIntel.AI is a healthcare SaaS platform that automates provider directory validation using AI-powered agents. The platform addresses the critical problem of inaccurate healthcare provider directories (40-80% inaccuracy rate) by leveraging multiple AI agents including NPI validation, network verification, data decay prediction, and VLM PDF extraction. The system achieves 87% validation accuracy and can process 200+ providers in under 10 minutes, reducing manual verification time by 75%.

The application serves healthcare organizations that need to maintain accurate provider directories for regulatory compliance, patient safety, and operational efficiency. Core functionality includes automated provider data validation, confidence scoring, multi-source verification, and an interactive demo for CSV/Excel/PDF uploads.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript using Vite as the build tool

**UI Component System**: 
- Shadcn/ui component library with Radix UI primitives
- Custom design system following "Reference-Based Hybrid" approach inspired by Linear, Stripe, and Notion
- Tailwind CSS for styling with CSS variables for theming
- Dark/light mode support via ThemeProvider context

**State Management**:
- TanStack Query (React Query) for server state management
- React context for theme and global UI state
- Custom hooks for mobile detection and toast notifications

**Routing**: Wouter for client-side routing (lightweight React Router alternative)

**Key Pages**:
- Landing: Hero with animated metrics, problem/solution overview
- About: Company story, mission, values, milestones
- Problem: Healthcare directory pain points with statistics
- Solution: AI agent explanations (NPI validation, network verification, data decay prediction, VLM PDF extraction)
- Demo: Interactive provider validation with file upload
- Contact: Contact form with privacy consent

**Animation**: Framer Motion for page transitions, counters, and interactive elements

**Design Principles**:
- Professional warmth balancing clinical precision with empathy
- Primary blue (210 85% 45% dark, 210 90% 50% light) for trust/medical association
- Deep teal secondary color for healthcare-appropriate calm
- Semantic colors: Success green (validated), Warning amber (flagged), Critical red (errors)
- Inter font family (400-800 weight) for both display and body text
- Bilingual accessibility (Hindi-English) support in design

### Backend Architecture

**Runtime**: Node.js with Express.js server

**API Design**: RESTful API with the following key endpoints:
- POST /api/contact - Contact form submissions
- POST /api/demo/upload - Provider data file upload for validation
- GET /api/providers - Retrieve provider validation results

**Request Handling**:
- JSON body parsing with express.json()
- URL-encoded form data support
- Request/response logging middleware with duration tracking
- Error handling middleware for consistent error responses

**Storage Layer**: 
- Abstract IStorage interface for data persistence
- In-memory implementation (MemStorage) with Map-based storage
- Schema-first design using Drizzle ORM with PostgreSQL dialect
- Prepared for database migration (drizzle-kit configured with migrations directory)

**Data Models**:
- Contact Submissions: name, company, email, phone, message, privacyConsent
- Providers: name, phone, address, confidence score, status, NPI number, specialty, lastValidated timestamp, sources array, notes
- Demo Sessions: tracking validation runs

**Validation**: Zod schemas for runtime type validation and form handling

**Development Tooling**:
- Vite dev server integration with HMR in development
- TSX for TypeScript execution
- Static file serving in production
- Replit-specific plugins for runtime error overlay and dev experience

### Data Storage Solutions

**Current Implementation**: In-memory storage using JavaScript Maps for rapid prototyping

**Planned Database**: PostgreSQL via Neon serverless
- Connection via @neondatabase/serverless package
- Drizzle ORM for type-safe database queries
- Schema defined in shared/schema.ts with pgTable definitions
- UUID primary keys with gen_random_uuid()
- Timestamp fields for audit trails

**Schema Strategy**:
- Shared schema definitions between frontend and backend (monorepo pattern)
- Drizzle-Zod integration for automatic validation schema generation
- Migration management via drizzle-kit push command

### Authentication and Authorization

**Current State**: No authentication implemented (demo/MVP phase)

**Future Considerations**: 
- Session management infrastructure present (connect-pg-simple for session store)
- Multer configured for file uploads (provider data CSVs, PDFs)
- HIPAA compliance mentioned as future requirement
- SOC 2 Type II certification planned

### External Dependencies

**UI Libraries**:
- @radix-ui/* (v1.x) - Accessible component primitives (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- framer-motion - Animation library for interactive UI elements
- lucide-react - Icon library
- react-day-picker - Calendar/date picker component
- recharts - Data visualization and charting

**Form Handling**:
- react-hook-form - Form state management
- @hookform/resolvers - Zod validation resolver integration

**Data Management**:
- @tanstack/react-query (v5.60.5) - Async state management and caching
- drizzle-orm (v0.39.1) - TypeScript ORM
- drizzle-zod - Schema to Zod validation converter

**Styling**:
- tailwindcss - Utility-first CSS framework
- tailwind-merge & clsx - Conditional class name merging
- class-variance-authority - Variant-based component styling

**Build Tools**:
- vite - Frontend build tool and dev server
- esbuild - Backend bundling for production
- tsx - TypeScript execution for development
- @vitejs/plugin-react - React Fast Refresh support

**Database**:
- @neondatabase/serverless - PostgreSQL serverless client (configured but not actively used)
- connect-pg-simple - PostgreSQL session store for Express

**File Processing**:
- multer - Multipart form data handling for file uploads
- @types/multer - TypeScript definitions

**Development**:
- @replit/vite-plugin-* - Replit-specific development tooling (cartographer, dev-banner, runtime-error-modal)

**Planned Integrations** (based on solution description):
- National Provider Identifier (NPI) Registry API for provider validation
- Insurance network verification APIs for coverage status
- Vision Language Model (VLM) service for PDF document extraction
- Machine learning model API for data decay prediction

**Compliance & Security**:
- HIPAA compliance infrastructure (mentioned in footer)
- SOC 2 Type II certification (planned)
- Privacy policy consent tracking in contact forms