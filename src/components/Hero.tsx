import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Use useMemo to prevent slides array recreation on every render
  const slides = useMemo(() => [
    {
      image: "/assets/slider/linen_slider_pic.webp",
      title: "Classy Gatherings",
      subtitle: "Linen Sarees",
      description: "LINEN threads weave tales of old,<br/>Handloom's tender touch, stories unfold.",
    },
    {
      image: "/assets/slider/Kantha_Maroon_model2_result.webp",
      title: "Woven Narratives",
      subtitle: "Kantha Sarees",
      description: "Work of nostalgia,every stitch a tale,<br/>Threads of kantha thatnever fail.",
    },
    {
      image: "/assets/slider/Jamdani_slider_result.webp",
      title: "Jamdani Blooming",
      subtitle: "Jamdani Sarees",
      description: "Weaving magic in every thread,<br/>JAMDANI's splendor,in every fold ahead.",
    },
    {
      image: "/assets/slider/Mulmul.webp",
      title: "Summer Edits",
      subtitle: "Mulmul Sarees",
      description: "Gentle as moonlight, Light as air,<br/>MULMULs drape you beyond compare. ",
    }
  ], []);

  // Preload the first slide image as priority
  useEffect(() => {
    const img = new Image();
    img.src = slides[0].image;
    img.onload = () => {
      setImagesLoaded(prev => ({ ...prev, 0: true }));
      setInitialLoadComplete(true);
    };
    
    // Preload other images in the background
    slides.slice(1).forEach((slide, idx) => {
      const bgImg = new Image();
      bgImg.src = slide.image;
      bgImg.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [idx + 1]: true }));
      };
    });
  }, [slides]);

  // Minimum swipe distance to trigger slide change (in pixels)
  const minSwipeDistance = 50;

  // Memoize the startSlideshow function to prevent recreation on each render
  const startSlideshow = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
  }, [slides.length]);

  useEffect(() => {
    if (initialLoadComplete) {
      startSlideshow();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [initialLoadComplete, startSlideshow]);

  const changeSlide = (index: number) => {
    if (animating) return;

    setAnimating(true);
    setCurrentSlide(index);

    setTimeout(() => {
      setAnimating(false);
    }, 800);

    // Restart the slideshow timer whenever slide is changed manually
    if (initialLoadComplete) {
      startSlideshow();
    }
  };

  const goToNextSlide = () => {
    changeSlide((currentSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);

    // Pause slideshow during touch interaction
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNextSlide();
    } else if (isRightSwipe) {
      goToPrevSlide();
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);

    // Restart slideshow
    if (initialLoadComplete) {
      startSlideshow();
    }
  };

  // Mouse drag event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);

    // Pause slideshow during drag interaction
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const distance = dragStart - e.clientX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNextSlide();
    } else if (isRightSwipe) {
      goToPrevSlide();
    }

    // Reset dragging state
    setIsDragging(false);

    // Restart slideshow
    if (initialLoadComplete) {
      startSlideshow();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (initialLoadComplete) {
        startSlideshow();
      }
    }
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

  // If images haven't loaded yet, show a skeleton
  if (!initialLoadComplete) {
    return (
      <div className="h-screen relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
        <Skeleton className="absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <Skeleton className="h-8 w-40 mx-auto mb-4" />
            <Skeleton className="h-16 w-72 mx-auto mb-6" />
            <Skeleton className="h-6 w-96 mx-auto mb-8" />
            <div className="flex justify-center space-x-4">
              <Skeleton className="h-12 w-36" />
              <Skeleton className="h-12 w-36" />
            </div>
          </div>
        </div>
        
        {/* Slide Indicators with enhanced styling */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
          {slides.map((_, index) => (
            <Skeleton 
              key={index} 
              className={cn(
                "h-1 rounded-full",
                index === 0 ? "w-20" : "w-12"
              )}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.section
      ref={heroRef}
      className="relative h-screen overflow-hidden cursor-grab active:cursor-grabbing"
      initial={{ opacity: 0.4, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      animate={{ opacity: 1, backgroundColor: "rgba(255, 255, 255, 0)" }}
      transition={{ duration: 0.8 }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
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
              {/* Show a skeleton while this specific slide image is loading */}
              {!imagesLoaded[index] && (
                <Skeleton className="absolute inset-0 z-20" />
              )}
              
              <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: imagesLoaded[index] ? 1 : 0,
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
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      className="max-w-lg mx-auto text-base md:text-xl mb-8 font-sans"
                      initial={{ opacity: 0.4, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    />

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
                        <Link to="/collections">
                          Explore Collection
                          <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="bg-transparent hover:bg-saree-off-white/20 text-saree-off-white border border-saree-off-white font-medium rounded-md group"
                      >
                        <Link to="/about">
                          About Us
                          <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 md:px-8 z-20 pointer-events-none">
        <Button
          onClick={goToPrevSlide}
          className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 pointer-events-auto"
          size="icon"
          variant="ghost"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          onClick={goToNextSlide}
          className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 pointer-events-auto"
          size="icon"
          variant="ghost"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

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
    </motion.section>
  );
};

export default Hero;
