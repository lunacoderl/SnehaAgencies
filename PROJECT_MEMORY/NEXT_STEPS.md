# Next Steps

Prioritized list of development tasks for Sneha Agencies Catalogue & Enquiry Website:

1. **User Review**: Wait for user review and comments on the detailed Implementation Plan.
2. **Design System & CSS Foundation (Days 3–4)**:
   - Configure typography (Google Fonts: Outfit/Inter/Plus Jakarta Sans), design tokens in `src/index.css`
   - Setup color variables: Deep Aubergine (`#1e1329`), Forest Green (`#1d6f42`), Warm Cement (`#f7f5f0`), Terracotta Red (`#c24b2f`), Bison Yellow (`#e5a93c`), Warm Orange (`#e05e2b`), Charcoal (`#232323`), Soft White (`#ffffff`).
   - Implement shared components: Preloader (with reduced-motion and 700-1200ms timing), Navbar (desktop & mobile-first sticky with scroll blur/shadow), Floating CTA desktop rail & Mobile bottom sticky action bar, Scroll-to-Top, Skeleton loaders, and Substantial 4-column Footer.
3. **Product & Application Data Modeling (Days 3–5)**:
   - Structure verified product catalogues, brands (Alltek, Bison Panel, Bison Lam, Spider fittings), applications, specifications, variants, and document download stubs.
4. **Homepage & Core Pages (Days 5–7)**:
   - Home Page (10 core sections matching uploaded design mockup)
   - About Sneha Agencies
   - Products Listing Catalogue (with search, category, brand, application filters)
   - Reusable Product Details Template
   - Applications Showcase
   - Brands Directory
5. **Interactive Conversion Flows (Days 8–10)**:
   - Request a Quote page (all form states: empty, focused, valid, invalid, submitting, success, failed, file upload)
   - Contact Page (verified address info, phone numbers, WhatsApp link, map placeholder pending location confirmation)
   - Legal & Policy Pages (Privacy Policy, Terms and Conditions, Cookie Policy with consent banner)
   - Custom Branded 404 Page (with search, quick navigation, HTTP 404 handling)
6. **Technical SEO & Mobile Optimizations (Days 11–12)**:
   - Canonical URLs, Semantic HTML, Single H1 per page, JSON-LD Structured Data (LocalBusiness, Organization, BreadcrumbList, Product)
   - XML sitemap (`public/sitemap.xml`) & `public/robots.txt`
   - Open Graph tags and meta descriptions
7. **QA, Performance & Vercel Preview (Days 13–14)**:
   - Core Web Vitals audit (LCP, CLS, INP)
   - Mobile touch target verification (min 44px)
   - Build test and preview validation
