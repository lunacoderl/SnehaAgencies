import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  MessageCircle,
  FileText,
  ShieldCheck,
  MapPin,
  Layers,
  Sparkles,
  CheckCircle2,
  Clock,
  Compass,
  Building,
  Check,
  ChevronRight
} from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import { COMPANY } from '../data/company';
import { CATEGORIES } from '../data/categories';
import { BRANDS } from '../data/brands';
import { APPLICATIONS } from '../data/applications';
import { PRODUCTS } from '../data/products';

export default function HomePage() {
  // Quick project enquiry form state matching the mockup
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    phone: '',
    projectType: 'Residential Construction',
    location: 'Kakinada',
    materials: {
      wallFinishes: false,
      cementBoards: false,
      locksHardware: false,
      metalTrims: false,
      foamConcrete: false
    },
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleCheckboxChange = (key) => {
    setEnquiryForm((prev) => ({
      ...prev,
      materials: {
        ...prev.materials,
        [key]: !prev.materials[key]
      }
    }));
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (!enquiryForm.name || !enquiryForm.phone) {
      alert('Please provide your Name and Contact Number');
      return;
    }
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 700);
  };

  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div>
      <SeoHelmet
        title="Building Materials & Finishing Products in Kakinada"
        description="Sneha Agencies is an authorised distributor of Alltek wall finishes, Bison Panel cement boards, Bison Lam prelaminated boards, and Spider door hardware in Kakinada. Get quick quotes."
        canonical="/"
      />

      {/* =========================================================================
          SECTION 1: HERO SECTION (Exact visual style from provided mockup)
      ========================================================================= */}
      <section
        style={{
          backgroundColor: '#191024',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '2.5rem',
          paddingBottom: '3.5rem'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left Content Column */}
            <div>
              {/* Location Tag */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-yellow)',
                  marginBottom: '0.75rem'
                }}
              >
                <span>BASED IN KAKINADA</span>
                <span style={{ width: '40px', height: '1.5px', backgroundColor: 'var(--color-yellow)' }}></span>
              </div>

              {/* Foam Concrete Work Announcement Badge */}
              <div style={{ marginBottom: '1.25rem' }}>
                <Link
                  to="/products/foam-concrete-work"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    backgroundColor: 'rgba(229, 169, 60, 0.16)',
                    border: '1px solid rgba(229, 169, 60, 0.45)',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-yellow)', display: 'inline-block' }}></span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--color-yellow)' }}>
                    FOAM CONCRETE WORK AVAILABLE (LIGHTWEIGHT CONCRETE) — FOR SUNKEN AREAS →
                  </span>
                </Link>
              </div>

              {/* Main Headline */}
              <h1
                className="editorial"
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                  color: '#ffffff',
                  lineHeight: 1.12,
                  marginBottom: '1.25rem'
                }}
              >
                Build with <br />
                the right <br />
                <span style={{ color: '#2ecc71', fontStyle: 'italic' }}>material.</span>
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  color: '#cfc9db',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  maxWidth: '520px',
                  marginBottom: '2rem'
                }}
              >
                Quality building materials for better spaces — from trusted brands, with local support in Kakinada.
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '2.5rem'
                }}
              >
                <Link to="/products" className="btn btn-primary btn-lg">
                  <span>Explore Products</span>
                  <ArrowRight size={18} />
                </Link>

                <Link to="/quote" className="btn btn-outline-white btn-lg">
                  <span>Request a Quote</span>
                </Link>
              </div>

              {/* Trust Badges under Hero */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '1.25rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.5rem', borderRadius: '50%' }}>
                    <Layers size={18} color="var(--color-yellow)" />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>Wide Range</span>
                    <span style={{ fontSize: '0.72rem', color: '#9d96ab' }}>of Building Materials</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.5rem', borderRadius: '50%' }}>
                    <MapPin size={18} color="var(--color-green-light)" />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>Based in</span>
                    <span style={{ fontSize: '0.72rem', color: '#9d96ab' }}>Kakinada</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.5rem', borderRadius: '50%' }}>
                    <ShieldCheck size={18} color="var(--color-orange)" />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>Authorized</span>
                    <span style={{ fontSize: '0.72rem', color: '#9d96ab' }}>Distributor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image (Authentic material composition) */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  maxWidth: '520px',
                  width: '100%'
                }}
              >
                <img
                  src="/images/hero-materials.jpg"
                  alt="Sneha Agencies authentic building materials showcase: cement boards, antique brass door handles, and stainless steel trims"
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
                  width="520"
                  height="693"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: BUSINESS INTRODUCTION
      ========================================================================= */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#f2ede4', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>
              ABOUT SNEHA AGENCIES
            </span>
            <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
              Local building-material distribution for project & bulk requirements.
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#4d4b54', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Headquartered in Kakinada, Sneha Agencies supplies verified wall finishing compounds, cement-bonded particle boards, prelaminated boards, and precision door hardware directly from leading manufacturers like NCL Alltek, Bison Panel, and Spider. We assist homeowners, contractors, architects, and institutions with material selection, stock availability, and transparent quotations.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link to="/about" className="btn btn-outline">
                <span>Learn About Sneha Agencies</span>
                <ChevronRight size={16} />
              </Link>
              <a href={`tel:${COMPANY.phonePrimaryRaw}`} className="btn btn-terracotta">
                <Phone size={16} />
                <span>Call {COMPANY.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PRODUCT CATEGORIES (Visual Cards matching Mockup)
      ========================================================================= */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--color-cement)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>
              PRODUCT CATEGORIES
            </span>
            <h2 className="section-title">Explore Core Building Solutions</h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>
              Choose a category to browse specifications, thicknesses, variant options, and application advice.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* 1. Wall Finishes */}
            <div
              className="card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                alignItems: 'center',
                backgroundColor: '#ffffff'
              }}
            >
              <div style={{ padding: '2.5rem' }}>
                <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
                  NCL Alltek & Birla White
                </span>
                <h3 style={{ fontSize: '1.9rem', marginBottom: '0.75rem', fontFamily: 'Playfair Display, serif' }}>
                  Wall Finishes
                </h3>
                <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Putty, Textures, Paints and allied products for lasting, beautiful walls. Acrylic super-smooth putties, exterior water-resistant basecoats, and anti-algae emulsions.
                </p>
                <Link to="/products?category=wall-finishes" className="btn btn-outline" style={{ borderColor: 'var(--color-aubergine)' }}>
                  <span>Explore Wall Finishes</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div style={{ height: '100%', minHeight: '260px', overflow: 'hidden' }}>
                <img
                  src="/images/wall-finishes-banner.jpg"
                  alt="Wall Finishes Paint Can, Roller and Plaster Samples"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* 2. Cement Boards */}
            <div
              className="card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                alignItems: 'center',
                backgroundColor: '#ffffff'
              }}
            >
              <div style={{ padding: '2.5rem' }}>
                <span className="badge badge-yellow" style={{ marginBottom: '0.75rem' }}>
                  Bison Panel (NCL)
                </span>
                <h3 style={{ fontSize: '1.9rem', marginBottom: '0.75rem', fontFamily: 'Playfair Display, serif' }}>
                  Cement Boards
                </h3>
                <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Cement bonded boards for strong, versatile and modern construction. Termite-proof, non-combustible, acoustic, and water-immune boards from 6mm to 40mm thickness.
                </p>
                <Link to="/products?category=cement-boards" className="btn btn-outline">
                  <span>Explore Cement Boards</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div style={{ height: '100%', minHeight: '260px', overflow: 'hidden' }}>
                <img
                  src="/images/cement-boards-banner.jpg"
                  alt="Cement Bonded Boards Stacked on Architectural Surface"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* 3. Locks & Hardware */}
            <div
              className="card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                alignItems: 'center',
                backgroundColor: '#ffffff'
              }}
            >
              <div style={{ padding: '2.5rem' }}>
                <span className="badge badge-aubergine" style={{ marginBottom: '0.75rem' }}>
                  Spider Locks & Accessories
                </span>
                <h3 style={{ fontSize: '1.9rem', marginBottom: '0.75rem', fontFamily: 'Playfair Display, serif' }}>
                  Locks & Hardware
                </h3>
                <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Premium door locks, handles, hinges and accessories for modern spaces. Solid brass pin cylinder mortice locksets, cylindrical locks, and heavy pull handles.
                </p>
                <Link to="/products?category=locks-hardware" className="btn btn-outline">
                  <span>Explore Locks & Hardware</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div style={{ height: '100%', minHeight: '260px', overflow: 'hidden' }}>
                <img
                  src="/images/locks-hardware-banner.jpg"
                  alt="Spider Antique Brass Door Mortice Lock Handle on Teak Wood"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* 4. Metal Trims */}
            <div
              className="card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                alignItems: 'center',
                backgroundColor: '#ffffff'
              }}
            >
              <div style={{ padding: '2.5rem' }}>
                <span className="badge badge-green" style={{ marginBottom: '0.75rem' }}>
                  Spider Zinnia
                </span>
                <h3 style={{ fontSize: '1.9rem', marginBottom: '0.75rem', fontFamily: 'Playfair Display, serif' }}>
                  Metal Trims
                </h3>
                <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Stainless steel self adhesive strips and architectural trims for refined finishes. PVD Mirror Gold, Rose Gold, and Black for luxury TV units, wardrobes, and walls.
                </p>
                <Link to="/products?category=metal-trims" className="btn btn-outline">
                  <span>Explore Metal Trims</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div style={{ height: '100%', minHeight: '260px', overflow: 'hidden' }}>
                <img
                  src="/images/metal-trims-banner.jpg"
                  alt="Stainless Steel Self Adhesive Decorative Trim Strips"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* 5. Foam Concrete Work (Lightweight Concrete) */}
            <div
              className="card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                border: '2px solid rgba(229, 169, 60, 0.45)',
                boxShadow: '0 8px 24px rgba(229, 169, 60, 0.12)'
              }}
            >
              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  <span className="badge badge-yellow">
                    Specialized Civil Service
                  </span>
                  <span className="badge badge-green">
                    Sunken Area Solution
                  </span>
                </div>
                <h3 style={{ fontSize: '1.9rem', marginBottom: '0.75rem', fontFamily: 'Playfair Display, serif' }}>
                  Foam Concrete Work (Lightweight Concrete)
                </h3>
                <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Professional on-site cellular lightweight concrete (CLC) pumping and casting service. Specially engineered for filling toilet sunken slabs, balconies, and trenches without overloading building slabs. 70% lighter than traditional brickbat coba, with zero risk of crushing concealed PVC plumbing pipes.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <Link to="/products/foam-concrete-work" className="btn btn-primary">
                    <span>Explore Foam Concrete Work</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/quote?app=sunken-area-filling" className="btn btn-outline">
                    <span>Get Sunken Filling Quote</span>
                  </Link>
                </div>
              </div>
              <div style={{ height: '100%', minHeight: '280px', overflow: 'hidden' }}>
                <img
                  src="/images/foam-concrete-sunken.jpg"
                  alt="Foam Concrete Slurry Pumping into Sunken Slab Area around Plumbing Pipes"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3B: FOAM CONCRETE DEEP-DIVE SHOWCASE (Sunken Slabs & Insulation)
      ========================================================================= */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#191024', color: '#ffffff', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(229, 169, 60, 0.15)',
                color: 'var(--color-yellow)',
                border: '1px solid rgba(229, 169, 60, 0.35)',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              SPECIALIZED ON-SITE CIVIL WORK
            </span>
            <h2 className="editorial" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#ffffff', marginBottom: '1rem' }}>
              Foam Concrete Work Available <br />
              <span style={{ color: 'var(--color-yellow)', fontStyle: 'italic' }}>(Lightweight Concrete for Sunken Areas)</span>
            </h2>
            <p style={{ color: '#cfc9db', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
              The modern, engineer-approved solution to fill toilet sunken slabs and terrace screeds without dead weight overload, cracking, or pipe joint damage.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              marginBottom: '3rem'
            }}
          >
            {/* Visual Column with Badge */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 16px 36px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <img
                src="/images/foam-concrete-sunken.jpg"
                alt="Foam concrete slurry pouring around PVC sanitary pipes in toilet sunken slab"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(25, 16, 36, 0.88)',
                  backdropFilter: 'blur(8px)',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(229, 169, 60, 0.4)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-yellow)', fontWeight: 700 }}>
                    Cellular Lightweight Concrete (CLC)
                  </span>
                  <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>Density: 400 – 800 kg/m³</strong>
                </div>
                <span style={{ backgroundColor: 'var(--color-green)', color: '#ffffff', padding: '0.3rem 0.75rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700 }}>
                  70% Lighter
                </span>
              </div>
            </div>

            {/* Content & Comparison Column */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '1.25rem', fontFamily: 'Playfair Display, serif' }}>
                Why Leading Builders in Kakinada Choose Foam Concrete over Brickbat Coba:
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  {
                    title: '70% Reduction in Structural Dead Load',
                    desc: 'Traditional brickbat coba / cinder adds 1800 - 2200 kg/m³ of dead weight to building slabs. Foam concrete weighs only 400 - 800 kg/m³, preserving structural margins.'
                  },
                  {
                    title: 'Zero Damage to Concealed Plumbing Lines',
                    desc: 'Flows smoothly as an aerated liquid slurry around complex PVC/CPVC drainage pipes. Zero vibration, zero tamping, zero pipe displacement or cracked joints.'
                  },
                  {
                    title: 'Monolithic, Void-Free & Anti-Seepage',
                    desc: 'Forms a continuous solid mass that eliminates air gaps, insect harborage, and stagnant moisture pockets that cause lower floor ceiling dampness.'
                  },
                  {
                    title: 'Machine Pumping Directly to High Floors',
                    desc: 'Mobile pumping units pump directly from ground level to 1st, 5th, or 10th floors at up to 10 m³/hour. No crane dependency, no labor-intensive rubble lifting.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <CheckCircle2 size={20} color="var(--color-yellow)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#ffffff', fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                        {item.title}
                      </strong>
                      <span style={{ color: '#b9b3c4', fontSize: '0.85rem', lineHeight: 1.5, display: 'block' }}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/quote?app=sunken-area-filling" className="btn btn-primary btn-lg">
                  <FileText size={18} />
                  <span>Request Foam Concrete Quote</span>
                </Link>

                <a
                  href={`https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent('Hi Sneha Agencies, I need details & quote for Foam Concrete Work for sunken area filling at my site.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white btn-lg"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <MessageCircle size={18} color="#2ecc71" />
                  <span>WhatsApp Site Engineer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: AUTHORISED BRANDS SHOWCASE
      ========================================================================= */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', gap: '1rem' }}>
            <div>
              <span className="section-tag">BRAND FAMILIES</span>
              <h2 className="section-title">Authorised Brand Distribution</h2>
              <p className="section-lead">
                Sneha Agencies is an authorised stockist and distributor, not the manufacturer. We supply genuine, batch-certified materials backed by manufacturer warranty.
              </p>
            </div>
            <Link to="/brands" className="btn btn-outline btn-sm">
              <span>View All Brands</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `4px solid ${brand.accentColor}`
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-aubergine)', fontFamily: 'Outfit, sans-serif' }}>
                      {brand.name}
                    </span>
                    <span className="badge badge-green" style={{ fontSize: '0.68rem' }}>
                      {brand.badge}
                    </span>
                  </div>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-muted)', marginBottom: '0.75rem' }}>
                    {brand.parentCompany}
                  </span>
                  <p style={{ fontSize: '0.88rem', color: '#494752', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {brand.description.substring(0, 130)}...
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <Link to={`/brands`} className="btn btn-outline btn-sm btn-full" style={{ fontSize: '0.8rem' }}>
                    View Brand Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: APPLICATIONS NAVIGATOR
      ========================================================================= */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--color-cement)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>
              FIND BY PROJECT NEED
            </span>
            <h2 className="section-title">What Are You Building?</h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>
              Select your specific construction or interior requirement to see tested material combinations and guidance.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {APPLICATIONS.map((app) => (
              <div
                key={app.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden'
                }}
              >
                <div style={{ height: '160px', overflow: 'hidden' }}>
                  <img
                    src={app.image}
                    alt={app.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--color-aubergine)', marginBottom: '0.5rem' }}>
                      {app.title}
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'var(--color-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                      {app.shortDesc}
                    </p>
                  </div>
                  <Link
                    to={`/applications#${app.slug}`}
                    className="btn btn-outline btn-sm btn-full"
                    style={{ fontSize: '0.82rem' }}
                  >
                    <span>View Materials</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHY CHOOSE SNEHA AGENCIES
      ========================================================================= */}
      <section style={{ padding: '4rem 0', backgroundColor: '#191024', color: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag section-tag-light" style={{ justifyContent: 'center' }}>
              PROVEN ADVANTAGES
            </span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>
              Why Enquire with Sneha Agencies?
            </h2>
            <p className="section-lead" style={{ margin: '0 auto', color: '#b9b3c4' }}>
              Transparent distributor support backed by genuine stock in Kakinada.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {[
              {
                title: 'Local Kakinada Contact',
                desc: 'Physical showroom and yard at Nagamalli Thota. Inspect samples and consult directly with our knowledgeable team.',
                icon: MapPin,
                color: 'var(--color-green-light)'
              },
              {
                title: 'Multi-Category Coordination',
                desc: 'Consolidate wall putties, cement boards, door hardware, and metal trims in one order, saving time and freight logistics.',
                icon: Layers,
                color: 'var(--color-yellow)'
              },
              {
                title: 'Direct Stock Confirmation',
                desc: 'Fast real-time check of warehouse inventory, sheet thicknesses, and finishes before you commit on site.',
                icon: CheckCircle2,
                color: 'var(--color-orange)'
              },
              {
                title: 'Project & BOQ Quotations',
                desc: 'Share your Bill of Quantities or architectural schedule for contractor-grade bulk tier quotation estimates.',
                icon: FileText,
                color: '#3498db'
              },
              {
                title: 'Phone & WhatsApp Assistance',
                desc: 'Direct mobile and WhatsApp support for quick specification confirmation, weight estimates, and site delivery timing.',
                icon: Phone,
                color: '#2ecc71'
              },
              {
                title: 'Verified Brand Sourcing',
                desc: 'All products sourced directly from authorized manufacturing plants (NCL Industries, Spider Metal Products).',
                icon: ShieldCheck,
                color: 'var(--color-terracotta)'
              }
            ].map((reason, i) => {
              const IconComp = reason.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.75rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      color: reason.color
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                  <h3 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.5rem' }}>{reason.title}</h3>
                  <p style={{ color: '#b9b3c4', fontSize: '0.88rem', lineHeight: 1.6 }}>{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: HOW THE ENQUIRY WORKS (3-Step Timeline)
      ========================================================================= */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f2ede4' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="section-title">How the Enquiry Works</h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>
              We keep material procurement transparent, quick, and hassle-free.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              position: 'relative'
            }}
          >
            {[
              {
                step: '01',
                title: 'Share Your Requirement',
                desc: 'Call, WhatsApp, or submit the form with your required materials, project location, and approximate quantities or BOQ.'
              },
              {
                step: '02',
                title: 'Confirm Product & Quantity',
                desc: 'Our Kakinada team checks current stock, discusses thicknesses, finishes, and recommends suitable primers or fittings.'
              },
              {
                step: '03',
                title: 'Receive Availability & Quote',
                desc: 'Get transparent quotation details, delivery schedules, and payment terms directly via phone, WhatsApp, or email.'
              }
            ].map((st, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: '2rem',
                  position: 'relative',
                  backgroundColor: '#ffffff'
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'rgba(29, 111, 66, 0.18)',
                    fontFamily: 'Outfit, sans-serif',
                    lineHeight: 1,
                    marginBottom: '0.75rem'
                  }}
                >
                  {st.step}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-aubergine)', marginBottom: '0.6rem' }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/quote" className="btn btn-primary btn-lg">
              <FileText size={18} />
              <span>Request a Quote Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FEATURED PRODUCTS
      ========================================================================= */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', gap: '1rem' }}>
            <div>
              <span className="section-tag">CATALOGUE PREVIEW</span>
              <h2 className="section-title">Confirmed Building Materials</h2>
              <p className="section-lead">
                Verified stock items with full technical specifications and download documents.
              </p>
            </div>
            <Link to="/products" className="btn btn-outline">
              <span>View All Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden'
                }}
              >
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={prod.image}
                    alt={prod.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <span
                    className="badge badge-aubergine"
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(25, 16, 36, 0.85)',
                      color: '#ffffff'
                    }}
                  >
                    {prod.brand}
                  </span>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-green)', fontWeight: 600, textTransform: 'uppercase' }}>
                      {prod.category}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', marginTop: '0.25rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                      {prod.name}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                      {prod.shortDesc.substring(0, 95)}...
                    </p>
                  </div>

                  <div>
                    <div style={{ marginBottom: '1rem' }}>
                      <span className="badge badge-stock">
                        {prod.availability}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Link to={`/products/${prod.slug}`} className="btn btn-outline btn-sm" style={{ flex: 1, fontSize: '0.8rem' }}>
                        View Specs
                      </Link>
                      <Link to={`/quote?product=${encodeURIComponent(prod.name)}`} className="btn btn-primary btn-sm" style={{ flex: 1, fontSize: '0.8rem' }}>
                        Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: PROJECT ENQUIRY BANNER (Matches user mockup form)
      ========================================================================= */}
      <section
        style={{
          padding: '4.5rem 0',
          backgroundColor: '#f7f5f0',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container">
          <div
            className="card"
            style={{
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              backgroundColor: '#ffffff',
              boxShadow: 'var(--shadow-lg)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            {/* Left Prompt Column */}
            <div>
              <span className="section-tag">PROJECT ENQUIRY</span>
              <h2
                className="editorial"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  color: 'var(--color-aubergine)',
                  marginBottom: '1rem',
                  lineHeight: 1.15
                }}
              >
                Tell us about <br />
                your project.
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Get the right material recommendations and a quick quote from our team in Kakinada.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-aubergine)' }}>
                  <CheckCircle2 size={18} color="var(--color-green)" />
                  <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>Direct Kakinada distributor pricing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-aubergine)' }}>
                  <CheckCircle2 size={18} color="var(--color-green)" />
                  <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>Material list & BOQ assistance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-aubergine)' }}>
                  <CheckCircle2 size={18} color="var(--color-green)" />
                  <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>Local phone & WhatsApp updates</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Form (Matches Mockup) */}
            <div>
              {formSubmitted ? (
                <div
                  style={{
                    backgroundColor: '#ebf7ee',
                    border: '1.5px solid #a3e0b5',
                    borderRadius: 'var(--radius-md)',
                    padding: '2.5rem',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-green)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem auto'
                    }}
                  >
                    <Check size={32} />
                  </div>
                  <h3 style={{ color: 'var(--color-aubergine)', marginBottom: '0.5rem' }}>
                    Requirement Received!
                  </h3>
                  <p style={{ color: '#276741', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you, {enquiryForm.name}. Your project enquiry has been submitted. Our Kakinada team will verify stock and reach out to {enquiryForm.phone} shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn btn-outline btn-sm"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit}>
                  {/* Name & Contact Number Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Your name"
                        value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Contact Number <span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        className="form-control"
                        placeholder="Your number"
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Project Type & Location Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Project Type</label>
                      <select
                        className="form-control"
                        value={enquiryForm.projectType}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, projectType: e.target.value })}
                      >
                        <option value="Residential Construction">Residential Construction</option>
                        <option value="Commercial Building">Commercial Building</option>
                        <option value="Interior Renovation">Interior Renovation</option>
                        <option value="Contractor / Institutional">Contractor / Institutional</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Kakinada (or nearby)"
                        value={enquiryForm.location}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, location: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Materials Required Checkboxes (Exact 4 from mockup) */}
                  <div className="form-group">
                    <label className="form-label">Materials Required</label>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '0.75rem',
                        marginTop: '0.25rem'
                      }}
                    >
                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          cursor: 'pointer',
                          padding: '0.6rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: enquiryForm.materials.wallFinishes ? 'rgba(29, 111, 66, 0.08)' : 'var(--color-surface-subtle)',
                          border: enquiryForm.materials.wallFinishes ? '1px solid var(--color-green)' : '1px solid var(--color-border)'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={enquiryForm.materials.wallFinishes}
                          onChange={() => handleCheckboxChange('wallFinishes')}
                          style={{ marginTop: '0.2rem', accentColor: 'var(--color-green)' }}
                        />
                        <div>
                          <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600 }}>Wall Finishes</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>Putty, Textures, Paints</span>
                        </div>
                      </label>

                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          cursor: 'pointer',
                          padding: '0.6rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: enquiryForm.materials.cementBoards ? 'rgba(29, 111, 66, 0.08)' : 'var(--color-surface-subtle)',
                          border: enquiryForm.materials.cementBoards ? '1px solid var(--color-green)' : '1px solid var(--color-border)'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={enquiryForm.materials.cementBoards}
                          onChange={() => handleCheckboxChange('cementBoards')}
                          style={{ marginTop: '0.2rem', accentColor: 'var(--color-green)' }}
                        />
                        <div>
                          <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600 }}>Cement Boards</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>Cement bonded boards</span>
                        </div>
                      </label>

                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          cursor: 'pointer',
                          padding: '0.6rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: enquiryForm.materials.locksHardware ? 'rgba(29, 111, 66, 0.08)' : 'var(--color-surface-subtle)',
                          border: enquiryForm.materials.locksHardware ? '1px solid var(--color-green)' : '1px solid var(--color-border)'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={enquiryForm.materials.locksHardware}
                          onChange={() => handleCheckboxChange('locksHardware')}
                          style={{ marginTop: '0.2rem', accentColor: 'var(--color-green)' }}
                        />
                        <div>
                          <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600 }}>Locks & Hardware</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>Locks, Handles, Hinges</span>
                        </div>
                      </label>

                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          cursor: 'pointer',
                          padding: '0.6rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: enquiryForm.materials.metalTrims ? 'rgba(29, 111, 66, 0.08)' : 'var(--color-surface-subtle)',
                          border: enquiryForm.materials.metalTrims ? '1px solid var(--color-green)' : '1px solid var(--color-border)'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={enquiryForm.materials.metalTrims}
                          onChange={() => handleCheckboxChange('metalTrims')}
                          style={{ marginTop: '0.2rem', accentColor: 'var(--color-green)' }}
                        />
                        <div>
                          <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600 }}>Metal Trims</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>SS strips and trims</span>
                        </div>
                      </label>

                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          cursor: 'pointer',
                          padding: '0.6rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: enquiryForm.materials.foamConcrete ? 'rgba(29, 111, 66, 0.08)' : 'var(--color-surface-subtle)',
                          border: enquiryForm.materials.foamConcrete ? '1px solid var(--color-green)' : '1px solid var(--color-border)',
                          gridColumn: '1 / -1'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={enquiryForm.materials.foamConcrete}
                          onChange={() => handleCheckboxChange('foamConcrete')}
                          style={{ marginTop: '0.2rem', accentColor: 'var(--color-green)' }}
                        />
                        <div>
                          <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600 }}>Foam Concrete Work (Lightweight Concrete)</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>Specialized filling for sunken areas, toilet slabs & terrace insulation</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div className="form-group">
                    <label className="form-label">Additional Requirements</label>
                    <textarea
                      rows={3}
                      className="form-control"
                      placeholder="Tell us more about your project (thicknesses, quantities, required date)..."
                      value={enquiryForm.notes}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, notes: e.target.value })}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-full"
                    disabled={formLoading}
                    style={{ justifyContent: 'center' }}
                  >
                    <span>{formLoading ? 'Submitting Requirement...' : 'Request a Quote →'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: SHOWROOM CONTACT PREVIEW
      ========================================================================= */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="section-tag">VISIT OUR SHOWROOM</span>
              <h2 className="section-title">Conveniently Located in Kakinada</h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Visit our showroom to inspect live samples of Bison Lam woodgrains, Bison Panel cement boards, Alltek texture boards, and Spider brass locks.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <MapPin size={20} color="var(--color-green)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-aubergine)' }}>Showroom Address:</strong>
                    <span style={{ color: '#4d4b54', fontSize: '0.92rem' }}>
                      {COMPANY.address.full}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Phone size={20} color="var(--color-terracotta)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-aubergine)' }}>Direct Inquiries:</strong>
                    <a href={`tel:${COMPANY.phonePrimaryRaw}`} style={{ color: 'var(--color-terracotta)', fontWeight: 700, marginRight: '0.5rem' }}>
                      {COMPANY.phonePrimary}
                    </a>
                    <span style={{ color: 'var(--color-muted)' }}>|</span>
                    <a href={`tel:${COMPANY.phoneSecondaryRaw}`} style={{ color: 'var(--color-muted)', marginLeft: '0.5rem' }}>
                      {COMPANY.phoneSecondary}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Clock size={20} color="var(--color-yellow)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-aubergine)' }}>Working Hours:</strong>
                    <span style={{ color: '#4d4b54', fontSize: '0.92rem' }}>
                      Mon - Sat: {COMPANY.openingHours?.monSat || '9:00 AM - 8:30 PM'} | Sun: {COMPANY.openingHours?.sun || '10:00 AM - 2:00 PM'}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href={COMPANY.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Compass size={16} />
                  <span>Get Directions on Map</span>
                </a>
                <a
                  href={COMPANY.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Showroom</span>
                </a>
              </div>
            </div>

            {/* Showroom Visual / Business Card Highlight */}
            <div
              className="card"
              style={{
                padding: '1.25rem',
                backgroundColor: 'var(--color-surface-subtle)',
                border: '1.5px solid var(--color-border)'
              }}
            >
              <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1rem' }}>
                <img
                  src="/images/bussiness-card.jpg"
                  alt="Sneha Agencies Official Business Credentials & Authorised Distributor Certificate"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  loading="lazy"
                />
              </div>
              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                Official Authorised Distributor for NCL Group (Alltek, Bison Panel, Bison Lam) & Spider in Kakinada
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
