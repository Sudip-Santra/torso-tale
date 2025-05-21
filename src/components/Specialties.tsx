import { ShieldCheck, Truck, ArrowRight, Package, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Specialties = () => {
  const specialties = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-saree-teal" />,
      title: "Quality Assurance",
      description: "Every saree is handpicked for quality and authenticity, ensuring you receive only the finest craftsmanship."
    },
    {
      icon: <Truck className="w-12 h-12 text-saree-teal" />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders above ₹5000 with secure packaging to ensure your saree arrives in perfect condition."
    },
    {
      icon: <Package className="w-12 h-12 text-saree-teal" />,
      title: "Easy Returns",
      description: "Not satisfied with your purchase? Return within 7 days for a full refund or exchange with our hassle-free policy."
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  
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
      className="py-24 bg-gradient-to-b from-white to-saree-light-teal/20"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="inline-block px-4 py-1 bg-saree-light-teal text-white rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Promises
          </motion.span>
          <motion.h2 
            className="text-4xl font-serif font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-saree-deep-teal mx-auto mb-6 rounded-full"
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
            We pride ourselves on providing exceptional service and products to our customers
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {specialties.map((specialty, index) => (
            <motion.div 
              key={index}
              variants={itemVariants} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-saree-light-teal/30 text-center group"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.div className="flex justify-center mb-6 relative">
                <motion.div 
                  className="p-3 rounded-full bg-saree-light-teal/20 group-hover:bg-saree-light-teal/40 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {specialty.icon}
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-serif font-bold mb-4 text-gray-800">{specialty.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{specialty.description}</p>
              <Link to="/about" className="inline-flex items-center text-saree-teal hover:text-saree-deep-teal font-medium underline-animation group">
                Learn More <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Link to="/about" className="group relative inline-flex items-center px-8 py-3 bg-transparent hover:bg-saree-teal text-saree-teal hover:text-white border border-saree-teal rounded-md transition-colors duration-300 overflow-hidden">
            <span className="absolute inset-0 w-0 bg-saree-teal transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10 flex items-center">Know More <Star className="w-4 h-4 ml-2" /></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Specialties;
