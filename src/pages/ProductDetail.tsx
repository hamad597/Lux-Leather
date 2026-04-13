import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Heart, ChevronLeft, Shield, Truck, RotateCcw, Share2 } from 'lucide-react';
import { useProducts } from '@/src/context/ProductContext';
import { useCart } from '@/src/context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { products } = useProducts();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-extrabold text-slate-900">Product Not Found</h1>
          <p className="text-slate-500">The product you are looking for does not exist or has been removed.</p>
          <Link to="/shop" className="inline-block px-8 py-4 bg-amber-800 text-white rounded-2xl font-bold hover:bg-amber-900 transition-colors shadow-lg">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white pt-24 pb-24">
      <Helmet>
        <title>{product.name} | LuxLeather Premium Goods</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link to="/" className="hover:text-amber-800 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-amber-800 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                decoding="async"
                loading="eager"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-100 cursor-pointer hover:border-amber-800 transition-colors">
                  <img
                    src={`${product.image}?v=${i}`}
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase rounded-full tracking-wider">
                  {product.category}
                </span>
                <div className="flex items-center gap-4">
                  <button className="p-2 text-slate-400 hover:text-amber-800 transition-colors focus-visible:ring-2 focus-visible:ring-amber-800 rounded-full outline-none" aria-label="Share this product">
                    <Share2 size={20} />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-amber-800 transition-colors focus-visible:ring-2 focus-visible:ring-amber-800 rounded-full outline-none" aria-label="Add to Wishlist">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} aria-hidden="true" />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-700">{product.rating} / 5.0</span>
                <span className="text-sm text-slate-400">({product.reviews} reviews)</span>
              </div>
              <p className="text-3xl font-extrabold text-slate-900">${product.price.toFixed(2)}</p>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-6 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-slate-50 transition-colors text-slate-600 font-bold focus-visible:bg-slate-100 outline-none"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 font-bold text-slate-900 w-16 text-center" aria-live="polite">
                    <span className="sr-only">Quantity: </span>{quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-slate-50 transition-colors text-slate-600 font-bold focus-visible:bg-slate-100 outline-none"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    for (let i = 0; i < quantity; i++) addToCart(product);
                    navigate('/cart');
                  }}
                  className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-amber-800 transition-all shadow-xl hover:shadow-amber-800/20 focus-visible:ring-4 focus-visible:ring-amber-900/30 outline-none"
                  aria-label={`Add ${quantity} ${product.name} to cart`}
                >
                  <ShoppingCart size={20} /> Add to Cart
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-amber-800">
                  <Shield size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Lifetime Warranty</p>
                  <p className="text-[10px] text-slate-400">On all leather goods</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-amber-800">
                  <Truck size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Free Shipping</p>
                  <p className="text-[10px] text-slate-400">Orders over $150</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-amber-800">
                  <RotateCcw size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Easy Returns</p>
                  <p className="text-[10px] text-slate-400">30-day return policy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <section className="pt-24 border-t border-slate-100">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-amber-800 uppercase tracking-widest">You May Also Like</h2>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">Related Products</h3>
            </div>
            <Link to="/shop" className="text-amber-800 font-bold hover:underline">View All</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{p.category}</p>
                  <h4 className="font-bold text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-1">{p.name}</h4>
                  <p className="font-extrabold text-slate-900">${p.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
