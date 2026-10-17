import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout & Global Components (eagerly loaded for instant shell rendering)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import FloatingCtaRail from './components/FloatingCtaRail';
import MobileActionBar from './components/MobileActionBar';
import CookieBanner from './components/CookieBanner';
import { ProductCardSkeleton } from './components/Skeletons';

// Code-split pages for blazingly fast mobile performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const ApplicationsPage = lazy(() => import('./pages/ApplicationsPage'));
const BrandsPage = lazy(() => import('./pages/BrandsPage'));
const QuotePage = lazy(() => import('./pages/QuotePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

// Lightweight route transition fallback
function RouteFallback() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-pulse">
      <div className="h-10 bg-stone-200/80 rounded-2xl w-2/3 max-w-md mb-4" />
      <div className="h-4 bg-stone-200/60 rounded-lg w-full max-w-xl mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Auto Scroll to top on page navigation */}
      <ScrollToTop />

      {/* Brand Splash Preloader */}
      <Preloader />

      <div className="flex flex-col min-h-screen bg-bgLight text-textDark selection:bg-primary/20 selection:text-primary">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Router with Route Suspense */}
        <main className="flex-grow">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/applications" element={<ApplicationsPage />} />
              <Route path="/brands" element={<BrandsPage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Desktop Quick Action Rail (Right side) */}
        <FloatingCtaRail />

        {/* Mobile Sticky Bottom Action Bar (Call, WhatsApp, Quote) */}
        <MobileActionBar />

        {/* Cookie Consent Banner */}
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}
