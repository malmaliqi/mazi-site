"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Music', href: '/music' },
    { name: 'Store', href: '/store' },
    { name: 'Shows', href: '/shows' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-5 bg-[var(--color-bg-black)]/90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-[#111]">
      <div className="font-black text-2xl tracking-[2px] text-[var(--color-text-white)]">
        <Link href="/">MA&apos;ZI</Link>
      </div>
      <ul className="hidden md:flex gap-8 m-0 p-0 list-none">
        {navLinks.map((link) => {
          // Strict exact match for the current route
          const isActive = pathname === link.href;
          
          return (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className={`uppercase text-sm transition-all duration-300 ${
                  isActive 
                    ? 'text-[var(--color-blood-red)] font-black underline underline-offset-8 decoration-2' 
                    : 'text-[var(--color-text-white)] font-bold hover:text-[var(--color-blood-red)]'
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
