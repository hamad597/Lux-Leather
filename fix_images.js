const fs = require('fs');

const path = 'C:\\Users\\Abbas  computers\\.gemini\\antigravity\\scratch\\Lux-Leather-Repo\\src\\data\\products.ts';
let content = fs.readFileSync(path, 'utf8');

const categoryImages = {
  'Jackets': [
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=400'
  ],
  'Shoes': [
    'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=400'
  ],
  'Belts': [
    'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400'
  ],
  'Bags': [
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=400'
  ],
  'Wallets/Accessories': [
    'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1537233856-11f1bf4b14d2?auto=format&fit=crop&q=80&w=400'
  ]
};

const regex = /{([^}]+)category: '([^']+)'([^}]+)image: '([^']+)'([^}]+)}/g;

content = content.replace(/{([^}]+)}/g, (match) => {
  let catMatch = match.match(/category:\s*'([^']+)'/);
  if (catMatch) {
    let category = catMatch[1];
    let images = categoryImages[category] || categoryImages['Jackets'];
    let randomImage = images[Math.floor(Math.random() * images.length)];
    return match.replace(/image:\s*'[^']+'/, `image: '${randomImage}'`);
  }
  return match;
});

fs.writeFileSync(path, content);
console.log("Replaced images successfully!");
