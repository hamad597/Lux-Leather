import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Loader2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Redirecting() {
  const navigate = useNavigate();
  const location = useLocation();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const redirectTimer = setTimeout(() => {
      const searchParams = new URLSearchParams(location.search);
      const to = searchParams.get('to') || '/';
      navigate(to);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate, location]);

  return (
    <>
      <Helmet>
        <title>Redirecting... | LuxLeather</title>
      </Helmet>

      <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-20">
        <div className="max-w-xl w-full text-center space-y-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="relative inline-block"
          >
            <div className="w-24 h-24 bg-amber-50 rounded-3xl flex items-center justify-center text-amber-800 shadow-xl shadow-amber-900/5 mx-auto">
              <Loader2 size={48} className="animate-spin" />
            </div>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Preparing Your <span className="text-amber-800 italic">Experience</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-md mx-auto">
              We're taking you to your destination in <span className="font-bold text-slate-900">{countdown}</span> seconds.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-400 font-medium pt-4">
            <ShieldCheck size={16} className="text-green-500" />
            Secure Connection Verified
          </div>

          <div className="pt-12">
            <button
              onClick={() => {
                const searchParams = new URLSearchParams(location.search);
                const to = searchParams.get('to') || '/';
                navigate(to);
              }}
              className="text-amber-800 font-bold hover:underline flex items-center gap-2 mx-auto text-sm group"
            >
              Skip Waiting
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
