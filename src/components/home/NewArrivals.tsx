import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { products } from '@/src/data/products';

export default function NewArrivals() {
  const newArrivals = products.filter(p => p.tag === 'New' || p.tag === 'New Arrival').slice(0, 3);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-amber-800 uppercase tracking-widest">Seasonal Drops</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">New Arrivals for Spring</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Stay ahead of the curve with our latest handcrafted additions. Premium leather essentials for the modern wardrobe, updated weekly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {newArrivals.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-slate-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-amber-500 text-xs font-bold uppercase tracking-widest">{item.category}</p>
                    <h4 className="text-white text-3xl font-extrabold tracking-tight">{item.name}</h4>
                    <Link to={`/product/${item.id}`} className="inline-flex items-center gap-2 text-white text-sm font-bold border-b-2 border-amber-600 pb-1 hover:text-amber-500 hover:border-amber-500 transition-colors">
                      Explore Piece
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
