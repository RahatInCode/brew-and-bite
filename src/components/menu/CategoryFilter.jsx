import { motion } from 'framer-motion';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            px-6 py-3 rounded-full font-medium transition-all duration-300
            ${activeCategory === category
              ? 'bg-coffeeBrown text-white shadow-medium'
              : 'bg-white text-charcoal hover:bg-warmBeige'
            }
          `}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;