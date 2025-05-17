
import { ShieldCheck, Truck, ArrowRight, Package } from 'lucide-react';

const Specialties = () => {
  const specialties = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-saree-purple" />,
      title: "Quality Assurance",
      description: "Every saree is handpicked for quality and authenticity, ensuring you receive only the finest craftsmanship."
    },
    {
      icon: <Truck className="w-12 h-12 text-saree-purple" />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders above ₹5000 with secure packaging to ensure your saree arrives in perfect condition."
    },
    {
      icon: <Package className="w-12 h-12 text-saree-purple" />,
      title: "Easy Returns",
      description: "Not satisfied with your purchase? Return within 7 days for a full refund or exchange with our hassle-free policy."
    }
  ];

  return (
    <section className="py-16 bg-saree-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm text-center hover-scale"
            >
              <div className="flex justify-center mb-4">
                {specialty.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{specialty.title}</h3>
              <p className="text-gray-600 mb-4">{specialty.description}</p>
              <a href="#" className="inline-flex items-center text-saree-purple hover:text-saree-deep-purple font-medium underline-animation">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
