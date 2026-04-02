import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Section */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center text-amber-100 font-bold text-xl shadow-lg border border-amber-900/20">
                L
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">LuxLeather</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Crafting timeless leather goods with passion and precision. Our commitment to quality ensures that every piece you own is a masterpiece of durability and style.
            </p>
            <div className="flex gap-5">
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-amber-800 hover:text-white transition-all" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-amber-800 hover:text-white transition-all" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-amber-800 hover:text-white transition-all" aria-label="Twitter"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Shop Collection</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop/Jackets" className="hover:text-amber-500 transition-colors">Leather Jackets</Link></li>
              <li><Link to="/shop/Shoes" className="hover:text-amber-500 transition-colors">Leather Shoes</Link></li>
              <li><Link to="/shop/Belts" className="hover:text-amber-500 transition-colors">Leather Belts</Link></li>
              <li><Link to="/shop/Bags" className="hover:text-amber-500 transition-colors">Leather Bags</Link></li>
              <li><Link to="/shop/Accessories" className="hover:text-amber-500 transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Customer Service</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-amber-500 transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-amber-500 transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="hover:text-amber-500 transition-colors">FAQs</Link></li>
              <li><Link to="/care" className="hover:text-amber-500 transition-colors">Leather Care Guide</Link></li>
              <li><Link to="/affiliate" className="hover:text-amber-500 transition-colors">Affiliate Program</Link></li>
              <li><Link to="/newsletter" className="hover:text-amber-500 transition-colors">Join the Club</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Visit Our Studio</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-amber-800 shrink-0" />
                <span className="text-slate-400">789 Artisan Lane, Heritage District, Florence, Italy</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-amber-800 shrink-0" />
                <span className="text-slate-400">+39 055 123 4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-amber-800 shrink-0" />
                <span className="text-slate-400">concierge@luxleather.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p>© {currentYear} LuxLeather Premium Goods. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-amber-500 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
