import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Home, ShoppingBag, ArrowLeft, Anchor } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Item Not Found | LuxLeather</title>
      </Helmet>

      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 overflow-hidden relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 filter blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/5 filter blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-2xl w-full text-center relative z-10 backdrop-blur-sm p-12 rounded-[3rem] border border-white/50 bg-white/30 shadow-2xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-6 flex justify-center"
          >
            <div className="w-24 h-24 bg-slate-900 rounded-2xl flex items-center justify-center text-amber-500 shadow-2xl rotate-3">
              <Anchor size={48} />
            </div>
          </motion.div>

          <div className="space-y-4 mb-12">
            <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-2">
              404
            </h1>
            <h2 className="text-3xl font-serif text-slate-800 italic">
              A Lost Masterpiece
            </h2>
            <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
              The page you are looking for has been archived or never existed in our collection. Let's get you back to the fine craftsmanship.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/"
              className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-amber-800 transition-all shadow-[0_20px_40px_rgba(15,23,42,0.15)] hover:-translate-y-1 active:scale-95"
            >
              <Home size={20} />
              Go Back Home
            </Link>
            <Link
              to="/shop"
              className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 border border-slate-100 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-sm hover:border-slate-300 hover:-translate-y-1 active:scale-95"
            >
              <ShoppingBag size={20} />
              Visit Collection
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200/50">
            <button 
              onClick={() => window.history.back()}
              className="text-slate-400 hover:text-amber-800 transition-colors flex items-center gap-2 mx-auto text-xs font-bold uppercase tracking-widest group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Previous Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
