export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: 'Jackets' | 'Shoes' | 'Belts' | 'Bags' | 'Accessories';
  tag?: string;
  description: string;
}

export const products: Product[] = [
  // Jackets (10)
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: 100 + i,
    name: `Premium Leather Jacket ${i + 1}`,
    price: 299.99 + i * 20,
    rating: 4.5 + (i % 5) * 0.1,
    reviews: 45 + i * 3,
    image: `https://picsum.photos/seed/luxury-jacket-${i+1}/600/800`,
    category: 'Jackets' as const,
    tag: i === 0 ? 'Best Seller' : i === 1 ? 'New' : undefined,
    description: 'Handcrafted from the finest full-grain leather, this jacket offers a perfect blend of durability and timeless style.'
  })),
  // Shoes (10)
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: 200 + i,
    name: `Classic Leather Shoe ${i + 1}`,
    price: 149.99 + i * 15,
    rating: 4.6 + (i % 4) * 0.1,
    reviews: 32 + i * 4,
    image: `https://picsum.photos/seed/luxury-shoe-${i+1}/600/800`,
    category: 'Shoes' as const,
    tag: i === 2 ? 'Popular' : undefined,
    description: 'Elegant leather shoes designed for both comfort and professional style. Made with premium calfskin leather.'
  })),
  // Belts (10)
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: 300 + i,
    name: `Handmade Leather Belt ${i + 1}`,
    price: 49.99 + i * 5,
    rating: 4.8 + (i % 3) * 0.1,
    reviews: 120 + i * 10,
    image: `https://picsum.photos/seed/luxury-belt-${i+1}/600/800`,
    category: 'Belts' as const,
    tag: i === 0 ? 'Top Rated' : undefined,
    description: 'A durable and stylish leather belt, handcrafted to last a lifetime. Features a solid brass buckle.'
  })),
  // Bags (10)
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: 400 + i,
    name: `Luxury Leather Bag ${i + 1}`,
    price: 199.99 + i * 25,
    rating: 4.7 + (i % 4) * 0.1,
    reviews: 65 + i * 5,
    image: `https://picsum.photos/seed/luxury-bag-${i+1}/600/800`,
    category: 'Bags' as const,
    tag: i === 1 ? 'New Arrival' : undefined,
    description: 'Spacious and sophisticated leather bag, perfect for travel or daily use. Crafted from premium top-grain leather.'
  })),
  // Accessories (10)
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: 500 + i,
    name: `Leather Wallet ${i + 1}`,
    price: 39.99 + i * 10,
    rating: 4.9,
    reviews: 210 + i * 2,
    image: `https://picsum.photos/seed/luxury-accessory-${i+1}/600/800`,
    category: 'Accessories' as const,
    tag: i === 0 ? 'Essential' : undefined,
    description: 'Minimalist leather wallet designed for the modern individual. Slim profile with ample card storage.'
  }))
];
