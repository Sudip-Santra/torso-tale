import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import featuredProducts from '@/data/featuredProducts';

const Categories = () => {
  // Categories linked to featured products
  const categories = [
    {
      title: "Mul Melody",
      category: "Mulmul",
      image: "/assets/homepage-collection/Mulmul1700_navyblue2.webp",
      description: "Mul's soft whisper, weaver's gentle art, just the saree but touches the heart.",
      productId: "mulmul-featured-001"
    },
    {
      title: "The Prism",
      category: "Linen",
      image: "/assets/homepage-collection/Barfi_linen_purple2.webp",
      description: "LINEN threads weave tales of old, Handloom's tender touch, stories unfold.",
      productId: "linen-featured-001"
    },
    {
      title: "Moonlight",
      category: "Tissue",
      image: "/assets/homepage-collection/raaga_tissue_skyblue2.webp",
      description: "Tissue soft, RAAGA's calm hue, A saree's elegance, for me and you.",
      productId: "tissue-featured-001"
    },
    {
      title: "Rang-e-Resham",
      category: "Khadi",
      image: "/assets/homepage-collection/Resham_Kota1.webp",
      description: "Royal glow on RESHAM KOTA's grid, Elegance woven, in every thread and bead.",
      productId: "resham-featured-001"
    },
    {
      title: "Asymmetry",
      category: "Linen",
      image: "/assets/homepage-collection/karat_linen_blue1.webp",
      description: "Linen's weave and karat design is so bold, Enhances the charm, that never grows old.",
      productId: "linen-featured-002"
    },
    {
      title: "Phooldaan",
      category: "Jamdani", // Updated category to match the product
      image: "/assets/homepage-collection/Jamdani_2.webp",
      description: "Weaving magic in every thread, JAMDANI's splendor,in every fold ahead.",
      productId: "jamdani-featured-001"
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
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
        staggerChildren: 0.15,
        when: "beforeChildren"
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="inline-block px-4 py-1 bg-saree-light-teal text-white rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover Our Range
          </motion.span>
          <motion.h2
            className="text-4xl font-serif font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Collections
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-saree-teal mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Explore our especially designed bunch of premium handwoven sarees crafted for women in all kind of Torsos.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex"
            >
              <Link 
                to={`/product/${category.productId}`}
                className="block w-full cursor-pointer" 
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col w-full group h-full">
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                      <h3 className="text-xl md:text-2xl font-calligraphy font-bold mb-2">{category.title}</h3>
                      <p className="text-sm md:text-base opacity-90 mb-4">{category.description}</p>

                      <div className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white border border-white/30 px-3 py-2 rounded-md w-full flex items-center justify-center group transition-all duration-300">
                        <span className="font-medium">View Details</span>
                        <motion.span
                          className="ml-2 inline-block"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <ArrowRight size={16} />
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link to="/collections" className="group relative inline-flex items-center px-10 py-3.5 bg-transparent hover:bg-[#096c6c] text-[#096c6c] hover:text-white border-2 border-[#096c6c] rounded-md transition-colors duration-300 overflow-hidden">
            <span className="absolute inset-0 w-0 bg-[#096c6c] transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10 flex items-center font-montserrat text-lg font-medium">View All Collections <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" /></span>
          </Link>
        </motion.div>

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
      </div>
    </section>
  );
};

export default Categories;