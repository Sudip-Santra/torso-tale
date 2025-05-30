import { useState, useEffect, useRef } from "react";
import { ChevronRight, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const slides = [
    {
      image: "/assets/saree1.jpg",
      title: "Handcrafted Elegance",
      subtitle: "Premium Silk Sarees",
      description: "Discover our exquisite collection of silk sarees, handcrafted with love and tradition.",
    },
    {
      image: "/assets/saree2.jpg",
      title: "Wedding Collection",
      subtitle: "Bridal Sarees",
      description: "Make your special day even more memorable with our stunning bridal collection.",
    },
    {
      image: "/assets/saree13.jpg",
      title: "Festive Season",
      subtitle: "Celebration Sarees",
      description: "Celebrate in style with our festive collection of vibrant and elegant sarees.",
    }
  ];

  const startSlideshow = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startSlideshow();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);// Empty dependency array to only run once on mount

  const changeSlide = (index: number) => {
    if (animating) return;
    
    setAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setAnimating(false);
    }, 800);

    // Restart the slideshow timer whenever slide is changed manually
    startSlideshow();
  };

  // Parallax effect for background images
  const calculateParallaxOffset = (mouseX: number, mouseY: number) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Calculate the offset from center (normalized between -1 and 1)
    const offsetX = (mouseX - centerX) / centerX;
    const offsetY = (mouseY - centerY) / centerY;
    
    // Scale down the effect
    return { x: offsetX * 15, y: offsetY * 15 };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const offset = calculateParallaxOffset(clientX, clientY);
    setParallaxOffset(offset);
  };

  return (
    <motion.section 
      className="relative h-screen overflow-hidden"
      initial={{ opacity: 0.4, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      animate={{ opacity: 1, backgroundColor: "rgba(255, 255, 255, 0)" }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence mode="sync">
        {slides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0.3, scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              animate={{ opacity: 0.98, scale: 1, backgroundColor: "rgba(255, 255, 255, 0)" }}
              exit={{ opacity: 0.5, scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              transition={{ 
                opacity: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
                backgroundColor: { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
              }}
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ scale: 1.05 }}
                animate={{ 
                  scale: 1,
                  x: parallaxOffset.x,
                  y: parallaxOffset.y
                }}
                transition={{ 
                  scale: { duration: 3.5, ease: [0.25, 0.1, 0.25, 1] },
                  x: { duration: 0.4, ease: "easeOut" },
                  y: { duration: 0.4, ease: "easeOut" }
                }}
                onMouseMove={handleMouseMove}
              />
              
              {/* White fade overlay */}
              <motion.div
                className="absolute inset-0 z-10 bg-white pointer-events-none"
                initial={{ opacity: 0.25 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0.2 }}
                transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1] }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center text-white">
                  <motion.div
                    initial={{ opacity: 0.3, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <motion.h2 
                      className="font-handwriting text-2xl md:text-4xl mb-2 font-medium"
                      initial={{ opacity: 0.3, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {slide.subtitle}
                    </motion.h2>
                    
                    <motion.h1 
                      className="font-calligraphy text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
                      initial={{ opacity: 0.4, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {slide.title.split('').map((char, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0.5, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.02 }}
                          className="inline-block"
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                      ))}
                    </motion.h1>
                    
                    <motion.p 
                      className="max-w-lg mx-auto text-base md:text-xl mb-8 font-sans"
                      initial={{ opacity: 0.4, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {slide.description}
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-col sm:flex-row items-center justify-center gap-4"
                      initial={{ opacity: 0.4, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <Button
                        asChild
                        variant="default"
                        size="lg"
                        className="bg-saree-teal hover:bg-saree-deep-teal text-saree-off-white font-medium rounded-md shadow-lg hover:shadow-xl group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link to="/collections" className="flex items-center">
                            <span className="font-sans font-semibold tracking-wide">Explore Collection</span>
                            <motion.span
                              className="ml-2"
                              initial={{ x: 0 }}
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <ChevronRight className="w-5 h-5" />
                            </motion.span>
                          </Link>
                        </motion.div>
                      </Button>
                      
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="bg-transparent hover:bg-saree-off-white/20 text-saree-off-white border border-saree-off-white font-medium rounded-md group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link to="/collections" className="flex items-center">
                            <ShoppingBag className="mr-2 w-5 h-5" />
                            <span className="font-sans font-semibold tracking-wide">Shop Now</span>
                          </Link>
                        </motion.div>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Slide Indicators with enhanced styling */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => changeSlide(index)}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              currentSlide === index 
                ? "bg-white w-20" 
                : "bg-white/50 w-12 hover:bg-white/70"
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-16 h-16 border-2 border-white/30 rounded-full"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 right-20 w-8 h-8 border border-white/20 rounded-full"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.section>
  );
};

export default Hero;
