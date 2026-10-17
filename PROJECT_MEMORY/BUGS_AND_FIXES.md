# Bugs & Fixes

## Active Bugs
None currently. All components and pages compile cleanly with 0 errors and full CSS styling.

## Resolved Bugs

### 1. `ReferenceError: COMPANY is not defined` in `ProductsPage.jsx`
- **Symptom**: Uncaught ReferenceError in `<ProductsPage>` on line 438 when clicking or navigating to the Products catalogue.
- **Root Cause**: `COMPANY` was referenced in the call-to-action button at line 438 (`href={`tel:${COMPANY.phonePrimaryRaw}`}`) but was omitted from the top-level import statement in `ProductsPage.jsx`.
- **Fix**:
  1. Added `import { COMPANY } from '../data/company';` to `src/pages/ProductsPage.jsx`.
  2. Enhanced `src/data/company.js` with comprehensive dual-naming aliases (`primaryPhone` & `phonePrimary`, `primaryPhoneRaw` & `phonePrimaryRaw`, `secondaryPhone`, `whatsappRaw`, `proprietor`, `address.toString()`, `openingHours.toString()`) so all consuming pages and components access consistent attributes without runtime undefined property errors.
- **Verification**: Verified with `npm run build` exiting with code 0 in 4.32s.

### 2. `TypeError: Cannot read properties of undefined (reading 'map')` in `ApplicationsPage.jsx`
- **Symptom**: Error on line 163 in `ApplicationsPage.jsx` when rendering `app.challengesSolved.map(...)`.
- **Root Cause**: The raw application dataset in `src/data/applications.js` had an older schema with `problemUseCase` and `specs` instead of `challengesSolved` and `keyAdvantages`.
- **Fix**:
  1. Enriched `src/data/applications.js` with unified schema: `category`, `summary`, `challengesSolved` (array), `keyAdvantages` (array), `typicalThickness`, `idealSectors`, and valid product slugs.
  2. Added defensive array fallbacks in `src/pages/ApplicationsPage.jsx`: `(app.challengesSolved || []).map(...)`, `(app.recommendedProducts || []).map(...)`, `(app.keyAdvantages || app.specs || []).map(...)`.
- **Verification**: Verified with `node scratch/test-data.js` and `npm run build`.

### 3. Missing CSS Styles on Applications, Brands, About, Contact, and Quote Pages
- **Symptom**: Raw unstyled HTML appearance on secondary routes (`/applications`, `/brands`, `/about`, `/contact`, `/quote`).
- **Root Cause**: Secondary pages utilized layout utilities (`max-w-7xl`, `grid-cols-*`, `bg-white`, `rounded-3xl`, `p-6`, `text-primary`, `border-stone-200`) which were not present in the initial minimal `src/index.css` stylesheet.
- **Fix**: Created `src/styles/utilities.css` implementing a complete Vanilla CSS utility suite (containers, flexbox, responsive CSS grids, color tokens, typography scales, border radiuses, shadows, transitions, and hover states) and imported it into `src/index.css`.
- **Verification**: Verified production CSS compiled to 18.26 kB (4.69 kB gzipped) with full styling applied to all pages.
