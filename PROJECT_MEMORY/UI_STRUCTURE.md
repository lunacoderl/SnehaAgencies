# UI Structure

## Pages & Routes

| Route | Page Component | Description | SEO Focus / Primary H1 |
|-------|----------------|-------------|------------------------|
| `/` | `HomePage` | Editorial hero, category showcases, brands, applications, trust reasons, enquiry banner, footer | "Building Materials and Finishing Products in Kakinada" |
| `/about` | `AboutPage` | Business overview, Kakinada distribution role, brand relationships, customer support steps | "About Sneha Agencies" |
| `/products` | `ProductsPage` | Full catalogue with search, multi-filter (category, brand, application, availability), grid | "Building Materials and Construction Products in Kakinada" |
| `/products/:slug` | `ProductDetailPage` | Reusable product detail template with specifications, variant tabs, WhatsApp/Quote CTAs, related items | Exact Product and Brand Name |
| `/applications` | `ApplicationsPage` | Problem-oriented material selector (partitions, ceilings, doors, wall finishing, cladding, platforms) | "Building Material Applications & Selection Guide" |
| `/brands` | `BrandsPage` | Brand directory (Alltek, Bison Panel, Bison Lam, Spider) with distributor context | "Authorized Brands & Material Families" |
| `/quote` | `QuotePage` | Focused conversion form: category selection, quantity, project location, BOQ upload, notes | "Request a Material Quotation" |
| `/contact` | `ContactPage` | Direct phone numbers, WhatsApp, verified address, opening hours, contact form, map | "Contact Sneha Agencies Kakinada" |
| `/privacy-policy` | `PrivacyPolicyPage` | Transparent data handling, quotation data storage, customer rights | "Privacy Policy" |
| `/terms` | `TermsPage` | Quotation validity, availability disclaimer, delivery policy, non-order status | "Terms & Conditions" |
| `/cookie-policy` | `CookiePolicyPage` | Essential vs non-essential cookie disclosure, consent controls | "Cookie Policy" |
| `*` | `NotFoundPage` | HTTP 404 handler with brand theme, search, quick links back to products/quote | "Page Not Found (404)" |

## Layout & Global Components

1. **Preloader (`src/components/Preloader.jsx`)**:
   - Deep aubergine background (`#1e1329`)
   - Sneha Agencies logo with material texture subtle shine
   - Text: "Building better spaces"
   - Thin green progress line (0% to 100% in ~800ms)
   - Reduced-motion check, skips/accelerates on subsequent page visits via session storage
2. **Navbar (`src/components/Navbar.jsx`)**:
   - Desktop: Logo + descriptor ("Building Materials & Finishing Products"), Nav links with active underline, secondary Call button, primary "Request a Quote" button.
   - Mobile: Logo, Call icon button, hamburger toggle opening clean slide-down menu with WhatsApp quick link.
   - Dynamic: Transparent overlay over Hero, transforms to solid with subtle shadow on scroll.
3. **CTA System**:
   - Desktop: Floating right-side vertical conversion rail (Call, WhatsApp, Request Quote, Scroll to Top).
   - Mobile: Fixed bottom bar (`Call` [Red/Orange], `WhatsApp` [Green], `Quote` [Deep Aubergine/Orange]).
4. **Scroll-to-Top (`src/components/ScrollToTopButton.jsx`)**:
   - Smoothly reveals after 450px scroll; floats neatly above mobile bottom bar.
5. **Skeleton Loaders (`src/components/Skeletons.jsx`)**:
   - `ProductCardSkeleton`, `ProductDetailSkeleton`, `CategoryCardSkeleton` with gentle non-distracting shimmer matching layout geometry.
6. **Substantial 4-Column Footer (`src/components/Footer.jsx`)**:
   - Deep aubergine base, forest green accent lines, warm orange hover states.
   - Column 1: Brand Logo, summary, Kakinada location, GSTIN.
   - Column 2: Explore links (Home, Products, Applications, Brands, About, Contact).
   - Column 3: Material categories (Wall Finishes, Cement Boards, Prelaminated Boards, Locks & Hardware, Metal Trims).
   - Column 4: Contact numbers, WhatsApp, Address, Email.
   - Bottom row: Legal links (Privacy, Terms, Cookies, Sitemap), copyright, Kakinada attribution.
7. **Cookie Consent Banner (`src/components/CookieBanner.jsx`)**:
   - Clean, non-intrusive consent prompt with Accept All, Reject Non-Essential, and Manage Preferences options.
