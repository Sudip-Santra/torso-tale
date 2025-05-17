
import { useState, useEffect } from "react";
import { ShoppingCart, User, Menu, Search } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl md:text-3xl font-serif font-bold text-saree-teal">
            Elegant<span className="text-saree-gold">Sarees</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="underline-animation font-medium">Home</a>
            <a href="#collections" className="underline-animation font-medium">Collections</a>
            <a href="#new-arrivals" className="underline-animation font-medium">New Arrivals</a>
            <a href="#about" className="underline-animation font-medium">About Us</a>
            <a href="#contact" className="underline-animation font-medium">Contact</a>
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-saree-teal transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="hover:text-saree-teal transition-colors" aria-label="Account">
              <User size={20} />
            </button>
            <button className="hover:text-saree-teal transition-colors relative" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-saree-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800 hover:text-saree-teal" onClick={toggleMobileMenu} aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="pt-4 pb-3 space-y-3 border-t mt-3">
            <a href="/" className="block py-2 font-medium">Home</a>
            <a href="#collections" className="block py-2 font-medium">Collections</a>
            <a href="#new-arrivals" className="block py-2 font-medium">New Arrivals</a>
            <a href="#about" className="block py-2 font-medium">About Us</a>
            <a href="#contact" className="block py-2 font-medium">Contact</a>
            
            <div className="flex items-center space-x-6 pt-2">
              <button className="hover:text-saree-teal transition-colors" aria-label="Search">
                <Search size={20} />
              </button>
              <button className="hover:text-saree-teal transition-colors" aria-label="Account">
                <User size={20} />
              </button>
              <button className="hover:text-saree-teal transition-colors relative" aria-label="Cart">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-saree-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
