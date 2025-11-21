import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, glass = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8, boxShadow: '0 12px 40px rgba(60, 47, 47, 0.12)' } : {}}
      transition={{ duration: 0.3 }}
      className={`${glass ? 'card-glass' : 'bg-white rounded-2xl shadow-soft'} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;