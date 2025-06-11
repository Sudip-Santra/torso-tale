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

type PriceRange = {
  min: number;
  max: number | null;
  label: string;
};

type SortOption = "featured" | "price-asc" | "price-desc";

interface Saree {
  id: number;
  name: string;
  price: number;
  category: SareeCategory;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
  keywords: string[];
}

const Collections = () => {
  // State
  const [selectedCategory, setSelectedCategory] = useState<SareeCategory>("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sarees, setSarees] = useState<Saree[]>([]);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showSortOptions, setShowSortOptions] = useState(false);

  // Price ranges
  const priceRanges: PriceRange[] = [
    { min: 0, max: 4999, label: "Under ₹5000" },
    { min: 5000, max: 6999, label: "₹5000 - ₹6999" },
    { min: 7000, max: 8999, label: "₹7000 - ₹8999" },
    { min: 9000, max: 10999, label: "₹9000 - ₹10999" },
    { min: 11000, max: 12999, label: "₹11000 - ₹12999" },
    { min: 13000, max: null, label: "₹13000 & above" }
  ];

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

    // Keywords for each category
    const categoryKeywords = {
      "Linen": ["linen", "breathable", "light", "summer", "casual", "office", "daily wear"],
      "Linen Tissue": ["linen", "tissue", "zari", "festive", "party", "light", "elegant"],
      "Mulmul": ["mulmul", "cotton", "soft", "light", "breathable", "summer", "casual"],
      "Raaga Tissue": ["raaga", "tissue", "silk blend", "festive", "party", "dressy", "celebration"],
      "Khadi": ["khadi", "handloom", "natural", "organic", "traditional", "sustainable", "eco-friendly"],
      "Kantha Stitch": ["kantha", "embroidery", "handcrafted", "artisanal", "unique", "folk", "traditional"],
      "Handpainted": ["handpainted", "artistic", "unique", "artisanal", "statement", "exclusive", "art"]
    };

    // Color keywords
    const colorKeywords = ["red", "blue", "green", "yellow", "pink", "purple", "orange", "teal", "maroon", "navy"];

    // Occasion keywords
    const occasionKeywords = ["wedding", "festival", "party", "casual", "office", "daily wear", "celebration"];

    // Generate sarees with random categories from available images
    const generatedSarees: Saree[] = [
      {
        id: 1, name: sareeNames[0], price: 4999, category: categories[0], image: "/assets/saree1.jpg", isNew: true,
        keywords: [...categoryKeywords[categories[0]], "red", "traditional", "border", colorKeywords[0], occasionKeywords[Math.floor(Math.random() * occasionKeywords.length)]]
      },
      {
        id: 2, name: sareeNames[1], price: 6499, category: categories[1], image: "/assets/saree2.jpg", isBestseller: true,
        keywords: [...categoryKeywords[categories[1]], "pink", "gold", "wedding", colorKeywords[4], occasionKeywords[0]]
      },
      {
        id: 3, name: sareeNames[2], price: 5299, category: categories[2], image: "/assets/saree3.jpg",
        keywords: [...categoryKeywords[categories[2]], "orange", "festive", colorKeywords[6], occasionKeywords[1]]
      },
      {
        id: 4, name: sareeNames[3], price: 7999, category: categories[3], image: "/assets/saree4.jpg", isNew: true,
        keywords: [...categoryKeywords[categories[3]], "floral", "blue", "pattern", colorKeywords[1], occasionKeywords[2]]
      },
      {
        id: 5, name: sareeNames[4], price: 3999, category: categories[4], image: "/assets/saree6.jpg",
        keywords: [...categoryKeywords[categories[4]], "green", "eco-friendly", colorKeywords[2], occasionKeywords[3]]
      },
      {
        id: 6, name: sareeNames[5], price: 8499, category: categories[5], image: "/assets/saree8.jpg", isBestseller: true,
        keywords: [...categoryKeywords[categories[5]], "traditional", "maroon", colorKeywords[9], occasionKeywords[0]]
      },
      {
        id: 7, name: sareeNames[6], price: 11999, category: categories[6], image: "/assets/saree9.jpg",
        keywords: [...categoryKeywords[categories[6]], "designer", "exclusive", "purple", colorKeywords[5], occasionKeywords[2]]
      },
      {
        id: 8, name: sareeNames[7], price: 4799, category: categories[0], image: "/assets/saree10.jpg",
        keywords: [...categoryKeywords[categories[0]], "summer", "yellow", "lightweight", colorKeywords[3], occasionKeywords[3]]
      },
      {
        id: 9, name: sareeNames[8], price: 5599, category: categories[1], image: "/assets/saree11.jpg", isNew: true,
        keywords: [...categoryKeywords[categories[1]], "vibrant", "colorful", "party", "red", colorKeywords[0], occasionKeywords[2]]
      },
      {
        id: 10, name: sareeNames[9], price: 9999, category: categories[2], image: "/assets/saree13.jpg", isBestseller: true,
        keywords: [...categoryKeywords[categories[2]], "wedding", "bridal", "red", "gold", colorKeywords[0], occasionKeywords[0]]
      },
      {
        id: 11, name: sareeNames[10], price: 6299, category: categories[3], image: "/assets/saree14.jpg",
        keywords: [...categoryKeywords[categories[3]], "premium", "blue", "handloom", colorKeywords[1], occasionKeywords[1]]
      },
      {
        id: 12, name: sareeNames[11], price: 7499, category: categories[4], image: "/assets/saree15.jpg",
        keywords: [...categoryKeywords[categories[4]], "artisanal", "green", "sustainable", colorKeywords[2], occasionKeywords[4]]
      },
      {
        id: 13, name: sareeNames[12], price: 12999, category: categories[5], image: "/assets/saree16.jpg", isNew: true,
        keywords: [...categoryKeywords[categories[5]], "signature", "limited", "exclusive", "pink", colorKeywords[4], occasionKeywords[0]]
      },
      {
        id: 14, name: sareeNames[13], price: 8999, category: categories[6], image: "/assets/saree17.jpg",
        keywords: [...categoryKeywords[categories[6]], "designer", "exclusive", "purple", "artistic", colorKeywords[5], occasionKeywords[2]]
      },
      {
        id: 15, name: sareeNames[14], price: 13999, category: categories[0], image: "/assets/saree18.jpg", isBestseller: true,
        keywords: [...categoryKeywords[categories[0]], "limited", "edition", "premium", "teal", colorKeywords[7], occasionKeywords[1]]
      },
      {
        id: 16, name: sareeNames[0], price: 5499, category: categories[1], image: "/assets/saree19.jpg",
        keywords: [...categoryKeywords[categories[1]], "handwoven", "cotton", "blue", colorKeywords[1], occasionKeywords[3]]
      },
    ];

    setSarees(generatedSarees);

    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  // Filter sarees based on selected category, price range, and search query
  const filteredSarees = sarees.filter((saree) => {
    const matchesCategory = selectedCategory === "All" || saree.category === selectedCategory;

    // Enhanced search - check name, category, and keywords
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      saree.name.toLowerCase().includes(query) ||  // Check product name
      saree.category.toLowerCase().includes(query) ||  // Check category
      saree.keywords.some(keyword => keyword.toLowerCase().includes(query)) ||  // Check keywords
      saree.price.toString().includes(query);  // Check price

    // Check if saree price is within selected price range
    const matchesPriceRange = !selectedPriceRange ||
      (saree.price >= selectedPriceRange.min &&
        (selectedPriceRange.max === null || saree.price <= selectedPriceRange.max));

    return matchesCategory && matchesSearch && matchesPriceRange;
  }).sort((a, b) => {
    // Sort based on selected sort option
    if (sortBy === "price-asc") {
      return a.price - b.price;
    } else if (sortBy === "price-desc") {
      return b.price - a.price;
    }
    // Default "featured" sorting - keep original order
    return 0;
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

  // Toggle filter section expansion for mobile
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
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
              Explore our especially designed bunch of premium handwoven sarees crafted for women in all kind of Torsos.
            </p>
          </motion.div>

          {/* Search and Filter Mobile Toggle */}
          <div className="flex justify-between items-center mb-2 md:hidden">
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

          <div className="flex flex-col md:flex-row gap-4">
            {/* Desktop Search and Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "md:w-64 flex-shrink-0 space-y-4 md:space-y-6",
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

              {/* Categories - Desktop */}
              <div className="hidden md:block">
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
                              <path d="M13.3334 4.5L6.00002 11.8333L2.66669 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories - Mobile */}
              <div className="md:hidden">
                <button
                  onClick={() => toggleSection('categories')}
                  className="flex justify-between items-center w-full px-3 py-2 bg-white rounded-md shadow-sm border border-gray-200"
                >
                  <span className="font-medium text-gray-800">Categories</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform duration-200 ${expandedSection === 'categories' ? 'rotate-180' : ''}`}
                  >
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {expandedSection === 'categories' && (
                  <ul className="mt-1 space-y-1 bg-white p-3 rounded-md border border-gray-200 shadow-sm">
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
                                <path d="M13.3334 4.5L6.00002 11.8333L2.66669 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Price Range - Desktop */}
              <div className="hidden md:block">
                <h3 className="text-lg font-medium mb-3 text-gray-800">Price Range</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedPriceRange(null)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-md transition-colors text-sm font-medium",
                        selectedPriceRange === null
                          ? "bg-saree-teal/10 text-saree-deep-teal"
                          : "text-gray-600 hover:bg-gray-100"
                      )}
                    >
                      All Prices
                      {selectedPriceRange === null && (
                        <span className="float-right">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.3334 4.5L6.00002 11.8333L2.66669 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      )}
                    </button>
                  </li>
                  {priceRanges.map((range, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSelectedPriceRange(range)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md transition-colors text-sm font-medium",
                          selectedPriceRange === range
                            ? "bg-saree-teal/10 text-saree-deep-teal"
                            : "text-gray-600 hover:bg-gray-100"
                        )}
                      >
                        {range.label}
                        {selectedPriceRange === range && (
                          <span className="float-right">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M13.3334 4.5L6.00002 11.8333L2.66669 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range - Mobile */}
              <div className="md:hidden">
                <button
                  onClick={() => toggleSection('price-range')}
                  className="flex justify-between items-center w-full px-3 py-2 bg-white rounded-md shadow-sm border border-gray-200"
                >
                  <span className="font-medium text-gray-800">Price Range</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform duration-200 ${expandedSection === 'price-range' ? 'rotate-180' : ''}`}
                  >
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {expandedSection === 'price-range' && (
                  <ul className="mt-1 space-y-1 bg-white p-3 rounded-md border border-gray-200 shadow-sm">
                    <li>
                      <button
                        onClick={() => setSelectedPriceRange(null)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md transition-colors text-sm font-medium",
                          selectedPriceRange === null
                            ? "bg-saree-teal/10 text-saree-deep-teal"
                            : "text-gray-600 hover:bg-gray-100"
                        )}
                      >
                        All Prices
                        {selectedPriceRange === null && (
                          <span className="float-right">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M13.3334 4.5L6.00002 11.8333L2.66669 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        )}
                      </button>
                    </li>
                    {priceRanges.map((range, index) => (
                      <li key={index}>
                        <button
                          onClick={() => setSelectedPriceRange(range)}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-md transition-colors text-sm font-medium",
                            selectedPriceRange === range
                              ? "bg-saree-teal/10 text-saree-deep-teal"
                              : "text-gray-600 hover:bg-gray-100"
                          )}
                        >
                          {range.label}
                          {selectedPriceRange === range && (
                            <span className="float-right">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M13.3334 4.5L6.00002 11.8333L2.66669 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
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
                    <div className="hidden md:block relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-500"
                        onClick={() => setShowSortOptions(!showSortOptions)}
                      >
                        Sort by: <span className="font-medium ml-1 text-gray-900">
                          {sortBy === "featured" ? "Featured" :
                            sortBy === "price-asc" ? "Price: Low to High" :
                              "Price: High to Low"}
                        </span>
                      </Button>

                      {showSortOptions && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                          <ul className="py-1">
                            <li>
                              <button
                                className={`block px-4 py-2 text-sm w-full text-left ${sortBy === "featured" ? "bg-saree-teal/10 text-saree-deep-teal" : "text-gray-700 hover:bg-gray-100"}`}
                                onClick={() => {
                                  setSortBy("featured");
                                  setShowSortOptions(false);
                                }}
                              >
                                Featured
                              </button>
                            </li>
                            <li>
                              <button
                                className={`block px-4 py-2 text-sm w-full text-left ${sortBy === "price-asc" ? "bg-saree-teal/10 text-saree-deep-teal" : "text-gray-700 hover:bg-gray-100"}`}
                                onClick={() => {
                                  setSortBy("price-asc");
                                  setShowSortOptions(false);
                                }}
                              >
                                Price: Low to High
                              </button>
                            </li>
                            <li>
                              <button
                                className={`block px-4 py-2 text-sm w-full text-left ${sortBy === "price-desc" ? "bg-saree-teal/10 text-saree-deep-teal" : "text-gray-700 hover:bg-gray-100"}`}
                                onClick={() => {
                                  setSortBy("price-desc");
                                  setShowSortOptions(false);
                                }}
                              >
                                Price: High to Low
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Mobile Sort Button */}
                    <div className="md:hidden">
                      <Button
                        variant="outline"
                        size="sm"
                        className="px-3 py-1 text-xs border-gray-300"
                        onClick={() => setShowSortOptions(!showSortOptions)}
                      >
                        Sort
                      </Button>

                      {showSortOptions && (
                        <div className="absolute right-4 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                          <ul className="py-1">
                            <li>
                              <button
                                className={`block px-4 py-2 text-sm w-full text-left ${sortBy === "featured" ? "bg-saree-teal/10 text-saree-deep-teal" : "text-gray-700 hover:bg-gray-100"}`}
                                onClick={() => {
                                  setSortBy("featured");
                                  setShowSortOptions(false);
                                }}
                              >
                                Featured
                              </button>
                            </li>
                            <li>
                              <button
                                className={`block px-4 py-2 text-sm w-full text-left ${sortBy === "price-asc" ? "bg-saree-teal/10 text-saree-deep-teal" : "text-gray-700 hover:bg-gray-100"}`}
                                onClick={() => {
                                  setSortBy("price-asc");
                                  setShowSortOptions(false);
                                }}
                              >
                                Price: Low to High
                              </button>
                            </li>
                            <li>
                              <button
                                className={`block px-4 py-2 text-sm w-full text-left ${sortBy === "price-desc" ? "bg-saree-teal/10 text-saree-deep-teal" : "text-gray-700 hover:bg-gray-100"}`}
                                onClick={() => {
                                  setSortBy("price-desc");
                                  setShowSortOptions(false);
                                }}
                              >
                                Price: High to Low
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
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
                                  <Badge className="bg-white text-saree-deep-teal border-saree-teal/30 px-2.5 py-1 text-xs font-medium pointer-events-none">
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