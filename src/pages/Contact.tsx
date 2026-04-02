import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | LuxLeather Premium Handcrafted Leather Goods</title>
        <meta name="description" content="Get in touch with LuxLeather. Our concierge team is here to assist you with any inquiries about our handcrafted leather products." />
      </Helmet>

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Get in Touch</h1>
                <p className="text-lg text-slate-600 max-w-md">
                  Have questions about our craftsmanship or need assistance with an order? Our team is here to help.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-800 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Our Studio</h3>
                    <p className="text-slate-600">789 Artisan Lane, Heritage District<br />Florence, Italy</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-800 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+39 055 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-800 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">concierge@luxleather.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800 transition-all bg-white"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800 transition-all bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800 transition-all bg-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800 transition-all bg-white resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-amber-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-amber-900 transition-all shadow-lg shadow-amber-900/20"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
