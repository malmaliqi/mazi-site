"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type CartItem = {
  id: string;
  name: string;
  color?: string;
  size?: string;
  price: number; 
  img: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity: number) => void;
  removeFromCart: (id: string, color?: string, size?: string) => void;
  updateQuantity: (id: string, color: string | undefined, size: string | undefined, delta: number) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  clearCart: () => void;
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
      const existing = prev.find(i => i.id === item.id && i.color === item.color && i.size === item.size);
      if (existing) {
        return prev.map(i => 
          i.id === item.id && i.color === item.color && i.size === item.size
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeFromCart = (id: string, color?: string, size?: string) => {
    setCart((prev) => prev.filter(i => !(i.id === id && i.color === color && i.size === size)));
  };

  const updateQuantity = (id: string, color: string | undefined, size: string | undefined, delta: number) => {
    setCart((prev) => prev.map(i => {
      if (i.id === id && i.color === color && i.size === size) {
        const newQ = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQ };
      }
      return i;
    }));
  };

  const getCartTotal = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const getCartCount = () => {
    if (!isMounted) return 0;
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getCartTotal, getCartCount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
