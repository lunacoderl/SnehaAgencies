import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  FileText, 
  Send, 
  CheckCircle2, 
  UploadCloud, 
  PhoneCall, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Truck, 
  AlertCircle,
  HelpCircle,
  X,
  FileCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import { CATEGORIES } from '../data/categories';
import { BRANDS } from '../data/brands';
import { COMPANY } from '../data/company';

export default function QuotePage() {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get('product') || '';
  const preselectedApp = searchParams.get('app') || '';
  const preselectedBrand = searchParams.get('brand') || '';

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Kakinada',
    customerType: 'Homeowner',
    categories: [],
    details: '',
    timeline: 'Within a week',
    needDelivery: 'Yes'
  });

  // Selected file state (simulation)
  const [attachedFile, setAttachedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Pre-fill categories or details if query parameters exist
  useEffect(() => {
    if (preselectedProduct) {
      setFormData(prev => ({
        ...prev,
        details: `Interested in quote for: ${preselectedProduct}\n` + prev.details
      }));
    } else if (preselectedApp) {
      setFormData(prev => ({
        ...prev,
        details: `Interested in solution for: ${preselectedApp}\n` + prev.details
      }));
    } else if (preselectedBrand) {
      setFormData(prev => ({
        ...prev,
        details: `Interested in materials from: ${preselectedBrand}\n` + prev.details
      }));
    }
  }, [preselectedProduct, preselectedApp, preselectedBrand]);

  const handleCategoryToggle = (catName) => {
    setFormData(prev => {
      const exists = prev.categories.includes(catName);
      if (exists) {
        return { ...prev, categories: prev.categories.filter(c => c !== catName) };
      } else {
        return { ...prev, categories: [...prev.categories, catName] };
      }
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 25 * 1024 * 1024) {
      alert("File size exceeds 25MB limit. Please upload a smaller file or send via WhatsApp.");
      return;
    }

    setAttachedFile({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + " MB",
      type: file.type
    });
  };

  const removeFile = () => {
    setAttachedFile(null);
  };

  const validatePhone = (num) => {
    const clean = num.replace(/[^0-9]/g, '');
    return clean.length >= 10;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = 'SNEHA-Q-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedQuote({
        refNumber: randomRef,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        ...formData,
        attachedFileName: attachedFile ? attachedFile.name : null
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  // WhatsApp Quote generation
  const handleWhatsAppQuote = () => {
    if (!formData.fullName.trim() || !validatePhone(formData.phone)) {
      setErrorMsg('Please fill in your name and phone number before sending via WhatsApp.');
      return;
    }

    const message = `*NEW QUOTATION REQUEST - SNEHA AGENCIES*
----------------------------------------
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Project City:* ${formData.city}
*Customer Type:* ${formData.customerType}
*Delivery Required:* ${formData.needDelivery}
*Project Timeline:* ${formData.timeline}
*Materials Required:*
${formData.categories.length > 0 ? formData.categories.map(c => `• ${c}`).join('\n') : '• Not specified (consultation needed)'}

*Requirement Details / BOQ:*
${formData.details || 'Please contact me to discuss quantities.'}
${attachedFile ? `\n*Note:* I have a BOQ / Drawing file: ${attachedFile.name}` : ''}
----------------------------------------
Please provide official pricing and availability.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY.whatsappRaw}?text=${encoded}`, '_blank');
  };

  return (
    <>
      <SeoHelmet 
        title="Request a Quote & BOQ Estimation | Sneha Agencies Kakinada"
        description="Submit your building materials bill of quantities (BOQ) or request instant pricing for Bison Panel, Bison Lam, Alltek putties, and Spider locks in Kakinada and East Godavari."
        canonicalUrl="/quote"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Request a Quote - Sneha Agencies",
          "description": "Wholesale and project quotation submission for building materials.",
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
            <span className="text-primary font-semibold">Request a Quote</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-stone-200/80 relative overflow-hidden">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase mb-3">
                <FileText className="w-4 h-4" />
                Wholesale & Project Estimations
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
                Get Competitive Factory-Direct Pricing For Your Site
              </h1>
              <p className="text-base sm:text-lg text-textMuted leading-relaxed">
                Whether you need 20 sheets of Bison Panel for an apartment false ceiling, full truckloads for an institutional project, or architectural Spider locks, submit your requirement below for a fast, competitive quotation.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {submittedQuote ? (
            /* Success Card */
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-md max-w-3xl mx-auto text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Quotation Request Received
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-textDark mt-3 mb-2">
                Thank you, {submittedQuote.fullName}!
              </h2>
              <p className="text-sm text-textMuted max-w-lg mx-auto mb-6">
                Your quotation request has been assigned Reference Number <strong className="font-mono text-primary">{submittedQuote.refNumber}</strong>. Our commercial team at Kakinada will review your quantities and reach out within 2 hours with our best wholesale rates.
              </p>

              {/* Quote Summary Box */}
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs sm:text-sm space-y-2 mb-8 max-w-xl mx-auto">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Reference:</span>
                  <span className="font-mono font-bold text-primary">{submittedQuote.refNumber}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Contact Mobile:</span>
                  <span className="font-medium text-stone-800">{submittedQuote.phone}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Project Location:</span>
                  <span className="font-medium text-stone-800">{submittedQuote.city}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Selected Materials:</span>
                  <span className="font-medium text-stone-800">
                    {submittedQuote.categories.length > 0 ? submittedQuote.categories.join(', ') : 'Custom Consultation'}
                  </span>
                </div>
                {submittedQuote.attachedFileName && (
                  <div className="flex justify-between pt-1">
                    <span className="text-stone-500">Attached Drawing/BOQ:</span>
                    <span className="font-medium text-emerald-600">{submittedQuote.attachedFileName}</span>
                  </div>
                )}
              </div>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a 
                  href={`tel:${COMPANY.primaryPhoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow hover:bg-primary/95 transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call Our Desk Directly
                </a>
                <button
                  onClick={handleWhatsAppQuote}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-semibold text-sm shadow hover:bg-secondary/95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send Copy on WhatsApp
                </button>
                <button
                  onClick={() => setSubmittedQuote(null)}
                  className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-sm transition-colors"
                >
                  Submit Another Quote
                </button>
              </div>
            </div>
          ) : (
            /* Main Form Grid */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Form Column */}
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Section 1: Contact Details */}
                  <div>
                    <h2 className="text-base font-bold text-textDark uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">1</span>
                      Your Contact & Project Details
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-textDark mb-1">
                          Full Name / Company Name <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rajesh Varma / Sree Rama Builders"
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-textDark mb-1">
                          Mobile Number (WhatsApp Enabled) <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 98480 12345"
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-textDark mb-1">
                          Email Address (Optional)
                        </label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. contact@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-textDark mb-1">
                          Project Location / Delivery City <span className="text-rose-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Kakinada / Rajahmundry / Samalkot"
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-textDark mb-1">
                          You are enquiring as:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                          {['Homeowner', 'Civil Contractor', 'Interior Designer / Architect', 'Builder', 'Trader / Dealer'].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({ ...formData, customerType: type })}
                              className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition-all ${
                                formData.customerType === type
                                  ? 'bg-primary text-white border-primary shadow-sm'
                                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Material Selection */}
                  <div>
                    <h2 className="text-base font-bold text-textDark uppercase tracking-wider mb-2 flex items-center gap-2 border-b border-stone-200 pb-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">2</span>
                      Materials You Require
                    </h2>
                    <p className="text-xs text-textMuted mb-4">
                      Select all categories that apply to your current site or estimation requirement:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CATEGORIES.map((cat) => {
                        const isSelected = formData.categories.includes(cat.name);
                        return (
                          <div 
                            key={cat.id}
                            onClick={() => handleCategoryToggle(cat.name)}
                            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                              isSelected
                                ? 'bg-primary/5 border-primary shadow-sm'
                                : 'bg-stone-50 border-stone-200 hover:bg-stone-100/70'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              isSelected ? 'bg-primary border-primary text-white' : 'border-stone-400 bg-white'
                            }`}>
                              {isSelected && <CheckCircle2 className="w-4 h-4" />}
                            </div>
                            <div>
                              <strong className="block text-xs font-bold text-textDark">{cat.name}</strong>
                              <span className="text-[11px] text-textMuted leading-tight block">
                                {cat.tagline}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 3: Detailed BOQ / Quantities */}
                  <div>
                    <h2 className="text-base font-bold text-textDark uppercase tracking-wider mb-2 flex items-center gap-2 border-b border-stone-200 pb-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">3</span>
                      Quantities, Specifications & BOQ Upload
                    </h2>
                    <p className="text-xs text-textMuted mb-3">
                      Describe your approximate sheet counts, thicknesses (e.g. 10mm Bison Panel - 50 sheets, 25kg Alltek Putty - 30 bags):
                    </p>

                    <textarea 
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="e.g. 
- 8mm Bison Panel (8x4 ft) - 40 Sheets
- Spider AZ41E Antique Brass Mortice Handle - 12 Sets
- Alltek Superfine Putty 25kg Bags - 20 Bags
- Delivery needed to Rajeswar Nagar, Kakinada"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-xs sm:text-sm font-sans"
                    />

                    {/* File Upload Zone */}
                    <div className="mt-4">
                      <label className="block text-xs font-semibold text-textDark mb-1.5">
                        Attach BOQ / Architectural Drawing (PDF, DWG, JPG, PNG up to 25MB)
                      </label>
                      
                      {attachedFile ? (
                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <FileCheck className="w-6 h-6 text-emerald-600" />
                            <div>
                              <span className="block text-xs font-bold text-stone-800">{attachedFile.name}</span>
                              <span className="text-[11px] text-stone-500">{attachedFile.size}</span>
                            </div>
                          </div>
                          <button 
                            type="button" 
                            onClick={removeFile}
                            className="p-1 rounded-lg hover:bg-emerald-200/50 text-stone-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <label className="border-2 border-dashed border-stone-300 hover:border-primary/50 bg-stone-50/50 hover:bg-stone-50 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors">
                          <UploadCloud className="w-8 h-8 text-stone-400 mb-2" />
                          <span className="text-xs font-semibold text-textDark">
                            Click to upload or drag and drop your BOQ sheet
                          </span>
                          <span className="text-[11px] text-textMuted mt-0.5">
                            Auto-calculates bulk contractor pricing from your schedule
                          </span>
                          <input 
                            type="file" 
                            className="hidden" 
                            accept=".pdf,.dwg,.jpg,.jpeg,.png,.xlsx,.xls,.doc,.docx"
                            onChange={handleFileUpload}
                          />
                        </label>
                      )}
                    </div>
                  </div>

                  {/* Section 4: Timeline & Delivery */}
                  <div>
                    <h2 className="text-base font-bold text-textDark uppercase tracking-wider mb-2 flex items-center gap-2 border-b border-stone-200 pb-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">4</span>
                      Delivery & Timeline
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-textDark mb-1">
                          When do you need the materials?
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm bg-white"
                        >
                          <option value="Immediate (within 24-48 hrs)">Immediate (within 24-48 hrs)</option>
                          <option value="Within a week">Within a week</option>
                          <option value="Within 15-30 days">Within 15-30 days</option>
                          <option value="Planning stage / Just budgeting">Planning stage / Just budgeting</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-textDark mb-1">
                          Do you require site transportation/unloading?
                        </label>
                        <select
                          value={formData.needDelivery}
                          onChange={(e) => setFormData({ ...formData, needDelivery: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm bg-white"
                        >
                          <option value="Yes (Need Site Delivery)">Yes (Need Site Delivery)</option>
                          <option value="No (Self Pick-up from Kakinada Godown)">No (Self Pick-up from Kakinada Godown)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-bold text-sm shadow-md hover:bg-primary/95 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Your Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Request for Official Quote
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppQuote}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-secondary text-white font-bold text-sm shadow-md hover:bg-secondary/95 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Instant WhatsApp Quote
                    </button>
                  </div>
                </form>
              </div>

              {/* Sidebar Help & Guarantees */}
              <div className="lg:col-span-4 space-y-6">
                {/* Why Sneha Agencies Quote */}
                <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-textDark mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    Why Request From Sneha Agencies?
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">
                        1
                      </div>
                      <div>
                        <strong className="block text-textDark">Wholesale Mill Tier Rates</strong>
                        <span className="text-textMuted text-xs">Direct authorised distributor margin for civil contractors and builders.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0 font-bold">
                        2
                      </div>
                      <div>
                        <strong className="block text-textDark">Zero Transit Edge Damage</strong>
                        <span className="text-textMuted text-xs">Carefully palletized cement boards with corner guards for safe arrival.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 font-bold">
                        3
                      </div>
                      <div>
                        <strong className="block text-textDark">100% ITC Eligible GST Invoicing</strong>
                        <span className="text-textMuted text-xs">Registered under GSTIN 37AAXFS3750J1ZG for seamless tax credit.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 font-bold">
                        4
                      </div>
                      <div>
                        <strong className="block text-textDark">Fast Response</strong>
                        <span className="text-textMuted text-xs">Quotations provided within 2-4 business hours.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Phone Assistance */}
                <div className="bg-stone-900 text-white rounded-3xl p-6 border border-stone-800 shadow-md">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Prefer Speaking Directly?
                  </span>
                  <h4 className="font-heading text-lg font-bold text-white mb-2">
                    Commercial Desk Hotline
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed mb-4">
                    Speak directly with Sri P. Satyanarayana Murthy or our sales engineers for emergency site dispatches:
                  </p>

                  <div className="space-y-2">
                    <a 
                      href={`tel:${COMPANY.primaryPhoneRaw}`}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 text-stone-900 font-bold text-xs hover:bg-amber-300 transition-colors"
                    >
                      <PhoneCall className="w-4 h-4" />
                      {COMPANY.primaryPhone}
                    </a>
                    <a 
                      href={`tel:${COMPANY.secondaryPhoneRaw}`}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-semibold text-xs border border-stone-700 transition-colors"
                    >
                      <PhoneCall className="w-4 h-4" />
                      {COMPANY.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
