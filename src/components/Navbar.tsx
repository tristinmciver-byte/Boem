import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export default function Navbar({ onOpenCart }: { onOpenCart: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'New Arrivals', path: '/shop?category=new' },
    { name: 'Clothing', path: '/shop' },
    { name: 'Accessories', path: '/shop?category=accessories' },
    { name: 'Designers', path: '/shop?category=designers' },
    { name: 'Our Story', path: '/about' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-40 transition-all duration-300 ease-in-out',
          isScrolled || !isHome
            ? 'bg-boem-cream/90 backdrop-blur-md py-4 border-b border-boem-sand/30 text-boem-black'
            : 'bg-transparent py-6 text-boem-white'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Nav (Left) */}
          <nav className="hidden md:flex items-center gap-8 flex-1">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo (Center) */}
          <Link to="/" className="text-3xl font-serif tracking-widest uppercase flex-shrink-0">
            Boem
          </Link>

          {/* Desktop Nav (Right) & Icons */}
          <div className="flex items-center justify-end gap-6 flex-1">
            <nav className="hidden md:flex items-center gap-8 mr-4">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <button aria-label="Search" className="hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <button aria-label="Account" className="hidden md:block hover:opacity-70 transition-opacity">
              <User className="w-5 h-5" />
            </button>
            <button
              aria-label="Cart"
              onClick={onOpenCart}
              className="hover:opacity-70 transition-opacity relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-2 bg-boem-black text-boem-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-boem-black/50 z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-boem-cream z-50 p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-serif tracking-widest uppercase">Boem</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg uppercase tracking-widest border-b border-boem-sand/30 pb-4"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="mt-auto flex gap-6 pt-6 border-t border-boem-sand/30">
                <button className="flex items-center gap-2 text-sm uppercase tracking-widest">
                  <User className="w-4 h-4" /> Account
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
