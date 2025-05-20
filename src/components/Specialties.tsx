import { ShieldCheck, Truck, ArrowRight, Package, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Specialties = () => {
  const specialties = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-saree-teal" />,
      title: "Quality Assurance",
      description: "Every saree is handpicked for quality and authenticity, ensuring you receive only the finest craftsmanship."
    },
    {
      icon: <Truck className="w-12 h-12 text-saree-teal" />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders above ₹5000 with secure packaging to ensure your saree arrives in perfect condition."
    },
    {
      icon: <Package className="w-12 h-12 text-saree-teal" />,
      title: "Easy Returns",
      description: "Not satisfied with your purchase? Return within 7 days for a full refund or exchange with our hassle-free policy."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-saree-light-teal/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-saree-light-teal text-saree-deep-teal rounded-full text-sm font-medium mb-4">Our Promises</span>
          <h2 className="text-4xl font-serif font-bold mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-saree-deep-teal mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            We pride ourselves on providing exceptional service and products to our customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-saree-light-teal/30 text-center hover-scale group"
            >
              <div className="flex justify-center mb-6 relative">
                <div className="p-3 rounded-full bg-saree-light-teal/20 group-hover:bg-saree-light-teal/40 transition-colors duration-300">
                  {specialty.icon}
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-gray-800">{specialty.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{specialty.description}</p>
              <Link to="/about" className="inline-flex items-center text-saree-teal hover:text-saree-deep-teal font-medium underline-animation group">
                Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/about" className="group relative inline-flex items-center px-8 py-3 bg-transparent hover:bg-saree-teal text-saree-teal hover:text-white border border-saree-teal rounded-md transition-colors duration-300 overflow-hidden">
            <span className="absolute inset-0 w-0 bg-saree-teal transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10 flex items-center">Know More <Star className="w-4 h-4 ml-2" /></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
