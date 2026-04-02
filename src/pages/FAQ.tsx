import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What type of leather do you use?",
    answer: "We exclusively use premium full-grain leather, which is the highest quality part of the hide. It's durable, develops a beautiful patina over time, and maintains its strength for decades."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 5-7 business days within Europe and 10-14 business days internationally. Express options are available at checkout."
  },
  {
    question: "Do you offer custom sizing?",
    answer: "Yes, for our leather jackets and bespoke footwear, we offer a made-to-measure service. Please contact our concierge team for more details."
  },
  {
    question: "How should I care for my leather goods?",
    answer: "We recommend using a high-quality leather conditioner every 3-6 months. Avoid direct sunlight and moisture. Check our full Leather Care Guide for detailed instructions."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unworn items in their original packaging. Custom-made items are non-refundable but can be adjusted if needed."
  }
];

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | LuxLeather Premium Handcrafted Leather Goods</title>
        <meta name="description" content="Find answers to common questions about LuxLeather's products, shipping, returns, and leather care." />
      </Helmet>

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-800 mx-auto mb-6">
              <HelpCircle size={32} />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-600">
              Everything you need to know about our products and services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group cursor-pointer hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="font-bold text-slate-900">{faq.question}</h3>
                  <ChevronDown size={20} className="text-slate-400 group-hover:text-amber-800 transition-colors" />
                </div>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
