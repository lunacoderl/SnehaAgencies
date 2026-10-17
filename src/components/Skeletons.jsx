import React from 'react';

export function ProductCardSkeleton() {
  return (
    <div
      className="card"
      style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
      aria-busy="true"
      aria-label="Loading product..."
    >
      <div className="skeleton" style={{ width: '100%', height: '200px', borderRadius: 'var(--radius-sm)' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="skeleton" style={{ width: '70px', height: '18px' }} />
        <div className="skeleton" style={{ width: '80px', height: '18px' }} />
      </div>
      <div className="skeleton" style={{ width: '90%', height: '22px' }} />
      <div className="skeleton" style={{ width: '100%', height: '14px' }} />
      <div className="skeleton" style={{ width: '75%', height: '14px' }} />
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
        <div className="skeleton" style={{ flex: 1, height: '40px' }} />
        <div className="skeleton" style={{ flex: 1, height: '40px' }} />
      </div>
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="container" style={{ padding: '2rem 1.25rem' }} aria-busy="true" aria-label="Loading product details...">
      <div className="skeleton" style={{ width: '240px', height: '16px', marginBottom: '1.5rem' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        <div>
          <div className="skeleton" style={{ width: '100%', height: '380px', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }} />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div className="skeleton" style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-sm)' }} />
            <div className="skeleton" style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-sm)' }} />
            <div className="skeleton" style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-sm)' }} />
          </div>
        </div>
        <div>
          <div className="skeleton" style={{ width: '120px', height: '24px', marginBottom: '0.75rem' }} />
          <div className="skeleton" style={{ width: '80%', height: '36px', marginBottom: '1rem' }} />
          <div className="skeleton" style={{ width: '100%', height: '60px', marginBottom: '1.5rem' }} />
          <div className="skeleton" style={{ width: '100%', height: '180px', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem' }} />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="skeleton" style={{ flex: 1, height: '48px' }} />
            <div className="skeleton" style={{ flex: 1, height: '48px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }} aria-busy="true">
      <div className="skeleton" style={{ width: '100%', height: '180px', borderRadius: 'var(--radius-sm)' }} />
      <div className="skeleton" style={{ width: '50%', height: '24px' }} />
      <div className="skeleton" style={{ width: '90%', height: '14px' }} />
      <div className="skeleton" style={{ width: '70%', height: '14px' }} />
    </div>
  );
}
