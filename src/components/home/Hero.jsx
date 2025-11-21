import { motion } from 'framer-motion';
import { ArrowRight, Coffee } from 'lucide-react';
import { Link } from 'react-router';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-warm">
      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-20 w-72 h-72 bg-matchaGreen/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-coffeeBrown/10 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-soft"
            >
              <Coffee className="w-4 h-4 text-coffeeBrown" />
              <span className="text-sm font-medium text-coffeeBrown">
                Now serving in your neighborhood
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-coffeeBrown mb-6 leading-tight"
            >
              Fresh brews.
              <br />
              <span className="text-matchaGreen">Fresh bites.</span>
              <br />
              Fresh vibes.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-charcoal/70 mb-8 max-w-xl"
            >
              Experience the perfect blend of premium coffee, artisanal pastries, 
              and a warm community atmosphere. Your daily escape awaits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/menu">
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  Order Now
                </Button>
              </Link>
              <Link to="/menu">
                <Button variant="outline" size="lg">
                  View Menu
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-coffeeBrown">500+</h3>
                <p className="text-sm text-charcoal/60">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-coffeeBrown/20" />
              <div>
                <h3 className="text-3xl font-bold text-coffeeBrown">50+</h3>
                <p className="text-sm text-charcoal/60">Menu Items</p>
              </div>
              <div className="w-px h-12 bg-coffeeBrown/20" />
              <div>
                <h3 className="text-3xl font-bold text-coffeeBrown">4.9★</h3>
                <p className="text-sm text-charcoal/60">Rating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Placeholder for hero image */}
              <div className="aspect-square bg-gradient-to-br from-coffeeBrown to-coffeeBrown/80 rounded-3xl shadow-medium overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  <Coffee className="w-48 h-48" />
                </div>
                {/* Replace above div with actual image: */}
                {/* <img 
                  src="/path-to-hero-coffee-image.jpg" 
                  alt="Fresh coffee and pastries" 
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-medium"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-matchaGreen/20 rounded-full flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-matchaGreen" />
                </div>
                <div>
                  <p className="font-bold text-coffeeBrown">Free Delivery</p>
                  <p className="text-xs text-charcoal/60">On orders over $20</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;