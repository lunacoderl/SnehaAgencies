import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, FileText, ArrowUp } from 'lucide-react';
import { COMPANY } from '../data/company';

export default function FloatingCtaRail() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div
        className="floating-desktop-rail"
        style={{
          position: 'fixed',
          right: '1.25rem',
          bottom: '2rem',
          zIndex: 990,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem'
        }}
      >
        {/* WhatsApp Button */}
        <a
          href={COMPANY.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="rail-btn rail-btn-whatsapp"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={22} />
          <span className="rail-tooltip">WhatsApp Us</span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${COMPANY.phonePrimaryRaw}`}
          aria-label="Call Sneha Agencies"
          className="rail-btn rail-btn-call"
          title="Call Sneha Agencies"
        >
          <Phone size={20} />
          <span className="rail-tooltip">Call Now</span>
        </a>

        {/* Request Quote Button */}
        <Link
          to="/quote"
          aria-label="Request a Material Quote"
          className="rail-btn rail-btn-quote"
          title="Request a Material Quote"
        >
          <FileText size={20} />
          <span className="rail-tooltip">Get Quotation</span>
        </Link>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="rail-btn rail-btn-top"
            title="Scroll to top"
          >
            <ArrowUp size={20} />
            <span className="rail-tooltip">Back to Top</span>
          </button>
        )}
      </div>

      <style>{`
        .floating-desktop-rail {
          display: none;
        }

        @media (min-width: 992px) {
          .floating-desktop-rail {
            display: flex;
          }
        }

        .rail-btn {
          position: relative;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }

        .rail-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
        }

        .rail-btn-whatsapp {
          background-color: #25d366;
        }

        .rail-btn-call {
          background-color: var(--color-terracotta);
        }

        .rail-btn-quote {
          background-color: var(--color-aubergine);
        }

        .rail-btn-top {
          background-color: #ffffff;
          color: var(--color-aubergine);
          border: 1px solid var(--color-border);
        }

        .rail-btn-top:hover {
          background-color: var(--color-surface-subtle);
          color: var(--color-green);
        }

        .rail-tooltip {
          position: absolute;
          right: 58px;
          top: 50%;
          transform: translateY(-50%) translateX(10px);
          background-color: var(--color-aubergine);
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-sm);
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.18s ease, transform 0.18s ease;
          box-shadow: var(--shadow-md);
        }

        .rail-btn:hover .rail-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
      `}</style>
    </>
  );
}
