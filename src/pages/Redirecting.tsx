import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

export default function Redirecting() {
  const navigate = useNavigate();
  const location = useLocation();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    const redirectTimer = setTimeout(() => {
      const searchParams = new URLSearchParams(location.search);
      const to = searchParams.get('to') || '/';
      navigate(to);
    }, 3500);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate, location]);

  const target = new URLSearchParams(location.search).get('to') || 'Home';

  return (
    <>
      <Helmet>
        <title>Securing Your Connection | LuxLeather</title>
      </Helmet>

      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 overflow-hidden relative">
        {/* Cinematic background elements */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-600/10 filter blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-900/10 filter blur-[120px] rounded-full"></div>

        <div className="max-w-md w-full text-center space-y-12 relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                 className="w-32 h-32 border-2 border-dashed border-amber-500/20 rounded-full"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-amber-600 rounded-3xl flex items-center justify-center text-white shadow-[0_0_50px_rgba(217,119,6,0.3)]">
                   <Lock size={32} />
                 </div>
               </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-2xl font-serif text-white tracking-widest uppercase">
              Preparing <span className="text-amber-500">Lux</span> Access
            </h1>
            <p className="text-slate-400 text-sm font-medium">
              Escorting you to <span className="text-white italic capitalize">"{target.replace('/', '') || 'Home'}"</span> in {countdown}...
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: "0%" }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 3.5, ease: "easeInOut" }}
                   className="h-full bg-amber-600 shadow-[0_0_15px_rgba(217,119,6,0.5)]"
                />
            </div>
            
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 transition-opacity">
               <CheckCircle2 size={12} className="text-amber-500" />
               Authorized Connection Secure
            </div>
          </div>

          <button
            onClick={() => {
              const searchParams = new URLSearchParams(location.search);
              const to = searchParams.get('to') || '/';
              navigate(to);
            }}
            className="text-white/40 hover:text-white transition-colors flex items-center gap-2 mx-auto text-xs font-bold uppercase tracking-widest group pt-8"
          >
            Instant Access
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </>
  );
}
