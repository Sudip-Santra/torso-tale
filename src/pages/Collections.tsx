import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, Filter, Search, X } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

// Types
type SareeCategory = 
  | "Linen" 
  | "Linen Tissue" 
  | "Mulmul" 
  | "Raaga Tissue" 
  | "Khadi" 
  | "Kantha Stitch" 
  | "Handpainted"
  | "All";

interface Saree {
  id: number;
  name: string;
  price: number;
  category: SareeCategory;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const Collections = () => {
  // State
  const [selectedCategory, setSelectedCategory] = useState<SareeCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sarees, setSarees] = useState<Saree[]>([]);

  // Generate sarees data using images from assets folder
  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    // Categories
    const categories: SareeCategory[] = [
      "Linen", 
      "Linen Tissue", 
      "Mulmul", 
      "Raaga Tissue", 
      "Khadi", 
      "Kantha Stitch", 
      "Handpainted"
    ];
    
    // Names
    const sareeNames = [
      "Handwoven Pure Cotton Saree",
      "Elegant Handcrafted Saree",
      "Traditional Festive Saree",
      "Contemporary Floral Saree",
      "Modern Silk Blend Saree",
      "Classic Pattern Saree",
      "Designer Embroidered Saree",
      "Lightweight Summer Saree",
      "Vibrant Color Block Saree",
      "Designer Wedding Saree",
      "Premium Handloom Saree",
      "Artisanal Collection Saree",
      "Signature Torso Tale Saree",
      "Exclusive Designer Saree",
      "Limited Edition Saree"
    ];
    
    // Generate sarees with random categories from available images
    const generatedSarees: Saree[] = [
      { id: 1, name: sareeNames[0], price: 4999, category: categories[0], image: "/assets/saree1.jpg", isNew: true },
      { id: 2, name: sareeNames[1], price: 6499, category: categories[1], image: "/assets/saree2.jpg", isBestseller: true },
      { id: 3, name: sareeNames[2], price: 5299, category: categories[2], image: "/assets/saree3.jpg" },
      { id: 4, name: sareeNames[3], price: 7999, category: categories[3], image: "/assets/saree4.jpg", isNew: true },
      { id: 5, name: sareeNames[4], price: 3999, category: categories[4], image: "/assets/saree6.jpg" },
      { id: 6, name: sareeNames[5], price: 8499, category: categories[5], image: "/assets/saree8.jpg", isBestseller: true },
      { id: 7, name: sareeNames[6], price: 11999, category: categories[6], image: "/assets/saree9.jpg" },
      { id: 8, name: sareeNames[7], price: 4799, category: categories[0], image: "/assets/saree10.jpg" },
      { id: 9, name: sareeNames[8], price: 5599, category: categories[1], image: "/assets/saree11.jpg", isNew: true },
      { id: 10, name: sareeNames[9], price: 9999, category: categories[2], image: "/assets/saree13.jpg", isBestseller: true },
      { id: 11, name: sareeNames[10], price: 6299, category: categories[3], image: "/assets/saree14.jpg" },
      { id: 12, name: sareeNames[11], price: 7499, category: categories[4], image: "/assets/saree15.jpg" },
      { id: 13, name: sareeNames[12], price: 12999, category: categories[5], image: "/assets/saree16.jpg", isNew: true },
      { id: 14, name: sareeNames[13], price: 8999, category: categories[6], image: "/assets/saree17.jpg" },
      { id: 15, name: sareeNames[14], price: 13999, category: categories[0], image: "/assets/saree18.jpg", isBestseller: true },
      { id: 16, name: sareeNames[0], price: 5499, category: categories[1], image: "/assets/saree19.jpg" },
    ];

    setSarees(generatedSarees);
    
    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  // Filter sarees based on selected category and search query
  const filteredSarees = sarees.filter((saree) => {
    const matchesCategory = selectedCategory === "All" || saree.category === selectedCategory;
    const matchesSearch = saree.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <NavBar />
      <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="relative inline-block mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Collections</h1>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-saree-teal"></span>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Explore our handpicked collection of premium handwoven sarees crafted for the modern woman.
            </p>
          </motion.div>

          {/* Search and Filter Mobile Toggle */}
          <div className="flex justify-between items-center mb-8 md:hidden">
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text"
                placeholder="Search sarees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-gray-300 focus:border-saree-teal transition-colors"
              />
            </div>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setShowFilters(!showFilters)}
              className="ml-3 border-gray-300"
            >
              {showFilters ? <X size={18} /> : <Filter size={18} />}
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Search and Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "md:w-64 flex-shrink-0 space-y-6",
                !showFilters && "hidden md:block"
              )}
            >
              {/* Search */}
              <div className="hidden md:block">
                <h3 className="text-lg font-medium mb-3 text-gray-800">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    type="text"
                    placeholder="Search sarees..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-gray-300 focus:border-saree-teal transition-colors"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-800">Categories</h3>
                <ul className="space-y-2">
                  {["All", "Linen", "Linen Tissue", "Mulmul", "Raaga Tissue", "Khadi", "Kantha Stitch", "Handpainted"].map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category as SareeCategory)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md transition-colors text-sm font-medium",
                          selectedCategory === category 
                            ? "bg-saree-teal/10 text-saree-deep-teal"
                            : "text-gray-600 hover:bg-gray-100"
                        )}
                      >
                        {category}
                        {selectedCategory === category && (
                          <span className="float-right">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M13.3334 4.5L6.00002 11.8333L2.66669 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>

            {/* Products Grid */}
            <div className="flex-1">
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(9)].map((_, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-100 animate-pulse rounded-xl overflow-hidden"
                      style={{ height: '400px' }}
                    />
                  ))}
                </div>
              ) : (
                <>
                  {/* Results count */}
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-gray-600">
                      Showing <span className="font-medium">{filteredSarees.length}</span> results
                    </p>
                    <div className="hidden md:block">
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        Sort by: <span className="font-medium ml-1 text-gray-900">Featured</span>
                      </Button>
                    </div>
                  </div>

                  {/* Products grid */}
                  {filteredSarees.length === 0 ? (
                    <div className="text-center py-16">
                      <h3 className="text-xl font-medium text-gray-800 mb-2">No sarees found</h3>
                      <p className="text-gray-600">Try adjusting your search or filters to find what you're looking for.</p>
                    </div>
                  ) : (
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      <AnimatePresence>
                        {filteredSarees.map((saree) => (
                          <motion.div
                            key={saree.id}
                            variants={itemVariants}
                            layout
                            className="group"
                          >
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                              <div className="relative h-80 overflow-hidden">
                                {/* Product Image */}
                                <img 
                                  src={saree.image} 
                                  alt={saree.name} 
                                  className="w-full h-full object-cover object-center transition-transform duration-500"
                                />
                                
                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex flex-col gap-2">
                                  {saree.isNew && (
                                    <Badge className="bg-saree-teal text-white border-0 px-2.5 py-1 text-xs font-medium">
                                      New
                                    </Badge>
                                  )}
                                  {saree.isBestseller && (
                                    <Badge className="bg-saree-orange text-white border-0 px-2.5 py-1 text-xs font-medium">
                                      Bestseller
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              
                              <div className="p-4">
                                <div className="flex items-center justify-between mb-1">
                                  <h3 className="font-medium text-gray-900 truncate flex-1">{saree.name}</h3>
                                  <Badge className="bg-white text-saree-deep-teal border-saree-teal/30 px-2.5 py-1 text-xs font-medium">
                                    {saree.category}
                                  </Badge>
                                </div>
                                <p className="text-saree-deep-teal font-semibold mb-3">₹{saree.price.toLocaleString()}</p>
                                <Link to={`/product/${saree.id}`}>
                                  <Button 
                                    className="w-full bg-saree-teal hover:bg-saree-deep-teal text-white"
                                    size="sm"
                                  >
                                    View
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Collections; 