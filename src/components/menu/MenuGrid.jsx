import { motion } from 'framer-motion';
import MenuItem from './MenuItem';

const MenuGrid = ({ items }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {items.map((menuItem) => (
        <motion.div key={menuItem.id} variants={item}>
          <MenuItem item={menuItem} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MenuGrid;