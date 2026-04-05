import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Lock } from 'lucide-react';
import { products } from '@/data/mockData';

export default function Checkout() {
  const [step, setStep] = useState(1);

  // Mock cart items
  const cartItems = [
    { ...products[0], quantity: 1, selectedSize: 'S' },
    { ...products[3], quantity: 1, selectedSize: 'M' },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-boem-cream flex flex-col md:flex-row">
      {/* Left Column - Form */}
      <div className="flex-1 p-6 md:p-12 lg:p-24 overflow-y-auto">
        <div className="max-w-xl mx-auto">
          <Link to="/" className="text-3xl font-serif tracking-widest uppercase mb-12 block text-center md:text-left">
            Boem
          </Link>

          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-boem-taupe mb-12">
            <Link to="/cart" className="hover:text-boem-black transition-colors">Cart</Link>
            <ChevronLeft className="w-3 h-3 rotate-180" />
            <span className={step >= 1 ? "text-boem-black" : ""}>Information</span>
            <ChevronLeft className="w-3 h-3 rotate-180" />
            <span className={step >= 2 ? "text-boem-black" : ""}>Shipping</span>
            <ChevronLeft className="w-3 h-3 rotate-180" />
            <span className={step >= 3 ? "text-boem-black" : ""}>Payment</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-serif tracking-widest uppercase mb-6">Contact Information</h2>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full border border-boem-sand bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-boem-black transition-colors"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-serif tracking-widest uppercase mb-6">Shipping Address</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="w-full border border-boem-sand bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-boem-black transition-colors"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="w-full border border-boem-sand bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-boem-black transition-colors"
                    />
                    <input 
                      type="text" 
                      placeholder="Address" 
                      className="col-span-2 w-full border border-boem-sand bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-boem-black transition-colors"
                    />
                    <input 
                      type="text" 
                      placeholder="City" 
                      className="w-full border border-boem-sand bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-boem-black transition-colors"
                    />
                    <input 
                      type="text" 
                      placeholder="Postal Code" 
                      className="w-full border border-boem-sand bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-boem-black transition-colors"
                    />
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-boem-black text-boem-white py-4 text-sm uppercase tracking-widest hover:bg-boem-taupe transition-colors"
                >
                  Continue to Shipping
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="border border-boem-sand rounded-sm divide-y divide-boem-sand">
                  <div className="flex justify-between p-4 text-sm">
                    <span className="text-boem-taupe">Contact</span>
                    <span>user@example.com</span>
                    <button onClick={() => setStep(1)} className="text-xs uppercase tracking-widest underline">Change</button>
                  </div>
                  <div className="flex justify-between p-4 text-sm">
                    <span className="text-boem-taupe">Ship to</span>
                    <span>123 Fashion Ave, NY 10001</span>
                    <button onClick={() => setStep(1)} className="text-xs uppercase tracking-widest underline">Change</button>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-serif tracking-widest uppercase mb-6">Shipping Method</h2>
                  <div className="border border-boem-black rounded-sm p-4 flex justify-between items-center bg-boem-sand/10">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full border-4 border-boem-black bg-boem-white" />
                      <span className="text-sm">Standard Shipping (3-5 Business Days)</span>
                    </div>
                    <span className="text-sm font-medium">$15.00</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6">
                  <button onClick={() => setStep(1)} className="text-xs uppercase tracking-widest text-boem-taupe hover:text-boem-black transition-colors flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" /> Return to Information
                  </button>
                  <button 
                    onClick={() => setStep(3)}
                    className="bg-boem-black text-boem-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-boem-taupe transition-colors"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div className="border border-boem-sand rounded-sm divide-y divide-boem-sand">
                  <div className="flex justify-between p-4 text-sm">
                    <span className="text-boem-taupe">Contact</span>
                    <span>user@example.com</span>
                    <button onClick={() => setStep(1)} className="text-xs uppercase tracking-widest underline">Change</button>
                  </div>
                  <div className="flex justify-between p-4 text-sm">
                    <span className="text-boem-taupe">Ship to</span>
                    <span>123 Fashion Ave, NY 10001</span>
                    <button onClick={() => setStep(1)} className="text-xs uppercase tracking-widest underline">Change</button>
                  </div>
                  <div className="flex justify-between p-4 text-sm">
                    <span className="text-boem-taupe">Method</span>
                    <span>Standard Shipping</span>
                    <button onClick={() => setStep(2)} className="text-xs uppercase tracking-widest underline">Change</button>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-serif tracking-widest uppercase mb-6">Payment</h2>
                  <p className="text-xs text-boem-taupe mb-4 flex items-center gap-2">
                    <Lock className="w-3 h-3" /> All transactions are secure and encrypted.
                  </p>
                  
                  <div className="border border-boem-sand rounded-sm p-6 bg-white space-y-4">
                    <input 
                      type="text" 
                      placeholder="Card Number" 
                      className="w-full border border-boem-sand bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-boem-black transition-colors"
                    />
                    <input 
                      type="text" 
                      placeholder="Name on Card" 
                      className="w-full border border-boem-sand bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-boem-black transition-colors"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Expiration Date (MM/YY)" 
                        className="w-full border border-boem-sand bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-boem-black transition-colors"
                      />
                      <input 
                        type="text" 
                        placeholder="Security Code" 
                        className="w-full border border-boem-sand bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-boem-black transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6">
                  <button onClick={() => setStep(2)} className="text-xs uppercase tracking-widest text-boem-taupe hover:text-boem-black transition-colors flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" /> Return to Shipping
                  </button>
                  <button 
                    onClick={() => alert('Order Placed Successfully!')}
                    className="bg-boem-black text-boem-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-boem-taupe transition-colors"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Right Column - Order Summary */}
      <div className="w-full md:w-[45%] bg-boem-gray p-6 md:p-12 lg:p-24 border-l border-boem-sand/30">
        <div className="max-w-md mx-auto sticky top-12">
          <h2 className="text-lg font-serif tracking-widest uppercase mb-8 hidden md:block">Order Summary</h2>
          
          <div className="space-y-6 mb-8">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-4 items-center">
                <div className="relative">
                  <img 
                    src={item.images[0]} 
                    alt={item.name} 
                    className="w-16 h-20 object-cover border border-boem-sand/30"
                  />
                  <span className="absolute -top-2 -right-2 bg-boem-black text-boem-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium uppercase tracking-wider">{item.name}</h3>
                  <p className="text-xs text-boem-taupe mt-1">{item.selectedSize}</p>
                </div>
                <p className="text-sm font-medium">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-boem-sand/30 pt-6 space-y-4">
            <div className="flex justify-between text-sm text-boem-taupe">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-boem-taupe">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-serif pt-4 border-t border-boem-sand/30">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
