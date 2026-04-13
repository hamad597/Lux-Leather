import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, ShieldCheck, FileText, Settings } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function CookiePolicy() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | {siteConfig.name} Premium Handcrafted Leather Goods</title>
        <meta name="description" content={`Learn about ${siteConfig.name}'s cookie policy and how we use cookies to improve your browsing experience.`} />
      </Helmet>

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-800 mx-auto mb-6">
              <Cookie size={32} />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Cookie Policy</h1>
            <p className="text-lg text-slate-600">
              We use cookies to improve your browsing experience and provide you with personalized content.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <ShieldCheck className="text-amber-800" size={24} /> What are Cookies?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and provide you with a better browsing experience.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <FileText className="text-amber-800" size={24} /> How We Use Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We use cookies to analyze website traffic, personalize content, and provide you with relevant advertisements. We also use cookies to remember your shopping cart items and login information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Settings className="text-amber-800" size={24} /> Managing Cookies
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-sm text-slate-600 leading-relaxed">
                  You can manage your cookie preferences in your browser settings. Please note that disabling cookies may affect your browsing experience and some features of our website may not function correctly.
                </p>
              </div>
            </section>

            <section className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
              <h2 className="text-xl font-bold text-amber-900 mb-4">Contact Us</h2>
              <p className="text-sm text-amber-800 leading-relaxed">
                If you have any questions or concerns about our cookie policy, please contact our concierge team at <strong>{siteConfig.contact.email}</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
