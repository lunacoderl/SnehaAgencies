import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  FileText,
  Download,
  CheckCircle2,
  Share2,
  Layers,
  ChevronRight,
  ShieldCheck,
  Check,
  Building,
  Info
} from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import { PRODUCTS } from '../data/products';
import { COMPANY } from '../data/company';
import { ProductDetailSkeleton } from '../components/Skeletons';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find product by slug
  const product = PRODUCTS.find((p) => p.slug === slug);

  // Gallery state
  const [activeImage, setActiveImage] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedFinish, setSelectedFinish] = useState('');

  // Inquiry form state
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('Sheets / Bags / Sets');
  const [location, setLocation] = useState('Kakinada');
  const [requiredDate, setRequiredDate] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setActiveImage(product.image);
      if (product.availableVariants && product.availableVariants.length > 0) {
        setSelectedVariant(product.availableVariants[0]);
      }
      if (product.finishes && product.finishes.length > 0) {
        setSelectedFinish(product.finishes[0]);
      }
      setEnquirySuccess(false);
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className="container" style={{ padding: '5rem 1.25rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-aubergine)' }}>
          Product Not Found
        </h2>
        <p style={{ color: 'var(--color-muted)', marginBottom: '2rem' }}>
          The requested building material does not exist or has been updated in our catalogue.
        </p>
        <Link to="/products" className="btn btn-primary">
          <ArrowLeft size={16} />
          <span>Back to Products Catalogue</span>
        </Link>
      </div>
    );
  }

  // Related products (same category, excluding current product)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 3);

  // Handle WhatsApp inquiry
  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello Sneha Agencies, I am interested in *${product.name}* (${product.brand}).\n` +
      `Variant: ${selectedVariant || 'Standard'}\n` +
      `Finish: ${selectedFinish || 'Default'}\n` +
      `Quantity required: ${quantity || 'Requirement enquiry'}\n` +
      `Location: ${location || 'Kakinada'}\n` +
      `Please confirm stock availability and pricing.`
    );
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!customerPhone || !customerName) {
      alert('Please provide your name and phone number.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setEnquirySuccess(true);
    }, 600);
  };

  // Structured Data Schema for this exact product
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: `https://snehaagencies.com${product.image}`,
    description: product.shortDesc,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    category: product.category,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'LocalBusiness',
        name: 'Sneha Agencies Kakinada'
      }
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-cement)', minHeight: '100vh', paddingBottom: '4rem' }}>
      <SeoHelmet
        title={`${product.name} | ${product.brand} in Kakinada`}
        description={`${product.name} (${product.brand}) distributed by Sneha Agencies in Kakinada. ${product.shortDesc}`}
        canonical={`/products/${product.slug}`}
        ogImage={product.image}
        structuredData={productSchema}
      />

      {/* Breadcrumb Navigation */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-border)', padding: '0.85rem 0' }}>
        <div className="container">
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.45rem',
              fontSize: '0.85rem',
              color: 'var(--color-muted)'
            }}
          >
            <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>
              Home
            </Link>
            <ChevronRight size={14} />
            <Link to="/products" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>
              Products
            </Link>
            <ChevronRight size={14} />
            <Link
              to={`/products?category=${product.categoryId}`}
              style={{ color: 'var(--color-muted)', textDecoration: 'none' }}
            >
              {product.category}
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--color-aubergine)', fontWeight: 600 }}>
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Hero & Specification Container */}
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'flex-start',
            marginBottom: '3.5rem'
          }}
        >
          {/* Left Column: Image Gallery */}
          <div>
            <div
              className="card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                marginBottom: '1rem',
                height: '420px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={activeImage || product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Thumbnail selector */}
            {product.gallery && product.gallery.length > 1 && (
              <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: activeImage === img ? '2.5px solid var(--color-green)' : '1px solid var(--color-border)',
                      padding: 0,
                      background: 'none',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}

            {/* Genuine Stock & Distributor Assurance Card */}
            <div
              style={{
                marginTop: '1.5rem',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <ShieldCheck size={32} color="var(--color-green)" style={{ flexShrink: 0 }} />
              <div>
                <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-aubergine)' }}>
                  Authorised Distributor Stock
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)', lineHeight: 1.4 }}>
                  Authentic, factory-packed material stocked at Sneha Agencies Kakinada warehouse. Full batch warranty.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info & Actions */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-aubergine">Brand: {product.brand}</span>
              <span className="badge badge-green">{product.category}</span>
              <span className="badge badge-stock">{product.availability}</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                color: 'var(--color-aubergine)',
                marginBottom: '1rem',
                lineHeight: 1.25
              }}
            >
              {product.name}
            </h1>

            <p style={{ fontSize: '1.05rem', color: '#44424c', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {product.longDesc}
            </p>

            {/* Key Features List */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-aubergine)', marginBottom: '0.75rem' }}>
                Key Advantages & Highlights:
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {product.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: '#33313b' }}>
                    <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Variant Selector */}
            {product.availableVariants && product.availableVariants.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-aubergine)', marginBottom: '0.5rem' }}>
                  Select Thickness / Model Variant:
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {product.availableVariants.map((v, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedVariant(v)}
                      style={{
                        padding: '0.5rem 0.9rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        border: selectedVariant === v ? '2px solid var(--color-green)' : '1px solid var(--color-border)',
                        backgroundColor: selectedVariant === v ? 'rgba(29, 111, 66, 0.08)' : '#ffffff',
                        color: selectedVariant === v ? 'var(--color-green)' : 'var(--color-charcoal)',
                        cursor: 'pointer'
                      }}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Interactive Finish Selector */}
            {product.finishes && product.finishes.length > 1 && (
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-aubergine)', marginBottom: '0.5rem' }}>
                  Available Shade / Finish:
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {product.finishes.map((f, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedFinish(f)}
                      style={{
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        border: selectedFinish === f ? '2px solid var(--color-orange)' : '1px solid var(--color-border)',
                        backgroundColor: selectedFinish === f ? 'rgba(224, 94, 43, 0.08)' : '#ffffff',
                        color: selectedFinish === f ? 'var(--color-orange)' : 'var(--color-charcoal)',
                        cursor: 'pointer'
                      }}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <button onClick={handleWhatsAppEnquiry} className="btn btn-whatsapp btn-lg" style={{ flex: 1 }}>
                <MessageCircle size={20} />
                <span>Enquire on WhatsApp</span>
              </button>

              <a href={`tel:${COMPANY.phonePrimaryRaw}`} className="btn btn-terracotta btn-lg" style={{ flex: 1 }}>
                <Phone size={20} />
                <span>Call {COMPANY.phonePrimary}</span>
              </a>
            </div>

            <div style={{ fontSize: '0.82rem', color: 'var(--color-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Info size={15} />
              <span>Bulk contractor rates and site delivery schedules available upon request.</span>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table & Document Downloads */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Specifications */}
          <div className="card" style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-aubergine)', marginBottom: '1.25rem' }}>
              Technical Specifications
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <tbody>
                {product.specifications.map((spec, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid var(--color-border)',
                      backgroundColor: idx % 2 === 0 ? 'var(--color-surface-subtle)' : '#ffffff'
                    }}
                  >
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--color-aubergine)', width: '40%' }}>
                      {spec.label}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', color: '#43404c' }}>
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Documents & Application Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Catalog Download Card */}
            <div className="card" style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-aubergine)', marginBottom: '1rem' }}>
                Manufacturer Documentation
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', marginBottom: '1.25rem' }}>
                Download certified manufacturer data sheets, MRP price lists, or installation guides for this material.
              </p>

              {product.downloads && product.downloads.length > 0 ? (
                product.downloads.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.file}
                    download
                    className="btn btn-outline btn-full"
                    style={{ justifyContent: 'space-between', marginBottom: '0.75rem' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FileText size={18} color="var(--color-green)" />
                      <span style={{ fontSize: '0.88rem', textAlign: 'left' }}>{doc.title}</span>
                    </div>
                    <Download size={16} />
                  </a>
                ))
              ) : (
                <a
                  href="/Spider_Zinnia_MRP_15_APR-26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-full"
                  style={{ justifyContent: 'space-between' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileText size={18} color="var(--color-green)" />
                    <span style={{ fontSize: '0.88rem' }}>Spider Hardware MRP Catalog (PDF)</span>
                  </div>
                  <Download size={16} />
                </a>
              )}
            </div>

            {/* Project Enquiry Quick Form */}
            <div className="card" style={{ padding: '2rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--color-green)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-aubergine)', marginBottom: '0.5rem' }}>
                Request Quotation for {product.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', marginBottom: '1.25rem' }}>
                Specify your quantity and site address. We will verify warehouse stock and respond immediately.
              </p>

              {enquirySuccess ? (
                <div style={{ padding: '1.25rem', backgroundColor: '#ebf7ee', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <Check size={28} color="var(--color-green)" style={{ margin: '0 auto 0.5rem auto' }} />
                  <strong style={{ display: 'block', color: 'var(--color-green)' }}>Requirement Sent!</strong>
                  <span style={{ fontSize: '0.85rem', color: '#2b6543' }}>
                    Our team will contact you at {customerPhone} with quotation details.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        className="form-control"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        className="form-control"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div>
                      <input
                        type="text"
                        placeholder="Required Quantity (e.g. 50 pcs)"
                        className="form-control"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Delivery Location"
                        className="form-control"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-full"
                    disabled={submitting}
                    style={{ justifyContent: 'center' }}
                  >
                    <span>{submitting ? 'Submitting...' : 'Submit Material Requirement →'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Product Disclaimer */}
        <div
          style={{
            padding: '1.25rem',
            backgroundColor: 'rgba(25, 16, 36, 0.04)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            marginBottom: '3.5rem',
            fontSize: '0.84rem',
            color: 'var(--color-muted)'
          }}
        >
          <strong>Product Disclaimer:</strong> Availability, batch specifications, dimensions, and quotation details are subject to physical confirmation by Sneha Agencies Kakinada. Standard manufacturer warranties apply.
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-aubergine)' }}>
                Related Materials in {product.category}
              </h3>
              <Link to="/products" className="btn btn-outline btn-sm">
                <span>View Full Catalogue</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.5rem'
              }}
            >
              {relatedProducts.map((rel) => (
                <div key={rel.id} className="card" style={{ overflow: 'hidden' }}>
                  <div style={{ height: '170px', overflow: 'hidden' }}>
                    <img src={rel.image} alt={rel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-green)', fontWeight: 700, textTransform: 'uppercase' }}>
                      {rel.brand}
                    </span>
                    <h4 style={{ fontSize: '1.05rem', margin: '0.25rem 0 0.5rem 0' }}>{rel.name}</h4>
                    <p style={{ fontSize: '0.84rem', color: 'var(--color-muted)', marginBottom: '1rem' }}>
                      {rel.shortDesc.substring(0, 80)}...
                    </p>
                    <Link to={`/products/${rel.slug}`} className="btn btn-outline btn-sm btn-full">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
