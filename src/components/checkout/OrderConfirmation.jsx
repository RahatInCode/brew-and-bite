import { motion } from 'framer-motion';
import { CheckCircle, Download, Home } from 'lucide-react';
import { Link } from 'react-router';
import Button from '../common/Button';

const OrderConfirmation = ({ orderNumber, estimatedTime }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      {/* Success Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        className="mb-8"
      >
        <div className="w-24 h-24 bg-matchaGreen/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-16 h-16 text-matchaGreen" />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold text-coffeeBrown mb-4"
      >
        Order Confirmed!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-charcoal/70 mb-8"
      >
        Thank you for your order. We're preparing your items with care.
      </motion.p>

      {/* Order Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-warmBeige/50 rounded-2xl p-6 mb-8 max-w-md mx-auto"
      >
        <div className="space-y-3">
          <div>
            <p className="text-sm text-charcoal/60">Order Number</p>
            <p className="text-2xl font-bold text-coffeeBrown">{orderNumber}</p>
          </div>
          <div className="border-t border-warmBeige pt-3">
            <p className="text-sm text-charcoal/60">Estimated Delivery</p>
            <p className="text-lg font-semibold text-matchaGreen">{estimatedTime}</p>
          </div>
        </div>
      </motion.div>

      {/* Digital Receipt */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-2xl shadow-soft p-6 max-w-md mx-auto mb-8"
      >
        <h3 className="font-bold text-lg text-coffeeBrown mb-4">Order Summary</h3>
        {/* This would contain actual order items - simplified for demo */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-charcoal/70">2x Signature Espresso</span>
            <span className="font-semibold">$9.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-charcoal/70">1x Butter Croissant</span>
            <span className="font-semibold">$3.50</span>
          </div>
          <div className="border-t border-warmBeige pt-2 mt-2">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span className="text-matchaGreen">$12.50</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button variant="outline" size="lg" icon={Download}>
          Download Receipt
        </Button>
        <Link to="/">
          <Button variant="primary" size="lg" icon={Home}>
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default OrderConfirmation;