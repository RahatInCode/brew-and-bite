import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-coffeeBrown text-white hover:bg-coffeeBrown/90 shadow-soft hover:shadow-medium',
    secondary: 'bg-matchaGreen text-white hover:bg-matchaGreen/90 shadow-soft hover:shadow-medium',
    outline: 'border-2 border-coffeeBrown text-coffeeBrown hover:bg-coffeeBrown hover:text-white',
    ghost: 'text-coffeeBrown hover:bg-warmBeige',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </motion.button>
  );
};

export default Button;