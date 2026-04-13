import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { useCart } from '@/src/context/CartContext';
import { useCustomerAuth } from '@/src/context/CustomerAuthContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { currentUser, logout } = useCustomerAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Jackets', href: '/shop/Jackets' },
    { name: 'Shoes', href: '/shop/Shoes' },
    { name: 'Journal', href: '/blog' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="LuxLeather Home">
          <div className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center text-amber-100 font-bold text-xl shadow-md border border-amber-900/20">
            L
          </div>
          <span className={cn(
            "text-xl font-bold tracking-tight transition-colors hidden sm:block",
            isScrolled ? "text-slate-900" : "text-white"
          )}>LuxLeather</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-semibold transition-colors uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-amber-800 rounded-lg px-2 py-1",
                  isScrolled 
                    ? (isActive ? "text-amber-800" : "text-slate-700 hover:text-amber-800") 
                    : (isActive ? "text-amber-400" : "text-slate-200 hover:text-amber-400")
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Link 
            to="/shop" 
            className={cn(
              "p-2 transition-colors focus-visible:ring-2 focus-visible:ring-amber-800 rounded-full outline-none",
              isScrolled ? "text-slate-700 hover:text-amber-800" : "text-slate-200 hover:text-amber-400"
            )} 
            aria-label="Search Collection"
          >
            <Search size={20} />
          </Link>
          
          {currentUser ? (
             <div className={cn("flex items-center gap-2 transition-colors font-bold text-sm", isScrolled ? "text-slate-700" : "text-white")}>
                 <User size={18} /> {currentUser.name.split(' ')[0]}
                 <button 
                   onClick={logout} 
                   className="ml-2 text-xs uppercase text-slate-400 hover:text-red-500 focus-visible:ring-1 focus-visible:ring-red-500 rounded px-1 outline-none"
                   aria-label="Log Out"
                 >
                   Out
                 </button>
             </div>
          ) : (
            <Link 
              to="/login" 
              className={cn(
                "p-2 transition-colors focus-visible:ring-2 focus-visible:ring-amber-800 rounded-full outline-none",
                isScrolled ? "text-slate-700 hover:text-amber-800" : "text-slate-200 hover:text-amber-400"
              )} 
              aria-label="Access Account"
            >
              <User size={20} />
            </Link>
          )}

          <Link 
            to="/cart" 
            className={cn(
              "p-2 transition-colors relative focus-visible:ring-2 focus-visible:ring-amber-800 rounded-full outline-none",
              isScrolled ? "text-slate-700 hover:text-amber-800" : "text-slate-200 hover:text-amber-400"
            )} 
            aria-label={`Shopping Cart, ${totalItems} items`}
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-amber-800 text-amber-100 text-[10px] flex items-center justify-center rounded-full pointer-events-none">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className={cn(
              "md:hidden p-2 transition-colors focus-visible:ring-2 focus-visible:ring-amber-800 rounded-full outline-none",
              isScrolled ? "text-slate-600" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="text-lg font-medium text-slate-900 py-2 border-b border-slate-50 focus-visible:bg-slate-50 outline-none px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
