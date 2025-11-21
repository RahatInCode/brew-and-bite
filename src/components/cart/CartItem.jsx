import { motion } from 'framer-motion';
import { Plus, Minus, Trash2 } from 'lucide-react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex gap-4 bg-white p-4 rounded-xl shadow-soft"
    >
      {/* Image */}
      <div className="w-24 h-24 bg-warmBeige rounded-lg flex-shrink-0 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-coffeeBrown/20">
          {/* Placeholder - replace with actual image */}
          <span className="text-xs">IMG</span>
        </div>
        {/* <img src={item.image} alt={item.name} className="w-full h-full object-cover" /> */}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-bold text-coffeeBrown mb-1">{item.name}</h3>
        <p className="text-sm text-charcoal/60 mb-2">${item.price} each</p>
        
        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
            className="w-7 h-7 rounded-lg bg-warmBeige flex items-center justify-center hover:bg-coffeeBrown hover:text-white transition-colors"
          >
            <Minus className="w-4 h-4" />
          </motion.button>
          <span className="w-8 text-center font-semibold">{item.quantity}</span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-7 h-7 rounded-lg bg-warmBeige flex items-center justify-center hover:bg-coffeeBrown hover:text-white transition-colors"
          >
            <Plus className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Price & Remove */}
      <div className="flex flex-col items-end justify-between">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 className="w-5 h-5" />
        </motion.button>
        <p className="font-bold text-lg text-coffeeBrown">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
};

export default CartItem;