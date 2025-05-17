
import { ShieldCheck, Truck, ArrowRight, Package, Image } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-b from-white to-saree-light-teal/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            We pride ourselves on providing exceptional service and products to our customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-saree-light-teal/30 text-center hover-scale"
            >
              <div className="flex justify-center mb-6 relative">
                {specialty.icon}
                <span className="absolute -bottom-3 w-12 h-1 bg-saree-light-teal rounded-full"></span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-gray-800">{specialty.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{specialty.description}</p>
              <a href="#" className="inline-flex items-center text-saree-teal hover:text-saree-deep-teal font-medium underline-animation group">
                Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="btn-outline-teal inline-flex items-center">
            View All Features <Image className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
