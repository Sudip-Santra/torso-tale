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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Discover the story of Torso Tale - where tradition meets modernity in the art of saree weaving.
            </p>
          </motion.div>

          {/* Introduction Bento Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-2 bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="p-8 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">TORSO TALE</h2>
                  <p className="text-gray-600 leading-relaxed">
                    At Torso Tale, we weave handloom, one cotton thread at a time. We create a
                    relation of a craftsman, thread, weaving and us, together.
                  </p>
                </div>
                <div className="mt-6">
                  <span className="inline-block bg-saree-teal/10 text-saree-deep-teal px-4 py-1 rounded-full text-sm font-medium">
                    Handcrafted Artistry
                  </span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-saree-teal/20 to-saree-deep-teal/20 rounded-2xl shadow-md overflow-hidden relative"
            >
              <img 
                src="/assets/saree4.jpg" 
                alt="Handloom Weaving" 
                className="w-full h-full object-cover absolute inset-0 opacity-30"
              />
              <div className="p-8 relative z-10 flex flex-col justify-center items-center h-full text-center">
                <div className="bg-white/80 p-6 rounded-xl shadow-lg backdrop-blur-sm">
                  <div className="space-y-1">
                    <span className="text-4xl font-bold text-saree-deep-teal block">Thread</span>
                    <span className="text-4xl font-bold text-saree-deep-teal block">by</span>
                    <span className="text-4xl font-bold text-saree-deep-teal block">Thread</span>
                  </div>
                  <div className="w-24 h-1 bg-saree-teal mx-auto my-3"></div>
                  <p className="text-gray-800 mt-2">The Art of Handloom Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Our Origin Bento Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold text-gray-800">Our Origin</h2>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-saree-teal"></span>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-5 bg-gradient-to-br from-saree-teal/80 to-saree-deep-teal rounded-2xl shadow-md overflow-hidden"
            >
              <div className="p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Time Travel</h3>
                <p className="leading-relaxed">
                  Let us try time travel! Let's move to the streets of older India with women
                  wearing only saris. During that period, a sari held significant cultural, social and
                  symbolic meaning.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-7 bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 relative min-h-[200px]">
                <img 
                  src="/assets/saree19.jpg" 
                  alt="Traditional Saree" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <p className="text-gray-600 leading-relaxed">
                  The way a woman draped a sari showing the flawless beauty
                  of the six yards of fabric. The seamless wrap of a sari represents the infinite loop
                  of life, and the wholeness within it.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-12 bg-gray-50 rounded-2xl shadow-md overflow-hidden"
            >
              <div className="p-8 text-center">
                <p className="text-gray-700 leading-relaxed italic max-w-3xl mx-auto">
                  "A sari is a wrap of shield as well as of comfort and reassurance. It is so Graceful and yet so powerful. 
                  The pallu of a sari can wipe off all pain with its pure kindness and its strong identity."
                </p>
                <p className="mt-4 text-gray-600">
                  These tale of saris and women wearing it, has given birth to the "Torso Tale".
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mission and Vision Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold text-gray-800">Our Mission and Vision</h2>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-saree-teal"></span>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-8 bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">The Story Behind Our Name</h3>
                <p className="text-gray-600 leading-relaxed">
                  The name "Torso Tale" actually is the story of every type of women inclusive of all
                  shapes, having different intellect, emotions, interests, etc. We are here to
                  encourage You - Women. The "Torso", meaning "the main part of the body" is
                  described in the "Tale" meaning the "story" of the sari portraying every curves of
                  the female anatomy.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-4 bg-gradient-to-br from-orange-100 to-rose-100 rounded-2xl shadow-md overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="/assets/saree6.jpg" 
                  alt="Saree Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 relative z-10 flex flex-col justify-center items-center h-full text-center">
                <div className="w-16 h-16 rounded-full bg-saree-teal/20 flex items-center justify-center mb-4">
                  <span className="text-saree-deep-teal text-2xl">✦</span>
                </div>
                <p className="text-gray-800 font-medium">
                  Our mission is to create comfort in style. Our vision is to create a world where
                  women in saris are living the norm.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-12 bg-saree-teal/5 rounded-2xl shadow-md overflow-hidden"
            >
              <div className="p-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The poise any woman can carry in a sari is irreplaceable. So, join us on this journey to tell the tale of sari in female torso.
                  </p>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-3">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="/assets/saree1.jpg" 
                      alt="Woman in Saree" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="/assets/saree2.jpg" 
                      alt="Woman in Saree" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Why Choose Us Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold text-gray-800">Why Choose Torso Tale</h2>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-saree-teal"></span>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Finest Materials",
                description: "We design and manufacture the saris with the finest varieties of cotton, mul, linen, khadi, etc.",
                icon: "🧵",
                delay: 0.1,
              },
              {
                title: "For Every Woman",
                description: "We manufacture the saris that suits all women in best quality fiber and designs that are traditional, minimalistic and yet can create a modern look.",
                icon: "👗",
                delay: 0.2,
              },
              {
                title: "Direct Collaboration",
                description: "We co-create and collaborate directly with our makers, the skilled artisans and weavers who gives their wholehearted efforts.",
                icon: "🤝",
                delay: 0.3,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                className={cn(
                  "bg-white rounded-2xl shadow-md overflow-hidden",
                  index === 1 && "md:transform md:-translate-y-4"
                )}
              >
                <div className="p-8">
                  <div className="w-12 h-12 rounded-full bg-saree-teal/10 flex items-center justify-center mb-4 text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Final Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-r from-saree-teal to-saree-deep-teal rounded-2xl shadow-lg overflow-hidden mt-12"
          >
            <div className="p-10 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Experience the Torso Tale Difference</h3>
              <p className="max-w-2xl mx-auto mb-6">
                Our commitment is to make sarees comfortable and accessible to embrace every torso (shape),
                while honoring the rich tradition and artistry behind each handcrafted piece.
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