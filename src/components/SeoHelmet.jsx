import React, { useEffect } from 'react';
import { COMPANY } from '../data/company';

export default function SeoHelmet({
  title,
  description,
  canonical,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/images/hero-materials.jpg',
  structuredData,
  schemaData
}) {
  const activeCanonical = canonical || canonicalUrl;
  const activeSchema = structuredData || schemaData;
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title
      ? `${title} | Sneha Agencies Kakinada`
      : `Sneha Agencies | Building Materials & Finishing Products in Kakinada`;
    document.title = fullTitle;

    // 2. Helper to set or update meta tag
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 3. Meta Description
    const defaultDesc =
      "Authorised distributor of Alltek wall finishes, Bison Panel cement-bonded boards, Bison Lam prelaminated boards, and Spider door hardware in Kakinada. Get fast quotations and direct WhatsApp support.";
    setMeta('name', 'description', description || defaultDesc);

    // 4. Canonical Link
    const fullCanonical = activeCanonical
      ? `https://snehaagencies.com${activeCanonical}`
      : 'https://snehaagencies.com/';
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullCanonical);

    // 5. Open Graph Meta Tags
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description || defaultDesc);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('property', 'og:image', `https://snehaagencies.com${ogImage}`);
    setMeta('property', 'og:site_name', 'Sneha Agencies');

    // 6. JSON-LD Structured Data
    const scriptId = 'jsonld-structured-data';
    let scriptEl = document.getElementById(scriptId);
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const defaultStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      legalName: `${COMPANY.name} (${COMPANY.nameRegional})`,
      telephone: COMPANY.phonePrimary,
      email: COMPANY.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.state,
        postalCode: COMPANY.address.pincode,
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '16.9891',
        longitude: '82.2475'
      },
      url: 'https://snehaagencies.com/',
      priceRange: '₹₹',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00'
        }
      ]
    };

    scriptEl.textContent = JSON.stringify(activeSchema || defaultStructuredData);

    return () => {
      // Clean up on unmount if needed
    };
  }, [title, description, activeCanonical, ogType, ogImage, activeSchema]);

  return null;
}
