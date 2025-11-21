import { motion } from 'framer-motion';
import { Leaf, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We source ethically and minimize our environmental impact in everything we do.',
    },
    {
      icon: Heart,
      title: 'Freshness',
      description: 'Every item is made fresh daily using the finest ingredients available.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We\'re more than a café—we\'re a gathering place for neighbors and friends.',
    },
    {
      icon: Award,
      title: 'Craftsmanship',
      description: 'Our baristas are trained artisans passionate about the perfect cup.',
    },
  ];

  const timeline = [
    { year: '2020', event: 'Brew & Bite Café was born from a dream to create a community space' },
    { year: '2021', event: 'Opened our first location and welcomed 10,000+ customers' },
    { year: '2022', event: 'Expanded menu with artisanal pastries and won "Best Café" award' },
    { year: '2023', event: 'Launched online ordering and delivery service' },
    { year: '2024', event: 'Growing our community, one cup at a time' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Story Section */}
      <section className="gradient-warm py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl font-bold text-coffeeBrown mb-6">
                Our Story
              </h1>
              <div className="space-y-4 text-charcoal/70 text-lg">
                <p>
                  Brew & Bite Café started with a simple idea: create a space where quality 
                  coffee, delicious food, and genuine connections come together.
                </p>
                <p>
                  Founded in 2020 by coffee enthusiasts who believed their neighborhood 
                  deserved better, we've grown from a small corner shop into a beloved 
                  community hub.
                </p>
                <p>
                  Every morning, we wake up excited to serve you the freshest brews and 
                  bites, made with ingredients we're proud of and recipes we've perfected 
                  through passion and dedication.
                </p>
                <p className="font-semibold text-coffeeBrown">
                  This is more than a café. This is where community happens.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square bg-coffeeBrown/10 rounded-2xl"
                >
                  {/* Placeholder for café interior images */}
                  <div className="w-full h-full flex items-center justify-center text-coffeeBrown/20">
                    IMG {i}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-coffeeBrown mb-4">
              Our Values
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-to-br from-matchaGreen to-matchaGreen/70 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-coffeeBrown mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 gradient-warm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-coffeeBrown mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Milestones that shaped who we are today
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-matchaGreen rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.year.slice(2)}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-matchaGreen/30 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-coffeeBrown mb-2">
                    {item.year}
                  </h3>
                  <p className="text-charcoal/70">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;