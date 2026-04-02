import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/src/components/home/Hero';
import FeaturedProducts from '@/src/components/home/FeaturedProducts';
import NewArrivals from '@/src/components/home/NewArrivals';
import Reviews from '@/src/components/home/Reviews';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LuxLeather | Premium Handcrafted Leather Goods for Modern Living</title>
        <meta name="description" content="Discover LuxLeather, your destination for premium handcrafted leather products. Shop full-grain leather jackets, vegetable-tanned shoes, and bespoke accessories." />
        <meta name="keywords" content="premium leather products, handcrafted leather, full-grain leather jackets, vegetable-tanned shoes, luxury leather accessories, LuxLeather shop" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <main>
        <Hero />
        <FeaturedProducts />
        <NewArrivals />
        <Reviews />
        
        {/* SEO Content Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Why Choose LuxLeather for Your Premium Leather Needs?</h2>
            <div className="text-slate-600 leading-relaxed space-y-4 text-left">
              <p>
                At LuxLeather, we understand that true luxury lies in the details. That's why we specialize in <strong>premium handcrafted leather products</strong> that are built to last a lifetime. Whether you're looking for <strong>full-grain leather jackets</strong> or <strong>bespoke accessories</strong>, our curated collection is designed to age beautifully with you.
              </p>
              <p>
                Our commitment to excellence starts with our materials. We source only the finest hides and use traditional <strong>vegetable tanning processes</strong> to ensure environmental sustainability and superior quality. By focusing on <strong>ethical manufacturing and artisanal craftsmanship</strong>, we provide pieces that tell a story.
              </p>
              <p>
                Explore our <strong>new arrivals for 2026</strong> and discover how LuxLeather is redefining the standard for modern leather essentials. Join our community of discerning customers today.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
