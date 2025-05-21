import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      title: "Silk Sarees",
      image: "/assets/saree4.jpg",
      description: "Luxurious silk sarees for every occasion"
    },
    {
      title: "Cotton Sarees",
      image: "/assets/saree6.jpg",
      description: "Comfort meets elegance in our cotton collection"
    },
    {
      title: "Wedding Collection",
      image: "/assets/saree8.jpg",
      description: "Make your special day unforgettable"
    },
    {
      title: "Designer Sarees",
      image: "/assets/saree9.jpg",
      description: "Contemporary designs with traditional roots"
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
      id="collections" 
      className="py-24 bg-gradient-to-b from-white to-saree-teal/5"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="inline-block px-4 py-1 bg-saree-light-teal text-saree-teal rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover Our Range
          </motion.span>
          <motion.h2 
            className="text-4xl font-serif font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Collections
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-saree-teal mx-auto mb-6 rounded-full"
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
            Explore our curated collections of exquisite sarees, handpicked for their quality, design and craftsmanship
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col w-full">
                <div className="relative w-full h-[500px] overflow-hidden">
                  <motion.img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-calligraphy font-bold mb-2">{category.title}</h3>
                    <p className="text-sm md:text-base opacity-90 mb-4">{category.description}</p>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 w-full group"
                      asChild
                    >
                      <Link to="/collections">
                        <span className="font-medium">Explore Collection</span>
                        <motion.span
                          className="ml-2 inline-block"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <ArrowRight size={16} />
                        </motion.span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Link to="/collections" className="mt-10 group relative inline-flex items-center px-8 py-3 bg-transparent hover:bg-[#0EA5E9] text-[#0EA5E9] hover:text-white border border-[#0EA5E9] rounded-md transition-colors duration-300 overflow-hidden">
            <span className="absolute inset-0 w-0 bg-[#0EA5E9] transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10 flex items-center font-montserrat">View All Collections <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" /></span>
          </Link>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -bottom-10 left-10 w-32 h-32 rounded-full bg-saree-teal/5 hidden lg:block"
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

export default Categories;
