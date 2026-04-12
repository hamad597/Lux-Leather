import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAdmin } from '@/src/context/AdminContext';

export default function Hero() {
  const { heroConfig } = useAdmin();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#1a1410]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-900/10 -skew-x-12 transform origin-top-right -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-800/20 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 text-amber-200 text-xs font-bold uppercase tracking-wider border border-amber-800/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-2 rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            {heroConfig.ribbon}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
            {heroConfig.title}
          </h1>

          <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
            {heroConfig.subtext}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/shop"
              className="px-8 py-4 bg-amber-700 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-amber-800 transition-all hover:scale-105 shadow-lg shadow-amber-900/40"
            >
              Shop Leather Collection <ArrowRight size={20} />
            </Link>
            <Link
              to="/new-arrivals"
              className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold flex items-center gap-2 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              View New Arrivals <ShoppingBag size={20} />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-12 pt-8 border-t border-white/10">
            <div className="min-w-[100px]">
              <p className="text-2xl font-bold text-white">25k+</p>
              <p className="text-sm text-slate-400">Leather Enthusiasts</p>
            </div>
            <div className="min-w-[100px]">
              <p className="text-2xl font-bold text-white">4.9/5</p>
              <p className="text-sm text-slate-400">Customer Rating</p>
            </div>
            <div className="min-w-[100px]">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-sm text-slate-400">Genuine Leather</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-900/20">
            <img
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&h=1000&auto=format&fit=crop"
              alt="Premium handcrafted leather bag showcase"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-800 rounded-2xl -z-10 animate-pulse opacity-50" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 border-4 border-amber-700/30 rounded-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
