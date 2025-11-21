import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import CartItem from '../components/cart/CartItem';
import OrderSummary from '../components/cart/OrderSummary';
import Button from '../components/common/Button';

const Cart = () => {
  const navigate = useNavigate();
  
  // TODO: Replace with actual cart state from CartContext
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Signature Espresso', price: 4.50, quantity: 2, image: '' },
    { id: 2, name: 'Butter Croissant', price: 3.50, quantity: 1, image: '' },
    { id: 3, name: 'Matcha Latte', price: 5.50, quantity: 1, image: '' },
  ]);

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // TODO: Validate cart and user authentication before proceeding
    navigate('/checkout');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 20 ? 0 : 3.99;
  const tax = subtotal * 0.1;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 gradient-warm flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <ShoppingBag className="w-24 h-24 text-coffeeBrown/30 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-coffeeBrown mb-4">
            Your cart is empty
          </h2>
          <p className="text-charcoal/70 mb-8">
            Start adding some delicious items to your cart!
          </p>
          <Link to="/menu">
            <Button variant="primary" size="lg">
              Browse Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 gradient-warm">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/menu" className="inline-flex items-center gap-2 text-coffeeBrown hover:text-matchaGreen transition-colors mb-4">
            <ArrowLeft className="w-5 h-5" />
            Continue Shopping
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-coffeeBrown">
            Your Cart
          </h1>
          <p className="text-charcoal/70 mt-2">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div>
            <OrderSummary
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              tax={tax}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;