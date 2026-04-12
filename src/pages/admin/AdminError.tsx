import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Terminal, RefreshCcw, LogOut, AlertTriangle, ChevronRight } from 'lucide-react';

export default function AdminError() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Kernel Panic | LuxLeather Admin</title>
      </Helmet>

      <div className="min-h-screen bg-neutral-950 font-mono text-amber-500/80 p-8 flex items-center justify-center">
        <div className="max-w-3xl w-full space-y-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-2 border-amber-900/30 bg-black p-8 rounded-lg shadow-[0_0_50px_rgba(217,119,6,0.1)] relative overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-8 border-b border-amber-900/30 pb-4">
               <Terminal size={18} />
               <span className="text-xs uppercase tracking-widest font-black">System Diagnostic v1.0.4</span>
               <div className="ml-auto flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-900"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-900/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-900/50"></div>
               </div>
            </div>

            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <AlertTriangle className="text-red-600 shrink-0" size={24} />
                  <div className="space-y-1">
                     <h1 className="text-xl font-black uppercase text-red-500">System Fault Detected</h1>
                     <p className="text-xs text-amber-600/60">Module: admin_core_controller.tsx</p>
                  </div>
               </div>

               <div className="bg-amber-950/20 p-4 rounded border border-amber-900/20 space-y-2">
                  <div className="flex gap-2 text-xs">
                     <span className="text-amber-500 font-bold">[!]</span>
                     <span>Memory leak detected in state manager.</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                     <span className="text-amber-500 font-bold">[!]</span>
                     <span>Unauthorized component overlay detected.</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                     <span className="text-red-500 font-bold">[CRITICAL]</span>
                     <span className="text-red-400">Process terminated to protect secure data.</span>
                  </div>
               </div>

               <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => window.location.reload()}
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-amber-600 text-black font-black uppercase tracking-widest rounded hover:bg-amber-500 transition-all text-xs"
                  >
                    <RefreshCcw size={16} />
                    Reboot Terminal
                  </button>
                  <button 
                    onClick={() => navigate('/admin')}
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-black border border-amber-900/50 text-amber-600 font-bold uppercase tracking-widest rounded hover:bg-amber-950/30 transition-all text-xs"
                  >
                    Return to Safe Mode
                    <ChevronRight size={16} />
                  </button>
               </div>
            </div>

            {/* Matrix-like background effect */}
            <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none text-[8px] leading-none">
               {Array.from({length: 10}).map((_, i) => (
                 <div key={i}>010101110101001010101010101</div>
               ))}
            </div>
          </motion.div>

          <footer className="flex justify-between items-center text-[10px] text-amber-900/50 px-2 uppercase tracking-[0.3em]">
             <span>Encrypted Session</span>
             <span>ID: ERR_AD_X902</span>
          </footer>
        </div>
      </div>
    </>
  );
}
