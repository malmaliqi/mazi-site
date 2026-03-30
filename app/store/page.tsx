"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/CartProvider';
import GraffitiMural from '@/components/GraffitiMural';

type StoreItem = { type: string; img: string; backImg?: string; name: string; color: string; price: string; description: string; inStock: boolean };

const storeItems: StoreItem[] = [
  {
    type: 'tee', img: '/MAZI merch 1.png', name: "MA'ZI - TEE", color: "(MA'RED)", price: '25.00€', inStock: true,
    description: "enemies-BLOOD SPRAYED ON DEEP BLACK COTTON. EVERYDAY ESSENTIAL. SIGNATURE LOGO DETAILING. VILLAINOUS FEEL. DURABLE RIBBED COLLAR. 100% COTTON."
  },
  {
    type: 'tee', img: '/MAZI merch 2.png', name: "MA'ZI - TEE", color: "(MA'GREY)", price: '25.00€', inStock: false,
    description: "LIMITED EDITION DARK GREY TEE ON DEEP BLACK COTTON. SIGNATURE LOGO DETAILING. VILLAINOUS FEEL. DURABLE RIBBED COLLAR. 100% COTTON."
  },
  {
    type: 'tee', img: '/MAZI Merch 3.png', name: "MA'ZI - TEE", color: "(MA'PINK)", price: '30.00€', inStock: false,
    description: "LIMITED EDITION VIBRANT PINK PRINT ON DEEP BLACK COTTON. SIGNATURE LOGO DETAILING. VILLAINOUS FEEL. DURABLE RIBBED COLLAR. 100% COTTON."
  },
  {
    type: 'tee', img: '/MAZI Merch 4.png', name: "MA'ZI - TEE", color: "(MA'WHITE)", price: '25.00€', inStock: false,
    description: "CLEAN WHITE ON BLACK MINIMALIST TEE. HIGH-DENSITY PRINT. EVERYDAY ESSENTIAL. DURABLE RIBBED COLLAR. 100% COTTON."
  },
  {
    type: 'cd', img: '/MALBUM ERDHEN VAMPIRAT FRONT.png', backImg: '/malbum erdhen vampirat BACK.png', name: 'ERDHEN VAMPIRAT', color: '(LIMITED CD)', price: '15.00€', inStock: false,
    description: "THE DEBUT COLLECTIVE MASTERPIECE. 9 TRACKS OF POST-MUSIC RAGE."
  },
  {
    type: 'vinyl', img: '/MALBUM ERDHEN VAMPIRAT FRONT.png', backImg: '/malbum erdhen vampirat BACK.png', name: 'ERDHEN VAMPIRAT', color: '(LIMITED VINYL)', price: '35.00€', inStock: false,
    description: ""
  }
];

export default function Store() {
  const { addToCart, cart, removeFromCart, getCartCount, getCartTotal } = useCart();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showBackInLightbox, setShowBackInLightbox] = useState(false);
  const [quantities, setQuantities] = useState<number[]>(Array(storeItems.length).fill(1));
  const [showCartPanel, setShowCartPanel] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(Array(storeItems.length).fill('XL'));

  const updateQuantity = (index: number, delta: number) => {
    setQuantities(prev => {
      const newQs = [...prev];
      newQs[index] = Math.max(1, newQs[index] + delta);
      return newQs;
    });
  };

  const navigateLightbox = (direction: 1 | -1) => {
    if (lightboxIndex === null) return;
    let next = lightboxIndex + direction;
    if (next >= storeItems.length) next = 0;
    if (next < 0) next = storeItems.length - 1;
    setLightboxIndex(next);
    setShowBackInLightbox(false);
  };

  // ══════ URL & HISTORY SYNC for Lightbox ══════
  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setShowBackInLightbox(false);
    window.history.pushState({ lightboxOpen: true }, '', `/store?product=${i}`);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setShowBackInLightbox(false);
    // Use replaceState to clear the URL query without triggering a "Back" behavior that might leave the site
    window.history.replaceState({}, '', '/store');
  };

  useEffect(() => {
    const handlePop = (e: PopStateEvent) => {
      if (!e.state || !e.state.lightboxOpen) {
        setLightboxIndex(null);
      }
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);


  const handleAddToCart = (i: number) => {
    const item = storeItems[i];
    const isTee = item.type === 'tee';
    addToCart({
      id: `store-${i}`,
      name: item.name,
      color: item.color,
      size: isTee ? selectedSizes[i] : undefined,
      price: parseFloat(item.price.replace('€', '')),
      img: item.img
    }, quantities[i]);
    setShowCartPanel(true);
  };

  const closeCartPanel = () => {
    setShowCartPanel(false);
    // Reset all quantities back to 1 so user doesn't accidentally re-order
    setQuantities(Array(storeItems.length).fill(1));
  };

  // Close cart panel on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCartPanel();
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="bg-[var(--color-bg-black)] min-h-screen py-32 px-6 md:px-20 relative overflow-hidden animate-entrance">
      <GraffitiMural />
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl tracking-[6px] md:tracking-[8px] uppercase text-[var(--color-blood-red)] font-black">MA&apos;ZI Store</h1>
        </div>

        {/* ══════ APPAREL ══════ */}
        <div className="mb-20 md:mb-32">
          <p className="text-xs md:text-base tracking-[3px] md:tracking-[4px] uppercase text-[var(--color-blood-red)] mb-8 md:mb-10 font-bold border-b border-[var(--color-blood-red)] pb-2 inline-block">MA&apos;ZI MERCH</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {storeItems.slice(0, 4).map((item, localI) => {
              const i = localI;
              return (
                <div key={i} className="group">
                  <div
                    className="aspect-square relative overflow-hidden mb-5 cursor-pointer bg-[#080808] shadow-[0_0_20px_rgba(255,255,255,0.04)]"
                    onClick={() => openLightbox(i)}
                  >
                    <Image src={item.img} alt={item.name} fill className="object-cover hover-distort group-hover:opacity-100 transition-opacity duration-700" />
                    {!item.inStock && (
                      <div className="absolute top-4 left-0 bg-[var(--color-blood-red)] text-white text-[8px] font-black tracking-[3px] uppercase px-3 py-1 z-20">PRE-ORDER</div>
                    )}
                  </div>
                  <p className="text-sm text-[var(--color-text-white)] font-light mb-1 tracking-tight">
                    {item.name}
                    <span className="text-white/70 ml-2 text-sm font-normal tracking-[3px] uppercase">{item.color}</span>
                  </p>
                  <p className="text-[var(--color-blood-red)] text-sm font-bold mb-4">{item.price}</p>

                  {/* Size Selection */}
                  <div className="mb-4 flex gap-2">
                    {['M', 'L', 'XL'].map(size => {
                      const isXL = size === 'XL';
                      const isSelected = selectedSizes[i] === size;
                      return (
                        <button
                          key={size}
                          onClick={() => isXL && setSelectedSizes(prev => {
                            const next = [...prev];
                            next[i] = size;
                            return next;
                          })}
                          className={`text-[10px] w-8 h-8 flex items-center justify-center border font-bold transition-all duration-300 ${isSelected
                            ? 'bg-[var(--color-blood-red)] border-[var(--color-blood-red)] text-white'
                            : isXL
                              ? 'border-[#333] text-[#888] hover:border-[var(--color-blood-red)]'
                              : 'border-[#1a1a1a] text-[#333] cursor-not-allowed opacity-40'
                            }`}
                          title={!isXL ? "Out of stock" : ""}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(i, -1)} className="text-[#666] hover:text-[var(--color-text-white)] transition-colors text-sm cursor-pointer bg-transparent">&minus;</button>
                      <span className="text-[var(--color-text-white)] text-sm w-5 text-center">{quantities[i]}</span>
                      <button onClick={() => updateQuantity(i, 1)} className="text-[#666] hover:text-[var(--color-text-white)] transition-colors text-sm cursor-pointer bg-transparent">&#43;</button>
                    </div>
                    <button
                      onClick={() => handleAddToCart(i)}
                      className="text-xs tracking-[3px] uppercase text-[var(--color-blood-red)] border border-[var(--color-blood-red)] px-4 py-2 hover:bg-[var(--color-blood-red)] hover:text-white transition-all duration-500 bg-transparent cursor-pointer font-bold"
                    >
                      {item.inStock ? 'Add to Cart' : 'Pre-order'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ══════ MUSIC (CD / VINYL) ══════ */}
        <div>
          <p className="text-sm md:text-base tracking-[4px] uppercase text-[var(--color-blood-red)] mb-10 font-bold border-b border-[var(--color-blood-red)] pb-2 inline-block">MA&apos;ZI Music — CD / Vinyl</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {storeItems.slice(4).map((item, localI) => {
              const i = localI + 4;
              return (
                <div key={`store-item-${i}`} className="group">
                  <div
                    className="w-full aspect-square relative mb-5 cursor-pointer"
                    onClick={() => openLightbox(i)}
                  >
                    {!item.inStock && (
                      <div className="absolute top-4 left-0 bg-[var(--color-blood-red)] text-white text-[8px] font-black tracking-[3px] uppercase px-3 py-1 z-40">PRE-ORDER</div>
                    )}
                    {item.color?.includes('VINYL') ? (
                      <div className="w-full h-full rounded-full bg-[#0a0a0a] border-[4px] border-[#040404] shadow-[0_15px_35px_rgba(0,0,0,0.9)] relative flex items-center justify-center overflow-hidden group-hover:shadow-[0_15px_35px_rgba(138,3,3,0.15)] transition-shadow duration-700">
                        <div className="absolute inset-[6%] rounded-full border border-[#161616] pointer-events-none"></div>
                        <div className="absolute inset-[14%] rounded-full border border-[#111] pointer-events-none"></div>
                        <div className="absolute inset-[24%] rounded-full border border-[#1a1a1a] pointer-events-none opacity-50"></div>
                        <div className="absolute inset-[32%] rounded-full border border-[#111] pointer-events-none"></div>
                        <div className="relative w-[38%] h-[38%] rounded-full overflow-hidden z-10 shadow-[0_0_10px_rgba(0,0,0,0.8)] bg-black group-hover:scale-105 transition-transform duration-500">
                          <Image src={item.img} alt={item.name} fill className={`object-cover ${item.backImg ? 'opacity-100 group-hover:opacity-0' : ''} transition-all duration-500 z-10`} />
                          {item.backImg && (
                            <Image src={item.backImg} alt={`${item.name} Back`} fill className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 z-20" />
                          )}
                        </div>
                        <div className="absolute w-[4%] h-[4%] bg-[var(--color-bg-black)] rounded-full z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#000]"></div>
                      </div>
                    ) : item.color?.includes('CD') ? (
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#0a0a0a] p-[2px] relative flex items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.9)] group-hover:shadow-[0_15px_35px_rgba(138,3,3,0.1)] transition-shadow duration-700">
                        <div className="w-full h-full rounded-full relative overflow-hidden bg-black">
                          <Image src={item.img} alt={item.name} fill className={`object-cover ${item.backImg ? 'opacity-100 group-hover:opacity-0' : ''} group-hover:scale-[1.03] transition-all duration-500 z-10`} />
                          {item.backImg && (
                            <Image src={item.backImg} alt={`${item.name} Back`} fill className="object-cover opacity-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 absolute inset-0 z-20" />
                          )}
                          <div className="absolute w-[20%] h-[20%] bg-[var(--color-bg-black)] rounded-full z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[3px] border-[#1a1a1a] flex items-center justify-center">
                            <div className="w-[30%] h-[30%] rounded-full bg-transparent border border-[#111]"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full overflow-hidden relative">
                        <Image src={item.img} alt={item.name} fill className="object-cover hover-distort" />
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-[var(--color-text-white)] font-light mb-1 tracking-tight">
                    {item.name}
                    <span className="text-white/70 ml-2 text-sm font-normal tracking-[3px] uppercase">{item.color}</span>
                  </p>
                  <p className="text-[var(--color-blood-red)] text-sm font-bold mb-4">{item.price}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(i, -1)} className="text-[#666] hover:text-[var(--color-text-white)] transition-colors text-sm cursor-pointer bg-transparent">&minus;</button>
                      <span className="text-[var(--color-text-white)] text-sm w-5 text-center">{quantities[i]}</span>
                      <button onClick={() => updateQuantity(i, 1)} className="text-[#666] hover:text-[var(--color-text-white)] transition-colors text-sm cursor-pointer bg-transparent">&#43;</button>
                    </div>
                    <button
                      onClick={() => handleAddToCart(i)}
                      className="text-xs tracking-[3px] uppercase text-[var(--color-blood-red)] border border-[var(--color-blood-red)] px-4 py-2 hover:bg-[var(--color-blood-red)] hover:text-white transition-all duration-500 bg-transparent cursor-pointer font-bold"
                    >
                      {item.inStock ? 'Add to Cart' : 'Pre-order'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════ LIGHTBOX with XO Store Premium Aesthetic ══════ */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black z-[40] flex items-start justify-center pt-24 pb-12 overflow-y-auto"
          onClick={closeLightbox}
        >
          {/* Close - Mobile Top Left (below header) */}
          <span className="absolute top-28 left-6 text-white text-3xl cursor-pointer z-[110] md:hidden" onClick={closeLightbox}>&times;</span>
          {/* Close - Desktop Top Right (below header) */}
          <span className="absolute top-28 right-8 text-[#444] text-3xl cursor-pointer hover:text-[var(--color-blood-red)] transition-colors duration-700 z-[110] hidden md:block" onClick={closeLightbox}>&times;</span>

          {/* Container - Vertical Stack on Mobile, Two-Column on Desktop */}
          <div
            className="w-full max-w-[1200px] flex flex-col md:flex-row items-center md:items-start justify-center relative z-[105] px-6 text-center md:text-left pt-12 md:pt-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Product Image Column - Top on Mobile, Left on Desktop */}
            <div className="relative w-full aspect-square md:w-[500px] lg:w-[600px] md:h-[500px] lg:h-[600px] mb-8 md:mb-0 bg-black flex-shrink-0 order-1">
              <Image
                src={showBackInLightbox && storeItems[lightboxIndex].backImg ? storeItems[lightboxIndex].backImg! : storeItems[lightboxIndex].img}
                alt="Store Product" fill className="object-contain p-4 md:p-8 animate-fade-in"
              />
              
              {/* Internal navigation arrows (Desktop Only) */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-0 md:-left-24 top-1/2 -translate-y-1/2 text-[#222] text-4xl p-4 hover:text-[var(--color-blood-red)] transition-colors bg-transparent cursor-pointer hidden md:block"
              >
                &#10094;
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-0 md:-right-24 top-1/2 -translate-y-1/2 text-[#222] text-4xl p-4 hover:text-[var(--color-blood-red)] transition-colors bg-transparent cursor-pointer hidden md:block"
              >
                &#10095;
              </button>
            </div>

            {/* Product Info Column - Bottom on Mobile, Right on Desktop */}
            <div className="w-full md:max-w-[450px] flex flex-col items-center md:items-start md:pl-16 order-2">
              {!storeItems[lightboxIndex].inStock && (
                <span className="text-[10px] font-black border border-[var(--color-blood-red)] text-[var(--color-blood-red)] tracking-[4px] uppercase px-4 py-1 mb-4">PRE-ORDER</span>
              )}
              {/* Product Name */}
              <h2 className="text-2xl md:text-4xl font-black text-white mb-2 tracking-[4px] uppercase italic">
                {storeItems[lightboxIndex].name}
              </h2>

              {/* Price */}
              <p className="text-lg md:text-2xl font-bold text-white/90 mb-6 tracking-widest">{storeItems[lightboxIndex].price}</p>

              {/* Color Name - Bigger and More Distinctive */}
              <div className="mb-8">
                <span className="text-[var(--color-blood-red)] text-xl md:text-3xl font-black uppercase tracking-[8px] italic underline underline-offset-8 decoration-white/10">
                  {storeItems[lightboxIndex].color.replace(/[()]/g, '')}
                </span>
              </div>

              {/* Order Row: Qty & Add to Cart on same line */}
              <div className="flex items-stretch gap-4 mb-10 h-12 w-full max-w-[320px]">
                <div className="flex items-center border border-[#1a1a1a] px-3 bg-[#050505]">
                  <button onClick={() => updateQuantity(lightboxIndex, -1)} className="text-[#666] hover:text-white transition-colors text-lg cursor-pointer bg-transparent px-2">&minus;</button>
                  <span className="text-white text-sm w-10 text-center font-bold tracking-tighter">{quantities[lightboxIndex]}</span>
                  <button onClick={() => updateQuantity(lightboxIndex, 1)} className="text-[#666] hover:text-white transition-colors text-lg cursor-pointer bg-transparent px-2">&#43;</button>
                </div>
                <button
                  onClick={() => handleAddToCart(lightboxIndex)}
                  className="flex-1 text-[10px] md:text-xs tracking-[4px] uppercase text-white border border-white hover:bg-white hover:text-black transition-all font-black"
                >
                  {storeItems[lightboxIndex].inStock ? 'Add to Cart' : 'Pre-order'}
                </button>
              </div>

              {/* Description (Scrollable on small mobile) */}
              <div className="mb-12">
                <p className="text-[11px] md:text-xs text-[#888] leading-relaxed tracking-[2px] uppercase font-medium max-w-sm">
                  {storeItems[lightboxIndex].description}
                </p>
              </div>

              {/* Size Selection (for tees only) */}
              {storeItems[lightboxIndex].type === 'tee' && (
                <div className="mb-12 w-full border-t border-[#111] pt-10">
                  <div className="flex flex-col items-center md:items-start gap-6">
                    <span className="text-[10px] font-black text-[#444] tracking-[4px] uppercase underline underline-offset-4 decoration-[var(--color-blood-red)]/40">Select Size</span>
                    <div className="flex gap-3">
                      {['M', 'L', 'XL'].map(size => {
                        const isXL = size === 'XL';
                        const isSelected = selectedSizes[lightboxIndex] === size;
                        return (
                          <button
                            key={size}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (isXL) setSelectedSizes(prev => {
                                const next = [...prev];
                                next[lightboxIndex] = size;
                                return next;
                              });
                            }}
                            className={`text-[10px] w-12 h-12 flex items-center justify-center border transition-all duration-500 ${isSelected
                              ? 'bg-white text-black border-white font-black'
                               : isXL
                                ? 'border-[#1a1a1a] text-[#444] hover:border-white hover:text-white'
                                : 'border-[#1a1a1a] text-[#333] cursor-not-allowed'
                              }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Close UI Link */}
              <button
                onClick={closeLightbox}
                className="text-[10px] tracking-[5px] uppercase text-[#333] hover:text-white transition-colors border-b border-[#111] hover:border-white pb-1 mb-12"
              >
                Back to Merch
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════ SLIDE-OUT CART PANEL ══════ */}
      {showCartPanel && (
        <div className="fixed inset-0 z-[200]" onClick={() => closeCartPanel()}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Panel */}
          <div
            className="absolute top-0 right-0 h-full w-[95%] sm:w-[90%] max-w-[400px] bg-[#0a0a0a] border-l border-[#1a1a1a] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'slideInRight 0.3s ease-out' }}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-8">
                <p className="text-sm tracking-[4px] uppercase text-[var(--color-blood-red)] font-bold">Your Cart</p>
                <button
                  onClick={() => closeCartPanel()}
                  className="text-[#888] text-2xl hover:text-[var(--color-blood-red)] transition-colors bg-transparent cursor-pointer"
                >
                  &times;
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-[#666] text-sm">Your cart is empty.</p>
              ) : (
                <>
                  <div className="space-y-6 mb-8">
                    {cart.map((cartItem, idx) => (
                      <div key={idx} className="flex gap-4 border-b border-[#1a1a1a] pb-4">
                        <div className="w-[60px] h-[60px] relative flex-shrink-0 overflow-hidden bg-[#080808]">
                          <Image src={cartItem.img} alt={cartItem.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-[var(--color-text-white)] font-medium">{cartItem.name}</p>
                          <p className="text-xs text-[#666]">{cartItem.color}{cartItem.size ? ` / ${cartItem.size}` : ''}</p>
                          <p className="text-xs text-[#888] mt-1">Qty: {cartItem.quantity} &times; {cartItem.price.toFixed(2)}€</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(cartItem.id, cartItem.color, cartItem.size)}
                          className="text-[#555] text-sm hover:text-[var(--color-blood-red)] transition-colors self-start bg-transparent cursor-pointer"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#1a1a1a] pt-6">
                    <div className="flex justify-between mb-6">
                      <span className="text-sm uppercase tracking-[3px] text-[#888]">Total</span>
                      <span className="text-lg font-bold text-[var(--color-blood-red)]">{getCartTotal().toFixed(2)}€</span>
                    </div>
                    <Link
                      href="/cart"
                      onClick={() => closeCartPanel()}
                      className="block w-full text-center text-sm tracking-[3px] uppercase text-white bg-[var(--color-blood-red)] py-4 hover:bg-[var(--color-accent-red)] transition-colors font-bold"
                    >
                      View Full Cart
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Slide-in animation */}
      <style jsx>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
