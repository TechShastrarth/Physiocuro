# Physiocuro Components

This directory contains all the converted TypeScript React components for the Physiocuro Next.js website.

## Components Overview

### UI Components
- **Card**: Reusable card component with customizable icon, heading, and description
- **ServiceCard**: Specialized card for displaying services
- **TreatmentCard**: Card component for treatment display with "Learn more" functionality

### Layout Components
- **Navbar**: Main navigation component with mobile menu support
- **Footer**: Site footer with navigation links and Google Maps integration
- **Location**: Component displaying service locations (Mumbai and Karnataka)

### Feature Components
- **Aboutus**: About section component with navigation functionality
- **DocCard**: Doctor information cards with expandable/carousel functionality
- **ServiceModal**: Modal component for displaying detailed service information
- **OpenCard**: Location cards with expandable descriptions
- **GoogleReviewWidget**: Integration component for Google reviews widget

## Usage

### Import Individual Components
```typescript
import { Navbar, Footer, Card } from '@/components';
```

### Import All Components
```typescript
import * as Components from '@/components';
```

### Example Usage
```typescript
import { Card, ServiceModal } from '@/components';
import { servicesData } from '@/data/servicesData';

function MyPage() {
  return (
    <div>
      <Card 
        icon={<i className="fa-solid fa-heart"></i>}
        heading="Healthcare"
        description="Professional physiotherapy services"
        animation="fade-up"
      />
      <ServiceModal 
        showModal={true}
        setShowModal={() => {}}
        service={servicesData[0]}
      />
    </div>
  );
}
```

## Dependencies

- **React 18+**: All components are built using React 18
- **Next.js 15+**: Components use Next.js App Router features
- **TypeScript**: Full TypeScript support with shared types
- **Tailwind CSS**: Styling framework
- **Framer Motion**: Animation library for interactive components
- **AOS**: Animate On Scroll library for scroll animations

## Types

All component props are defined in `/src/types/index.ts` for consistency and reusability.

## Migration Notes

These components have been migrated from React (.jsx) to Next.js TypeScript (.tsx) format:

- **React Router** → **Next.js Navigation**: `useNavigate` → `useRouter`, `Link` → `Next Link`
- **Component Props**: Added TypeScript interfaces for all props
- **Client Components**: Added `'use client'` directive where needed
- **Import Paths**: Updated to use `@/` alias for cleaner imports

All components maintain the original functionality while providing better type safety and Next.js optimizations.
