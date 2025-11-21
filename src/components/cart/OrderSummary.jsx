import { motion } from 'framer-motion';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';

const OrderSummary = ({ subtotal, deliveryFee, tax, onCheckout }) => {
  const total = subtotal + deliveryFee + tax;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-2xl shadow-soft sticky top-24"
    >
      <h3 className="text-2xl font-bold text-coffeeBrown mb-6">Order Summary</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-charcoal/70">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-charcoal/70">
          <span>Delivery Fee</span>
          <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-charcoal/70">
          <span>Tax (10%)</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-warmBeige pt-3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-coffeeBrown">Total</span>
            <span className="text-2xl font-bold text-matchaGreen">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <Button 
        variant="primary" 
        size="lg" 
        className="w-full"
        icon={ArrowRight}
        onClick={onCheckout}
      >
        Proceed to Checkout
      </Button>

      <div className="mt-4 p-4 bg-warmBeige/50 rounded-xl">
        <p className="text-sm text-charcoal/70 text-center">
          🎉 Free delivery on orders over $20
        </p>
      </div>
    </motion.div>
  );
};

export default OrderSummary;