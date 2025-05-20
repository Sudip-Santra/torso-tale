import { Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section
      className="py-24 bg-cover bg-center relative"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/saree15.jpg')",
      }}
    >
      {/* Decorative overlay with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-saree-deep-teal/40 to-transparent mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 text-center text-saree-off-white relative z-10">
        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-saree-off-white/10 shadow-xl">
          <div className="inline-block mb-6 relative">
            <span className="absolute inset-0 blur-xl bg-saree-light-teal/30 rounded-full"></span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold relative z-10 animate-fade-in">
              Torso Tale Collection
            </h2>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <Image className="w-6 h-6 text-saree-light-teal mr-2" />
            <span className="text-saree-light-teal font-medium">Summer 2025</span>
          </div>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Discover our handcrafted collection of premium sarees, perfect for your special occasions.
            Limited-time offer with special discounts.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/collections"
              className="group relative bg-saree-teal hover:bg-saree-deep-teal text-saree-off-white font-medium px-8 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-saree-off-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Shop the Collection</span>
            </Link>
            
            <Link
              to="/about"
              className="group relative bg-transparent hover:bg-saree-off-white/20 text-saree-off-white border border-saree-off-white/50 font-medium px-8 py-3 rounded-md transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 w-0 bg-saree-off-white/10 transition-all duration-300 group-hover:w-full"></span>
              <span className="relative z-10">Learn More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
