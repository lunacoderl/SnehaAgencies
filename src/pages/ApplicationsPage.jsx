import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  PhoneCall, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  Filter,
  Check,
  Building,
  Home,
  SlidersHorizontal
} from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import { APPLICATIONS } from '../data/applications';
import { PRODUCTS } from '../data/products';
import { COMPANY } from '../data/company';

export default function ApplicationsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Applications' },
    { id: 'Drywall & Partitions', label: 'Partitions & Walls' },
    { id: 'Ceilings', label: 'False Ceilings' },
    { id: 'Flooring & Mezzanine', label: 'Flooring & Decks' },
    { id: 'Interior Furniture & Paneling', label: 'Cabinetry & Furniture' },
    { id: 'Waterproofing & Wet Areas', label: 'Wet Areas & Restrooms' },
    { id: 'Security & Access', label: 'Doors & Security' },
    { id: 'Decorative Trims & Transitions', label: 'Profiles & Trims' },
    { id: 'Wall Finishes & Facades', label: 'Plasters & Textures' }
  ];

  const filteredApplications = activeCategory === 'all'
    ? APPLICATIONS
    : APPLICATIONS.filter(app => app.category === activeCategory);

  // Helper to find product details by slug
  const getProduct = (slug) => PRODUCTS.find(p => p.slug === slug);

  return (
    <>
      <SeoHelmet 
        title="Building Applications & Solutions | Partitions, Ceilings, Waterproofing, Hardware | Sneha Agencies"
        description="Explore civil and interior applications engineered with Bison Panel cement boards, Alltek putties, Spider locks, and Zinnia trims. Thickness guidelines for partitions, ceilings, and flooring in Kakinada."
        canonicalUrl="/applications"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Building Applications & Solutions - Sneha Agencies",
          "description": "Architectural and construction applications for Bison Panel, Bison Lam, Alltek wall plasters, and Spider locks.",
          "provider": {
            "@type": "LocalBusiness",
            "name": COMPANY.name,
            "telephone": COMPANY.primaryPhone
          }
        }}
      />

      <div className="bg-bgLight pt-8 pb-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-textMuted">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-semibold">Applications & Solutions</span>
          </nav>
        </div>

        {/* Hero Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-stone-200/80 relative overflow-hidden">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wide uppercase mb-3">
                <Layers className="w-4 h-4" />
                Technical Solution Matrix
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
                Engineered Solutions For Residential & Commercial Projects
              </h1>
              <p className="text-base sm:text-lg text-textMuted leading-relaxed mb-6">
                Instead of guessing which board or fitting suits your site, browse by functional application. Each solution specifies recommended thicknesses, structural advantages, and verified product combinations.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link 
                  to="/quote" 
                  className="px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm shadow hover:bg-primary/95 transition-all"
                >
                  Request Application BOQ
                </Link>
                <a 
                  href={`https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent('Hi Sneha Agencies, I need technical advice on selecting the right material for my site project.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-textDark font-semibold text-sm border border-stone-200 transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  Ask Technical Engineer
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Navigation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Applications List */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredApplications.map((app) => (
              <div 
                key={app.id} 
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category & Thickness badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {app.category}
                    </span>
                    {app.typicalThickness && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                        Typical Thickness: <strong>{app.typicalThickness}</strong>
                      </span>
                    )}
                  </div>

                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-textDark mb-3">
                    {app.title}
                  </h2>
                  <p className="text-sm text-textMuted leading-relaxed mb-6">
                    {app.summary || app.shortDesc}
                  </p>

                  {/* Challenges Solved */}
                  <div className="mb-6 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-textDark mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Site Challenges Overcome
                    </h3>
                    <ul className="space-y-2">
                      {(app.challengesSolved || (app.problemUseCase ? [app.problemUseCase] : [])).map((ch, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-600">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Products */}
                  <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-textDark mb-3">
                      Recommended Materials for This Application
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(app.recommendedProducts || []).map(slug => {
                        const prod = getProduct(slug);
                        if (!prod) return null;
                        return (
                          <Link 
                            key={slug} 
                            to={`/products/${slug}`}
                            className="p-3 rounded-xl border border-stone-200 hover:border-primary/50 hover:bg-stone-50 transition-all flex items-center gap-3 group"
                          >
                            <img 
                              src={prod.image} 
                              alt={prod.name} 
                              className="w-12 h-12 rounded-lg object-cover bg-stone-100 shrink-0" 
                            />
                            <div className="overflow-hidden">
                              <span className="block text-xs font-semibold text-textDark truncate group-hover:text-primary">
                                {prod.name}
                              </span>
                              <span className="text-[11px] text-textMuted block">
                                {prod.brand} • {prod.category}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Key Advantages */}
                  <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-textDark mb-2">
                      Structural Advantages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {(app.keyAdvantages || app.specs || []).map((adv, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 border border-stone-200"
                        >
                          {adv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA for Application */}
                <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-textMuted">
                    Ideal for: <strong>{app.idealSectors ? app.idealSectors.join(', ') : 'Residential & Commercial'}</strong>
                  </div>
                  <Link 
                    to={`/quote?app=${encodeURIComponent(app.title)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/95 transition-all"
                  >
                    Get Quote for This Solution
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Thickness Quick Guide Reference Table */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Quick Contractor Reference</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-textDark mt-1">
                Bison Panel Cement Board Thickness Selection Chart
              </h2>
              <p className="text-sm text-textMuted mt-1">
                Standard thicknesses manufactured under IS 14276:1995 for various civil applications.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b-2 border-stone-200 bg-stone-50">
                    <th className="py-3 px-4 font-bold text-textDark">Thickness</th>
                    <th className="py-3 px-4 font-bold text-textDark">Weight (Approx kg/sq.m)</th>
                    <th className="py-3 px-4 font-bold text-textDark">Primary Application</th>
                    <th className="py-3 px-4 font-bold text-textDark">Recommended Support Grid</th>
                    <th className="py-3 px-4 font-bold text-textDark">Fastener / Screw Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr className="hover:bg-stone-50/50">
                    <td className="py-3 px-4 font-bold text-primary">6 mm</td>
                    <td className="py-3 px-4 text-stone-600">~ 7.5 kg</td>
                    <td className="py-3 px-4 text-stone-700">False ceilings, acoustic baffles, duct cladding</td>
                    <td className="py-3 px-4 text-stone-600">610 mm × 610 mm grid</td>
                    <td className="py-3 px-4 text-stone-600">Self-drilling drywall bugle head screws</td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                    <td className="py-3 px-4 font-bold text-primary">8 mm / 10 mm</td>
                    <td className="py-3 px-4 text-stone-600">~ 10.0 - 12.5 kg</td>
                    <td className="py-3 px-4 text-stone-700">Internal partitions, wall lining, soffits</td>
                    <td className="py-3 px-4 text-stone-600">610 mm vertical studs</td>
                    <td className="py-3 px-4 text-stone-600">Self-tapping ribbed countersunk screws</td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                    <td className="py-3 px-4 font-bold text-primary">12 mm</td>
                    <td className="py-3 px-4 text-stone-600">~ 15.0 kg</td>
                    <td className="py-3 px-4 text-stone-700">External wall cladding, wet-area tile backing, pre-fab cabins</td>
                    <td className="py-3 px-4 text-stone-600">407 mm or 610 mm vertical studs</td>
                    <td className="py-3 px-4 text-stone-600">Corrosion-resistant exterior screws</td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                    <td className="py-3 px-4 font-bold text-primary">16 mm / 20 mm</td>
                    <td className="py-3 px-4 text-stone-600">~ 20.0 - 25.0 kg</td>
                    <td className="py-3 px-4 text-stone-700">Mezzanine floors, door shutters, heavy commercial partitions</td>
                    <td className="py-3 px-4 text-stone-600">Steel joists @ 400 mm - 610 mm c/c</td>
                    <td className="py-3 px-4 text-stone-600">Self-drilling heavy wing-tek screws</td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                    <td className="py-3 px-4 font-bold text-primary">25 mm / 30 mm / 40 mm</td>
                    <td className="py-3 px-4 text-stone-600">~ 31.0 - 50.0 kg</td>
                    <td className="py-3 px-4 text-stone-700">Industrial heavy flooring, server room sub-floors, acoustic barriers</td>
                    <td className="py-3 px-4 text-stone-600">Engineered structural steel framing</td>
                    <td className="py-3 px-4 text-stone-600">Heavy gauge structural fasteners</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Need custom cutting or framing guidance?</strong> We assist contractors and fabrication teams with jointing compounds, PU adhesives, and fastener specifications to prevent thermal movement cracks.
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
