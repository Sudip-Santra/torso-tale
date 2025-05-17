
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setIsError(true);
      return;
    }
    
    // Here you would normally submit to an API
    setIsSubmitted(true);
    setIsError(false);
    setEmail('');
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-16 bg-saree-pink bg-opacity-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive updates on new arrivals, special offers, and exclusive discounts.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className={`flex-grow px-4 py-3 rounded-md border ${
                isError ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-saree-purple focus:border-transparent`}
              aria-label="Email Address"
            />
            <button
              type="submit"
              className="bg-saree-purple hover:bg-saree-deep-purple text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
          
          {isError && (
            <p className="mt-3 text-red-500 text-sm">
              Please enter a valid email address.
            </p>
          )}
          
          {isSubmitted && (
            <p className="mt-3 text-green-600 text-sm">
              Thank you for subscribing! We've sent a confirmation to your email.
            </p>
          )}
          
          <p className="mt-4 text-xs text-gray-500">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
