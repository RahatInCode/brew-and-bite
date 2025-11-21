import { motion } from 'framer-motion';
import { Bike, Store, Clock } from 'lucide-react';

const DeliveryMethod = ({ selected, onSelect }) => {
  const methods = [
    {
      id: 'delivery',
      icon: Bike,
      title: 'Delivery',
      time: '30-45 min',
      price: 3.99,
    },
    {
      id: 'pickup',
      icon: Store,
      title: 'Pickup',
      time: '15-20 min',
      price: 0,
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-coffeeBrown mb-6">Delivery Method</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {methods.map((method) => (
          <motion.button
            key={method.id}
            type="button"
            onClick={() => onSelect(method)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              p-6 rounded-xl border-2 text-left transition-all duration-300
              ${selected?.id === method.id
                ? 'border-matchaGreen bg-matchaGreen/5 shadow-medium'
                : 'border-warmBeige bg-white hover:border-matchaGreen/50'
              }
            `}
          >
            <method.icon className={`w-8 h-8 mb-3 ${selected?.id === method.id ? 'text-matchaGreen' : 'text-coffeeBrown'}`} />
            <h4 className="font-bold text-lg text-coffeeBrown mb-1">{method.title}</h4>
            <div className="flex items-center gap-2 text-sm text-charcoal/70 mb-2">
              <Clock className="w-4 h-4" />
              <span>{method.time}</span>
            </div>
            <p className="font-bold text-matchaGreen">
              {method.price === 0 ? 'Free' : `$${method.price.toFixed(2)}`}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default DeliveryMethod;