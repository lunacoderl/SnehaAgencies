import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ShieldAlert, Truck, CheckCircle2, Scale } from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import { COMPANY } from '../data/company';

export default function TermsPage() {
  return (
    <>
      <SeoHelmet 
        title="Terms of Service & Commercial Conditions | Sneha Agencies Kakinada"
        description="Commercial terms, quotation validity, delivery guidelines, payment terms, and warranty disclaimers for Sneha Agencies building material purchases."
        canonicalUrl="/terms"
      />

      <div className="bg-bgLight pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-textMuted">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-semibold">Terms & Conditions</span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200 shadow-sm space-y-8 text-stone-700 leading-relaxed text-sm">
            <header className="border-b border-stone-200 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                Commercial Agreement
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-primary mb-2">
                Terms of Service & Trade
              </h1>
              <p className="text-xs text-textMuted">
                Applicable to Wholesale, Retail, and Project Supplies | Last Updated: October 2026
              </p>
            </header>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">1. Scope of Website & Catalogue</h2>
              <p>
                The digital catalogue hosted on this website serves as an informational product showcase and specification reference for materials distributed by Sneha Agencies. Due to dynamic market variations in raw material and transport rates, prices displayed or quoted verbally are indicative until formalized in a written proforma invoice or quotation.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">2. Quotation Validity & Pricing</h2>
              <p className="mb-2">
                All written quotations provided by Sneha Agencies are valid for seven (7) to fifteen (15) calendar days from the date of issuance, unless explicitly stated otherwise.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Government tax variations (including GST revisions) occurring after quotation date will be billed as applicable on the date of final tax invoicing.</li>
                <li>Special project volume discounts are tied strictly to the agreed quantities on the Bill of Quantities (BOQ); partial withdrawals may result in standard slab revisions.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">3. Goods & Services Tax (GST) Compliance</h2>
              <p>
                All wholesale and B2B supplies are billed in strict compliance with the Indian Goods and Services Tax Act under GSTIN <strong>{COMPANY.gstin}</strong>. To claim Input Tax Credit (ITC), clients must furnish valid GST credentials and official business trade names prior to dispatch docket generation.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">4. Delivery, Unloading & Site Handover</h2>
              <p className="mb-2">For orders with agreed site delivery:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Consignments will be delivered to accessible motorable roads at the customer's specified site location.</li>
                <li>Unless contracted in writing, unloading charges and vertical shifting (e.g. carrying sheets up multi-storey buildings) are the responsibility of the purchaser's site team.</li>
                <li>The purchaser or their authorized site supervisor must inspect the physical count and exterior condition of sheets, bags, and lock boxes upon delivery before signing the delivery challan.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">5. Inspection, Breakage & Replacement Policy</h2>
              <p>
                In the rare event of transit damage (such as cracked cement board corners or damaged hardware packaging), damages must be noted directly on the delivery challan copy and notified to our dispatch office within 24 hours of delivery with photographic documentation. Verified transit damages will be replaced promptly.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">6. Manufacturer Warranties</h2>
              <p>
                Warranty obligations on branded products (Spider Mortice locks, NCL Bison Panel acoustic/fire ratings, and Alltek plaster durability) are backed directly by their respective manufacturing principals. Sneha Agencies facilitates authorized warranty inspection and replacement processing for all genuine products supplied by our firm.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">7. Jurisdiction</h2>
              <p>
                Any legal disputes arising from commercial contracts or deliveries are subject to the exclusive jurisdiction of the competent civil courts at Kakinada, Andhra Pradesh, India.
              </p>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
