import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Gift, Bell } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      setName('');
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Join the Inner Circle | LuxLeather Newsletter</title>
        <meta name="description" content="Sign up for the LuxLeather newsletter to receive exclusive offers, early access to new collections, and expert leather care tips." />
      </Helmet>

      <div className="min-h-screen bg-white pt-32 pb-24 overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-bold uppercase tracking-wider">
                <Sparkles size={16} />
                Exclusive Access
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Join the <span className="text-amber-800 italic">Inner Circle</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Be the first to experience our new collections, receive exclusive member-only offers, and master the art of leather care.
              </p>

              <div className="space-y-6 pt-4">
                {[
                  { icon: <Gift className="text-amber-800" size={24} />, title: "Welcome Gift", desc: "Get 10% off your first order immediately after signing up." },
                  { icon: <Bell className="text-amber-800" size={24} />, title: "Early Access", desc: "Shop our limited-edition drops 24 hours before the general public." },
                  { icon: <ShieldCheck className="text-amber-800" size={24} />, title: "Expert Advice", desc: "Monthly guides on preserving and aging your premium leather pieces." }
                ].map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex gap-4 items-start"
                  >
                    <div className="mt-1">{benefit.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-900">{benefit.title}</h3>
                      <p className="text-slate-500 text-sm">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="User" 
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  Join <span className="text-slate-900 font-bold">12,000+</span> leather enthusiasts
                </p>
              </div>
            </motion.div>

            {/* Right Column: Signup Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-amber-800/5 rounded-[3rem] rotate-3 scale-105 -z-10" />
              
              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-8"
                    >
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-800 mx-auto mb-4">
                          <Mail size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Get Your Invitation</h2>
                        <p className="text-slate-500">No spam, just pure craftsmanship.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                          <input
                            id="name"
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-amber-800 focus:border-transparent outline-none transition-all placeholder:text-slate-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                          <input
                            id="email"
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-amber-800 focus:border-transparent outline-none transition-all placeholder:text-slate-300"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-amber-800 transition-all shadow-xl hover:shadow-amber-900/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                        >
                          {isLoading ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              Join Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>

                      <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest">
                        By signing up, you agree to our <a href="/privacy" className="underline hover:text-amber-800">Privacy Policy</a>
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                        <CheckCircle2 size={64} />
                      </div>
                      <h2 className="text-4xl font-bold text-slate-900">Welcome to the Club!</h2>
                      <p className="text-slate-600 text-lg max-w-xs mx-auto">
                        Check your inbox for your 10% discount code and your first exclusive update.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-amber-800 font-bold hover:underline pt-4"
                      >
                        Back to site
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
