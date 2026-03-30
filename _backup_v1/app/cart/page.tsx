"use client";

import { useCart } from "../../components/CartProvider";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <div className="bg-[var(--color-bg-black)] min-h-screen py-32 px-5">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-4xl md:text-5xl text-[var(--color-blood-red)] tracking-[4px] font-black mb-12 border-b border-[#222] pb-6">YOUR CART</h2>
        
        {cart.length === 0 ? (
          <div className="text-center py-20 bg-[var(--color-dark-grey)] rounded-xl border border-[#222]">
            <p className="text-[#888] text-xl mb-6 tracking-wide">Your cart is currently empty.</p>
            <Link href="/store" className="inline-block px-8 py-4 bg-[var(--color-blood-red)] text-white font-bold uppercase tracking-[2px] rounded hover:bg-[var(--color-accent-red)] transition-colors">Return to Shop</Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 space-y-6">
              {cart.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-[var(--color-dark-grey)] p-6 rounded-lg border border-[#222] shadow-xl hover:border-[#333] transition-colors">
                  <div className="w-[120px] aspect-square relative rounded overflow-hidden bg-[#111] flex-shrink-0 border border-[#222]">
                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold text-[var(--color-text-white)] m-0 tracking-widest">{item.name}</h3>
                    {item.color && <p className="text-[#888] text-sm mt-1">{item.color}</p>}
                    <p className="text-[var(--color-blood-red)] font-black mt-2 text-lg">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col items-center sm:items-end gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                    <div className="flex items-center bg-[#111] border border-[#222] rounded overflow-hidden">
                      <button onClick={() => updateQuantity(item.id, item.color, -1)} className="w-10 h-10 flex items-center justify-center text-[#888] hover:text-white hover:bg-[var(--color-blood-red)] transition-colors text-lg focus:outline-none">&minus;</button>
                      <span className="w-10 text-center text-white font-bold text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.color, 1)} className="w-10 h-10 flex items-center justify-center text-[#888] hover:text-white hover:bg-[var(--color-blood-red)] transition-colors text-lg focus:outline-none">&#43;</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id, item.color)} className="text-[#666] hover:text-[var(--color-blood-red)] transition-colors text-sm uppercase font-bold tracking-widest mt-2 underline underline-offset-4">Remove</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="w-full lg:w-[350px] bg-[var(--color-dark-grey)] p-8 rounded-lg border-t-4 border-[var(--color-blood-red)] h-fit sticky top-32 shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-6 tracking-wider">ORDER SUMMARY</h3>
              <div className="flex justify-between text-[#888] mb-4 text-lg">
                <span>Subtotal</span>
                <span className="text-white font-bold">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#888] mb-6 text-lg">
                <span>Shipping</span>
                <span className="text-white font-bold text-sm mt-1">Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-white text-2xl font-black border-t border-[#333] pt-6 mb-8">
                <span>Total</span>
                <span className="text-[var(--color-blood-red)]">${getCartTotal().toFixed(2)}</span>
              </div>
              <button 
                onClick={() => alert("Checkout system would redirect to payment gateway (Stripe, PayPal, etc.) connecting to your banking system.")} 
                className="w-full py-4 bg-[var(--color-blood-red)] text-white font-bold uppercase tracking-[2px] rounded hover:bg-[var(--color-accent-red)] transition-transform duration-300 hover:-translate-y-1 shadow-[0_4px_15px_rgba(138,3,3,0.3)]"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
