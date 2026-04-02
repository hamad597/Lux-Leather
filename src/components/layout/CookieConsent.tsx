import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-50"
        >
          <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-800/10 blur-3xl rounded-full -mr-16 -mt-16" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-800 rounded-xl flex items-center justify-center text-amber-100">
                  <Cookie size={20} />
                </div>
                <h3 className="font-bold text-lg">Cookie Preferences</h3>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="ml-auto text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                We use cookies to enhance your experience, analyze site traffic, and serve personalized ads. By clicking "Accept All", you consent to our use of cookies. Read our <Link to="/cookies" className="text-amber-500 hover:underline">Cookie Policy</Link>.
              </p>
              
              <div className="flex gap-3">
                <button 
                  onClick={handleAccept}
                  className="flex-1 py-3 bg-amber-800 hover:bg-amber-900 text-white rounded-xl font-bold text-sm transition-colors"
                >
                  Accept All
                </button>
                <button 
                  onClick={handleDecline}
                  className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-sm transition-colors"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
