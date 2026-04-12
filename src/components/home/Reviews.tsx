import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useAdmin } from '@/src/context/AdminContext';

export default function Reviews() {
  const { reviews } = useAdmin();
  const approvedReviews = reviews.filter(r => r.approved).slice(0, 3);
  
  return (
    <section className="py-24 bg-[#1a1410] overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest">Customer Voices</h2>
          <h3 className="text-4xl font-extrabold text-white tracking-tight">What Our Community Says</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have elevated their lifestyle with our premium handcrafted leather products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approvedReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/10 relative group hover:bg-white/10 transition-all duration-500"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-700 rounded-2xl flex items-center justify-center text-white shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                <Quote size={24} fill="currentColor" className="text-amber-200" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={cn(i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-white/10')}
                  />
                ))}
              </div>

              <p className="text-slate-300 italic mb-8 leading-relaxed">"{review.content}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-900/50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
