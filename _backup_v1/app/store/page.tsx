"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/CartProvider';

type StoreItem = { type: string; img: string; backImg?: string; name: string; color: string; price: string };

const storeItems: StoreItem[] = [
  { type: 'tee', img: '/MAZI merch 1.png', name: 'MA\'ZI - TEE', color: '(MA\'RED)', price: '25.00€' },
  { type: 'tee', img: '/MAZI merch 2.png', name: 'MA\'ZI - TEE', color: '(MA\'GREY)', price: '25.00€' },
  { type: 'tee', img: '/MAZI Merch 3.png', name: 'MA\'ZI - TEE', color: '(MA\'PINK)', price: '30.00€' },
  { type: 'tee', img: '/MAZI Merch 4.png', name: 'MA\'ZI - TEE', color: '(MA\'WHITE)', price: '25.00€' },
  { type: 'cd', img: '/MALBUM ERDHEN VAMPIRAT FRONT.png', backImg: '/malbum erdhen vampirat BACK.png', name: 'ERDHEN VAMPIRAT', color: '(CD)', price: '15.00€' },
  { type: 'vinyl', img: '/MALBUM ERDHEN VAMPIRAT FRONT.png', backImg: '/malbum erdhen vampirat BACK.png', name: 'ERDHEN VAMPIRAT', color: '(LIMITED VINYL)', price: '35.00€' }
];

export default function Store() {
  const { addToCart, getCartCount } = useCart();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showBackInLightbox, setShowBackInLightbox] = useState(false);
  const [quantities, setQuantities] = useState<number[]>(Array(storeItems.length).fill(1));

  const updateQuantity = (index: number, delta: number) => {
    setQuantities(prev => {
      const newQs = [...prev];
      newQs[index] = Math.max(1, newQs[index] + delta);
      return newQs;
    });
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % storeItems.length);
      setShowBackInLightbox(false);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + storeItems.length) % storeItems.length);
      setShowBackInLightbox(false);
    }
  };

  return (
    <div className="bg-[#0b0b0b] min-h-screen py-24 px-5 relative">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-[#222] pb-6">
          <div className="hidden md:block md:w-32"></div> {/* spacer */}
          <h2 className="text-4xl md:text-5xl text-[var(--color-blood-red)] tracking-[4px] font-black m-0 mb-6 md:mb-0">MA&apos;ZI STORE</h2>
          <div className="w-full md:w-32 flex justify-center md:justify-end">
            <Link href="/cart" className="bg-[#111] px-6 py-3 rounded-full border border-[#333] hover:border-[var(--color-blood-red)] text-[var(--color-text-white)] hover:text-[var(--color-blood-red)] transition-all flex items-center gap-3 shadow-lg">
              <span className="uppercase font-bold tracking-widest text-sm">Cart</span>
              {getCartCount() > 0 && (
                <span className="bg-[var(--color-blood-red)] text-white text-xs px-2.5 py-1 rounded-full font-black animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
        </div>

        <h3 className="text-2xl text-[var(--color-text-white)] border-b border-[#333] pb-3 mb-8 tracking-wide text-left">MA&apos;ZI MERCH</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {storeItems.slice(0, 4).map((item, localI) => {
            const i = localI; // index in main array
            return (
              <div key={i} className="bg-[var(--color-dark-grey)] p-6 rounded-lg border border-[#222] transition-transform duration-300 hover:-translate-y-2 hover:border-[#333]">
                <div
                  className={`w-full aspect-square relative mb-6 rounded overflow-hidden cursor-pointer ${item.color?.includes('CD') || item.color?.includes('VINYL') ? 'flex items-center justify-center p-10 bg-black' : ''}`}
                  onClick={() => setLightboxIndex(i)}
                >
                  <Image src={item.img} alt={item.name} fill className={`${item.color?.includes('CD') || item.color?.includes('VINYL') ? 'object-contain scale-[0.6]' : 'object-cover'} bg-[#1a1a1a] hover:scale-105 transition-transform duration-500`} />
                </div>
                <h3 className="text-xl font-bold m-0 text-[var(--color-text-white)]">
                  {item.name}
                  {item.color && <span className="block mt-1">{item.color}</span>}
                </h3>
                <div className="flex items-center justify-between mb-5 mt-4">
                  <p className="text-[var(--color-blood-red)] font-black text-lg m-0">{item.price}</p>
                  <div className="flex items-center bg-[#111] border border-[#222] rounded overflow-hidden">
                    <button
                      onClick={() => updateQuantity(i, -1)}
                      className="w-8 h-8 flex items-center justify-center text-[#888] hover:text-white hover:bg-[#222] transition-colors leading-none"
                    >
                      &minus;
                    </button>
                    <span className="w-8 text-center text-[var(--color-text-white)] font-bold text-sm">
                      {quantities[i]}
                    </span>
                    <button
                      onClick={() => updateQuantity(i, 1)}
                      className="w-8 h-8 flex items-center justify-center text-[#888] hover:text-white hover:bg-[#222] transition-colors leading-none"
                    >
                      &#43;
                    </button>
                  </div>
                </div>
                <div className="flex gap-2 w-full">
                  <button
                    onClick={() => {
                      addToCart({ id: `store-${i}`, name: item.name, color: item.color, price: parseFloat(item.price.replace('$', '')), img: item.img }, quantities[i]);
                      alert(`Added ${quantities[i]}x ${item.name} ${item.color} to your Cart!`);
                    }}
                    className="flex-1 px-3 py-2.5 bg-[var(--color-blood-red)] text-white text-xs font-bold uppercase rounded hover:bg-[var(--color-accent-red)] transition-colors shadow-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="text-2xl text-[var(--color-text-white)] border-b border-[#333] pb-3 mb-8 tracking-wide text-left">MA&apos;ZI MUSIC (CD / Vinyl)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {storeItems.slice(4).map((item, localI) => {
            const i = localI + 4; // Absolute index in array mapping to states
            return (
              <div key={i} className="bg-[var(--color-dark-grey)] p-6 rounded-lg border border-[#222] transition-transform duration-300 hover:-translate-y-2 hover:border-[#333]">
                <div
                  className="w-full aspect-square relative mb-8 cursor-pointer group/img"
                  onClick={() => { setLightboxIndex(i); setShowBackInLightbox(false); }}
                >
                  {item.color?.includes('VINYL') ? (
                    <div className="w-full h-full rounded-full bg-[#0a0a0a] border-[4px] border-[#040404] shadow-[0_15px_35px_rgba(0,0,0,0.9)] relative flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-[6%] rounded-full border border-[#161616] pointer-events-none"></div>
                      <div className="absolute inset-[14%] rounded-full border border-[#111] pointer-events-none"></div>
                      <div className="absolute inset-[24%] rounded-full border border-[#1a1a1a] pointer-events-none opacity-50"></div>
                      <div className="absolute inset-[32%] rounded-full border border-[#111] pointer-events-none"></div>
                      <div className="relative w-[38%] h-[38%] rounded-full overflow-hidden z-10 shadow-[0_0_10px_rgba(0,0,0,0.8)] bg-black group-hover/img:scale-105 transition-transform duration-500">
                        <Image src={item.img} alt={item.name} fill className={`object-cover ${item.backImg ? 'opacity-100 group-hover/img:opacity-0' : ''} transition-all duration-500 z-10`} />
                        {item.backImg && (
                          <Image src={item.backImg} alt={`${item.name} Back`} fill className="object-cover opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 absolute inset-0 z-20" />
                        )}
                      </div>
                      <div className="absolute w-[4%] h-[4%] bg-[var(--color-dark-grey)] rounded-full z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#000] shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)]"></div>
                    </div>
                  ) : item.color?.includes('CD') ? (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#e0e0e0] via-[#fff] to-[#bbb] p-[2px] relative flex items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.9)] group-hover/img:shadow-[0_15px_45px_rgba(255,255,255,0.15)] transition-shadow duration-300">
                      <div className="w-full h-full rounded-full relative overflow-hidden bg-black">
                        <Image src={item.img} alt={item.name} fill className={`object-cover ${item.backImg ? 'opacity-100 group-hover/img:opacity-0' : ''} group-hover/img:scale-[1.03] transition-all duration-500 z-10`} />
                        {item.backImg && (
                          <Image src={item.backImg} alt={`${item.name} Back`} fill className="object-cover opacity-0 group-hover/img:opacity-100 group-hover/img:scale-[1.03] transition-all duration-500 absolute inset-0 z-20" />
                        )}
                        <div className="absolute w-[20%] h-[20%] bg-[var(--color-dark-grey)] rounded-full z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[3px] border-white/20 shadow-[0_0_10px_rgba(0,0,0,0.6),inset_0_0_15px_rgba(0,0,0,0.9)] flex items-center justify-center">
                          <div className="w-[30%] h-[30%] rounded-full bg-transparent border border-white/10"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full rounded overflow-hidden relative">
                      <Image src={item.img} alt={item.name} fill className={`object-cover ${item.backImg ? 'opacity-100 group-hover/img:opacity-0 hover:scale-105' : 'hover:scale-105'} transition-all duration-500 z-10`} />
                      {item.backImg && (
                        <Image src={item.backImg} alt={`${item.name} Back`} fill className="object-cover opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 absolute inset-0 z-20" />
                      )}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold m-0 text-[var(--color-text-white)]">
                  {item.name}
                  {item.color && <span className="block mt-1">{item.color}</span>}
                </h3>
                <div className="flex items-center justify-between mb-5 mt-4">
                  <p className="text-[var(--color-blood-red)] font-black text-lg m-0">{item.price}</p>
                  <div className="flex items-center bg-[#111] border border-[#222] rounded overflow-hidden">
                    <button
                      onClick={() => updateQuantity(i, -1)}
                      className="w-8 h-8 flex items-center justify-center text-[#888] hover:text-white hover:bg-[#222] transition-colors leading-none"
                    >
                      &minus;
                    </button>
                    <span className="w-8 text-center text-[var(--color-text-white)] font-bold text-sm">
                      {quantities[i]}
                    </span>
                    <button
                      onClick={() => updateQuantity(i, 1)}
                      className="w-8 h-8 flex items-center justify-center text-[#888] hover:text-white hover:bg-[#222] transition-colors leading-none"
                    >
                      &#43;
                    </button>
                  </div>
                </div>
                <div className="flex gap-2 w-full">
                  <button
                    onClick={() => {
                      addToCart({ id: `store-${i}`, name: item.name, color: item.color, price: parseFloat(item.price.replace('$', '')), img: item.img }, quantities[i]);
                      alert(`Added ${quantities[i]}x ${item.name} ${item.color} to your Cart!`);
                    }}
                    className="flex-1 px-3 py-2.5 bg-[var(--color-blood-red)] text-white text-xs font-bold uppercase rounded hover:bg-[var(--color-accent-red)] transition-colors shadow-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center backdrop-blur-sm"
          onClick={() => { setLightboxIndex(null); setShowBackInLightbox(false); }}
        >
          <span className="absolute top-8 right-10 text-white text-5xl font-bold cursor-pointer hover:text-[var(--color-blood-red)] transition-colors">&times;</span>
          <button onClick={prevImage} className="absolute left-5 md:left-10 text-white text-3xl p-4 bg-black/50 hover:bg-[var(--color-blood-red)] rounded transition-colors z-[101]">&#10094;</button>

          <div className="relative w-[90%] md:w-[60%] aspect-square md:aspect-auto md:h-[80vh]">
            <Image
              src={showBackInLightbox && storeItems[lightboxIndex!].backImg ? storeItems[lightboxIndex!].backImg! : storeItems[lightboxIndex!].img}
              alt="Store" fill className="object-contain drop-shadow-2xl animate-[zoomIn_0.3s_ease]"
            />
            {storeItems[lightboxIndex!].backImg && (
              <button
                onClick={(e) => { e.stopPropagation(); setShowBackInLightbox(!showBackInLightbox); }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[var(--color-blood-red)] text-white px-8 py-3 rounded-full text-xs font-black tracking-[3px] uppercase hover:bg-white hover:text-[var(--color-blood-red)] transition-colors shadow-[0_4px_15px_rgba(138,3,3,0.3)] z-[102]"
              >
                Flip to {showBackInLightbox ? 'Front' : 'Back'}
              </button>
            )}
          </div>

          <button onClick={nextImage} className="absolute right-5 md:right-10 text-white text-3xl p-4 bg-black/50 hover:bg-[var(--color-blood-red)] rounded transition-colors z-[101]">&#10095;</button>
        </div>
      )}
    </div>
  );
}
