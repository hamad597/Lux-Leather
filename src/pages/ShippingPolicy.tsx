import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Globe, ShieldCheck, Clock } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <>
      <Helmet>
        <title>Shipping Policy | LuxLeather Premium Handcrafted Leather Goods</title>
        <meta name="description" content="Learn about LuxLeather's shipping methods, delivery times, and international shipping options for our premium leather products." />
      </Helmet>

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-800 mx-auto mb-6">
              <Truck size={32} />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Shipping Policy</h1>
            <p className="text-lg text-slate-600">
              Handcrafted quality, delivered with care to your doorstep.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Globe className="text-amber-800" size={24} /> International Shipping
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We are proud to offer worldwide shipping from our studio in Florence, Italy. We partner with premium carriers like DHL Express and FedEx to ensure your handcrafted leather goods arrive safely and promptly, no matter where you are in the world.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Clock className="text-amber-800" size={24} /> Processing & Delivery Times
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">Standard Delivery</h3>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Europe: 3-5 business days</li>
                    <li>• North America: 7-10 business days</li>
                    <li>• Rest of World: 10-14 business days</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">Express Delivery</h3>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Europe: 1-2 business days</li>
                    <li>• North America: 2-4 business days</li>
                    <li>• Rest of World: 3-5 business days</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <ShieldCheck className="text-amber-800" size={24} /> Shipping Insurance & Tracking
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Every LuxLeather shipment is fully insured against loss or damage during transit. Once your order is dispatched, you will receive a confirmation email containing a tracking number, allowing you to monitor your package's journey in real-time.
              </p>
            </section>

            <section className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
              <h2 className="text-xl font-bold text-amber-900 mb-4">Customs, Duties & Taxes</h2>
              <p className="text-sm text-amber-800 leading-relaxed">
                Please note that international orders may be subject to import duties and taxes once the shipment reaches your country. These charges are the responsibility of the recipient. LuxLeather has no control over these charges and cannot predict their amount.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
