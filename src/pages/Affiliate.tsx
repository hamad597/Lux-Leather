import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, DollarSign, BarChart3, Gift, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Affiliate() {
  return (
    <>
      <Helmet>
        <title>Affiliate Program | LuxLeather Premium Goods</title>
        <meta name="description" content="Join the LuxLeather affiliate program and earn commissions by sharing our premium handcrafted leather products with your audience." />
      </Helmet>

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-bold uppercase tracking-wider mb-4"
            >
              <Users size={16} />
              Partner With Us
            </motion.div>
            <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">LuxLeather Affiliate Program</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Share your passion for premium leather craftsmanship and earn up to 15% commission on every referral.
            </p>
            <div className="pt-8">
              <button className="px-8 py-4 bg-amber-800 text-white rounded-full font-bold text-lg hover:bg-amber-900 transition-all shadow-xl hover:shadow-amber-900/20 flex items-center gap-2 mx-auto">
                Apply Now <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: <DollarSign size={32} />,
                title: "High Commissions",
                description: "Earn a competitive 15% commission on all successful referrals with a 30-day cookie window."
              },
              {
                icon: <BarChart3 size={32} />,
                title: "Real-time Tracking",
                description: "Access your personal dashboard to track clicks, conversions, and earnings in real-time."
              },
              {
                icon: <Gift size={32} />,
                title: "Exclusive Perks",
                description: "Get early access to new collections, exclusive discount codes, and seasonal bonuses."
              }
            ].map((benefit, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-amber-200 transition-colors group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-amber-800 mb-6 shadow-sm group-hover:bg-amber-800 group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* How it Works */}
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-800/10 blur-[120px] rounded-full -mr-48 -mt-48" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-16 text-center">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { step: "01", title: "Sign Up", desc: "Fill out our simple application form to join the community." },
                  { step: "02", title: "Promote", desc: "Share your unique link on your blog, social media, or website." },
                  { step: "03", title: "Earn", desc: "Receive payouts monthly for every purchase made through your link." }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <span className="text-5xl font-black text-amber-800/30 font-mono">{item.step}</span>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Affiliate FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "Who can join the program?", a: "We welcome influencers, bloggers, and content creators who share our values of quality and craftsmanship." },
                { q: "When do I get paid?", a: "Commissions are paid out via PayPal or Bank Transfer on the 15th of every month for the previous month's earnings." },
                { q: "Is there a cost to join?", a: "No, joining the LuxLeather Affiliate Program is completely free." }
              ].map((faq, i) => (
                <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl">
                  <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
