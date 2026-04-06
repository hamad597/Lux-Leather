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
    image: `https://images.unsplash.com/photo-${[
      '1551028719-00167b16eac5',
      '1550009158-9ebf69173e03',
      '1521223890158-f9f7c3d5d504',
      '1550009158-9ebf69173e03',
      '1520975954732-35dd22299614',
      '1551028719-00167b16eac5',
      '1550009158-9ebf69173e03',
      '1521223890158-f9f7c3d5d504',
      '1550009158-9ebf69173e03',
      '1520975954732-35dd22299614'
    ][i]}?q=80&w=600&h=800&auto=format&fit=crop`,
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
    image: `https://images.unsplash.com/photo-${[
      '1549298916-b41d501d3772',
      '1560769629-975ec94e6a86',
      '1595950653106-6c9ebd614d3a',
      '1543163530-1c4584449163',
      '1603808033192-082d6919d3e1',
      '1549298916-b41d501d3772',
      '1560769629-975ec94e6a86',
      '1595950653106-6c9ebd614d3a',
      '1543163530-1c4584449163',
      '1603808033192-082d6919d3e1'
    ][i]}?q=80&w=600&h=800&auto=format&fit=crop`,
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
    image: `https://images.unsplash.com/photo-${[
      '1624222247344-550fb60583dc',
      '1614164185128-e4ec99c436d7',
      '1624222247344-550fb60583dc',
      '1614164185128-e4ec99c436d7',
      '1624222247344-550fb60583dc',
      '1614164185128-e4ec99c436d7',
      '1624222247344-550fb60583dc',
      '1614164185128-e4ec99c436d7',
      '1624222247344-550fb60583dc',
      '1614164185128-e4ec99c436d7'
    ][i]}?q=80&w=600&h=800&auto=format&fit=crop`,
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
    image: `https://images.unsplash.com/photo-${[
      '1548036328-c9fa89d128fa',
      '1590874103328-eac38a683ce7',
      '1594223274512-ad4803739b7c',
      '1547949003-9792a18a2601',
      '1548036328-c9fa89d128fa',
      '1590874103328-eac38a683ce7',
      '1594223274512-ad4803739b7c',
      '1547949003-9792a18a2601',
      '1548036328-c9fa89d128fa',
      '1590874103328-eac38a683ce7'
    ][i]}?q=80&w=600&h=800&auto=format&fit=crop`,
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
    image: `https://images.unsplash.com/photo-${[
      '1627123430481-834658577293',
      '1559564484-e484c677a88e',
      '1627123430481-834658577293',
      '1559564484-e484c677a88e',
      '1627123430481-834658577293',
      '1559564484-e484c677a88e',
      '1627123430481-834658577293',
      '1559564484-e484c677a88e',
      '1627123430481-834658577293',
      '1559564484-e484c677a88e'
    ][i]}?q=80&w=600&h=800&auto=format&fit=crop`,
    category: 'Accessories' as const,
    tag: i === 0 ? 'Essential' : undefined,
    description: 'Minimalist leather wallet designed for the modern individual. Slim profile with ample card storage.'
  }))
];
