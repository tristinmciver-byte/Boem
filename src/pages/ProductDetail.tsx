import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '@/data/mockData';
import { ChevronRight, Heart, Share2, Plus, Minus } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    // Add to cart logic here
    console.log(`Added ${quantity} of ${product.name} size ${selectedSize} to cart`);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-boem-taupe mb-8">
        <Link to="/" className="hover:text-boem-black transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-boem-black transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-boem-black">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-[3/4] bg-boem-gray overflow-hidden"
          >
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {product.images.slice(1).map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                className="aspect-[3/4] bg-boem-gray overflow-hidden"
              >
                <img 
                  src={img} 
                  alt={`${product.name} detail ${idx + 1}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sticky top-32"
          >
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl md:text-4xl font-serif tracking-widest uppercase">{product.name}</h1>
              <button className="hover:text-boem-taupe transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>
            
            <p className="text-xl font-serif mb-8">${product.price}</p>
            
            <div className="mb-8">
              <p className="text-sm text-boem-taupe leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div className="mb-8 border-t border-boem-sand/30 pt-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-widest">Size</span>
                <button className="text-xs uppercase tracking-widest text-boem-taupe underline hover:text-boem-black transition-colors">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center text-sm border transition-all ${
                      selectedSize === size 
                        ? 'border-boem-black bg-boem-black text-boem-white' 
                        : 'border-boem-sand text-boem-black hover:border-boem-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center justify-between border border-boem-sand px-4 py-3 sm:w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="hover:text-boem-taupe transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="hover:text-boem-taupe transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-boem-black text-boem-white text-sm uppercase tracking-widest py-4 hover:bg-boem-taupe transition-colors"
              >
                Add to Bag
              </button>
            </div>

            {/* Accordions (Details, Shipping) */}
            <div className="border-t border-boem-sand/30">
              <div className="py-4 border-b border-boem-sand/30 flex justify-between items-center cursor-pointer hover:text-boem-taupe transition-colors">
                <span className="text-xs uppercase tracking-widest">Details & Care</span>
                <Plus className="w-4 h-4" />
              </div>
              <div className="py-4 border-b border-boem-sand/30 flex justify-between items-center cursor-pointer hover:text-boem-taupe transition-colors">
                <span className="text-xs uppercase tracking-widest">Shipping & Returns</span>
                <Plus className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-boem-taupe cursor-pointer hover:text-boem-black transition-colors">
              <Share2 className="w-4 h-4" /> Share
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Items */}
      <div className="mt-32 border-t border-boem-sand/30 pt-16">
        <h2 className="text-2xl font-serif tracking-widest uppercase mb-12 text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.filter(p => p.id !== product.id).slice(0, 4).map(relatedProduct => (
            <div key={relatedProduct.id} className="group relative flex flex-col">
              <Link to={`/product/${relatedProduct.id}`} className="relative block overflow-hidden aspect-[3/4] bg-boem-gray">
                <img 
                  src={relatedProduct.images[0]} 
                  alt={relatedProduct.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="mt-4 flex flex-col items-center text-center">
                <Link to={`/product/${relatedProduct.id}`} className="text-sm uppercase tracking-widest hover:text-boem-taupe transition-colors">
                  {relatedProduct.name}
                </Link>
                <p className="text-sm font-serif mt-2">${relatedProduct.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
