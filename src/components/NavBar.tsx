import { useState, useEffect } from "react";
import { ShoppingCart, User, Menu, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#collections", label: "Collections" },
    { href: "#new-arrivals", label: "New Arrivals" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-white shadow-sm py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src="/Torso_Tale_Logo.png" alt="Torso Tale Logo" className="h-10 w-auto" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="font-medium tracking-wide relative group text-foreground hover:text-saree-deep-teal transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-saree-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button 
              className="hover:text-saree-teal transition-colors relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Search"
            >
              <Search size={20} />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-saree-teal scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </motion.button>
            
            <motion.button 
              className="hover:text-saree-teal transition-colors relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Account"
            >
              <User size={20} />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-saree-teal scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </motion.button>
            
            <motion.button 
              className="hover:text-saree-teal transition-colors relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              <Badge 
                variant="outline" 
                className="absolute -top-2 -right-2 bg-saree-orange text-white border-0 h-5 w-5 p-0 flex items-center justify-center"
              >
                {cartCount}
              </Badge>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-saree-teal scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden"
                aria-label="Menu"
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-8">
                  <h2 className="flex items-center">
                    <img src="/Torso_Tale_Logo.png" alt="Torso Tale Logo" className="h-14 w-auto" />
                  </h2>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="py-2 text-lg font-medium hover:text-saree-teal transition-colors border-b border-gray-100 tracking-wide"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
                
                <div className="mt-auto pt-8 flex items-center space-x-6">
                  <Button variant="ghost" size="icon" aria-label="Search">
                    <Search size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Account">
                    <User size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
                    <ShoppingCart size={20} />
                    <Badge 
                      variant="outline" 
                      className="absolute -top-2 -right-2 bg-saree-orange text-white border-0 h-5 w-5 p-0 flex items-center justify-center"
                    >
                      {cartCount}
                    </Badge>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default NavBar;
