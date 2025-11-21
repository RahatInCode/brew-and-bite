import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, User, Coffee } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Mock cart count - will be replaced with actual cart context
  const cartCount = 3; // TODO: Replace with actual cart count from CartContext

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' 
          : 'bg-transparent py-5'
        }
      `}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Coffee className="w-8 h-8 text-coffeeBrown" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-coffeeBrown">
                Brew & Bite
              </h1>
              <p className="text-xs text-matchaGreen -mt-1">Café</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  relative font-medium transition-colors duration-300
                  ${location.pathname === link.path 
                    ? 'text-coffeeBrown' 
                    : 'text-charcoal/70 hover:text-coffeeBrown'
                  }
                `}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-matchaGreen"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/cart" className="relative">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ShoppingCart className="w-6 h-6 text-coffeeBrown" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-matchaGreen text-white text-xs rounded-full flex items-center justify-center font-bold"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>
            <Link to="/login">
              <Button variant="ghost" size="sm" icon={User}>
                Login
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="primary" size="sm">
                Order Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-coffeeBrown"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block py-2 px-4 rounded-lg font-medium transition-colors
                      ${location.pathname === link.path 
                        ? 'bg-warmBeige text-coffeeBrown' 
                        : 'text-charcoal/70 hover:bg-warmBeige/50'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex gap-2 pt-2">
                  <Link to="/cart" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <ShoppingCart className="w-4 h-4" />
                      Cart ({cartCount})
                    </Button>
                  </Link>
                  <Link to="/login" className="flex-1">
                    <Button variant="primary" size="sm" className="w-full">
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;