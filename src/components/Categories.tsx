
import { useEffect, useRef } from 'react';

const Categories = () => {
  const categories = [
    {
      title: "Silk Sarees",
      image: "https://images.unsplash.com/photo-1610189020454-1d1ebdcc6721?q=80&w=1887&auto=format",
      description: "Luxurious silk sarees for every occasion"
    },
    {
      title: "Cotton Sarees",
      image: "https://images.unsplash.com/photo-1616112733209-31564103c03f?q=80&w=1887&auto=format",
      description: "Comfort meets elegance in our cotton collection"
    },
    {
      title: "Wedding Collection",
      image: "https://images.unsplash.com/photo-1609096458733-95b38583ac4e?q=80&w=1935&auto=format",
      description: "Make your special day unforgettable"
    },
    {
      title: "Designer Sarees",
      image: "https://images.unsplash.com/photo-1610508528977-88c4c694c3d9?q=80&w=1887&auto=format",
      description: "Contemporary designs with traditional roots"
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

    const categoryElements = document.querySelectorAll('.category-item');
    categoryElements.forEach((el) => observer.observe(el));

    return () => {
      categoryElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} id="collections" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Our Collections</h2>
          <div className="w-24 h-1 bg-saree-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of exquisite sarees, handpicked for their quality, design and craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="category-item group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-3 aspect-h-4 w-full">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">{category.title}</h3>
                <p className="text-sm md:text-base opacity-90 mb-4">{category.description}</p>
                <a
                  href="#"
                  className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/30 px-4 py-2 rounded transition-colors duration-300"
                >
                  Explore Collection
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
