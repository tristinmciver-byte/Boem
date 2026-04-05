import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Product } from '@/data/mockData';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="group relative flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden aspect-[3/4] bg-boem-gray">
        {/* Images */}
        <img 
          src={product.images[0]} 
          alt={product.name} 
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: isHovered ? 0 : 1 }}
        />
        <img 
          src={product.images[1] || product.images[0]} 
          alt={`${product.name} alternate view`} 
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Badges */}
        {product.isNewArrival && (
          <span className="absolute top-4 left-4 bg-boem-white text-boem-black text-[10px] uppercase tracking-widest px-2 py-1 z-10">
            New
          </span>
        )}
        {!product.inStock && (
          <span className="absolute top-4 left-4 bg-boem-black text-boem-white text-[10px] uppercase tracking-widest px-2 py-1 z-10">
            Sold Out
          </span>
        )}

        {/* Quick Add Overlay */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-boem-white/90 backdrop-blur-sm transform transition-transform duration-300 ease-in-out flex flex-col ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <div className="flex justify-between items-center px-4 py-3 border-b border-boem-sand/30">
            <span className="text-xs uppercase tracking-widest text-boem-taupe">Quick Add</span>
            <ShoppingBag className="w-4 h-4 text-boem-black" />
          </div>
          <div className="flex flex-wrap gap-2 p-4">
            {product.sizes.map(size => (
              <button 
                key={size}
                className="w-8 h-8 flex items-center justify-center text-xs border border-boem-sand/50 hover:border-boem-black hover:bg-boem-black hover:text-boem-white transition-colors"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4 flex flex-col items-center text-center">
        <Link to={`/product/${product.id}`} className="text-sm uppercase tracking-widest hover:text-boem-taupe transition-colors">
          {product.name}
        </Link>
        <p className="text-sm font-serif mt-2">${product.price}</p>
      </div>
    </motion.div>
  );
}
