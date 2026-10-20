import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY } from '../data/company';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#160e20',
        color: '#e5e1eb',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
        borderTop: '3px solid var(--color-green)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Col 1: Brand & Credentials */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,65 50,18 90,65 80,65 50,30 20,65" fill="#ffffff" />
                <polygon points="25,72 50,42 75,72" fill="#e5a93c" />
                <circle cx="50" cy="58" r="16" fill="#1d6f42" />
                <rect x="47" y="72" width="6" height="12" fill="#c24b2f" />
              </svg>
              <div>
                <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', fontFamily: 'Outfit, sans-serif' }}>
                  Sneha Agencies
                </span>
                <span style={{ display: 'block', fontSize: '0.7rem', color: '#c5bed0', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Building Material Solutions
                </span>
              </div>
            </div>

            <p style={{ color: '#b9b3c4', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Sneha Agencies is an authorized building-materials distributor in Kakinada, offering quality wall finishes, cement boards, door hardware and architectural metal trims from trusted manufacturers.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '0.5rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <ShieldCheck size={18} color="var(--color-green-light)" />
              <div>
                <span style={{ display: 'block', fontSize: '0.68rem', color: '#8f889d', textTransform: 'uppercase' }}>Verified Business GSTIN</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.05em' }}>{COMPANY.gstin}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Explore Navigation */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-yellow)' }}></span>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'Products Catalogue', path: '/products' },
                { name: 'Applications Guide', path: '/applications' },
                { name: 'Authorised Brands', path: '/brands' },
                { name: 'About Sneha Agencies', path: '/about' },
                { name: 'Request a Quotation', path: '/quote' },
                { name: 'Contact & Location', path: '/contact' }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{ color: '#c5bed0', fontSize: '0.92rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#c5bed0')}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-green-light)' }}></span>
              Product Range
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { name: 'Wall Finishes (Putties & Textures)', path: '/products?category=wall-finishes' },
                { name: 'Cement-Bonded Boards (Bison Panel)', path: '/products?category=cement-boards' },
                { name: 'Prelaminated Boards (Bison Lam)', path: '/products?category=prelaminated-boards' },
                { name: 'Locks & Hardware (Spider Zinnia)', path: '/products?category=locks-hardware' },
                { name: 'Metal Trims (SS Self Adhesive Strips)', path: '/products?category=metal-trims' },
                { name: 'Foam Concrete Work (Sunken Areas)', path: '/products/foam-concrete-work' }
              ].map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={cat.path}
                    style={{ color: '#c5bed0', fontSize: '0.92rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-yellow)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#c5bed0')}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Showroom */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)' }}></span>
              Contact Showroom
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <MapPin size={18} color="var(--color-yellow)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div style={{ fontSize: '0.88rem', color: '#c5bed0', lineHeight: 1.5 }}>
                    {COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.area}, {COMPANY.address.city} - {COMPANY.address.pincode}
                  </div>
                </div>
              </li>
              <li>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Phone size={18} color="var(--color-terracotta)" style={{ flexShrink: 0 }} />
                  <div style={{ fontSize: '0.92rem' }}>
                    <a href={`tel:${COMPANY.phonePrimaryRaw}`} style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>
                      {COMPANY.phonePrimary}
                    </a>
                    <span style={{ color: '#8d859e', margin: '0 0.4rem' }}>|</span>
                    <a href={`tel:${COMPANY.phoneSecondaryRaw}`} style={{ color: '#c5bed0', textDecoration: 'none' }}>
                      {COMPANY.phoneSecondary}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <MessageCircle size={18} color="#25d366" style={{ flexShrink: 0 }} />
                  <a
                    href={COMPANY.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#25d366', fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none' }}
                  >
                    Chat on WhatsApp (+91 92478 66866)
                  </a>
                </div>
              </li>
              <li>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Mail size={18} color="#c5bed0" style={{ flexShrink: 0 }} />
                  <a href={`mailto:${COMPANY.email}`} style={{ color: '#c5bed0', fontSize: '0.88rem', textDecoration: 'none' }}>
                    {COMPANY.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#8f889d'
          }}
        >
          <div>
            © {new Date().getFullYear()} Sneha Agencies. All rights reserved. | Based in Kakinada | Building Better Spaces Together.
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
            <Link to="/privacy-policy" style={{ color: '#8f889d', textDecoration: 'none' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8f889d')}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={{ color: '#8f889d', textDecoration: 'none' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8f889d')}>
              Terms & Conditions
            </Link>
            <Link to="/cookie-policy" style={{ color: '#8f889d', textDecoration: 'none' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8f889d')}>
              Cookie Policy
            </Link>
            <a href="/sitemap.xml" style={{ color: '#8f889d', textDecoration: 'none' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8f889d')}>
              XML Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
