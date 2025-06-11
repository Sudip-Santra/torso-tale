import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Facebook, Youtube, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      <NavBar />
      <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="relative inline-block mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Get in Touch</h1>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-saree-teal"></span>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our sarees or need assistance with your order? 
              We're here to help and would love to hear from you directly.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-saree-teal/10 p-4 rounded-full mb-5">
                        <Phone size={32} className="text-saree-teal" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                      <p className="text-gray-500 mb-4">Let’s talk sarees, styling, or anything you need—just a ring away!</p>
                      <a 
                        href="tel:+919130653501" 
                        className="text-xl font-medium text-saree-teal hover:underline"
                      >
                        +91 9130653501
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-saree-teal/10 p-4 rounded-full mb-5">
                        <Mail size={32} className="text-saree-teal" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                      <p className="text-gray-500 mb-4">Drop us a message anytime—your perfect drape is just an email away!</p>
                      <a 
                        href="mailto:torsotale@gmail.com" 
                        className="text-xl font-medium text-saree-teal hover:underline"
                      >
                        torsotale@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-center">Connect With Us</h3>
                  <div className="flex justify-center space-x-6">
                    {[
                      { 
                        icon: <Instagram size={28} />, 
                        color: "bg-gradient-to-r from-purple-500 to-pink-500", 
                        link: "https://www.instagram.com/torso_tale?igsh=MWFtY3VpZ2lzbTl6dg==",
                        name: "Instagram"
                      },
                      { 
                        icon: <Facebook size={28} />, 
                        color: "bg-blue-600", 
                        link: "https://www.facebook.com/profile.php?id=61568659184578",
                        name: "Facebook"
                      },
                      { 
                        icon: <Youtube size={28} />, 
                        color: "bg-red-600", 
                        link: "https://youtube.com/@torsotale?si=Mrum7EgRXL9Gqtvc",
                        name: "YouTube"
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} text-white p-4 rounded-full hover:opacity-90 transition-opacity flex flex-col items-center`}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Visit our ${social.name} page`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact; 