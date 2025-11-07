import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import products, { Product, ProductDetails } from "@/data/products";
import { featuredProducts } from "@/data/featuredProducts";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  // Scroll to top on component mount or when ID changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [id]);

  // Fetch product data based on ID
  useEffect(() => {
    setLoading(true);

    const fetchData = () => {
      let foundProduct = featuredProducts.find(product => product.id === id);

      if (!foundProduct) {
        foundProduct = products.find(product => product.id === id);
      }

      if (foundProduct) {
        setProductData(foundProduct);
      } else {
        setProductData(products[0]);
      }

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    fetchData();
  }, [id]);

  const isFeaturedProduct = featuredProducts.some(product => product.id === id);

  // Handle image navigation
  const goToNextImage = () => {
    if (productData && productData.images) {
      setActiveImage((prev) => 
        prev === productData.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const goToPrevImage = () => {
    if (productData && productData.images) {
      setActiveImage((prev) => 
        prev === 0 ? productData.images.length - 1 : prev - 1
      );
    }
  };

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    // Store the initial touch position
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    // Skip if no start position recorded
    if (!touchStart) return;
    
    setTouchEnd(e.targetTouches[0].clientX);
    
    // Only provide visual feedback if swipe is significant
    const currentSwipeDistance = touchStart - e.targetTouches[0].clientX;
    if (Math.abs(currentSwipeDistance) > 40) {
      if (currentSwipeDistance > 0) {
        setSwipeDirection('left');
      } else {
        setSwipeDirection('right');
      }
      
      // Prevent default to avoid scrolling when swiping in the dialog
      if (isDialogOpen) {
        e.preventDefault();
      }
    }
  };

  const handleTouchEnd = () => {
    if (!productData || !touchStart || !touchEnd) return;
    
    const minSwipeDistance = 50; // Increased threshold for more intentional swipes
    const swipeDistance = touchStart - touchEnd;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped left, go to next image
        goToNextImage();
      } else {
        // Swiped right, go to previous image
        goToPrevImage();
      }
    }

    // Reset touch coordinates and swipe direction
    setTouchStart(0);
    setTouchEnd(0);
    setSwipeDirection(null);
  };

  const handleGoBack = () => {
    const fromCollections = document.referrer.includes('/collections');
    setLoading(true);
    sessionStorage.setItem('returningFromProductDetail', 'true');
    
    setTimeout(() => {
      if (isFeaturedProduct && !fromCollections) {
        navigate('/collections');
      } else {
        navigate(-1);
      }
    }, 200);
  };

  // Loading state
  if (loading) {
    return (
      <>
        <NavBar />
        <motion.div 
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
          className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-white to-gray-50"
        >
          <div className="container mx-auto px-4 py-12">
            <Button
              variant="ghost"
              onClick={handleGoBack}
              className="mb-6 flex items-center text-gray-600 hover:text-saree-teal"
            >
              <ArrowLeft size={18} className="mr-2" />
              {isFeaturedProduct ? 'View All Collections' : 'Back to Collections'}
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="space-y-4">
                <div className="bg-white rounded-xl overflow-hidden shadow-xl h-[500px]">
                  <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                </div>
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {[...Array(4)].map((_, index) => (
                    <div 
                      key={index} 
                      className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0 bg-gray-200 animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="animate-pulse">
                  <div className="w-1/4 h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="w-2/3 h-8 bg-gray-200 rounded mb-2"></div>
                  <div className="w-1/3 h-6 bg-gray-200 rounded mb-8"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-14 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-14 bg-gray-200 rounded animate-pulse"></div>
                </div>
                
                <div className="h-px bg-gray-200 my-6"></div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="h-6 w-1/3 bg-gray-200 animate-pulse mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
                <div className="h-6 w-1/3 bg-gray-200 mb-4"></div>
                <div className="grid grid-cols-1 gap-3">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-md">
                      <div className="h-4 w-1/3 bg-gray-200 mb-2"></div>
                      <div className="h-4 w-2/3 bg-gray-200"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-saree-teal/5 p-6 rounded-xl shadow-sm animate-pulse">
                <div className="h-6 w-1/3 bg-gray-200 mb-4"></div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-4 w-4 rounded-full bg-gray-200 mr-2"></div>
                      <div className="h-4 w-full bg-gray-200"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4 py-12">
          <Button
            variant="ghost"
            onClick={handleGoBack}
            className="mb-6 flex items-center text-gray-600 hover:text-saree-teal"
          >
            <ArrowLeft size={18} className="mr-2" />
            {isFeaturedProduct ? 'View All Collections' : 'Back to Collections'}
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            <div className="space-y-4">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-xl h-[500px] group cursor-pointer relative"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onClick={() => setIsDialogOpen(true)}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center z-10">
                      <div className="bg-white/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                        <ZoomIn className="h-6 w-6 text-saree-deep-teal" />
                      </div>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPrevImage();
                      }} 
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="h-6 w-6 text-gray-800" />
                    </button>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNextImage();
                      }} 
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="h-6 w-6 text-gray-800" />
                    </button>
                    
                    <motion.img
                      key={activeImage}
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      src={productData.images[activeImage]}
                      alt={productData.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-0 border-none bg-black/90 overflow-hidden flex items-center justify-center">
                  <button
                    onClick={() => setIsDialogOpen(false)}
                    className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 text-gray-900 hover:bg-gray-200 transition-all shadow-md"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  
                  <button 
                    onClick={goToPrevImage} 
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 md:p-4 rounded-full z-20 shadow-md"
                  >
                    <ChevronLeft className="h-6 w-6 md:h-7 md:w-7 text-gray-800" />
                  </button>
                  
                  <button 
                    onClick={goToNextImage} 
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 md:p-4 rounded-full z-20 shadow-md"
                  >
                    <ChevronRight className="h-6 w-6 md:h-7 md:w-7 text-gray-800" />
                  </button>
                  
                  <div 
                    className="w-full h-full flex items-center justify-center relative"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {/* Swipe direction indicators */}
                    {swipeDirection === 'left' && (
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-saree-teal/70 p-3 rounded-full z-30 animate-pulse">
                        <ChevronRight className="h-8 w-8 text-white" />
                      </div>
                    )}
                    {swipeDirection === 'right' && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-saree-teal/70 p-3 rounded-full z-30 animate-pulse">
                        <ChevronLeft className="h-8 w-8 text-white" />
                      </div>
                    )}
                    
                    <motion.img
                      key={`fullscreen-${activeImage}`}
                      initial={{ opacity: 0.7 }}
                      animate={{ 
                        opacity: 1,
                        x: swipeDirection === 'left' ? -20 : swipeDirection === 'right' ? 20 : 0
                      }}
                      transition={{ duration: 0.2 }}
                      src={productData.images[activeImage]}
                      alt={productData.name}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <div 
                className="flex space-x-3 overflow-x-auto pb-2"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {productData.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={cn(
                      "relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0 transition-all",
                      activeImage === index ? "ring-2 ring-saree-teal" : "ring-1 ring-gray-200"
                    )}
                  >
                    <img
                      src={image}
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Badge className="mb-2 bg-white text-saree-deep-teal border-saree-teal/30 px-2.5 py-1 text-xs font-medium">
                {productData.category}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900">{productData.name}</h1>
              <p className="text-2xl font-semibold text-saree-deep-teal mt-2">₹{productData.price.toLocaleString()}</p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <a
                  href="tel:+919130653501"
                  className="inline-flex items-center justify-center bg-saree-teal hover:bg-saree-deep-teal text-white font-medium py-4 px-6 rounded-md transition-colors shadow-lg"
                >
                  <Phone size={20} className="mr-2" />
                  Call Now to Purchase
                </a>
                <a
                  href={`https://wa.me/919130653501?text=Hi, I'm interested in purchasing the saree: *${productData.name} (${productData.details["Color"]})*%0A%0AProduct Link: ${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-saree-teal hover:bg-saree-deep-teal text-white font-medium py-4 px-6 rounded-md transition-colors shadow-lg"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6 mr-2" />
                  Message on WhatsApp
                </a>
              </motion.div>

              <Separator className="my-6" />

              <div className="mb-6 bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                  <span className="w-1.5 h-6 bg-saree-teal rounded-full mr-2"></span>
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">{productData.description}</p>
              </div>

              <div className="mb-6 bg-saree-teal/5 p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                  <span className="w-1.5 h-6 bg-saree-teal rounded-full mr-2"></span>
                  Key Highlights
                </h2>
                <ul className="list-none space-y-3 text-gray-600">
                  {productData.highlights.map((highlight: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start"
                      style={{ alignItems: 'flex-start' }}
                    >
                      <span className="text-saree-teal mr-1 text-xl leading-6 select-none">•</span>
                      <span className="block text-base leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="w-1.5 h-6 bg-saree-teal rounded-full mr-2"></span>
                Product Details
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(productData.details).map(([key, value]: [string, string], index: number) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-md flex flex-col">
                    <span className="text-sm text-gray-500">{key}</span>
                    <span className="font-medium text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-saree-teal/5 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                <span className="w-1.5 h-6 bg-saree-teal rounded-full mr-2"></span>
                Wash Care
              </h2>
              <ul className="space-y-2 text-gray-600">
                {productData.washCare.map((instruction: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <span className="text-saree-teal mr-2">•</span>
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default ProductDetail;