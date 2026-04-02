import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Home, Search, ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | LuxLeather</title>
      </Helmet>

      <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-20">
        <div className="max-w-xl w-full text-center space-y-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="relative inline-block"
          >
            <div className="text-[12rem] font-black text-slate-50 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-amber-50 rounded-3xl flex items-center justify-center text-amber-800 shadow-xl shadow-amber-900/5 rotate-12">
                <Compass size={48} />
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Lost in the <span className="text-amber-800 italic">Craftsmanship?</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-md mx-auto">
              The page you are looking for seems to have wandered off. Perhaps it's being handcrafted as we speak.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-amber-800 transition-all shadow-lg hover:shadow-amber-900/20"
            >
              <Home size={20} />
              Return Home
            </Link>
            <Link
              to="/shop"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
            >
              <Search size={20} />
              Explore Shop
            </Link>
          </div>

          <div className="pt-12">
            <button 
              onClick={() => window.history.back()}
              className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2 mx-auto text-sm font-medium"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
