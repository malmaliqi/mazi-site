"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/components/CartProvider';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Music', href: '/music' },
    { name: 'Store', href: '/store' },
    { name: 'Shows', href: '/shows' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 bg-[var(--color-bg-black)]/90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-[#111]">
        <div className="font-black text-2xl tracking-[2px] text-[var(--color-text-white)]">
          <Link href="/" onClick={() => setIsOpen(false)}>MA&apos;ZI</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 m-0 p-0 list-none items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={`uppercase text-xs tracking-[3px] transition-all duration-300 ${
                    isActive 
                      ? 'text-[var(--color-blood-red)] font-black' 
                      : 'text-[#999] font-bold hover:text-[var(--color-blood-red)]'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          {cartCount > 0 && (
            <li>
              <Link href="/cart" className="relative text-xl hover:scale-110 transition-transform duration-300 inline-block">
                🛒
                <span className="absolute -top-2 -right-3 bg-[var(--color-blood-red)] text-white text-[9px] font-black w-[18px] h-[18px] rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Toggle & Cart */}
        <div className="flex md:hidden items-center gap-6">
          {cartCount > 0 && (
            <Link href="/cart" className="relative text-xl" onClick={() => setIsOpen(false)}>
              🛒
              <span className="absolute -top-2 -right-3 bg-[var(--color-blood-red)] text-white text-[9px] font-black w-[16px] h-[16px] rounded-full flex items-center justify-center leading-none">
                {cartCount}
              </span>
            </Link>
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--color-text-white)] text-2xl focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[45] bg-black/95 backdrop-blur-md md:hidden flex flex-col items-center justify-center gap-10"
          style={{ animation: 'fadeInSlow 0.4s ease-out' }}
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black uppercase tracking-[5px] text-[#999] hover:text-[var(--color-blood-red)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
