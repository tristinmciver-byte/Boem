import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-boem-black text-boem-white pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-boem-white/20 pb-16">
        
        {/* Brand & Newsletter */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-serif tracking-widest uppercase mb-6">Boem</h2>
          <p className="text-sm text-boem-sand mb-8 max-w-md">
            A curated boutique located in Morrison Place, SouthPark, Charlotte, NC. 
            Discover our collection of minimalist luxury and editorial fashion.
          </p>
          
          <div className="mb-6">
            <h3 className="text-sm uppercase tracking-widest mb-4">Join Our List</h3>
            <form className="flex border-b border-boem-white/30 pb-2 max-w-sm">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none flex-1 text-sm placeholder:text-boem-sand/50"
              />
              <button type="submit" aria-label="Subscribe">
                <ArrowRight className="w-5 h-5 hover:text-boem-sand transition-colors" />
              </button>
            </form>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-6 text-boem-sand">Shop</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/shop?category=new" className="hover:text-boem-sand transition-colors">New Arrivals</Link></li>
            <li><Link to="/shop" className="hover:text-boem-sand transition-colors">All Clothing</Link></li>
            <li><Link to="/shop?category=dresses" className="hover:text-boem-sand transition-colors">Dresses</Link></li>
            <li><Link to="/shop?category=accessories" className="hover:text-boem-sand transition-colors">Accessories</Link></li>
            <li><Link to="/shop?category=sale" className="hover:text-boem-sand transition-colors">Sale</Link></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-6 text-boem-sand">Information</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-boem-sand transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-boem-sand transition-colors">Contact Us</Link></li>
            <li><Link to="/shipping" className="hover:text-boem-sand transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-boem-sand transition-colors">FAQ</Link></li>
            <li><Link to="/terms" className="hover:text-boem-sand transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-boem-sand/60">
        <p>&copy; {new Date().getFullYear()} Boem Boutique. All rights reserved.</p>
        
        <div className="flex gap-6 mt-6 md:mt-0">
          <a href="#" aria-label="Instagram" className="hover:text-boem-white transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-boem-white transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-boem-white transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
