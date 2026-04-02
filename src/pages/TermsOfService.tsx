import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, ShieldCheck, Scale, AlertCircle, ShoppingBag, CreditCard, Truck } from 'lucide-react';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | LuxLeather Premium Handcrafted Leather Goods</title>
        <meta name="description" content="Read LuxLeather's terms of service and our commitment to quality and customer satisfaction. Comprehensive terms for shopping with us." />
      </Helmet>

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-800 mx-auto mb-6">
              <Scale size={32} />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Terms of Service</h1>
            <p className="text-lg text-slate-600">
              Last Updated: March 31, 2026. Please read these terms carefully.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <FileText className="text-amber-800" size={24} /> 1. Agreement to Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing or using our website (the "Site"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <ShoppingBag className="text-amber-800" size={24} /> 2. Purchase & Orders
              </h2>
              <p className="text-slate-600 leading-relaxed">
                All orders placed through the Site are subject to our acceptance. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. Prices for our products are subject to change without notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <CreditCard className="text-amber-800" size={24} /> 3. Payment Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We accept major credit cards and other secure payment methods. You represent and warrant that you have the legal right to use any credit card(s) or other payment method(s) utilized in connection with any purchase.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Truck className="text-amber-800" size={24} /> 4. Shipping & Delivery
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Delivery times are estimates and not guaranteed. LuxLeather is not responsible for delays caused by customs, natural disasters, or carrier strikes. Risk of loss and title for items purchased pass to you upon delivery to the carrier.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <ShieldCheck className="text-amber-800" size={24} /> 5. Intellectual Property
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The Site and its original content, features, and functionality are owned by LuxLeather and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <AlertCircle className="text-amber-800" size={24} /> 6. Limitation of Liability
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "In no event shall LuxLeather, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Site."
                </p>
              </div>
            </section>

            <section className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
              <h2 className="text-xl font-bold text-amber-900 mb-4">7. Governing Law</h2>
              <p className="text-sm text-amber-800 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of Italy, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
