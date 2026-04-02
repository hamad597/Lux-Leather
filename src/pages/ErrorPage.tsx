import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { AlertTriangle, RefreshCcw, Home, Mail } from 'lucide-react';

export default function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>Something Went Wrong | LuxLeather</title>
      </Helmet>

      <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-20">
        <div className="max-w-xl w-full text-center space-y-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="relative inline-block"
          >
            <div className="w-24 h-24 bg-red-50 rounded-3xl flex items-center justify-center text-red-600 shadow-xl shadow-red-900/5 mx-auto -rotate-12">
              <AlertTriangle size={48} />
            </div>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              A Minor <span className="text-amber-800 italic">Imperfection</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-md mx-auto">
              We've encountered an unexpected error. Don't worry, our master craftsmen are already on it.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => window.location.reload()}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-amber-800 transition-all shadow-lg hover:shadow-amber-900/20"
            >
              <RefreshCcw size={20} />
              Try Again
            </button>
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
            >
              <Home size={20} />
              Return Home
            </Link>
          </div>

          <div className="pt-12">
            <Link 
              to="/contact"
              className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2 mx-auto text-sm font-medium"
            >
              <Mail size={16} />
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
