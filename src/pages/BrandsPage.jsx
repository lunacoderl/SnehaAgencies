import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Layers, 
  FileText, 
  PhoneCall, 
  MessageCircle,
  ExternalLink,
  Sparkles,
  BadgeCheck
} from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import { BRANDS } from '../data/brands';
import { COMPANY } from '../data/company';

export default function BrandsPage() {
  return (
    <>
      <SeoHelmet 
        title="Authorised Brands | NCL Bison Panel, Alltek, Spider Locks & Zinnia Trims | Sneha Agencies"
        description="Official distributor and stockist for NCL Bison Panel, NCL Bison Lam, NCL Alltek wall plasters, Spider Locks & Architectural Hardware, and Spider Zinnia PVD trims in Kakinada."
        canonicalUrl="/brands"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Authorised Brands - Sneha Agencies",
          "description": "NCL Group and Spider Locks authorised building materials and hardware brands.",
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
            <span className="text-primary font-semibold">Authorised Brands</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-stone-200/80 relative overflow-hidden">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wide uppercase mb-3">
                <BadgeCheck className="w-4 h-4" />
                Direct Mill Supply Guarantee
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
                Authorised Distributor For India's Foremost Infrastructure Brands
              </h1>
              <p className="text-base sm:text-lg text-textMuted leading-relaxed mb-6">
                Sneha Agencies holds direct, accredited distributor relationships with manufacturers. Every sheet of Bison Panel, bag of Alltek Putty, and Spider Mortice lock is 100% authentic, accompanied by official GST tax invoices and manufacturer warranties.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  to="/products" 
                  className="px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow hover:bg-primary/95 transition-all"
                >
                  Explore All Catalogued Products
                </Link>
                <Link 
                  to="/quote" 
                  className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-textDark font-semibold text-sm border border-stone-200 transition-colors"
                >
                  Request Brand Wholesale Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Authenticity Guarantee Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white mb-1">Zero Counterfeits</h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Direct mill consignments ensure you never receive substandard replicas or diluted mixes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-400/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white mb-1">Full ITC GST Billing</h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    100% compliant tax invoices under GSTIN <span className="font-mono text-amber-300">37AAXFS3750J1ZG</span> for contractors to claim input tax credits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-400/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white mb-1">Manufacturer Warranty</h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Full manufacturer support on mechanical warranties for Spider locks and technical certifications for NCL boards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Brand Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="space-y-10">
            {BRANDS.map((brand, index) => (
              <div 
                key={brand.id}
                id={brand.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Brand Overview */}
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {brand.distributorStatus}
                      </span>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                        Origin: {brand.country} • Est. {brand.established}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-textDark mb-3">
                      {brand.name}
                    </h2>
                    <p className="text-sm sm:text-base text-textMuted leading-relaxed mb-6">
                      {brand.description}
                    </p>

                    {/* Key Strengths */}
                    <div className="mb-6">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-textDark mb-3">
                        Brand Highlights & Engineering Strengths
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {brand.keyStrengths.map((str, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{str}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certifications and Warranty */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-stone-200 text-xs">
                      <div>
                        <span className="text-textMuted block mb-1">Certifications:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {brand.certifications.map((cert, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-stone-100 font-medium text-stone-700 border border-stone-200">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-textMuted block mb-1">Official Coverage:</span>
                        <span className="font-semibold text-primary">{brand.warranty}</span>
                      </div>
                    </div>
                  </div>

                  {/* Brand Actions & Catalog download card */}
                  <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-base font-bold text-textDark mb-2">
                        Explore {brand.name} Products
                      </h3>
                      <p className="text-xs text-textMuted mb-4">
                        We stock complete product lines with ready dispatch from our Kakinada warehouse.
                      </p>

                      <div className="space-y-2 mb-6">
                        {brand.keyCategories.map((cat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-medium text-stone-700 p-2 rounded-lg bg-white border border-stone-200/80">
                            <Layers className="w-4 h-4 text-primary shrink-0" />
                            <span>{cat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-stone-200">
                      <Link 
                        to={`/products?brand=${brand.id}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary/95 transition-all shadow-sm"
                      >
                        View {brand.name} Catalog
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      {brand.catalogDownload && (
                        <a 
                          href={brand.catalogDownload}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 text-xs font-semibold border border-stone-300 transition-colors"
                        >
                          <Download className="w-4 h-4 text-stone-600" />
                          Download Official Price List / Catalog (PDF)
                        </a>
                      )}

                      <Link 
                        to={`/quote?brand=${brand.id}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-primary hover:bg-primary/5 text-xs font-semibold transition-colors"
                      >
                        Request Brand Specific Quotation &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Alliance Deep-Dives */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* NCL Group note */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold font-heading">
                  NCL
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-textDark">About NCL Industries Ltd.</h3>
                  <span className="text-xs text-textMuted">Pioneers of Cement Bonded Particle Boards in India</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Headquartered in Hyderabad, NCL Industries revolutionized Indian construction by introducing Bison Panel with technology from BISON WERKE, Germany. Combining 62% ordinary Portland cement and 28% mineralized wood fibers, it delivers fire, termite, and water resistance unparalleled by conventional plywood.
              </p>
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                <strong>Sneha Agencies' Role:</strong> Official Kakinada distributor supplying full truckloads and retail cut sheets with complete technical documentation.
              </div>
            </div>

            {/* Spider Hardware note */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold font-heading">
                  SP
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-textDark">About Spider Locks & Hardware</h3>
                  <span className="text-xs text-textMuted">High Security Mortice Systems & PVD Trims</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Spider is a premier Indian architectural hardware brand renowned for precision die-cast solid brass mortice handles, heavy-duty deadbolts, and the Spider Zinnia line of 304-grade stainless steel self-adhesive decorative profiles with titanium PVD vacuum coating.
              </p>
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                <strong>Sneha Agencies' Role:</strong> Stockist of master-keyed security cylinders, luxury handle sets, drawer slides, and decorative trims.
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
