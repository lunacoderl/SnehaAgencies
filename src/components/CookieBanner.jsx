import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Check } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sneha_cookie_consent');
    if (!consent) {
      // Small timeout so it doesn't pop up abruptly
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('sneha_cookie_consent', JSON.stringify({ essential: true, analytics: true }));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem('sneha_cookie_consent', JSON.stringify({ essential: true, analytics: false }));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('sneha_cookie_consent', JSON.stringify({ essential: true, analytics: analyticsConsent }));
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div
        role="region"
        aria-label="Cookie consent banner"
        style={{
          position: 'fixed',
          bottom: 'var(--mobile-bar-height)',
          left: '1rem',
          right: '1rem',
          maxWidth: '520px',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 12px 36px rgba(25, 16, 36, 0.22)',
          border: '1.5px solid var(--color-border)',
          padding: '1.25rem',
          zIndex: 9999,
          margin: '0 auto'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div style={{ backgroundColor: 'rgba(229, 169, 60, 0.15)', padding: '0.5rem', borderRadius: '50%', color: '#a86c05', flexShrink: 0 }}>
            <Cookie size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-aubergine)', marginBottom: '0.25rem' }}>
              We value your privacy
            </h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
              Sneha Agencies uses essential cookies to ensure site functionality and anonymous performance measurements. No invasive profiling. Read our{' '}
              <Link to="/cookie-policy" style={{ color: 'var(--color-green)', textDecoration: 'underline' }}>
                Cookie Policy
              </Link>.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'flex-end', marginTop: '0.75rem' }}>
          <button
            onClick={() => setShowPreferences(true)}
            className="btn btn-outline btn-sm"
            style={{ fontSize: '0.8rem', padding: '0.45rem 0.75rem' }}
          >
            Preferences
          </button>
          <button
            onClick={handleRejectNonEssential}
            className="btn btn-outline btn-sm"
            style={{ fontSize: '0.8rem', padding: '0.45rem 0.75rem' }}
          >
            Reject Non-Essential
          </button>
          <button
            onClick={handleAcceptAll}
            className="btn btn-primary btn-sm"
            style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem' }}
          >
            Accept All
          </button>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            backgroundColor: 'rgba(25, 16, 36, 0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem'
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '480px',
              width: '100%',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-hover)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-aubergine)' }}>Cookie Preferences</h3>
              <button
                onClick={() => setShowPreferences(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-muted)' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-surface-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Essential Cookies</span>
                  <span className="badge badge-green">Always Active</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                  Required for site navigation, material quotation cart state, and security tokens.
                </p>
              </div>

              <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-surface-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Anonymous Analytics</span>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={analyticsConsent}
                      onChange={(e) => setAnalyticsConsent(e.target.checked)}
                      style={{ accentColor: 'var(--color-green)', width: '18px', height: '18px' }}
                    />
                  </label>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                  Aggregated page-view and catalogue interaction telemetry to help us improve site performance.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button onClick={() => setShowPreferences(false)} className="btn btn-outline btn-sm">
                Cancel
              </button>
              <button onClick={handleSavePreferences} className="btn btn-primary btn-sm">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
