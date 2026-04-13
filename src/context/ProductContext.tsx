import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react';
import { products as defaultProducts } from '@/src/data/products';

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  tag: string;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: number, updatedItem: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  resetToDefaults: () => void;
}

// Initial default just maps the imports so static types work seamlessly across the app
const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sync to local storage
  useEffect(() => {
    const saved = localStorage.getItem('lux_custom_products');
    if (saved) {
      try {
        setProducts(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing saved products", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const saveProducts = useCallback((newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('lux_custom_products', JSON.stringify(newProducts));
  }, []);

  const addProduct = useCallback((product: Omit<Product, 'id'>) => {
    setProducts(current => {
      const newId = current.length > 0 ? Math.max(...current.map(p => p.id)) + 1 : 1;
      const newProducts = [...current, { ...product, id: newId }];
      localStorage.setItem('lux_custom_products', JSON.stringify(newProducts));
      return newProducts;
    });
  }, []);

  const updateProduct = useCallback((id: number, updatedFields: Partial<Product>) => {
    setProducts(current => {
      const newProducts = current.map(p => p.id === id ? { ...p, ...updatedFields } : p);
      localStorage.setItem('lux_custom_products', JSON.stringify(newProducts));
      return newProducts;
    });
  }, []);

  const deleteProduct = useCallback((id: number) => {
    setProducts(current => {
      const newProducts = current.filter(p => p.id !== id);
      localStorage.setItem('lux_custom_products', JSON.stringify(newProducts));
      return newProducts;
    });
  }, []);

  const resetToDefaults = useCallback(() => {
    setProducts(defaultProducts);
    localStorage.removeItem('lux_custom_products');
  }, []);

  const value = useMemo(() => ({
    products, addProduct, updateProduct, deleteProduct, resetToDefaults
  }), [products, addProduct, updateProduct, deleteProduct, resetToDefaults]);

  // Prevent flicker before hydration
  if (!isLoaded) return null;

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
