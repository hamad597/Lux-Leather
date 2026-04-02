import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'The Art of Hand-Stitching Full-Grain Leather',
    excerpt: 'Discover why traditional hand-stitching techniques remain the gold standard for durability and aesthetic appeal in premium leather goods.',
    author: 'Marco Rossi',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&h=400&auto=format&fit=crop',
    category: 'Craftsmanship'
  },
  {
    id: 2,
    title: 'How to Care for Your Vegetable-Tanned Leather',
    excerpt: 'Learn the essential steps to maintain the patina and longevity of your vegetable-tanned leather products for decades to come.',
    author: 'Elena Vance',
    date: 'March 10, 2026',
    image: 'https://images.unsplash.com/photo-1524290266577-994f82236560?q=80&w=800&h=400&auto=format&fit=crop',
    category: 'Leather Care'
  },
  {
    id: 3,
    title: 'The History of the Classic Leather Biker Jacket',
    excerpt: 'From military utility to cultural icon, we trace the evolution of the leather jacket through the decades of modern fashion.',
    author: 'Jordan Smith',
    date: 'March 5, 2026',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&h=400&auto=format&fit=crop',
    category: 'Style Heritage'
  }
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Journal | LuxLeather Insights on Premium Craftsmanship</title>
        <meta name="description" content="Read the LuxLeather journal for insights on traditional leather craftsmanship, care guides, and the history of iconic leather styles." />
      </Helmet>

      <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold text-amber-800 uppercase tracking-widest">Our Journal</h2>
            <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Craft, Care & Culture</h1>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Explore our latest articles on the art of leatherworking, essential maintenance tips, and the rich heritage of leather fashion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-800 text-white text-[10px] font-bold uppercase rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1 font-medium uppercase tracking-wider"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1 font-medium uppercase tracking-wider"><User size={14} /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 hover:text-amber-800 transition-colors leading-tight">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-amber-800 font-bold text-sm hover:gap-3 transition-all uppercase tracking-widest"
                  >
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
