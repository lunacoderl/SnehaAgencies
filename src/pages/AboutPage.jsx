import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Truck, 
  Award, 
  Users, 
  Clock, 
  PhoneCall, 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  FileText, 
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
  BadgeCheck
} from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import { COMPANY } from '../data/company';
import { BRANDS } from '../data/brands';

export default function AboutPage() {
  const milestones = [
    {
      year: "Authorised NCL Distributor",
      title: "Direct Partnership with NCL Group",
      desc: "Appointed as the official distributor for NCL Alltek wall plasters and NCL Bison Panel / Bison Lam cement particle boards across Kakinada and East Godavari."
    },
    {
      year: "Hardware Dealership",
      title: "Spider Locks & Architectural Fittings",
      desc: "Expanded into architectural security and premium finishes with Spider Locks, brass mortice handles, and Spider Zinnia PVD decorative trims."
    },
    {
      year: "Contractor Hub",
      title: "Supplying 1,200+ Projects",
      desc: "From prestigious residential villas and commercial apartments to hospital clean rooms, providing reliable, unadulterated materials."
    },
    {
      year: "Ready Godown Stock",
      title: "Prompt Local Fulfillment",
      desc: "Maintains ready inventory in Kakinada for urgent site requirements, preventing project downtime for contractors and civil engineers."
    }
  ];

  const corePillars = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "100% Genuine Mill Supply",
      desc: "We supply direct from authorized factories with original batch test certificates, official warranty cards, and valid GST tax invoices."
    },
    {
      icon: <Truck className="w-8 h-8 text-secondary" />,
      title: "Fast Site Delivery",
      desc: "Dedicated local transport network catering to Kakinada, Rajahmundry, Samalkot, Pithapuram, Amalapuram, and surrounding Godavari belt."
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Technical Material Guidance",
      desc: "Our team helps architects, interior contractors, and home builders calculate thicknesses, spans, screw pitches, and board consumption."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Wholesale & Project Pricing",
      desc: "Special tiered wholesale slabs and tailored Bill of Quantities (BOQ) discount structures for contractors, builders, and large institutions."
    }
  ];

  return (
    <>
      <SeoHelmet 
        title="About Sneha Agencies | Authorised NCL & Spider Hardware Distributor Kakinada"
        description="Learn about Sneha Agencies (Kakinada), authorised distributor for NCL Bison Panel, Bison Lam, Alltek wall finishes, and Spider locks. Learn about our leadership, GST credentials, and warehouse."
        canonicalUrl="/about"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": COMPANY.name,
            "legalName": `${COMPANY.name} (Prop: ${COMPANY.proprietor})`,
            "taxID": COMPANY.gstin,
            "telephone": COMPANY.primaryPhone,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": COMPANY.address.full,
              "addressLocality": COMPANY.city,
              "addressRegion": COMPANY.state,
              "postalCode": COMPANY.pincode,
              "addressCountry": "IN"
            }
          }
        }}
      />

      <div className="bg-bgLight pt-8 pb-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-textMuted">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-semibold">About Sneha Agencies</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm border border-stone-200/80 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase mb-4">
                  <BadgeCheck className="w-4 h-4" />
                  Kakinada's Trusted Building Partner
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
                  Delivering Quality Materials That Form The Backbone Of Modern Structures
                </h1>
                <p className="text-base sm:text-lg text-textMuted leading-relaxed mb-6">
                  Founded under the leadership of <strong className="text-textDark font-semibold">Sri P. Satyanarayana Murthy</strong>, <strong className="text-primary font-semibold">Sneha Agencies (స్నేహ ఏజెన్సీస్)</strong> has grown to become East Godavari's most reputable distributor of high-performance cement particle boards, decorative laminates, acrylic wall plasters, and premium architectural hardware.
                </p>

                {/* Highlights pill grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 mb-8">
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="block text-2xl font-extrabold text-primary font-heading">15+</span>
                    <span className="text-xs text-textMuted font-medium">Years Serving Andhra</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="block text-2xl font-extrabold text-secondary font-heading">100%</span>
                    <span className="text-xs text-textMuted font-medium">Genuine NCL & Spider</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 col-span-2 sm:col-span-1">
                    <span className="block text-2xl font-extrabold text-accent font-heading">1,200+</span>
                    <span className="text-xs text-textMuted font-medium">Projects Supplied</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link 
                    to="/quote" 
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-md hover:bg-primary/95 transition-all transform hover:-translate-y-0.5"
                  >
                    Request Project Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a 
                    href={`https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent('Hi Sneha Agencies, I would like to learn more about your product range and pricing.')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-secondary text-white font-semibold text-sm shadow-md hover:bg-secondary/95 transition-all transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Verified Business Credential Card */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-stone-700 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-stone-700 pb-4 mb-5">
                    <div>
                      <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">Official Credentials</span>
                      <h3 className="font-heading text-lg font-bold text-white">Commercial Registration</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-400">
                      <Building2 className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-stone-400 block text-xs">Trade Name:</span>
                      <strong className="text-stone-100 font-semibold text-base">{COMPANY.name} (స్నేహ ఏజెన్సీస్)</strong>
                    </div>

                    <div>
                      <span className="text-stone-400 block text-xs">Proprietor:</span>
                      <span className="text-stone-200 font-medium">{COMPANY.proprietor}</span>
                    </div>

                    <div className="p-3 rounded-lg bg-stone-800/80 border border-stone-700">
                      <span className="text-stone-400 block text-xs mb-0.5">Goods and Services Tax ID (GSTIN):</span>
                      <span className="font-mono text-sm sm:text-base font-bold text-amber-300 tracking-wider">
                        {COMPANY.gstin}
                      </span>
                    </div>

                    <div>
                      <span className="text-stone-400 block text-xs">Authorised Distribution Status:</span>
                      <span className="text-stone-200 font-medium block">
                        • NCL Group (Alltek & Bison Panel Division)<br />
                        • Spider Architectural Hardware & Zinnia Trims
                      </span>
                    </div>

                    <div className="pt-2 border-t border-stone-700/80">
                      <span className="text-stone-400 block text-xs">Showroom & Warehouse:</span>
                      <p className="text-stone-300 text-xs leading-relaxed mt-0.5">
                        {COMPANY.address.full}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Why Choose Sneha Agencies</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-textDark mt-1">
              Built on Trust, Direct Factory Pricing & Prompt Fulfillment
            </h2>
            <p className="text-sm text-textMuted mt-2">
              We eliminate multiple middle-man tiers to offer builders and homeowners direct factory accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 p-3 bg-stone-50 rounded-xl inline-block">
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-textDark mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Distribution Portfolio & Brands */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Authorised Partnerships</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mt-1">
                  Our Direct Brand Alliances
                </h2>
                <p className="text-sm text-textMuted mt-1">
                  We are direct stockists and authorised distributors for India's foremost infrastructure and hardware brands.
                </p>
              </div>
              <Link 
                to="/brands" 
                className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors"
              >
                View All Brand Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BRANDS.map((brand) => (
                <div 
                  key={brand.id}
                  className="rounded-2xl p-6 border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-primary/40 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-stone-200 text-stone-700">
                      {brand.distributorStatus}
                    </span>
                    <span className="text-xs text-textMuted">{brand.country}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-textDark group-hover:text-primary transition-colors mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-textMuted line-clamp-3 mb-4 leading-relaxed">
                    {brand.description}
                  </p>
                  <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                    <span className="text-textMuted font-medium">{brand.productsCount} Products Catalogued</span>
                    <Link 
                      to={`/products?brand=${brand.id}`}
                      className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Browse Range &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showroom & Warehouse Presence */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-primary text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2 block">
                  Local Touchpoint & Godown
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
                  Visit Our Kakinada Showroom & Experience Material Samples
                </h2>
                <p className="text-sm sm:text-base text-stone-200 mb-6 leading-relaxed">
                  Choosing the right thickness of Bison Panel or feeling the weight of a Spider Solid Brass Mortice Handle is best done in person. Our central showroom at Nagamalli Thota features complete physical mockups, laminate shade books, and texture boards.
                </p>

                <div className="space-y-3 mb-8 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                    <span className="text-stone-200">
                      {COMPANY.address.full}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-300 shrink-0" />
                    <span className="text-stone-200">
                      Monday to Saturday: {COMPANY.openingHours.monSat} | Sunday: {COMPANY.openingHours.sun}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-5 h-5 text-amber-300 shrink-0" />
                    <span className="text-stone-200">
                      Call our desk: <a href={`tel:${COMPANY.primaryPhoneRaw}`} className="underline font-semibold hover:text-white">{COMPANY.primaryPhone}</a> or <a href={`tel:${COMPANY.secondaryPhoneRaw}`} className="underline font-semibold hover:text-white">{COMPANY.secondaryPhone}</a>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact" 
                    className="px-6 py-3 rounded-xl bg-amber-400 text-stone-900 font-bold text-sm hover:bg-amber-300 transition-colors shadow-md"
                  >
                    Get Showroom Directions
                  </Link>
                  <Link 
                    to="/quote" 
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                  >
                    Submit BOQ for Estimate
                  </Link>
                </div>
              </div>

              {/* Showroom highlights list */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
                <h3 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  What You Can Experience In-Person
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-stone-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Complete thickness sample stack for Bison Panel (6mm to 40mm).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Bison Lam wooden woodgrain and plain color swatch book.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Working lock demo boards for Spider AZ41E / AZ42E mortice handles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Spider Zinnia PVD mirror and hairline stainless steel trim display.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Alltek Superfine, Fine, and Exterior roller-applied texture panels.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
