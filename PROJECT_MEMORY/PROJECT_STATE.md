# Project State

## Project Name
Sneha Agencies — Catalogue & Enquiry Website

## Description
A mobile-first, colourful catalogue-and-enquiry web application for Sneha Agencies (Building Material Solutions based in Kakinada, Andhra Pradesh). The platform showcases major building material categories (Wall Finishes, Cement-Bonded Boards, Prelaminated Boards, Locks & Hardware, Metal Trims), helps users quickly find materials by application or brand, and facilitates direct inquiries via Click-to-Call, WhatsApp, Request a Quote form with BOQ/material-list upload, and local showroom navigation.

## Tech Stack
- Frontend Framework: React 19 + Vite 8
- Routing: React Router DOM v7 (SPA with client-side routing, route-level code splitting via `React.lazy()` and `Suspense`, and clean canonical URLs)
- Icons: Lucide React
- Styling: Custom Vanilla CSS (Design token architecture: Deep Aubergine `#191024`, Forest Green `#1d6f42`, Warm Cement `#f8f6f0`, Terracotta Red `#c24b2f`, Bison Yellow `#e5a93c`, Warm Orange `#e05e2b`, Charcoal `#1f2937`, Soft White `#ffffff`)
- Deployment Target: Vercel (Production branch `main`, SPA rewrite rules in `vercel.json`, immutable asset caching)
- Remote Repository: `https://github.com/lunacoderl/SnehaAgencies.git` (Tracked branch: `main`)

## Current Development Phase
Phase 5: Pushed to GitHub & Ready for Vercel Deployment


## Completed Features
- [x] Initial project setup in `c:\Users\user\Desktop\Projects\sneha-agencies`
- [x] Installed core dependencies (`react`, `react-dom`, `react-router-dom`, `lucide-react`)
- [x] Persistent project memory structure initialized (`PROJECT_MEMORY/`)
- [x] Design token system & CSS utilities in `src/index.css`
- [x] Preloader brand splash screen (850ms, session check, reduced-motion support)
- [x] Sticky responsive Navbar with mobile slide-in drawer and direct contact buttons
- [x] Desktop Floating CTA rail (Call, WhatsApp, Get Quote, Back-to-Top)
- [x] Mobile Sticky Bottom Action Bar (Call, WhatsApp, Get Quote with min 44px touch targets)
- [x] Accessible skeleton loaders for products and categories
- [x] Cookie consent banner with custom preferences modal and reset mechanism
- [x] SEO Helmet component handling dynamic canonical links, Open Graph, and JSON-LD schemas
- [x] Reusable Dynamic Product Details Page (`/products/:slug`) rendering all 14 SKUs dynamically with image gallery, specs table, PDF download, and WhatsApp prefill
- [x] Filterable Catalogue (`/products`) with real-time search, category tabs, and brand filters
- [x] Applications & Solutions matrix (`/applications`) with 8 scenarios, challenges solved, and thickness selection reference table
- [x] Brands Showcase (`/brands`) featuring NCL Alltek, Bison Panel, Bison Lam, Spider Locks, and Spider Zinnia trims with official catalog downloads
- [x] Interactive Quotation Engine (`/quote`) with multi-material selector, BOQ upload simulation, quote reference number generator, and WhatsApp formatter
- [x] Showroom & Contact Page (`/contact`) with verified address at Nagamalli Thota Kakinada, GSTIN `37AAXFS3750J1ZG`, phones, and 12-question technical FAQ accordion
- [x] Legal pages: Privacy Policy, Terms & Conditions, Cookie Policy
- [x] 404 Not Found Page with smart recovery shortcuts
- [x] Rich SEO: `public/sitemap.xml`, `public/robots.txt`, Andhra Pradesh geo tags in `index.html`
- [x] Vercel SPA deployment configuration (`vercel.json`)
- [x] Verified clean production build (`npm run build` in 2.25s, 0 errors, initial bundle 75.85 kB gzip)

## Verified Business Credentials
- Entity Name: Sneha Agencies (స్నేహ ఏజెన్సీస్)
- Proprietor: Sri P. Satyanarayana Murthy
- GSTIN: `37AAXFS3750J1ZG`
- Address: 67-13-7, Ground Floor, Lakshmi Nilayam, Road No : 4, Nagamalli Thota, Rajeswar Nagar, Kakinada - 533003, Andhra Pradesh
- Primary Contact: `+91 92478 66866`
- Secondary / Dispatch: `+91 94401 03653`
- Email: `snehaagencieskkd@gmail.com`
- Working Hours: Mon-Sat 9:00 AM - 8:30 PM, Sun 10:00 AM - 2:00 PM

## Performance Benchmarks
- Build Time: 2.25 seconds
- CSS Size: 6.6 kB (2.11 kB gzipped)
- Initial Core JS: 248 kB (75.85 kB gzipped)
- Page Chunks: 3.8 kB to 34 kB lazy-loaded on demand
- Zero external tracking scripts or render-blocking dependencies
