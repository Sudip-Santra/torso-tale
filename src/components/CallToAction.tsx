
import { Image } from 'lucide-react';

const CallToAction = () => {
  return (
    <section
      className="py-24 bg-cover bg-center relative"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1964&auto=format')",
      }}
    >
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-saree-deep-teal/30 to-transparent mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-3xl mx-auto glossy-card bg-black/30 p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 animate-fade-in">
            Exclusive Collection
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <Image className="w-6 h-6 text-saree-light-teal mr-2" />
            <span className="text-saree-light-teal font-medium">Summer 2025</span>
          </div>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover our handcrafted collection of premium sarees, perfect for your special occasions.
            Limited-time offer with special discounts.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="btn-teal w-full sm:w-auto"
            >
              Shop the Collection
            </a>
            
            <a
              href="#"
              className="bg-transparent hover:bg-white/20 text-white border border-white/50 font-medium px-8 py-3 rounded-md transition-colors duration-300 w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
