import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Cpu, Activity } from 'lucide-react';

export default function AdminRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loadingStep, setLoadingStep] = useState(0);

  const steps = [
    "Initializing Secure Terminal...",
    "Verifying Admin Handshake...",
    "Securing Data Stream...",
    "Access Granted."
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setLoadingStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 800);

    const redirectTimer = setTimeout(() => {
      const searchParams = new URLSearchParams(location.search);
      const to = searchParams.get('to') || '/admin/login';
      navigate(to);
    }, 3500);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(redirectTimer);
    };
  }, [navigate, location]);

  return (
    <>
      <Helmet>
        <title>Access Control | LuxLeather Admin</title>
      </Helmet>

      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 font-mono relative overflow-hidden">
        {/* Technical backdrop */}
        <div className="absolute inset-0 opacity-10">
           <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#amber-900 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        
        <div className="max-w-md w-full space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <motion.div 
                animate={{ rotate: 180, scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 border border-amber-500/30 rounded-full flex items-center justify-center"
              />
              <div className="absolute inset-0 flex items-center justify-center text-amber-500">
                 <ShieldCheck size={48} className="animate-pulse" />
              </div>
            </div>

            <div className="space-y-2 text-center">
              <h1 className="text-amber-500 text-xs font-black tracking-[0.5em] uppercase">Security Protocol v4.0</h1>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                 <Activity size={14} className="text-amber-600" />
                 {steps[loadingStep]}
              </div>
            </div>
          </motion.div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl space-y-4">
            <div className="flex justify-between items-center text-[10px] text-slate-500 tracking-widest uppercase">
              <span>Encryption Status</span>
              <span className="text-green-500">Active</span>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 3.5, ease: "linear" }}
                 className="h-full bg-amber-500"
               />
            </div>
            <div className="flex gap-4 pt-2">
               <div className="flex-1 h-12 border border-slate-800 rounded bg-black/40 flex items-center justify-center">
                  <Cpu size={20} className="text-slate-700" />
               </div>
               <div className="flex-1 h-12 border border-slate-800 rounded bg-black/40 flex items-center justify-center">
                  <Lock size={20} className="text-slate-700" />
               </div>
            </div>
          </div>

          <p className="text-slate-600 text-[10px] text-center uppercase tracking-widest animate-pulse">
            Unauthorized access attempts are logged.
          </p>
        </div>
      </div>
    </>
  );
}
