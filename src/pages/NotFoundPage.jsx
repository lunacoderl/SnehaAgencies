import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, PhoneCall, MessageCircle, ArrowLeft, Layers, FileText } from 'lucide-react';
import SeoHelmet from '../components/SeoHelmet';
import { COMPANY } from '../data/company';

export default function NotFoundPage() {
  return (
    <>
      <SeoHelmet 
        title="Page Not Found (404) | Sneha Agencies Kakinada"
        description="The page you requested could not be found. Explore our building materials catalogue or contact Sneha Agencies directly."
        canonicalUrl="/404"
      />

      <div className="bg-bgLight min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm max-w-2xl w-full text-center">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 font-heading font-extrabold text-3xl">
            404
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-textDark mb-3">
            Looking For Building Materials?
          </h1>
          <p className="text-sm text-textMuted max-w-md mx-auto mb-8">
            The link you clicked may have moved or doesn't exist. Explore our full materials catalogue or jump straight to popular sections below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
            <Link 
              to="/products"
              className="p-4 rounded-xl border border-stone-200 hover:border-primary/50 hover:bg-stone-50 transition-all group"
            >
              <Layers className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <strong className="block text-xs font-bold text-textDark">Full Catalogue</strong>
              <span className="text-[11px] text-textMuted">Bison, Alltek, Spider</span>
            </Link>

            <Link 
              to="/applications"
              className="p-4 rounded-xl border border-stone-200 hover:border-primary/50 hover:bg-stone-50 transition-all group"
            >
              <Search className="w-5 h-5 text-secondary mb-2 group-hover:scale-110 transition-transform" />
              <strong className="block text-xs font-bold text-textDark">Applications</strong>
              <span className="text-[11px] text-textMuted">Partitions & ceilings</span>
            </Link>

            <Link 
              to="/quote"
              className="p-4 rounded-xl border border-stone-200 hover:border-primary/50 hover:bg-stone-50 transition-all group"
            >
              <FileText className="w-5 h-5 text-accent mb-2 group-hover:scale-110 transition-transform" />
              <strong className="block text-xs font-bold text-textDark">Request Quote</strong>
              <span className="text-[11px] text-textMuted">Get direct mill pricing</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-stone-200">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-xs sm:text-sm hover:bg-primary/95 transition-all shadow-sm"
            >
              <Home className="w-4 h-4" />
              Back To Homepage
            </Link>
            <a 
              href={`https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent('Hi Sneha Agencies, I need help finding a product on your website.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-semibold text-xs sm:text-sm hover:bg-secondary/95 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
