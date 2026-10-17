import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import { COMPANY } from '../data/company';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SeoHelmet 
        title="Privacy Policy | Sneha Agencies Kakinada"
        description="Privacy policy and data protection terms for Sneha Agencies website visitors, catalogue inquiries, and quotation requests."
        canonicalUrl="/privacy-policy"
      />

      <div className="bg-bgLight pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-textMuted">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-semibold">Privacy Policy</span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200 shadow-sm space-y-8 text-stone-700 leading-relaxed text-sm">
            <header className="border-b border-stone-200 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                Legal & Data Governance
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-primary mb-2">
                Privacy Policy
              </h1>
              <p className="text-xs text-textMuted">
                Effective Date: April 15, 2026 | Last Updated: October 2026
              </p>
            </header>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">1. Overview & Commitment</h2>
              <p>
                Sneha Agencies ("we," "us," or "our"), operating under the proprietorship of Sri P. Satyanarayana Murthy (GSTIN: {COMPANY.gstin}) at Lakshmi Nilayam, Nagamalli Thota, Kakinada - 533003, Andhra Pradesh, respects your personal privacy. This policy outlines how we collect, handle, and safeguard information provided by visitors and commercial clients using our website.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">2. Information We Collect</h2>
              <p className="mb-2">We collect only necessary information to facilitate commercial building material quotations, catalogue downloads, and logistical fulfillment:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Contact Identifiers:</strong> Name, business or trade entity name, mobile telephone number, email address.</li>
                <li><strong>Project Context:</strong> Delivery town or site location, civil role (homeowner, contractor, architect, trader), requested material specifications, and uploaded architectural drawings or Bill of Quantities (BOQ).</li>
                <li><strong>Technical Interaction Signals:</strong> Non-personally identifiable browser metadata, screen dimensions, and anonymous cookie tokens used strictly to remember session preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">3. How Your Information is Used</h2>
              <p className="mb-2">We strictly utilize client data to conduct authentic business operations:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Generating and delivering tailored wholesale price quotations and invoices.</li>
                <li>Responding to WhatsApp or telephonic inquiries regarding Bison Panel, Alltek, or Spider Hardware availability.</li>
                <li>Dispatching material consignments to customer site addresses via local transport.</li>
                <li>Issuing GST compliant B2B tax invoices for Input Tax Credit (ITC) reconciliation.</li>
              </ul>
              <div className="mt-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs">
                <strong>Zero Commercial Resale:</strong> Sneha Agencies does not rent, trade, or monetize customer contact data with third-party marketing telemarketers or external advertising networks.
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">4. Cookies & Analytics</h2>
              <p>
                Our website utilizes lightweight, privacy-focused functional cookies to remember cookie consent selections and preloader states. We do not use intrusive cross-site fingerprinting scripts. You have complete freedom to configure or disable cookies via your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">5. Document & File Confidentiality</h2>
              <p>
                Architectural layouts, site sketches, and BOQ files uploaded through our Quote Request interface are accessed solely by Sneha Agencies' internal estimation team for calculating material volume requirements. They are stored securely and never disclosed publicly.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">6. Grievance & Data Inquiries</h2>
              <p>
                For questions regarding this policy or to request deletion of your contact records from our commercial database, please contact our administrative desk:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                <p><strong>Sneha Agencies (Data Officer)</strong></p>
                <p>Address: {COMPANY.address.full}</p>
                <p>Email: <a href={`mailto:${COMPANY.email}`} className="text-primary font-semibold">{COMPANY.email}</a></p>
                <p>Phone: <a href={`tel:${COMPANY.primaryPhoneRaw}`} className="text-primary font-semibold">{COMPANY.primaryPhone}</a></p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
