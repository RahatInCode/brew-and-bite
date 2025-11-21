import { motion } from 'framer-motion';
import { Award, Leaf, Zap, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Quality Beans',
      description: 'Premium, ethically sourced coffee beans from the world\'s best farms.',
    },
    {
      icon: Leaf,
      title: 'Fresh Bakery',
      description: 'Artisanal pastries and baked goods made fresh daily in-house.',
    },
    {
      icon: Zap,
      title: 'Fast Service',
      description: 'Quick preparation without compromising on quality or taste.',
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'A welcoming space where neighbors become friends.',
    },
  ];

  return (
    <section className="py-20 gradient-warm">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffeeBrown mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            More than just a café—we're your daily ritual, your creative space, your community hub
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-soft text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-matchaGreen to-matchaGreen/70 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-coffeeBrown mb-3">
                {feature.title}
              </h3>
              <p className="text-charcoal/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;