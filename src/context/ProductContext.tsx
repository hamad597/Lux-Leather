import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('lux_custom_products', JSON.stringify(newProducts));
  };

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const newProducts = [...products, { ...product, id: newId }];
    saveProducts(newProducts);
  };

  const updateProduct = (id: number, updatedFields: Partial<Product>) => {
    const newProducts = products.map(p => p.id === id ? { ...p, ...updatedFields } : p);
    saveProducts(newProducts);
  };

  const deleteProduct = (id: number) => {
    const newProducts = products.filter(p => p.id !== id);
    saveProducts(newProducts);
  };

  const resetToDefaults = () => {
    setProducts(defaultProducts);
    localStorage.removeItem('lux_custom_products');
  };

  // Prevent flicker before hydration
  if (!isLoaded) return null;

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, resetToDefaults }}>
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
