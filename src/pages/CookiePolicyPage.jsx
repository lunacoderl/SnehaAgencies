import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, ShieldCheck, CheckCircle2, Settings } from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import { COMPANY } from '../data/company';

export default function CookiePolicyPage() {
  const handleResetCookies = () => {
    localStorage.removeItem('sneha_cookie_consent');
    sessionStorage.removeItem('sneha_preloader_seen');
    alert("Your cookie preferences have been reset. Reload the page to configure your settings.");
    window.location.reload();
  };

  return (
    <>
      <SeoHelmet 
        title="Cookie Policy | Sneha Agencies Kakinada"
        description="Learn how Sneha Agencies uses strictly necessary and functional cookies to enhance browsing performance and remember your preferences."
        canonicalUrl="/cookie-policy"
      />

      <div className="bg-bgLight pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-textMuted">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-semibold">Cookie Policy</span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200 shadow-sm space-y-8 text-stone-700 leading-relaxed text-sm">
            <header className="border-b border-stone-200 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                User Transparency
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-primary mb-2">
                Cookie Policy
              </h1>
              <p className="text-xs text-textMuted">
                Understanding Local Storage & Session Data | Last Updated: October 2026
              </p>
            </header>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">1. What Are Cookies?</h2>
              <p>
                Cookies and local browser storage entries are small text snippets stored on your device when you browse websites. They enable websites to recall user preferences (such as catalogue filters, cookie consent choices, and animation states) so you don't have to re-enter them on every visit.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">2. Cookies We Utilize</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <h3 className="font-heading text-base font-bold text-textDark mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Strictly Necessary & Functional Cookies
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Essential for website operation. For instance, <code className="bg-stone-200 px-1.5 py-0.5 rounded text-[11px]">sneha_cookie_consent</code> records whether you have accepted our cookie terms, and <code className="bg-stone-200 px-1.5 py-0.5 rounded text-[11px]">sneha_preloader_seen</code> ensures the introductory brand splash screen plays only once per session so your browsing remains lightning-fast.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <h3 className="font-heading text-base font-bold text-textDark mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Anonymous Telemetry & Analytics
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Helps us understand which product categories (e.g. Bison Panel vs Spider Locks) are searched most frequently so we can ensure optimal stock inventory at our Kakinada warehouse. No personal identifying information (PII) is included.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">3. No Third-Party Advertising Trackers</h2>
              <p>
                We do not sell advertising space on our website, nor do we permit third-party advertising brokers or behavioral trackers to track your movement across external websites.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">4. Managing Your Preferences</h2>
              <p className="mb-4">
                You can reset your consent preferences at any time by clicking the button below, or you can manage cookies directly through your web browser's security and privacy settings.
              </p>

              <button
                type="button"
                onClick={handleResetCookies}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-textDark font-semibold text-xs border border-stone-300 transition-colors"
              >
                <Settings className="w-4 h-4 text-stone-600" />
                Reset My Cookie Preferences on this Device
              </button>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-textDark mb-3">5. Contact Us</h2>
              <p>
                For further information about our technology and privacy standards, write to our support team at <a href={`mailto:${COMPANY.email}`} className="text-primary font-semibold">{COMPANY.email}</a>.
              </p>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
