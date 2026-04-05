import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { products } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam || 'All');

  const categories = ['All', 'New', 'Dresses', 'Knitwear', 'Bottoms', 'Outerwear', 'Tops'];
  
  const filteredProducts = products.filter(p => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'New') return p.isNewArrival;
    return p.category.toLowerCase() === selectedCategory?.toLowerCase();
  });

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-4">
          {selectedCategory === 'All' ? 'Shop All' : selectedCategory}
        </h1>
        <p className="text-sm text-boem-taupe uppercase tracking-widest max-w-lg">
          Curated pieces for the modern wardrobe. Designed to be lived in.
        </p>
      </div>

      {/* Filters & Sort Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-y border-boem-sand/30 py-4 gap-4">
        <button 
          className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-boem-taupe transition-colors"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </button>

        <div className="hidden md:flex items-center gap-8">
          {categories.slice(0, 5).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs uppercase tracking-widest transition-colors ${selectedCategory === cat ? 'text-boem-black font-medium border-b border-boem-black pb-1' : 'text-boem-taupe hover:text-boem-black'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-boem-taupe transition-colors">
          Sort By <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Filter Drawer (Simplified) */}
      {isFilterOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden mb-8"
        >
          <div className="flex flex-wrap gap-4 py-4 border-b border-boem-sand/30">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setIsFilterOpen(false);
                }}
                className={`text-xs uppercase tracking-widest px-4 py-2 border ${selectedCategory === cat ? 'bg-boem-black text-boem-white border-boem-black' : 'border-boem-sand text-boem-taupe'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-32 text-boem-taupe uppercase tracking-widest text-sm">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
