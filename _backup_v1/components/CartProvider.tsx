"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type CartItem = {
  id: string;
  name: string;
  color?: string;
  price: number; 
  img: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity: number) => void;
  removeFromCart: (id: string, color?: string) => void;
  updateQuantity: (id: string, color: string | undefined, delta: number) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("mazi_cart");
    if (saved) {
      try { setCart(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("mazi_cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (item: Omit<CartItem, "quantity">, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find(i => i.id === item.id && i.color === item.color);
      if (existing) {
        return prev.map(i => 
          i.id === item.id && i.color === item.color 
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeFromCart = (id: string, color?: string) => {
    setCart((prev) => prev.filter(i => !(i.id === id && i.color === color)));
  };

  const updateQuantity = (id: string, color: string | undefined, delta: number) => {
    setCart((prev) => prev.map(i => {
      if (i.id === id && i.color === color) {
        const newQ = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQ };
      }
      return i;
    }));
  };

  const getCartTotal = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const getCartCount = () => {
    // Avoid hydration mismatch by rendering 0 until mounted
    if (!isMounted) return 0;
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getCartTotal, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
