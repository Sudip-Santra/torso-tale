
import { useRef, useEffect } from 'react';
import ProductCard from './ProductCard';

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "Banarasi Silk Saree with Gold Zari",
      price: 15999,
      originalPrice: 19999,
      image: "https://images.unsplash.com/photo-1610508511988-7614aa239272?q=80&w=1887&auto=format",
      category: "Silk",
      isNew: true
    },
    {
      id: 2,
      name: "Kanjivaram Pure Silk Saree",
      price: 22500,
      originalPrice: 27999,
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1976&auto=format",
      category: "Wedding Collection",
      isNew: true
    },
    {
      id: 3,
      name: "Chanderi Cotton Silk Saree",
      price: 4999,
      originalPrice: 5999,
      image: "https://images.unsplash.com/photo-1610508515468-5d478afe175e?q=80&w=1887&auto=format",
      category: "Cotton Silk",
      isNew: true
    },
    {
      id: 4,
      name: "Designer Georgette Printed Saree",
      price: 3299,
      image: "https://images.unsplash.com/photo-1614868138307-c739bc962d19?q=80&w=1887&auto=format",
      category: "Designer",
      isNew: true
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const productElements = document.querySelectorAll('.product-item');
    productElements.forEach((el) => observer.observe(el));

    return () => {
      productElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} id="new-arrivals" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">New Arrivals</h2>
          <div className="w-24 h-1 bg-saree-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our latest collection of handpicked sarees, fresh from the looms of India's finest artisans
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-item opacity-0 translate-y-10 transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-transparent hover:bg-saree-purple text-saree-purple hover:text-white border border-saree-purple font-medium px-8 py-3 rounded-md transition-colors duration-300"
          >
            View All Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
