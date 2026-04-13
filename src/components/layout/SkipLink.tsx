import React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-amber-800 focus:text-white focus:rounded-xl focus:font-bold focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-900/50 transition-all"
    >
      Skip to content
    </a>
  );
}
