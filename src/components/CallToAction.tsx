
const CallToAction = () => {
  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1964&auto=format')",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
          Exclusive Collection
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Discover our handcrafted collection of premium sarees, perfect for your special occasions.
          Limited-time offer with special discounts.
        </p>
        <a
          href="#"
          className="inline-block bg-saree-teal hover:bg-saree-deep-teal text-white font-medium px-8 py-3 rounded-md transition-colors duration-300"
        >
          Shop the Collection
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
