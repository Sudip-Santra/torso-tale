import { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ id, name, price, originalPrice, image, category, isNew = false }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover-scale h-full flex flex-col">
      <div className="flex-grow relative bg-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {isNew && (
          <div className="absolute top-4 left-4 bg-saree-purple text-white text-xs font-medium px-2 py-1 rounded">
            NEW
          </div>
        )}
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-saree-orange text-white text-xs font-medium px-2 py-1 rounded">
            {discount}% OFF
          </div>
        )}
      </div>
      
      <div className="mt-auto px-1 pt-4">
        <div className="text-xs text-gray-500 mb-1">{category}</div>
        <h3 className="text-base font-medium mb-1 truncate">{name}</h3>
        <div className="flex items-center">
          <span className="font-medium text-saree-deep-purple">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="absolute -bottom-10 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 flex justify-between items-center transition-all duration-300 group-hover:bottom-0">
        <button 
          className="w-full bg-saree-purple hover:bg-saree-deep-purple text-white text-sm py-2 rounded transition-colors flex items-center justify-center"
        >
          <ShoppingCart size={16} className="mr-1" />
          <span>Add to Cart</span>
        </button>
        <button 
          className={`ml-2 p-2 rounded-full ${isWishlisted ? 'bg-pink-100 text-pink-500' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors`}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
