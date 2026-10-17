import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  Filter,
  X,
  ArrowRight,
  FileText,
  RotateCcw,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { BRANDS } from '../data/brands';
import { APPLICATIONS } from '../data/applications';
import { COMPANY } from '../data/company';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialBrand = searchParams.get('brand') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [selectedApplication, setSelectedApplication] = useState('all');

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchBrand = product.brand.toLowerCase().includes(query);
        const matchDesc = product.shortDesc.toLowerCase().includes(query);
        const matchCat = product.category.toLowerCase().includes(query);
        if (!matchName && !matchBrand && !matchDesc && !matchCat) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'all') {
        if (product.categoryId !== selectedCategory) return false;
      }

      // 3. Brand Filter
      if (selectedBrand !== 'all') {
        if (product.brandId !== selectedBrand) return false;
      }

      // 4. Application Filter
      if (selectedApplication !== 'all') {
        if (!product.applications.includes(selectedApplication)) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedBrand, selectedApplication]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSelectedApplication('all');
    setSearchParams({});
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'all' ||
    selectedBrand !== 'all' ||
    selectedApplication !== 'all';

  return (
    <div style={{ backgroundColor: 'var(--color-cement)', minHeight: '100vh', paddingBottom: '4rem' }}>
      <SeoHelmet
        title="Building Materials & Products Catalogue in Kakinada"
        description="Browse certified building materials distributed by Sneha Agencies: Bison Panel cement boards, Alltek putties and textures, Bison Lam prelaminated sheets, and Spider door locksets."
        canonical="/products"
      />

      {/* Header Banner */}
      <section style={{ backgroundColor: '#191024', color: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag section-tag-light" style={{ justifyContent: 'center' }}>
            PRODUCT CATALOGUE
          </span>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff',
              marginBottom: '1rem',
              fontFamily: 'Playfair Display, serif'
            }}
          >
            Building Materials and Products in Kakinada
          </h1>
          <p
            style={{
              maxWidth: '650px',
              margin: '0 auto',
              color: '#b9b3c4',
              fontSize: '1.05rem',
              lineHeight: 1.6
            }}
          >
            Explore our comprehensive inventory of wall finishes, cement-bonded particle boards, prelaminated boards, door hardware, and decorative metal trims.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="container" style={{ marginTop: '-1.5rem', marginBottom: '2.5rem' }}>
        <div
          className="card"
          style={{
            padding: '1.5rem',
            backgroundColor: '#ffffff',
            boxShadow: 'var(--shadow-md)',
            border: '1.5px solid var(--color-border)'
          }}
        >
          {/* Search Input */}
          <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
            <Search
              size={20}
              color="var(--color-muted)"
              style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search by material name, brand (Alltek, Bison Panel, Spider), or thickness (8mm, 12mm)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
              style={{ paddingLeft: '2.75rem', fontSize: '1rem', height: '50px' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-muted)'
                }}
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Filter Dropdowns & Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {/* Category Selectors */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
              <button
                onClick={() => setSelectedCategory('all')}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: selectedCategory === 'all' ? '1.5px solid var(--color-green)' : '1px solid var(--color-border)',
                  backgroundColor: selectedCategory === 'all' ? 'var(--color-green)' : '#ffffff',
                  color: selectedCategory === 'all' ? '#ffffff' : 'var(--color-charcoal)',
                  cursor: 'pointer'
                }}
              >
                All Categories ({PRODUCTS.length})
              </button>

              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.45rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    border: selectedCategory === cat.id ? '1.5px solid var(--color-green)' : '1px solid var(--color-border)',
                    backgroundColor: selectedCategory === cat.id ? 'var(--color-green)' : '#ffffff',
                    color: selectedCategory === cat.id ? '#ffffff' : 'var(--color-charcoal)',
                    cursor: 'pointer'
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Brand & Application Selectors */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <select
                className="form-control"
                style={{ width: 'auto', minWidth: '150px', height: '40px', fontSize: '0.88rem', padding: '0.4rem 0.75rem' }}
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="all">All Brands</option>
                {BRANDS.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>

              <select
                className="form-control"
                style={{ width: 'auto', minWidth: '160px', height: '40px', fontSize: '0.88rem', padding: '0.4rem 0.75rem' }}
                value={selectedApplication}
                onChange={(e) => setSelectedApplication(e.target.value)}
              >
                <option value="all">All Applications</option>
                {APPLICATIONS.map((app) => (
                  <option key={app.id} value={app.id}>
                    {app.title}
                  </option>
                ))}
              </select>

              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="btn btn-outline btn-sm"
                  style={{ gap: '0.35rem', color: 'var(--color-terracotta)', borderColor: 'var(--color-terracotta)' }}
                >
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product Results Grid */}
      <div className="container">
        {filteredProducts.length === 0 ? (
          <div
            className="card"
            style={{
              padding: '4rem 1.5rem',
              textAlign: 'center',
              backgroundColor: '#ffffff'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-aubergine)', marginBottom: '0.75rem' }}>
              No products found matching your filter criteria
            </h3>
            <p style={{ color: 'var(--color-muted)', maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
              Try clearing search terms or selecting "All Categories". You can also send us your specific material requirement or BOQ directly.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={handleResetFilters} className="btn btn-outline">
                Clear Filters
              </button>
              <Link to="/quote" className="btn btn-primary">
                Send Material Requirement
              </Link>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff'
                }}
              >
                {/* Product Image & Badges */}
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem'
                    }}
                  >
                    <span
                      className="badge"
                      style={{
                        backgroundColor: 'rgba(25, 16, 36, 0.85)',
                        color: '#ffffff',
                        fontSize: '0.72rem'
                      }}
                    >
                      {product.brand}
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--color-green)',
                        textTransform: 'uppercase'
                      }}
                    >
                      {product.category}
                    </span>
                    <h3
                      style={{
                        fontSize: '1.18rem',
                        marginTop: '0.25rem',
                        marginBottom: '0.65rem',
                        lineHeight: 1.3
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.86rem',
                        color: 'var(--color-muted)',
                        lineHeight: 1.5,
                        marginBottom: '1rem'
                      }}
                    >
                      {product.shortDesc}
                    </p>

                    {/* Variant or Size Summary */}
                    {product.sizes && product.sizes.length > 0 && (
                      <div style={{ fontSize: '0.8rem', color: '#4a4852', marginBottom: '0.75rem' }}>
                        <strong>Sizes:</strong> {product.sizes.join(', ')}
                      </div>
                    )}
                  </div>

                  <div>
                    <div style={{ marginBottom: '1rem' }}>
                      <span className="badge badge-stock">
                        {product.availability}
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Link
                        to={`/products/${product.slug}`}
                        className="btn btn-outline btn-sm"
                        style={{ flex: 1, fontSize: '0.82rem' }}
                      >
                        View Details
                      </Link>
                      <Link
                        to={`/quote?product=${encodeURIComponent(product.name)}`}
                        className="btn btn-primary btn-sm"
                        style={{ flex: 1, fontSize: '0.82rem' }}
                      >
                        Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cannot Find Material Box */}
        <div
          className="card"
          style={{
            marginTop: '3.5rem',
            padding: '2.5rem',
            backgroundColor: '#ffffff',
            border: '1.5px solid var(--color-border)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-aubergine)', marginBottom: '0.35rem' }}>
              Cannot find the exact material or thickness?
            </h3>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
              Send us your architectural schedule or call our Kakinada warehouse directly. We verify special mill orders and custom dimensions.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Link to="/quote" className="btn btn-primary">
              <FileText size={16} />
              <span>Send Material List</span>
            </Link>
            <a href={`tel:${COMPANY.phonePrimaryRaw}`} className="btn btn-terracotta">
              <span>Call Team</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
