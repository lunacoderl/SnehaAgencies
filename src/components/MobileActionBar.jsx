import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { COMPANY } from '../data/company';

export default function MobileActionBar() {
  return (
    <>
      <div className="mobile-action-bar">
        {/* Call Button */}
        <a
          href={`tel:${COMPANY.phonePrimaryRaw}`}
          className="mobile-action-btn mobile-btn-call"
          aria-label="Call Sneha Agencies"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={COMPANY.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-action-btn mobile-btn-whatsapp"
          aria-label="WhatsApp Sneha Agencies"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>

        {/* Request Quote Button */}
        <Link
          to="/quote"
          className="mobile-action-btn mobile-btn-quote"
          aria-label="Request a Quotation"
        >
          <FileText size={18} />
          <span>Get Quote</span>
        </Link>
      </div>

      <style>{`
        .mobile-action-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 980;
          display: flex;
          align-items: stretch;
          background-color: #ffffff;
          border-top: 1px solid var(--color-border);
          box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);
          padding-bottom: env(safe-area-inset-bottom);
          height: var(--mobile-bar-height);
        }

        @media (min-width: 992px) {
          .mobile-action-bar {
            display: none !important;
          }
        }

        .mobile-action-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          text-decoration: none;
          color: #ffffff;
          transition: opacity 0.15s ease;
          border: none;
        }

        .mobile-action-btn:active {
          opacity: 0.85;
        }

        .mobile-btn-call {
          background-color: var(--color-terracotta);
        }

        .mobile-btn-whatsapp {
          background-color: #25d366;
        }

        .mobile-btn-quote {
          background-color: var(--color-aubergine);
        }
      `}</style>
    </>
  );
}
