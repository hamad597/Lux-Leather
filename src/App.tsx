import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from '@/src/context/CartContext';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import CookieConsent from '@/src/components/layout/CookieConsent';
import Home from '@/src/pages/Home';
import Blog from '@/src/pages/Blog';
import Shop from '@/src/pages/Shop';
import ProductDetail from '@/src/pages/ProductDetail';
import Cart from '@/src/pages/Cart';
import Contact from '@/src/pages/Contact';
import FAQ from '@/src/pages/FAQ';
import { AuthProvider } from '@/src/context/AuthContext';
import { ProductProvider } from '@/src/context/ProductContext';
import ProtectedRoute from '@/src/components/admin/ProtectedRoute';
import AdminLogin from '@/src/pages/admin/AdminLogin';
import AdminDashboard from '@/src/pages/admin/AdminDashboard';
import ShippingPolicy from '@/src/pages/ShippingPolicy';
import ReturnsExchanges from '@/src/pages/ReturnsExchanges';
import LeatherCareGuide from '@/src/pages/LeatherCareGuide';
import PrivacyPolicy from '@/src/pages/PrivacyPolicy';
import TermsOfService from '@/src/pages/TermsOfService';
import CookiePolicy from '@/src/pages/CookiePolicy';
import Affiliate from '@/src/pages/Affiliate';
import Newsletter from '@/src/pages/Newsletter';
import NotFound from '@/src/pages/NotFound';
import ErrorPage from '@/src/pages/ErrorPage';
import Redirecting from '@/src/pages/Redirecting';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <Router>
              <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-white font-sans antialiased">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:category" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/shipping" element={<ShippingPolicy />} />
                <Route path="/returns" element={<ReturnsExchanges />} />
                <Route path="/care" element={<LeatherCareGuide />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/cookies" element={<CookiePolicy />} />
                <Route path="/affiliate" element={<Affiliate />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/redirect" element={<Redirecting />} />
                <Route path="/error" element={<ErrorPage />} />
                
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/admin/dashboard" element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } />
                
                {/* Fallback for other routes */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <CookieConsent />
          </div>
            </Router>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}
