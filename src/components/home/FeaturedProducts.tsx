import React from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/src/context/CartContext';
import { useProducts } from '@/src/context/ProductContext';

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const { products } = useProducts();
  const featuredProducts = products.filter(p => p.tag).slice(0, 8);

  return (
    <section className="py-24 bg-white" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-amber-800 uppercase tracking-widest">Premium Selection</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">Handcrafted Leather Goods</h3>
            <p className="text-slate-500 max-w-xl">
              Explore our most popular and highly-rated leather items, each piece telling a unique story of craftsmanship and quality.
            </p>
          </div>
          <Link to="/shop" className="text-amber-800 font-bold hover:text-amber-900 transition-colors flex items-center gap-2 group">
            Explore Full Collection <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                <Link to={`/product/${product.id}`} className="absolute inset-0 z-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </Link>
                {product.tag && (
                  <div className="absolute top-4 left-4 z-10 pointer-events-none">
                    <span className="px-3 py-1 bg-amber-800/90 backdrop-blur-sm text-amber-50 text-[10px] font-bold uppercase rounded-full shadow-sm">
                      {product.tag}
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-amber-800 hover:text-white transition-colors" aria-label="Add to Wishlist">
                    <Heart size={18} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-amber-800 transition-colors shadow-xl"
                  >
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{product.category}</p>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h4>
                <p className="text-lg font-extrabold text-slate-900">${product.price.toFixed(2)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
