
import { useState, useEffect } from "react";
import { ChevronRight, ShoppingBag } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1610030181087-680bb2bb74df?q=80&w=2070&auto=format",
      title: "Handcrafted Elegance",
      subtitle: "Premium Silk Sarees",
      description: "Discover our exquisite collection of silk sarees, handcrafted with love and tradition.",
    },
    {
      image: "https://images.unsplash.com/photo-1610508500445-a4592435e27e?q=80&w=2070&auto=format",
      title: "Wedding Collection",
      subtitle: "Bridal Sarees",
      description: "Make your special day even more memorable with our stunning bridal collection.",
    },
    {
      image: "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?q=80&w=2066&auto=format",
      title: "Festive Season",
      subtitle: "Celebration Sarees",
      description: "Celebrate in style with our festive collection of vibrant and elegant sarees.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const changeSlide = (index: number) => {
    if (animating) return;
    
    setAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setAnimating(false);
    }, 700);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <div className={`transition-all duration-700 delay-300 transform ${
                currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
                <h2 className="text-xl md:text-3xl mb-2 font-light">{slide.subtitle}</h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="max-w-lg mx-auto text-base md:text-xl mb-8">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#collections"
                    className="group relative inline-flex items-center bg-saree-teal hover:bg-saree-deep-teal text-white font-medium px-8 py-3 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>Explore Collection</span>
                    <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#new-arrivals"
                    className="group relative inline-flex items-center bg-transparent hover:bg-white/20 text-white border border-white font-medium px-8 py-3 rounded-md transition-colors duration-300"
                  >
                    <ShoppingBag className="mr-2 w-5 h-5" />
                    <span>Shop Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators with enhanced styling */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-20" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
