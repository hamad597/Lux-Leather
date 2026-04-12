import React, { useState } from 'react';
import { useAuth } from '@/src/context/AuthContext';
import { useProducts, Product } from '@/src/context/ProductContext';
import { LogOut, Plus, Edit2, Trash2, Search, Settings, Tag, Image as ImageIcon, CheckCircle, Package, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AdminDashboard() {
  const { logout } = useAuth();
  const { products, addProduct, updateProduct, deleteProduct, resetToDefaults } = useProducts();
  const [search, setSearch] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdding && editingProduct) {
      addProduct(editingProduct);
    } else if (editingProduct?.id) {
      updateProduct(editingProduct.id, editingProduct);
    }
    setEditingProduct(null);
    setIsAdding(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col pt-6 pb-4">
        <div className="px-6 mb-12">
          <h2 className="text-2xl font-serif tracking-widest text-amber-500">LUX<span className="text-white">ADMIN</span></h2>
        </div>
        <nav className="flex-1 space-y-2 px-4">
          <button className="flex items-center gap-3 w-full px-4 py-3 bg-amber-600/20 text-amber-500 rounded-xl font-medium border border-amber-500/20">
            <Package size={20} />
            Products
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl font-medium transition-colors">
            <Settings size={20} />
            Settings
          </button>
          <button onClick={() => { if(confirm('Reset all to original defaults?')) resetToDefaults() }} className="flex items-center gap-3 w-full px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl font-medium transition-colors">
             <RotateCcw size={20} />
             Reset Defaults
          </button>
        </nav>
        <div className="px-4 mt-auto">
          <button onClick={logout} className="flex items-center gap-3 w-full px-4 py-3 hover:bg-red-500/10 text-slate-400 hover:text-red-400 rounded-xl font-medium transition-colors group">
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Product Management</h1>
              <p className="text-slate-500 mt-1">Manage your inventory, prices, and imagery.</p>
            </div>
            <button 
              onClick={() => {
                setIsAdding(true);
                setEditingProduct({ id: 0, name: '', category: 'Jackets', image: '', price: 0, rating: 5, reviews: 0, description: '', tag: '' });
              }}
              className="flex items-center gap-2 bg-slate-900 hover:bg-amber-800 text-white px-5 py-3 rounded-xl font-bold shadow-lg transition-colors"
            >
              <Plus size={20} /> Add Product
            </button>
          </div>

          {/* Search bar */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 mb-8">
            <Search className="text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search inventory..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none font-medium text-slate-700"
            />
          </div>

          {/* Products Table */}
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
                <AnimatePresence>
                  {filteredProducts.map(product => (
                    <motion.tr 
                      key={product.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img src={product.image} alt="" className="w-12 h-12 rounded-lg object-cover bg-slate-100 border border-slate-200" />
                          <div className="font-bold text-slate-900">{product.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-amber-700">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => handleEdit(product)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Edit2 size={18} />
                          </button>
                          <button onClick={() => handleDelete(product.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Edit/Add Modal */}
      <AnimatePresence>
        {editingProduct && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {isAdding ? 'Add New Product' : 'Edit Product'}
                </h3>
                <button onClick={() => { setEditingProduct(null); setIsAdding(false); }} className="text-slate-400 hover:text-slate-600">
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleSave} className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Product Name</label>
                    <input 
                      type="text" required
                      value={editingProduct.name}
                      onChange={e => setEditingProduct({...editingProduct, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Price ($)</label>
                    <input 
                      type="number" required min="0" step="0.01"
                      value={editingProduct.price}
                      onChange={e => setEditingProduct({...editingProduct, price: parseFloat(e.target.value)})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    />
                  </div>
                  
                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Category</label>
                    <select 
                      value={editingProduct.category}
                      onChange={e => setEditingProduct({...editingProduct, category: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all bg-white"
                    >
                      <option>Jackets</option>
                      <option>Shoes</option>
                      <option>Belts</option>
                      <option>Bags</option>
                      <option>Wallets/Accessories</option>
                    </select>
                  </div>
                  
                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Marketing Tag</label>
                    <input 
                      type="text" placeholder="e.g. New, Hot, Sale"
                      value={editingProduct.tag || ''}
                      onChange={e => setEditingProduct({...editingProduct, tag: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    />
                  </div>

                  <div className="col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Image URL</label>
                    <div className="flex gap-4">
                      <input 
                        type="url" required
                        value={editingProduct.image}
                        onChange={e => setEditingProduct({...editingProduct, image: e.target.value})}
                        className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                        placeholder="https://images.unsplash.com/photo-..."
                      />
                      {editingProduct.image && (
                        <img src={editingProduct.image} alt="" className="w-12 h-12 rounded-lg object-cover border border-slate-200 bg-slate-50" />
                      )}
                    </div>
                  </div>

                  <div className="col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Description</label>
                    <textarea 
                      required rows={3}
                      value={editingProduct.description}
                      onChange={e => setEditingProduct({...editingProduct, description: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all resize-none"
                    />
                  </div>
                </div>
                
                <div className="pt-6 flex gap-4 border-t border-slate-100">
                  <button type="button" onClick={() => { setEditingProduct(null); setIsAdding(false); }} className="flex-1 py-3 text-slate-500 font-bold hover:bg-slate-50 rounded-xl transition-colors">
                    Cancel
                  </button>
                  <button type="submit" className="flex-2 py-3 px-8 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
                    <CheckCircle size={20} />
                    {isAdding ? 'Create Product' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
