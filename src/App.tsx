import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from '@/src/context/CartContext';
import AppLayout from '@/src/components/layout/AppLayout';
import Home from '@/src/pages/Home';
import Blog from '@/src/pages/Blog';
import Shop from '@/src/pages/Shop';
import ProductDetail from '@/src/pages/ProductDetail';
import Cart from '@/src/pages/Cart';
import Contact from '@/src/pages/Contact';
import FAQ from '@/src/pages/FAQ';
import { CustomerAuthProvider } from '@/src/context/CustomerAuthContext';
import { AuthProvider } from '@/src/context/AuthContext';
import { ProductProvider } from '@/src/context/ProductContext';
import { AdminProvider } from '@/src/context/AdminContext';
import ProtectedRoute from '@/src/components/admin/ProtectedRoute';
import Register from '@/src/pages/auth/Register';
import Login from '@/src/pages/auth/Login';
import AdminLogin from '@/src/pages/admin/AdminLogin';
import AdminDashboard from '@/src/pages/admin/AdminDashboard';
import AdminRedirect from '@/src/pages/admin/AdminRedirect';
import AdminError from '@/src/pages/admin/AdminError';
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
      <CustomerAuthProvider>
        <AuthProvider>
        <AdminProvider>
          <ProductProvider>
            <CartProvider>
            <Router>
              <ScrollToTop />
          <AppLayout>
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
                
                {/* Customer Auth */}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/redirect" element={<AdminRedirect />} />
                <Route path="/admin/error" element={<AdminError />} />
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
          </AppLayout>
            </Router>
          </CartProvider>
        </ProductProvider>
        </AdminProvider>
      </AuthProvider>
      </CustomerAuthProvider>
    </HelmetProvider>
  );
}
