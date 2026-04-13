import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from '@/src/context/CartContext';
import AppLayout from '@/src/components/layout/AppLayout';
import { CustomerAuthProvider } from '@/src/context/CustomerAuthContext';
import { AuthProvider } from '@/src/context/AuthContext';
import { ProductProvider } from '@/src/context/ProductContext';
import { AdminProvider } from '@/src/context/AdminContext';
import ProtectedRoute from '@/src/components/admin/ProtectedRoute';

// Lazy Loaded Pages
const Home = lazy(() => import('@/src/pages/Home'));
const Shop = lazy(() => import('@/src/pages/Shop'));
const ProductDetail = lazy(() => import('@/src/pages/ProductDetail'));
const Cart = lazy(() => import('@/src/pages/Cart'));
const Blog = lazy(() => import('@/src/pages/Blog'));
const Contact = lazy(() => import('@/src/pages/Contact'));
const FAQ = lazy(() => import('@/src/pages/FAQ'));
const ShippingPolicy = lazy(() => import('@/src/pages/ShippingPolicy'));
const ReturnsExchanges = lazy(() => import('@/src/pages/ReturnsExchanges'));
const LeatherCareGuide = lazy(() => import('@/src/pages/LeatherCareGuide'));
const PrivacyPolicy = lazy(() => import('@/src/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@/src/pages/TermsOfService'));
const CookiePolicy = lazy(() => import('@/src/pages/CookiePolicy'));
const Affiliate = lazy(() => import('@/src/pages/Affiliate'));
const Newsletter = lazy(() => import('@/src/pages/Newsletter'));
const NotFound = lazy(() => import('@/src/pages/NotFound'));
const ErrorPage = lazy(() => import('@/src/pages/ErrorPage'));
const Redirecting = lazy(() => import('@/src/pages/Redirecting'));
const Register = lazy(() => import('@/src/pages/auth/Register'));
const Login = lazy(() => import('@/src/pages/auth/Login'));
const AdminLogin = lazy(() => import('@/src/pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('@/src/pages/admin/AdminDashboard'));
const AdminRedirect = lazy(() => import('@/src/pages/admin/AdminRedirect'));
const AdminError = lazy(() => import('@/src/pages/admin/AdminError'));

// Loading Fallback
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-slate-100 border-t-amber-800 rounded-full animate-spin"></div>
        <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] animate-pulse">LuxLeather Loading...</p>
      </div>
    </div>
  );
}

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
              <Suspense fallback={<PageLoader />}>
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
              </Suspense>
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
