# Overview

Sam Bot Alpha Test is a modern web application designed to connect UCSB students with valuable people through AI-powered conversations. The application features a clean, iMessage-inspired landing page where users can interact with "Sam," an AI bot that facilitates networking and connections over time. The app currently serves as an alpha test platform with SMS integration for initial user interactions.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using React with TypeScript and follows a modern component-based architecture:

- **Framework**: React 18 with TypeScript for type safety and modern React features
- **Styling**: Tailwind CSS with a comprehensive design system based on shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and API interactions
- **UI Components**: Extensive use of Radix UI primitives wrapped in custom components for accessibility and consistency

## Design System

The application implements a sophisticated design system inspired by modern messaging apps:

- **Color Palette**: Dual-mode (light/dark) color scheme with iMessage-inspired blue primary colors
- **Typography**: Inter font for clean, modern readability with defined hierarchy
- **Component Library**: Comprehensive UI component library with consistent spacing (Tailwind 4-unit system)
- **Layout**: Responsive design with mobile-first approach and consistent visual patterns

## Backend Architecture

The backend follows a clean Express.js architecture:

- **Framework**: Express.js with TypeScript for type-safe server-side development
- **Database Layer**: Drizzle ORM configured for PostgreSQL with Neon Database integration
- **Storage Interface**: Abstracted storage layer with both in-memory and database implementations
- **API Structure**: RESTful API design with centralized route registration

## Data Storage Solutions

- **Database**: PostgreSQL via Neon Database for production data persistence
- **ORM**: Drizzle ORM with schema-first approach and Zod validation integration
- **Migrations**: Automated database migrations with Drizzle Kit
- **Development Storage**: In-memory storage implementation for development and testing

## Authentication and Authorization

The application includes a basic user management system:

- **User Schema**: Simple username/password authentication model
- **Storage Interface**: CRUD operations for user management through abstracted storage layer
- **Session Management**: Configured for PostgreSQL session storage with connect-pg-simple

## External Service Integrations

- **SMS Integration**: Direct SMS functionality for user interaction with the Sam bot via native device SMS apps
- **Font Loading**: Google Fonts integration for typography (Inter, DM Sans, Architects Daughter, Fira Code, Geist Mono)
- **Development Tools**: Replit-specific plugins for enhanced development experience including error overlays and development banners

## Build and Development

- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Comprehensive TypeScript configuration with path mapping for clean imports
- **Development**: Hot module replacement and development server with custom middleware
- **Production**: ESBuild for server bundling and Vite for client bundling