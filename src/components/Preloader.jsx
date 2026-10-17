import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasVisited = sessionStorage.getItem('sneha_has_visited');

    if (prefersReducedMotion || hasVisited) {
      // Skip or minimal display for repeat visits
      setLoading(false);
      return;
    }

    const duration = 850; // ms
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setFading(true);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('sneha_has_visited', 'true');
          }, 250);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#191024',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.25s ease-out',
        pointerEvents: fading ? 'none' : 'auto'
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading Sneha Agencies"
    >
      <div style={{ textAlign: 'center', maxWidth: '380px', width: '100%' }}>
        {/* Brand Icon & Name */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="10,65 50,18 90,65 80,65 50,30 20,65" fill="#ffffff" />
            <polygon points="25,72 50,42 75,72" fill="#e5a93c" />
            <circle cx="50" cy="58" r="16" fill="#1d6f42" />
            <rect x="47" y="72" width="6" height="12" fill="#c24b2f" />
          </svg>
          <div style={{ textAlign: 'left' }}>
            <span style={{ display: 'block', fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.05em', fontFamily: 'Outfit, sans-serif' }}>
              SNEHA AGENCIES
            </span>
            <span style={{ display: 'block', fontSize: '0.72rem', color: '#c5bed0', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Building Material Solutions
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p style={{ color: '#d8d3e2', fontSize: '0.9rem', marginBottom: '1.75rem', letterSpacing: '0.04em', fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>
          Building better spaces with the right materials.
        </p>

        {/* Progress Bar Line */}
        <div style={{ width: '100%', height: '3px', backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: '2px', overflow: 'hidden' }}>
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: '#1d6f42',
              transition: 'width 0.05s linear',
              boxShadow: '0 0 10px #248b53'
            }}
          />
        </div>

        {/* City tag */}
        <span style={{ display: 'block', marginTop: '1rem', fontSize: '0.75rem', color: '#8d859e', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Kakinada • Andhra Pradesh
        </span>
      </div>
    </div>
  );
}
