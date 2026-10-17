# Architecture

## Overview
Sneha Agencies is a high-performance, mobile-first catalogue and inquiry platform. It is engineered to give visitors an editorial, colourful, tactile presentation of building materials (wall finishes, cement-bonded boards, prelaminated boards, locks & door hardware, metal trims) with instant pathways to Call, WhatsApp, or submit a comprehensive quotation request.

## Frontend Architecture
- **Framework**: React 19 SPA running on Vite 8 for sub-second build times and immediate HMR.
- **Routing**: `react-router-dom` v7 handling client-side routing across 12 pages with scroll restoration to top on route change.
- **Styling Architecture**: Vanilla CSS with comprehensive CSS custom properties (variables) defined in `src/index.css`. No heavy CSS utility runtimes to ensure minimal bundle footprint, zero style collisions, and 100% fine-grained control over micro-animations, skeleton shimmers, and responsive breakpoints.
- **Icons**: `lucide-react` for accessible, scalable vector icons.

## Data Layer & State Management
- **In-Memory Catalogue Store**: `src/data/products.js`, `src/data/categories.js`, `src/data/brands.js`, and `src/data/applications.js`.
- **Form State Engine**: Controlled React state supporting real-time validation, multi-select checkboxes (materials), BOQ file-upload state simulation with size validation, and WhatsApp payload generation with pre-filled enquiry parameters.
- **Cookie Consent Store**: LocalStorage-persisted user preferences for essential, analytics, and marketing cookies with banner and preference modal.

## External Integrations & Contact Protocols
- **Click-to-Call**: Direct `tel:+919247866866` and secondary `tel:+919440103653`.
- **WhatsApp API**: `https://wa.me/919247866866?text=...` with URL-encoded product/project context.
- **Location & Maps**: Direct showroom coordinates link (`67-13-7, Ground Floor, Lakshmi Nilayam, Road No: 4, Nagamalli Thota, Rajeswar Nagar, Kakinada - 533003`).

## Deployment Architecture
- **Host**: Vercel
- **SPA Rewrites**: `vercel.json` routing all routes to `index.html` for clean URLs.
- **Static Assets**: Automated cache-control headers for WebP images and SVG icons.
- **Sitemap & Robots**: `public/sitemap.xml` and `public/robots.txt` served from the web root.

## SEO & Accessibility (a11y)
- **Document Titles & Meta**: Dynamic document title and meta updates per route.
- **Structured Data**: JSON-LD scripts for LocalBusiness, Organization, BreadcrumbList, and Product schema.
- **Accessibility**: Semantic HTML5 (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`), ARIA attributes (`aria-expanded`, `aria-busy`, `aria-live`, `aria-label`), visible `:focus-visible` outlines, minimum 44×44px tap targets for mobile thumb usability, and `prefers-reduced-motion` CSS queries.
