"use client";

import { useCart } from "../../components/CartProvider";
import Image from "next/image";
import Link from "next/link";
import GraffitiMural from "@/components/GraffitiMural";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Generate order number
    const now = new Date();
    const oNum = `MAZI-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;

    // Build order summary for email
    const itemLines = cart.map(item => 
      `• ${item.name}${item.color ? ` (${item.color})` : ''}${item.size ? ` / Size: ${item.size}` : ''} x${item.quantity} — €${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    // Dashboard link (more reliable than mailto in emails)
    const confirmUrl = `${window.location.origin}/confirm-order?email=${encodeURIComponent(formData.get('email') as string)}&name=${encodeURIComponent(formData.get('firstName') as string)}&order=${encodeURIComponent(oNum)}`;

    const orderSummary = `
═══════════════════════════════
NEW ORDER: ${oNum}
═══════════════════════════════

CUSTOMER DETAILS:
Name: ${formData.get('firstName')} ${formData.get('lastName')}
Email: ${formData.get('email')}
Phone: ${formData.get('phone') || 'N/A'}
Address: ${formData.get('address')}
City: ${formData.get('city')}
ZIP: ${formData.get('zip')}
Country: ${formData.get('country')}

ITEMS ORDERED:
${itemLines}

TOTAL: €${getCartTotal().toFixed(2)}
PAYMENT: Cash on Delivery

═══════════════════════════════
👇 CLICK LINK BELOW TO CONFIRM TO CUSTOMER:
${confirmUrl}
═══════════════════════════════
    `.trim();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'f47cbcfe-ce4b-4e59-8e76-0fdae2ea318c',
          subject: `🦇 New MA'ZI Order: ${oNum}`,
          from_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
          replyto: formData.get('email'),
          message: orderSummary,
          dashboard_confirm_link: confirmUrl
        }),
      });

      const result = await response.json();
      if (result.success) {
        setOrderNumber(oNum);
        setOrderConfirmed(true);
        clearCart();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Network error. Please check your connection and try again.');
    }

    setIsSubmitting(false);
  };

  // ══════ ORDER CONFIRMED ══════
  if (orderConfirmed) {
    return (
      <div className="bg-[var(--color-bg-black)] min-h-screen py-32 px-5 relative overflow-hidden">
        <GraffitiMural />
        <div className="max-w-[600px] mx-auto text-center relative z-10">
          <div className="mb-8 text-6xl">🦇</div>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-white)] mb-4 tracking-wide">Order Confirmed</h2>
          <p className="text-sm tracking-[4px] uppercase text-[var(--color-blood-red)] mb-8 font-bold">{orderNumber}</p>
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 mb-8 text-left">
            <p className="text-[#aaa] text-sm leading-[2] mb-4">
              Your order has been received. We&apos;ll reach out to your email to confirm and arrange delivery.
            </p>
            <p className="text-[#aaa] text-sm leading-[2] mb-4">
              <strong className="text-[var(--color-text-white)]">Payment:</strong> Cash on Delivery — pay directly to the courier when your package arrives.
            </p>
            <p className="text-[#666] text-xs leading-[2]">
              If you have any questions, contact us at info@mazi-collective.com
            </p>
          </div>
          <Link href="/" className="text-xs md:text-sm tracking-[2px] md:tracking-[3px] uppercase text-[var(--color-blood-red)] hover:text-[var(--color-accent-red)] transition-colors border-b border-[var(--color-blood-red)] pb-1 font-bold">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-bg-black)] min-h-screen py-16 px-5 relative overflow-hidden">
      <GraffitiMural />
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="mb-8">
          <Link href="/store" className="text-[10px] md:text-xs uppercase tracking-[2px] md:tracking-[3px] text-[#666] hover:text-[var(--color-blood-red)] transition-colors inline-flex items-center gap-2 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Continue Shopping
          </Link>
        </div>
        <h2 className="text-2xl md:text-5xl text-[var(--color-blood-red)] tracking-[3px] md:tracking-[4px] font-black mb-10 md:mb-12 border-b border-[#222] pb-6 text-center italic">YOUR CART</h2>
        
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#888] text-xl mb-6 tracking-wide">Your cart is currently empty.</p>
            <Link href="/store" className="inline-block px-8 py-4 bg-[var(--color-blood-red)] text-white font-bold uppercase tracking-[2px] hover:bg-[var(--color-accent-red)] transition-colors">Return to Shop</Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* ══════ CART ITEMS ══════ */}
            <div className="flex-1 space-y-6">
              {cart.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-stretch sm:items-start gap-6 bg-[#0a0a0a] p-5 md:p-6 border border-[#1a1a1a] hover:border-[#333] transition-colors relative">
                  {/* Image Container - Significantly bigger on mobile */}
                  <div className="w-full sm:w-[150px] aspect-square relative overflow-hidden bg-[#080808] flex-shrink-0 border border-[#111] shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="text-left">
                      <h3 className="text-base md:text-lg font-black text-white tracking-tight uppercase italic">{item.name}</h3>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                        {item.color && <span className="text-[#666] text-[10px] tracking-[2px] uppercase">{item.color}</span>}
                        {item.size && <span className="text-[var(--color-blood-red)] text-[10px] font-bold tracking-[2px] uppercase italic">Size: {item.size}</span>}
                      </div>
                      <p className="text-[var(--color-blood-red)] font-black mt-3 text-lg">€{item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center justify-between mt-6 md:mt-4">
                      {/* Qty Selector */}
                      <div className="flex items-center border border-[#222] bg-black overflow-hidden h-10">
                        <button onClick={() => updateQuantity(item.id, item.color, item.size, -1)} className="w-10 h-full flex items-center justify-center text-[#666] hover:text-white hover:bg-[var(--color-blood-red)] transition-colors bg-transparent cursor-pointer">&minus;</button>
                        <span className="w-10 text-center text-white font-bold text-sm tracking-widest">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.color, item.size, 1)} className="w-10 h-full flex items-center justify-center text-[#666] hover:text-white hover:bg-[var(--color-blood-red)] transition-colors bg-transparent cursor-pointer">&#43;</button>
                      </div>
                      
                      <button onClick={() => removeFromCart(item.id, item.color, item.size)} className="text-[#444] hover:text-[var(--color-blood-red)] transition-colors text-[10px] uppercase font-bold tracking-[3px] border-b border-transparent hover:border-[var(--color-blood-red)] bg-transparent cursor-pointer">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* ══════ ORDER SUMMARY / CHECKOUT ══════ */}
            <div className="w-full lg:w-[380px] h-fit sticky top-24">
              {!showCheckout ? (
                // ── Summary Panel ──
                <div className="bg-[#0a0a0a] p-8 border-t-2 border-[var(--color-blood-red)]">
                  <h3 className="text-xl font-black text-white mb-6 tracking-wider">ORDER SUMMARY</h3>
                  <div className="space-y-3 mb-6">
                    {cart.map((item, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-[#888] truncate mr-4">{item.name} {item.size ? `(${item.size})` : ''} x{item.quantity}</span>
                        <span className="text-white font-bold">€{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[#888] mb-3 text-sm border-t border-[#1a1a1a] pt-4">
                    <span>Shipping</span>
                    <span className="text-[#aaa] text-xs">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-white text-xl font-black border-t border-[#1a1a1a] pt-4 mb-6">
                    <span>Total</span>
                    <span className="text-[var(--color-blood-red)]">€{getCartTotal().toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={() => setShowCheckout(true)}
                    className="w-full py-4 bg-[var(--color-blood-red)] text-white font-bold uppercase tracking-[2px] hover:bg-[var(--color-accent-red)] transition-all duration-300 cursor-pointer"
                  >
                    Proceed to Checkout
                  </button>
                  <p className="text-[#555] text-xs text-center mt-4 tracking-wider">💰 Cash on Delivery</p>
                </div>
              ) : (
                // ── Checkout Form ──
                <form onSubmit={handleCheckout} className="bg-[#0a0a0a] p-8 border-t-2 border-[var(--color-blood-red)]">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-black text-white tracking-wider">CHECKOUT</h3>
                    <button type="button" onClick={() => setShowCheckout(false)} className="text-[#666] text-xs uppercase tracking-wider hover:text-[var(--color-blood-red)] transition-colors bg-transparent cursor-pointer">← Back</button>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <input name="firstName" required placeholder="First Name" className="w-full px-4 py-3 bg-[#111] border border-[#222] text-white text-sm tracking-wider focus:outline-none focus:border-[var(--color-blood-red)] transition-colors placeholder:text-[#555] placeholder:text-xs placeholder:uppercase placeholder:tracking-widest" />
                      <input name="lastName" required placeholder="Last Name" className="w-full px-4 py-3 bg-[#111] border border-[#222] text-white text-sm tracking-wider focus:outline-none focus:border-[var(--color-blood-red)] transition-colors placeholder:text-[#555] placeholder:text-xs placeholder:uppercase placeholder:tracking-widest" />
                    </div>
                    <input name="email" type="email" required placeholder="Email Address" className="w-full px-4 py-3 bg-[#111] border border-[#222] text-white text-sm tracking-wider focus:outline-none focus:border-[var(--color-blood-red)] transition-colors placeholder:text-[#555] placeholder:text-xs placeholder:uppercase placeholder:tracking-widest" />
                    <input name="phone" type="tel" placeholder="Phone (optional)" className="w-full px-4 py-3 bg-[#111] border border-[#222] text-white text-sm tracking-wider focus:outline-none focus:border-[var(--color-blood-red)] transition-colors placeholder:text-[#555] placeholder:text-xs placeholder:uppercase placeholder:tracking-widest" />
                    <input name="address" required placeholder="Street Address" className="w-full px-4 py-3 bg-[#111] border border-[#222] text-white text-sm tracking-wider focus:outline-none focus:border-[var(--color-blood-red)] transition-colors placeholder:text-[#555] placeholder:text-xs placeholder:uppercase placeholder:tracking-widest" />
                    <div className="grid grid-cols-2 gap-4">
                      <input name="city" required placeholder="City" className="w-full px-4 py-3 bg-[#111] border border-[#222] text-white text-sm tracking-wider focus:outline-none focus:border-[var(--color-blood-red)] transition-colors placeholder:text-[#555] placeholder:text-xs placeholder:uppercase placeholder:tracking-widest" />
                      <input name="zip" required placeholder="ZIP Code" className="w-full px-4 py-3 bg-[#111] border border-[#222] text-white text-sm tracking-wider focus:outline-none focus:border-[var(--color-blood-red)] transition-colors placeholder:text-[#555] placeholder:text-xs placeholder:uppercase placeholder:tracking-widest" />
                    </div>
                    <input name="country" required placeholder="Country" className="w-full px-4 py-3 bg-[#111] border border-[#222] text-white text-sm tracking-wider focus:outline-none focus:border-[var(--color-blood-red)] transition-colors placeholder:text-[#555] placeholder:text-xs placeholder:uppercase placeholder:tracking-widest" />
                  </div>

                  <div className="bg-[#080808] border border-[#1a1a1a] p-4 mb-6">
                    <p className="text-xs text-[#888] tracking-wider uppercase mb-2 font-bold">Payment Method</p>
                    <p className="text-sm text-[#aaa]">💰 Cash on Delivery — pay the courier when your package arrives</p>
                  </div>

                  <div className="flex justify-between text-white text-lg font-black mb-6 border-t border-[#1a1a1a] pt-4">
                    <span>Total</span>
                    <span className="text-[var(--color-blood-red)]">€{getCartTotal().toFixed(2)}</span>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[var(--color-blood-red)] text-white font-bold uppercase tracking-[2px] hover:bg-[var(--color-accent-red)] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Placing Order...' : 'Place Order'}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
