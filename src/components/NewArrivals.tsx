import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "Banarasi Silk Saree with Gold Zari",
      price: 15999,
      originalPrice: 19999,
      image: "/assets/saree10.jpg",
      category: "Silk",
      isNew: true
    },
    {
      id: 2,
      name: "Kanjivaram Pure Silk Saree",
      price: 22500,
      originalPrice: 27999,
      image: "/assets/saree11.jpg",
      category: "Wedding Collection",
      isNew: true
    },
    {
      id: 3,
      name: "Chanderi Cotton Silk Saree",
      price: 4999,
      originalPrice: 5999,
      image: "/assets/saree13.jpg",
      category: "Cotton Silk",
      isNew: true
    },
    {
      id: 4,
      name: "Designer Georgette Printed Saree",
      price: 3299,
      image: "/assets/saree14.jpg",
      category: "Designer",
      isNew: true
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  // Start animation when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="new-arrivals"
      className="py-24 bg-gradient-to-b from-white to-saree-purple/5"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="inline-block px-4 py-1 bg-[#38BDF8]/10 text-[#0EA5E9] rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Fresh From The Loom
          </motion.span>
          <motion.h2
            className="text-4xl font-serif font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            New Arrivals
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#0EA5E9] mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our latest collection of handpicked sarees, fresh from the looms of India's finest artisans
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="flex h-[500px]"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="h-full w-full flex flex-col justify-end">
                <ProductCard {...product} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a href="#" className="group relative inline-flex items-center px-8 py-3 bg-transparent hover:bg-[#0EA5E9] text-[#0EA5E9] hover:text-white border border-[#0EA5E9] rounded-md transition-colors duration-300 overflow-hidden">
            <span className="absolute inset-0 w-0 bg-[#0EA5E9] transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10 flex items-center font-montserrat">View All Collections <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" /></span>
          </a>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -bottom-10 left-10 w-32 h-32 rounded-full bg-saree-purple/5 hidden lg:block"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-20 right-10 w-24 h-24 rounded-full bg-saree-gold/5 hidden lg:block"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </section>
  );
};

export default NewArrivals;
