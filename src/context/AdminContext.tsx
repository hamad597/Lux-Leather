import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react';

export interface Order {
  id: string;
  date: string;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
  customer: {
    name: string;
    email: string;
  };
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
}

export interface Promo {
  code: string;
  type: 'percent' | 'fixed';
  value: number;
  active: boolean;
}

export interface HeroConfig {
  title: string;
  subtext: string;
  ribbon: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  approved: boolean;
}

interface AdminContextType {
  orders: Order[];
  promos: Promo[];
  heroConfig: HeroConfig;
  reviews: Review[];
  updateHeroConfig: (config: HeroConfig) => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (id: string, status: Order['status']) => void;
  addPromo: (promo: Promo) => void;
  togglePromo: (code: string) => void;
  deletePromo: (code: string) => void;
  toggleReviewApproval: (id: number) => void;
  addFakeReview: (review: Omit<Review, 'id' | 'approved'>) => void;
}

const defaultHero: HeroConfig = {
  title: "Timeless Elegance in Every Stitch",
  subtext: "Discover our exclusive collection of handcrafted leather jackets, shoes, and accessories. Experience the unmatched durability and sophisticated style of genuine full-grain leather.",
  ribbon: "Premium Handcrafted Leather"
};

const defaultReviews: Review[] = [
  { id: 1, name: 'Sarah Johnson', role: 'Verified Buyer', content: 'The quality of the products is absolutely top-notch. I bought the leather watch and it exceeded my expectations.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=sarah', approved: true },
  { id: 2, name: 'Michael Chen', role: 'Tech Enthusiast', content: 'LuxLeather has become my go-to for premium essentials. Their customer service is responsive and the aesthetic is just perfect.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=michael', approved: true },
  { id: 3, name: 'Emma Williams', role: 'Interior Designer', content: 'I love the minimalist approach. Every item feels intentional and well-crafted. Highly recommend for anyone looking for quality.', rating: 4, avatar: 'https://i.pravatar.cc/150?u=emma', approved: true }
];

const defaultPromos: Promo[] = [
  { code: 'WELCOME10', type: 'percent', value: 10, active: true },
  { code: 'WINTER20', type: 'percent', value: 20, active: false }
];

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [promos, setPromos] = useState<Promo[]>(defaultPromos);
  const [heroConfig, setHeroConfig] = useState<HeroConfig>(defaultHero);
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedOrders = localStorage.getItem('lux_orders');
    const savedPromos = localStorage.getItem('lux_promos');
    const savedHero = localStorage.getItem('lux_hero');
    const savedReviews = localStorage.getItem('lux_reviews');

    if (savedOrders) setOrders(JSON.parse(savedOrders));
    if (savedPromos) setPromos(JSON.parse(savedPromos));
    if (savedHero) setHeroConfig(JSON.parse(savedHero));
    if (savedReviews) setReviews(JSON.parse(savedReviews));
    
    setIsLoaded(true);
  }, []);

  const saveState = useCallback((key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  }, []);

  const updateHeroConfig = useCallback((config: HeroConfig) => {
    setHeroConfig(config);
    saveState('lux_hero', config);
  }, [saveState]);

  const addOrder = useCallback((order: Order) => {
    setOrders(prev => {
      const next = [order, ...prev];
      saveState('lux_orders', next);
      return next;
    });
  }, [saveState]);

  const updateOrderStatus = useCallback((id: string, status: Order['status']) => {
    setOrders(prev => {
      const next = prev.map(o => o.id === id ? { ...o, status } : o);
      saveState('lux_orders', next);
      return next;
    });
  }, [saveState]);

  const addPromo = useCallback((promo: Promo) => {
    setPromos(prev => {
      const next = [...prev, promo];
      saveState('lux_promos', next);
      return next;
    });
  }, [saveState]);

  const togglePromo = useCallback((code: string) => {
    setPromos(prev => {
      const next = prev.map(p => p.code === code ? { ...p, active: !p.active } : p);
      saveState('lux_promos', next);
      return next;
    });
  }, [saveState]);

  const deletePromo = useCallback((code: string) => {
    setPromos(prev => {
      const next = prev.filter(p => p.code !== code);
      saveState('lux_promos', next);
      return next;
    });
  }, [saveState]);

  const toggleReviewApproval = useCallback((id: number) => {
    setReviews(prev => {
      const next = prev.map(r => r.id === id ? { ...r, approved: !r.approved } : r);
      saveState('lux_reviews', next);
      return next;
    });
  }, [saveState]);

  const addFakeReview = useCallback((review: Omit<Review, 'id' | 'approved'>) => {
    setReviews(prev => {
      const newId = prev.length > 0 ? Math.max(...prev.map(r => r.id)) + 1 : 1;
      const next = [{ ...review, id: newId, approved: false }, ...prev];
      saveState('lux_reviews', next);
      return next;
    });
  }, [saveState]);

  const value = useMemo(() => ({
    orders, promos, heroConfig, reviews,
    updateHeroConfig, addOrder, updateOrderStatus,
    addPromo, togglePromo, deletePromo,
    toggleReviewApproval, addFakeReview
  }), [orders, promos, heroConfig, reviews, updateHeroConfig, addOrder, updateOrderStatus, addPromo, togglePromo, deletePromo, toggleReviewApproval, addFakeReview]);

  if (!isLoaded) return null;

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
