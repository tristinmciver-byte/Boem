import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const newArrivals = products.filter(p => p.isNewArrival).slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-boem-black">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://cdn.shopify.com/s/files/1/0768/2070/files/Boem_-_Morrison_Place_-_Hero_Image_-_June_2023_-_low_res.jpg?v=1687124451" 
          alt="Boem Boutique Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-boem-black/60 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-boem-white tracking-widest uppercase mb-6"
          >
            Curated<br />Luxury
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-boem-sand text-sm md:text-base tracking-[0.2em] uppercase mb-10 max-w-md"
          >
            Minimalist fashion for the modern woman. SouthPark, Charlotte.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link 
              to="/shop" 
              className="inline-block border border-boem-white text-boem-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-boem-white hover:text-boem-black transition-all duration-300"
            >
              Shop The Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/shop?category=dresses" className="group relative overflow-hidden aspect-[4/5] bg-boem-gray block">
            <img 
              src="https://cdn.shopify.com/s/files/1/0768/2070/files/Boem_-_Morrison_Place_-_Dresses_-_June_2023_-_low_res.jpg?v=1687124451" 
              alt="Dresses Collection" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-boem-black/20 group-hover:bg-boem-black/40 transition-colors duration-500" />
            <div className="absolute bottom-10 left-10">
              <h2 className="text-3xl font-serif tracking-widest uppercase text-boem-white mb-2">The Dress Edit</h2>
              <span className="text-xs uppercase tracking-widest text-boem-white flex items-center gap-2 group-hover:gap-4 transition-all">
                Shop Now <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
          
          <Link to="/shop?category=knitwear" className="group relative overflow-hidden aspect-[4/5] bg-boem-gray block">
            <img 
              src="https://cdn.shopify.com/s/files/1/0768/2070/files/Boem_-_Morrison_Place_-_Knitwear_-_June_2023_-_low_res.jpg?v=1687124451" 
              alt="Knitwear Collection" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-boem-black/20 group-hover:bg-boem-black/40 transition-colors duration-500" />
            <div className="absolute bottom-10 left-10">
              <h2 className="text-3xl font-serif tracking-widest uppercase text-boem-white mb-2">Cashmere & Knits</h2>
              <span className="text-xs uppercase tracking-widest text-boem-white flex items-center gap-2 group-hover:gap-4 transition-all">
                Shop Now <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 bg-boem-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-4">New Arrivals</h2>
              <p className="text-sm text-boem-taupe uppercase tracking-widest">Just landed at Morrison Place</p>
            </div>
            <Link to="/shop?category=new" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-boem-taupe transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/shop?category=new" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-boem-black pb-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-boem-taupe mb-8">Our Story</h2>
        <p className="text-2xl md:text-4xl font-serif leading-relaxed text-boem-black mb-12">
          "We believe in the power of a curated wardrobe. Pieces that transcend seasons, crafted with intention, and designed to make you feel effortlessly confident."
        </p>
        <p className="text-sm text-boem-taupe uppercase tracking-widest mb-10">
          Visit Us: Morrison Place, SouthPark, Charlotte, NC
        </p>
        <Link 
          to="/about" 
          className="inline-block border border-boem-black text-boem-black px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-boem-black hover:text-boem-white transition-all duration-300"
        >
          Read More
        </Link>
      </section>

      {/* Instagram / Social Proof */}
      <section className="py-24 bg-boem-gray">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-serif tracking-widest uppercase mb-4">@BoemBoutique</h2>
            <p className="text-xs text-boem-taupe uppercase tracking-widest">Follow our journey on Instagram</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://cdn.shopify.com/s/files/1/0768/2070/files/Boem_-_Morrison_Place_-_Instagram_1_-_June_2023_-_low_res.jpg?v=1687124451",
              "https://cdn.shopify.com/s/files/1/0768/2070/files/Boem_-_Morrison_Place_-_Instagram_2_-_June_2023_-_low_res.jpg?v=1687124451",
              "https://cdn.shopify.com/s/files/1/0768/2070/files/Boem_-_Morrison_Place_-_Instagram_3_-_June_2023_-_low_res.jpg?v=1687124451",
              "https://cdn.shopify.com/s/files/1/0768/2070/files/Boem_-_Morrison_Place_-_Instagram_4_-_June_2023_-_low_res.jpg?v=1687124451"
            ].map((img, i) => (
              <a key={i} href="#" className="group relative aspect-square overflow-hidden block">
                <img 
                  src={img} 
                  alt="Instagram post" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-boem-black/0 group-hover:bg-boem-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-boem-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs uppercase tracking-widest">
                    Shop Look
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
