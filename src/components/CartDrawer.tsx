import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/mockData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // Mock cart items
  const cartItems = [
    { ...products[0], quantity: 1, selectedSize: 'S' },
    { ...products[3], quantity: 1, selectedSize: 'M' },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-boem-black/50 z-50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-boem-cream z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-boem-sand/30">
              <h2 className="text-lg font-serif tracking-widest uppercase flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" /> Your Cart (2)
              </h2>
              <button onClick={onClose} className="hover:opacity-70 transition-opacity">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex gap-4">
                  <img 
                    src={item.images[0]} 
                    alt={item.name} 
                    className="w-24 h-32 object-cover"
                  />
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium uppercase tracking-wider">{item.name}</h3>
                        <p className="text-xs text-boem-taupe mt-1">Size: {item.selectedSize}</p>
                      </div>
                      <p className="text-sm font-medium">${item.price}</p>
                    </div>
                    
                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-center border border-boem-sand/50">
                        <button className="px-2 py-1 hover:bg-boem-sand/20 transition-colors">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-4 text-sm">{item.quantity}</span>
                        <button className="px-2 py-1 hover:bg-boem-sand/20 transition-colors">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button className="text-xs text-boem-taupe underline uppercase tracking-widest hover:text-boem-black transition-colors">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-boem-sand/30 bg-boem-white">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm uppercase tracking-widest">Subtotal</span>
                <span className="text-lg font-serif">${subtotal}</span>
              </div>
              <p className="text-xs text-boem-taupe mb-6 text-center">
                Shipping & taxes calculated at checkout
              </p>
              <Link 
                to="/checkout" 
                onClick={onClose}
                className="block w-full bg-boem-black text-boem-white text-center py-4 text-sm uppercase tracking-widest hover:bg-boem-taupe transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
