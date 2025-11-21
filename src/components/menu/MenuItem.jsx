import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import Card from '../common/Card';

const MenuItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    
    // TODO: Add to cart logic - will connect to CartContext
    // Example: addToCart({ ...item, quantity });
    console.log('Adding to cart:', { ...item, quantity });

    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 1000);
  };

  return (
    <Card className="overflow-hidden group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-warmBeige">
        {/* Placeholder - replace with actual image */}
        <div className="w-full h-full flex items-center justify-center text-coffeeBrown/20">
          <ShoppingCart className="w-24 h-24" />
        </div>
        {/* <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        /> */}
        
        {item.tag && (
          <div className="absolute top-4 right-4 bg-matchaGreen text-white px-3 py-1 rounded-full text-sm font-medium">
            {item.tag}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-coffeeBrown">{item.name}</h3>
          <span className="text-2xl font-bold text-matchaGreen">${item.price}</span>
        </div>
        
        <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-charcoal">Quantity:</span>
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg bg-warmBeige flex items-center justify-center hover:bg-coffeeBrown hover:text-white transition-colors"
            >
              <Minus className="w-4 h-4" />
            </motion.button>
            <span className="w-8 text-center font-semibold">{quantity}</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg bg-warmBeige flex items-center justify-center hover:bg-coffeeBrown hover:text-white transition-colors"
            >
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`
            w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2
            transition-all duration-300
            ${isAdding
              ? 'bg-matchaGreen text-white'
              : 'bg-coffeeBrown text-white hover:bg-coffeeBrown/90'
            }
          `}
        >
          <ShoppingCart className="w-5 h-5" />
          {isAdding ? 'Added!' : 'Add to Cart'}
        </motion.button>
      </div>
    </Card>
  );
};

export default MenuItem;