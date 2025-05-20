import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
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
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
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
                <motion.div key={index}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="font-medium tracking-wide relative group text-foreground hover:text-saree-deep-teal transition-colors"
                    >
                      <motion.span
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="inline-block"
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-saree-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </motion.span>
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="font-medium tracking-wide relative group text-foreground hover:text-saree-deep-teal transition-colors"
                    >
                      <motion.span
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="inline-block"
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-saree-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </motion.span>
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Call Now Button */}
          <div className="hidden md:block">
            <motion.a 
              href="tel:+919876543210"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-saree-teal text-white px-4 py-2 rounded-md font-medium"
            >
              <Phone size={16} className="mr-2" />
              Call Now
            </motion.a>
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
                <Menu size={50} />
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
                    <div key={index}>
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="py-2 text-lg font-medium hover:text-saree-teal transition-colors border-b border-gray-100 tracking-wide block"
                        >
                          <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="inline-block"
                          >
                            {link.label}
                          </motion.span>
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="py-2 text-lg font-medium hover:text-saree-teal transition-colors border-b border-gray-100 tracking-wide block"
                        >
                          <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="inline-block"
                          >
                            {link.label}
                          </motion.span>
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
                
                <div className="mt-auto pt-8">
                  <a 
                    href="tel:+919876543210"
                    className="flex items-center justify-center bg-saree-teal text-white p-3 rounded-md font-medium"
                  >
                    <Phone size={16} className="mr-2" />
                    Call Now
                  </a>
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
