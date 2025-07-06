import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const About = () => {
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
            className="text-center mb-16"
          >
            <div className="relative inline-block mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Us</h1>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-saree-teal"></span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 mb-4"
            >
              <span className="inline-block bg-gradient-to-r from-saree-teal to-saree-deep-teal text-transparent bg-clip-text text-2xl md:text-3xl font-serif">
                Torso Tale - Where Threads Come Alive
              </span>
            </motion.div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              At Torso Tale, we weave handloom, one cotton thread at a time. We create a relation of a craftsman, thread, weaving and us, together.
            </p>
          </motion.div>

          {/* Our Origin Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16"
          >
            {/* Image on Left */}
            <div className="order-1">
              <img
                src="/images/origin-saree.jpg" // Replace with actual image path
                alt="Traditional saree weaving"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            {/* Content on Right */}
            <div className="order-2">
              <div className="relative inline-block mb-4">
                <h2 className="text-3xl font-bold text-gray-900">Our Origin</h2>
              </div>
              <p className="text-gray-600 text-lg text-justify">
                Let us try time travel! Let’s move to the streets of older India with women wearing only saris. During that period, a sari held significant cultural, social, and symbolic meaning. The way a woman draped a sari showcased the flawless beauty of the six yards of fabric. The seamless wrap of a sari represents the infinite loop of life, and the wholeness within it. A sari is a wrap of shield as well as of comfort and reassurance. It is so graceful and yet so powerful. The pallu of a sari can wipe off all pain with its pure kindness and its strong identity. These tales of saris and women wearing them have given birth to “Torso Tale.”
              </p>
            </div>
          </motion.div>

          {/* Our Mission and Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16"
          >
            {/* Content on Left */}
            <div className="order-2 md:order-1">
              <div className="relative inline-block mb-4">
                <h2 className="text-3xl font-bold text-gray-900">Our Mission and Vision</h2>
              </div>
              <p className="text-gray-600 text-lg text-justify">
                The name “Torso Tale” is the story of every woman, inclusive of all shapes, intellects, emotions, and interests. We are here to encourage you—women. The “Torso,” meaning “the main part of the body,” is described in the “Tale,” the story of the sari portraying every curve of the female anatomy. Our mission is to create comfort in style. Our vision is to create a world where women in saris are the norm. The poise any woman can carry in a sari is irreplaceable. So, join us on this journey to tell the tale of the sari on the female torso.
              </p>
            </div>
            {/* Image on Right */}
            <div className="order-1 md:order-2">
              <img
                src="/images/mission-saree.jpg" // Replace with actual image path
                alt="Women in sarees"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </motion.div>

          {/* Final Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-r from-saree-teal to-saree-deep-teal rounded-2xl shadow-lg overflow-hidden mt-12"
          >
            <div className="p-10 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Torso Tale - Where Threads Come Alive</h3>
              <div className="w-24 h-1 bg-white/50 mx-auto mb-4"></div>
              <p className="max-w-2xl mx-auto mb-6">
                Our commitment is to make sarees comfortable and accessible to embrace every torso (shape), while honoring the rich tradition and artistry behind each handcrafted piece.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-white text-saree-deep-teal font-medium rounded-full hover:bg-gray-100 transition-colors"
              >
                Connect With Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;