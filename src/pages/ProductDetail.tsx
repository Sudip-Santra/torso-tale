import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Phone } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import products, { Product, ProductDetails } from "@/data/products";
import { featuredProducts } from "@/data/featuredProducts";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState<Product | null>(null);

  // Scroll to top on component mount or when ID changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [id]);

  // Fetch product data based on ID
  useEffect(() => {
    // Simulate loading delay
    setLoading(true);

    const fetchData = () => {
      // First check in featured products (from home page)
      let foundProduct = featuredProducts.find(product => product.id === id);

      // If not found in featured products, check in regular products collection
      if (!foundProduct) {
        foundProduct = products.find(product => product.id === id);
      }

      if (foundProduct) {
        setProductData(foundProduct);
      } else {
        // Fallback to first product if ID not found
        setProductData(products[0]);
      }

      // Simulate network delay
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    fetchData();
  }, [id]);

  // Check if this is a featured product from home page
  const isFeaturedProduct = featuredProducts.some(product => product.id === id);

  const handleGoBack = () => {
    // Check if we came from collections page - if so, we want to preserve scroll position
    const fromCollections = document.referrer.includes('/collections');
    
    // First set the UI to a loading state to make transitions smoother
    setLoading(true);
    
    // Store a flag in sessionStorage to indicate we are returning from product detail
    // This will be used in Collections.tsx to know we're coming back
    sessionStorage.setItem('returningFromProductDetail', 'true');
    
    // Add a short delay for a smoother transition
    setTimeout(() => {
      if (isFeaturedProduct && !fromCollections) {
        // If coming from featured products on home page, navigate to collections
        navigate('/collections');
      } else {
        // Go back using browser history which will preserve our scroll position in sessionStorage
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
              {/* Product Images skeleton */}
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
              
              {/* Product Info skeleton */}
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
            
            {/* Additional skeleton content for the product details section */}
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
        {/* Footer removed from loading state */}
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
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={handleGoBack}
            className="mb-6 flex items-center text-gray-600 hover:text-saree-teal"
          >
            <ArrowLeft size={18} className="mr-2" />
            {isFeaturedProduct ? 'View All Collections' : 'Back to Collections'}
          </Button>

          {/* Main product grid - image and basic info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            {/* Product Images */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl h-[500px]"
              >
                <img
                  src={productData.images[activeImage]}
                  alt={productData.name}
                  className={`w-full h-full object-cover ${id === 'linen-featured-002'
                      ? 'object-center md:object-[center_-280px]' // Mobile: centered | Desktop: shift up
                      : isFeaturedProduct
                        ? 'object-center md:object-[center_-100px]' // Mobile: centered | Desktop: shift up
                        : 'object-center'
                    }`}


                />
              </motion.div>

              <div className="flex space-x-3 overflow-x-auto pb-2">
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
                      className={`w-full h-full object-cover`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div>
              {/* Product Title and Category */}
              <div className="mb-4">
                <Badge className="mb-2 bg-white text-saree-deep-teal border-saree-teal/30 px-2.5 py-1 text-xs font-medium">
                  {productData.category}
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900">{productData.name}</h1>
                <p className="text-2xl font-semibold text-saree-deep-teal mt-2">₹{productData.price.toLocaleString()}</p>
              </div>

              {/* Contact Buttons - Prominent at the top */}
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
                  href={`https://wa.me/919130653501?text=Hi, I'm interested in purchasing the saree: *${productData.name} (${productData.details["Color"]})*`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-saree-teal hover:bg-saree-deep-teal text-white font-medium py-4 px-6 rounded-md transition-colors shadow-lg"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6 mr-2" />
                  Message on WhatsApp
                </a>
              </motion.div>

              <Separator className="my-6" />

              {/* Description */}
              <div className="mb-6 bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                  <span className="w-1.5 h-6 bg-saree-teal rounded-full mr-2"></span>
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">{productData.description}</p>
              </div>

              {/* Key Highlights */}
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

          {/* Product Details and Wash Care side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Product Details */}
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

            {/* Wash Care */}
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
      
      {/* Only render footer when content is fully loaded */}
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