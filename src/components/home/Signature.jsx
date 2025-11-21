import { motion } from 'framer-motion';
import { Coffee, Croissant, IceCream } from 'lucide-react';
import Card from '../common/Card';

const Signature = () => {
  const products = [
    {
      id: 1,
      icon: Coffee,
      name: 'Signature Espresso',
      description: 'Rich, bold, and perfectly balanced. Made from our specially sourced Ethiopian beans.',
      price: '$4.50',
      color: 'bg-coffeeBrown',
    },
    {
      id: 2,
      icon: Croissant,
      name: 'Butter Croissant',
      description: 'Flaky, buttery layers baked fresh every morning. A French classic done right.',
      price: '$3.50',
      color: 'bg-matchaGreen',
    },
    {
      id: 3,
      icon: IceCream,
      name: 'Matcha Latte',
      description: 'Creamy, smooth ceremonial grade matcha with your choice of milk.',
      price: '$5.50',
      color: 'bg-matchaGreen',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffeeBrown mb-4">
            Our Signature Selection
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Handpicked favorites that keep our community coming back for more
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 text-center h-full">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <product.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-coffeeBrown mb-3">
                  {product.name}
                </h3>
                <p className="text-charcoal/70 mb-6">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <p className="text-3xl font-bold text-matchaGreen mb-4">
                    {product.price}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-warmBeige text-coffeeBrown font-semibold rounded-xl hover:bg-matchaGreen hover:text-white transition-colors duration-300"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Signature;