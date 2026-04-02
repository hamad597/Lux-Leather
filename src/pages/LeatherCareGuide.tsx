import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Droplets, Sun, Wind, ShieldCheck } from 'lucide-react';

export default function LeatherCareGuide() {
  return (
    <>
      <Helmet>
        <title>Leather Care Guide | LuxLeather Premium Handcrafted Leather Goods</title>
        <meta name="description" content="Learn how to properly care for your LuxLeather premium leather products. Our guide covers cleaning, conditioning, and storage tips." />
      </Helmet>

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-800 mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Leather Care Guide</h1>
            <p className="text-lg text-slate-600">
              Preserve the beauty and durability of your handcrafted leather goods for generations.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Droplets className="text-amber-800" size={24} /> Cleaning & Conditioning
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Regularly clean your leather items with a soft, dry cloth to remove dust and dirt. For deeper cleaning, use a high-quality leather cleaner and conditioner every 3-6 months. Apply the conditioner in small, circular motions and allow it to absorb fully before using the item.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Sun className="text-amber-800" size={24} /> Protection from the Elements
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Avoid exposing your leather goods to direct sunlight for extended periods, as this can cause the leather to dry out and fade. Keep your items away from heat sources and moisture. If your leather gets wet, blot it dry with a soft cloth and allow it to air dry naturally.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Wind className="text-amber-800" size={24} /> Proper Storage
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Store your leather items in a cool, dry place.</li>
                  <li>• Use breathable dust bags for long-term storage.</li>
                  <li>• Avoid plastic bags, as they can trap moisture and cause mold.</li>
                  <li>• Keep bags and shoes stuffed with tissue paper to maintain their shape.</li>
                </ul>
              </div>
            </section>

            <section className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
              <h2 className="text-xl font-bold text-amber-900 mb-4">Professional Care</h2>
              <p className="text-sm text-amber-800 leading-relaxed">
                For deep stains or significant damage, we recommend consulting a professional leather specialist. Our concierge team is happy to provide recommendations for trusted leather care professionals in your area.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
