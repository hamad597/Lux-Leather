import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import SkipLink from './SkipLink';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased">
      {!isAdminRoute && <SkipLink />}
      {!isAdminRoute && <Header />}
      <main id="main-content" className="flex-grow outline-none" tabIndex={-1}>
        {children}
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <CookieConsent />}
    </div>
  );
}
