import React, { useState } from 'react';
import { useAuth } from '@/src/context/AuthContext';
import { useProducts, Product } from '@/src/context/ProductContext';
import { useAdmin, Promo, HeroConfig, Review, Order } from '@/src/context/AdminContext';
import { LogOut, Plus, Edit2, Trash2, Search, Settings, CheckCircle, Package, Star, MessageSquare, ShoppingCart, Tag, X, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AdminDashboard() {
  const { logout } = useAuth();
  const { products, addProduct, updateProduct, deleteProduct, resetToDefaults } = useProducts();
  const { 
    orders, promos, heroConfig, reviews,
    updateHeroConfig, updateOrderStatus,
    addPromo, togglePromo, deletePromo,
    toggleReviewApproval 
  } = useAdmin();

  // Tabs: 'products' | 'settings' | 'orders' | 'promos' | 'reviews' | 'analytics'
  const [activeTab, setActiveTab] = useState('products');

  // --- Products State ---
  const [searchPath, setSearchPath] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  // --- Promos State ---
  const [isAddingPromo, setIsAddingPromo] = useState(false);
  const [newPromo, setNewPromo] = useState<Promo>({ code: '', type: 'percent', value: 0, active: true });

  // --- Settings State ---
  const [editingHero, setEditingHero] = useState<HeroConfig>(heroConfig);

  // Derivations
  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchPath.toLowerCase()));
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAddingProduct && editingProduct) {
      addProduct(editingProduct);
    } else if (editingProduct?.id) {
      updateProduct(editingProduct.id, editingProduct);
    }
    setEditingProduct(null);
    setIsAddingProduct(false);
  };

  const handleSavePromo = (e: React.FormEvent) => {
    e.preventDefault();
    addPromo(newPromo);
    setIsAddingPromo(false);
    setNewPromo({ code: '', type: 'percent', value: 0, active: true });
  };

  const renderTabButton = (id: string, label: string, icon: React.ReactNode) => {
    const active = activeTab === id;
    return (
      <button 
        onClick={() => setActiveTab(id)}
        className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium transition-colors ${
          active ? 'bg-amber-600/20 text-amber-500 border border-amber-500/20' : 'hover:bg-slate-800 text-slate-400 hover:text-white'
        }`}
      >
        {icon}
        {label}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col pt-6 pb-4 shrink-0">
        <div className="px-6 mb-12">
          <h2 className="text-2xl font-serif tracking-widest text-amber-500">LUX<span className="text-white">ADMIN</span></h2>
        </div>
        <nav className="flex-1 space-y-2 px-4 overflow-y-auto">
          {renderTabButton('analytics', 'Analytics', <TrendingUp size={20} />)}
          {renderTabButton('orders', 'Orders', <ShoppingCart size={20} />)}
          {renderTabButton('products', 'Products', <Package size={20} />)}
          {renderTabButton('promos', 'Promo Codes', <Tag size={20} />)}
          {renderTabButton('reviews', 'Reviews', <MessageSquare size={20} />)}
          <div className="pt-4 border-t border-slate-800 my-4" />
          {renderTabButton('settings', 'Site Settings', <Settings size={20} />)}
        </nav>
        <div className="px-4 mt-auto pt-4 border-t border-slate-800">
          <button onClick={logout} className="flex items-center gap-3 w-full px-4 py-3 hover:bg-red-500/10 text-slate-400 hover:text-red-400 rounded-xl font-medium transition-colors group">
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto w-full">
        <div className="max-w-6xl mx-auto">
          
          {/* ANALYTICS TAB */}
          {activeTab === 'analytics' && (
            <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y:0}}>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-8">Dashboard Overview</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-amber-500">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Total Revenue</p>
                  <p className="text-4xl font-extrabold text-slate-900">${totalRevenue.toFixed(2)}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-blue-500">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Total Orders</p>
                  <p className="text-4xl font-extrabold text-slate-900">{orders.length}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-green-500">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Total Products</p>
                  <p className="text-4xl font-extrabold text-slate-900">{products.length}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ORDERS TAB */}
          {activeTab === 'orders' && (
            <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y:0}}>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Order Management</h1>
              <p className="text-slate-500 mb-8">Track and update customer order statuses.</p>
              
              {orders.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 border-dashed">
                  <ShoppingCart size={48} className="mx-auto text-slate-200 mb-4" />
                  <p className="text-slate-500 font-medium">No orders have been placed yet.</p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100">
                      <tr>
                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Order ID</th>
                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {orders.map(order => (
                        <tr key={order.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 font-mono text-sm text-slate-500">{order.id}</td>
                          <td className="px-6 py-4">
                            <p className="font-bold text-slate-900">{order.customer.name}</p>
                            <p className="text-xs text-slate-500">{order.customer.email}</p>
                          </td>
                          <td className="px-6 py-4">
                            <select 
                              value={order.status}
                              onChange={(e) => updateOrderStatus(order.id, e.target.value as Order['status'])}
                              className="px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider bg-slate-100 border border-slate-200 outline-none focus:border-amber-500"
                            >
                              <option value="Pending">PENDING</option>
                              <option value="Processing">PROCESSING</option>
                              <option value="Shipped">SHIPPED</option>
                              <option value="Delivered">DELIVERED</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 font-bold text-amber-700">${order.total.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          )}

          {/* PRODUCTS TAB */}
          {activeTab === 'products' && (
            <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y:0}}>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Product Inventory</h1>
                  <p className="text-slate-500 mt-1">Manage catalog and pricing.</p>
                </div>
                <button 
                  onClick={() => {
                    setIsAddingProduct(true);
                    setEditingProduct({ id: 0, name: '', category: 'Jackets', image: '', price: 0, rating: 5, reviews: 0, description: '', tag: '' });
                  }}
                  className="flex items-center gap-2 bg-slate-900 hover:bg-amber-800 text-white px-5 py-3 rounded-xl font-bold shadow-lg transition-colors"
                >
                  <Plus size={20} /> Add Product
                </button>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 mb-8">
                <Search className="text-slate-400" size={20} />
                <input 
                  type="text" placeholder="Search inventory..." value={searchPath} onChange={(e) => setSearchPath(e.target.value)}
                  className="flex-1 outline-none font-medium text-slate-700"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredProducts.map(product => (
                      <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <img src={product.image} alt="" className="w-12 h-12 rounded-lg object-cover bg-slate-100 border border-slate-200" />
                            <div className="font-bold text-slate-900 line-clamp-1">{product.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-bold text-amber-700">
                          ${product.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => setEditingProduct(product)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                              <Edit2 size={18} />
                            </button>
                            <button onClick={() => { if(confirm('Delete product?')) deleteProduct(product.id) }} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* PROMOS TAB */}
          {activeTab === 'promos' && (
            <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y:0}}>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Active Promotions</h1>
                  <p className="text-slate-500 mt-1">Manage discount codes for the checkout.</p>
                </div>
                <button 
                  onClick={() => setIsAddingPromo(true)}
                  className="flex items-center gap-2 bg-slate-900 hover:bg-amber-800 text-white px-5 py-3 rounded-xl font-bold shadow-lg transition-colors"
                >
                  <Plus size={20} /> Create Promo
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promos.map(promo => (
                  <div key={promo.code} className={`bg-white rounded-2xl p-6 border-2 transition-colors ${promo.active ? 'border-amber-500/50 shadow-md view-active' : 'border-slate-100 shadow-sm opacity-60'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-mono text-xl font-bold text-slate-900 tracking-widest">{promo.code}</h3>
                      <button onClick={() => deletePromo(promo.code)} className="text-slate-300 hover:text-red-500"><X size={20}/></button>
                    </div>
                    <p className="text-slate-500 font-medium mb-6">
                      Save {promo.type === 'percent' ? `${promo.value}%` : `$${promo.value}`}
                    </p>
                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{promo.active ? 'Active' : 'Disabled'}</span>
                      <button 
                        onClick={() => togglePromo(promo.code)}
                        className={`w-12 h-6 rounded-full transition-colors relative flex items-center px-1 ${promo.active ? 'bg-green-500' : 'bg-slate-200'}`}
                      >
                        <div className={`w-4 h-4 rounded-full bg-white transition-transform ${promo.active ? 'translate-x-6' : 'translate-x-0'}`} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* REVIEWS TAB */}
          {activeTab === 'reviews' && (
            <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y:0}}>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Review Moderation</h1>
              <p className="text-slate-500 mb-8">Approve or hide customer testimonials from the homepage.</p>
              
              <div className="space-y-4">
                {reviews.map(review => (
                  <div key={review.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-6">
                    <img src={review.avatar} alt="" className="w-16 h-16 rounded-full object-cover border-2 border-slate-100 shrink-0" />
                    <div className="flex-1 space-y-2">
                       <div className="flex items-center justify-between">
                         <div>
                            <h4 className="font-bold text-slate-900">{review.name}</h4>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{review.role}</p>
                         </div>
                         <button 
                           onClick={() => toggleReviewApproval(review.id)}
                           className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors ${review.approved ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                         >
                           {review.approved ? 'Visible on site' : 'Hidden'}
                         </button>
                       </div>
                       <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className={i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-200'} />
                          ))}
                       </div>
                       <p className="text-slate-600 italic">"{review.content}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === 'settings' && (
            <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y:0}}>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Site Content</h1>
              <p className="text-slate-500 mb-8">Update your homepage hero banner text instantly.</p>
              
              <form onSubmit={(e) => { e.preventDefault(); updateHeroConfig(editingHero); alert('Hero text updated successfully!'); }} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 max-w-2xl">
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Main Landing Page Title</label>
                   <input 
                     type="text" required
                     value={editingHero.title}
                     onChange={(e) => setEditingHero({...editingHero, title: e.target.value})}
                     className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Subtext Description</label>
                   <textarea 
                     required rows={4}
                     value={editingHero.subtext}
                     onChange={(e) => setEditingHero({...editingHero, subtext: e.target.value})}
                     className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none resize-none"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Top Promotional Ribbon</label>
                   <input 
                     type="text" required
                     value={editingHero.ribbon}
                     onChange={(e) => setEditingHero({...editingHero, ribbon: e.target.value})}
                     className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none"
                   />
                 </div>
                 <div className="pt-4 border-t border-slate-100">
                   <button type="submit" className="px-8 py-3 bg-slate-900 hover:bg-amber-800 text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
                     <CheckCircle size={20} /> Publish to Live Site
                   </button>
                 </div>
              </form>
            </motion.div>
          )}

        </div>
      </main>

      {/* Editing PRODUCT Modal */}
      <AnimatePresence>
        {editingProduct && (
          // Omitted full boilerplate from earlier out of brevity - but it's essential for Product edits to work.
          // Integrating previous editingProduct form logic here
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                   <h3 className="text-2xl font-extrabold text-slate-900">{isAddingProduct ? 'Add Product' : 'Edit Product'}</h3>
                   <button onClick={() => { setEditingProduct(null); setIsAddingProduct(false); }} className="text-slate-400 hover:text-slate-600">✕</button>
                </div>
                <form onSubmit={handleSaveProduct} className="p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Name</label>
                      <input type="text" required value={editingProduct.name} onChange={e => setEditingProduct({...editingProduct, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none" />
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Price ($)</label>
                      <input type="number" required min="0" step="0.01" value={editingProduct.price} onChange={e => setEditingProduct({...editingProduct, price: parseFloat(e.target.value)})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none" />
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Category</label>
                      <select value={editingProduct.category} onChange={e => setEditingProduct({...editingProduct, category: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none bg-white">
                        <option>Jackets</option><option>Shoes</option><option>Belts</option><option>Bags</option><option>Accessories</option>
                      </select>
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tag</label>
                      <input type="text" placeholder="e.g. New" value={editingProduct.tag || ''} onChange={e => setEditingProduct({...editingProduct, tag: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none" />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Image URL</label>
                      <input type="url" required value={editingProduct.image} onChange={e => setEditingProduct({...editingProduct, image: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none" />
                    </div>
                  </div>
                  <div className="pt-6 flex gap-4 border-t border-slate-100">
                    <button type="submit" className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-lg transition-colors flex justify-center gap-2">
                      <CheckCircle size={20} /> Save Product
                    </button>
                  </div>
                </form>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Editing PROMO Modal */}
      <AnimatePresence>
        {isAddingPromo && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                   <h3 className="text-xl font-extrabold text-slate-900">Create Promo Code</h3>
                   <button onClick={() => setIsAddingPromo(false)} className="text-slate-400 hover:text-slate-600">✕</button>
                </div>
                <form onSubmit={handleSavePromo} className="p-8 space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Promo Code</label>
                    <input type="text" required placeholder="e.g. SUMMER25" value={newPromo.code} onChange={e => setNewPromo({...newPromo, code: e.target.value.toUpperCase()})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none uppercase font-mono" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Discount Type</label>
                      <select value={newPromo.type} onChange={e => setNewPromo({...newPromo, type: e.target.value as any})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none bg-white">
                        <option value="percent">% Percent</option>
                        <option value="fixed">$ Fixed Amount</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Value</label>
                      <input type="number" required min="1" value={newPromo.value} onChange={e => setNewPromo({...newPromo, value: parseFloat(e.target.value)})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-slate-900 hover:bg-amber-800 text-white font-bold rounded-xl shadow-lg transition-colors flex justify-center gap-2">
                    <CheckCircle size={20} /> Create Code
                  </button>
                </form>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
