import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Lock, Eye, FileText, UserCheck, Bell, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy & GDPR Compliance | LuxLeather Premium Goods</title>
        <meta name="description" content="LuxLeather's comprehensive privacy policy and GDPR compliance statement. Learn how we protect your data and your rights as a consumer." />
      </Helmet>

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-800 mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Privacy Policy & GDPR</h1>
            <p className="text-lg text-slate-600">
              Last Updated: March 31, 2026. Your privacy is our priority.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Globe className="text-amber-800" size={24} /> GDPR Compliance Statement
              </h2>
              <p className="text-slate-600 leading-relaxed">
                LuxLeather is committed to ensuring that your privacy is protected in accordance with the General Data Protection Regulation (GDPR). This policy explains how we collect, use, and safeguard your personal data when you interact with our premium leather goods store.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Lock className="text-amber-800" size={24} /> Data We Collect
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <ul className="text-sm text-slate-600 space-y-3">
                  <li className="flex gap-2"><strong>Identity Data:</strong> Name, username, or similar identifier.</li>
                  <li className="flex gap-2"><strong>Contact Data:</strong> Billing address, delivery address, email address, and telephone numbers.</li>
                  <li className="flex gap-2"><strong>Financial Data:</strong> Bank account and payment card details (processed securely via encrypted gateways).</li>
                  <li className="flex gap-2"><strong>Technical Data:</strong> IP address, login data, browser type and version, time zone setting, and location.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <UserCheck className="text-amber-800" size={24} /> Your Legal Rights
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Request access to your personal data.',
                  'Request correction of your personal data.',
                  'Request erasure of your personal data.',
                  'Object to processing of your personal data.',
                  'Request restriction of processing your personal data.',
                  'Request transfer of your personal data.',
                  'Right to withdraw consent.'
                ].map((right, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <div className="w-2 h-2 bg-amber-800 rounded-full" />
                    <span className="text-sm text-slate-700">{right}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Bell className="text-amber-800" size={24} /> Data Retention
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
              </p>
            </section>

            <section className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
              <h2 className="text-xl font-bold text-amber-900 mb-4">Data Protection Officer</h2>
              <p className="text-sm text-amber-800 leading-relaxed">
                We have appointed a data protection officer (DPO) who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact the DPO at <strong>privacy@luxleather.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
