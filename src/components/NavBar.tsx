import { useState, useEffect } from "react";
import { Menu, Phone, Facebook, Instagram, Youtube } from "lucide-react";
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
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/profile.php?id=61568659184578", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/torso_tale?igsh=MWFtY3VpZ2lzbTl6dg==", label: "Instagram" },
    { icon: <Youtube size={20} />, href: "https://youtube.com/@torsotale?si=Mrum7EgRXL9Gqtvc", label: "YouTube" },
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
            <motion.img
              src="/Torso_Tale_Logo.png"
              alt="Torso Tale Logo"
              className="h-10 w-auto ml-4"
              initial={{ scale: 1.3 }} 
            />
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
              href="tel:+919130653501"
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
                <Menu size={80} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white p-4">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <h2 className="flex items-center">
                    <img src="/Torso_Tale_Logo.png" alt="Torso Tale Logo" className="h-12 w-auto" />
                  </h2>
                </div>

                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <div key={index}>
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="py-1.5 text-base font-medium hover:text-saree-teal transition-colors border-b border-gray-100 tracking-wide block"
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
                          className="py-1.5 text-base font-medium hover:text-saree-teal transition-colors border-b border-gray-100 tracking-wide block"
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

                {/* Social Media Links */}
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">Follow Us</p>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-saree-teal/10 hover:bg-saree-teal hover:text-white text-saree-teal transition-colors"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <a
                    href="tel:+919130653501"
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
