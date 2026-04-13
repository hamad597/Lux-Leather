import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RotateCcw, ShieldCheck, RefreshCw, AlertCircle } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function ReturnsExchanges() {
  return (
    <>
      <Helmet>
        <title>Returns & Exchanges | {siteConfig.name} Premium Handcrafted Leather Goods</title>
        <meta name="description" content={`Learn about ${siteConfig.name}'s returns and exchanges policy for our premium leather products. We offer a 30-day return window for unworn items.`} />
      </Helmet>

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-800 mx-auto mb-6">
              <RotateCcw size={32} />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Returns & Exchanges</h1>
            <p className="text-lg text-slate-600">
              Your satisfaction is our priority. We offer a 30-day return window for all unworn items.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <ShieldCheck className="text-amber-800" size={24} /> 30-Day Return Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We want you to be completely satisfied with your {siteConfig.name} purchase. If for any reason you are not happy with your item, you may return it for a full refund or exchange within 30 days of receiving your order.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <RefreshCw className="text-amber-800" size={24} /> Exchange Process
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Need a different size or color? We offer free exchanges for all items within the 30-day window. Simply contact our concierge team to initiate the exchange process.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <AlertCircle className="text-amber-800" size={24} /> Return Conditions
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Items must be in their original, unworn condition.</li>
                  <li>• Original packaging and tags must be included.</li>
                  <li>• Custom-made or personalized items are non-refundable.</li>
                  <li>• Return shipping costs are the responsibility of the customer unless the item is defective.</li>
                </ul>
              </div>
            </section>

            <section className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
              <h2 className="text-xl font-bold text-amber-900 mb-4">How to Initiate a Return</h2>
              <p className="text-sm text-amber-800 leading-relaxed">
                To start your return or exchange, please email our concierge team at <strong>{siteConfig.contact.email}</strong> with your order number and the reason for your return. We will provide you with further instructions and a return authorization number.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
