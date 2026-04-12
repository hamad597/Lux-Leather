import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { RefreshCcw, Home, MessageSquare, AlertCircle } from 'lucide-react';

export default function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>Minor Imperfection | LuxLeather</title>
      </Helmet>

      <div className="min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-50 via-white to-white"></div>
        
        <div className="max-w-2xl w-full text-center relative z-10 p-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="mb-10 flex justify-center"
          >
            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shadow-inner">
              <AlertCircle size={40} />
            </div>
          </motion.div>

          <div className="space-y-6 mb-12">
            <h1 className="text-4xl font-serif text-slate-900 tracking-tight leading-tight">
              A Minor <span className="text-amber-700 italic">Imperfection</span> in the Craft
            </h1>
            <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
              Every masterwork has its mysteries. Our internal precision systems encountered a rare anomaly. We are refining the experience as you wait.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.location.reload()}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl active:scale-95"
            >
              <RefreshCcw size={20} />
              Refurbish Page
            </button>
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all active:scale-95"
            >
              <Home size={20} />
              Return Home
            </Link>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col items-center gap-2">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Seek Assistance</p>
            <Link 
              to="/contact"
              className="text-amber-800 hover:text-amber-900 transition-colors flex items-center gap-2 text-sm font-bold group"
            >
              <MessageSquare size={16} className="group-hover:translate-y-[-2px] transition-transform" />
              Speak with a Specialist
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
