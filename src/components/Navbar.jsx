import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ChevronRight, FileText } from 'lucide-react';
import { COMPANY } from '../data/company';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Applications', path: '/applications' },
    { name: 'Brands', path: '/brands' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          width: '100%',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(248, 246, 240, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: scrolled ? '1px solid rgba(227, 222, 214, 0.8)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(25, 16, 36, 0.06)' : 'none',
          transition: 'all 0.25s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'var(--header-height)' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,65 50,18 90,65 80,65 50,30 20,65" fill="#191024" />
                <polygon points="25,72 50,42 75,72" fill="#e5a93c" />
                <circle cx="50" cy="58" r="16" fill="#1d6f42" />
                <rect x="47" y="72" width="6" height="12" fill="#c24b2f" />
              </svg>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-aubergine)', lineHeight: 1.15, fontFamily: 'Outfit, sans-serif' }}>
                Sneha Agencies
              </span>
              <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--color-muted)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Building Materials & Finishing Products
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--color-green)' : 'var(--color-aubergine)',
                  position: 'relative',
                  padding: '0.4rem 0',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                })}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2.5px',
                          backgroundColor: 'var(--color-green)',
                          borderRadius: '2px'
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-actions">
            <a
              href={`tel:${COMPANY.phonePrimaryRaw}`}
              className="btn btn-outline btn-sm"
              style={{ fontSize: '0.85rem', padding: '0.55rem 0.95rem' }}
              title="Call Sneha Agencies"
            >
              <Phone size={15} color="var(--color-terracotta)" />
              <span>{COMPANY.phonePrimary}</span>
            </a>
            <Link to="/quote" className="btn btn-primary btn-sm" style={{ padding: '0.55rem 1.15rem' }}>
              <FileText size={15} />
              <span>Request a Quote</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Call Icon & Hamburger Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-actions">
            <a
              href={`tel:${COMPANY.phonePrimaryRaw}`}
              aria-label="Call Sneha Agencies"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(194, 75, 47, 0.12)',
                color: 'var(--color-terracotta)',
                border: '1px solid rgba(194, 75, 47, 0.25)'
              }}
            >
              <Phone size={18} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: mobileMenuOpen ? 'var(--color-aubergine)' : 'rgba(25, 16, 36, 0.06)',
                color: mobileMenuOpen ? '#ffffff' : 'var(--color-aubergine)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#ffffff',
              borderBottom: '2px solid var(--color-border)',
              boxShadow: '0 12px 28px rgba(25, 16, 36, 0.15)',
              padding: '1.25rem',
              maxHeight: 'calc(100vh - var(--header-height))',
              overflowY: 'auto'
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--color-green)' : 'var(--color-aubergine)',
                    backgroundColor: isActive ? 'rgba(29, 111, 66, 0.08)' : 'transparent',
                    textDecoration: 'none'
                  })}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={16} color="var(--color-muted)" />
                </NavLink>
              ))}

              <div style={{ margin: '1rem 0 0.5rem 0', height: '1px', backgroundColor: 'var(--color-border)' }} />

              <Link
                to="/quote"
                className="btn btn-primary btn-full"
                style={{ justifyContent: 'center', marginBottom: '0.6rem' }}
              >
                <FileText size={18} />
                <span>Request a Quote</span>
              </Link>

              <a
                href={COMPANY.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-full"
                style={{ justifyContent: 'center' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp the Team</span>
              </a>

              <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.82rem', color: 'var(--color-muted)' }}>
                📍 Nagamalli Thota, Rajeswar Nagar, Kakinada - 533003
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Desktop Responsive Display Rules */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-actions { display: none !important; }
        }
      `}</style>
    </>
  );
}
