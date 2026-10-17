import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  PhoneCall, 
  MessageCircle, 
  Mail, 
  Clock, 
  Building2, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck,
  Compass,
  ExternalLink,
  HelpCircle
} from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import { COMPANY } from '../data/company';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Product Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "What is Sneha Agencies' authorised relationship with NCL Group?",
      a: "Sneha Agencies is the official appointed distributor for NCL Industries Ltd. across Kakinada and the East Godavari region. We directly distribute NCL Alltek wall plasters and putties, NCL Bison Panel (cement bonded particle boards), and NCL Bison Lam. All consignments are direct from mill with valid manufacturer warranties and test certifications."
    },
    {
      q: "Can I inspect physical samples of Bison Panel or Spider trims before ordering?",
      a: "Yes! You are welcome to visit our showroom at Lakshmi Nilayam, Nagamalli Thota, Kakinada. We have physical sample stacks of Bison Panel (6mm to 40mm), Bison Lam woodgrain swatches, working demo boards of Spider brass mortice locks, and live displays of Spider Zinnia PVD trims."
    },
    {
      q: "Do you supply and transport materials outside Kakinada?",
      a: "Yes. In addition to daily deliveries within Kakinada city, we supply projects across Rajahmundry, Samalkot, Pithapuram, Peddapuram, Mandapeta, Ramachandrapuram, Amalapuram, and surrounding Godavari districts. For full truckloads or large institutional projects, we arrange direct factory dispatch to your site."
    },
    {
      q: "What is the minimum order quantity for Bison Panel and Bison Lam?",
      a: "There is no rigid minimum order for local pickup or retail purchases at our Kakinada godown—contractors can purchase even a single sheet for small renovations. For wholesale site delivery, nominal delivery charges apply based on distance and order volume."
    },
    {
      q: "Can contractors claim GST Input Tax Credit (ITC) on your invoices?",
      a: "Absolutely. Sneha Agencies is a fully GST-registered entity under GSTIN 37AAXFS3750J1ZG. Every order is issued with a complete B2B Tax Invoice detailing HSN codes, enabling contractors and developers to claim 100% of their input tax credits."
    },
    {
      q: "Which Bison Panel thickness is recommended for false ceilings vs exterior cladding?",
      a: "For false ceilings and acoustic baffles, 6mm is the industry standard due to optimal weight and deflection control. For internal partitions, 8mm to 10mm is recommended. For exterior wall cladding exposed to weather and wind loads, 12mm or 16mm board is specified along with corrosion-resistant screws."
    },
    {
      q: "Are Spider locks made of solid brass or zinc alloy?",
      a: "Spider manufactures mortice lock handles in both high-grade solid forged brass (like the AZ41E / AZ42E series) and durable die-cast zinc alloys. The deadbolts and interior latch mechanisms utilize hardened brass components with computer-dimple keys for maximum anti-pick security."
    },
    {
      q: "How does Bison Panel compare to commercial marine plywood?",
      a: "Unlike marine plywood which can still be susceptible to subterranean termites and flame propagation, Bison Panel consists of 62% Portland cement and 28% mineralized wood fiber. It is certified Class 1 Fire Resistant (BS 476 Part 7), 100% termite and borer proof, and will not rot or delaminate in humid coastal environments like Kakinada."
    },
    {
      q: "What finishes are available for Spider Zinnia metal trims?",
      a: "Spider Zinnia stainless steel profiles feature vacuum titanium PVD (Physical Vapor Deposition) coating in 5 luxurious finishes: Mirror Gold, Rose Gold, Hairline Gold, Mirror Black / Charcoal, and Hairline Silver. They are 304-grade and resistant to peeling and oxidation."
    },
    {
      q: "What is the turnaround time for local delivery in Kakinada?",
      a: "For materials stocked in our ready godown (standard Bison Panel sheets, Alltek putties, Spider lock models), orders placed before 1:00 PM are typically dispatched the same afternoon or next morning. Customized prelaminated shades or massive volume dispatches take 2-4 business days."
    },
    {
      q: "Do you supply screws, jointing compounds, and mesh for Bison Panel installation?",
      a: "Yes. Proper installation requires specialized self-drilling countersunk screws, flexible acrylic jointing compounds, and alkali-resistant fiberglass mesh tape. We stock all complementary fixing accessories to guarantee crack-free joints."
    },
    {
      q: "How do I submit an architectural drawing or BOQ for bulk estimation?",
      a: "You can submit your schedule via our 'Request a Quote' page by uploading your PDF/DWG, or you can send it directly to our WhatsApp number at +91 92478 66866. Our estimation team will calculate exact board requirements and optimize sheet cutting layouts."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg("Please provide your name and phone number.");
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*ENQUIRY FOR SNEHA AGENCIES*
----------------------------------------
*Name:* ${formData.name || 'Website Visitor'}
*Phone:* ${formData.phone || 'Not provided'}
*Subject:* ${formData.subject}
*Message:* ${formData.message || 'Please contact me regarding your product range.'}
----------------------------------------`;
    window.open(`https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <SeoHelmet 
        title="Contact Sneha Agencies Kakinada | Showroom Address, Phone, WhatsApp & FAQs"
        description="Get in touch with Sneha Agencies, Kakinada. Visit our showroom at Lakshmi Nilayam, Nagamalli Thota. Call +91 92478 66866 / +91 94401 03653 or chat on WhatsApp. Read FAQs on Bison Panel & Spider hardware."
        canonicalUrl="/contact"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": COMPANY.name,
          "legalName": `${COMPANY.name} (Prop: ${COMPANY.proprietor})`,
          "telephone": COMPANY.primaryPhone,
          "email": COMPANY.email,
          "taxID": COMPANY.gstin,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": COMPANY.address.full,
            "addressLocality": COMPANY.city,
            "addressRegion": COMPANY.state,
            "postalCode": COMPANY.pincode,
            "addressCountry": "IN"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "20:30"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "10:00",
              "closes": "14:00"
            }
          ]
        }}
      />

      <div className="bg-bgLight pt-8 pb-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-textMuted">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-semibold">Contact & Showroom</span>
          </nav>
        </div>

        {/* Hero Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-stone-200/80 relative overflow-hidden">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase mb-3">
                <Building2 className="w-4 h-4" />
                Kakinada Showroom & Distribution Centre
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
                We're Here To Power Your Construction & Renovation
              </h1>
              <p className="text-base sm:text-lg text-textMuted leading-relaxed">
                Connect with our commercial desk, visit our materials showroom at Nagamalli Thota, or request prompt site dispatch across East Godavari.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-base font-bold text-textDark mb-2">Showroom Address</h3>
                <p className="text-xs text-textMuted leading-relaxed">
                  {COMPANY.address.full}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-stone-100">
                <a 
                  href="https://maps.google.com/?q=Nagamalli+Thota+Kakinada+Sneha+Agencies"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <Compass className="w-3.5 h-3.5" />
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>

            {/* Direct Phones */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-base font-bold text-textDark mb-2">Telephone Lines</h3>
                <p className="text-xs text-textMuted leading-relaxed mb-3">
                  Direct contact with sales & dispatch:
                </p>
                <div className="space-y-1 text-sm font-semibold text-textDark">
                  <a href={`tel:${COMPANY.primaryPhoneRaw}`} className="block hover:text-primary">
                    {COMPANY.primaryPhone} (Primary)
                  </a>
                  <a href={`tel:${COMPANY.secondaryPhoneRaw}`} className="block hover:text-primary">
                    {COMPANY.secondaryPhone} (Dispatch)
                  </a>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-stone-100 text-xs text-textMuted">
                Proprietor: <span className="font-medium text-stone-800">{COMPANY.proprietor}</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-base font-bold text-textDark mb-2">WhatsApp Business</h3>
                <p className="text-xs text-textMuted leading-relaxed mb-3">
                  Send sketches, BOQs, or photo queries for instant responses:
                </p>
                <span className="font-semibold text-sm text-emerald-700 block">
                  +91 92478 66866
                </span>
              </div>
              <div className="pt-4 mt-4 border-t border-stone-100">
                <a 
                  href={`https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent('Hi Sneha Agencies, I have an enquiry regarding materials.')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:underline"
                >
                  Start WhatsApp Chat &rarr;
                </a>
              </div>
            </div>

            {/* Hours & GST */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-base font-bold text-textDark mb-2">Showroom Hours</h3>
                <div className="space-y-1 text-xs text-textMuted">
                  <p><strong className="text-stone-700">Mon - Sat:</strong> 9:00 AM - 8:30 PM</p>
                  <p><strong className="text-stone-700">Sunday:</strong> 10:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-stone-100 text-xs">
                <span className="text-textMuted block">GSTIN Registration:</span>
                <span className="font-mono font-bold text-amber-700">{COMPANY.gstin}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Showroom Direction Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Interactive Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-textDark mb-2">
                Send Us A Quick Message
              </h2>
              <p className="text-xs sm:text-sm text-textMuted mb-6">
                Fill out the form below and our team will get in touch shortly, or click WhatsApp to chat immediately.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-heading text-lg font-bold text-textDark mb-1">Message Sent Successfully!</h3>
                  <p className="text-xs text-textMuted mb-4">
                    Thank you, {formData.name}. Our commercial desk has received your note and will contact you at {formData.phone}.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', subject: 'General Product Enquiry', message: '' }); }}
                    className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-textDark mb-1">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. S. Venkat Rao"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-textDark mb-1">Mobile Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 94401 03653"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-textDark mb-1">Email Address</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Optional"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-textDark mb-1">Enquiry Topic</label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm bg-white"
                      >
                        <option value="General Product Enquiry">General Product Enquiry</option>
                        <option value="Bison Panel Thickness Guidance">Bison Panel Thickness Guidance</option>
                        <option value="Spider Locks & Hardware Pricing">Spider Locks & Hardware Pricing</option>
                        <option value="Alltek Texture & Plaster Samples">Alltek Texture & Plaster Samples</option>
                        <option value="Spider Zinnia Trims Catalogue">Spider Zinnia Trims Catalogue</option>
                        <option value="Contractor Bulk Rate / BOQ">Contractor Bulk Rate / BOQ</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-textDark mb-1">Your Message or Site Requirements</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your requirements, approx quantities, or site address..."
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button 
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/95 transition-all shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                    <button 
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-semibold text-sm hover:bg-secondary/95 transition-all shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send via WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Showroom Visit Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-3xl p-6 sm:p-8 border border-stone-700 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Visit Our Kakinada Location
                </span>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  Sneha Agencies (స్నేహ ఏజెన్సీస్)
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                  Conveniently situated in Rajeswar Nagar, Nagamalli Thota. Ample space for vehicle parking and loading of material pickups.
                </p>

                <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700 space-y-3 mb-6 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-stone-200">
                      <strong>67-13-7, Ground Floor, Lakshmi Nilayam</strong><br />
                      Road No : 4, Nagamalli Thota, Rajeswar Nagar,<br />
                      Kakinada - 533003, Andhra Pradesh
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 pt-2 border-t border-stone-700">
                    <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-stone-200 font-mono">
                      +91 92478 66866 / +91 94401 03653
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-stone-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free sample swatches available for contractors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Live working demonstration of mortice handles & locks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>On-the-spot GST invoice & dispatch docket generation</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-700">
                <a 
                  href="https://maps.google.com/?q=Nagamalli+Thota+Road+No+4+Kakinada"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 text-stone-900 font-bold text-xs sm:text-sm hover:bg-amber-300 transition-colors shadow-md"
                >
                  <Compass className="w-4 h-4" />
                  Get Turn-By-Turn Driving Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive FAQ Accordion */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Got Questions?</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-textDark mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-textMuted mt-1">
              Clear answers regarding distribution terms, specifications, and site logistics.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-textDark hover:text-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 rounded-lg bg-stone-100 text-stone-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </>
  );
}
