# Technical Decisions

## 2026-10-17 — Framework & Routing Choice
- **Decision**: Use React 19 + Vite 8 with `react-router-dom` v7.
- **Reason**: Provides blazing fast local HMR, sub-second production builds (592ms), clean client-side routing across 12 pages with scroll restoration, and zero SSR deployment friction on Vercel.
- **Alternatives Considered**: Next.js (higher build/runtime complexity, unnecessary node server requirement for a catalogue-and-enquiry site), pure Vanilla HTML multi-page (slower cross-page transitions, duplicated component templates, harder to manage reusable dynamic product detail pages).
- **Impact**: Fast development cycle, high maintainability, reusable product detail templates, clean client-side filter state.

## 2026-10-17 — Styling Architecture: Vanilla CSS with Design Tokens
- **Decision**: Use Vanilla CSS with CSS custom properties in `src/index.css`.
- **Reason**: Explicit user guidelines mandate Vanilla CSS for maximum flexibility and control without bulky utility framework overhead. Allows precise matching of the provided editorial visual reference (warm cement background, deep aubergine headers, tactile material cards, forest green accents, custom mobile action bars).
- **Alternatives Considered**: Tailwind CSS (explicitly discouraged unless requested, would add compilation dependencies and rigid class strings).
- **Impact**: Clean, semantic CSS with native responsive variables and zero bundle bloat.

## 2026-10-17 — Enquiry-First Workflow (No Online Shopping Cart)
- **Decision**: Omit eCommerce shopping carts and checkout buttons; focus exclusively on Click-to-Call, WhatsApp pre-populated chats, and a multi-step Request a Quote form with BOQ file upload.
- **Reason**: Sneha Agencies is a B2B and project building-material distributor in Kakinada where materials (cement boards, putties, commercial door hardware, metal trims) require availability checks, quantity calculations, and project-specific quotations.
- **Impact**: Higher lead conversion, zero cart abandonment friction, matches real distributor operations.

## 2026-10-17 — Realistic Verification Policy (No Fake Metrics or False Claims)
- **Decision**: Strictly avoid fabricated statistics ("#1 in Andhra", "50,000 satisfied clients", fake reviews, fake prices).
- **Reason**: Compliance with Google Helpful Content Guidelines and honest business positioning. Display "Enquire for availability" and "Subject to confirmation by Sneha Agencies".
- **Impact**: High trustworthiness and search engine compliance.
