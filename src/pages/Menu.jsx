import { useState } from 'react';
import { motion } from 'framer-motion';
import CategoryFilter from '../components/menu/CategoryFilter';
import MenuGrid from '../components/menu/MenuGrid';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // TODO: Replace with API call to backend
  // Example: useEffect(() => { fetch('/api/products').then(res => res.json()).then(setMenuItems) }, [])
  
  const menuItems = [
    // Coffee
    { id: 1, name: 'Signature Espresso', category: 'Coffee', price: 4.50, description: 'Rich, bold, and perfectly balanced Ethiopian beans', tag: 'Popular' },
    { id: 2, name: 'Cappuccino', category: 'Coffee', price: 5.00, description: 'Classic Italian espresso with steamed milk foam' },
    { id: 3, name: 'Caramel Macchiato', category: 'Coffee', price: 5.50, description: 'Espresso with vanilla, caramel, and steamed milk' },
    { id: 4, name: 'Cold Brew', category: 'Coffee', price: 4.75, description: 'Smooth, less acidic cold-steeped coffee' },
    
    // Drinks
    { id: 5, name: 'Matcha Latte', category: 'Drinks', price: 5.50, description: 'Ceremonial grade matcha with your choice of milk', tag: 'New' },
    { id: 6, name: 'Chai Tea Latte', category: 'Drinks', price: 5.00, description: 'Spiced black tea with steamed milk' },
    { id: 7, name: 'Hot Chocolate', category: 'Drinks', price: 4.50, description: 'Rich chocolate with whipped cream' },
    { id: 8, name: 'Fresh Orange Juice', category: 'Drinks', price: 4.00, description: 'Freshly squeezed oranges' },
    
    // Pastries
    { id: 9, name: 'Butter Croissant', category: 'Pastries', price: 3.50, description: 'Flaky, buttery layers baked fresh daily', tag: 'Popular' },
    { id: 10, name: 'Chocolate Muffin', category: 'Pastries', price: 3.75, description: 'Double chocolate chip muffin' },
    { id: 11, name: 'Blueberry Scone', category: 'Pastries', price: 4.00, description: 'Buttery scone with fresh blueberries' },
    { id: 12, name: 'Cinnamon Roll', category: 'Pastries', price: 4.25, description: 'Warm cinnamon roll with cream cheese frosting' },
    
    // Snacks
    { id: 13, name: 'Avocado Toast', category: 'Snacks', price: 7.50, description: 'Smashed avocado on sourdough with cherry tomatoes' },
    { id: 14, name: 'Breakfast Sandwich', category: 'Snacks', price: 6.50, description: 'Egg, cheese, and bacon on a brioche bun' },
    { id: 15, name: 'Granola Bowl', category: 'Snacks', price: 6.00, description: 'House-made granola with yogurt and berries' },
    { id: 16, name: 'Bagel with Cream Cheese', category: 'Snacks', price: 4.50, description: 'Fresh bagel with herb cream cheese' },
  ];

  const categories = ['All', 'Coffee', 'Drinks', 'Pastries', 'Snacks'];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 gradient-warm">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-coffeeBrown mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Handcrafted beverages and fresh baked goods made with love
          </p>
        </motion.div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <MenuGrid items={filteredItems} />
      </div>
    </div>
  );
};

export default Menu;