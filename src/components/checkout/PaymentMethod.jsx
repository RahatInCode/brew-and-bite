import { motion } from 'framer-motion';
import { CreditCard, Wallet, Banknote } from 'lucide-react';

const PaymentMethod = ({ selected, onSelect }) => {
  const methods = [
    {
      id: 'card',
      icon: CreditCard,
      title: 'Credit/Debit Card',
      description: 'Visa, Mastercard, Amex',
    },
    {
      id: 'wallet',
      icon: Wallet,
      title: 'Digital Wallet',
      description: 'Apple Pay, Google Pay',
    },
    {
      id: 'cash',
      icon: Banknote,
      title: 'Cash on Delivery',
      description: 'Pay when you receive',
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-coffeeBrown mb-6">Payment Method</h3>
      <div className="space-y-3">
        {methods.map((method) => (
          <motion.button
            key={method.id}
            type="button"
            onClick={() => onSelect(method)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`
              w-full p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-4
              ${selected?.id === method.id
                ? 'border-matchaGreen bg-matchaGreen/5 shadow-soft'
                : 'border-warmBeige bg-white hover:border-matchaGreen/50'
              }
            `}
          >
            <div className={`
              w-12 h-12 rounded-xl flex items-center justify-center
              ${selected?.id === method.id ? 'bg-matchaGreen text-white' : 'bg-warmBeige text-coffeeBrown'}
            `}>
              <method.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-coffeeBrown">{method.title}</h4>
              <p className="text-sm text-charcoal/60">{method.description}</p>
            </div>
            <div className={`
              w-6 h-6 rounded-full border-2 flex items-center justify-center
              ${selected?.id === method.id ? 'border-matchaGreen' : 'border-warmBeige'}
            `}>
              {selected?.id === method.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-3 h-3 rounded-full bg-matchaGreen"
                />
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;