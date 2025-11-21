import { useState } from 'react';
import { motion } from 'framer-motion';

const Input = ({ 
  label, 
  type = 'text', 
  error, 
  icon: Icon,
  className = '',
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-coffeeBrown/40" />
        )}
        <input
          type={type}
          className={`
            w-full px-4 py-3 ${Icon ? 'pl-12' : ''} 
            bg-white border-2 rounded-xl
            transition-all duration-300
            ${error 
              ? 'border-red-400 focus:border-red-500' 
              : 'border-warmBeige focus:border-matchaGreen'
            }
            focus:outline-none focus:shadow-soft
            text-charcoal placeholder-transparent
          `}
          placeholder={label}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(e.target.value !== '');
          }}
          {...props}
        />
        <motion.label
          initial={false}
          animate={{
            top: isFocused || hasValue || props.value ? '0' : '50%',
            fontSize: isFocused || hasValue || props.value ? '0.75rem' : '1rem',
            color: error ? '#f87171' : isFocused ? '#7CA982' : '#3C2F2F',
          }}
          className={`
            absolute ${Icon ? 'left-12' : 'left-4'} 
            -translate-y-1/2 bg-white px-2 pointer-events-none
            font-medium transition-colors duration-300
          `}
        >
          {label}
        </motion.label>
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1 ml-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input;