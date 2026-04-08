const products = [
  // Leather Jackets
  { id: 100, name: 'Leather Jacket 1', imageUrl: 'https://source.unsplash.com/random/?leather,jacket,1', price: 199.99, rating: 4.5, reviews: 150, description: 'Stylish leather jacket for every occasion.', tags: ['jacket', 'leather', 'fashion'] },
  { id: 101, name: 'Leather Jacket 2', imageUrl: 'https://source.unsplash.com/random/?leather,jacket,2', price: 219.99, rating: 4.7, reviews: 200, description: 'Premium quality leather jacket.', tags: ['jacket', 'leather', 'outdoor'] },
  { id: 102, name: 'Leather Jacket 3', imageUrl: 'https://source.unsplash.com/random/?leather,jacket,3', price: 229.99, rating: 4.3, reviews: 180, description: 'Classic look leather jacket.', tags: ['jacket', 'leather', 'vintage'] },
  { id: 103, name: 'Leather Jacket 4', imageUrl: 'https://source.unsplash.com/random/?leather,jacket,4', price: 239.99, rating: 4.6, reviews: 120, description: 'Stylish and durable leather jacket.', tags: ['jacket', 'leather', 'modern'] },
  { id: 104, name: 'Leather Jacket 5', imageUrl: 'https://source.unsplash.com/random/?leather,jacket,5', price: 249.99, rating: 4.5, reviews: 230, description: 'Sophisticated leather jacket.', tags: ['jacket', 'leather', 'elegant'] },
  { id: 105, name: 'Leather Jacket 6', imageUrl: 'https://source.unsplash.com/random/?leather,jacket,6', price: 259.99, rating: 4.4, reviews: 140, description: 'Casual leather jacket for everyday wear.', tags: ['jacket', 'leather', 'casual'] },
  { id: 106, name: 'Leather Jacket 7', imageUrl: 'https://source.unsplash.com/random/?leather,jacket,7', price: 269.99, rating: 4.8, reviews: 110, description: 'Trendy leather jacket with unique design.', tags: ['jacket', 'leather', 'trendy'] },
  { id: 107, name: 'Leather Jacket 8', imageUrl: 'https://source.unsplash.com/random/?leather,jacket,8', price: 279.99, rating: 4.5, reviews: 160, description: 'Comfortable leather jacket for all seasons.', tags: ['jacket', 'leather', 'comfortable'] },
  { id: 108, name: 'Leather Jacket 9', imageUrl: 'https://source.unsplash.com/random/?leather,jacket,9', price: 289.99, rating: 4.7, reviews: 190, description: 'Stylish leather jacket with great fit.', tags: ['jacket', 'leather', 'stylish'] },
  { id: 109, name: 'Leather Jacket 10', imageUrl: 'https://source.unsplash.com/random/?leather,jacket,10', price: 299.99, rating: 4.9, reviews: 220, description: 'The ultimate leather jacket experience.', tags: ['jacket', 'leather', 'ultimate'] },

  // Leather Shoes
  { id: 200, name: 'Leather Shoe 1', imageUrl: 'https://source.unsplash.com/random/?leather,shoe,1', price: 99.99, rating: 4.5, reviews: 150, description: 'Comfortable leather shoes for everyday.', tags: ['shoes', 'leather', 'fashion'] },
  { id: 201, name: 'Leather Shoe 2', imageUrl: 'https://source.unsplash.com/random/?leather,shoe,2', price: 109.99, rating: 4.7, reviews: 200, description: 'Stylish leather shoes for formal wear.', tags: ['shoes', 'leather', 'formal'] },
  { id: 202, name: 'Leather Shoe 3', imageUrl: 'https://source.unsplash.com/random/?leather,shoe,3', price: 119.99, rating: 4.3, reviews: 180, description: 'Quality leather shoes with great comfort.', tags: ['shoes', 'leather', 'quality'] },
  { id: 203, name: 'Leather Shoe 4', imageUrl: 'https://source.unsplash.com/random/?leather,shoe,4', price: 129.99, rating: 4.6, reviews: 120, description: 'Durable leather shoes for any occasion.', tags: ['shoes', 'leather', 'durable'] },
  { id: 204, name: 'Leather Shoe 5', imageUrl: 'https://source.unsplash.com/random/?leather,shoe,5', price: 139.99, rating: 4.5, reviews: 230, description: 'Classic leather shoes that never go out of style.', tags: ['shoes', 'leather', 'classic'] },
  { id: 205, name: 'Leather Shoe 6', imageUrl: 'https://source.unsplash.com/random/?leather,shoe,6', price: 149.99, rating: 4.4, reviews: 140, description: 'Trendy leather shoes for modern styles.', tags: ['shoes', 'leather', 'trendy'] },
  { id: 206, name: 'Leather Shoe 7', imageUrl: 'https://source.unsplash.com/random/?leather,shoe,7', price: 159.99, rating: 4.8, reviews: 110, description: 'High-quality leather shoes for long wear.', tags: ['shoes', 'leather', 'quality'] },
  { id: 207, name: 'Leather Shoe 8', imageUrl: 'https://source.unsplash.com/random/?leather,shoe,8', price: 169.99, rating: 4.5, reviews: 160, description: 'Luxury leather shoes for special occasions.', tags: ['shoes', 'leather', 'luxury'] },
  { id: 208, name: 'Leather Shoe 9', imageUrl: 'https://source.unsplash.com/random/?leather,shoe,9', price: 179.99, rating: 4.7, reviews: 190, description: 'Comfort and style in leather shoes.', tags: ['shoes', 'leather', 'comfort'] },
  { id: 209, name: 'Leather Shoe 10', imageUrl: 'https://source.unsplash.com/random/?leather,shoe,10', price: 189.99, rating: 4.9, reviews: 220, description: 'The perfect leather shoes for any outfit.', tags: ['shoes', 'leather', 'perfect'] },

  // Leather Belts
  { id: 300, name: 'Leather Belt 1', imageUrl: 'https://source.unsplash.com/random/?leather,belt,1', price: 29.99, rating: 4.5, reviews: 150, description: 'Stylish leather belt for men.', tags: ['belt', 'leather', 'fashion'] },
  { id: 301, name: 'Leather Belt 2', imageUrl: 'https://source.unsplash.com/random/?leather,belt,2', price: 39.99, rating: 4.7, reviews: 200, description: 'High-quality leather belt for formal wear.', tags: ['belt', 'leather', 'formal'] },
  { id: 302, name: 'Leather Belt 3', imageUrl: 'https://source.unsplash.com/random/?leather,belt,3', price: 49.99, rating: 4.3, reviews: 180, description: 'Durable leather belt that lasts.', tags: ['belt', 'leather', 'durable'] },
  { id: 303, name: 'Leather Belt 4', imageUrl: 'https://source.unsplash.com/random/?leather,belt,4', price: 59.99, rating: 4.6, reviews: 120, description: 'Casual leather belt for everyday wear.', tags: ['belt', 'leather', 'casual'] },
  { id: 304, name: 'Leather Belt 5', imageUrl: 'https://source.unsplash.com/random/?leather,belt,5', price: 69.99, rating: 4.5, reviews: 230, description: 'Elegant leather belt for all occasions.', tags: ['belt', 'leather', 'elegant'] },
  { id: 305, name: 'Leather Belt 6', imageUrl: 'https://source.unsplash.com/random/?leather,belt,6', price: 79.99, rating: 4.4, reviews: 140, description: 'Fashionable leather belt for style.', tags: ['belt', 'leather', 'fashionable'] },
  { id: 306, name: 'Leather Belt 7', imageUrl: 'https://source.unsplash.com/random/?leather,belt,7', price: 89.99, rating: 4.8, reviews: 110, description: 'Quality leather belt for daily use.', tags: ['belt', 'leather', 'quality'] },
  { id: 307, name: 'Leather Belt 8', imageUrl: 'https://source.unsplash.com/random/?leather,belt,8', price: 99.99, rating: 4.5, reviews: 160, description: 'Stylish and comfortable leather belt.', tags: ['belt', 'leather', 'comfortable'] },
  { id: 308, name: 'Leather Belt 9', imageUrl: 'https://source.unsplash.com/random/?leather,belt,9', price: 109.99, rating: 4.7, reviews: 190, description: 'Durable and fashionable leather belt.', tags: ['belt', 'leather', 'durable'] },
  { id: 309, name: 'Leather Belt 10', imageUrl: 'https://source.unsplash.com/random/?leather,belt,10', price: 119.99, rating: 4.9, reviews: 220, description: 'The best leather belt for style and function.', tags: ['belt', 'leather', 'best'] },

  // Leather Bags
  { id: 400, name: 'Leather Bag 1', imageUrl: 'https://source.unsplash.com/random/?leather,bag,1', price: 149.99, rating: 4.5, reviews: 150, description: 'Stylish leather bag for daily use.', tags: ['bag', 'leather', 'fashion'] },
  { id: 401, name: 'Leather Bag 2', imageUrl: 'https://source.unsplash.com/random/?leather,bag,2', price: 159.99, rating: 4.7, reviews: 200, description: 'High-quality leather bag for professionals.', tags: ['bag', 'leather', 'professional'] },
  { id: 402, name: 'Leather Bag 3', imageUrl: 'https://source.unsplash.com/random/?leather,bag,3', price: 169.99, rating: 4.3, reviews: 180, description: 'Stylish leather bag for school or work.', tags: ['bag', 'leather', 'school'] },
  { id: 403, name: 'Leather Bag 4', imageUrl: 'https://source.unsplash.com/random/?leather,bag,4', price: 179.99, rating: 4.6, reviews: 120, description: 'Durable leather bag for travel.', tags: ['bag', 'leather', 'travel'] },
  { id: 404, name: 'Leather Bag 5', imageUrl: 'https://source.unsplash.com/random/?leather,bag,5', price: 189.99, rating: 4.5, reviews: 230, description: 'Elegant leather bag for any occasion.', tags: ['bag', 'leather', 'elegant'] },
  { id: 405, name: 'Leather Bag 6', imageUrl: 'https://source.unsplash.com/random/?leather,bag,6', price: 199.99, rating: 4.4, reviews: 140, description: 'Fashionable leather bag for modern style.', tags: ['bag', 'leather', 'modern'] },
  { id: 406, name: 'Leather Bag 7', imageUrl: 'https://source.unsplash.com/random/?leather,bag,7', price: 209.99, rating: 4.8, reviews: 110, description: 'Quality leather bag for everyday use.', tags: ['bag', 'leather', 'quality'] },
  { id: 407, name: 'Leather Bag 8', imageUrl: 'https://source.unsplash.com/random/?leather,bag,8', price: 219.99, rating: 4.5, reviews: 160, description: 'Trendy leather bag with unique design.', tags: ['bag', 'leather', 'trendy'] },
  { id: 408, name: 'Leather Bag 9', imageUrl: 'https://source.unsplash.com/random/?leather,bag,9', price: 229.99, rating: 4.7, reviews: 190, description: 'Comfortable leather bag for all seasons.', tags: ['bag', 'leather', 'comfortable'] },
  { id: 409, name: 'Leather Bag 10', imageUrl: 'https://source.unsplash.com/random/?leather,bag,10', price: 239.99, rating: 4.9, reviews: 220, description: 'The ultimate leather bag experience.', tags: ['bag', 'leather', 'ultimate'] },

  // Leather Wallets/Accessories
  { id: 500, name: 'Leather Wallet 1', imageUrl: 'https://source.unsplash.com/random/?leather,accessory,1', price: 49.99, rating: 4.5, reviews: 150, description: 'Elegant leather wallet for men.', tags: ['wallet', 'leather', 'fashion'] },
  { id: 501, name: 'Leather Wallet 2', imageUrl: 'https://source.unsplash.com/random/?leather,accessory,2', price: 59.99, rating: 4.7, reviews: 200, description: 'High-quality leather wallet for optimal organization.', tags: ['wallet', 'leather', 'organization'] },
  { id: 502, name: 'Leather Wallet 3', imageUrl: 'https://source.unsplash.com/random/?leather,accessory,3', price: 69.99, rating: 4.3, reviews: 180, description: 'Durable leather wallet with RFID protection.', tags: ['wallet', 'leather', 'protection'] },
  { id: 503, name: 'Leather Wallet 4', imageUrl: 'https://source.unsplash.com/random/?leather,accessory,4', price: 79.99, rating: 4.6, reviews: 120, description: 'Classic leather wallet that never goes out of style.', tags: ['wallet', 'leather', 'classic'] },
  { id: 504, name: 'Leather Wallet 5', imageUrl: 'https://source.unsplash.com/random/?leather,accessory,5', price: 89.99, rating: 4.5, reviews: 230, description: 'Stylish leather wallet for everyday use.', tags: ['wallet', 'leather', 'daily'] },
  { id: 505, name: 'Leather Wallet 6', imageUrl: 'https://source.unsplash.com/random/?leather,accessory,6', price: 99.99, rating: 4.4, reviews: 140, description: 'Trendy leather wallet for modern individuals.', tags: ['wallet', 'leather', 'trendy'] },
  { id: 506, name: 'Leather Wallet 7', imageUrl: 'https://source.unsplash.com/random/?leather,accessory,7', price: 109.99, rating: 4.8, reviews: 110, description: 'Superior quality leather wallet for long-lasting use.', tags: ['wallet', 'leather', 'quality'] },
  { id: 507, name: 'Leather Wallet 8', imageUrl: 'https://source.unsplash.com/random/?leather,accessory,8', price: 119.99, rating: 4.5, reviews: 160, description: 'Comfortable leather wallet for easy carrying.', tags: ['wallet', 'leather', 'comfortable'] },
  { id: 508, name: 'Leather Wallet 9', imageUrl: 'https://source.unsplash.com/random/?leather,accessory,9', price: 129.99, rating: 4.7, reviews: 190, description: 'Fashionable leather wallet for stylish usage.', tags: ['wallet', 'leather', 'fashionable'] },
  { id: 509, name: 'Leather Wallet 10', imageUrl: 'https://source.unsplash.com/random/?leather,accessory,10', price: 139.99, rating: 4.9, reviews: 220, description: 'The ultimate leather wallet experience.', tags: ['wallet', 'leather', 'ultimate'] }
];

export default products;