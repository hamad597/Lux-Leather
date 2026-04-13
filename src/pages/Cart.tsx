import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, ShoppingBag, ArrowRight, ChevronLeft, CreditCard, ShieldCheck, Truck, Tag, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/src/context/CartContext';
import { useAdmin, Promo } from '@/src/context/AdminContext';
import { useCustomerAuth } from '@/src/context/CustomerAuthContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice, totalItems } = useCart();
  const { promos, addOrder } = useAdmin();
  const { currentUser } = useCustomerAuth();
  const navigate = useNavigate();

  const [inputCode, setInputCode] = useState('');
  const [activePromo, setActivePromo] = useState<Promo | null>(null);
  const [promoError, setPromoError] = useState('');

  const handleApplyPromo = () => {
    setPromoError('');
    const foundPromo = promos.find(p => p.code === inputCode.toUpperCase());
    
    if (!foundPromo) {
      setPromoError('Invalid promo code.');
      return;
    }
    if (!foundPromo.active) {
      setPromoError('This promo code is no longer active.');
      return;
    }
    setActivePromo(foundPromo);
    setInputCode('');
  };

  const discount = activePromo 
    ? (activePromo.type === 'percent' ? totalPrice * (activePromo.value / 100) : activePromo.value) 
    : 0;

  const discountedTotal = Math.max(0, totalPrice - discount);
  const shipping = totalItems > 0 ? (discountedTotal > 150 ? 0 : 15) : 0;
  const tax = discountedTotal * 0.08;
  const finalTotal = discountedTotal + shipping + tax;

  const handleCheckout = () => {
    if (!currentUser) {
      alert("Please Sign In or Register to proceed to checkout!");
      navigate('/login');
      return;
    }

    // Generate simulated order
    const simulatedOrderId = 'ORD-' + Math.floor(Math.random() * 1000000);
    addOrder({
      id: simulatedOrderId,
      date: new Date().toISOString(),
      status: 'Pending',
      customer: {
        name: currentUser.name,
        email: currentUser.email
      },
      items: cart.map(c => ({ id: c.id, name: c.name, price: c.price, quantity: 1 })),
      total: finalTotal
    });

    alert(`Order Placed Successfully!\n\nOrder ID: ${simulatedOrderId}\nTotal: $${finalTotal.toFixed(2)}\n\nCheck your Orders in the Admin Panel!`);
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-24 pb-12">
        <div className="text-center space-y-8 max-w-md px-4">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-300">
            <ShoppingBag size={48} />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-slate-900">Your cart is empty</h1>
            <p className="text-slate-500 text-lg">Looks like you haven't added anything to your cart yet. Explore our collection and find something you love.</p>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-800 text-white rounded-2xl font-bold hover:bg-amber-900 transition-all shadow-lg hover:shadow-amber-800/20">
            Start Shopping <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-24">
      <Helmet>
        <title>Your Shopping Cart | LuxLeather</title>
        <meta name="description" content="Review your selected premium leather goods and proceed to checkout." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-amber-800 outline-none"
            aria-label="Go back"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-4xl font-extrabold text-slate-900">Shopping Cart</h1>
          <span className="text-slate-400 font-medium">({totalItems} items)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex gap-6 group"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">{item.category}</p>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                          <Link to={`/product/${item.id}`}>{item.name}</Link>
                        </h3>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-slate-300 hover:text-red-500 transition-colors focus-visible:ring-2 focus-visible:ring-red-500 rounded-full outline-none"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-500">Qty: 1</span>
                      </div>
                      <p className="text-xl font-extrabold text-slate-900">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <button
               onClick={clearCart}
               className="text-slate-400 hover:text-red-500 font-bold text-sm flex items-center gap-2 transition-colors px-4 py-2"
            >
              <Trash2 size={16} /> Clear Shopping Cart
            </button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-24 space-y-8">
              <h2 className="text-2xl font-extrabold text-slate-900">Order Summary</h2>
              
              {/* Promo Code System */}
              <div className="space-y-3">
                 <label htmlFor="promo-code" className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                   <Tag size={14} /> Add Promo Code
                 </label>
                 <div className="flex gap-2">
                    <input 
                      id="promo-code"
                      type="text" 
                      placeholder="Enter code..." 
                      value={inputCode} 
                      onChange={e => setInputCode(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none uppercase font-mono"
                    />
                    <button onClick={handleApplyPromo} className="px-4 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-amber-800 transition-colors focus-visible:ring-2 focus-visible:ring-amber-800 outline-none">Apply</button>
                 </div>
                 {promoError && <p className="text-xs text-red-500 font-bold">{promoError}</p>}
                 {activePromo && (
                    <div className="flex items-center justify-between p-3 bg-green-50 text-green-700 rounded-xl border border-green-200">
                       <p className="text-sm font-bold flex items-center gap-2"><CheckCircle size={16}/> {activePromo.code} Applied</p>
                       <button onClick={() => setActivePromo(null)} className="text-green-900 hover:opacity-70 text-sm font-bold">Remove</button>
                    </div>
                 )}
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900">${totalPrice.toFixed(2)}</span>
                </div>
                {activePromo && (
                  <div className="flex justify-between text-green-600 font-bold">
                    <span>Discount ({activePromo.code})</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="font-bold text-slate-900">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Estimated Tax</span>
                  <span className="font-bold text-slate-900">${tax.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Total Amount</p>
                    <p className="text-3xl font-extrabold text-slate-900">${finalTotal.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              <button onClick={handleCheckout} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-amber-800 transition-all shadow-xl hover:shadow-amber-800/20 group">
                Simulate Checkout <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <ShieldCheck size={18} className="text-green-500" />
                  <span>Secure Checkout Guaranteed</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Truck size={18} className="text-amber-800" />
                  <span>Free shipping on orders over $150</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <CreditCard size={18} className="text-slate-400" />
                  <span>All major credit cards accepted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
