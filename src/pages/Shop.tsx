import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Search, ShoppingCart, Star, X } from 'lucide-react';
import { useProducts } from '@/src/context/ProductContext';
import { useCart } from '@/src/context/CartContext';
import { Link, useParams } from 'react-router-dom';

const categories = ['All', 'Jackets', 'Shoes', 'Belts', 'Bags', 'Accessories'];

export default function Shop() {
  const { category: urlCategory } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();
  const { products } = useProducts();

  useEffect(() => {
    if (urlCategory && categories.includes(urlCategory)) {
      setSelectedCategory(urlCategory);
    } else {
      setSelectedCategory('All');
    }
  }, [urlCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, products]);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <Helmet>
        <title>Shop Premium Leather Goods | LuxLeather</title>
        <meta name="description" content="Browse our extensive collection of handcrafted leather jackets, shoes, belts, and accessories. Premium quality, timeless style." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Collection</h1>
          <p className="text-slate-600 max-w-2xl">
            Discover the finest selection of genuine leather products, meticulously crafted for those who appreciate quality and timeless elegance.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold">
                <Filter size={20} />
                <span>Filters</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Categories</h3>
                  <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 no-scrollbar">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`whitespace-nowrap lg:w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                          selectedCategory === category
                            ? 'bg-amber-800 text-white shadow-md'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-amber-800'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-8 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-sm border border-slate-100 focus:ring-2 focus:ring-amber-800 focus:border-transparent outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      {product.tag && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-amber-800/90 backdrop-blur-sm text-amber-50 text-[10px] font-bold uppercase rounded-full shadow-sm">
                            {product.tag}
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                          onClick={() => addToCart(product)}
                          className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-amber-800 transition-colors shadow-xl"
                        >
                          <ShoppingCart size={18} /> Add to Cart
                        </button>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex justify-between items-start">
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{product.category}</p>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star size={14} fill="currentColor" />
                          <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                        </div>
                      </div>
                      <h4 className="font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                      </h4>
                      <p className="text-slate-500 text-sm line-clamp-2">{product.description}</p>
                      <p className="text-xl font-extrabold text-slate-900">${product.price.toFixed(2)}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-24">
                <p className="text-slate-400 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="mt-4 text-amber-800 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
