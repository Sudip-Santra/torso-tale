import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Phone } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Dummy product database
const productDatabase = [
    {     id: "1",     name: "Handwoven Pure Cotton Saree",     price: 4999,     category: "Linen",     image: "/assets/saree1.jpg"   },  {     id: "2",     name: "Elegant Handcrafted Saree",     price: 6499,     category: "Linen Tissue",     image: "/assets/saree2.jpg"   },  {     id: "3",     name: "Traditional Festive Saree",     price: 5299,     category: "Mulmul",     image: "/assets/saree3.jpg"   },  {     id: "4",     name: "Contemporary Floral Saree",     price: 7999,     category: "Raaga Tissue",     image: "/assets/saree4.jpg"   },  {     id: "5",     name: "Modern Silk Blend Saree",     price: 3999,     category: "Khadi",     image: "/assets/saree6.jpg"   },  {     id: "6",     name: "Classic Pattern Saree",     price: 8499,     category: "Kantha Stitch",     image: "/assets/saree8.jpg"   },  {     id: "7",     name: "Designer Embroidered Saree",     price: 11999,     category: "Handpainted",     image: "/assets/saree9.jpg"   },  {     id: "8",     name: "Lightweight Summer Saree",     price: 4799,     category: "Linen",     image: "/assets/saree10.jpg"   },  {     id: "9",     name: "Vibrant Color Block Saree",     price: 5599,     category: "Linen Tissue",     image: "/assets/saree11.jpg"   },  {     id: "10",     name: "Designer Wedding Saree",     price: 9999,     category: "Mulmul",     image: "/assets/saree13.jpg"   },  {     id: "11",     name: "Premium Handloom Saree",     price: 6299,     category: "Raaga Tissue",     image: "/assets/saree14.jpg"   },  {     id: "12",     name: "Artisanal Collection Saree",     price: 7499,     category: "Khadi",     image: "/assets/saree15.jpg"   },  {     id: "13",     name: "Signature Torso Tale Saree",     price: 12999,     category: "Kantha Stitch",     image: "/assets/saree16.jpg"   },  {     id: "14",     name: "Exclusive Designer Saree",     price: 8999,     category: "Handpainted",     image: "/assets/saree17.jpg"   },  {     id: "15",     name: "Limited Edition Saree",     price: 13999,     category: "Linen",     image: "/assets/saree18.jpg"   },  {     id: "16",     name: "Handwoven Pure Cotton Saree",     price: 5499,     category: "Linen Tissue",     image: "/assets/saree19.jpg"   },
];

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState<any>(null);

  // Simulate fetching product data based on ID
  useEffect(() => {
    // Simulate loading delay
    setLoading(true);
    
    // Find the product based on ID or use a fallback if not found
    const fetchData = () => {
      const foundProduct = productDatabase.find(product => product.id === id);
      
      if (foundProduct) {
        // Generate additional images by cycling through available images
        const additionalImages = [
          foundProduct.image,
          productDatabase[(parseInt(foundProduct.id) + 1) % productDatabase.length].image,
          productDatabase[(parseInt(foundProduct.id) + 2) % productDatabase.length].image,
          productDatabase[(parseInt(foundProduct.id) + 3) % productDatabase.length].image,
        ];
        
        setProductData({
          ...foundProduct,
          // Keep these as dummy data for now
          images: additionalImages,
          description: "Experience the softness and elegance of pure saree. Handwoven with precision and care, this saree boasts intricate designs and patterns that reflect the rich heritage of India's textile tradition. The fabric is renowned for its lightweight, breathable, and comfortable texture, making it perfect for everyday wear or special occasions. These sarees are perfect for hot and humid climate.",
          highlights: [
            "Comfort: Crafted from handwoven cotton, ensuring breathability and lightness.",
            "Traditional Craftsmanship: Features handloom design all over and pallu, showcasing India's weaving artistry."
          ],
          details: {
            "Product Type": "Saree",
            "Saree Length": "6.5 meters | Width: 47 inches",
            "Fabric": `Pure ${foundProduct.category}`,
            "Color": ["Navy Blue", "Maroon", "Forest Green", "Deep Purple", "Crimson"][Math.floor(Math.random() * 5)],
            "Blouse Piece": Math.random() > 0.5 ? "Yes" : "No",
            "Weaving Cluster": ["West Bengal", "Tamil Nadu", "Odisha", "Gujarat", "Rajasthan"][Math.floor(Math.random() * 5)],
            "Craft Technique": "Handloom"
          },
          washCare: [
            "Dry clean /Light hand wash only",
            "Avoid steam ironing",
            "Use extremely low heat for ironing"
          ]
        });
      } else {
        // Fallback to first product if ID not found
        const fallbackProduct = productDatabase[0];
        setProductData({
          ...fallbackProduct,
          images: [
            fallbackProduct.image,
            productDatabase[1].image,
            productDatabase[2].image,
            productDatabase[3].image,
          ],
          description: "Experience the softness and elegance of pure saree. Handwoven with precision and care, this saree boasts intricate designs and patterns that reflect the rich heritage of India's textile tradition.",
          highlights: [
            "Comfort: Crafted from handwoven cotton, ensuring breathability and lightness.",
            "Traditional Craftsmanship: Features handloom design all over and pallu, showcasing India's weaving artistry."
          ],
          details: {
            "Product Type": "Saree",
            "Saree Length": "6.5 meters | Width: 47 inches",
            "Fabric": "Pure Cotton",
            "Color": "Navy Blue",
            "Blouse Piece": "No",
            "Weaving Cluster": "West Bengal",
            "Craft Technique": "Handloom"
          },
          washCare: [
            "Dry clean /Light hand wash only",
            "Avoid steam ironing",
            "Use extremely low heat for ironing"
          ]
        });
      }
      
      // Simulate network delay
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    
    fetchData();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  // Loading state
  if (loading) {
    return (
      <>
        <NavBar />
        <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 py-12">
            <Button 
              variant="ghost" 
              onClick={handleGoBack} 
              className="mb-6 flex items-center text-gray-600 hover:text-saree-teal"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Collections
            </Button>
            
            <div className="animate-pulse">
              <div className="h-[500px] bg-gray-200 rounded-xl mb-4"></div>
              <div className="w-1/3 h-8 bg-gray-200 rounded mb-2"></div>
              <div className="w-2/3 h-10 bg-gray-200 rounded mb-4"></div>
              <div className="w-1/4 h-6 bg-gray-200 rounded mb-8"></div>
              <div className="h-12 bg-gray-200 rounded mb-8"></div>
              <div className="h-40 bg-gray-200 rounded mb-8"></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={handleGoBack} 
            className="mb-6 flex items-center text-gray-600 hover:text-saree-teal"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Collections
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
                  className="w-full h-full object-cover object-center"
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
                    <img src={image} alt={`Product view ${index + 1}`} className="w-full h-full object-cover" />
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
              
              {/* Call Now Button - Prominent at the top */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="my-6"
              >
                <a 
                  href="tel:+919876543210" 
                  className="inline-flex items-center justify-center w-full bg-saree-teal hover:bg-saree-deep-teal text-white font-medium py-4 px-6 rounded-md transition-colors shadow-lg"
                >
                  <Phone size={20} className="mr-2" />
                  Call Now to Purchase
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
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-saree-teal text-white rounded-full text-xs mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{highlight}</span>
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
          
          {/* Call Now Again - Prominent at the bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center justify-center w-full bg-saree-teal hover:bg-saree-deep-teal text-white font-medium py-4 px-6 rounded-md transition-colors shadow-lg"
            >
              <Phone size={20} className="mr-2" />
              Call Now to Purchase
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail; 